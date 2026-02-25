"use client";
import { useState, useEffect, useRef } from "react";

const projectTypes = [
  { label: "Web Platform", icon: "🌐" },
  { label: "Software App", icon: "📱" },
  { label: "Digital Growth", icon: "📣" },
  { label: "Brand Design", icon: "🎨" },
];

const budgets = [
  { tier: "Tier 1", range: "$500 – $2K" },
  { tier: "Tier 2", range: "$2K – $5K" },
  { tier: "Tier 3", range: "$5K – $15K" },
  { tier: "Tier 4", range: "$15K+" },
];

type Step = 1 | 2 | 3 | 4;

export default function Contact() {
  const [step, setStep] = useState<Step>(1);
  const [submitted, setSubmitted] = useState(false);
  const [selectedType, setSelectedType] = useState("");
  const [selectedBudget, setSelectedBudget] = useState("");
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const stepTitles = {
    1: "What are we building?",
    2: "What is your budget?",
    3: "Tell us about you.",
    4: "Final details.",
  };

  const stepDesc = {
    1: "Select the primary category that fits your vision.",
    2: "Define the investment level for this project.",
    3: "Help us get to know you better.",
    4: "Anything else we should know?",
  };

  if (submitted) {
    return (
      <section id="contact" className="py-32 relative flex items-center justify-center min-h-screen">
        <div className="text-center animate-stagger">
          <div className="flex justify-center mb-8">
            <div
              className="w-24 h-24 rounded-full flex items-center justify-center"
              style={{ background: "rgba(0,245,212,0.15)", border: "2px solid var(--cyan)" }}
            >
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--cyan)" strokeWidth="2.5">
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </div>
          </div>
          <div className="badge mx-auto mb-6">Inquiry Received</div>
          <h2
            className="font-extrabold mb-4"
            style={{ fontSize: "clamp(2rem, 6vw, 4.5rem)" }}
          >
            YOUR JOURNEY{" "}
            <span style={{ color: "var(--cyan)" }}>STARTS NOW</span>
          </h2>
          <p className="mb-8 text-sm" style={{ color: "var(--text-secondary)" }}>
            Thank you for reaching out. Our team is already reviewing your details.
            <br />
            Expect a <strong style={{ color: "var(--text-primary)" }}>personal response</strong> within 24 hours.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="#work" className="btn-primary">Explore Our Work →</a>
            <button className="btn-outline" onClick={() => { setSubmitted(false); setStep(1); setSelectedType(""); setSelectedBudget(""); setForm({ name: "", email: "", company: "", message: "" }); }}>
              Back to Home
            </button>
          </div>
          <div className="flex gap-8 justify-center mt-12">
            {["Secure Intake", "Quick Response", "Elite Quality"].map((label) => (
              <div key={label} className="flex items-center gap-2 text-xs font-mono" style={{ color: "var(--text-secondary)" }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--cyan)" strokeWidth="2">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                {label}
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-32 relative" ref={ref}>
      <div
        className="blob"
        style={{ width: "500px", height: "500px", background: "var(--cyan)", top: "50%", left: "50%", transform: "translate(-50%,-50%)", opacity: 0.04 }}
      />

      <div className="max-w-6xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="reveal text-center mb-16">
          <span className="badge mb-6">Final CTA</span>
          <h2
            className="font-extrabold mt-6"
            style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
          >
            Start a{" "}
            <span style={{ color: "var(--cyan)", fontStyle: "italic", fontWeight: 400 }}>Project</span>
          </h2>
          <p className="mt-3 text-sm" style={{ color: "var(--text-secondary)" }}>
            Structure your vision with our expert team. Takes less than 2 minutes.
          </p>
        </div>

        <div className="reveal grid lg:grid-cols-3 gap-8">
          {/* Sidebar */}
          <div className="space-y-6">
            {/* Progress steps */}
            <div className="glow-card rounded-2xl p-6">
              <h3 className="text-sm font-bold mb-6 font-mono" style={{ color: "var(--text-secondary)" }}>
                PROJECT INQUIRY
              </h3>
              <div className="space-y-4">
                {[
                  { num: 1, label: "Project Type", val: selectedType || "Awaiting selection" },
                  { num: 2, label: "Budget Range", val: selectedBudget || "Awaiting selection" },
                  { num: 3, label: "Your Details", val: form.name || "Awaiting info" },
                  { num: 4, label: "Final Details", val: step === 4 ? "In progress" : "Final step" },
                ].map((s) => (
                  <div key={s.num} className="flex items-start gap-3">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5 transition-all duration-300"
                      style={{
                        background: step > s.num ? "var(--cyan)" : step === s.num ? "rgba(0,245,212,0.2)" : "rgba(255,255,255,0.05)",
                        color: step > s.num ? "#080c10" : step === s.num ? "var(--cyan)" : "var(--text-secondary)",
                        border: step === s.num ? "1px solid var(--cyan)" : "1px solid transparent",
                      }}
                    >
                      {step > s.num ? "✓" : s.num}
                    </div>
                    <div>
                      <div className="text-sm font-bold" style={{ color: step >= s.num ? "var(--text-primary)" : "var(--text-secondary)" }}>
                        {s.label}
                      </div>
                      <div className="text-xs font-mono mt-0.5" style={{ color: "var(--text-secondary)" }}>
                        {step > s.num ? (s.num === 1 ? selectedType : s.num === 2 ? selectedBudget : s.num === 3 ? form.name : s.val) : s.val}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Agency note */}
            <div
              className="rounded-2xl p-6"
              style={{ background: "rgba(0,245,212,0.05)", border: "1px solid rgba(0,245,212,0.15)" }}
            >
              <div className="text-xs font-mono mb-2" style={{ color: "var(--cyan)" }}>AGENCY NOTE</div>
              <p className="text-sm italic" style={{ color: "var(--text-secondary)" }}>
                "We typically respond to new project inquiries within 24 business hours. Let's build something remarkable."
              </p>
            </div>
          </div>

          {/* Main form panel */}
          <div className="lg:col-span-2">
            <div className="glow-card rounded-2xl p-8 min-h-96">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <div className="text-xs font-mono mb-2" style={{ color: "var(--cyan)" }}>
                    PHASE: STEP {step}/4
                  </div>
                  <h3 className="text-2xl font-bold">{stepTitles[step]}</h3>
                  <p className="text-sm mt-1" style={{ color: "var(--text-secondary)" }}>
                    {stepDesc[step]}
                  </p>
                </div>
                {/* Step indicator */}
                <div className="flex gap-1.5">
                  {[1, 2, 3, 4].map((s) => (
                    <div
                      key={s}
                      className="h-1 rounded-full transition-all duration-300"
                      style={{
                        width: s === step ? "24px" : "8px",
                        background: s <= step ? "var(--cyan)" : "rgba(255,255,255,0.1)",
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Step 1 — Project type */}
              {step === 1 && (
                <div className="grid grid-cols-2 gap-3">
                  {projectTypes.map((pt) => (
                    <button
                      key={pt.label}
                      onClick={() => setSelectedType(pt.label)}
                      className="rounded-xl p-4 text-left transition-all duration-200 flex items-center gap-3 font-medium"
                      style={{
                        background: selectedType === pt.label ? "var(--cyan)" : "rgba(255,255,255,0.04)",
                        color: selectedType === pt.label ? "#080c10" : "var(--text-primary)",
                        border: selectedType === pt.label ? "1px solid var(--cyan)" : "1px solid var(--border)",
                      }}
                    >
                      <span className="text-2xl">{pt.icon}</span>
                      <span className="text-sm font-semibold">{pt.label}</span>
                    </button>
                  ))}
                </div>
              )}

              {/* Step 2 — Budget */}
              {step === 2 && (
                <div className="space-y-3">
                  {budgets.map((b) => (
                    <button
                      key={b.tier}
                      onClick={() => setSelectedBudget(b.range)}
                      className="w-full rounded-xl p-4 text-left transition-all duration-200 flex items-center justify-between"
                      style={{
                        background: selectedBudget === b.range ? "rgba(0,245,212,0.1)" : "rgba(255,255,255,0.03)",
                        color: selectedBudget === b.range ? "var(--cyan)" : "var(--text-primary)",
                        border: selectedBudget === b.range ? "1px solid var(--cyan)" : "1px solid var(--border)",
                      }}
                    >
                      <span className="text-xs font-mono" style={{ color: "var(--text-secondary)" }}>{b.tier}</span>
                      <span className="font-bold">{b.range}</span>
                    </button>
                  ))}
                  <div
                    className="rounded-xl p-4 mt-4"
                    style={{ background: "rgba(255,255,255,0.03)", border: "1px solid var(--border)" }}
                  >
                    <p className="text-xs" style={{ color: "var(--text-secondary)" }}>
                      <span style={{ color: "var(--cyan)" }}>✓ </span>
                      Transparency in budget allows us to prioritize features that drive the highest ROI for your brand from day one.
                    </p>
                  </div>
                </div>
              )}

              {/* Step 3 — Contact details */}
              {step === 3 && (
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-mono mb-2 block" style={{ color: "var(--text-secondary)" }}>
                        Your Name *
                      </label>
                      <input
                        className="input-field"
                        placeholder="John Smith"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="text-xs font-mono mb-2 block" style={{ color: "var(--text-secondary)" }}>
                        Email Address *
                      </label>
                      <input
                        className="input-field"
                        placeholder="john@company.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-mono mb-2 block" style={{ color: "var(--text-secondary)" }}>
                      Company / Business Name
                    </label>
                    <input
                      className="input-field"
                      placeholder="Acme Corp"
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="text-xs font-mono mb-2 block" style={{ color: "var(--text-secondary)" }}>
                      Phone / WhatsApp (optional)
                    </label>
                    <input
                      className="input-field"
                      placeholder="+1 234 567 8900"
                    />
                  </div>
                </div>
              )}

              {/* Step 4 — Message */}
              {step === 4 && (
                <div className="space-y-4">
                  <div>
                    <label className="text-xs font-mono mb-2 block" style={{ color: "var(--text-secondary)" }}>
                      Describe Your Project *
                    </label>
                    <textarea
                      className="input-field"
                      placeholder="Tell us about your business, what you're looking to build, your goals, and any specific requirements..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="text-xs font-mono mb-2 block" style={{ color: "var(--text-secondary)" }}>
                      Preferred Start Date (optional)
                    </label>
                    <input
                      className="input-field"
                      placeholder="ASAP / Next Month / Q2 2025"
                    />
                  </div>
                </div>
              )}

              {/* Navigation */}
              <div className="flex items-center justify-between mt-8 pt-6" style={{ borderTop: "1px solid var(--border)" }}>
                <button
                  className="btn-outline text-sm"
                  onClick={() => step > 1 && setStep((step - 1) as Step)}
                  style={{ opacity: step === 1 ? 0.3 : 1, pointerEvents: step === 1 ? "none" : "auto" }}
                >
                  ← Back
                </button>

                {step < 4 ? (
                  <button
                    className="btn-primary"
                    onClick={() => {
                      if (step === 1 && !selectedType) return;
                      if (step === 2 && !selectedBudget) return;
                      setStep((step + 1) as Step);
                    }}
                  >
                    {step === 1 ? "Continue to Budget" : step === 2 ? "Continue to Contact" : "Continue to Details"}
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </button>
                ) : (
                  <button
                    className="btn-primary"
                    onClick={handleSubmit}
                    disabled={!form.name || !form.email || !form.message}
                    style={{ opacity: !form.name || !form.email || !form.message ? 0.5 : 1 }}
                  >
                    Submit Inquiry
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
