import tailwindcss from '@tailwindcss/vite';
import svgLoader from 'vite-svg-loader';
import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';
import path from 'node:path';


export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [vue(), tailwindcss(), svgLoader()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});