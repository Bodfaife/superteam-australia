import { Container } from '@/components/common';

export function CollabSection() {
  return (
    <section id="collab" className="relative overflow-hidden py-24">
      <Container>
        <div className="relative overflow-hidden rounded-[3rem] border border-white/10 bg-slate-950/95 px-6 py-16 shadow-2xl shadow-black/40 sm:px-10 lg:px-16">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.22),transparent_25%),radial-gradient(circle_at_bottom_right,rgba(236,72,153,0.18),transparent_25%)]" />
          <div className="relative grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-center">
            <div className="max-w-2xl">
              <p className="text-sm uppercase tracking-[0.4em] text-primary-300">be a part of history</p>
              <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">
                Collab with Superteam Australia.
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-300">
                Bring your idea, event, or launch to the program that helps founders, builders, and creatives scale their Web3 work across Australia and the broader Solana ecosystem.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                <a
                  href="mailto:australia@superteam.fun?subject=Collab%20with%20Superteam%20Australia"
                  className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
                >
                  Collab with us
                </a>
                <a
                  href="https://superteam.fun"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-8 py-3 text-sm font-semibold text-white transition hover:border-primary-300 hover:bg-white/10"
                >
                  Visit global site
                </a>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5">
              <img
                src="https://res.cloudinary.com/dgvnuwspr/image/upload/assets/st/images/collab-sm2.png"
                alt="Superteam collaboration visual"
                className="h-full min-h-[320px] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
