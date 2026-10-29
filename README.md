# Chef Luis Alba · Landing

Landing de la marca personal del chef Luis Alba: un recorrido por scroll en menos de 10 pantallas, con la llamarada como transición entre actos. Paleta **Fuego y origen**, tipografías Fraunces y Archivo.

Hecha con [Astro](https://astro.build) y CSS (animaciones por scroll con `animation-timeline`, con respaldo por script para Firefox). La salida es un sitio estático.

## Desarrollo

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # genera ./dist
npm run preview   # sirve ./dist
```

Requiere Node 22 (ver `.node-version`).

## Estructura

```
src/
  pages/index.astro        orden de los actos y marcas de llamarada
  layouts/BaseLayout.astro head, fuentes y respaldo de scroll
  components/
    Header.astro
    Flare.astro            llamarada entre actos (Canvas 2D)
    FlareGL.astro          versión WebGL anterior (respaldo, no se usa)
    HeroLightScript.astro  luz de fuego sobre la foto de portada (WebGL)
    acts/                  Portada, Ingredientes, Fuego, Plato, Chef, Contacto
  content/site.ts          textos de servicios, pasos, platos y preguntas
  styles/                  tokens.css (paleta), base.css, scroll.css
public/
  media/                   fotos e ilustraciones al carbón (webp)
  _headers                 caché de /media en Cloudflare
```

Los textos entre corchetes `[...]` están pendientes de confirmar con el chef.

## Deploy en Cloudflare

**Workers (recomendado por Cloudflare):** en *Workers & Pages → Create → Import a repository*, elige este repo. Cloudflare lee `wrangler.jsonc`.

- Build command: `npm run build`
- Deploy command: `npx wrangler deploy`

**Pages:** en *Workers & Pages → Create → Pages → Connect to Git*.

- Framework preset: Astro
- Build command: `npm run build`
- Build output directory: `dist`

En ambos casos cada push a `main` vuelve a publicar el sitio. El dominio (`chefluisalba.com`) se conecta después en *Custom domains*.
