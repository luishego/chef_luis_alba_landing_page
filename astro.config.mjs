import { defineConfig } from 'astro/config';

// Salida estática. CSS en línea y scripts is:inline para que el sitio funcione
// también publicado en una subruta (propuesta) sin rutas absolutas.
export default defineConfig({
  output: 'static',
  build: { inlineStylesheets: 'always', format: 'file' },
  compressHTML: true,
});
