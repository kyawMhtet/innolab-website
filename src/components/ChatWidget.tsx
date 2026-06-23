"use client";
import { useState, useRef, useEffect } from "react";
import { useLocale } from "@/components/LocaleContext";

type Message = {
  role: "user" | "bot";
  content: string;
  showCta?: boolean;
  isError?: boolean;
};

const CTA_TRIGGERS: Record<string, string[]> = {
  en: ["contact form", "fill out", "quote", "reach out", "contact us"],
  th: ["แบบฟอร์ม", "ติดต่อ"],
  zh: ["联系表单", "填写", "联系我们"],
};

function shouldShowCta(text: string, locale: string): boolean {
  const lower = text.toLowerCase();
  return (CTA_TRIGGERS[locale] ?? CTA_TRIGGERS.en).some((t) => lower.includes(t));
}

const MAX_USER_MESSAGES = 10;

const LIMIT_MSG: Record<string, string> = {
  en: "You've reached the chat limit for this session. To go deeper, fill out our contact form and we'll get back to you within 24 hours.",
  th: "คุณถึงขีดจำกัดการแชทสำหรับเซสชันนี้แล้ว หากต้องการข้อมูลเพิ่มเติม กรุณากรอกแบบฟอร์มติดต่อของเรา เราจะตอบกลับภายใน 24 ชั่วโมง",
  zh: "您已达到本次会话的聊天上限。如需进一步了解，请填写我们的联系表单，我们将在24小时内回复您。",
};

export default function ChatWidget() {
  const { t, locale } = useLocale();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [hasOpened, setHasOpened] = useState(false);
  const [userMsgCount, setUserMsgCount] = useState(0);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  useEffect(() => {
    if (isOpen) inputRef.current?.focus();
  }, [isOpen]);

  function handleOpen() {
    setIsOpen(true);
    if (!hasOpened) {
      setMessages([{ role: "bot", content: t.chat.greeting }]);
      setHasOpened(true);
    }
  }

  function scrollToContact() {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "start" });
    setIsOpen(false);
  }

  const isLimitReached = userMsgCount >= MAX_USER_MESSAGES;

  async function handleSend() {
    const text = input.trim();
    if (!text || loading || isLimitReached) return;
    const newCount = userMsgCount + 1;
    setUserMsgCount(newCount);
    const userMsg: Message = { role: "user", content: text };
    const nextMessages = [...messages, userMsg];
    setMessages(nextMessages);
    setInput("");
    setLoading(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: nextMessages, locale }),
      });
      const data = await res.json();
      if (!res.ok || data.error) throw new Error(data.error ?? "error");
      const botMsg: Message = {
        role: "bot",
        content: data.reply,
        showCta: shouldShowCta(data.reply, locale),
      };
      // If this was the last allowed message, append limit notice after bot reply
      if (newCount >= MAX_USER_MESSAGES) {
        setMessages((prev) => [
          ...prev,
          botMsg,
          { role: "bot", content: LIMIT_MSG[locale] ?? LIMIT_MSG.en, showCta: true },
        ]);
      } else {
        setMessages((prev) => [...prev, botMsg]);
      }
    } catch {
      setMessages((prev) => [...prev, { role: "bot", content: t.chat.errorMsg, isError: true }]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* ── Chat panel — opens above the trigger pill ─────── */}
      {isOpen && (
        <div
          className="glow-card"
          style={{
            position: "fixed",
            // panel sits above trigger: 6.5rem trigger bottom + 44px trigger height + 12px gap
            bottom: "calc(6.5rem + 44px + 12px)",
            right: "1.5rem",
            width: "min(370px, calc(100vw - 24px))",
            height: "480px",
            borderRadius: "14px",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            animation: "chatSlideUp 0.3s cubic-bezier(0.22,1,0.36,1) forwards",
            zIndex: 49,
          }}
        >
          {/* Header */}
          <div
            style={{
              background: "var(--bg-card)",
              borderBottom: "1px solid var(--border)",
              padding: "12px 14px",
              flexShrink: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "10px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              {/* Kei avatar */}
              <div
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  background: "var(--yellow)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              </div>
              <div>
                <div style={{ fontSize: "0.875rem", fontWeight: 700, color: "var(--text-primary)", lineHeight: 1.2 }}>
                  {t.chat.headerTitle}
                </div>
                <div style={{ fontSize: "0.6rem", color: "var(--yellow)", fontFamily: "var(--font-ibm-mono)", letterSpacing: "0.07em", marginTop: "2px", textTransform: "uppercase" }}>
                  {t.chat.headerSub}
                </div>
              </div>
            </div>

            {/* Close — top-right of panel header, not near send button */}
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
              style={{
                background: "transparent",
                border: "1px solid var(--border)",
                borderRadius: "6px",
                width: "28px",
                height: "28px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                color: "var(--text-secondary)",
                flexShrink: 0,
                transition: "border-color 0.2s ease, color 0.2s ease",
              }}
              onMouseEnter={(e) => {
                const b = e.currentTarget as HTMLButtonElement;
                b.style.borderColor = "var(--yellow)";
                b.style.color = "var(--yellow)";
              }}
              onMouseLeave={(e) => {
                const b = e.currentTarget as HTMLButtonElement;
                b.style.borderColor = "var(--border)";
                b.style.color = "var(--text-secondary)";
              }}
            >
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="1" y1="1" x2="9" y2="9" />
                <line x1="9" y1="1" x2="1" y2="9" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div
            style={{
              flex: 1,
              overflowY: "auto",
              padding: "14px",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              background: "var(--bg-dark)",
            }}
          >
            {messages.map((msg, i) => (
              <div key={i} style={{ display: "flex", justifyContent: msg.role === "user" ? "flex-end" : "flex-start" }}>
                <div
                  style={{
                    maxWidth: "82%",
                    padding: "9px 13px",
                    borderRadius: msg.role === "user" ? "12px 12px 2px 12px" : "12px 12px 12px 2px",
                    background: msg.role === "user" ? "var(--yellow)" : "var(--bg-card)",
                    color: msg.role === "user" ? "#fff" : msg.isError ? "var(--text-secondary)" : "var(--text-primary)",
                    fontSize: "0.82rem",
                    lineHeight: "1.6",
                    border: msg.role === "bot" ? "1px solid var(--border)" : "none",
                    fontWeight: msg.role === "user" ? 500 : 400,
                  }}
                >
                  <span style={{ whiteSpace: "pre-wrap" }}>{msg.content}</span>
                  {msg.showCta && (
                    <div style={{ marginTop: "10px" }}>
                      <button
                        onClick={scrollToContact}
                        className="btn-primary"
                        style={{ fontSize: "0.73rem", padding: "7px 13px" }}
                      >
                        {t.chat.ctaLabel}
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}

            {loading && (
              <div style={{ display: "flex", justifyContent: "flex-start" }}>
                <div
                  style={{
                    padding: "9px 13px",
                    borderRadius: "12px 12px 12px 2px",
                    background: "var(--bg-card)",
                    border: "1px solid var(--border)",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <span style={{ display: "flex", gap: "4px", alignItems: "center" }}>
                    {[0, 1, 2].map((i) => (
                      <span
                        key={i}
                        style={{
                          width: "5px",
                          height: "5px",
                          borderRadius: "50%",
                          background: "var(--yellow)",
                          display: "inline-block",
                          animation: `pulse 1.4s ease-in-out ${i * 0.2}s infinite`,
                        }}
                      />
                    ))}
                  </span>
                  <span style={{ fontSize: "0.75rem", color: "var(--text-secondary)", fontFamily: "var(--font-ibm-mono)" }}>
                    {t.chat.thinking}
                  </span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input row */}
          <div
            style={{
              borderTop: "1px solid var(--border)",
              padding: "10px 12px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              background: "var(--bg-card)",
              flexShrink: 0,
            }}
          >
            <input
              ref={inputRef}
              className="input-field"
              style={{
                flex: 1,
                padding: "9px 13px",
                fontSize: "0.82rem",
                minWidth: 0,
                opacity: isLimitReached ? 0.45 : 1,
              }}
              placeholder={isLimitReached ? "— chat limit reached —" : t.chat.placeholder}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  handleSend();
                }
              }}
              disabled={loading || isLimitReached}
              maxLength={1000}
            />
            <button
              onClick={handleSend}
              disabled={loading || !input.trim() || isLimitReached}
              aria-label={t.chat.send}
              style={{
                flexShrink: 0,
                width: "36px",
                height: "36px",
                borderRadius: "8px",
                background: loading || !input.trim() || isLimitReached ? "var(--bg-card-hover)" : "var(--yellow)",
                border: "1px solid var(--border)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: loading || !input.trim() ? "not-allowed" : "pointer",
                transition: "background 0.2s ease",
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={loading || !input.trim() || isLimitReached ? "var(--text-secondary)" : "#fff"} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* ── Trigger pill — stacked above ScrollToTop, same right ── */}
      {/* Layout (right: 1.5rem, vertically aligned):             */}
      {/*   [ 💬 Kei ]  ← bottom: 5rem                           */}
      {/*   [   ↑   ]   ← bottom: 1.5rem  (ScrollToTop)          */}
      <button
        onClick={isOpen ? () => setIsOpen(false) : handleOpen}
        aria-label={isOpen ? "Close chat" : t.chat.triggerLabel}
        style={{
          position: "fixed",
          bottom: "6.5rem",
          right: "1.5rem",
          zIndex: 49,
          height: "44px",
          width: isOpen ? "44px" : "auto",
          padding: isOpen ? "0" : "0 16px 0 12px",
          borderRadius: "22px",
          background: isOpen ? "var(--bg-card)" : "var(--yellow)",
          border: isOpen ? "1px solid var(--border)" : "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: isOpen ? "0" : "8px",
          cursor: "pointer",
          outline: "none",
          whiteSpace: "nowrap",
          overflow: "hidden",
          // float + glow only when closed
          animation: isOpen
            ? "none"
            : "chatFloat 3s ease-in-out infinite, chatGlow 3s ease-in-out infinite",
          transition: "width 0.3s cubic-bezier(0.22,1,0.36,1), padding 0.3s ease, background 0.25s ease, border-color 0.25s ease",
        }}
      >
        {isOpen ? (
          /* X when panel is open */
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="var(--text-primary)" strokeWidth="2" strokeLinecap="round">
            <line x1="1" y1="1" x2="13" y2="13" />
            <line x1="13" y1="1" x2="1" y2="13" />
          </svg>
        ) : (
          <>
            {/* Icon with periodic bounce */}
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#fff"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{
                flexShrink: 0,
                animation: "chatIconBounce 6s ease-in-out infinite",
              }}
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>

            <span style={{ fontSize: "0.8rem", fontWeight: 600, color: "#fff", letterSpacing: "0.01em" }}>
              {t.chat.headerTitle}
            </span>

            {/* Shimmer sweep */}
            <span
              aria-hidden
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "40%",
                height: "100%",
                background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.22), transparent)",
                animation: "chatShimmer 3.5s ease-in-out infinite",
                pointerEvents: "none",
              }}
            />

            {/* Ping ring */}
            <span
              aria-hidden
              style={{
                position: "absolute",
                inset: "-2px",
                borderRadius: "24px",
                border: "2px solid var(--yellow)",
                opacity: 0,
                animation: "ping 3s ease-in-out infinite",
                pointerEvents: "none",
              }}
            />
          </>
        )}
      </button>
    </>
  );
}
