import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// GitHub Pages serves from https://<user>.github.io/<repo>/ (e.g. /fieldsense/).
// When building on GitHub Actions for Pages or when GITHUB_PAGES is set, use '/fieldsense/'.
// Local development and standard Vercel deployments use root '/'.
export default defineConfig({
  base: process.env.GITHUB_PAGES === 'true' || (process.env.GITHUB_ACTIONS && !process.env.VERCEL)
    ? '/fieldsense/'
    : '/',
  plugins: [
    react(),
    tailwindcss(),
  ],
})
