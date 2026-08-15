# Web cerrajería Granollers — maqueta de ejemplo

Proyecto **Astro** con los bloques pedidos montados como ejemplo. Marca, dominio,
teléfono, dirección, **precios y reseñas son provisionales** — se sustituyen por los
reales sin tocar el código, editando un único archivo.

## Arrancar

```bash
cd web
npm install
npm run dev
```

Abre http://localhost:4321 · Página clave: http://localhost:4321/precios/

## Fuente única de datos → `src/data/negocio.json`

Todo lo variable vive ahí. Para pasar de ejemplo a real:

| Campo | Ahora | Qué hacer |
|---|---|---|
| `provisional` | `true` | Poner `false` cuando marca/tel/dirección sean reales (oculta los banners de aviso) |
| `marca`, `dominio`, `telefono_e164`, `telefono_display` | placeholders | Sustituir por los reales |
| `nap.*` | Granollers de ejemplo | Dirección real cuando la decida el cliente (D6) + `lat`/`lng` |
| `precios_provisionales` + `precios[]` | `true` + ejemplo | Meter las tarifas reales de Pepe y poner `false` |
| `resenas_provisionales` + `resenas[]` | `true` + ejemplo | Meter reseñas reales y poner `false` → el schema emitirá `AggregateRating` solo entonces |

**Importante:** mientras cada flag `*_provisional` sea `true`, la web muestra avisos
visibles de "ejemplo" y **no** emite datos falsos en el schema (ni `AggregateRating`
con reseñas inventadas). No publicar en producción con los flags en `true`.

## Bloques incluidos

- `src/components/Precios.astro` — tabla de precios (eje D4 "precio cerrado sin sorpresas").
- `src/components/MapaNAP.astro` — mapa OpenStreetMap (sin API key) + NAP.
- `src/components/Resenas.astro` — bloque de reseñas (H5), listo para reseñas reales.
- `src/components/SchemaNegocio.astro` — JSON-LD completo (H1): `Locksmith` +
  `OpeningHoursSpecification` 24/7 (H4) + `Service` + `FAQPage` + `BreadcrumbList`.

## Páginas

- `/` — home mínima navegable.
- `/precios/` — página clave: hero + precios + FAQ (con FAQPage schema) + reseñas + mapa/NAP.

## Decisiones aplicadas del proyecto

- Copy sin "barato/económico/low cost" (D3). Eje "precio cerrado sin sorpresas" (D4).
- Hipótesis del aggregator: **H1** (schema completo), **H2** (servicios → futuras `/servicios/`),
  **H4** (24/7 + click-to-call), **H5** (bloque reseñas). **H8 (autoridad de reseñas)**
  se trabaja aparte: la web no la resuelve sola.
