// Rasterizes scripts/og-image.svg -> public/og-image.png using sharp
// (sharp ships with Astro, so no extra dependency is needed).
import sharp from 'sharp';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const here = fileURLToPath(new URL('.', import.meta.url));
const svg = readFileSync(here + 'og-image.svg');

await sharp(svg, { density: 144 })
  .resize(1200, 630)
  .png()
  .toFile(here + '../public/og-image.png');

console.log('✓ public/og-image.png generated');
