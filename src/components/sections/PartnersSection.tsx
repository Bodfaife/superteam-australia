'use client';

import { Container } from '@/components/common';
import { motion } from 'framer-motion';
import { itemVariants } from '@/animations/variants';

const ECOSYSTEM_PARTNERS = [
  { name: 'Phantom', logo: '🔮' },
  { name: 'Magic Eden', logo: '✨' },
  { name: 'Marinade Finance', logo: '⛵' },
  { name: 'Orca', logo: '🦈' },
  { name: 'Raydium', logo: '☀️' },
  { name: 'Serum', logo: '🧬' },
  { name: 'Mango Markets', logo: '🥭' },
  { name: 'Switchboard', logo: '🔌' },
  { name: 'Pyth Network', logo: '🐍' },
  { name: 'Solend', logo: '💰' },
  { name: 'Anchor Protocol', logo: '⚓' },
  { name: 'Metaplex', logo: '🎨' },
];

export function PartnersSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2,
      },
    },
  };


  return (
    <section id="partners" className="relative bg-gradient-to-b from-slate-950/50 to-blue-950/50 py-16 sm:py-24 border-t border-blue-800/30">
      <Container>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="heading-2 mb-4 text-blue-50">Partners</h2>
          <p className="text-body max-w-2xl mx-auto">
            We work with leading Solana projects and protocols to create opportunities for our community.
          </p>
        </motion.div>

        {/* Partners Grid */}
        <motion.div
          className="grid gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {ECOSYSTEM_PARTNERS.map((partner, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -4 }}
              className="group flex items-center justify-center rounded-xl border border-neutral-200 bg-white p-6 transition-all hover:border-primary-300 hover:shadow-md"
            >
              <div className="text-center">
                <div className="mb-2 text-4xl">{partner.logo}</div>
                <p className="text-xs font-medium text-neutral-700 group-hover:text-primary-600 transition-colors">
                  {partner.name}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
