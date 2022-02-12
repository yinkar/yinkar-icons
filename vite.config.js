import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/yinkar-icons/',
  plugins: [
    vue(),
    VitePWA({
      workbox: {
        cleanupOutdatedCaches: false,
        sourcemap: true,
      },
      includeAssets: [
        'favicon.svg',
        'robots.txt',
        'icon-192.png',
        'icon-512.png',
      ],
      manifest: {
          "name": "Yinkar Icons",
          "short_name": "YinkarIcons",
          "description": "A tiny icon set",
          "theme_color": "#374151",
          "background_color": "#222",
          "icons": [
              {
                  "src": "icon-192.png",
                  "sizes": "192x192",
                  "type": "image/png",
                  "purpose": "any maskable",
              },
              {
                  "src": "icon-512.png",
                  "sizes": "512x512",
                  "type": "image/png",
                  "purpose": "any maskable",
              }
          ],
      },
    }),
  ],
});