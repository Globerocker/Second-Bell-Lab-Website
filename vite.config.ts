import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import Sitemap from 'vite-plugin-sitemap';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  const routes = [
    '/', '/parents', '/investors', '/chat', '/programs', '/admissions',
    '/apply', '/about', '/locations', '/events', '/careers', '/contact',
    '/reintegration', '/flyer', '/discipline', '/academic', '/social',
    '/financial', '/entrepreneurship', '/blog'
  ];

  return {
    server: {
      port: 3000,
      host: '0.0.0.0',
    },
    plugins: [
      react(),
      Sitemap({
        hostname: 'https://secondbelllab.com',
        dynamicRoutes: routes
      })
    ],
    define: {
      'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      }
    }
  };
});
