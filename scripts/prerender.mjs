// Roda depois do "vite build": cria um index.html completo para cada página em dist/
// e gera o sitemap.xml. Se algo falhar aqui, o site continua funcionando como antes (só sem pré-renderização).
import fs from "node:fs";
import path from "node:path";
import { execSync } from "node:child_process";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const serverDir = path.join(root, "dist-server");

const entry = fs.readdirSync(serverDir).find((f) => /^entry-server\.(m?js)$/.test(f));
const { render, routes, sitemapRoutes, siteUrl, privateRoutes = [] } = await import(pathToFileURL(path.join(serverDir, entry)).href);

// Tags que cada página define sozinha (via SEOHead). Tiramos a versão genérica do template para não duplicar.
const perPage = [
  /<title>[\s\S]*?<\/title>/i,
  /<meta\s+name="description"[^>]*>/i,
  /<link\s+rel="canonical"[^>]*>/i,
  /<meta\s+name="robots"[^>]*>/gi,
  /<meta\s+name="googlebot"[^>]*>/gi,
  /<meta\s+property="og:(title|description|url|type)"[^>]*>/gi,
  /<meta\s+name="twitter:(card|title|description|image)"[^>]*>/gi,
  /<meta\s+property="og:image"[^>]*>/gi,
];

const template = fs.readFileSync(path.join(dist, "index.html"), "utf8");

for (const url of routes) {
  const { html, head } = render(url);
  let page = template;
  if (head) {
    for (const re of perPage) page = page.replace(re, "");
    page = page.replace("</head>", `    ${head}\n  </head>`);
  }
  page = page.replace('<div id="root"></div>', `<div id="root">${html}</div>`);
  const out = url === "/" ? path.join(dist, "index.html") : path.join(dist, url, "index.html");
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, page.replace(/\n\s*\n/g, "\n"));
  console.log("pré-renderizado:", url);
}

// Rotas privadas e de conversão: HTML sem conteúdo, com título próprio e noindex.
// Sem isso o host cai no index.html da home e devolve a home no lugar da página.
for (const route of privateRoutes) {
  const url = typeof route === "string" ? route : route.url;
  const title = typeof route === "string" ? "Tony's Dashboard" : route.title;
  const robots = typeof route === "string" ? "noindex, nofollow" : route.robots;
  let page = template;
  for (const re of perPage) page = page.replace(re, "");
  page = page.replace("</head>", `    <title>${title}</title>\n    <meta name="robots" content="${robots}" />\n  </head>`);
  page = page.replace(/<meta\s+name="robots" content="index[^>]*>/i, "");
  const out = path.join(dist, url, "index.html");
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, page.replace(/\n\s*\n/g, "\n"));
  console.log("página vazia (noindex):", url);
}

// <lastmod> dá ao Google um motivo concreto para recrawlear. Usa a data do
// último commit (estável entre builds) e cai para a data do build quando o
// .git não está disponível no container.
function sitemapLastmod() {
  try {
    const out = execSync("git log -1 --format=%cs", {
      cwd: root,
      stdio: ["ignore", "pipe", "ignore"],
    })
      .toString()
      .trim();
    if (/^\d{4}-\d{2}-\d{2}$/.test(out)) return out;
  } catch {
    // sem git no ambiente de build
  }
  return new Date().toISOString().slice(0, 10);
}

const priorityFor = (url) => {
  if (url === "/") return "1.0";
  if (url.startsWith("/services") || url.startsWith("/painting-contractor")) return "0.8";
  if (url.startsWith("/portfolio")) return "0.6";
  if (url === "/privacy" || url === "/accessibility") return "0.3";
  return "0.7";
};

const lastmod = sitemapLastmod();

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapRoutes
  .map((u) => {
    const loc = `${siteUrl}${u === "/" ? "/" : u}`;
    return `  <url><loc>${loc}</loc><lastmod>${lastmod}</lastmod><priority>${priorityFor(u)}</priority></url>`;
  })
  .join("\n")}
</urlset>
`;
fs.writeFileSync(path.join(dist, "sitemap.xml"), sitemap);
fs.rmSync(serverDir, { recursive: true, force: true });
console.log(`sitemap.xml com ${sitemapRoutes.length} páginas`);
