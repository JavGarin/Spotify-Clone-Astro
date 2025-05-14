import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";
import react from "@astrojs/react";
import vercel from '@astrojs/vercel'; // Importación actualizada

export default defineConfig({
  integrations: [tailwind(), svelte(), react()],
  output: 'server',
  adapter: vercel({
    // Configuración para Serverless (ahora se especifica aquí)
    isr: true // Opcional: habilita ISR si lo necesitas
  }),
  image: {
    service: {
      // Configuración actualizada para Squoosh
      entrypoint: 'astro/assets/services/noop' // Solución temporal
      // O usa:
      // entrypoint: 'astro/assets/services/squoosh-client'
    }
  }
});