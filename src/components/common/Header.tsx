'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './Button';
import { NAV_LINKS, BRAND } from '@/constants';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/95 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-3 text-white">
            <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-2xl bg-slate-950 shadow-glow">
              <img
                src="/superteam-australia-logo.jpg"
                alt="Superteam Australia logo"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="hidden sm:block">
              <div className="text-sm font-semibold text-white">{BRAND.name}</div>
              <div className="text-xs text-slate-400">Australia</div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-200 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden sm:flex gap-2">
              <Link href="https://twitter.com/superteamau" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="sm">X</Button>
              </Link>
            </div>
            <Link href="#collab">
              <Button size="sm">Collab</Button>
            </Link>
            <button
              className="md:hidden p-2 text-slate-200"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <nav className="md:hidden border-t border-white/10 py-4 space-y-3 text-slate-200">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-sm font-medium hover:text-white py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-white/10">
              <Link href="#collab" onClick={() => setMobileMenuOpen(false)}>
                <Button fullWidth>Collab</Button>
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}

