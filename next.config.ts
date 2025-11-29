import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.jimcdn.com', // Разрешаем картинки с Jimdo
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com', // Разрешаем картинки с Unsplash
      },
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com', // Дополнительный домен Unsplash
      },
    ],
  },
};

export default nextConfig;