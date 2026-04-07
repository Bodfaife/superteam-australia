'use client';

import { Container } from '@/components/common';

const productions = [
  {
    title: 'Earn',
    description:
      'High-impact bounties and paid opportunities for Australia’s builders to earn real Web3 income while shipping projects.',
  },
  {
    title: 'Idea Bank',
    description:
      'A curated collection of product ideas, community features, and launch-ready concepts for founders and teams.',
  },
  {
    title: 'Instagrants',
    description:
      'Fast funding designed for creators, builders, and early-stage projects that move quickly and ship value.',
  },
];

export function ProductionsSection() {
  return (
    <section id="productions" className="relative border-t border-white/10 bg-slate-950/80 py-24">
      <Container className="relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-primary-300">superteam</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            productions
          </h2>
          <p className="mt-5 text-base leading-7 text-slate-300 sm:text-lg">
            Our global studio of community, product, and distribution programs that help
            founders, builders and creatives ship and grow together.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {productions.map((item) => (
            <div
              key={item.title}
              className="group overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-[0_0_80px_rgba(0,0,0,0.18)] transition-all duration-300 hover:-translate-y-1 hover:border-primary-400/30"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-500/10 text-primary-300 shadow-[0_15px_60px_-30px_rgba(90,103,246,0.7)]">
                <span className="text-lg font-semibold uppercase tracking-[0.25em]">
                  {item.title.slice(0, 1)}
                </span>
              </div>
              <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">{item.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
