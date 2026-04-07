'use client';

import { Container, Card, Badge, Button } from '@/components/common';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Member } from '@/types';

// Sample featured members
const FEATURED_MEMBERS: Member[] = [
  {
    id: '1',
    name: 'Alex Chen',
    title: 'Solana Developer',
    company: 'Phantom',
    bio: 'Building the future of Web3 wallets',
    roles: ['Builder'],
    skills: ['Rust', 'Smart Contracts', 'Frontend'],
    contributions: ['Projects Built', 'Hackathon Winner'],
    twitter_handle: 'alexchen',
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
    roles: ['Founder', 'Operator'],
    skills: ['Community', 'Growth', 'Product'],
    contributions: ['DAO Contributor', 'Bounties Completed'],
    twitter_handle: 'jmorrison',
    location: 'Brisbane, QLD',
    featured: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
];

function MemberCardMini({ member }: { member: Member }) {
  return (
    <Card className="flex flex-col items-center text-center h-full">
      {/* Avatar */}
      <div className="mb-4 h-16 w-16 rounded-full bg-gradient-to-br from-primary-400 to-accent-400 flex items-center justify-center text-white font-bold text-xl">
        {member.name.charAt(0)}
      </div>

      {/* Name and Title */}
      <h3 className="font-bold text-neutral-900">{member.name}</h3>
      {member.title && (
        <p className="text-xs text-neutral-600">{member.title}</p>
      )}

      {/* Company */}
      {member.company && (
        <p className="mt-1 text-xs text-neutral-500">{member.company}</p>
      )}

      {/* Skills */}
      {member.skills.length > 0 && (
        <div className="mt-3 mb-3 flex flex-wrap justify-center gap-1">
          {member.skills.slice(0, 2).map((skill) => (
            <Badge key={skill} variant="secondary" className="text-xs">
              {skill}
            </Badge>
          ))}
        </div>
      )}

      {/* Twitter Link */}
      {member.twitter_handle && (
        <a
          href={`https://twitter.com/${member.twitter_handle}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto text-xs text-primary-600 hover:underline"
        >
          @{member.twitter_handle}
        </a>
      )}
    </Card>
  );
}

export function FeaturedMembersSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section className="relative bg-gradient-to-b from-slate-950/50 to-blue-950/50 py-16 sm:py-24 border-t border-blue-800/30">
      <Container>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="heading-2 mb-4 text-blue-50">Featured Members</h2>
          <p className="text-body max-w-2xl mx-auto">
            Meet the talented builders, creators, and innovators driving the Solana ecosystem forward.
          </p>
        </motion.div>

        {/* Featured Members Grid */}
        <motion.div
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {FEATURED_MEMBERS.map((member) => (
            <motion.div key={member.id} variants={itemVariants}>
              <MemberCardMini member={member} />
            </motion.div>
          ))}
        </motion.div>

        {/* View All Members CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link href="/members">
            <Button size="lg" variant="outline">
              View All Members <ArrowRight size={18} />
            </Button>
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}
