import html from '../../project-moving-stopped-persons.html?raw';

export function GET() {
  return new Response(html, {
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
    },
  });
}
