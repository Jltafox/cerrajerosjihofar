import type { APIRoute } from 'astro';
import negocio from '../data/negocio.json';

// robots.txt dinámico: en pre-lanzamiento bloquea todo el rastreo.
// Al poner "prelaunch": false en negocio.json, se abre y expone el sitemap.
export const GET: APIRoute = () => {
  const body = negocio.prelaunch
    ? 'User-agent: *\nDisallow: /\n'
    : `User-agent: *\nAllow: /\n\nSitemap: ${negocio.dominio}/sitemap-index.xml\n`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain' } });
};
