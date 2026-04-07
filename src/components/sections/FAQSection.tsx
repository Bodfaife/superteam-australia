'use client';

import { Container } from '@/components/common';
import { FAQ_ITEMS } from '@/constants';
import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

export function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

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

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: 'easeOut' },
    },
  };

  return (
    <section className="relative bg-gradient-to-b from-blue-950/50 to-slate-950/50 py-16 sm:py-24 border-t border-blue-800/30">
      <Container>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="heading-2 mb-4 text-blue-50">Frequently Asked Questions</h2>
          <p className="text-body max-w-2xl mx-auto">
            Everything you need to know about Superteam Australia and how to get involved.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <motion.div
          className="mx-auto max-w-3xl space-y-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {FAQ_ITEMS.map((faq, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="overflow-hidden rounded-xl border border-neutral-200 bg-white transition-all"
            >
              <button
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="flex w-full items-center justify-between px-6 py-4 text-left hover:bg-neutral-50 transition-colors"
              >
                <span className="font-semibold text-neutral-900">{faq.question}</span>
                <ChevronDown
                  size={20}
                  className={`flex-shrink-0 text-neutral-600 transition-transform duration-300 ${
                    openIdx === idx ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {openIdx === idx && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="border-t border-neutral-200 px-6 py-4"
                >
                  <p className="text-neutral-600 leading-relaxed">{faq.answer}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Support CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 rounded-2xl bg-gradient-to-r from-primary-600/10 to-accent-600/10 border border-primary-200 px-8 py-12 text-center"
        >
          <p className="text-neutral-700 font-medium">
            Can't find what you're looking for?{' '}
            <a href="mailto:australia@superteam.fun" className="text-primary-600 hover:underline">
              Contact us
            </a>
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
