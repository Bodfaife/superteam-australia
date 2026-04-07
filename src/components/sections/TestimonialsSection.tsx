import { Container } from '@/components/common';

const testimonials = [
  {
    quote:
      'Superteam is quietly becoming a powerful force for growth in the ecosystem.',
    author: 'Austin Federa | 🛡️',
    handle: '@Austin_Federa',
  },
  {
    quote:
      "Superteam has facilitated growth around the globe. Theyve created a product that allows anyone to earn their first salary in crypto.",
    author: 'Solana Developers',
    handle: '@solana_devs',
  },
  {
    quote:
      'A new hackathon on DAOs and network states. $100k in prizes, open globally. Hosted by Superteam.',
    author: 'Balaji',
    handle: '@balajis',
  },
  {
    quote:
      'From joining a Discord invite link shared by @thetanmay to speaking at one of the largest crypto conferences. The journey has been incredible.',
    author: 'Kunal Bagaria',
    handle: '@kb24x7',
  },
];

export function TestimonialsSection() {
  return (
    <section id="love" className="relative py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-primary-300">Love and Respect</p>
          <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">
            Real praise from builders, partners, and the Solana ecosystem.
          </h2>
          <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg">
            Superteam is rooted in long-term relationships, global chapters, and earned respect across the community.
          </p>
        </div>

        <div className="mt-14 overflow-x-auto pb-4">
          <div className="inline-flex gap-6 min-w-full snap-x snap-mandatory">
            {testimonials.map((item) => (
              <article
                key={item.handle}
                className="snap-start min-w-[320px] max-w-[420px] rounded-[32px] border border-white/10 bg-slate-950/70 p-8 shadow-[0_25px_80px_-35px_rgba(0,0,0,0.8)] backdrop-blur-xl"
              >
                <p className="text-base leading-8 text-slate-100">{item.quote}</p>
                <div className="mt-8 border-t border-white/10 pt-5">
                  <p className="text-sm font-semibold text-white">{item.author}</p>
                  <p className="mt-1 text-sm text-slate-400">{item.handle}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
