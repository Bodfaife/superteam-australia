# Superteam Australia Official Website

A modern, production-ready website for **Superteam Australia** - the digital home for Solana builders, founders, and creatives across Australia.

## 🎯 Project Overview

This website serves as the official platform for Superteam Australia, connecting talent with opportunities, accelerating innovation, and growing the Web3 ecosystem across Australia. The site features:

- **Dynamic Homepage** with hero section, feature showcase, events, and member spotlights
- **Members Directory** with advanced search and filtering by skills
- **Event Integration** with Luma for seamless event management
- **Onboarding System** for community members to join and get involved
- **Admin Dashboard** (CMS) for managing content without code
- **Responsive Design** optimized for mobile, tablet, and desktop
- **Production-Ready Code** with clean architecture and scalability

---

## 🚀 Tech Stack

### Frontend
- **Next.js 14+** - React framework with App Router
- **React 18+** - UI library
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations and transitions

### Backend & Data
- **Supabase** - PostgreSQL database + authentication
- **Next.js API Routes** - Serverless backend functions
- **React Hot Toast** - Toast notifications

### Tools & Utilities
- **Lucide React** - Icon library
- **Date-fns** - Date utilities
- **clsx** - Class name utility

---

## 📦 Installation & Setup

### Prerequisites
- Node.js 18+ and npm/yarn
- Git
- A Supabase account (free tier available)

### Step 1: Clone & Install Dependencies

```bash
# Clone the repository
git clone https://github.com/superteam/australia.git
cd superteam-australia

# Install dependencies
npm install
# or
yarn install
```

### Step 2: Configure Environment Variables

Copy the example environment file and fill in your credentials:

```bash
cp .env.example .env.local
```

Edit `.env.local` with your values:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key

# API Configuration
NEXT_PUBLIC_API_URL=http://localhost:3000

# Luma API (for events integration)
NEXT_PUBLIC_LUMA_API_KEY=your-luma-api-key

# Analytics (optional)
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=your-google-analytics-id
```

### Step 3: Set Up Supabase Database

1. **Create a Supabase project** at [supabase.com](https://supabase.com)
2. **Run the following SQL migrations** in your Supabase dashboard:

```sql
-- Members table
CREATE TABLE members (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  title TEXT,
  company TEXT,
  bio TEXT,
  avatar_url TEXT,
  roles TEXT[] NOT NULL,
  skills TEXT[] NOT NULL,
  contributions TEXT[],
  twitter_handle TEXT,
  github_handle TEXT,
  website TEXT,
  email TEXT UNIQUE,
  location TEXT,
  featured BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT now(),
  updated_at TIMESTAMP DEFAULT now()
);

-- Onboarding submissions table
CREATE TABLE onboarding_submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  location TEXT NOT NULL,
  role TEXT NOT NULL,
  skills TEXT[],
  experience_level TEXT,
  twitter_handle TEXT,
  github_handle TEXT,
  portfolio_url TEXT,
  looking_for TEXT,
  created_at TIMESTAMP DEFAULT now()
);

-- Events table
CREATE TABLE events (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT,
  date DATE NOT NULL,
  time TIME,
  location TEXT,
  image_url TEXT,
  luma_event_id TEXT,
  category TEXT,
  featured BOOLEAN DEFAULT false,
  rsvp_count INTEGER DEFAULT 0,
  tags TEXT[],
  created_at TIMESTAMP DEFAULT now(),
  updated_at TIMESTAMP DEFAULT now()
);

-- Partners table
CREATE TABLE partners (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  description TEXT,
  logo_url TEXT NOT NULL,
  website TEXT,
  category TEXT,
  featured BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT now(),
  updated_at TIMESTAMP DEFAULT now()
);

-- FAQ table
CREATE TABLE faqs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  question TEXT NOT NULL,
  answer TEXT NOT NULL,
  category TEXT,
  "order" INTEGER,
  created_at TIMESTAMP DEFAULT now(),
  updated_at TIMESTAMP DEFAULT now()
);

-- Page content table (CMS)
CREATE TABLE page_content (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  page TEXT NOT NULL,
  section TEXT NOT NULL,
  key TEXT NOT NULL,
  value TEXT NOT NULL,
  type TEXT DEFAULT 'text',
  created_at TIMESTAMP DEFAULT now(),
  updated_at TIMESTAMP DEFAULT now(),
  UNIQUE(page, section, key)
);

-- Admin users table
CREATE TABLE admin_users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  role TEXT DEFAULT 'moderator',
  created_at TIMESTAMP DEFAULT now(),
  updated_at TIMESTAMP DEFAULT now()
);
```

### Step 4: Start Development Server

```bash
npm run dev
```

The site will be available at `http://localhost:3000`

---

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout with metadata
│   ├── globals.css             # Global Tailwind styles
│   ├── page.tsx                # Homepage
│   ├── api/
│   │   └── onboarding/
│   │       └── route.ts        # Onboarding form API
│   ├── admin/                  # Admin dashboard (future)
│   └── members/
│       └── page.tsx            # Members directory
├── components/
│   ├── common/                 # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Badge.tsx
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Container.tsx
│   ├── sections/               # Homepage sections
│   │   ├── HeroSection.tsx
│   │   ├── FeaturesSection.tsx
│   │   ├── FeaturedMembersSection.tsx
│   │   ├── EventsSection.tsx
│   │   ├── PartnersSection.tsx
│   │   ├── FAQSection.tsx
│   │   └── GetInvolvedSection.tsx
│   └── forms/
│       └── OnboardingForm.tsx  # Multi-step onboarding
├── lib/
│   └── supabase.ts            # Supabase client setup
├── hooks/                      # Custom React hooks
├── types/
│   └── index.ts               # TypeScript type definitions
├── constants/
│   └── index.ts               # App constants & config
└── utils/
    └── cn.ts                  # Class name utility
```

---

## 🎨 Design System

### Colors
- **Primary**: Blue (`#5a67f6`)
- **Accent**: Orange (`#ff8c1a`)
- **Theme**: Dark space/cosmic vibe with starfield backgrounds
- **Neutral**: Gray scale for UI components

### Typography
- **Headings**: Inter (Bold)
- **Body**: Inter (Regular)
- **Mono**: Space Mono (for code)

### Components
All reusable components are in `src/components/common/` and exported from `src/components/common/index.ts`

---

## 🔧 Development Guide

### Creating New Pages

1. Create a new directory in `src/app/`
2. Add a `page.tsx` file with your content
3. Use the `Header` and `Footer` components for consistency

Example:
```tsx
import { Header, Footer, Container } from '@/components/common';

export default function NewPage() {
  return (
    <>
      <Header />
      <main>
        <Container>
          {/* Your content */}
        </Container>
      </main>
      <Footer />
    </>
  );
}
```

### Creating New Components

Use the existing button and card components as templates. Always:
- Use TypeScript
- Export types and interfaces
- Include proper PropTypes
- Use Tailwind CSS for styling
- Make components responsive

### Adding Animations

Use Framer Motion for animations:

```tsx
import { motion } from 'framer-motion';

<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
  Content
</motion.div>
```

---

## 📝 CMS / Admin Dashboard

The admin dashboard is configured but in early stages. The database schema supports:
- Managing members
- Creating/editing events
- Managing partners/ecosystem projects
- Updating FAQ content
- Managing page content

**Future Implementation**: Build out admin UI components and authentication flow for role-based access.

---

## 🚀 Deployment

### Deploy to Vercel (Recommended)

```bash
# Push to GitHub
git push origin main

# Vercel will auto-deploy on push
# Or manually deploy via vercel CLI
npm install -g vercel
vercel
```

### Deploy to Other Platforms

The project is compatible with any Node.js hosting:
- Netlify
- Railway
- Render
- Self-hosted servers

---

## 📋 API Reference

### POST `/api/onboarding`

Submit an onboarding form.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "location": "Sydney, NSW",
  "role": "Builder",
  "skills": ["Rust", "Frontend"],
  "experienceLevel": "advanced",
  "twitterHandle": "johndoe",
  "githubHandle": "johndoe",
  "portfolioUrl": "https://johndoe.com",
  "lookingFor": "Opportunities and collaborators"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Successfully submitted onboarding form",
  "id": "uuid-string"
}
```

---

## 🔐 Security & Best Practices

- All environment variables are kept in `.env.local` (never committed)
- Supabase provides authentication and row-level security
- Input validation on both client and server
- CORS headers configured in Next.js config
- Database constraints for data integrity

---

## 📊 Performance

- Optimized images with Next.js Image component (configure when adding images)
- Code splitting via Next.js App Router
- Tailwind CSS purging unused styles
- Framer Motion GPU-accelerated animations
- Supabase realtime capabilities for live updates

---

## 🤝 Contributing

1. Create a feature branch: `git checkout -b feature/your-feature`
2. Commit changes: `git commit -m 'Add your feature'`
3. Push to branch: `git push origin feature/your-feature`
4. Submit a Pull Request

---

## 📝 Content Management

### Updating Homepage Content

Edit content in `src/constants/index.ts`:

```ts
export const FEATURES = [
  {
    title: 'Your Feature',
    description: 'Your description',
    icon: '🎯',
  },
  // ...
];
```

### Adding Events

Events are currently hardcoded in `EventsSection.tsx`. To integrate with Luma API:

1. Get your Luma API key
2. Create an endpoint to fetch events from Luma
3. Display in the Events section

---

## 🐛 Troubleshooting

### Supabase Connection Issues
- Verify `.env.local` has correct credentials
- Check that Supabase project is active
- Clear browser cache and restart dev server

### Styling Issues
- Run `npm run build` to check Tailwind config
- Restart dev server after changing `tailwind.config.js`
- Clear `.next` directory: `rm -rf .next`

### Build Errors
- Ensure all imports are correct
- Check TypeScript errors: `npm run type-check`
- Delete `node_modules` and reinstall: `rm -rf node_modules && npm install`

---

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [Supabase Documentation](https://supabase.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

---

## 🎯 Future Features

- [ ] Admin authentication & dashboard
- [ ] Member profile editing
- [ ] Event calendar integration with Luma
- [ ] Newsletter subscription
- [ ] Blog/Content platform
- [ ] Opportunity marketplace
- [ ] Partner integration APIs
- [ ] Analytics dashboard
- [ ] Dark mode support
- [ ] Multi-language support

---

## 📄 License

© 2024 Superteam Australia. All rights reserved.

---

## 📧 Support

Questions or issues? Contact us at australia@superteam.fun or visit [superteam.fun](https://superteam.fun)

---

**Built with ❤️ for the Solana community in Australia**
