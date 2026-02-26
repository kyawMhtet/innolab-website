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
    badge: "Available for projects · 2025",
    headline1: "Elevating",
    headlineItalic: "visions",
    headline2: "into",
    headline3: "innovative digital",
    headline4: "reality.",
    sub: "A high-performance creative team for businesses seeking to dominate the digital landscape — websites, apps, marketing & brand design.",
    ctaPrimary: "Start Your Journey",
    ctaSecondary: "Our Methodology",
    scroll: "Scroll",
    activeProject: "Active Project",
    avgGrowth: "Avg Client Growth",
  },
  partners: { title: "Technologies & Platforms We Master" },
  services: {
    badge: "Our Ecosystem",
    heading1: "SERVICES &",
    headingItalic: "Verticals.",
    sub: "We blend strategy, design, and engineering into one seamless creative engine.",
    items: [
      { num: "01", title: "Web Design & Development", desc: "Pixel-perfect websites engineered for conversion and emotional resonance. From landing pages to full-scale platforms.", tags: ["Next.js", "Webflow", "Shopify"], stat: "3-Week Launch", statLabel: "Avg turnaround" },
      { num: "02", title: "App Development", desc: "Full-stack applications built with scalable architecture. Mobile-ready, API-integrated, performance-obsessed.", tags: ["React Native", "Node.js", "API Design"], stat: "99.9%", statLabel: "Uptime SLA" },
      { num: "03", title: "Digital Marketing", desc: "Data-driven campaigns across Meta, Google & LinkedIn. We make your budget work harder and your brand grow faster.", tags: ["Meta Ads", "Google Ads", "SEO"], stat: "+42% Conv.", statLabel: "Avg conversion lift" },
      { num: "04", title: "Brand & Design", desc: "Strategic identity systems — logos, brand guidelines, UI/UX, and marketing materials that command attention.", tags: ["Figma", "Branding", "UI/UX"], stat: "4-Person", statLabel: "Dedicated team" },
    ],
  },
  process: {
    badge: "Operational Workflow",
    heading1: "A Systematic Journey",
    heading2: "to Digital Mastery",
    sub: "We've refined our process into a precise, four-stage evolution that bridges vision and execution.",
    stages: [
      { num: "01", title: "Intelligence & Discovery", desc: "We begin by dissecting your market positioning and user pain points. Every technical decision aligns with business ROI.", tags: ["2 Weeks", "Market Analysis", "User Personas"], deliverables: ["Strategic Roadmap", "Information Architecture"], stageLabel: "STAGE", deliverableLabel: "Deliverable" },
      { num: "02", title: "Architecture & Design", desc: "Form follows function. We translate strategy into high-fidelity wireframes and design systems optimized for conversion.", tags: ["3-4 Weeks", "UI System", "Prototyping"], deliverables: ["Interactive Prototypes", "Comprehensive Design System"], stageLabel: "STAGE", deliverableLabel: "Deliverable" },
      { num: "03", title: "Engineering & Core Build", desc: "Our development team converts designs into pixel-perfect, scalable code. We focus on speed, security, and future-proof architecture.", tags: ["6-10 Weeks", "API Design", "Front-End"], deliverables: ["Production-Ready Code", "Integrated API Systems"], stageLabel: "STAGE", deliverableLabel: "Deliverable" },
      { num: "04", title: "Deployment & Scaling", desc: "We orchestrate a seamless launch with QA and server-side optimization. Post-launch, we monitor and scale as your traffic grows.", tags: ["Continuous", "AWS / Vercel", "SEO Optimized"], deliverables: ["Optimized Performance Report", "24/7 Monitoring Dashboard"], stageLabel: "STAGE", deliverableLabel: "Deliverable" },
    ],
    ctaHeading: "Ready to evolve?", ctaSub: "Let's apply this proven methodology to your next digital venture.", ctaPrimary: "Start Your Project", ctaSecondary: "Review Our Work",
  },
  work: {
    badge: "Our Artifacts",
    heading1: "SELECTED",
    headingItalic: "Work.",
    viewAll: "View All Projects →",
    projects: [
      { tag: "Web Platform", title: "E-Commerce Redesign", client: "Retail Brand", desc: "Complete Shopify overhaul with custom product configurator and checkout optimization.", stats: [{ label: "Conversion Rate", val: "+68%" }, { label: "Load Time", val: "0.8s" }] },
      { tag: "Brand Identity", title: "Brand & Digital System", client: "Startup", desc: "Full brand identity from logo to UI kit — ready for launch in 4 weeks.", stats: [{ label: "Deliverables", val: "40+" }, { label: "Timeline", val: "4 Weeks" }] },
      { tag: "Digital Marketing", title: "Performance Campaign", client: "F&B Industry", desc: "Multi-channel ad strategy across Meta and Google — scaled from zero to 5K daily orders.", stats: [{ label: "ROAS", val: "4.2x" }, { label: "Daily Orders", val: "5K" }] },
      { tag: "App Development", title: "SaaS Dashboard", client: "B2B Platform", desc: "Real-time analytics platform with custom API integrations and role-based access.", stats: [{ label: "Users", val: "10K+" }, { label: "Uptime", val: "99.9%" }] },
    ],
  },
  about: {
    badge: "The Collective",
    heading1: "Small team.",
    heading2: "Big impact.",
    para1: "Innolab Digital Solutions is a focused 4-person creative engine. You work directly with the team building your product — every day, every decision. No hand-offs to juniors.",
    para2: "Founded by a developer with a passion for turning business problems into elegant digital solutions, Innolab brings together design, engineering, marketing, and strategy under one roof.",
    teamTitle: "The Team",
    stats: [{ val: "4", label: "Team Members" }, { val: "20+", label: "Projects Delivered" }, { val: "3", label: "Countries Served" }, { val: "100%", label: "Client Satisfaction" }],
    team: [{ name: "Founder & Developer", role: "Full-Stack Engineering · Strategy", initial: "F" }, { name: "UI/UX Designer", role: "Brand Identity · Design Systems", initial: "D" }, { name: "Digital Marketer", role: "Meta Ads · Google · SEO", initial: "M" }, { name: "Project Manager", role: "Delivery · Client Success", initial: "P" }],
  },
  contact: {
    badge: "Start a Project", heading1: "Start a", headingItalic: "Project", sub: "Structure your vision with our expert team. Takes less than 2 minutes.",
    projectTypes: [{ label: "Web Platform", icon: "🌐" }, { label: "Software App", icon: "📱" }, { label: "Digital Growth", icon: "📣" }, { label: "Brand Design", icon: "🎨" }],
    budgets: [{ tier: "Tier 1", range: "$500 – $2K" }, { tier: "Tier 2", range: "$2K – $5K" }, { tier: "Tier 3", range: "$5K – $15K" }, { tier: "Tier 4", range: "$15K+" }],
    stepTitles: { 1: "What are we building?", 2: "What is your budget?", 3: "Tell us about you.", 4: "Final details." },
    stepDesc: { 1: "Select the primary category.", 2: "Define the investment level.", 3: "Help us get to know you.", 4: "Anything else we should know?" },
    fields: { name: "Your Name *", namePH: "John Smith", email: "Email Address *", emailPH: "john@company.com", company: "Company / Business Name", companyPH: "Acme Corp", phone: "Phone / WhatsApp (optional)", phonePH: "+1 234 567 8900", message: "Describe Your Project *", messagePH: "Tell us about your business, what you're looking to build, your goals...", startDate: "Preferred Start Date (optional)", startDatePH: "ASAP / Next Month / Q2 2025" },
    nav: { back: "← Back", continue: "Continue →", nextContact: "Next: Contact →", nextDetails: "Next: Details →", submit: "Submit Inquiry →" },
    sidebar: { title: "PROJECT INQUIRY", awaiting: "Awaiting selection", inProgress: "In progress", finalStep: "Final step", note: "AGENCY NOTE", noteText: "\"We typically respond to new project inquiries within 24 business hours. Let's build something remarkable.\"" },
    success: { badge: "Inquiry Received", heading1: "YOUR JOURNEY", heading2: "STARTS NOW", sub: "Thank you for reaching out. Our team is already reviewing your details.", strong: "personal response", ctaPrimary: "Explore Our Work →", ctaSecondary: "Back to Home", labels: ["Secure Intake", "Quick Response", "Elite Quality"] },
  },
  footer: {
    tagline: "A high-performance creative team for businesses seeking to dominate the digital landscape.",
    servicesTitle: "Services", contactTitle: "Contact",
    services: ["Web Design & Dev", "App Development", "Digital Marketing", "Brand & Design"],
    email: "contact@innolabdigitalsolutions.com", whatsapp: "WhatsApp Available", startProject: "Start a Project →",
    privacy: "Privacy Policy", terms: "Terms of Service", legal: "Legal", rights: "All rights reserved.",
  },
};

const th: Translations = {
  nav: { services: "บริการ", process: "กระบวนการ", work: "ผลงาน", about: "เกี่ยวกับ", cta: "เริ่มพูดคุย" },
  hero: {
    badge: "รับงานโปรเจกต์ · 2025",
    headline1: "ยกระดับ",
    headlineItalic: "วิสัยทัศน์",
    headline2: "สู่",
    headline3: "นวัตกรรม",
    headline4: "ที่ยอดเยี่ยม",
    sub: "ทีมครีเอทีฟประสิทธิภาพสูงสำหรับธุรกิจที่ต้องการครองตลาดดิจิทัล — เว็บไซต์ แอป การตลาด & ออกแบบแบรนด์",
    ctaPrimary: "เริ่มต้นเส้นทาง",
    ctaSecondary: "วิธีการของเรา",
    scroll: "เลื่อนลง",
    activeProject: "โปรเจกต์ที่ดำเนินอยู่",
    avgGrowth: "การเติบโตเฉลี่ยของลูกค้า",
  },
  partners: { title: "เทคโนโลยีและแพลตฟอร์มที่เราเชี่ยวชาญ" },
  services: {
    badge: "ระบบนิเวศของเรา",
    heading1: "บริการ &",
    headingItalic: "ความเชี่ยวชาญ",
    sub: "เราผสานกลยุทธ์ การออกแบบ และวิศวกรรมเข้าเป็นเครื่องจักรสร้างสรรค์ที่ไร้รอยต่อ",
    items: [
      { num: "01", title: "ออกแบบและพัฒนาเว็บ", desc: "เว็บไซต์ที่สมบูรณ์แบบ ออกแบบมาเพื่อการแปลงผลและสร้างความประทับใจ ตั้งแต่หน้า Landing Page จนถึงแพลตฟอร์มขนาดใหญ่", tags: ["Next.js", "Webflow", "Shopify"], stat: "3 สัปดาห์", statLabel: "เวลาส่งมอบเฉลี่ย" },
      { num: "02", title: "พัฒนาแอปพลิเคชัน", desc: "แอปพลิเคชัน Full-stack ที่สร้างด้วยสถาปัตยกรรมที่ขยายได้ รองรับมือถือ เชื่อมต่อ API และมุ่งเน้นประสิทธิภาพ", tags: ["React Native", "Node.js", "API Design"], stat: "99.9%", statLabel: "รับประกัน Uptime" },
      { num: "03", title: "การตลาดดิจิทัล", desc: "แคมเปญที่ขับเคลื่อนด้วยข้อมูลบน Meta, Google & LinkedIn ทำให้งบประมาณของคุณทำงานได้หนักขึ้นและแบรนด์เติบโตเร็วขึ้น", tags: ["Meta Ads", "Google Ads", "SEO"], stat: "+42%", statLabel: "อัตราการแปลงเฉลี่ย" },
      { num: "04", title: "แบรนด์และออกแบบ", desc: "ระบบเอกลักษณ์เชิงกลยุทธ์ — โลโก้ แนวทางแบรนด์ UI/UX และสื่อการตลาดที่ดึงดูดความสนใจ", tags: ["Figma", "Branding", "UI/UX"], stat: "4 คน", statLabel: "ทีมเฉพาะทาง" },
    ],
  },
  process: {
    badge: "ขั้นตอนการทำงาน",
    heading1: "เส้นทางที่เป็นระบบ",
    heading2: "สู่ความเชี่ยวชาญดิจิทัล",
    sub: "เราได้พัฒนากระบวนการให้เป็นการวิวัฒนาการ 4 ขั้นตอนที่เชื่อมโยงวิสัยทัศน์กับการปฏิบัติ",
    stages: [
      { num: "01", title: "วิเคราะห์และค้นหา", desc: "เราเริ่มต้นด้วยการวิเคราะห์ตำแหน่งตลาดและปัญหาของผู้ใช้ ทุกการตัดสินใจทางเทคนิคสอดคล้องกับ ROI ทางธุรกิจ", tags: ["2 สัปดาห์", "วิเคราะห์ตลาด", "Personas ผู้ใช้"], deliverables: ["แผนที่กลยุทธ์", "สถาปัตยกรรมข้อมูล"], stageLabel: "ขั้นตอน", deliverableLabel: "ผลงาน" },
      { num: "02", title: "สถาปัตยกรรมและออกแบบ", desc: "รูปแบบตามฟังก์ชัน เราแปลกลยุทธ์เป็น Wireframe ความแม่นยำสูงและระบบออกแบบที่เหมาะสมกับการแปลงผล", tags: ["3-4 สัปดาห์", "ระบบ UI", "Prototyping"], deliverables: ["Prototype แบบโต้ตอบ", "ระบบออกแบบครอบคลุม"], stageLabel: "ขั้นตอน", deliverableLabel: "ผลงาน" },
      { num: "03", title: "วิศวกรรมและการพัฒนา", desc: "ทีมพัฒนาของเราแปลงดีไซน์เป็นโค้ดที่สมบูรณ์แบบและขยายได้ เน้นความเร็ว ความปลอดภัย และสถาปัตยกรรมอนาคต", tags: ["6-10 สัปดาห์", "API Design", "Front-End"], deliverables: ["โค้ดพร้อมใช้งาน", "ระบบ API ที่เชื่อมต่อ"], stageLabel: "ขั้นตอน", deliverableLabel: "ผลงาน" },
      { num: "04", title: "ติดตั้งและขยาย", desc: "เราดำเนินการเปิดตัวที่ราบรื่นพร้อม QA และการเพิ่มประสิทธิภาพฝั่งเซิร์ฟเวอร์ หลังเปิดตัว เราติดตามและขยายตามการเติบโต", tags: ["ต่อเนื่อง", "AWS / Vercel", "SEO Optimized"], deliverables: ["รายงานประสิทธิภาพ", "แดชบอร์ดติดตาม 24/7"], stageLabel: "ขั้นตอน", deliverableLabel: "ผลงาน" },
    ],
    ctaHeading: "พร้อมที่จะพัฒนา?", ctaSub: "มาใช้วิธีการที่พิสูจน์แล้วนี้กับโปรเจกต์ดิจิทัลถัดไปของคุณ", ctaPrimary: "เริ่มโปรเจกต์", ctaSecondary: "ดูผลงานของเรา",
  },
  work: {
    badge: "ผลงานของเรา",
    heading1: "ผลงาน",
    headingItalic: "คัดสรร",
    viewAll: "ดูทุกโปรเจกต์ →",
    projects: [
      { tag: "แพลตฟอร์มเว็บ", title: "ปรับโฉม E-Commerce", client: "แบรนด์ค้าปลีก", desc: "ปรับโครงสร้าง Shopify ทั้งหมดพร้อม Product Configurator และการเพิ่มประสิทธิภาพ Checkout", stats: [{ label: "อัตราการแปลง", val: "+68%" }, { label: "เวลาโหลด", val: "0.8s" }] },
      { tag: "เอกลักษณ์แบรนด์", title: "ระบบแบรนด์และดิจิทัล", client: "Startup", desc: "เอกลักษณ์แบรนด์ครบครัน ตั้งแต่โลโก้จนถึง UI Kit — พร้อมเปิดตัวใน 4 สัปดาห์", stats: [{ label: "สิ่งส่งมอบ", val: "40+" }, { label: "ระยะเวลา", val: "4 สัปดาห์" }] },
      { tag: "การตลาดดิจิทัล", title: "แคมเปญประสิทธิภาพ", client: "อุตสาหกรรม F&B", desc: "กลยุทธ์โฆษณาหลายช่องทางบน Meta และ Google — เติบโตจาก 0 เป็น 5,000 ออเดอร์ต่อวัน", stats: [{ label: "ROAS", val: "4.2x" }, { label: "ออเดอร์/วัน", val: "5K" }] },
      { tag: "พัฒนาแอป", title: "SaaS Dashboard", client: "แพลตฟอร์ม B2B", desc: "แพลตฟอร์มวิเคราะห์แบบเรียลไทม์พร้อมการเชื่อมต่อ API และการจัดการสิทธิ์", stats: [{ label: "ผู้ใช้", val: "10K+" }, { label: "Uptime", val: "99.9%" }] },
    ],
  },
  about: {
    badge: "ทีมของเรา",
    heading1: "ทีมเล็ก",
    heading2: "ผลกระทบใหญ่",
    para1: "Innolab Digital Solutions คือเครื่องจักรสร้างสรรค์ 4 คนที่มุ่งเน้น คุณทำงานโดยตรงกับทีมที่สร้างผลิตภัณฑ์ของคุณ — ทุกวัน ทุกการตัดสินใจ ไม่มีการส่งต่องานให้มือใหม่",
    para2: "ก่อตั้งโดยนักพัฒนาที่มีความหลงใหลในการเปลี่ยนปัญหาธุรกิจเป็นโซลูชันดิจิทัลที่สวยงาม Innolab รวบรวมการออกแบบ วิศวกรรม การตลาด และกลยุทธ์ไว้ในที่เดียว",
    teamTitle: "ทีมงาน",
    stats: [{ val: "4", label: "สมาชิกทีม" }, { val: "20+", label: "โปรเจกต์ที่ส่งมอบ" }, { val: "3", label: "ประเทศที่ให้บริการ" }, { val: "100%", label: "ความพึงพอใจลูกค้า" }],
    team: [{ name: "ผู้ก่อตั้งและนักพัฒนา", role: "Full-Stack Engineering · กลยุทธ์", initial: "F" }, { name: "นักออกแบบ UI/UX", role: "เอกลักษณ์แบรนด์ · ระบบออกแบบ", initial: "D" }, { name: "นักการตลาดดิจิทัล", role: "Meta Ads · Google · SEO", initial: "M" }, { name: "ผู้จัดการโปรเจกต์", role: "ส่งมอบ · ความสำเร็จลูกค้า", initial: "P" }],
  },
  contact: {
    badge: "เริ่มโปรเจกต์", heading1: "เริ่ม", headingItalic: "โปรเจกต์", sub: "จัดระเบียบวิสัยทัศน์ของคุณกับทีมผู้เชี่ยวชาญ ใช้เวลาไม่ถึง 2 นาที",
    projectTypes: [{ label: "แพลตฟอร์มเว็บ", icon: "🌐" }, { label: "แอปพลิเคชัน", icon: "📱" }, { label: "การตลาดดิจิทัล", icon: "📣" }, { label: "ออกแบบแบรนด์", icon: "🎨" }],
    budgets: [{ tier: "ระดับ 1", range: "$500 – $2K" }, { tier: "ระดับ 2", range: "$2K – $5K" }, { tier: "ระดับ 3", range: "$5K – $15K" }, { tier: "ระดับ 4", range: "$15K+" }],
    stepTitles: { 1: "เราจะสร้างอะไร?", 2: "งบประมาณของคุณเท่าไร?", 3: "บอกเราเกี่ยวกับคุณ", 4: "รายละเอียดสุดท้าย" },
    stepDesc: { 1: "เลือกหมวดหมู่หลัก", 2: "กำหนดระดับการลงทุน", 3: "ช่วยให้เราทำความรู้จักคุณ", 4: "มีอะไรอื่นที่เราควรรู้?" },
    fields: { name: "ชื่อของคุณ *", namePH: "สมชาย ใจดี", email: "อีเมล *", emailPH: "example@company.com", company: "ชื่อบริษัท / ธุรกิจ", companyPH: "บริษัท ABC", phone: "โทรศัพท์ / WhatsApp (ไม่บังคับ)", phonePH: "+66 81 234 5678", message: "อธิบายโปรเจกต์ *", messagePH: "บอกเราเกี่ยวกับธุรกิจ สิ่งที่คุณต้องการสร้าง และเป้าหมายของคุณ...", startDate: "วันที่ต้องการเริ่ม (ไม่บังคับ)", startDatePH: "เร็วๆ นี้ / เดือนหน้า" },
    nav: { back: "← ย้อนกลับ", continue: "ดำเนินการต่อ →", nextContact: "ต่อไป: ข้อมูลติดต่อ →", nextDetails: "ต่อไป: รายละเอียด →", submit: "ส่งคำขอ →" },
    sidebar: { title: "คำขอโปรเจกต์", awaiting: "รอการเลือก", inProgress: "กำลังดำเนินการ", finalStep: "ขั้นตอนสุดท้าย", note: "หมายเหตุจากเอเจนซี่", noteText: "\"เราตอบกลับคำขอโปรเจกต์ใหม่ภายใน 24 ชั่วโมงทำการ มาสร้างสิ่งที่น่าทึ่งด้วยกัน\"" },
    success: { badge: "ได้รับคำขอแล้ว", heading1: "การเดินทางของคุณ", heading2: "เริ่มต้นแล้ว", sub: "ขอบคุณที่ติดต่อเรา ทีมของเรากำลังตรวจสอบรายละเอียดของคุณอยู่", strong: "การตอบกลับส่วนตัว", ctaPrimary: "ดูผลงานของเรา →", ctaSecondary: "กลับหน้าแรก", labels: ["ปลอดภัย", "ตอบกลับเร็ว", "คุณภาพสูง"] },
  },
  footer: {
    tagline: "ทีมครีเอทีฟประสิทธิภาพสูงสำหรับธุรกิจที่ต้องการครองตลาดดิจิทัล",
    servicesTitle: "บริการ", contactTitle: "ติดต่อ",
    services: ["ออกแบบและพัฒนาเว็บ", "พัฒนาแอป", "การตลาดดิจิทัล", "แบรนด์และออกแบบ"],
    email: "contact@innolabdigitalsolutions.com", whatsapp: "WhatsApp พร้อมให้บริการ", startProject: "เริ่มโปรเจกต์ →",
    privacy: "นโยบายความเป็นส่วนตัว", terms: "ข้อกำหนดการใช้งาน", legal: "กฎหมาย", rights: "สงวนลิขสิทธิ์",
  },
};

const zh: Translations = {
  nav: { services: "服务", process: "流程", work: "案例", about: "关于", cta: "开始对话" },
  hero: {
    badge: "接受项目合作 · 2025",
    headline1: "将",
    headlineItalic: "愿景",
    headline2: "转化为",
    headline3: "创新的",
    headline4: "现实。",
    sub: "为寻求主导数字领域的企业提供高性能创意团队 — 网站、应用、营销与品牌设计",
    ctaPrimary: "开启旅程",
    ctaSecondary: "我们的方法论",
    scroll: "向下滚动",
    activeProject: "进行中项目",
    avgGrowth: "客户平均增长",
  },
  partners: { title: "我们精通的技术与平台" },
  services: {
    badge: "我们的生态系统",
    heading1: "服务 &",
    headingItalic: "专业领域",
    sub: "我们将战略、设计和工程融为一体，打造无缝的创意引擎",
    items: [
      { num: "01", title: "网页设计与开发", desc: "像素级完美的网站，专为转化率和情感共鸣而设计，从落地页到完整平台", tags: ["Next.js", "Webflow", "Shopify"], stat: "3周上线", statLabel: "平均交付周期" },
      { num: "02", title: "应用开发", desc: "基于可扩展架构构建的全栈应用，移动端就绪、API集成、性能卓越", tags: ["React Native", "Node.js", "API设计"], stat: "99.9%", statLabel: "运行时间保证" },
      { num: "03", title: "数字营销", desc: "在Meta、Google和LinkedIn上的数据驱动营销活动，让您的预算发挥更大效益，品牌增长更快", tags: ["Meta广告", "Google广告", "SEO"], stat: "+42%转化", statLabel: "平均转化率提升" },
      { num: "04", title: "品牌与设计", desc: "战略性品牌识别系统 — 标志、品牌指南、UI/UX及吸引眼球的营销材料", tags: ["Figma", "品牌设计", "UI/UX"], stat: "4人团队", statLabel: "专属团队" },
    ],
  },
  process: {
    badge: "工作流程",
    heading1: "系统化旅程",
    heading2: "通往数字卓越",
    sub: "我们将流程精炼为精准的四阶段演进，连接愿景与执行",
    stages: [
      { num: "01", title: "洞察与发现", desc: "我们从剖析您的市场定位和用户痛点开始，每一个技术决策都与业务ROI保持一致", tags: ["2周", "市场分析", "用户画像"], deliverables: ["战略路线图", "信息架构"], stageLabel: "阶段", deliverableLabel: "交付物" },
      { num: "02", title: "架构与设计", desc: "形式服务于功能，我们将战略转化为高保真线框图和优化转化率的设计系统", tags: ["3-4周", "UI系统", "原型设计"], deliverables: ["交互原型", "综合设计系统"], stageLabel: "阶段", deliverableLabel: "交付物" },
      { num: "03", title: "工程与核心构建", desc: "我们的开发团队将设计转化为像素完美、可扩展的代码，专注于速度、安全性和面向未来的架构", tags: ["6-10周", "API设计", "前端开发"], deliverables: ["生产就绪代码", "集成API系统"], stageLabel: "阶段", deliverableLabel: "交付物" },
      { num: "04", title: "部署与扩展", desc: "我们协调无缝的上线流程，配合QA和服务端优化，上线后随流量增长持续监控和扩展", tags: ["持续进行", "AWS / Vercel", "SEO优化"], deliverables: ["性能优化报告", "24/7监控面板"], stageLabel: "阶段", deliverableLabel: "交付物" },
    ],
    ctaHeading: "准备好进化了吗？", ctaSub: "让我们将这套经过验证的方法论应用于您的下一个数字项目", ctaPrimary: "启动项目", ctaSecondary: "查看我们的案例",
  },
  work: {
    badge: "我们的作品",
    heading1: "精选",
    headingItalic: "案例",
    viewAll: "查看所有项目 →",
    projects: [
      { tag: "网络平台", title: "电商重新设计", client: "零售品牌", desc: "完整的Shopify改版，配备自定义产品配置器和结账流程优化", stats: [{ label: "转化率", val: "+68%" }, { label: "加载时间", val: "0.8s" }] },
      { tag: "品牌识别", title: "品牌与数字系统", client: "初创企业", desc: "从标志到UI套件的完整品牌识别 — 4周内准备就绪上线", stats: [{ label: "交付物", val: "40+" }, { label: "周期", val: "4周" }] },
      { tag: "数字营销", title: "效果营销活动", client: "餐饮行业", desc: "跨Meta和Google的多渠道广告策略 — 从零增长到每日5000订单", stats: [{ label: "ROAS", val: "4.2x" }, { label: "日订单", val: "5K" }] },
      { tag: "应用开发", title: "SaaS数据面板", client: "B2B平台", desc: "具有自定义API集成和基于角色访问的实时分析平台", stats: [{ label: "用户数", val: "10K+" }, { label: "运行时间", val: "99.9%" }] },
    ],
  },
  about: {
    badge: "团队介绍",
    heading1: "小团队。",
    heading2: "大影响。",
    para1: "Innolab Digital Solutions是一个专注的4人创意引擎，您直接与构建产品的团队合作 — 每天、每个决策，不转交给初级员工",
    para2: "由一位热衷于将商业问题转化为优雅数字解决方案的开发者创立，Innolab将设计、工程、营销和战略整合在同一屋檐下",
    teamTitle: "团队成员",
    stats: [{ val: "4", label: "团队成员" }, { val: "20+", label: "交付项目" }, { val: "3", label: "服务国家" }, { val: "100%", label: "客户满意度" }],
    team: [{ name: "创始人兼开发者", role: "全栈工程 · 战略", initial: "F" }, { name: "UI/UX设计师", role: "品牌识别 · 设计系统", initial: "D" }, { name: "数字营销师", role: "Meta广告 · Google · SEO", initial: "M" }, { name: "项目经理", role: "交付 · 客户成功", initial: "P" }],
  },
  contact: {
    badge: "启动项目", heading1: "启动", headingItalic: "项目", sub: "与我们的专家团队构建您的愿景，不超过2分钟",
    projectTypes: [{ label: "网络平台", icon: "🌐" }, { label: "软件应用", icon: "📱" }, { label: "数字增长", icon: "📣" }, { label: "品牌设计", icon: "🎨" }],
    budgets: [{ tier: "层级 1", range: "$500 – $2K" }, { tier: "层级 2", range: "$2K – $5K" }, { tier: "层级 3", range: "$5K – $15K" }, { tier: "层级 4", range: "$15K+" }],
    stepTitles: { 1: "我们要构建什么？", 2: "您的预算是多少？", 3: "告诉我们关于您的信息", 4: "最终细节" },
    stepDesc: { 1: "选择主要类别", 2: "确定投资级别", 3: "帮助我们了解您", 4: "还有什么我们需要知道的？" },
    fields: { name: "您的姓名 *", namePH: "张伟", email: "电子邮件 *", emailPH: "zhang@company.com", company: "公司 / 业务名称", companyPH: "某某有限公司", phone: "电话 / WhatsApp（可选）", phonePH: "+86 138 0000 0000", message: "描述您的项目 *", messagePH: "告诉我们关于您的业务、您想要构建的内容、您的目标...", startDate: "预期开始日期（可选）", startDatePH: "尽快 / 下个月 / 2025年第二季度" },
    nav: { back: "← 返回", continue: "继续 →", nextContact: "下一步：联系方式 →", nextDetails: "下一步：详细信息 →", submit: "提交询价 →" },
    sidebar: { title: "项目询价", awaiting: "等待选择", inProgress: "进行中", finalStep: "最后步骤", note: "机构备注", noteText: "\"我们通常在24个工作小时内回复新项目询价，让我们一起构建非凡的东西\"" },
    success: { badge: "已收到询价", heading1: "您的旅程", heading2: "现在开始", sub: "感谢您的联系，我们的团队已经在审查您的详情", strong: "个人回复", ctaPrimary: "探索我们的案例 →", ctaSecondary: "返回首页", labels: ["安全接收", "快速响应", "卓越品质"] },
  },
  footer: {
    tagline: "为寻求主导数字领域的企业提供高性能创意团队",
    servicesTitle: "服务", contactTitle: "联系方式",
    services: ["网页设计与开发", "应用开发", "数字营销", "品牌与设计"],
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