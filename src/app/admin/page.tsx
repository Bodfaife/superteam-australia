'use client';

import { DEFAULT_METRICS } from '@/constants';

export default function AdminDashboard() {
  return (
    <div>
      <h1 className="mb-8 text-3xl font-bold text-white">Dashboard</h1>

      {/* Metrics Overview */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
        {[
          { label: 'Total Members', value: DEFAULT_METRICS.total_members },
          {
            label: 'Events Hosted',
            value: DEFAULT_METRICS.events_hosted,
          },
          {
            label: 'Projects Built',
            value: DEFAULT_METRICS.projects_built,
          },
          {
            label: 'Bounties Completed',
            value: DEFAULT_METRICS.bounties_completed,
          },
          {
            label: 'Community Reach',
            value: DEFAULT_METRICS.community_reach,
          },
        ].map((metric) => (
          <div
            key={metric.label}
            className="rounded-lg border border-neutral-800 bg-neutral-900 p-6"
          >
            <div className="text-3xl font-bold text-white">{metric.value}</div>
            <div className="mt-2 text-sm text-neutral-400">{metric.label}</div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="mt-12">
        <h2 className="mb-6 text-xl font-bold text-white">Quick Actions</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {[
            { label: 'Add Member', href: '/admin/members/new' },
            { label: 'Create Event', href: '/admin/events/new' },
            { label: 'Manage Content', href: '/admin/content' },
            { label: 'Edit FAQs', href: '/admin/faqs' },
          ].map((action) => (
            <a
              key={action.label}
              href={action.href}
              className="rounded-lg border border-primary-600/30 bg-primary-600/10 px-4 py-3 text-center text-sm font-medium text-primary-300 hover:bg-primary-600/20 transition-colors"
            >
              {action.label}
            </a>
          ))}
        </div>
      </div>

      {/* Recent Submissions */}
      <div className="mt-12">
        <h2 className="mb-6 text-xl font-bold text-white">Recent Onboarding Submissions</h2>
        <div className="rounded-lg border border-neutral-800 bg-neutral-900 overflow-hidden">
          <table className="w-full">
            <thead className="border-b border-neutral-800 bg-neutral-950">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-neutral-300">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-neutral-300">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-neutral-300">
                  Role
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-neutral-300">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-800">
              <tr>
                <td className="px-6 py-3 text-sm text-neutral-300">No submissions yet</td>
                <td className="px-6 py-3 text-sm text-neutral-300">-</td>
                <td className="px-6 py-3 text-sm text-neutral-300">-</td>
                <td className="px-6 py-3 text-sm text-neutral-300">-</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Admin Notes */}
      <div className="mt-12 rounded-lg border border-yellow-600/30 bg-yellow-600/10 p-6">
        <h3 className="mb-2 font-semibold text-yellow-300">⚠️ Work in Progress</h3>
        <p className="text-sm text-yellow-200">
          The admin dashboard is under development. Full CMS functionality including member
          management, event creation, and content editing will be available soon.
        </p>
      </div>
    </div>
  );
}
