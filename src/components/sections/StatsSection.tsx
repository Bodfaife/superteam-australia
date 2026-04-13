'use client';

import { Container, Card } from '@/components/common';
import { DEFAULT_METRICS } from '@/constants';
import { motion } from 'framer-motion';
import { itemVariants } from '@/animations/variants';

const metrics = [
  { label: 'Members', value: DEFAULT_METRICS.total_members },
  { label: 'Events Hosted', value: DEFAULT_METRICS.events_hosted },
  { label: 'Projects Built', value: DEFAULT_METRICS.projects_built },
  { label: 'Bounties Completed', value: DEFAULT_METRICS.bounties_completed },
  { label: 'Community Reach', value: DEFAULT_METRICS.community_reach },
];

export function StatsSection() {
  return (
    <section id="impact" className="relative bg-gradient-to-b from-slate-950/50 to-blue-950/50 py-16 sm:py-24 border-t border-blue-800/30">
      <Container>
        <div className="mx-auto max-w-3xl text-center pb-12">
          <p className="text-sm uppercase tracking-[0.35em] text-primary-300">Impact</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Real metrics from a growing Australian Web3 ecosystem.
          </h2>
          <p className="mt-5 text-base leading-7 text-slate-300 sm:text-lg">
            Superteam Australia connects people, programs, and capital across the Solana ecosystem with measurable outcomes.
          </p>
        </div>

        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
              },
            },
          }}
        >
          {metrics.map((metric) => (
            <motion.div key={metric.label} variants={itemVariants}>
              <Card className="border border-white/10 bg-white/5 p-8 text-center">
                <p className="text-4xl font-bold text-white">{metric.value.toLocaleString()}</p>
                <p className="mt-3 text-sm uppercase tracking-[0.3em] text-slate-400">
                  {metric.label}
                </p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
