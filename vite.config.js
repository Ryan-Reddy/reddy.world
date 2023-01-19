// noinspection JSUnusedGlobalSymbols

import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  root: './src',
  publicDir: '../public',
  build: {
    lib: {
      entry: 'index.html',
      formats: ['es'],
    },
    rollupOptions: {
      external: /^lit/,
    },
    outDir: '../dist',
  },
});
