/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    // Configurações para imagens
    images: {
      domains: [
        'via.placeholder.com', 
        'i.imgur.com', 
        'img.youtube.com',
        'localhost:3000'
      ],
      formats: ['image/webp', 'image/avif'],
    },
    // Headers para segurança
    async headers() {
      return [
        {
          source: '/(.*)',
          headers: [
            {
              key: 'X-Frame-Options',
              value: 'DENY',
            },
            {
              key: 'X-Content-Type-Options',
              value: 'nosniff',
            },
          ],
        },
      ];
    },
  }
  
  module.exports = nextConfig