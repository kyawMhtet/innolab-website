export interface WorkProject {
  slug: string;
  num: string;
  tag: string;
  title: string;
  client: string;
  industry: string;
  year: string;
  timeline: string;
  role: string;
  stack: string[];
  color: string;
  overview: string;
  challenge: string;
  solution: string;
  metrics: { val: string; label: string }[];
  images: {
    hero: string;
    full1: string;
    half1: string;
    half2: string;
  };
  nextSlug: string;
  nextTitle: string;
  nextTag: string;
  nextColor: string;
  hideGallery?: boolean;
}

export const works: WorkProject[] = [
  {
    slug: "huan-tai",
    num: "01",
    tag: "Web + Dashboard",
    title: "Huan Tai",
    client: "Huan Tai Co., Ltd.",
    industry: "Building & Construction",
    year: "2026",
    timeline: "8 Weeks",
    role: "Full-Stack Development",
    stack: ["Next.js", "Laravel", "MySQL", "Tailwind CSS", "REST API"],
    color: "#5b8def",
    overview:
      "A comprehensive corporate web presence for a Bangkok-based construction group, integrating a custom admin dashboard for internal project tracking, client reporting, and team coordination. The platform bridges the gap between the company's public identity and its operational workflows.",
    challenge:
      "Huan Tai needed a digital presence that matched their scale and reputation in the construction sector - but also required a private-facing operational system for managing project pipelines, client documents, and multi-team coordination across active sites.",
    solution:
      "We architected a decoupled system: a polished Next.js marketing site for public-facing brand presence, paired with a full Laravel-backed admin dashboard for internal operations. Role-based access, document management, and real-time project status tracking were built to match the company's operational workflows.",
    metrics: [
      { val: "8 wks", label: "Time to launch" },
      { val: "3", label: "User role types" },
      { val: "CMS", label: "Admin system" },
      { val: "2×", label: "Team efficiency" },
    ],
    images: {
      hero: "/images/work/huan-tai/hero.png",
      full1: "/images/work/huan-tai/screen-1.png",
      half1: "/images/work/huan-tai/screen-2.png",
      half2: "/images/work/huan-tai/screen-3.png",
    },
    nextSlug: "soulsmith",
    nextTitle: "SoulSmith",
    nextTag: "Commercial Website",
    nextColor: "#ff6b9d",
  },
  {
    slug: "soulsmith",
    num: "02",
    tag: "Commercial Website",
    title: "SoulSmith",
    client: "SoulSmith",
    industry: "Commercial / Brand",
    year: "2021",
    timeline: "3 Weeks",
    role: "UI Design · Frontend Dev",
    stack: ["Next.js", "Framer Motion", "Tailwind CSS", "Vercel"],
    color: "#ff6b9d",
    overview:
      "A high-impact commercial website crafted to capture and communicate the distinctive personality of the SoulSmith brand. The project prioritised visual identity, storytelling, and lead conversion - delivered in a rapid 3-week sprint engagement.",
    challenge:
      "SoulSmith needed to rapidly establish a credible, distinctive online presence that communicated their brand personality and drove meaningful business engagement - without the typical timelines of a full creative agency process.",
    solution:
      "We compressed discovery and design into a single-phase sprint - beginning with brand alignment sessions before moving directly into high-fidelity design and production build. The result is a cinematic, scroll-driven website that blends brand storytelling with conversion-focused structure.",
    metrics: [
      { val: "3 wks", label: "Brief to live" },
      { val: "100%", label: "Custom design" },
      { val: "1", label: "Sprint delivery" },
      { val: "↑", label: "Brand perception" },
    ],
    images: {
      hero: "/images/work/soulsmith/hero.png",
      full1: "/images/work/soulsmith/screen-1.png",
      half1: "/images/work/soulsmith/screen-2.png",
      half2: "/images/work/soulsmith/screen-3.png",
    },
    nextSlug: "sa-kyi",
    nextTitle: "Sa Kyi",
    nextTag: "Platform + App",
    nextColor: "#2563EB",
  },
  {
    slug: "sa-kyi",
    num: "03",
    tag: "Platform + App",
    title: "Sa Kyi",
    client: "Sa Kyi Health",
    industry: "Health & Wellness",
    year: "2025-2026",
    timeline: "1 year (ongoing)",
    role: "Full-Stack · Mobile Dev",
    stack: ["Next.js", "Laravel", "React Native", "MySQL", "Expo", "REST API"],
    color: "#2563EB",
    overview:
      "A full-stack health and wellness platform serving both web and mobile audiences. The system encompasses a dynamic programme management interface, a content-rich blog CMS, member dashboards, and a cross-platform React Native application for iOS and Android.",
    challenge:
      "Sa Kyi required a unified digital ecosystem - not a patchwork of tools. Members needed to access wellness programmes, track progress, and consume content whether on web or mobile, while administrators needed a powerful backend to manage dynamic content and member data at scale.",
    solution:
      "We designed and developed a tightly integrated platform: a Laravel API core serving both the Next.js web dashboard and the React Native mobile app. Shared authentication, content, and programme data ensured members received a seamless experience across every touchpoint.",
    metrics: [
      { val: "Web+App", label: "2 Platforms" },
      { val: "iOS+Android", label: "Mobile Application" },
      { val: "14 wks", label: "Full delivery" },
      { val: "1", label: "Unified API" },
    ],
    images: {
      hero: "/images/work/sa-kyi/hero.png",
      full1: "/images/work/sa-kyi/screen-1.png",
      half1: "/images/work/sa-kyi/screen-2.png",
      half2: "/images/work/sa-kyi/screen-3.png",
    },
    nextSlug: "unesco-classmap",
    nextTitle: "UNESCO ClassMap",
    nextTag: "System Review",
    nextColor: "#818cf8",
  },
  {
    slug: "unesco-classmap",
    num: "04",
    tag: "System Review",
    title: "UNESCO ClassMap",
    client: "UNESCO",
    industry: "Education / International",
    year: "2026",
    timeline: "3 Months",
    role: "Technical Audit · UX Review",
    stack: ["System Analysis", "UX Audit", "Architecture Review", "Documentation"],
    color: "#818cf8",
    overview:
      "A comprehensive technical and UX evaluation of UNESCO's ClassMap application - a digital education tool used across multiple countries. The engagement produced a structured audit report covering architecture integrity, user experience patterns, accessibility, and feature completeness with prioritised recommendations.",
    challenge:
      "UNESCO required an independent, expert evaluation of ClassMap's current state before committing to a major development phase. Internal teams lacked the external perspective needed to surface systemic issues and prioritise improvements objectively.",
    solution:
      "We conducted a structured four-week audit spanning architecture review, UX heuristic evaluation, cross-device testing, and stakeholder interviews. Findings were synthesised into a prioritised recommendation report, giving UNESCO a clear, actionable roadmap for the platform's next phase.",
    metrics: [
      { val: "4 wks", label: "Audit timeline" },
      { val: "UNESCO", label: "Client body" },
      { val: "Full", label: "System scope" },
      { val: "Plan →", label: "Delivered" },
    ],
    images: {
      hero: "/images/work/unesco-classmap/hero.png",
      full1: "/images/work/unesco-classmap/screen-1.png",
      half1: "/images/work/unesco-classmap/screen-2.png",
      half2: "/images/work/unesco-classmap/screen-3.png",
    },
    nextSlug: "huan-tai",
    nextTitle: "Huan Tai",
    nextTag: "Web + Dashboard",
    nextColor: "#5b8def",
    hideGallery: true,
  },
];

export function getWork(slug: string): WorkProject | undefined {
  return works.find((w) => w.slug === slug);
}
