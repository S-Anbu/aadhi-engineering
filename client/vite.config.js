import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    chunkSizeWarningLimit: 1600,
    outDir: 'dist',
  },
  server: {
    headers: {
      'Cross-Origin-Opener-Policy': '',
      'Cross-Origin-Embedder-Policy': '',
    }
  }

})
