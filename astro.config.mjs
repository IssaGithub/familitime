// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Configure for GitHub Pages deployment
  site: 'https://izayt.github.io',
  base: '/familitime',
  output: 'static',
  
  vite: {
    plugins: [tailwindcss()]
  }
});