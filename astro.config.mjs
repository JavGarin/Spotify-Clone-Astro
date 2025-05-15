import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";
import react from "@astrojs/react";
import vercel from '@astrojs/vercel';

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
    plugins: [tsconfigPaths()],
    resolve: {
      alias: {
        '@': new URL('./src', import.meta.url).pathname
      }
    }
  }
});
