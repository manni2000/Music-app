import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  root: 'frontend', // If your index.html is inside 'frontend' folder
  plugins: [react()],
})


