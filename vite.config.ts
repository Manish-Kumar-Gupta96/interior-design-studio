import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  base: './',
  plugins: [react()],

  server: {
    host: '0.0.0.0',
    port: 5173,
    strictPort: true,
    open: true
  },

  preview: {
    host: '0.0.0.0',
    port: 4173,
    strictPort: true
  },

  build: {
    target: 'es2022',
    sourcemap: false,
    cssMinify: 'esbuild',
    chunkSizeWarningLimit: 1000
  },

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
});
