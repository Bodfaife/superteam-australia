/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['avatars.githubusercontent.com', 'pbs.twimg.com', 'images.lumacdn.com'],
    unoptimized: false,
  },
  headers: async () => {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'strict-transport-security',
            value: 'max-age=31536000; includeSubDomains',
          },
          {
            key: 'x-content-type-options',
            value: 'nosniff',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
