import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  root: 'frontend', // optional, only if your index.html is inside 'frontend' folder
  plugins: [react()],
  build: {
    outDir: 'dist', // or any other directory where you want your built files
  },
})

