# Architecture & Design Decisions

This document outlines the architectural decisions and design patterns used in the Superteam Australia website.

## Directory Structure

```
src/
├── app/                    # Next.js App Router (pages & layouts)
├── components/             # Reusable React components
│   ├── common/            # Base UI components (Button, Card, etc.)
│   ├── sections/          # Homepage sections (reusable)
│   └── forms/             # Form components
├── lib/                   # Utility functions (Supabase client, etc.)
├── hooks/                 # Custom React hooks
├── types/                 # TypeScript type definitions
├── constants/             # App constants and configuration
└── utils/                 # Helper functions
```

## Component Architecture

### Component Hierarchy

```
App
├── Header
├── Main Content
│   ├── HeroSection
│   ├── FeaturesSection
│   ├── FeaturedMembersSection
│   ├── EventsSection
│   ├── PartnersSection
│   ├── GetInvolvedSection
│   └── FAQSection
└── Footer
```

### Component Types

1. **Page Components** (`app/`):
   - Full-page layouts with Header and Footer
   - Use Server Components by default for better performance
   - Client Components only when needed for interactivity

2. **Section Components** (`components/sections/`):
   - Reusable sections for homepage
   - Client components with animations
   - Accept no props (data from constants/DB)

3. **Common Components** (`components/common/`):
   - Base UI components (Button, Card, Badge, etc.)
   - Highly reusable across the app
   - Styled with Tailwind CSS
   - Use variant patterns for customization

4. **Form Components** (`components/forms/`):
   - Complex interactive forms
   - Handle state management and validation
   - Use client-side state with React hooks

## Styling Approach

### Tailwind CSS Organization

- **Utility-first**: Use Tailwind classes for styling
- **Component-level**: Minimal CSS per component
- **Design system**: Extended Tailwind config with custom colors

### Design System Colors

```
Primary:    #5a67f6 (Blue)
Accent:     #ff8c1a (Orange)
Theme:      Dark space/cosmic with stars
Background: Gradient dark blue to slate
```

### Typography

- **Headings**: Inter Bold
- **Body**: Inter Regular  
- **Code**: Space Mono

---

## State Management

### Local State (React hooks)

- Component-level state with `useState()`
- Effects with `useEffect()`
- Context API for theme/auth (future)

### Global Data

- Constants in `src/constants/`
- Hardcoded sample data in components (for demo)
- Supabase for persistent data

### No Additional Libraries

- Avoided Redux/Zustand for simplicity
- Supabase provides real-time capabilities if needed

---

## Data Flow

### Server Components (Recommended)

```tsx
// app/page.tsx
export default function Page() {
  // Direct database access possible
  return <ComponentWithData />
}
```

### Client Components (Interactive)

```tsx
// components/sections/HeroSection.tsx
'use client'
export function HeroSection() {
  const [state, setState] = useState()
  return <div>{state}</div>
}
```

### API Routes

```tsx
// app/api/onboarding/route.ts
export async function POST(req: Request) {
  // Handle form submissions
  // Call Supabase
}
```

---

## Authentication & Security

### Public Pages
- Homepage
- Members directory
- Public member profiles

### Protected Pages (Future)
- Admin dashboard (`/admin`)
- Member edit profile
- Event management

### Implementation
- Supabase Auth (email/password or social)
- Row-level security (RLS) in Supabase
- Server-side session validation

---

## Database Design

### Normalized Schema

All tables use:
- `id` (UUID) as primary key
- `created_at` / `updated_at` for tracking
- Proper foreign key relationships
- Array fields for many-to-many relationships

### Tables

1. **members**: User profiles with skills and roles
2. **onboarding_submissions**: Form submissions
3. **events**: Community events
4. **partners**: Ecosystem partners
5. **faqs**: FAQ content
6. **page_content**: CMS content
7. **admin_users**: Admin access control

---

## Performance Optimizations

### Next.js Features

- **Image Optimization**: Next/Image component (when images added)
- **Code Splitting**: Automatic route-based splitting
- **CSS Minification**: Tailwind purges unused styles
- **Static Generation**: SSG for static pages

### Runtime Optimizations

- **Framer Motion**: GPU-accelerated animations
- **Lazy Loading**: Sections load with intersection observer
- **Progressive Enhancement**: Works without JavaScript

### Bundle Size

- Minimal dependencies
- Tree-shakeable imports
- No unused CSS

---

## Future Considerations

### Scalability

- **Admin Dashboard**: Full CMS for managing content
- **Member Profiles**: User authentication and profiles
- **Event Integration**: Luma API for events
- **Analytics**: Analytics dashboard
- **Blog/Content**: Blog platform for articles

### Performance at Scale

- Database indexing on frequently queried fields
- Caching with Supabase or Redis
- CDN for static assets
- Pagination for large lists

### Internationalization

- i18n setup for multiple languages
- Date/time localization
- Cultural considerations for Australian focus

---

## Testing Strategy

### Unit Tests
- Component testing with Vitest
- Utility function testing
- Hook testing

### Integration Tests
- API route testing
- Database queries
- Form submissions

### E2E Tests
- Critical user flows
- Form submissions
- Navigation

### Current Status
- Manual testing for now
- Jest config ready for tests

---

## Monitoring & Logging

### Client-Side
- Error tracking (Sentry - future)
- User analytics (Google Analytics)
- Performance monitoring (Web Vitals)

### Server-Side
- API error logging
- Database query logging
- Email notifications for critical errors

---

## Environment Configuration

### Development
```
NODE_ENV=development
Database: Local Supabase
API: localhost:3000
```

### Production
```
NODE_ENV=production
Database: Cloud Supabase
API: Production domain
Caching: Enabled
Analytics: Enabled
```

---

## Deployment Architecture

### Recommended: Vercel

- Zero-config Next.js deployment
- Automatic HTTPS
- CDN for static assets
- Serverless functions for API routes
- Environment variables management

### Alternative: Other Platforms

- **Netlify**: Works but no native Next.js support
- **Railway**: Good for full-stack apps
- **Self-hosted**: Requires DevOps knowledge

---

## Development Workflow

### Branching Strategy
- `main`: Production-ready code
- `develop`: Development branch
- `feature/*`: Feature branches
- `bugfix/*`: Bug fix branches

### Commit Messages
```
pattern: type(scope): description

Examples:
- feat(hero): add animated gradient background
- fix(button): correct hover color transition
- docs(readme): update installation steps
```

### Code Review
- PRs required before merging to main
- At least one approval needed
- Automated checks (TypeScript, Lint)

---

## Dependencies Management

### Critical Dependencies
- next, react, react-dom
- @supabase/supabase-js
- framer-motion
- tailwindcss

### Optional Dependencies
- react-hot-toast (notifications)
- lucide-react (icons)
- date-fns (date utilities)

### Regular Updates
- Monthly npm updates
- Security patches immediately
- Major version upgrades carefully

---

## Documentation

### Code Documentation
- JSDoc comments for functions
- Inline comments for complex logic
- Type definitions for clarity

### Project Documentation
- README.md (overview)
- INSTALLATION.md (setup)
- ARCHITECTURE.md (this file)

---

## Contributing Guidelines

1. Fork the repository
2. Create a feature branch
3. Make changes with clear commits
4. Ensure code passes linting
5. Submit PR with description
6. Wait for review and approval

---

**Last Updated**: April 2024
**Maintainers**: Superteam Australia Team
