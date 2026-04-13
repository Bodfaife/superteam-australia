'use client';

import { Container, Card } from '@/components/common';
import { FEATURES } from '@/constants';
import { motion } from 'framer-motion';
import { itemVariants } from '@/animations/variants';

export function FeaturesSection() {
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
    <section id="features" className="relative bg-gradient-to-b from-blue-950/50 to-slate-950/50 py-16 sm:py-24 border-t border-blue-800/30">
      <Container>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="heading-2 mb-4 text-blue-50">What We Do</h2>
          <p className="text-body max-w-2xl mx-auto text-blue-200">
            Superteam Australia supports the entire ecosystem end-to-end, from early-stage builders to institutional adoption. Here's how we accelerate your journey.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {FEATURES.map((feature, idx) => (
            <motion.div key={idx} variants={itemVariants}>
              <Card className="h-full group hover:border-primary-300">
                <div className="mb-4 text-4xl">{feature.icon}</div>
                <h3 className="mb-2 text-xl font-bold text-neutral-900 group-hover:text-primary-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-neutral-600">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 rounded-2xl bg-gradient-to-r from-primary-600 to-accent-600 px-8 py-12 text-center text-white"
        >
          <h3 className="mb-4 text-2xl font-bold">Ready to Get Started?</h3>
          <p className="mb-6 text-lg opacity-90">
            Join thousands of builders, founders, and creatives building the future.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
