import type { Metadata } from "next";
import ServiceDetailLayout, { type ServiceData } from "@/components/ServiceDetailLayout";

export const metadata: Metadata = {
  title: "Business Website Development - InnoLab Digital Solutions",
  description: "Professional websites for companies, startups, and brands. Responsive design, SEO, CMS, and lead capture - delivered in weeks.",
};

const data: ServiceData = {
  num: "01",
  badge: "Packaged Service",
  titleLine1: "Business Website",
  titleLine2: "Development",
  description:
    "Professional websites for companies, startups, and brands. Responsive design, SEO-friendly structure, CMS integration, and lead capture forms - delivered in weeks, not months.",
  color: "#FFBA00",
  stats: [
    { val: "2-8 wks", label: "Delivery timeline" },
    { val: "From $300", label: "Starting price" },
    { val: "3", label: "Packages" },
    { val: "Next.js", label: "Core stack" },
  ],
  features: [
    "Responsive design - mobile, tablet & desktop",
    "SEO-friendly structure & metadata",
    "CMS for easy content updates",
    "Contact & lead capture forms",
    "Google Analytics integration",
    "Performance optimisation & Core Web Vitals",
    "Domain & hosting setup",
  ],
  outcomes: [
    "A professional online presence ready in weeks",
    "Rank higher on Google from day one",
    "Update content without developer help",
    "Convert visitors into business leads",
    "Fast-loading on every device",
  ],
  tiers: [
    {
      num: "01",
      name: "Starter",
      timeline: "2-3 weeks",
      desc: "Up to 5 pages, contact form, basic SEO setup, mobile-responsive.",
      price: "From $300",
    },
    {
      num: "02",
      name: "Business",
      timeline: "3-5 weeks",
      desc: "Up to 10 pages, CMS integration, lead capture forms, analytics.",
      price: "From $700",
      highlight: true,
    },
    {
      num: "03",
      name: "Professional",
      timeline: "6-8 weeks",
      desc: "Full site, blog system, advanced SEO, third-party integrations.",
      price: "From $1,000",
    },
  ],
  techStack: ["Next.js", "Tailwind CSS", "Headless CMS", "Vercel"],
  images: {
    layout: "standard",
    hero: "/images/services/business-website/hero.png",
    screen1: "/images/services/business-website/screen-1.png",
    screen2: "/images/services/business-website/screen-2.png",
  },
  ctaHeading: "Ready to build your website?",
  ctaDesc: "Tell us about your business and we'll recommend the right package for you.",
  ctaLabel: "Start a Website Project →",
};

export default function BusinessWebsitePage() {
  return <ServiceDetailLayout data={data} />;
}
