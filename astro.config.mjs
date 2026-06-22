// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Deployed as a GitHub Pages "project" site:
//   https://nassimos07.github.io/nassim-hammami
// If you later add a custom domain, set `site` to that domain and `base` to '/'.
const SITE = 'https://nassimos07.github.io';
const BASE = '/nassim-hammami';

// https://astro.build/config
export default defineConfig({
  site: SITE,
  base: BASE,
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  build: {
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
});
