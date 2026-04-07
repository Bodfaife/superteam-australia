'use client';

import { Container, Card } from '@/components/common';
import { OnboardingForm } from '@/components/forms/OnboardingForm';
import { motion } from 'framer-motion';

export function GetInvolvedSection() {
  return (
    <section id="get-involved" className="relative bg-gradient-to-br from-neutral-50 to-primary-50 py-16 sm:py-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="heading-2 mb-4">Ready to Get Involved?</h2>
          <p className="text-body max-w-2xl mx-auto">
            Join the Superteam Australia community and start your journey with us. Tell us about yourself and what you're looking for.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl"
        >
          <Card className="shadow-lg">
            <OnboardingForm />
          </Card>
        </motion.div>
      </Container>
    </section>
  );
}
