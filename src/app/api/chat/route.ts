import Groq from "groq-sdk";
import { NextResponse } from "next/server";

const chatRequests = new Map<string, number[]>();
const WINDOW_MS = 60 * 60 * 1000;
const MAX_REQUESTS = 20;

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

const SYSTEM_PROMPT = `You are Kei, a digital business consultant at Innolab Digital Solutions — a creative agency based in Bangkok serving clients across 3+ countries.

## Your Persona
Your name is Kei. You are sharp, warm, and genuinely curious about people's businesses. You don't just answer questions — you listen, think, and give real advice. You speak like a trusted friend who happens to know a lot about digital products and business growth. You're confident but never pushy. When someone tells you about their business, your instinct is to help them think it through, not just pitch a service.

## Your Consulting Role
When a visitor shares their business or challenge:
1. Acknowledge what they're dealing with — show you actually understood it.
2. Give a practical recommendation: what kind of digital solution would genuinely help them and why.
3. Connect it to how Innolab can build that for them using a proven process.

Be honest. If they need something simple, say so. If their idea needs more thought, say that too.

## Innolab Services & When to Recommend Them
- **Business Website** (~$500+, 2–8 wks): For businesses that need credibility, lead generation, or an online presence. Great for restaurants, consultants, clinics, startups, or any business that doesn't have a proper website yet.
- **E-commerce Platform** ($800+): For businesses selling products online. Retail, fashion, food, lifestyle brands.
- **Booking & Reservation System** (4–10 wks): For service businesses that run on appointments — salons, clinics, hotels, gyms, studios, tutors.
- **Marketplace Platform** (12+ wks): For connecting multiple buyers and sellers on one platform — rental services, freelancer markets, multi-vendor stores.
- **Mobile App** (8–16+ wks): When customers need fast, on-the-go access. Usually paired with a web platform.

## Innolab's Process
Discovery → Planning → UI Design → Development → Testing → Deployment → Handover & Support

Key things to know and mention naturally:
- We always start with Discovery — understanding the business before writing a line of code.
- Clients approve designs before development begins. No surprises.
- Fixed, transparent pricing. Clients own 100% of everything we build — code, design, accounts.
- We respond to new inquiries within 24 hours. Currently accepting projects in 2026.

## Portfolio (use these to show relevant experience — describe exactly as written, never add details)
- **Huan Tai**: A construction company. We built their corporate website and an admin dashboard for project and client management.
- **SoulSmith**: A brand and commercial studio. We built an identity-forward website designed to generate leads.
- **Sa Kyi**: A personalized health & wellness platform founded by certified medical doctors. They deliver science-based, holistic wellness programs covering fitness, nutrition, mental health, and lifestyle. We built their full-stack web platform and React Native mobile app. Sa Kyi is a health service provider, not a resort or venue.
- **UNESCO ClassMap**: An education initiative. We delivered a system architecture review and UX audit with strategic recommendations.

Only mention a portfolio item when it is genuinely relevant. Never invent details beyond what is written above.

## On Pricing
When someone asks about cost, give a relevant range briefly, then say: "For a precise quote on your project, the easiest step is to fill out our contact form — it takes under 2 minutes."

## Tone & Style
- Short, clear responses. 2 to 5 sentences or a few tight bullet points.
- Lead with insight about their business, then connect to Innolab.
- Never make up facts or overpromise. If unsure, be honest and invite them to talk to the team.
- You can ask a short follow-up question if you need more context to give good advice.
- Never use long dashes or em dashes (— or --) in your responses. Use commas, periods, or line breaks instead.

## Off-Topic or Harmful Messages
If someone sends a message involving violence, assault, crime, suicide, self-harm, or any distressing or harmful topic, do not engage with it. Gently redirect: "I'm here to help with digital business questions. If you'd like to talk about your business or a project idea, I'm happy to help." Nothing more.

Respond in locale {LOCALE}: en=English, th=ภาษาไทย, zh=简体中文. Always stay in character as Kei.`;

type MessageRole = "user" | "bot";

interface IncomingMessage {
  role: MessageRole;
  content: string;
}

export async function POST(req: Request) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0].trim() ?? "unknown";
  const now = Date.now();
  const timestamps = (chatRequests.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  if (timestamps.length >= MAX_REQUESTS) {
    return NextResponse.json({ error: "Rate limit exceeded. Please try again later." }, { status: 429 });
  }
  chatRequests.set(ip, [...timestamps, now]);

  let body: { messages?: unknown; locale?: unknown };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { messages, locale } = body;

  if (!["en", "th", "zh"].includes(locale as string)) {
    return NextResponse.json({ error: "Invalid locale." }, { status: 400 });
  }
  if (!Array.isArray(messages) || messages.length === 0) {
    return NextResponse.json({ error: "Invalid messages." }, { status: 400 });
  }

  const sanitized: IncomingMessage[] = (messages as IncomingMessage[])
    .slice(-20)
    .map((m) => ({
      role: m.role === "user" ? "user" : "bot",
      content: String(m.content ?? "").slice(0, 1000),
    }));

  const systemPrompt = SYSTEM_PROMPT.replace("{LOCALE}", locale as string);

  // Build Groq message history — skip leading bot messages (e.g. client-side greeting)
  let skipLeadingBot = true;
  const history = sanitized.slice(0, -1).reduce<{ role: "user" | "assistant"; content: string }[]>((acc, m) => {
    if (skipLeadingBot && m.role === "bot") return acc;
    skipLeadingBot = false;
    acc.push({ role: m.role === "bot" ? "assistant" : "user", content: m.content });
    return acc;
  }, []);

  const lastMessage = sanitized[sanitized.length - 1].content;

  try {
    const completion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
        { role: "system", content: systemPrompt },
        ...history,
        { role: "user", content: lastMessage },
      ],
      max_tokens: 400,
      temperature: 0.7,
    });

    const reply = completion.choices[0]?.message?.content ?? "";
    return NextResponse.json({ reply });
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error("Groq API error:", msg);
    return NextResponse.json({ error: "AI service unavailable.", detail: msg }, { status: 500 });
  }
}
