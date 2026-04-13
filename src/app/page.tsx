import { Header, Footer } from '@/components/common';
import { HeroSection } from '@/components/sections/HeroSection';
import { FeaturesSection } from '@/components/sections/FeaturesSection';
import { StatsSection } from '@/components/sections/StatsSection';
import { EventsSection } from '@/components/sections/EventsSection';
import { FeaturedMembersSection } from '@/components/sections/FeaturedMembersSection';
import { PartnersSection } from '@/components/sections/PartnersSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { FAQSection } from '@/components/sections/FAQSection';
import { GetInvolvedSection } from '@/components/sections/GetInvolvedSection';
import { JoinSection } from '@/components/sections/JoinSection';
import { CollabSection } from '@/components/sections/CollabSection';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <StatsSection />
        <EventsSection />
        <FeaturedMembersSection />
        <PartnersSection />
        <TestimonialsSection />
        <FAQSection />
        <GetInvolvedSection />
        <JoinSection />
        <CollabSection />
      </main>
      <Footer />
    </>
  );
}
