# Skill: Create a New Component

## Overview
Use this skill when asked to create a new UI component for the Next.js application.

## Execution Steps

1. **Determine the Scope**: 
   - Is it a Server Component or Client Component? Default to Server Component unless state (`useState`) or lifecycle methods (`useEffect`) are needed.
   - What props will it receive?

2. **Create the File**:
   - Path: `src/components/[ComponentName].tsx`
   - Use PascalCase for the filename and component name.

3. **Template**:
   Use the following template for scaffolding. Replace placeholders as needed.

   ```tsx
   import React from 'react';

   // If client-side interactivity is needed, add "use client"; at the absolute top of this file.

   export interface {ComponentName}Props {
     // Define props here
     className?: string;
   }

   export default function {ComponentName}({ className = '' }: {ComponentName}Props) {
     return (
       <div className={`relative ${className}`}>
         {/* Implementation goes here */}
       </div>
     );
   }
   ```

4. **Styling Rules**:
   - Use Tailwind CSS classes for styling.
   - For responsive design, use Tailwind prefixes (`md:`, `lg:`).
   - Ensure you utilize standard text colors and backgrounds based on the project's premium aesthetic requirements (defined in `.cursorrules`).

5. **Integration**:
   - After creating the file, automatically determine where it should be imported or ask the user if they'd like you to insert it into a specific page.
