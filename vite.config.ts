import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'
import vueDevTools from 'vite-plugin-vue-devtools'
import Sitemap from 'vite-plugin-sitemap'

import biases from './public/json/biases_cognitif_v3_fr.json'
const defineBasePath = () => {
  // Netlify définit cette variable lors du build, le chemin need to starts '/'
  if (process.env.NETLIFY) return '/'
  // sinon '/biais-cognitifs/ pour heberger sur githubPages
  return 'biais-cognitifs/'
}
const slugs = biases.biases.map((bias) => defineBasePath() + bias.slug)

const defineHostUrl = () => {
  if (process.env.NETLIFY) return 'https://yassine-mahjoubi-biais-cognitifs.netlify.app/'
  return 'https://yassine-mahjoubi.github.io/biais-cognitifs/'
}

const allRoutes = [
  defineBasePath(),
  defineBasePath() + 'liste',
  defineBasePath() + 'about',
  ...slugs,
]

// https://vite.dev/config/
export default defineConfig({
  base: defineBasePath() || '/',
  plugins: [
    vue(),
    Sitemap({
      hostname: defineHostUrl() || 'http://localhost',
      dynamicRoutes: allRoutes,
    }),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', '**/*.json'],
      manifest: {
        name: 'Biais Cognitifs | My Biais',
        short_name: 'My Biais',
        theme_color: '#2e372a',
        background_color: '#fff',
        start_url: '/',
        display_override: ['window-controls-overlay', 'minimal-ui'],
        display: 'standalone',
        icons: [
          {
            src: 'icons/android-launchericon-48-48.png',
            sizes: '48x48',
            type: 'image/png',
          },
          {
            src: 'icons/android-launchericon-72-72.png',
            sizes: '72x72',
            type: 'image/png',
          },
          {
            src: 'icons/android-launchericon-96-96.png',
            sizes: '96x96',
            type: 'image/png',
          },
          {
            src: 'icons/android-launchericon-144-144.png',
            sizes: '144x144',
            type: 'image/png',
          },
          {
            src: 'icons/android-launchericon-192-192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'icons/android-launchericon-512-512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
      workbox: {
        // all cached  data, even JSON at /public
        globPatterns: ['**/*.{js,css,html,ico,png,svg,json}'],
      },
    }),
    vueDevTools(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
