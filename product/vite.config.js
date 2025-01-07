import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  base: 'http://localhost:3001',
  plugins: [
    react(),
    federation({
      name: 'product',
      filename: 'remoteEntry.js', // This will generate remoteEntry.js
      exposes: {
        './ProductApp': './src/ProductApp',
      },
      shared: ['react', 'react-dom'], // If you're sharing dependencies
    }),
  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false
  },
  server: {
    port: 3001,
    base: '/',
  },
  preview: {
    port: 3001,
    base: '/',
  }
});
