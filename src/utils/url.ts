// Join a public-asset path with the configured base path so links work both
// locally and when served from https://nassimos07.github.io/nassim-hammami/.
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const clean = path.replace(/^\//, '');
  return `${base}/${clean}`;
}
