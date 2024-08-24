import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  root: 'frontend/public', // Adjust this path if `index.html` is inside `frontend/public`
  plugins: [react()],
})



