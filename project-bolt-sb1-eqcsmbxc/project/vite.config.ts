import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    outDir: 'dist', // Assure que la sortie se fait dans le dossier dist
    rollupOptions: {
      input: 'index.html', // Utilise index.html à la racine comme point d'entrée
    },
  },
});