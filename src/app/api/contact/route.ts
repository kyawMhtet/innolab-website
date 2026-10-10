import { Resend } from "resend";
import { NextResponse } from "next/server";

const submissions = new Map<string, number>();
const LIMIT_MS = 60 * 60 * 1000; // 1 hour per IP
const MAX_FIELD = 2000;

// Enquiry fields land straight in an HTML email, so escape before interpolating.
function esc(value: unknown) {
  return String(value ?? "")
    .slice(0, MAX_FIELD)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(req: Request) {
  // Built per request: a missing key throws in the Resend constructor, which at
  // module scope would stop the route from loading at all.
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;
  const to = process.env.RESEND_TO_EMAIL;
  if (!apiKey || !from || !to) {
    console.error("Contact form misconfigured: missing RESEND_API_KEY, RESEND_FROM_EMAIL or RESEND_TO_EMAIL");
    return NextResponse.json({ error: "Email service unavailable." }, { status: 500 });
  }
  const resend = new Resend(apiKey);

  const ip = req.headers.get("x-forwarded-for")?.split(",")[0].trim() ?? "unknown";
  const last = submissions.get(ip);
  if (last && Date.now() - last < LIMIT_MS) {
    return NextResponse.json({ error: "Too many requests. Please try again later." }, { status: 429 });
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = esc(body.name);
  const email = esc(body.email);
  const company = esc(body.company);
  const phone = esc(body.phone);
  const message = esc(body.message);
  const startDate = esc(body.startDate);
  const projectType = esc(body.projectType);
  const budget = esc(body.budget);

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Name, email and message are required." }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  const row = (label: string, value: string) =>
    value
      ? `<tr>
          <td style="padding:10px 16px;font-size:12px;font-weight:600;color:#888;white-space:nowrap;vertical-align:top;width:130px">${label}</td>
          <td style="padding:10px 16px;font-size:14px;color:#1a1a1a;word-break:break-word">${value}</td>
        </tr>`
      : "";

  const html = `
    <!DOCTYPE html>
    <html>
    <body style="margin:0;padding:0;background:#f4f4f5;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif">
      <table width="100%" cellpadding="0" cellspacing="0" style="padding:32px 16px">
        <tr><td align="center">
          <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%">

            <!-- Header -->
            <tr>
              <td style="background:#0f0f0f;padding:28px 32px;border-radius:12px 12px 0 0">
                <p style="margin:0;font-size:11px;font-weight:600;letter-spacing:2px;color:#ffba00;text-transform:uppercase">New Enquiry</p>
                <h1 style="margin:8px 0 0;font-size:22px;color:#ffffff;font-weight:700">${name}</h1>
                <p style="margin:4px 0 0;font-size:13px;color:#888">${email}</p>
              </td>
            </tr>

            <!-- Details -->
            <tr>
              <td style="background:#ffffff;border-left:1px solid #e5e7eb;border-right:1px solid #e5e7eb">
                <table width="100%" cellpadding="0" cellspacing="0">
                  ${row("Project Type", projectType)}
                  ${row("Budget", budget)}
                  ${row("Company", company)}
                  ${row("Phone", phone)}
                  ${row("Start Date", startDate)}
                </table>
              </td>
            </tr>

            <!-- Divider -->
            <tr>
              <td style="background:#ffffff;padding:0 16px;border-left:1px solid #e5e7eb;border-right:1px solid #e5e7eb">
                <hr style="border:none;border-top:1px solid #e5e7eb;margin:0">
              </td>
            </tr>

            <!-- Message -->
            <tr>
              <td style="background:#ffffff;padding:20px 32px;border-left:1px solid #e5e7eb;border-right:1px solid #e5e7eb;border-radius:0 0 12px 12px">
                <p style="margin:0 0 8px;font-size:11px;font-weight:600;letter-spacing:1.5px;color:#888;text-transform:uppercase">Message</p>
                <p style="margin:0;font-size:14px;color:#1a1a1a;line-height:1.7;white-space:pre-wrap">${message}</p>
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td style="padding:20px 0;text-align:center">
                <p style="margin:0;font-size:11px;color:#aaa">Sent via innolabdigitalsolutions.com contact form</p>
              </td>
            </tr>

          </table>
        </td></tr>
      </table>
    </body>
    </html>
  `;

  const { error } = await resend.emails.send({
    from,
    to,
    replyTo: String(body.email ?? "").slice(0, MAX_FIELD),
    subject: `New enquiry from ${name}${projectType ? ` - ${projectType}` : ""}`,
    html,
  });

  if (error) {
    console.error("Resend error:", error.message);
    return NextResponse.json(
      {
        error: "Could not send your message. Please try again.",
        ...(process.env.NODE_ENV === "development" ? { detail: error.message } : {}),
      },
      { status: 500 },
    );
  }

  // Only start the cooldown once the enquiry is actually delivered.
  submissions.set(ip, Date.now());

  return NextResponse.json({ success: true });
}
