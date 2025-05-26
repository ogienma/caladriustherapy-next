/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.ya?ml$/,
      use: 'yaml-loader'
    });
    return config;
  },
  images: { 
    domains: ['images.ctfassets.net']   // Contentful's CDN
  }
}

module.exports = nextConfig

