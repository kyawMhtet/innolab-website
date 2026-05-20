# SEO Optimization Guidelines

Follow these SEO best practices when developing or updating pages for the Innolab Website:

1. **Next.js Metadata API**:
   - Utilize the built-in Next.js Metadata API in `page.tsx` and `layout.tsx` files.
   - Export a `metadata` object for static metadata or use the `generateMetadata` function for dynamic routes.
   - Always include a relevant `title` and `description`.
   - Consider adding Open Graph (`openGraph`) and Twitter (`twitter`) metadata for better social sharing.

2. **Semantic HTML**:
   - Use semantic tags such as `<header>`, `<main>`, `<article>`, `<section>`, and `<footer>` instead of just using `<div>`.
   - Maintain a logical heading structure (e.g., only one `<h1>` per page, followed by `<h2>`, `<h3>`, etc., in order).

3. **Images**:
   - Use Next.js's `<Image />` component from `next/image` for automatic optimization, lazy loading, and modern image formats.
   - Always provide descriptive `alt` text for images.

4. **Performance & Core Web Vitals**:
   - Keep the site fast by leveraging Server Components where client interactivity is not needed.
   - Minimize the use of heavy client-side scripts that can block the main thread.
