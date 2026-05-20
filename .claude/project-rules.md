# Project Context and Rules

This project is built with **Next.js 15 (App Router)**, **React 18**, **TypeScript**, and **Tailwind CSS**.

## Core Directives for Claude & Antigravity IDE

### 1. Architecture Guidelines
- **Use the App Router**: All routing happens in `src/app/`.
- **Component Strategy**: Default to Server Components. Only append `"use client"` at the top of a file if you absolutely need state (`useState`), side-effects (`useEffect`), or DOM event listeners.
- **Data Fetching**: Prefer Server Actions or server-side fetch calls in Server Components over client-side fetching when possible.

### 2. Styling Standards
- **Tailwind Only**: Do not use CSS modules or styled-components.
- **Responsive Design**: Ensure mobile-first responsive design using Tailwind's `md:`, `lg:`, `xl:` prefixes.
- **Aesthetics**: The design must look premium, modern, and vibrant. Incorporate smooth animations using `aos` or CSS transitions.

### 3. File Organization
- `src/app/`: Contains routing (`page.tsx`, `layout.tsx`).
- `src/components/`: Contains UI components like `Navbar.tsx`, `Hero.tsx`, `Footer.tsx`.
- `src/data/`: Contains static content and configurations.
- `src/services/`: Contains backend integrations or complex logic.

### 4. Skill Files
Refer to `.claude/skills/` for executable instructions on performing common tasks within this repository.
