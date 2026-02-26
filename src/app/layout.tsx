import type { Metadata } from "next";
import { Syne, DM_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeContext";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "500", "600", "700", "800"],
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  variable: "--font-dm-mono",
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Innolab Digital Solutions — Elevating Visions into Digital Reality",
  description:
    "A high-performance creative team for businesses seeking to dominate the digital landscape. Websites, apps, digital marketing & brand design.",
  keywords: ["web design", "digital marketing", "app development", "brand design", "Innolab"],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${syne.variable} ${dmMono.variable}`}>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}