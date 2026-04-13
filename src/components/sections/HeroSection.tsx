'use client';

import { Button, Container } from '@/components/common';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { itemVariants } from '@/animations/variants';

export function HeroSection() {
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


  return (
    <section id="hero" className="relative overflow-hidden bg-slate-950/95 pb-24 pt-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.18),transparent_22%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.18),transparent_28%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.08),transparent_15%),radial-gradient(circle_at_80%_80%,rgba(96,165,250,0.08),transparent_20%)]" />
      <div className="absolute inset-0 opacity-50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(255,255,255,0.12),transparent_12%),radial-gradient(circle_at_80%_25%,rgba(167,139,250,0.12),transparent_18%)]" />
      </div>

      <Container className="relative z-10">
        <motion.div
          className="mx-auto flex max-w-5xl flex-col items-center text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="inline-flex mb items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-primary-200 backdrop-blur-sm">
            <Sparkles size={16} className="text-primary-300" />
            <span>Superteam Australia</span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="mt-8 max-w-4xl text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            We build Web3 culture from the ground up.
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl"
          >
            Australia’s Solana builders, founders, and creatives working together to ship products,
            grow communities, and launch global Web3 stories.
          </motion.p>

          <motion.div variants={itemVariants} className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="#collab">
              <Button size="lg" className="gap-2">
                Collab with us <ArrowRight size={18} />
              </Button>
            </Link>
            <Link href="https://superteam.fun" target="_blank">
              <Button size="lg" variant="secondary">
                Visit global site
              </Button>
            </Link>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-16 w-full rounded-[2.5rem] border border-white/10 bg-white/5 p-8 shadow-[0_30px_100px_-40px_rgba(15,23,42,0.6)] backdrop-blur-xl">
            <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
              <div className="space-y-4">
                <p className="text-sm uppercase tracking-[0.35em] text-primary-300">Superteam productions</p>
                <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                  Earn, launch, and connect with the next wave of Web3 programs.
                </h2>
                <p className="max-w-xl text-slate-300">
                  Fast-moving opportunities, global collaboration, and a creative studio for founders
                  and builders who want to ship projects with real impact.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {['Earn', 'Idea Bank', 'Instagrants', 'Global Chapters'].map((item) => (
                  <div key={item} className="rounded-3xl bg-slate-950/80 p-4 text-left text-slate-200 shadow-[0_0_40px_-16px_rgba(59,130,246,0.55)] ring-1 ring-white/10">
                    <p className="text-sm uppercase tracking-[0.35em] text-primary-300">{item}</p>
                    <p className="mt-3 text-base leading-7 text-slate-300">
                      {item === 'Earn' && 'Paid bounties and earn opportunities for builders in the Solana ecosystem.'}
                      {item === 'Idea Bank' && 'Launch-ready product ideas, community plays, and creative concepts for teams.'}
                      {item === 'Instagrants' && 'Rapid funding for creatives, founders, and early-stage builders.'}
                      {item === 'Global Chapters' && 'A growing network across 20+ countries, united by Superteam culture.'}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-16 grid gap-4 sm:grid-cols-3">
            {[
              { label: '20+', value: 'global chapters' },
              { label: '800+', value: 'bounties completed' },
              { label: '1M+', value: 'ecosystem reach' },
            ].map((stat) => (
              <div key={stat.label} className="rounded-3xl border border-white/10 bg-slate-950/70 p-6 text-center">
                <p className="text-3xl font-semibold text-white">{stat.label}</p>
                <p className="mt-2 text-sm uppercase tracking-[0.24em] text-slate-400">{stat.value}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
