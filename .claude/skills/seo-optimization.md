# Skill: SEO Optimization for Next.js Pages

## Overview
Use this skill when asked to optimize a Next.js App Router page for SEO or to add metadata to a route.

## Execution Steps

1. **Locate the Route**:
   - Identify the `page.tsx` or `layout.tsx` file for the specific route (e.g., `src/app/about/page.tsx`).

2. **Add Metadata Export**:
   - Next.js App Router uses the `generateMetadata` function or static `metadata` object for SEO.
   - Insert the following at the top of the file (below imports):

   ```tsx
   import { Metadata } from 'next';

   export const metadata: Metadata = {
     title: 'Page Title | InnoLab Digital Solutions',
     description: 'A highly optimized, engaging description of the page content.',
     openGraph: {
       title: 'Page Title | InnoLab Digital Solutions',
       description: 'A highly optimized, engaging description of the page content.',
       url: 'https://yourwebsite.com/route', // Adjust based on route
       siteName: 'InnoLab Digital Solutions',
       locale: 'en_US',
       type: 'website',
     },
   };
   ```

3. **Check Semantic HTML**:
   - Ensure the page has exactly one `<h1>` tag that describes the page's primary topic.
   - Ensure sub-sections use `<h2>` and `<h3>` in a logical hierarchy.
   - Check if `<Image>` tags from `next/image` have meaningful `alt` attributes.

4. **Completion**:
   - After applying changes, confirm to the user that static metadata (or dynamic metadata via `generateMetadata`) has been added and semantic HTML has been verified.
