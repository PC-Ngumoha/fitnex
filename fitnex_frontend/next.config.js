/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'v2.exercisedb.io',
            port: '',
            pathname: '**',
          },
          {
            protocol: 'https',
            hostname: 'i.ytimg.com',
            port: '',
            pathname: '**',
          },
        ],
      },
}

module.exports = nextConfig
