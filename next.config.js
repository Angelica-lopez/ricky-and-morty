/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "rickandmortyapi.com",
      },
      {
        protocol: "https",
        hostname: "angelica-ricky-and-morty.vercel.app/",
      },
    ],
  },
};

module.exports = nextConfig;
