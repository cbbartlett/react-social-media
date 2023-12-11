import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';


export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'html-loader': 'html-loader',
    },
  },
  build: {
    rollupOptions: {
      plugins: [
        {
          name: 'html-loader',
          transformIndexHtml(html) {
            return require('html-loader').default(html);
          },
        },
      ],
    },
  },
});
