import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Served from https://coffeecionadopt-stack.github.io/media-kit/
export default defineConfig({
  base: '/media-kit/',
  plugins: [react()],
})
