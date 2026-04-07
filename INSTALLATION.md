# Installation & Setup Guide

This guide will walk you through setting up the Superteam Australia website from scratch.

## Prerequisites

Before you start, ensure you have:

- **Node.js 18.0 or higher** - [Download](https://nodejs.org/)
- **npm 9.0 or higher** (comes with Node.js)
- **Git** - [Download](https://git-scm.com/)
- **A Supabase account** - [Sign up free](https://supabase.com)
- **A code editor** - [VS Code recommended](https://code.visualstudio.com/)

Verify your installations:

```bash
node --version    # Should be v18.0.0 or higher
npm --version     # Should be 9.0.0 or higher
git --version     # Should show a version number
```

---

## Step 1: Clone the Repository

```bash
# Clone the repository
git clone https://github.com/superteam/australia.git
cd superteam-australia

# Or if you're starting from scratch:
mkdir superteam-australia
cd superteam-australia
npm init -y
```

---

## Step 2: Install Dependencies

Install all required npm packages:

```bash
npm install
```

Or with yarn:

```bash
yarn install
```

This will install:
- Next.js and React
- TypeScript
- Tailwind CSS
- Framer Motion (animations)
- Supabase client
- And other dependencies

---

## Step 3: Set Up Supabase

### Create a Supabase Project

1. Go to [supabase.com](https://supabase.com) and sign in
2. Click "New Project"
3. Fill in the project details:
   - **Name**: `superteam-australia`
   - **Database Password**: Create a strong password
   - **Region**: Choose the closest to Australia (e.g., `ap-southeast-2` for Sydney)
4. Click "Create new project" and wait for it to initialize

### Get Your Credentials

Once your project is created:

1. Go to **Settings** > **API**
2. Copy the following values:
   - **URL** (Project URL)
   - **anon public** (Anonymous key)
   - **service_role** (Service role key)

You'll need these for `.env.local`

### Set Up Database Tables

1. In your Supabase dashboard, go to **SQL Editor**
2. Click **New Query**
3. Copy and paste the entire SQL migration script from below:

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

-- Insert sample data
INSERT INTO members (name, title, company, bio, roles, skills, contributions, twitter_handle, location, featured) VALUES
('Alex Chen', 'Solana Developer', 'Phantom', 'Building the future of Web3 wallets', ARRAY['Builder'], ARRAY['Rust', 'Smart Contracts', 'Frontend'], ARRAY['Projects Built', 'Hackathon Winner'], 'alexchen', 'Sydney, NSW', true),
('Sarah Williams', 'Product Designer', 'Magic Eden', 'Creating beautiful Web3 experiences', ARRAY['Designer'], ARRAY['Design', 'Product'], ARRAY['Projects Built'], 'sarahwill', 'Melbourne, VIC', true),
('James Morrison', 'Founder', 'Solana Australia DAO', 'Building community-driven projects', ARRAY['Founder', 'Operator'], ARRAY['Community', 'Growth', 'Product'], ARRAY['DAO Contributor', 'Bounties Completed'], 'jmorrison', 'Brisbane, QLD', true);
```

4. Click **Run** to execute the migration

---

## Step 4: Configure Environment Variables

1. In the root of your project, create a new file called `.env.local`:

```bash
touch .env.local
```

2. Copy the content from `.env.example`:

```bash
cp .env.example .env.local
```

3. Edit `.env.local` and add your Supabase credentials:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-public-key-here
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key-here

# API Configuration
NEXT_PUBLIC_API_URL=http://localhost:3000

# Luma API (optional - for events integration)
NEXT_PUBLIC_LUMA_API_KEY=your-luma-api-key

# Analytics (optional)
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
```

**⚠️ Important**: Never commit `.env.local` to Git. It's already in `.gitignore`.

---

## Step 5: Start the Development Server

```bash
npm run dev
```

The application will start and be available at:

```
http://localhost:3000
```

You should see:
- **Homepage** with hero section, features, events, etc.
- **Members page** at `/members`
- **Admin dashboard** at `/admin`

---

## Step 6: Verify Everything Works

### Test the Forms

1. Go to `http://localhost:3000`
2. Scroll down and click "Get Involved"
3. Fill out the onboarding form and submit
4. Check your Supabase dashboard > `onboarding_submissions` table to see the entry

### View Logs

Check the terminal where you ran `npm run dev` for any errors or messages.

---

## Optional: Set Up Luma Events Integration

To integrate with Luma for event management:

1. Go to [lu.ma](https://lu.ma) and create an account
2. Get your API key from settings
3. Add to `.env.local`:

```env
NEXT_PUBLIC_LUMA_API_KEY=your-luma-key
```

4. Update `EventsSection.tsx` to fetch from Luma API

---

## Common Issues & Solutions

### Issue: `npm: command not found`

**Solution**: Node.js is not installed. Download and install from [nodejs.org](https://nodejs.org/)

### Issue: `Cannot find module 'next'`

**Solution**: Dependencies are not installed. Run:

```bash
npm install
```

### Issue: Supabase connection errors

**Solution**: 
1. Check your `.env.local` file has correct credentials
2. Verify your Supabase project is active
3. Check network connectivity
4. Restart the dev server: `Ctrl+C` then `npm run dev`

### Issue: CSS not loading (Tailwind styles missing)

**Solution**:
1. Restart the dev server
2. Clear the Next.js cache: `rm -rf .next`
3. Run: `npm run dev` again

### Issue: TypeScript errors

**Solution**: Run type checking:

```bash
npm run type-check
```

Fix any reported errors.

---

## Build for Production

When you're ready to deploy:

```bash
npm run build
npm start
```

Or deploy directly to Vercel, Netlify, or your hosting provider.

---

## Next Steps

After successful setup:

1. **Customize Content**: Edit content in `src/constants/index.ts`
2. **Add Your Logo**: Replace placeholder in public folder
3. **Configure Supabase**: Set up row-level security
4. **Set Up Admin Access**: Create admin users in Supabase
5. **Configure Analytics**: Add your Google Analytics ID

---

## Need Help?

- **Documentation**: See [README.md](./README.md)
- **Next.js Help**: [nextjs.org/docs](https://nextjs.org/docs)
- **Supabase Help**: [supabase.com/docs](https://supabase.com/docs)
- **Contact**: australia@superteam.fun

---

**You're all set! Happy building! 🚀**
