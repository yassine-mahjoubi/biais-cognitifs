import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

const defineBasePath = () => {
  // Netlify définit cette variable lors du build, le chemin need to starts '/'
  if (process.env.NETLIFY) return '/'
  // sinon '/biais-cognitifs/ pour heberger sur githubPages
  return 'biais-cognitifs'
}

// https://vite.dev/config/
export default defineConfig({
  base: defineBasePath(),
  plugins: [vue(), vueDevTools(), tailwindcss()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
