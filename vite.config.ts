import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
      },
      includeAssets: ['favicon.ico', 'mask-icon.svg', 'apple-touch-icon.png'],
      manifest: {
        name: 'HOKC Web App',
        short_name: 'HOKC Web App',
        description:
          'The Offical Application for HOKC Members. Login and take your attendance, view your profile, and more!',
        display: 'standalone',
        screenshots: [
          {
            src: 'screenshot-390x844.png',
            sizes: '390x844',
            type: 'image/png',
            label: 'Login Screen',
          },
          {
            src: 'screenshot1-390x844.png',
            sizes: '390x844',
            type: 'image/png',
            label: 'QR Code Screen',
          },
          {
            src: 'screenshot2-390x844.png',
            sizes: '390x844',
            type: 'image/png',
            label: 'Attendance Successful Screen',
          },
        ],
        categories: ['education', 'productivity', 'events'],
        theme_color: '#ffffff',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
      },
    }),
  ],
});
