import type { Metadata } from "next";
import ServiceDetailLayout, { type ServiceData } from "@/components/ServiceDetailLayout";

export const metadata: Metadata = {
  title: "E-commerce Platform Development - InnoLab Digital Solutions",
  description: "Online stores with product catalog, cart, checkout, and payment integration. Built to manage orders, inventory, and customers at scale.",
};

const data: ServiceData = {
  num: "02",
  badge: "Semi-Packaged Service",
  titleLine1: "E-commerce",
  titleLine2: "Platform",
  description:
    "Online stores built to sell - complete with product management, cart, secure checkout, and payment integration. Add inventory, loyalty, and multi-currency as your business scales.",
  color: "#ff6b9d",
  stats: [
    { val: "4-10 wks", label: "Build timeline" },
    { val: "From $800", label: "Starting price" },
    { val: "2", label: "Service tiers" },
    { val: "Laravel API", label: "Backend" },
  ],
  features: [
    "Product catalog & category management",
    "Shopping cart & secure checkout",
    "Payment gateway integration",
    "Order management system",
    "Admin dashboard & sales analytics",
    "Inventory tracking",
    "Customer accounts & order history",
  ],
  outcomes: [
    "Sell online from day one",
    "Manage products without a developer",
    "Accept cards, transfers & local payments",
    "Track every order in one dashboard",
    "Scale to thousands of products",
  ],
  tiers: [
    {
      num: "01",
      name: "Starter Store",
      timeline: "4-6 weeks",
      desc: "Product catalog, cart, checkout, basic payment gateway.",
      price: "From $800",
    },
    {
      num: "02",
      name: "Business Store",
      timeline: "6-10 weeks",
      desc: "Full platform + inventory, customer accounts, advanced management & analytics.",
      price: "From $1,000",
      highlight: true,
    },
  ],
  techStack: ["Next.js", "Laravel API", "Tailwind CSS", "Payment Gateways", "Cloud Hosting"],
  images: {
    layout: "standard",
    hero: "/images/services/ecommerce/hero.png",
    screen1: "/images/services/ecommerce/screen-1.png",
    screen2: "/images/services/ecommerce/screen-2.png",
  },
  ctaHeading: "Ready to launch your online store?",
  ctaDesc: "Tell us about your products and we'll scope the right platform for your business.",
  ctaLabel: "Start an E-commerce Project →",
};

export default function EcommercePage() {
  return <ServiceDetailLayout data={data} />;
}
