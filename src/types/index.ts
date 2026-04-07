// Member types
export type MemberRole =
  | 'Builder'
  | 'Designer'
  | 'Founder'
  | 'Creative'
  | 'Operator'
  | 'Institution'
  | 'Investor'
  | 'Other';

export type MemberSkill =
  | 'Rust'
  | 'Frontend'
  | 'Backend'
  | 'Design'
  | 'Content'
  | 'Growth'
  | 'Product'
  | 'Community'
  | 'DevOps'
  | 'Smart Contracts'
  | 'Mobile'
  | 'Data';

export type MemberContribution =
  | 'Hackathon Winner'
  | 'Projects Built'
  | 'Grants Received'
  | 'DAO Contributor'
  | 'Bounties Completed'
  | 'Core Contributor'
  | 'Event Organizer';

export interface Member {
  id: string;
  name: string;
  title?: string;
  company?: string;
  bio?: string;
  avatar_url?: string;
  roles: MemberRole[];
  skills: MemberSkill[];
  contributions?: MemberContribution[];
  twitter_handle?: string;
  github_handle?: string;
  website?: string;
  email?: string;
  location?: string;
  featured: boolean;
  created_at: string;
  updated_at: string;
}

// Event types
export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time?: string;
  location?: string;
  image_url?: string;
  luma_event_id?: string;
  category?: string;
  featured: boolean;
  rsvp_count?: number;
  tags?: string[];
  created_at: string;
  updated_at: string;
}

// Partner types
export interface Partner {
  id: string;
  name: string;
  description?: string;
  logo_url: string;
  website?: string;
  category: 'Project' | 'Infrastructure' | 'VC' | 'Institution' | 'Platform';
  featured: boolean;
  created_at: string;
  updated_at: string;
}

// Opportunity types
export type OpportunityType = 'Hackathon' | 'Bounty' | 'Grant' | 'Job' | 'Partnership';

export interface Opportunity {
  id: string;
  title: string;
  description: string;
  type: OpportunityType;
  reward?: string;
  deadline?: string;
  image_url?: string;
  link?: string;
  featured: boolean;
  created_at: string;
  updated_at: string;
}

// FAQ types
export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category?: string;
  order: number;
  created_at: string;
  updated_at: string;
}

// Content types
export interface PageContent {
  id: string;
  page: string;
  section: string;
  key: string;
  value: string;
  type: 'text' | 'markdown' | 'json' | 'html';
  created_at: string;
  updated_at: string;
}

// Form submission types
export interface OnboardingSubmission {
  id: string;
  name: string;
  email: string;
  location: string;
  role: MemberRole;
  skills: MemberSkill[];
  experience_level?: string;
  twitter_handle?: string;
  github_handle?: string;
  portfolio_url?: string;
  looking_for?: string;
  created_at: string;
}

// Admin types
export type UserRole = 'admin' | 'moderator' | 'member';

export interface AdminUser {
  id: string;
  email: string;
  role: UserRole;
  created_at: string;
  updated_at: string;
}

// Impact metrics
export interface ImpactMetrics {
  total_members: number;
  events_hosted: number;
  projects_built: number;
  bounties_completed: number;
  community_reach: number;
  updated_at: string;
}
