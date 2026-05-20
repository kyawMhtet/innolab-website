"use client";
import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type Locale = "en" | "th" | "zh";

export interface Translations {
  nav: {
    services: string;
    process: string;
    work: string;
    about: string;
    cta: string;
  };
  hero: {
    badge: string;
    headline1: string;
    headlineItalic: string;
    headline2: string;
    headline3: string;
    headline4: string;
    sub: string;
    ctaPrimary: string;
    ctaSecondary: string;
    scroll: string;
    activeProject: string;
    avgGrowth: string;
  };
  partners: {
    title: string;
  };
  services: {
    badge: string;
    heading1: string;
    headingItalic: string;
    sub: string;
    items: {
      num: string;
      title: string;
      desc: string;
      tags: string[];
      stat: string;
      statLabel: string;
    }[];
  };
  process: {
    badge: string;
    heading1: string;
    heading2: string;
    sub: string;
    stages: {
      num: string;
      title: string;
      desc: string;
      tags: string[];
      deliverables: string[];
      stageLabel: string;
      deliverableLabel: string;
    }[];
    ctaHeading: string;
    ctaSub: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  work: {
    badge: string;
    heading1: string;
    headingItalic: string;
    viewAll: string;
    projects: {
      tag: string;
      title: string;
      client: string;
      desc: string;
      stats: { label: string; val: string }[];
    }[];
  };
  testimonials: {
    badge: string;
    heading1: string;
    headingItalic: string;
    items: { quote: string; name: string; role: string; company: string }[];
  };
  about: {
    badge: string;
    heading1: string;
    heading2: string;
    para1: string;
    para2: string;
    teamTitle: string;
    stats: { val: string; label: string }[];
    team: { name: string; role: string; initial: string }[];
  };
  contact: {
    badge: string;
    heading1: string;
    headingItalic: string;
    sub: string;
    projectTypes: { label: string; icon: string }[];
    budgets: { tier: string; range: string }[];
    stepTitles: Record<number, string>;
    stepDesc: Record<number, string>;
    fields: {
      name: string;
      namePH: string;
      email: string;
      emailPH: string;
      company: string;
      companyPH: string;
      phone: string;
      phonePH: string;
      message: string;
      messagePH: string;
      startDate: string;
      startDatePH: string;
    };
    errors: {
      reqName: string;
      reqEmail: string;
      invEmail: string;
      reqMessage: string;
    };
    nav: { back: string; continue: string; nextContact: string; nextDetails: string; submit: string };
    sidebar: { title: string; awaiting: string; inProgress: string; finalStep: string; note: string; noteText: string };
    success: {
      badge: string;
      heading1: string;
      heading2: string;
      sub: string;
      strong: string;
      ctaPrimary: string;
      ctaSecondary: string;
      labels: string[];
    };
  };
  footer: {
    tagline: string;
    servicesTitle: string;
    contactTitle: string;
    services: string[];
    email: string;
    whatsapp: string;
    startProject: string;
    privacy: string;
    terms: string;
    legal: string;
    rights: string;
  };
}

const en: Translations = {
  nav: { services: "Services", process: "Process", work: "Work", about: "About", cta: "Start Dialogue" },
  hero: {
    badge: "Available for projects · 2026",
    headline1: "Elevating",
    headlineItalic: "visions",
    headline2: "into",
    headline3: "innovative digital",
    headline4: "reality.",
    sub: "A high-performance creative team for businesses seeking to dominate the digital landscape - websites, apps, marketing & brand design.",
    ctaPrimary: "Start Your Journey",
    ctaSecondary: "Our Methodology",
    scroll: "Scroll",
    activeProject: "Active Project",
    avgGrowth: "Avg Client Growth",
  },
  partners: { title: "Technologies & Platforms We Master" },
  services: {
    badge: "What We Build",
    heading1: "SERVICES &",
    headingItalic: "Products.",
    sub: "From professional business websites to complex platform ecosystems - we build digital products that drive growth.",
    items: [
      { num: "01", title: "Business Website Development", desc: "Professional websites for companies, startups, and brands. Responsive design, SEO-friendly structure, CMS integration, and lead capture - delivered in weeks.", tags: ["Next.js", "Tailwind CSS", "Headless CMS"], stat: "2-8 wks", statLabel: "Delivery timeline" },
      { num: "02", title: "E-commerce Platform", desc: "Online stores with product catalog, shopping cart, secure checkout, and payment gateway integration. Built to manage orders, inventory, and customers at scale.", tags: ["Next.js", "Laravel API", "Payment Gateway"], stat: "$800+", statLabel: "Starting investment" },
      { num: "03", title: "Booking & Reservation System", desc: "Appointment and scheduling platforms for clinics, salons, hotels, and event organizers. Availability calendar, booking forms, and automated notifications.", tags: ["Laravel", "Calendar API", "SMS/Email"], stat: "4-10 wks", statLabel: "Build timeline" },
      { num: "04", title: "Marketplace Platform", desc: "Multi-vendor platforms connecting buyers and sellers. Custom-scoped with vendor onboarding, transaction flows, commission management, and reviews.", tags: ["Next.js", "Laravel", "Custom"], stat: "12+ wks", statLabel: "Custom delivery" },
      { num: "05", title: "Mobile Application", desc: "iOS & Android apps built with React Native. Consumer apps, platform companion apps, and internal business tools - each scoped to your product vision.", tags: ["React Native", "Expo", "iOS & Android"], stat: "8-16+ wks", statLabel: "Development timeline" },
    ],
  },
  process: {
    badge: "Our Process",
    heading1: "Our Development",
    heading2: "Process",
    sub: "A clear, structured workflow from first conversation to final handover - 7 stages that ensure quality and transparency at every step.",
    stages: [
      { num: "01", title: "Discovery", desc: "Understand your business goals, target audience, and project scope. We ask the right questions upfront to align on requirements before any work begins.", tags: ["1-2 Weeks", "Requirements", "Goals"], deliverables: ["Project Brief", "Scope Document"], stageLabel: "STAGE", deliverableLabel: "Deliverable" },
      { num: "02", title: "Planning", desc: "Define site architecture, sitemap, and a detailed project timeline. Every page, feature, and integration is mapped before design or development starts.", tags: ["1-2 Weeks", "Sitemap", "Timeline"], deliverables: ["Site Architecture", "Project Timeline"], stageLabel: "STAGE", deliverableLabel: "Deliverable" },
      { num: "03", title: "UI Design", desc: "Translate your requirements into wireframes, high-fidelity mockups, and interactive prototypes. Client approval at each stage before any code is written.", tags: ["2-4 Weeks", "Wireframes", "Figma"], deliverables: ["Design Mockups", "Approved Prototypes"], stageLabel: "STAGE", deliverableLabel: "Deliverable" },
      { num: "04", title: "Development", desc: "Build the frontend, backend, and all integrations following the approved design and architecture. Clean, scalable code delivered to a staging environment.", tags: ["Varies", "Frontend", "Backend & API"], deliverables: ["Staging Build", "Integrated Features"], stageLabel: "STAGE", deliverableLabel: "Deliverable" },
      { num: "05", title: "Testing", desc: "Quality assurance across all devices, browsers, and user scenarios. Performance, security, and functionality checks are completed before launch.", tags: ["1-2 Weeks", "QA", "Cross-Device"], deliverables: ["QA Report", "Bug-Free Build"], stageLabel: "STAGE", deliverableLabel: "Deliverable" },
      { num: "06", title: "Deployment", desc: "Production server setup, domain configuration, SSL, and go-live. A structured launch process ensures zero downtime and a smooth transition to production.", tags: ["~1 Week", "Production", "Go-Live"], deliverables: ["Live Website", "Server Configuration"], stageLabel: "STAGE", deliverableLabel: "Deliverable" },
      { num: "07", title: "Handover", desc: "Team training, documentation handover, and transition to ongoing support. You leave with everything needed to manage your product independently.", tags: ["Ongoing", "Training", "Support"], deliverables: ["Documentation", "Support Plan"], stageLabel: "STAGE", deliverableLabel: "Deliverable" },
    ],
    ctaHeading: "Ready to start?", ctaSub: "Let's walk through this process together on your next project.", ctaPrimary: "Start Your Project", ctaSecondary: "View Our Work",
  },
  work: {
    badge: "Our Work",
    heading1: "SELECTED",
    headingItalic: "Work.",
    viewAll: "Start a Project →",
    projects: [
      { tag: "Web + Dashboard", title: "Huan Tai", client: "Building & Construction", desc: "Corporate website with integrated admin dashboard for project management, team coordination, and client reporting.", stats: [{ label: "System", val: "Admin CMS" }, { label: "Industry", val: "Construction" }] },
      { tag: "Commercial Website", title: "SoulSmith", client: "Commercial / Brand", desc: "High-impact commercial website designed to showcase brand identity, strengthen online presence, and drive business leads.", stats: [{ label: "Focus", val: "Brand" }, { label: "Timeline", val: "3 wks" }] },
      { tag: "Platform + App", title: "Sa Kyi", client: "Health & Wellness", desc: "Full-stack health platform with web dashboard, dynamic programs, blog CMS, and a React Native mobile app for cross-platform access.", stats: [{ label: "Platforms", val: "Web + App" }, { label: "Stack", val: "Full-Stack" }] },
      { tag: "System Review", title: "UNESCO ClassMap", client: "Education / UNESCO", desc: "Application and system review for UNESCO ClassMap - evaluating architecture, UX patterns, and feature completeness with actionable recommendations.", stats: [{ label: "Client", val: "UNESCO" }, { label: "Scope", val: "Full Audit" }] },
    ],
  },
  testimonials: {
    badge: "Client Testimonials",
    heading1: "What Clients",
    headingItalic: "Say.",
    items: [
      { quote: "InnoLab transformed our vision into reality with their innovative solutions. The team was professional and attentive.", name: "Mr. Smith", role: "Founder", company: "Empathy Sauce" },
      { quote: "Exceptional service and attention to detail! The team at InnoLab truly cares about delivering quality work.", name: "Ko Chan", role: "Marketing Head", company: "" },
      { quote: "Working with InnoLab was an absolute pleasure. They delivered exactly what we needed, on time and with great care!", name: "Ko Alex", role: "CTO", company: "" },
      { quote: "InnoLab's creative direction gave our brand a fresh identity that truly resonates with our audience. The process was smooth, collaborative, and inspiring.", name: "Ryan", role: "Founder", company: "EcoWave Tech" },
    ],
  },
  about: {
    badge: "The Collective",
    heading1: "Small team.",
    heading2: "Big impact.",
    para1: "InnoLab Digital Solutions is a Bangkok-based web and mobile development agency. We specialise in designing and building digital products that help businesses grow online - from professional websites to complex platform ecosystems.",
    para2: "We combine packaged services for predictable projects with custom development for complex digital products, ensuring clarity for clients and quality outcomes for every engagement.",
    teamTitle: "The Team",
    stats: [{ val: "4", label: "Team Members" }, { val: "20+", label: "Projects Delivered" }, { val: "3", label: "Countries Served" }, { val: "100%", label: "Client Satisfaction" }],
    team: [{ name: "Founder & Developer", role: "Full-Stack Engineering · Strategy", initial: "F" }, { name: "UI/UX Designer", role: "Brand Identity · Design Systems", initial: "D" }, { name: "Digital Marketer", role: "Meta Ads · Google · SEO", initial: "M" }, { name: "Project Manager", role: "Delivery · Client Success", initial: "P" }],
  },
  contact: {
    badge: "Start a Project", heading1: "Start a", headingItalic: "Project", sub: "Structure your vision with our expert team. Takes less than 2 minutes.",
    projectTypes: [{ label: "Web Platform", icon: "🌐" }, { label: "Software App", icon: "📱" }, { label: "Digital Growth", icon: "📣" }, { label: "Brand Design", icon: "🎨" }],
    budgets: [{ tier: "Tier 1", range: "$500 - $2K" }, { tier: "Tier 2", range: "$2K - $5K" }, { tier: "Tier 3", range: "$5K - $15K" }, { tier: "Tier 4", range: "$15K+" }],
    stepTitles: { 1: "What are we building?", 2: "What is your budget?", 3: "Tell us about you.", 4: "Final details." },
    stepDesc: { 1: "Select the primary category.", 2: "Define the investment level.", 3: "Help us get to know you.", 4: "Anything else we should know?" },
    fields: { name: "Your Name *", namePH: "John Smith", email: "Email Address *", emailPH: "john@company.com", company: "Company / Business Name", companyPH: "Acme Corp", phone: "Phone / WhatsApp (optional)", phonePH: "+1 234 567 8900", message: "Describe Your Project *", messagePH: "Tell us about your business, what you're looking to build, your goals...", startDate: "Preferred Start Date (optional)", startDatePH: "ASAP / Next Month / Q2 2026" },
    nav: { back: "← Back", continue: "Continue →", nextContact: "Next: Contact →", nextDetails: "Next: Details →", submit: "Submit Inquiry →" },
    sidebar: { title: "PROJECT INQUIRY", awaiting: "Awaiting selection", inProgress: "In progress", finalStep: "Final step", note: "AGENCY NOTE", noteText: "\"We typically respond to new project inquiries within 24 business hours. Let's build something remarkable.\"" },
    success: { badge: "Inquiry Received", heading1: "YOUR JOURNEY", heading2: "STARTS NOW", sub: "Thank you for reaching out. Our team is already reviewing your details.", strong: "personal response", ctaPrimary: "Explore Our Work →", ctaSecondary: "Back to Home", labels: ["Secure Intake", "Quick Response", "Elite Quality"] },
    errors: { reqName: "Name is required", reqEmail: "Email is required", invEmail: "Please enter a valid email", reqMessage: "Please describe your project" },
  },
  footer: {
    tagline: "A high-performance creative team for businesses seeking to dominate the digital landscape.",
    servicesTitle: "Services", contactTitle: "Contact",
    services: ["Business Website", "E-commerce Platform", "Booking System", "Marketplace Platform", "Mobile App"],
    email: "contact@innolabdigitalsolutions.com", whatsapp: "WhatsApp Available", startProject: "Start a Project →",
    privacy: "Privacy Policy", terms: "Terms of Service", legal: "Legal", rights: "All rights reserved.",
  },
};

const th: Translations = {
  nav: { services: "บริการ", process: "กระบวนการ", work: "ผลงาน", about: "เกี่ยวกับ", cta: "เริ่มพูดคุย" },
  hero: {
    badge: "รับงานโปรเจกต์ · 2026",
    headline1: "ยกระดับ",
    headlineItalic: "วิสัยทัศน์",
    headline2: "สู่",
    headline3: "นวัตกรรม",
    headline4: "ที่ยอดเยี่ยม",
    sub: "ทีมครีเอทีฟประสิทธิภาพสูงสำหรับธุรกิจที่ต้องการครองตลาดดิจิทัล - เว็บไซต์ แอป การตลาด & ออกแบบแบรนด์",
    ctaPrimary: "เริ่มต้นเส้นทาง",
    ctaSecondary: "วิธีการของเรา",
    scroll: "เลื่อนลง",
    activeProject: "โปรเจกต์ที่ดำเนินอยู่",
    avgGrowth: "การเติบโตเฉลี่ยของลูกค้า",
  },
  partners: { title: "เทคโนโลยีและแพลตฟอร์มที่เราเชี่ยวชาญ" },
  services: {
    badge: "สิ่งที่เราสร้าง",
    heading1: "บริการ &",
    headingItalic: "ผลิตภัณฑ์",
    sub: "ตั้งแต่เว็บไซต์ธุรกิจมืออาชีพจนถึงแพลตฟอร์มดิจิทัลที่ซับซ้อน เราสร้างผลิตภัณฑ์ดิจิทัลที่ขับเคลื่อนการเติบโต",
    items: [
      { num: "01", title: "พัฒนาเว็บไซต์ธุรกิจ", desc: "เว็บไซต์มืออาชีพสำหรับบริษัท สตาร์ทอัพ และแบรนด์ต่างๆ รองรับทุกหน้าจอ โครงสร้าง SEO ครบถ้วน พร้อม CMS และฟอร์มรับลูกค้า", tags: ["Next.js", "Tailwind CSS", "Headless CMS"], stat: "2-8 สัปดาห์", statLabel: "กรอบเวลาส่งมอบ" },
      { num: "02", title: "แพลตฟอร์ม E-commerce", desc: "ร้านค้าออนไลน์พร้อมแคตตาล็อกสินค้า ตะกร้าสินค้า ชำระเงินออนไลน์ และระบบจัดการออร์เดอร์ รองรับธุรกิจทุกขนาด", tags: ["Next.js", "Laravel API", "Payment Gateway"], stat: "เริ่มต้น $800", statLabel: "ราคาเริ่มต้น" },
      { num: "03", title: "ระบบจอง & นัดหมาย", desc: "แพลตฟอร์มนัดหมายและจองบริการสำหรับคลินิก ร้านทำผม โรงแรม และผู้จัดงาน พร้อมปฏิทินว่างและแจ้งเตือนอัตโนมัติ", tags: ["Laravel", "Calendar API", "SMS/Email"], stat: "4-10 สัปดาห์", statLabel: "กรอบเวลาพัฒนา" },
      { num: "04", title: "แพลตฟอร์ม Marketplace", desc: "แพลตฟอร์มหลายผู้ขายเชื่อมต่อผู้ซื้อและผู้ขาย พัฒนาแบบกำหนดเองพร้อมระบบรับสมัครผู้ขาย การชำระเงิน และจัดการคอมมิชชัน", tags: ["Next.js", "Laravel", "Custom"], stat: "12+ สัปดาห์", statLabel: "ส่งมอบแบบกำหนดเอง" },
      { num: "05", title: "แอปพลิเคชันมือถือ", desc: "แอป iOS & Android พัฒนาด้วย React Native สำหรับผู้บริโภค แพลตฟอร์มคอมพาเนียน หรือเครื่องมือภายในองค์กร กำหนดขอบเขตตามวิสัยทัศน์ผลิตภัณฑ์ของคุณ", tags: ["React Native", "Expo", "iOS & Android"], stat: "8-16+ สัปดาห์", statLabel: "กรอบเวลาพัฒนา" },
    ],
  },
  process: {
    badge: "กระบวนการของเรา",
    heading1: "กระบวนการ",
    heading2: "พัฒนาของเรา",
    sub: "ขั้นตอนการทำงานที่ชัดเจนและมีโครงสร้าง ตั้งแต่การพูดคุยครั้งแรกจนถึงการส่งมอบขั้นสุดท้าย 7 ขั้นตอนที่รับประกันคุณภาพและความโปร่งใสในทุกขั้น",
    stages: [
      { num: "01", title: "ค้นหาและวิเคราะห์", desc: "เข้าใจเป้าหมายธุรกิจ กลุ่มเป้าหมาย และขอบเขตโปรเจกต์ เราถามคำถามที่ถูกต้องตั้งแต่เริ่มต้นเพื่อให้สอดคล้องกับความต้องการก่อนเริ่มงาน", tags: ["1-2 สัปดาห์", "ความต้องการ", "เป้าหมาย"], deliverables: ["สรุปโปรเจกต์", "เอกสารขอบเขต"], stageLabel: "ขั้นตอน", deliverableLabel: "ผลงาน" },
      { num: "02", title: "วางแผน", desc: "กำหนดสถาปัตยกรรมเว็บไซต์ แผนผังเว็บ และไทม์ไลน์โปรเจกต์โดยละเอียด ทุกหน้า ฟีเจอร์ และการเชื่อมต่อถูกวางแผนก่อนเริ่มออกแบบหรือพัฒนา", tags: ["1-2 สัปดาห์", "แผนผังเว็บ", "ไทม์ไลน์"], deliverables: ["โครงสร้างเว็บไซต์", "ไทม์ไลน์โปรเจกต์"], stageLabel: "ขั้นตอน", deliverableLabel: "ผลงาน" },
      { num: "03", title: "ออกแบบ UI", desc: "แปลความต้องการเป็น Wireframe Mockup ความแม่นยำสูง และ Prototype แบบโต้ตอบ ลูกค้าอนุมัติในแต่ละขั้นก่อนเขียนโค้ด", tags: ["2-4 สัปดาห์", "Wireframes", "Figma"], deliverables: ["Design Mockups", "Prototype ที่ได้รับอนุมัติ"], stageLabel: "ขั้นตอน", deliverableLabel: "ผลงาน" },
      { num: "04", title: "พัฒนา", desc: "พัฒนา Frontend, Backend และการเชื่อมต่อทั้งหมดตามดีไซน์และสถาปัตยกรรมที่ได้รับอนุมัติ โค้ดสะอาดและขยายได้ส่งมอบบน Staging", tags: ["ตามระยะเวลา", "Frontend", "Backend & API"], deliverables: ["Staging Build", "ฟีเจอร์ที่เชื่อมต่อ"], stageLabel: "ขั้นตอน", deliverableLabel: "ผลงาน" },
      { num: "05", title: "ทดสอบ", desc: "ตรวจสอบคุณภาพบนทุกอุปกรณ์ เบราว์เซอร์ และสถานการณ์ผู้ใช้ ตรวจสอบประสิทธิภาพ ความปลอดภัย และฟังก์ชันก่อนเปิดตัว", tags: ["1-2 สัปดาห์", "QA", "ข้ามอุปกรณ์"], deliverables: ["รายงาน QA", "Build ที่ผ่านการทดสอบ"], stageLabel: "ขั้นตอน", deliverableLabel: "ผลงาน" },
      { num: "06", title: "เปิดตัว", desc: "ตั้งค่าเซิร์ฟเวอร์ Production โดเมน SSL และเปิดตัวสด กระบวนการเปิดตัวที่มีโครงสร้างรับประกัน Zero Downtime และการเปลี่ยนแปลงที่ราบรื่น", tags: ["~1 สัปดาห์", "Production", "Go-Live"], deliverables: ["เว็บไซต์สด", "การตั้งค่าเซิร์ฟเวอร์"], stageLabel: "ขั้นตอน", deliverableLabel: "ผลงาน" },
      { num: "07", title: "ส่งมอบ", desc: "ฝึกอบรมทีม ส่งมอบเอกสาร และเปลี่ยนผ่านสู่การสนับสนุนอย่างต่อเนื่อง คุณออกไปพร้อมทุกอย่างที่จำเป็นในการจัดการผลิตภัณฑ์อย่างอิสระ", tags: ["ต่อเนื่อง", "ฝึกอบรม", "สนับสนุน"], deliverables: ["เอกสาร", "แผนการสนับสนุน"], stageLabel: "ขั้นตอน", deliverableLabel: "ผลงาน" },
    ],
    ctaHeading: "พร้อมเริ่มต้นหรือยัง?", ctaSub: "มาเดินทางผ่านกระบวนการนี้ด้วยกันในโปรเจกต์ถัดไปของคุณ", ctaPrimary: "เริ่มโปรเจกต์", ctaSecondary: "ดูผลงานของเรา",
  },
  work: {
    badge: "ผลงานของเรา",
    heading1: "ผลงาน",
    headingItalic: "คัดสรร",
    viewAll: "ดูทุกโปรเจกต์ →",
    projects: [
      { tag: "เว็บ + แดชบอร์ด", title: "Huan Tai", client: "ก่อสร้าง & อุตสาหกรรม", desc: "เว็บไซต์องค์กรพร้อมแดชบอร์ดผู้ดูแลระบบสำหรับจัดการโปรเจกต์ ประสานงานทีม และรายงานลูกค้า", stats: [{ label: "ระบบ", val: "Admin CMS" }, { label: "อุตสาหกรรม", val: "ก่อสร้าง" }] },
      { tag: "เว็บเชิงพาณิชย์", title: "SoulSmith", client: "พาณิชย์ / แบรนด์", desc: "เว็บไซต์เชิงพาณิชย์ที่ทรงพลัง ออกแบบเพื่อแสดงเอกลักษณ์แบรนด์และสร้างโอกาสทางธุรกิจ", stats: [{ label: "โฟกัส", val: "แบรนด์" }, { label: "ระยะเวลา", val: "3 สัปดาห์" }] },
      { tag: "แพลตฟอร์ม + แอป", title: "Sa Kyi", client: "สุขภาพ & เวลเนส", desc: "แพลตฟอร์มสุขภาพครบวงจรพร้อมแดชบอร์ดเว็บ โปรแกรม บล็อก CMS และแอปมือถือ React Native", stats: [{ label: "แพลตฟอร์ม", val: "เว็บ + แอป" }, { label: "สแต็ก", val: "Full-Stack" }] },
      { tag: "ตรวจสอบระบบ", title: "UNESCO ClassMap", client: "การศึกษา / UNESCO", desc: "ตรวจสอบแอปพลิเคชันและระบบ UNESCO ClassMap ประเมินสถาปัตยกรรม UX และความครบถ้วนของฟีเจอร์", stats: [{ label: "ลูกค้า", val: "UNESCO" }, { label: "ขอบเขต", val: "Full Audit" }] },
    ],
  },
  testimonials: {
    badge: "รีวิวจากลูกค้า",
    heading1: "ลูกค้า",
    headingItalic: "พูดถึงเรา",
    items: [
      { quote: "InnoLab transformed our vision into reality with their innovative solutions. The team was professional and attentive.", name: "Mr. Smith", role: "Founder", company: "Empathy Sauce" },
      { quote: "Exceptional service and attention to detail! The team at InnoLab truly cares about delivering quality work.", name: "Ko Chan", role: "Marketing Head", company: "" },
      { quote: "Working with InnoLab was an absolute pleasure. They delivered exactly what we needed, on time and with great care!", name: "Ko Alex", role: "CTO", company: "" },
      { quote: "InnoLab's creative direction gave our brand a fresh identity that truly resonates with our audience. The process was smooth, collaborative, and inspiring.", name: "Ryan", role: "Founder", company: "EcoWave Tech" },
    ],
  },
  about: {
    badge: "ทีมของเรา",
    heading1: "ทีมเล็ก",
    heading2: "ผลกระทบใหญ่",
    para1: "InnoLab Digital Solutions เป็นเอเจนซีพัฒนาเว็บและมือถือที่ตั้งอยู่ในกรุงเทพฯ เราเชี่ยวชาญในการออกแบบและพัฒนาผลิตภัณฑ์ดิจิทัลที่ช่วยธุรกิจเติบโตออนไลน์ ตั้งแต่เว็บไซต์มืออาชีพจนถึงระบบแพลตฟอร์มที่ซับซ้อน",
    para2: "เราผสานบริการแบบแพ็กเกจสำหรับโปรเจกต์ที่คาดเดาได้กับการพัฒนาแบบกำหนดเองสำหรับผลิตภัณฑ์ดิจิทัลที่ซับซ้อน เพื่อความชัดเจนสำหรับลูกค้าและผลลัพธ์ที่มีคุณภาพในทุกการมีส่วนร่วม",
    teamTitle: "ทีมงาน",
    stats: [{ val: "4", label: "สมาชิกทีม" }, { val: "20+", label: "โปรเจกต์ที่ส่งมอบ" }, { val: "3", label: "ประเทศที่ให้บริการ" }, { val: "100%", label: "ความพึงพอใจลูกค้า" }],
    team: [{ name: "ผู้ก่อตั้งและนักพัฒนา", role: "Full-Stack Engineering · กลยุทธ์", initial: "F" }, { name: "นักออกแบบ UI/UX", role: "เอกลักษณ์แบรนด์ · ระบบออกแบบ", initial: "D" }, { name: "นักการตลาดดิจิทัล", role: "Meta Ads · Google · SEO", initial: "M" }, { name: "ผู้จัดการโปรเจกต์", role: "ส่งมอบ · ความสำเร็จลูกค้า", initial: "P" }],
  },
  contact: {
    badge: "เริ่มโปรเจกต์", heading1: "เริ่ม", headingItalic: "โปรเจกต์", sub: "จัดระเบียบวิสัยทัศน์ของคุณกับทีมผู้เชี่ยวชาญ ใช้เวลาไม่ถึง 2 นาที",
    projectTypes: [{ label: "แพลตฟอร์มเว็บ", icon: "🌐" }, { label: "แอปพลิเคชัน", icon: "📱" }, { label: "การตลาดดิจิทัล", icon: "📣" }, { label: "ออกแบบแบรนด์", icon: "🎨" }],
    budgets: [{ tier: "ระดับ 1", range: "$500 - $2K" }, { tier: "ระดับ 2", range: "$2K - $5K" }, { tier: "ระดับ 3", range: "$5K - $15K" }, { tier: "ระดับ 4", range: "$15K+" }],
    stepTitles: { 1: "เราจะสร้างอะไร?", 2: "งบประมาณของคุณเท่าไร?", 3: "บอกเราเกี่ยวกับคุณ", 4: "รายละเอียดสุดท้าย" },
    stepDesc: { 1: "เลือกหมวดหมู่หลัก", 2: "กำหนดระดับการลงทุน", 3: "ช่วยให้เราทำความรู้จักคุณ", 4: "มีอะไรอื่นที่เราควรรู้?" },
    fields: { name: "ชื่อของคุณ *", namePH: "สมชาย ใจดี", email: "อีเมล *", emailPH: "example@company.com", company: "ชื่อบริษัท / ธุรกิจ", companyPH: "บริษัท ABC", phone: "โทรศัพท์ / WhatsApp (ไม่บังคับ)", phonePH: "+66 81 234 5678", message: "อธิบายโปรเจกต์ *", messagePH: "บอกเราเกี่ยวกับธุรกิจ สิ่งที่คุณต้องการสร้าง และเป้าหมายของคุณ...", startDate: "วันที่ต้องการเริ่ม (ไม่บังคับ)", startDatePH: "เร็วๆ นี้ / เดือนหน้า" },
    nav: { back: "← ย้อนกลับ", continue: "ดำเนินการต่อ →", nextContact: "ต่อไป: ข้อมูลติดต่อ →", nextDetails: "ต่อไป: รายละเอียด →", submit: "ส่งคำขอ →" },
    sidebar: { title: "คำขอโปรเจกต์", awaiting: "รอการเลือก", inProgress: "กำลังดำเนินการ", finalStep: "ขั้นตอนสุดท้าย", note: "หมายเหตุจากเอเจนซี่", noteText: "\"เราตอบกลับคำขอโปรเจกต์ใหม่ภายใน 24 ชั่วโมงทำการ มาสร้างสิ่งที่น่าทึ่งด้วยกัน\"" },
    success: { badge: "ได้รับคำขอแล้ว", heading1: "การเดินทางของคุณ", heading2: "เริ่มต้นแล้ว", sub: "ขอบคุณที่ติดต่อเรา ทีมของเรากำลังตรวจสอบรายละเอียดของคุณอยู่", strong: "การตอบกลับส่วนตัว", ctaPrimary: "ดูผลงานของเรา →", ctaSecondary: "กลับหน้าแรก", labels: ["ปลอดภัย", "ตอบกลับเร็ว", "คุณภาพสูง"] },
    errors: { reqName: "กรุณาระบุชื่อ", reqEmail: "กรุณาระบุอีเมล", invEmail: "อีเมลไม่ถูกต้อง", reqMessage: "กรุณาอธิบายโปรเจกต์ของคุณ" },
  },
  footer: {
    tagline: "ทีมครีเอทีฟประสิทธิภาพสูงสำหรับธุรกิจที่ต้องการครองตลาดดิจิทัล",
    servicesTitle: "บริการ", contactTitle: "ติดต่อ",
    services: ["เว็บไซต์ธุรกิจ", "แพลตฟอร์ม E-commerce", "ระบบการจอง", "Marketplace", "แอปมือถือ"],
    email: "contact@innolabdigitalsolutions.com", whatsapp: "WhatsApp พร้อมให้บริการ", startProject: "เริ่มโปรเจกต์ →",
    privacy: "นโยบายความเป็นส่วนตัว", terms: "ข้อกำหนดการใช้งาน", legal: "กฎหมาย", rights: "สงวนลิขสิทธิ์",
  },
};

const zh: Translations = {
  nav: { services: "服务", process: "流程", work: "案例", about: "关于", cta: "开始对话" },
  hero: {
    badge: "接受项目合作 · 2026",
    headline1: "将",
    headlineItalic: "愿景",
    headline2: "转化为",
    headline3: "创新的",
    headline4: "现实。",
    sub: "为寻求主导数字领域的企业提供高性能创意团队 - 网站、应用、营销与品牌设计",
    ctaPrimary: "开启旅程",
    ctaSecondary: "我们的方法论",
    scroll: "向下滚动",
    activeProject: "进行中项目",
    avgGrowth: "客户平均增长",
  },
  partners: { title: "我们精通的技术与平台" },
  services: {
    badge: "我们的服务",
    heading1: "服务 &",
    headingItalic: "产品",
    sub: "从专业企业网站到复杂数字平台生态系统 - 我们构建推动业务增长的数字产品",
    items: [
      { num: "01", title: "企业网站开发", desc: "为公司、初创企业和品牌打造专业响应式网站，含SEO优化结构、内容管理系统及潜在客户表单，数周内交付。", tags: ["Next.js", "Tailwind CSS", "Headless CMS"], stat: "2-8周", statLabel: "交付周期" },
      { num: "02", title: "电商平台开发", desc: "在线商城配备完整商品目录、购物车、安全结账和支付集成，可管理订单、库存及客户关系。", tags: ["Next.js", "Laravel API", "Payment Gateway"], stat: "起价$800", statLabel: "起始投资" },
      { num: "03", title: "预约管理系统", desc: "为诊所、美发沙龙、酒店和活动主办方定制预约调度平台，含日历管理、预约表单及自动通知。", tags: ["Laravel", "Calendar API", "SMS/Email"], stat: "4-10周", statLabel: "开发周期" },
      { num: "04", title: "多商户平台", desc: "连接买家与卖家的多商户数字市场，包含商家入驻、交易流程、佣金管理及评价系统，深度定制化。", tags: ["Next.js", "Laravel", "Custom"], stat: "12+周", statLabel: "定制化交付" },
      { num: "05", title: "移动应用开发", desc: "使用React Native开发iOS及Android应用，涵盖消费者应用、平台配套应用及企业内部工具，按产品愿景逐项定制。", tags: ["React Native", "Expo", "iOS & Android"], stat: "8-16+周", statLabel: "开发周期" },
    ],
  },
  process: {
    badge: "我们的流程",
    heading1: "开发",
    heading2: "流程",
    sub: "从第一次沟通到最终交付，清晰有序的工作流程 - 7个阶段确保每一步的质量与透明度。",
    stages: [
      { num: "01", title: "需求发现", desc: "深入了解您的业务目标、目标受众和项目范围。我们提前提出正确问题，在任何工作开始前确保需求对齐。", tags: ["1-2周", "需求分析", "目标确认"], deliverables: ["项目简报", "范围文档"], stageLabel: "阶段", deliverableLabel: "交付物" },
      { num: "02", title: "项目规划", desc: "定义网站架构、信息层级和详细项目时间表。每个页面、功能和集成在设计或开发开始前都已规划完毕。", tags: ["1-2周", "网站地图", "时间规划"], deliverables: ["信息架构", "项目时间表"], stageLabel: "阶段", deliverableLabel: "交付物" },
      { num: "03", title: "UI设计", desc: "将需求转化为线框图、高保真设计稿和交互原型。每个阶段获得客户确认后才开始编写代码。", tags: ["2-4周", "线框图", "Figma"], deliverables: ["设计稿", "已确认原型"], stageLabel: "阶段", deliverableLabel: "交付物" },
      { num: "04", title: "开发实现", desc: "按照已批准的设计和架构构建前端、后端和所有集成功能。整洁、可扩展的代码交付到测试环境。", tags: ["按项目周期", "前端开发", "后端与API"], deliverables: ["测试环境构建", "集成功能"], stageLabel: "阶段", deliverableLabel: "交付物" },
      { num: "05", title: "测试验证", desc: "跨设备、浏览器和用户场景的质量保证测试。在正式上线前完成性能、安全性和功能检验。", tags: ["1-2周", "质量保证", "跨设备测试"], deliverables: ["QA测试报告", "无缺陷版本"], stageLabel: "阶段", deliverableLabel: "交付物" },
      { num: "06", title: "部署上线", desc: "生产服务器配置、域名设置、SSL证书和正式上线。结构化的发布流程确保零停机时间和平滑过渡。", tags: ["约1周", "生产环境", "正式上线"], deliverables: ["正式网站", "服务器配置"], stageLabel: "阶段", deliverableLabel: "交付物" },
      { num: "07", title: "交接移交", desc: "团队培训、文档移交和持续支持过渡。您将获得独立管理产品所需的一切，我们在上线后持续提供支持。", tags: ["持续进行", "团队培训", "技术支持"], deliverables: ["使用文档", "支持计划"], stageLabel: "阶段", deliverableLabel: "交付物" },
    ],
    ctaHeading: "准备好开始了吗？", ctaSub: "让我们在您的下一个项目中一起走过这个流程。", ctaPrimary: "启动项目", ctaSecondary: "查看我们的案例",
  },
  work: {
    badge: "我们的作品",
    heading1: "精选",
    headingItalic: "案例",
    viewAll: "查看所有项目 →",
    projects: [
      { tag: "网站+管理面板", title: "Huan Tai", client: "建筑行业", desc: "企业网站配备集成管理面板，用于项目跟踪、团队协调和客户报告。", stats: [{ label: "系统", val: "Admin CMS" }, { label: "行业", val: "建筑" }] },
      { tag: "商业网站", title: "SoulSmith", client: "商业 / 品牌", desc: "高影响力商业网站，强化品牌形象展示，提升用户体验并驱动商业线索转化。", stats: [{ label: "重点", val: "品牌" }, { label: "周期", val: "3周" }] },
      { tag: "平台+应用", title: "Sa Kyi", client: "健康与健身", desc: "全栈健康平台，含网页管理面板、动态健身课程、博客CMS及React Native移动应用。", stats: [{ label: "平台", val: "网页+应用" }, { label: "技术", val: "全栈" }] },
      { tag: "系统审查", title: "UNESCO ClassMap", client: "教育 / UNESCO", desc: "UNESCO ClassMap应用与系统全面审查，评估架构、用户体验及功能完整性，提供可行改进建议。", stats: [{ label: "客户", val: "UNESCO" }, { label: "范围", val: "全面审计" }] },
    ],
  },
  testimonials: {
    badge: "客户评价",
    heading1: "客户",
    headingItalic: "怎么说",
    items: [
      { quote: "InnoLab transformed our vision into reality with their innovative solutions. The team was professional and attentive.", name: "Mr. Smith", role: "Founder", company: "Empathy Sauce" },
      { quote: "Exceptional service and attention to detail! The team at InnoLab truly cares about delivering quality work.", name: "Ko Chan", role: "Marketing Head", company: "" },
      { quote: "Working with InnoLab was an absolute pleasure. They delivered exactly what we needed, on time and with great care!", name: "Ko Alex", role: "CTO", company: "" },
      { quote: "InnoLab's creative direction gave our brand a fresh identity that truly resonates with our audience. The process was smooth, collaborative, and inspiring.", name: "Ryan", role: "Founder", company: "EcoWave Tech" },
    ],
  },
  about: {
    badge: "团队介绍",
    heading1: "小团队。",
    heading2: "大影响。",
    para1: "InnoLab Digital Solutions是一家总部位于曼谷的网络和移动开发机构。我们专注于设计和构建帮助企业实现线上增长的数字产品--从专业网站到复杂的平台生态系统。",
    para2: "我们将针对可预测项目的打包服务与针对复杂数字产品的定制开发相结合，确保为每个项目提供清晰透明的客户体验和优质的交付成果。",
    teamTitle: "团队成员",
    stats: [{ val: "4", label: "团队成员" }, { val: "20+", label: "交付项目" }, { val: "3", label: "服务国家" }, { val: "100%", label: "客户满意度" }],
    team: [{ name: "创始人兼开发者", role: "全栈工程 · 战略", initial: "F" }, { name: "UI/UX设计师", role: "品牌识别 · 设计系统", initial: "D" }, { name: "数字营销师", role: "Meta广告 · Google · SEO", initial: "M" }, { name: "项目经理", role: "交付 · 客户成功", initial: "P" }],
  },
  contact: {
    badge: "启动项目", heading1: "启动", headingItalic: "项目", sub: "与我们的专家团队构建您的愿景，不超过2分钟",
    projectTypes: [{ label: "网络平台", icon: "🌐" }, { label: "软件应用", icon: "📱" }, { label: "数字增长", icon: "📣" }, { label: "品牌设计", icon: "🎨" }],
    budgets: [{ tier: "层级 1", range: "$500 - $2K" }, { tier: "层级 2", range: "$2K - $5K" }, { tier: "层级 3", range: "$5K - $15K" }, { tier: "层级 4", range: "$15K+" }],
    stepTitles: { 1: "我们要构建什么？", 2: "您的预算是多少？", 3: "告诉我们关于您的信息", 4: "最终细节" },
    stepDesc: { 1: "选择主要类别", 2: "确定投资级别", 3: "帮助我们了解您", 4: "还有什么我们需要知道的？" },
    fields: { name: "您的姓名 *", namePH: "张伟", email: "电子邮件 *", emailPH: "zhang@company.com", company: "公司 / 业务名称", companyPH: "某某有限公司", phone: "电话 / WhatsApp（可选）", phonePH: "+86 138 0000 0000", message: "描述您的项目 *", messagePH: "告诉我们关于您的业务、您想要构建的内容、您的目标...", startDate: "预期开始日期（可选）", startDatePH: "尽快 / 下个月 / 2026年第二季度" },
    nav: { back: "← 返回", continue: "继续 →", nextContact: "下一步：联系方式 →", nextDetails: "下一步：详细信息 →", submit: "提交询价 →" },
    sidebar: { title: "项目询价", awaiting: "等待选择", inProgress: "进行中", finalStep: "最后步骤", note: "机构备注", noteText: "\"我们通常在24个工作小时内回复新项目询价，让我们一起构建非凡的东西\"" },
    success: { badge: "已收到询价", heading1: "您的旅程", heading2: "现在开始", sub: "感谢您的联系，我们的团队已经在审查您的详情", strong: "个人回复", ctaPrimary: "探索我们的案例 →", ctaSecondary: "返回首页", labels: ["安全接收", "快速响应", "卓越品质"] },
    errors: { reqName: "姓名必填", reqEmail: "邮箱必填", invEmail: "请输入有效的邮箱地址", reqMessage: "请描述您的项目" },
  },
  footer: {
    tagline: "为寻求主导数字领域的企业提供高性能创意团队",
    servicesTitle: "服务", contactTitle: "联系方式",
    services: ["企业网站", "电商平台", "预约系统", "多商户平台", "移动应用"],
    email: "contact@innolabdigitalsolutions.com", whatsapp: "WhatsApp 随时可联系", startProject: "启动项目 →",
    privacy: "隐私政策", terms: "服务条款", legal: "法律声明", rights: "版权所有。",
  },
};

const translations: Record<Locale, Translations> = { en, th, zh };

interface LocaleContextType {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: Translations;
}

const LocaleContext = createContext<LocaleContextType>({
  locale: "en",
  setLocale: () => {},
  t: en,
});

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("locale") as Locale | null;
    if (saved && translations[saved]) setLocaleState(saved);
    setMounted(true);
  }, []);

  const setLocale = (l: Locale) => {
    setLocaleState(l);
    localStorage.setItem("locale", l);
  };

  if (!mounted) return null;

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t: translations[locale] }}>
      {children}
    </LocaleContext.Provider>
  );
}

export const useLocale = () => useContext(LocaleContext);