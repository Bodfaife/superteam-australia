# Development Guide

Quick reference guide for developing and customizing the Superteam Australia website.

## Quick Start

```bash
# Install and start
npm install
npm run dev

# Open browser
open http://localhost:3000
```

## Useful Commands

```bash
# Development
npm run dev           # Start dev server

# Production
npm run build        # Build for production
npm start            # Start production server
npm run type-check   # Check TypeScript errors
npm run format       # Format code with Prettier
npm run lint         # Run linter (when configured)
```

## Common Tasks

### Adding a New Page

1. Create a directory in `src/app/your-page`
2. Add `page.tsx` inside
3. Use Header/Footer for consistency

```tsx
// src/app/your-page/page.tsx
import { Header, Footer, Container } from '@/components/common';

export default function YourPage() {
  return (
    <>
      <Header />
      <main>
        <Container>
          <h1>Your Content</h1>
        </Container>
      </main>
      <Footer />
    </>
  );
}
```

### Adding a New Section

1. Create component in `src/components/sections/`
2. Use animations with Framer Motion
3. Export from `src/components/sections/index.ts`

```tsx
// src/components/sections/YourSection.tsx
'use client';

import { Container } from '@/components/common';
import { motion } from 'framer-motion';

export function YourSection() {
  return (
    <section className="py-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Your content here
        </motion.div>
      </Container>
    </section>
  );
}
```

### Changing Colors

Edit `tailwind.config.js`:

```js
colors: {
  primary: {
    600: '#your-color', // Change primary blue
  },
}
```

Then update all components using that color.

### Adding Sample Data

Edit `src/constants/index.ts`:

```ts
export const MY_DATA = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
];
```

Use in components:

```tsx
import { MY_DATA } from '@/constants';

export function MyComponent() {
  return (
    <ul>
      {MY_DATA.map(item => <li key={item.id}>{item.name}</li>)}
    </ul>
  );
}
```

### Integrating with Real Data (Supabase)

```tsx
'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';

export function MyComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const { data, error } = await supabase
        .from('my_table')
        .select('*');
      
      if (error) console.error(error);
      setData(data);
    }

    fetchData();
  }, []);

  return <div>{/* Use data */}</div>;
}
```

### Adding Animations

Use Framer Motion:

```tsx
import { motion } from 'framer-motion';

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  whileHover={{ scale: 1.05 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  viewport={{ once: true }}
>
  Animated content
</motion.div>
```

### Creating Forms

Use the OnboardingForm as a template:

```tsx
'use client';

import { useState } from 'react';

export function MyForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const response = await fetch('/api/my-endpoint', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    
    // Handle response
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
```

### Creating API Routes

```tsx
// src/app/api/my-endpoint/route.ts
export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Process request
    // Call Supabase, other APIs, etc.
    
    return Response.json({
      success: true,
      message: 'Success!',
    });
  } catch (error) {
    return Response.json(
      { error: 'Server error' },
      { status: 500 }
    );
  }
}
```

## CSS Classes Reference

### Text Classes
```
heading-1   # Extra large heading
heading-2   # Large heading
heading-3   # Medium heading
heading-4   # Small heading

text-body   # Regular body text
text-small  # Small text
```

### Component Classes
```
button-primary    # Primary button
button-secondary  # Secondary button
button-ghost      # Ghost button

input-base        # Input field

card              # Card component
badge             # Badge label
badge-accent      # Accent badge
```

### Layout Classes
```
container-max     # Max-width container
section-padding   # Standard section padding
```

## Debugging Tips

### Check TypeScript Errors
```bash
npm run type-check
```

### Check Console Logs
1. Open browser DevTools (F12)
2. Check Console tab for errors
3. Check Network tab for API calls

### Common Errors

**"Cannot find module"**
- Check import path is correct
- Verify file exists
- Restart dev server

**"Tailwind styles not showing"**
- Clear Next.js cache: `rm -rf .next`
- Restart dev server
- Verify class names are correct

**"Supabase connection error"**
- Check `.env.local` credentials
- Verify Supabase project is active
- Check network connectivity

## Browser DevTools Tips

1. **React DevTools Extension**
   - Install from Chrome/Firefox store
   - Inspect component props and state

2. **Network Tab**
   - Check API calls are working
   - Debug form submissions

3. **Console Tab**
   - View JavaScript errors
   - Test code snippets

## Performance Tips

1. **Use Next/Image** for images
2. **Code split** large components
3. **Lazy load** sections with `whileInView`
4. **Minimize bundle** by removing unused imports
5. **Check bundle size**: `npm run build`

## Testing Code Changes

### Before Committing
```bash
# Check types
npm run type-check

# Check for errors
npm run build

# Quick test in browser
npm run dev  # Check localhost:3000
```

## Git Workflow

```bash
# Create feature branch
git checkout -b feature/your-feature

# Make changes and commit
git add .
git commit -m "feat: your change description"

# Push to GitHub
git push origin feature/your-feature

# Create Pull Request on GitHub
```

## Useful VS Code Extensions

- **ES7+ React/Redux/React-Native snippets**
- **Tailwind CSS IntelliSense**
- **Framer Motion Snippets**
- **Prettier - Code formatter**
- **TypeScript Vue Plugin**

## Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Supabase Docs](https://supabase.com/docs)
- [React Docs](https://react.dev)

## Need Help?

- Check existing code for examples
- Read comments in components
- Search the documentation
- Contact: australia@superteam.fun

Happy coding! 🚀
