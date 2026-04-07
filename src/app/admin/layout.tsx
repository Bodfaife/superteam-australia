import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Admin Dashboard - Superteam Australia',
  description: 'Manage content, members, and events for Superteam Australia',
  robots: 'noindex,nofollow', // Prevent search engines from indexing admin pages
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen space-bg">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 border-r border-blue-800/30 bg-blue-950/80 backdrop-blur-sm p-6">
          <div className="mb-8">
            <div className="text-xl font-bold text-blue-50">Superteam Admin</div>
            <div className="text-xs text-blue-300">Australia</div>
          </div>

          <nav className="space-y-2">
            <a
              href="/admin"
              className="block rounded-lg px-4 py-2 text-sm text-blue-200 hover:bg-blue-800/30"
            >
              Dashboard
            </a>
            <a
              href="/admin/members"
              className="block rounded-lg px-4 py-2 text-sm text-blue-200 hover:bg-blue-800/30"
            >
              Members
            </a>
            <a
              href="/admin/events"
              className="block rounded-lg px-4 py-2 text-sm text-blue-200 hover:bg-blue-800/30"
            >
              Events
            </a>
            <a
              href="/admin/content"
              className="block rounded-lg px-4 py-2 text-sm text-blue-200 hover:bg-blue-800/30"
            >
              Content
            </a>
            <a
              href="/admin/faqs"
              className="block rounded-lg px-4 py-2 text-sm text-blue-200 hover:bg-blue-800/30"
            >
              FAQs
            </a>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8 bg-blue-950/20">{children}</div>
      </div>
    </div>
  );
}
