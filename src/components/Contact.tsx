"use client";
import { useState, useEffect, useRef } from "react";
import { useLocale } from "./LocaleContext";

type Step = 1 | 2 | 3 | 4;

export default function Contact() {
  const [step, setStep] = useState<Step>(1);
  const [submitted, setSubmitted] = useState(false);
  const [selectedType, setSelectedType] = useState("");
  const [selectedBudget, setSelectedBudget] = useState("");
  const [form, setForm] = useState({ name: "", email: "", company: "", phone: "", message: "", startDate: "" });
  const [errors, setErrors] = useState<{name?: 'reqName'; email?: 'reqEmail' | 'invEmail'; message?: 'reqMessage'}>({});
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const ref = useRef<HTMLDivElement>(null);
  const { t } = useLocale();
  const c = t.contact;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!submitted || !ref.current) return;
    let leftViewport = false;
    const obs = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) {
        leftViewport = true;
      } else if (leftViewport) {
        setSubmitted(false);
        setStep(1);
        setSelectedType("");
        setSelectedBudget("");
        setForm({ name: "", email: "", company: "", phone: "", message: "", startDate: "" });
      }
    }, { threshold: 0.1 });
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [submitted]);

  if (submitted) {
    return (
      <section id="contact" className="py-20 sm:py-32 relative flex items-center justify-center min-h-screen px-4">
        <div className="text-center animate-stagger max-w-lg mx-auto">
          <div className="flex justify-center mb-8">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center"
              style={{ background: "rgba(91,141,239,0.1)", border: "1px solid rgba(91,141,239,0.35)" }}>
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="var(--yellow)" strokeWidth="2.5"><path d="M20 6L9 17l-5-5"/></svg>
            </div>
          </div>
          <div className="badge mx-auto mb-6">{c.success.badge}</div>
          <h2 className="font-extrabold mb-4" style={{ fontSize: "clamp(1.8rem, 6vw, 4.5rem)" }}>
            {c.success.heading1}{" "}<span style={{ color: "var(--yellow)" }}>{c.success.heading2}</span>
          </h2>
          <p className="mb-8 text-sm px-2" style={{ color: "var(--text-secondary)" }}>
            {c.success.sub}<br />
            Expect a <strong style={{ color: "var(--text-primary)" }}>{c.success.strong}</strong> within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <a href="#work" className="btn-primary w-full sm:w-auto justify-center">{c.success.ctaPrimary}</a>
            <button className="btn-outline w-full sm:w-auto justify-center"
              onClick={() => { setSubmitted(false); setStep(1); setSelectedType(""); setSelectedBudget(""); setForm({ name:"",email:"",company:"",phone:"",message:"",startDate:"" }); }}>
              {c.success.ctaSecondary}
            </button>
          </div>
          <div className="flex flex-wrap gap-4 sm:gap-8 justify-center mt-10 sm:mt-12">
            {c.success.labels.map((label) => (
              <div key={label} className="flex items-center gap-2 text-xs font-mono" style={{ color: "var(--text-secondary)" }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--yellow)" strokeWidth="2"><path d="M20 6L9 17l-5-5"/></svg>
                {label}
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 relative px-5 sm:px-8 lg:px-12" ref={ref}>
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="reveal text-center mb-10 sm:mb-16">
          <span className="badge">{c.badge}</span>
          <h2 className="font-extrabold mt-6" style={{ fontSize: "clamp(1.8rem, 5vw, 4rem)" }}>
            {c.heading1}{" "}<span className="shimmer-text" style={{ fontStyle: "italic", fontWeight: 800 }}>{c.headingItalic}</span>
          </h2>
          <p className="mt-3 text-sm" style={{ color: "var(--text-secondary)" }}>{c.sub}</p>
        </div>

        <div className="reveal grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Sidebar */}
          <div className="hidden lg:block space-y-6">
            <div className="glow-card rounded-2xl p-6">
              <h3 className="text-sm font-bold mb-6 font-mono" style={{ color: "var(--text-secondary)" }}>{c.sidebar.title}</h3>
              <div className="space-y-4">
                {[
                  { num: 1, label: c.stepTitles[1], val: selectedType || c.sidebar.awaiting },
                  { num: 2, label: c.stepTitles[2], val: selectedBudget || c.sidebar.awaiting },
                  { num: 3, label: c.stepTitles[3], val: form.name || c.sidebar.awaiting },
                  { num: 4, label: c.stepTitles[4], val: step === 4 ? c.sidebar.inProgress : c.sidebar.finalStep },
                ].map((s) => (
                  <div key={s.num} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5 transition-all duration-300"
                      style={{ background: step > s.num ? "var(--yellow)" : step === s.num ? "rgba(91,141,239,0.15)" : "rgba(255,255,255,0.05)", color: step > s.num ? "#ffffff" : step === s.num ? "var(--yellow)" : "var(--text-secondary)", border: step === s.num ? "1px solid var(--yellow)" : "1px solid transparent" }}>
                      {step > s.num ? "✓" : s.num}
                    </div>
                    <div>
                      <div className="text-sm font-bold" style={{ color: step >= s.num ? "var(--text-primary)" : "var(--text-secondary)" }}>{s.label}</div>
                      <div className="text-xs font-mono mt-0.5" style={{ color: "var(--text-secondary)" }}>
                        {step > s.num ? (s.num === 1 ? selectedType : s.num === 2 ? selectedBudget : s.num === 3 ? form.name : s.val) : s.val}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl p-6" style={{ background: "rgba(91,141,239,0.04)", border: "1px solid rgba(91,141,239,0.12)" }}>
              <div className="text-xs font-mono mb-2" style={{ color: "var(--yellow)" }}>{c.sidebar.note}</div>
              <p className="text-sm italic" style={{ color: "var(--text-secondary)" }}>{c.sidebar.noteText}</p>
            </div>
          </div>

          {/* Main form */}
          <div className="lg:col-span-2">
            <div className="glow-card rounded-2xl p-5 sm:p-8">
              <div className="flex items-start justify-between mb-6 sm:mb-8 gap-4">
                <div>
                  <div className="text-xs font-mono mb-2" style={{ color: "var(--yellow)" }}>STEP {step}/4</div>
                  <h3 className="text-xl sm:text-2xl font-bold">{c.stepTitles[step]}</h3>
                  <p className="text-sm mt-1" style={{ color: "var(--text-secondary)" }}>{c.stepDesc[step]}</p>
                </div>
                <div className="flex gap-1.5 flex-shrink-0 mt-1">
                  {[1,2,3,4].map((s) => (
                    <div key={s} className="h-1 rounded-full transition-all duration-300"
                      style={{ width: s === step ? "24px" : "8px", background: s <= step ? "var(--yellow)" : "rgba(255,255,255,0.1)" }} />
                  ))}
                </div>
              </div>

              {step === 1 && (
                <div className="grid grid-cols-2 gap-3">
                  {c.projectTypes.map((pt) => (
                    <button key={pt.label} onClick={() => setSelectedType(pt.label)}
                      className="rounded-xl p-3 sm:p-4 text-left transition-all duration-200 flex items-center gap-2 sm:gap-3"
                      style={{ background: selectedType === pt.label ? "var(--yellow)" : "rgba(255,255,255,0.04)", color: selectedType === pt.label ? "#ffffff" : "var(--text-primary)", border: selectedType === pt.label ? "1px solid var(--yellow)" : "1px solid var(--border)" }}>
                      <span className="text-xl sm:text-2xl">{pt.icon}</span>
                      <span className="text-xs sm:text-sm font-semibold">{pt.label}</span>
                    </button>
                  ))}
                </div>
              )}

              {step === 2 && (
                <div className="space-y-3">
                  {c.budgets.map((b) => (
                    <button key={b.tier} onClick={() => setSelectedBudget(b.range)}
                      className="w-full rounded-xl p-3 sm:p-4 text-left transition-all duration-200 flex items-center justify-between"
                      style={{ background: selectedBudget === b.range ? "rgba(91,141,239,0.1)" : "rgba(255,255,255,0.03)", color: selectedBudget === b.range ? "var(--yellow)" : "var(--text-primary)", border: selectedBudget === b.range ? "1px solid var(--yellow)" : "1px solid var(--border)" }}>
                      <span className="text-xs font-mono" style={{ color: "var(--text-secondary)" }}>{b.tier}</span>
                      <span className="font-bold text-sm sm:text-base">{b.range}</span>
                    </button>
                  ))}
                </div>
              )}

              {step === 3 && (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-mono mb-2 block" style={{ color: "var(--text-secondary)" }}>{c.fields.name}</label>
                      <input className={`input-field ${errors.name ? 'border-red-500/50 focus:border-red-500 bg-red-500/5' : ''}`} placeholder={c.fields.namePH} value={form.name} onChange={(e) => { setForm({...form, name: e.target.value}); if (errors.name) setErrors({...errors, name: undefined}); }} />
                      {errors.name && (
                        <div className="mt-1.5 flex items-center gap-1.5 text-red-400 text-xs font-medium animate-fadeIn">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
                          {c.errors[errors.name]}
                        </div>
                      )}
                    </div>
                    <div>
                      <label className="text-xs font-mono mb-2 block" style={{ color: "var(--text-secondary)" }}>{c.fields.email}</label>
                      <input className={`input-field ${errors.email ? 'border-red-500/50 focus:border-red-500 bg-red-500/5' : ''}`} placeholder={c.fields.emailPH} value={form.email} onChange={(e) => { setForm({...form, email: e.target.value}); if (errors.email) setErrors({...errors, email: undefined}); }} />
                      {errors.email && (
                        <div className="mt-1.5 flex items-center gap-1.5 text-red-400 text-xs font-medium animate-fadeIn">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
                          {c.errors[errors.email]}
                        </div>
                      )}
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-mono mb-2 block" style={{ color: "var(--text-secondary)" }}>{c.fields.company}</label>
                    <input className="input-field" placeholder={c.fields.companyPH} value={form.company} onChange={(e) => setForm({...form, company: e.target.value})} />
                  </div>
                  <div>
                    <label className="text-xs font-mono mb-2 block" style={{ color: "var(--text-secondary)" }}>{c.fields.phone}</label>
                    <input className="input-field" placeholder={c.fields.phonePH} value={form.phone} onChange={(e) => setForm({...form, phone: e.target.value})} />
                  </div>
                </div>
              )}

              {step === 4 && (
                <div className="space-y-4">
                  <div>
                    <label className="text-xs font-mono mb-2 block" style={{ color: "var(--text-secondary)" }}>{c.fields.message}</label>
                    <textarea className={`input-field ${errors.message ? 'border-red-500/50 focus:border-red-500 bg-red-500/5' : ''}`} placeholder={c.fields.messagePH} value={form.message} onChange={(e) => { setForm({...form, message: e.target.value}); if (errors.message) setErrors({...errors, message: undefined}); }} />
                    {errors.message && (
                      <div className="mt-1.5 flex items-center gap-1.5 text-red-400 text-xs font-medium animate-fadeIn">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
                        {c.errors[errors.message]}
                      </div>
                    )}
                  </div>
                  <div>
                    <label className="text-xs font-mono mb-2 block" style={{ color: "var(--text-secondary)" }}>{c.fields.startDate}</label>
                    <input className="input-field" placeholder={c.fields.startDatePH} value={form.startDate} onChange={(e) => setForm({...form, startDate: e.target.value})} />
                  </div>
                </div>
              )}

              {submitError && (
                <p className="mt-4 text-xs text-red-400 text-center">{submitError}</p>
              )}
              <div className="flex items-center justify-between mt-6 sm:mt-8 pt-5 sm:pt-6 gap-3" style={{ borderTop: "1px solid var(--border)" }}>
                <button className="btn-outline text-sm" onClick={() => step > 1 && setStep((step-1) as Step)}
                  style={{ opacity: step === 1 ? 0.3 : 1, pointerEvents: step === 1 ? "none" : "auto" }}>
                  {c.nav.back}
                </button>
                {step < 4 ? (
                  <button className="btn-primary text-sm" onClick={() => {
                    if (step === 1 && !selectedType) return;
                    if (step === 2 && !selectedBudget) return;
                    if (step === 3) {
                      const newErrors: any = {};
                      if (!form.name.trim()) newErrors.name = 'reqName';
                      if (!form.email.trim()) newErrors.email = 'reqEmail';
                      else if (!/^\S+@\S+\.\S+$/.test(form.email)) newErrors.email = 'invEmail';
                      
                      if (Object.keys(newErrors).length > 0) {
                        setErrors(newErrors);
                        return;
                      }
                    }
                    setStep((step+1) as Step);
                  }}>
                    {step === 1 ? c.nav.continue : step === 2 ? c.nav.nextContact : c.nav.nextDetails}
                  </button>
                ) : (
                  <button className="btn-primary text-sm" disabled={loading} onClick={async () => {
                    if (!form.message.trim()) {
                      setErrors({ message: 'reqMessage' });
                      return;
                    }
                    setLoading(true);
                    setSubmitError("");
                    const res = await fetch("/api/contact", {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify({ ...form, projectType: selectedType, budget: selectedBudget, phone: form.phone }),
                    });
                    setLoading(false);
                    if (res.ok) {
                      setSubmitted(true);
                    } else if (res.status === 429) {
                      setSubmitError("You've already submitted recently. Please wait an hour before trying again.");
                    } else {
                      setSubmitError("Something went wrong. Please try again.");
                    }
                  }}>
                    {loading ? "Sending…" : c.nav.submit}
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