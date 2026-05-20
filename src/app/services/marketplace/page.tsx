import type { Metadata } from "next";
import ServiceDetailLayout, { type ServiceData } from "@/components/ServiceDetailLayout";

export const metadata: Metadata = {
  title: "Marketplace Platform Development - InnoLab Digital Solutions",
  description: "Multi-vendor platforms connecting buyers and sellers. Vendor onboarding, transaction flows, commission management, and reviews - custom scoped.",
};

const data: ServiceData = {
  num: "04",
  badge: "Custom Project",
  titleLine1: "Marketplace",
  titleLine2: "Platform",
  description:
    "Multi-vendor platforms connecting buyers and sellers. Custom-scoped with vendor onboarding, transaction flows, commission management, and reviews - built to grow.",
  color: "#818cf8",
  stats: [
    { val: "12+ wks", label: "Build timeline" },
    { val: "Custom", label: "Pricing" },
    { val: "Multi-vendor", label: "Architecture" },
    { val: "Full-Stack", label: "Scope" },
  ],
  features: [
    "Multi-vendor storefront & onboarding flow",
    "Product listing, search & filtering",
    "Secure buyer-seller transaction layer",
    "Commission management & payout system",
    "Reviews, ratings & trust system",
    "Admin oversight & moderation dashboard",
    "Vendor analytics & performance reports",
  ],
  outcomes: [
    "Launch a fully functioning marketplace",
    "Onboard vendors without manual effort",
    "Earn commission on every transaction",
    "Build buyer trust through verified reviews",
    "Scale to thousands of vendors & products",
  ],
  tiers: [
    {
      num: "01",
      name: "Core Marketplace",
      timeline: "12-16 weeks",
      desc: "Vendor onboarding, product listings, transactions, commission engine, basic admin.",
      price: "Custom scope",
    },
    {
      num: "02",
      name: "Full Ecosystem",
      timeline: "16+ weeks",
      desc: "Advanced search, analytics, mobile-ready, complex commission rules, full admin suite.",
      price: "Custom scope",
      highlight: true,
    },
  ],
  techStack: ["Next.js", "Laravel", "MySQL", "Payment Gateways", "Cloud Hosting"],
  images: {
    layout: "standard",
    hero: "/images/services/marketplace/hero.png",
    screen1: "/images/services/marketplace/screen-1.png",
    screen2: "/images/services/marketplace/screen-2.png",
  },
  ctaHeading: "Building a marketplace?",
  ctaDesc: "Walk us through your vision and we'll scope a platform built for growth.",
  ctaLabel: "Start a Marketplace Project →",
};

export default function MarketplacePage() {
  return <ServiceDetailLayout data={data} />;
}
