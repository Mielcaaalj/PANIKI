import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/PANIKI/', // this matches your GitHub repo name
  server: {
    port: 3000,
    open: true,
  }
})