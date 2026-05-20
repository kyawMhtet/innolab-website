import type { Metadata } from "next";
import ServiceDetailLayout, { type ServiceData } from "@/components/ServiceDetailLayout";

export const metadata: Metadata = {
  title: "Booking & Reservation System - InnoLab Digital Solutions",
  description: "Appointment and scheduling platforms for clinics, salons, hotels, and event organizers. Availability calendar, booking forms, and automated notifications.",
};

const data: ServiceData = {
  num: "03",
  badge: "Semi-Packaged Service",
  titleLine1: "Booking &",
  titleLine2: "Reservation System",
  description:
    "Appointment and scheduling platforms for service businesses. Real-time availability, automated confirmations, and admin dashboards - purpose-built for your booking workflow.",
  color: "#5b8def",
  stats: [
    { val: "4-10 wks", label: "Build timeline" },
    { val: "From $1,200", label: "Starting price" },
    { val: "2", label: "Service tiers" },
    { val: "Laravel", label: "Core backend" },
  ],
  features: [
    "Availability calendar & time-slot management",
    "Online booking form & confirmations",
    "Admin booking management dashboard",
    "Automated email & SMS notifications",
    "Payment integration for paid bookings",
    "Customer booking history & accounts",
    "Staff & resource scheduling",
  ],
  outcomes: [
    "Eliminate phone & manual bookings",
    "Reduce no-shows with auto-reminders",
    "Manage your calendar in one place",
    "Accept payments at the point of booking",
    "Give customers 24/7 self-service access",
  ],
  tiers: [
    {
      num: "01",
      name: "Simple Booking",
      timeline: "4-6 weeks",
      desc: "Single service type, calendar view, booking form, email notifications.",
      price: "From $1,200",
    },
    {
      num: "02",
      name: "Advanced Platform",
      timeline: "6-10 weeks",
      desc: "Multiple service types, staff management, payment integration, full admin dashboard.",
      price: "From $1,500",
      highlight: true,
    },
  ],
  techStack: ["Laravel", "Calendar API", "SMS / Email", "Payment Gateways", "MySQL"],
  images: {
    layout: "standard",
    hero: "/images/services/booking-system/hero.png",
    screen1: "/images/services/booking-system/screen-1.png",
    screen2: "/images/services/booking-system/screen-2.png",
  },
  ctaHeading: "Need a booking system?",
  ctaDesc: "Describe your scheduling workflow and we'll propose the right system for you.",
  ctaLabel: "Start a Booking Project →",
};

export default function BookingSystemPage() {
  return <ServiceDetailLayout data={data} />;
}
