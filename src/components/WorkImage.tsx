"use client";
import { useState } from "react";

interface WorkImageProps {
  src: string;
  alt: string;
  aspectRatio?: string;
  rounded?: boolean;
  objectFit?: "cover" | "contain";
}

export default function WorkImage({
  src,
  alt,
  aspectRatio = "16/9",
  rounded = true,
  objectFit = "cover",
}: WorkImageProps) {
  const [loaded, setLoaded] = useState(false);
  const [errored, setErrored] = useState(false);

  return (
    <div
      style={{
        aspectRatio,
        position: "relative",
        overflow: "hidden",
        borderRadius: rounded ? "16px" : "0",
        background: "var(--bg-card)",
        border: "1px solid var(--border)",
      }}
    >
      {!errored && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={alt}
          onLoad={() => setLoaded(true)}
          onError={() => setErrored(true)}
          style={{
            width: "100%",
            height: "100%",
            objectFit,
            opacity: loaded ? 1 : 0,
            transition: "opacity 0.5s ease",
            display: "block",
          }}
        />
      )}

      {(!loaded || errored) && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "12px",
          }}
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
            style={{ color: "var(--text-secondary)", opacity: 0.3 }}
          >
            <rect x="3" y="3" width="18" height="18" rx="3" ry="3" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <polyline points="21 15 16 10 5 21" />
          </svg>
          <span
            style={{
              fontFamily: "var(--font-ibm-mono)",
              fontSize: "0.58rem",
              color: "var(--text-secondary)",
              opacity: 0.35,
              letterSpacing: "0.05em",
              maxWidth: "80%",
              textAlign: "center",
              wordBreak: "break-all",
            }}
          >
            {src}
          </span>
        </div>
      )}
    </div>
  );
}
