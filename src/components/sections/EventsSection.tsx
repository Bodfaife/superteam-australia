'use client';

import { Container, Card, Badge, Button } from '@/components/common';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, ArrowRight } from 'lucide-react';
import Link from 'next/link';

// Sample events data
const SAMPLE_EVENTS = [
  {
    id: '1',
    title: 'Solana Summer Hackathon 2024',
    description: 'Build the future of Web3 in Australia',
    date: '2024-06-15',
    time: '10:00 AM',
    location: 'Sydney, NSW',
    image_url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop',
    rsvp_count: 450,
    featured: true,
  },
  {
    id: '2',
    title: 'Superteam Meetup Melbourne',
    description: 'Connect with builders and founders in Melbourne',
    date: '2024-05-20',
    time: '6:00 PM',
    location: 'Melbourne, VIC',
    image_url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop',
    rsvp_count: 280,
    featured: true,
  },
  {
    id: '3',
    title: 'Web3 Founders Circle Q2',
    description: 'Quarterly meetup for founders and operators',
    date: '2024-05-10',
    time: '7:00 PM',
    location: 'Online',
    image_url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop',
    rsvp_count: 320,
    featured: false,
  },
];

export function EventsSection() {
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
      transition: { duration: 0.6, ease: 'easeInOut' as const },
    },
  };

  return (
    <section id="events" className="relative bg-gradient-to-b from-blue-950/50 to-slate-950/50 py-16 sm:py-24 border-t border-blue-800/30">
      <Container>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="heading-2 mb-4 text-blue-50">Upcoming Events</h2>
          <p className="text-body max-w-2xl mx-auto">
            Join our community events, workshops, and hackathons. Connect with builders, learn from experts, and build together.
          </p>
        </motion.div>

        {/* Events Grid */}
        <motion.div
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {SAMPLE_EVENTS.map((event) => (
            <motion.div key={event.id} variants={itemVariants}>
              <Card className="overflow-hidden h-full flex flex-col group hover:border-primary-300">
                {/* Event Image */}
                <div className="relative mb-4 h-48 w-full overflow-hidden rounded-lg bg-neutral-200">
                  <img
                    src={event.image_url}
                    alt={event.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  {event.featured && (
                    <Badge variant="accent" className="absolute left-4 top-4">
                      Featured
                    </Badge>
                  )}
                </div>

                {/* Event Details */}
                <h3 className="mb-2 font-bold text-neutral-900 group-hover:text-primary-600 transition-colors">
                  {event.title}
                </h3>
                <p className="mb-4 text-sm text-neutral-600">{event.description}</p>

                {/* Meta Info */}
                <div className="mb-4 space-y-2 text-sm text-neutral-600">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} className="flex-shrink-0" />
                    {new Date(event.date).toLocaleDateString('en-AU', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </div>
                  {event.time && (
                    <div className="flex items-center gap-2">
                      <Clock size={16} className="flex-shrink-0" />
                      {event.time}
                    </div>
                  )}
                  <div className="flex items-center gap-2">
                    <MapPin size={16} className="flex-shrink-0" />
                    {event.location}
                  </div>
                </div>

                {/* RSVPs */}
                {event.rsvp_count && (
                  <p className="mb-4 text-xs text-neutral-500">
                    {event.rsvp_count} people attending
                  </p>
                )}

                {/* CTA */}
                <div className="mt-auto">
                  <Button fullWidth variant="secondary" className="gap-2">
                    Learn More <ArrowRight size={16} />
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link href="https://lu.ma/superteam-au" target="_blank" rel="noopener noreferrer">
            <Button size="lg" variant="outline">
              View All Events on Luma <ArrowRight size={18} />
            </Button>
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}
