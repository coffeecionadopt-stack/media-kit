import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Served from https://mediakit.coffeecionado.pt/ (GitHub Pages custom domain)
export default defineConfig({
  base: '/',
  plugins: [react()],
})
