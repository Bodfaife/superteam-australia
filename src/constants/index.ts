import { MemberRole, MemberSkill, OpportunityType } from '@/types';

// Brand constants
export const BRAND = {
  name: 'Superteam Australia',
  tagline: 'Accelerating Builders & Founders Across Australia',
  description:
    'The official digital home for Solana builders, founders, and creatives in Australia. We accelerate innovation, connect talent, and grow the ecosystem.',
  twitter: '@superteamau',
  discordInvite: 'https://discord.gg/superteam',
  telegramGroup: 'https://t.me/superteamau',
  email: 'australia@superteam.fun',
};

// Navigation
export const NAV_LINKS = [
  { label: 'Productions', href: '#productions' },
  { label: 'Love & Respect', href: '#love' },
  { label: 'Collab', href: '#collab' },
  { label: 'Global', href: 'https://superteam.fun' },
];

// Social links
export const SOCIAL_LINKS = [
  {
    name: 'Twitter',
    url: 'https://twitter.com/superteamau',
    icon: 'Twitter',
  },
  {
    name: 'Discord',
    url: 'https://discord.gg/superteam',
    icon: 'MessageCircle',
  },
  {
    name: 'Telegram',
    url: 'https://t.me/superteamau',
    icon: 'Send',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/superteam',
    icon: 'Github',
  },
];

// Member roles
export const MEMBER_ROLES: { value: MemberRole; label: string; description: string }[] = [
  { value: 'Builder', label: 'Builder', description: 'Developer or engineer' },
  { value: 'Designer', label: 'Designer', description: 'UX/UI or product designer' },
  { value: 'Founder', label: 'Founder', description: 'Project founder or co-founder' },
  { value: 'Creative', label: 'Creative', description: 'Content creator or artist' },
  { value: 'Operator', label: 'Operator', description: 'Operations or business development' },
  { value: 'Institution', label: 'Institution', description: 'Organization or institution' },
  { value: 'Investor', label: 'Investor', description: 'Investor or fund manager' },
  { value: 'Other', label: 'Other', description: 'Other role' },
];

// Skills
export const SKILLS: { value: MemberSkill; label: string }[] = [
  { value: 'Rust', label: 'Rust' },
  { value: 'Frontend', label: 'Frontend' },
  { value: 'Backend', label: 'Backend' },
  { value: 'Design', label: 'Design' },
  { value: 'Content', label: 'Content' },
  { value: 'Growth', label: 'Growth' },
  { value: 'Product', label: 'Product' },
  { value: 'Community', label: 'Community' },
  { value: 'DevOps', label: 'DevOps' },
  { value: 'Smart Contracts', label: 'Smart Contracts' },
  { value: 'Mobile', label: 'Mobile' },
  { value: 'Data', label: 'Data' },
];

// Opportunity types
export const OPPORTUNITY_TYPES: { value: OpportunityType; label: string }[] = [
  { value: 'Hackathon', label: 'Hackathon' },
  { value: 'Bounty', label: 'Bounty' },
  { value: 'Grant', label: 'Grant' },
  { value: 'Job', label: 'Job' },
  { value: 'Partnership', label: 'Partnership' },
];

// Impact metrics (default values, will be updated from DB)
export const DEFAULT_METRICS = {
  total_members: 2500,
  events_hosted: 48,
  projects_built: 156,
  bounties_completed: 892,
  community_reach: 45000,
};

// Features / What we do
export const FEATURES = [
  {
    title: 'Builder & Founder Support',
    description: 'Product and technical guidance across hackathons, bounties, and ecosystem programs.',
    icon: '🔨',
  },
  {
    title: 'Capital & Fundraising',
    description: 'Connecting capital with scalable projects and supporting investor readiness.',
    icon: '💰',
  },
  {
    title: 'Growth & Distribution',
    description: 'Go-to-market support and access to ecosystem distribution and community.',
    icon: '📈',
  },
  {
    title: 'Talent & Hiring',
    description: 'Connecting teams with developers, designers, and operators.',
    icon: '👥',
  },
  {
    title: 'Ecosystem & Community',
    description: 'Events, education, ecosystem coordination, and global showcase.',
    icon: '🌍',
  },
  {
    title: 'Institutional Engagement',
    description: 'Bridging builders with institutions and supporting real-world adoption.',
    icon: '🏛️',
  },
];

// FAQ
export const FAQ_ITEMS = [
  {
    question: 'What is Superteam Australia?',
    answer:
      'Superteam Australia is the digital home for Solana builders, founders, and creatives in Australia. We accelerate innovation, connect talent with opportunities, and grow a thriving Web3 ecosystem across Australia and globally.',
  },
  {
    question: 'How do I get involved?',
    answer:
      'You can get started by filling out our onboarding form using the "Get Involved" button on the homepage. This helps us understand your background, skills, and what you\'re looking for so we can connect you with the right opportunities and people.',
  },
  {
    question: 'What opportunities are available?',
    answer:
      'We offer a wide range of opportunities including hackathons, bounties, grants, job placements, and partnership programs. Browse our opportunities section or check back regularly as we add new programs.',
  },
  {
    question: 'How can institutions engage with Superteam?',
    answer:
      'Institutions can partner with Superteam Australia to access talent, build partnerships, or support ecosystem initiatives. Contact us at australia@superteam.fun to discuss collaboration opportunities.',
  },
  {
    question: 'Is there a membership fee?',
    answer:
      'No, Superteam Australia is free to join. We\'re focused on building an open, inclusive community of builders and creators.',
  },
  {
    question: 'How often do you host events?',
    answer:
      'We host regular events throughout the year including workshops, networking sessions, hackathons, and educational programs. Follow our social channels for the latest event announcements.',
  },
  {
    question: 'Can I contribute to Superteam Australia?',
    answer:
      'Absolutely! We welcome community contributions. Whether you\'re interested in organizing events, creating content, mentoring, or building tools, there are many ways to get involved.',
  },
];

// Member categories (for featured members)
export const CONTRIBUTION_BADGES = {
  'Hackathon Winner': { color: 'bg-yellow-100', textColor: 'text-yellow-700' },
  'Projects Built': { color: 'bg-blue-100', textColor: 'text-blue-700' },
  'Grants Received': { color: 'bg-green-100', textColor: 'text-green-700' },
  'DAO Contributor': { color: 'bg-purple-100', textColor: 'text-purple-700' },
  'Bounties Completed': { color: 'bg-pink-100', textColor: 'text-pink-700' },
  'Core Contributor': { color: 'bg-red-100', textColor: 'text-red-700' },
  'Event Organizer': { color: 'bg-orange-100', textColor: 'text-orange-700' },
};

// Global Superteam links
export const GLOBAL_SUPERTEAM = [
  { name: 'Global Superteam', url: 'https://superteam.fun' },
  { name: 'Superteam USA', url: 'https://us.superteam.fun' },
  { name: 'Superteam UAE', url: 'https://uae.superteam.fun' },
  { name: 'Superteam Deutschland', url: 'https://de.superteam.fun' },
  { name: 'Superteam India', url: 'https://india.superteam.fun' },
  { name: 'Superteam Turkey', url: 'https://turkey.superteam.fun' },
];
