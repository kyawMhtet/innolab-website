import type { Metadata } from "next";
import ServiceDetailLayout, { type ServiceData } from "@/components/ServiceDetailLayout";

export const metadata: Metadata = {
  title: "Mobile Application Development - InnoLab Digital Solutions",
  description: "iOS & Android apps built with React Native. Consumer apps, platform companions, and internal business tools - each scoped to your product vision.",
};

const data: ServiceData = {
  num: "05",
  badge: "Custom Project",
  titleLine1: "Mobile",
  titleLine2: "Application",
  description:
    "iOS & Android apps built with React Native - a single codebase delivering a native experience on both platforms. Consumer apps, platform companions, and internal business tools, each scoped individually.",
  color: "#2563EB",
  stats: [
    { val: "8-16 wks", label: "Build timeline" },
    { val: "From $2,500", label: "Starting price" },
    { val: "iOS & Android", label: "Platforms" },
    { val: "React Native", label: "Framework" },
  ],
  features: [
    "Cross-platform iOS & Android from one codebase",
    "Push notifications & real-time updates",
    "Offline mode & local data sync",
    "Camera, GPS & device sensor integration",
    "Third-party API & backend integration",
    "App Store & Google Play submission",
    "Ongoing maintenance & feature updates",
  ],
  outcomes: [
    "One app, live on two stores",
    "Native performance on iOS and Android",
    "Reach users on their preferred device",
    "Integrate with your existing web platform",
    "Supported post-launch by the same team",
  ],
  tiers: [
    {
      num: "01",
      name: "Simple App",
      timeline: "8-10 weeks",
      desc: "Core screens, authentication, basic API integration, App Store submission.",
      price: "Custom",
    },
    {
      num: "02",
      name: "Medium Complexity",
      timeline: "10-16 weeks",
      desc: "Multiple user roles, complex flows, payments, real-time features.",
      price: "Custom",
      highlight: true,
    },
    {
      num: "03",
      name: "Advanced App",
      timeline: "16+ weeks",
      desc: "Full product ecosystem - complex business logic, deep integrations, scalable architecture.",
      price: "From $2,500",
    },
  ],
  techStack: ["React Native", "Expo", "Laravel API", "Apple App Store", "Google Play Store"],
  images: {
    layout: "mobile",
    hero: "/images/services/mobile-app/hero.png",
    screen1: "/images/services/mobile-app/screen-1.png",
    screen2: "/images/services/mobile-app/screen-2.png",
    screen3: "/images/services/mobile-app/screen-3.png",
  },
  ctaHeading: "Have an app idea?",
  ctaDesc: "Tell us what you're building and we'll scope the right approach for your platform.",
  ctaLabel: "Start a Mobile App Project →",
};

export default function MobileAppPage() {
  return <ServiceDetailLayout data={data} />;
}
