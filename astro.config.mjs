import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";
import react from "@astrojs/react";
import vercel from '@astrojs/vercel';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Para obtener la ruta absoluta a `src`
const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  integrations: [tailwind(), svelte(), react()],
  output: 'server',
  adapter: vercel({
    isr: true
  }),
  image: {
    service: {
      entrypoint: 'astro/assets/services/noop'
    }
  },
  vite: {
    resolve: {
      alias: {
        '@': new URL('./src', import.meta.url).pathname
      }
    }
  }
});
