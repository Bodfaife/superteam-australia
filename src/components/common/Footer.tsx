import Link from 'next/link';
import { BRAND, SOCIAL_LINKS, GLOBAL_SUPERTEAM, NAV_LINKS } from '@/constants';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4 lg:grid-cols-5">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4 text-white">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary-500 text-lg font-bold shadow-glow">
                S
              </div>
              <div>
                <div className="text-sm font-semibold">Superteam</div>
                <div className="text-xs text-slate-400">Australia</div>
              </div>
            </Link>
            <p className="text-sm text-slate-400 mb-4">
              Accelerating builders, founders, and creatives across Australia.
            </p>
            <div className="flex gap-3">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-slate-200 transition hover:bg-primary-500 hover:text-white"
                >
                  <span className="text-sm font-bold">{social.name[0]}</span>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Navigation</h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-300 hover:text-white transition"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Community</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://discord.gg/superteam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-slate-300 hover:text-white transition"
                >
                  Discord
                </a>
              </li>
              <li>
                <a
                  href="https://t.me/superteamau"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-slate-300 hover:text-white transition"
                >
                  Telegram
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/superteamau"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-slate-300 hover:text-white transition"
                >
                  Twitter/X
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2 lg:col-span-1">
            <h3 className="text-sm font-semibold text-white mb-4">Global Superteam</h3>
            <ul className="space-y-3">
              {GLOBAL_SUPERTEAM.slice(0, 3).map((link) => (
                <li key={link.url}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-slate-300 hover:text-white transition"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <p className="text-sm text-slate-500">
              © {currentYear} Superteam Australia. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a
                href="https://superteam.fun"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-slate-300 hover:text-white transition"
              >
                Global Site
              </a>
              <a
                href={`mailto:${BRAND.email}`}
                className="text-sm text-slate-300 hover:text-white transition"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
