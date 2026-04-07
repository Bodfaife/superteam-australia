'use client';

import { useState, useMemo } from 'react';
import { Header, Footer, Container, Card, Badge, Button } from '@/components/common';
import { SKILLS } from '@/constants';
import { Member, MemberSkill } from '@/types';
import { Search, X } from 'lucide-react';
import { motion } from 'framer-motion';

// Sample member data - in production, this would come from Supabase
const SAMPLE_MEMBERS: Member[] = [
  {
    id: '1',
    name: 'Alex Chen',
    title: 'Solana Developer',
    company: 'Phantom',
    bio: 'Building the future of Web3 wallets',
    avatar_url: 'https://avatars.githubusercontent.com/u/12345',
    roles: ['Builder'],
    skills: ['Rust', 'Smart Contracts', 'Frontend'],
    contributions: ['Projects Built', 'Hackathon Winner'],
    twitter_handle: 'alexchen',
    github_handle: 'alexchen',
    location: 'Sydney, NSW',
    featured: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: '2',
    name: 'Sarah Williams',
    title: 'Product Designer',
    company: 'Magic Eden',
    bio: 'Creating beautiful Web3 experiences',
    avatar_url: 'https://avatars.githubusercontent.com/u/12346',
    roles: ['Designer'],
    skills: ['Design', 'Product'],
    contributions: ['Projects Built'],
    twitter_handle: 'sarahwill',
    location: 'Melbourne, VIC',
    featured: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: '3',
    name: 'James Morrison',
    title: 'Founder',
    company: 'Solana Australia DAO',
    bio: 'Building community-driven projects',
    avatar_url: 'https://avatars.githubusercontent.com/u/12347',
    roles: ['Founder', 'Operator'],
    skills: ['Community', 'Growth', 'Product'],
    contributions: ['DAO Contributor', 'Bounties Completed'],
    twitter_handle: 'jmorrison',
    github_handle: 'jmorrison',
    location: 'Brisbane, QLD',
    featured: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: '4',
    name: 'Emma Rodriguez',
    title: 'Content Creator',
    company: 'Superteam',
    bio: 'Creating education content for Web3',
    avatar_url: 'https://avatars.githubusercontent.com/u/12348',
    roles: ['Creative'],
    skills: ['Content', 'Community'],
    contributions: ['Event Organizer'],
    twitter_handle: 'emmarodriguez',
    location: 'Perth, WA',
    featured: false,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: '5',
    name: 'David Park',
    title: 'Full Stack Developer',
    company: 'Marinade Finance',
    bio: 'Building DeFi infrastructure',
    avatar_url: 'https://avatars.githubusercontent.com/u/12349',
    roles: ['Builder'],
    skills: ['Frontend', 'Backend', 'Smart Contracts'],
    contributions: ['Projects Built', 'Bounties Completed'],
    twitter_handle: 'davidpark',
    github_handle: 'davidpark',
    location: 'Sydney, NSW',
    featured: false,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
];

interface FilterState {
  skills: MemberSkill[];
  searchQuery: string;
}

function MemberCard({ member }: { member: Member }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
    >
      <Card className="flex flex-col h-full overflow-hidden group">
        {/* Avatar */}
        <div className="mb-4 flex items-center gap-3">
          <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary-400 to-accent-400 flex items-center justify-center text-white font-bold text-lg overflow-hidden">
            {member.avatar_url ? (
              <img src={member.avatar_url} alt={member.name} className="w-full h-full object-cover" />
            ) : (
              member.name.charAt(0)
            )}
          </div>
          <div>
            <h3 className="font-bold text-neutral-900">{member.name}</h3>
            {member.title && <p className="text-xs text-neutral-600">{member.title}</p>}
          </div>
        </div>

        {/* Company */}
        {member.company && (
          <p className="mb-3 text-sm text-neutral-600">{member.company}</p>
        )}

        {/* Skills */}
        {member.skills.length > 0 && (
          <div className="mb-4 flex flex-wrap gap-2">
            {member.skills.slice(0, 3).map((skill) => (
              <Badge key={skill} variant="secondary" className="text-xs">
                {skill}
              </Badge>
            ))}
            {member.skills.length > 3 && (
              <Badge variant="secondary" className="text-xs">
                +{member.skills.length - 3}
              </Badge>
            )}
          </div>
        )}

        {/* Contributions */}
        {member.contributions && member.contributions.length > 0 && (
          <div className="mb-4 flex flex-wrap gap-2">
            {member.contributions.map((contrib) => (
              <Badge key={contrib} variant="accent" className="text-xs">
                {contrib}
              </Badge>
            ))}
          </div>
        )}

        {/* Location */}
        {member.location && (
          <p className="mb-4 text-xs text-neutral-500">📍 {member.location}</p>
        )}

        {/* Social Links */}
        <div className="mt-auto flex gap-2">
          {member.twitter_handle && (
            <a
              href={`https://twitter.com/${member.twitter_handle}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-primary-600 hover:underline"
            >
              Twitter
            </a>
          )}
          {member.github_handle && (
            <a
              href={`https://github.com/${member.github_handle}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-primary-600 hover:underline"
            >
              GitHub
            </a>
          )}
        </div>
      </Card>
    </motion.div>
  );
}

export default function MembersPage() {
  const [filters, setFilters] = useState<FilterState>({
    skills: [],
    searchQuery: '',
  });

  const filteredMembers = useMemo(() => {
    return SAMPLE_MEMBERS.filter((member) => {
      // Search filter
      const searchLower = filters.searchQuery.toLowerCase();
      const matchesSearch =
        member.name.toLowerCase().includes(searchLower) ||
        member.title?.toLowerCase().includes(searchLower) ||
        member.company?.toLowerCase().includes(searchLower) ||
        member.bio?.toLowerCase().includes(searchLower);

      // Skill filter
      const matchesSkills =
        filters.skills.length === 0 ||
        filters.skills.some((skill) => member.skills.includes(skill));

      return matchesSearch && matchesSkills;
    });
  }, [filters]);

  const toggleSkillFilter = (skill: MemberSkill) => {
    setFilters((prev) => ({
      ...prev,
      skills: prev.skills.includes(skill)
        ? prev.skills.filter((s) => s !== skill)
        : [...prev.skills, skill],
    }));
  };

  const clearFilters = () => {
    setFilters({
      skills: [],
      searchQuery: '',
    });
  };

  return (
    <>
      <Header />
      <main className="min-h-screen space-bg">
        <div className="bg-gradient-to-r from-blue-950/50 to-slate-950/50 border-b border-blue-800/30">
          <Container className="py-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="heading-2 mb-4 text-blue-50">Superteam Australia Members</h1>
              <p className="text-body max-w-2xl text-blue-200">
                Explore the talented builders, creators, and innovators powering the Solana ecosystem in Australia.
              </p>
            </motion.div>
          </Container>
        </div>

        <Container className="py-12">
          {/* Search and Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-12 space-y-6"
          >
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-blue-400" />
              <input
                type="text"
                placeholder="Search by name, skill, role..."
                value={filters.searchQuery}
                onChange={(e) =>
                  setFilters((prev) => ({
                    ...prev,
                    searchQuery: e.target.value,
                  }))
                }
                className="input-base w-full pl-12"
              />
            </div>

            {/* Skill Filters */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-blue-50">Filter by Skills</h3>
                {(filters.skills.length > 0 || filters.searchQuery) && (
                  <button
                    onClick={clearFilters}
                    className="flex items-center gap-1 text-sm text-primary-400 hover:text-primary-300"
                  >
                    <X size={16} />
                    Clear filters
                  </button>
                )}
              </div>

              <div className="grid gap-2 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                {SKILLS.map((skill) => (
                  <button
                    key={skill.value}
                    onClick={() => toggleSkillFilter(skill.value)}
                    className={`rounded-lg px-3 py-2 text-sm font-medium transition-all ${
                      filters.skills.includes(skill.value)
                        ? 'bg-primary-600 text-white'
                        : 'bg-neutral-200 text-neutral-700 hover:bg-neutral-300'
                    }`}
                  >
                    {skill.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Results count */}
            <p className="text-sm text-blue-300">
              Showing {filteredMembers.length} of {SAMPLE_MEMBERS.length} members
            </p>
          </motion.div>

          {/* Members Grid */}
          {filteredMembers.length > 0 ? (
            <motion.div
              className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              layout
            >
              {filteredMembers.map((member, idx) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  layout
                >
                  <MemberCard member={member} />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-xl border border-blue-700/30 bg-blue-950/30 p-12 text-center"
            >
              <h3 className="mb-2 text-lg font-semibold text-blue-50">No members found</h3>
              <p className="text-blue-300 mb-6">Try adjusting your search or filter criteria</p>
              <Button onClick={clearFilters}>Clear Filters</Button>
            </motion.div>
          )}
        </Container>
      </main>
      <Footer />
    </>
  );
}
