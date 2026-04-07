# Design System & Styling Guide

Comprehensive guide to the Superteam Australia design system and styling conventions.

## Color System

### Primary Colors

| Name | Value | Usage |
|------|-------|-------|
| Primary | `#5a67f6` | Main actions, links, hover states |
| Accent | `#ff8c1a` | Highlights, features, calls-to-action |

### Theme
- **Dark Space Vibe**: Gradient backgrounds (slate-950 → blue-900 → slate-950)
- **Starfield Effect**: Subtle star particle animations
- **Web3 Aesthetic**: Cosmic, glowing elements, dark mode by default

### Neutral Colors (Dark Space Palette)

| Shade | Value | Usage |
|-------|-------|-------|
| 50 | `#1a1f3a` | Darkest backgrounds |
| 100 | `#0f1629` | Very dark backgrounds |
| 200 | `#0d1121` | Dark card backgrounds |
| 300 | `#0a0e1a` | Secondary dark |
| 400 | `#050810` | Subtle elements |
| 900 | `#000000` | Pure black |

### Using Colors in Code

```tsx
// Tailwind classes
className="bg-primary-600 text-white"
className="border-neutral-200"
className="hover:bg-accent-500"

// Gradient
className="bg-gradient-to-r from-primary-600 to-accent-600"
```

## Typography System

### Font Families

- **Headings & UI**: Inter (sans-serif)
- **Code**: Space Mono (monospace)

```tsx
// In CSS/Tailwind
font-sans  // Inter (default)
font-mono  // Space Mono
```

### Font Sizes & Weights

```
Heading 1 (H1)  | 48px-56px | Bold   | Page titles
Heading 2 (H2)  | 36px-42px | Bold   | Section titles
Heading 3 (H3)  | 30px-32px | Bold   | Subsection titles
Heading 4 (H4)  | 24px-28px | Bold   | Card titles

Body Large      | 18px     | Regular | Lead paragraphs
Body Regular    | 16px     | Regular | Default text
Body Small      | 14px     | Regular | Helper text
Caption         | 12px     | Regular | Captions
```

### Using Typography Classes

```tsx
// Predefined classes
className="heading-1"  // H1
className="heading-2"  // H2
className="text-body"  // Body text
className="text-small" // Small text
```

## Component Styles

### Buttons

```tsx
// Primary (default)
<Button variant="primary">Click me</Button>
// → Blue background, white text

// Secondary
<Button variant="secondary">Click me</Button>
// → White background, dark text, border

// Ghost
<Button variant="ghost">Click me</Button>
// → Transparent, blue text

// Danger
<Button variant="danger">Delete</Button>
// → Red background
```

### Cards

```tsx
// Default card
<Card>Content</Card>

// Glass effect
<Card variant="glass">Content</Card>

// Elevated
<Card variant="elevated">Content</Card>
```

### Badges

```tsx
<Badge variant="primary">New</Badge>
<Badge variant="accent">Featured</Badge>
<Badge variant="success">Active</Badge>
<Badge variant="warning">Pending</Badge>
<Badge variant="danger">Important</Badge>
```

## Spacing System

### Tokens
```
xs  = 0.25rem  (4px)
sm  = 0.5rem   (8px)
md  = 1rem     (16px)
lg  = 1.5rem   (24px)
xl  = 2rem     (32px)
2xl = 3rem     (48px)
3xl = 4rem     (64px)
4xl = 6rem     (96px)
5xl = 8rem     (128px)
```

### Usage
```tsx
className="p-4"      // padding: 16px
className="m-6"      // margin: 24px
className="gap-3"    // gap: 12px (flex/grid)
className="space-y-4" // vertical spacing
```

## Border & Radius System

### Border Radius

```
xs      = 0.25rem  (4px)
sm      = 0.375rem (6px)
base    = 0.5rem   (8px)
md      = 0.75rem  (12px)
lg      = 1rem     (16px)
xl      = 1.5rem   (24px)
2xl     = 2rem     (32px)
full    = 9999px   (circle)
```

### Usage
```tsx
className="rounded-lg"      // 16px radius
className="rounded-full"    // Circle
className="border border-neutral-200" // 1px border
```

## Shadow System

```
xs       = 0 1px 2px
sm       = 0 1px 3px
base     = 0 4px 6px
md       = 0 10px 15px
lg       = 0 20px 25px
xl       = 0 25px 50px
glow     = Blue glow effect
glow-lg  = Large blue glow
```

### Usage
```tsx
className="shadow-sm"
className="hover:shadow-lg"
className="shadow-glow" // Blue glow
```

## Animation System

### Built-in Animations

```tsx
// Fade in
className="animate-fade-in"

// Slide animations
className="animate-slide-up"
className="animate-slide-down"

// Glow pulse
className="animate-pulse-glow"

// Float
className="animate-float"
```

### With Framer Motion

```tsx
import { motion } from 'framer-motion';

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: -20 }}
  transition={{ duration: 0.3 }}
>
  Animated content
</motion.div>
```

## Responsive Design

### Breakpoints

```
Mobile    | < 640px  | sm
Tablet    | 768px    | md
Desktop   | 1024px   | lg
XL        | 1280px   | xl
2XL       | 1536px   | 2xl
```

### Mobile-first Approach

```tsx
// Mobile by default, then larger screens
className="text-sm md:text-base lg:text-lg"
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
```

## Accessibility

### Color Contrast
- Primary text on light: >= 4.5:1 ratio
- UI components: >= 3:1 ratio

### Focus States
```tsx
className="focus:outline-none focus:ring-2 focus:ring-primary-500"
```

### Semantic HTML
```tsx
// ✅ Good
<button>Click me</button>
<a href="/page">Link</a>
<h1>Heading</h1>

// ❌ Avoid
<div onClick={...}>Click me</div>
<div role="button">...</div>
```

## Dark Mode (Future)

When dark mode is implemented:

```tsx
// Use dark: prefix for dark mode styles
className="bg-white dark:bg-neutral-900"
className="text-neutral-900 dark:text-white"
```

## Code Examples

### Hero Section
```tsx
<section className="min-h-screen bg-gradient-to-br from-neutral-50 to-primary-50 py-24">
  <Container>
    <h1 className="heading-1 mb-4">
      <span className="gradient-text">Featured text</span>
    </h1>
    <p className="text-body max-w-2xl mb-8">
      Supporting description
    </p>
    <Button size="lg">Call to action</Button>
  </Container>
</section>
```

### Feature Cards
```tsx
<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
  {features.map(feature => (
    <Card key={feature.id} className="group">
      <h3 className="heading-4 group-hover:text-primary-600">
        {feature.title}
      </h3>
      <p className="text-body mt-2 text-neutral-600">
        {feature.description}
      </p>
    </Card>
  ))}
</div>
```

### Interactive Component
```tsx
<motion.div
  whileHover={{ y: -4 }}
  transition={{ duration: 0.2 }}
>
  <Card className="cursor-pointer hover:shadow-lg">
    Interactive content
  </Card>
</motion.div>
```

## Best Practices

1. **Use Design Tokens**: Use predefined classes, not arbitrary values
2. **Mobile First**: Design for mobile, enhance for larger screens
3. **Contrast**: Ensure sufficient color contrast for accessibility
4. **Spacing**: Use consistent spacing from the system
5. **Typography**: Use predefined heading/text classes
6. **Focus States**: Always style focus states for keyboard navigation
7. **Testing**: Test on multiple devices and browsers

## Component Checklist

When creating new components:

- [ ] Use TypeScript for props
- [ ] Export types alongside component
- [ ] Use Tailwind for styling
- [ ] Make responsive (mobile-first)
- [ ] Add focus states
- [ ] Document with JSDoc
- [ ] Follow naming conventions
- [ ] Use consistent spacing
- [ ] Support light theme
- [ ] Test on mobile

## Common Patterns

### Gradient Text
```tsx
className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent"
```

### Glass Effect
```tsx
className="rounded-lg border border-white/20 bg-white/[0.08] backdrop-blur-md"
```

### Animated Hover
```tsx
<motion.div
  whileHover={{ scale: 1.05 }}
  transition={{ duration: 0.2 }}
>
  Hoverable element
</motion.div>
```

### Gradient Background
```tsx
className="bg-gradient-to-br from-primary-50 via-white to-accent-50"
```

## Resources

- [Tailwind CSS Colors](https://tailwindcss.com/docs/customizing-colors)
- [Inter Font](https://rsms.me/inter/)
- [Space Mono Font](https://github.com/IBM/plex/releases/tag/v1.0.0)
- [Framer Motion Animation](https://www.framer.com/motion/)

---

**Last Updated**: April 2024
