# New Component Guidelines

When creating a new component for the Innolab Website, adhere to the following rules:

1. **Location & Structure**: 
   - Place reusable components in `src/components/`.
   - Use PascalCase for the file name (e.g., `HeroSection.tsx`).

2. **TypeScript & React**:
   - Always use the `.tsx` extension.
   - Use functional components.
   - Define and export an interface for component props (if any).

3. **Styling**:
   - Use TailwindCSS for all styling.
   - Avoid inline styles.
   - Utilize existing design tokens (colors, fonts) if defined in the Tailwind config.

4. **Client vs Server Components (Next.js App Router)**:
   - Components are Server Components by default.
   - If the component requires interactivity, state, or browser APIs (like `useState`, `useEffect`, `window`, or AOS animations), include the `"use client";` directive at the top of the file.

5. **Icons & Animations**:
   - Use `react-icons` for any iconography.
   - For scroll animations, utilize `aos` (Animate On Scroll) and ensure attributes like `data-aos` are properly configured.
