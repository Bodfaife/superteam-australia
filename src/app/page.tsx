import { Header, Footer } from '@/components/common';
import { HeroSection } from '@/components/sections/HeroSection';
import { ProductionsSection } from '@/components/sections/ProductionsSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { CollabSection } from '@/components/sections/CollabSection';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ProductionsSection />
        <TestimonialsSection />
        <CollabSection />
      </main>
      <Footer />
    </>
  );
}
