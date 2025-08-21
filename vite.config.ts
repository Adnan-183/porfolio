import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    open: true, // 👈 This will open the browser
  },  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
