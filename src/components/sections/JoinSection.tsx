'use client';

import Link from 'next/link';
import { Container } from '@/components/common';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export function JoinSection() {
  return (
    <section id="join" className="relative bg-gradient-to-br from-blue-950/80 to-slate-950/95 py-20 border-t border-blue-800/30">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl rounded-[2.5rem] border border-white/10 bg-white/5 p-10 shadow-[0_40px_120px_-40px_rgba(15,23,42,0.8)] backdrop-blur-xl"
        >
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-primary-300">Stay Connected</p>
              <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">
                Join Superteam Australia on Discord, Telegram, and Twitter.
              </h2>
              <p className="mt-5 text-base leading-7 text-slate-300 sm:text-lg">
                Get the latest event updates, talent opportunities, and community highlights directly from the Superteam Australia network.
              </p>
            </div>

            <div className="grid gap-4">
              <Link href="https://discord.gg/superteam" target="_blank" rel="noreferrer" className="inline-flex items-center justify-between rounded-2xl border border-white/10 bg-slate-950/80 px-6 py-4 text-white transition hover:border-primary-400 hover:bg-slate-900">
                <span>Discord</span>
                <ArrowRight size={18} />
              </Link>
              <Link href="https://t.me/superteamau" target="_blank" rel="noreferrer" className="inline-flex items-center justify-between rounded-2xl border border-white/10 bg-slate-950/80 px-6 py-4 text-white transition hover:border-primary-400 hover:bg-slate-900">
                <span>Telegram</span>
                <ArrowRight size={18} />
              </Link>
              <Link href="https://twitter.com/superteamau" target="_blank" rel="noreferrer" className="inline-flex items-center justify-between rounded-2xl border border-white/10 bg-slate-950/80 px-6 py-4 text-white transition hover:border-primary-400 hover:bg-slate-900">
                <span>Twitter / X</span>
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
