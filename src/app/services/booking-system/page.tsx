import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AosInit from "@/components/AosInit";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Booking & Reservation System — InnoLab Digital Solutions",
  description: "Appointment and scheduling platforms for clinics, salons, hotels, and event organizers. Availability calendar, booking forms, and automated notifications.",
};

const systemTypes = [
  { name: "Appointment Booking", desc: "Time-slot scheduling for one-on-one services", clients: "Clinics · Salons · Coaches" },
  { name: "Resource Reservation", desc: "Space and asset booking with availability management", clients: "Hotels · Meeting Rooms · Equipment" },
  { name: "Event Booking", desc: "Capacity-based ticket and seat reservations", clients: "Workshops · Classes · Seminars" },
];
const coreFeatures = [
  "Availability calendar & time-slot management",
  "Online booking form & confirmations",
  "Admin booking management dashboard",
  "Automated email & SMS notifications",
  "Payment integration for paid bookings",
  "Customer booking history & accounts",
];
const tiers = [
  { num: "01", name: "Simple Booking System", timeline: "4–6 weeks", desc: "Single service type, calendar view, booking form, email notifications", price: "From $1,200" },
  { num: "02", name: "Advanced Booking Platform", timeline: "6–10 weeks", desc: "Multiple service types, staff management, payment integration, admin dashboard", price: "From $1,500" },
];
const idealClients = ["Medical Clinics", "Wellness Centers", "Beauty Salons", "Fitness Studios", "Hotels", "Event Organizers"];

export default function BookingSystemPage() {
  return (
    <>
      <AosInit />
      <Navbar />
      <main style={{ background: "var(--bg-dark)", minHeight: "100vh", paddingTop: "80px" }}>

        {/* Header */}
        <div className="py-14 sm:py-20 px-5 sm:px-8 lg:px-12" style={{ borderBottom: "1px solid var(--border)" }}>
          <div className="max-w-7xl mx-auto">
            <a href="/#services" className="inline-flex items-center gap-2 text-xs font-mono mb-8 transition-opacity hover:opacity-100"
              style={{ color: "var(--text-secondary)", opacity: 0.7 }}>
              ← Back to Services
            </a>
            <div className="animate-stagger">
              <span className="badge">Semi-Packaged Service</span>
              <h1 className="font-extrabold leading-none mt-5 mb-5" style={{ fontSize: "clamp(2rem, 6vw, 4.5rem)" }}>
                Booking &<br />
                <span style={{ color: "var(--yellow)", fontStyle: "italic", fontWeight: 400 }}>Reservation System</span>
              </h1>
              <p className="text-sm sm:text-base leading-relaxed" style={{ color: "var(--text-secondary)", maxWidth: "580px" }}>
                Appointment and scheduling platforms for service businesses. Real-time availability, automated confirmations, and admin dashboards — purpose-built for your booking workflow.
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="py-14 sm:py-20 px-5 sm:px-8 lg:px-12">
          <div className="max-w-7xl mx-auto space-y-10">

            {/* System Types */}
            <div data-aos="fade-up">
              <h2 className="font-bold text-lg sm:text-xl mb-5">System Types</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {systemTypes.map((type, i) => (
                  <div key={type.name} className="glow-card rounded-2xl p-5 sm:p-7" data-aos="fade-up" data-aos-delay={i * 100}>
                    <h3 className="font-bold text-base mb-2">{type.name}</h3>
                    <p className="text-sm leading-relaxed mb-3" style={{ color: "var(--text-secondary)" }}>{type.desc}</p>
                    <div className="text-xs font-mono" style={{ color: "var(--yellow)" }}>{type.clients}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Core Features */}
            <div className="glow-card rounded-2xl p-6 sm:p-8" data-aos="fade-up">
              <h2 className="font-bold text-base sm:text-lg mb-5">Core Features</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {coreFeatures.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="mt-1.5 flex-shrink-0" style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--yellow)" }} />
                    <span className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Project Timelines */}
            <div data-aos="fade-up">
              <h2 className="font-bold text-lg sm:text-xl mb-5">Project Timelines</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {tiers.map((tier, i) => (
                  <div key={tier.num} className="glow-card rounded-2xl p-5 sm:p-7 flex flex-col" data-aos="fade-up" data-aos-delay={i * 100}>
                    <span className="font-mono text-xs mb-3 block" style={{ color: "var(--text-secondary)" }}>{tier.num}</span>
                    <h3 className="font-bold text-lg mb-1">{tier.name}</h3>
                    <div className="text-xs font-mono mb-3" style={{ color: "var(--yellow)" }}>⏱ {tier.timeline}</div>
                    <p className="text-sm leading-relaxed mb-4 flex-1" style={{ color: "var(--text-secondary)" }}>{tier.desc}</p>
                    <div className="font-bold text-sm pt-4" style={{ color: "var(--text-primary)", borderTop: "1px solid var(--border)" }}>{tier.price}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Ideal Clients */}
            <div className="glow-card rounded-2xl p-5 sm:p-7" data-aos="fade-up">
              <h2 className="font-bold text-base sm:text-lg mb-4">Ideal Clients</h2>
              <div className="flex flex-wrap gap-2">
                {idealClients.map((client) => (
                  <span key={client} className="text-xs font-mono px-3 py-1.5 rounded-sm"
                    style={{ background: "rgba(255,255,255,0.05)", border: "1px solid var(--border)", color: "var(--text-secondary)" }}>
                    {client}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="glow-card rounded-2xl p-8 sm:p-12 text-center" data-aos="fade-up" data-aos-delay="100">
              <h2 className="font-bold text-xl sm:text-2xl mb-3">Need a booking system?</h2>
              <p className="text-sm mb-8" style={{ color: "var(--text-secondary)" }}>
                Describe your scheduling workflow and we&apos;ll propose the right system for you.
              </p>
              <a href="/#contact" className="btn-primary">Start a Booking Project →</a>
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
