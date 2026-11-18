# Tony's Painting and Remodeling — Website

## Cliente
- Empresa: Tony's Painting and Remodeling (Martha's Vineyard, Cape Cod e South Shore, desde 2004)
- Telefone: 508 982 9675
- Registro: MA HIC #210672 (válido até 28/12/2027), seguro geral $1M/$2M
- Situação: site entregue e mantido pela PRC Group.

## Onde o projeto vive
- Site no ar: https://tonyspaintingmv.com
- API de formulários: https://api.tonyspaintingmv.com
- Blog (WordPress): https://tonyspaintingmv.com/blog
- GitHub: https://github.com/tonyspainting/Tonys-Painting
- Hospedagem: Coolify + Docker (nginx serve o `dist` pré-renderizado). Sem Lovable e sem Supabase.

## Stack
- Vite + React 18 + TypeScript + Tailwind + shadcn/ui + React Router + framer-motion
- SEO por página: `src/components/SEO.tsx` (react-helmet-async), canonical para tonyspaintingmv.com
- Landing pages de anúncio: `/lp/interior-painting`, `/lp/exterior-painting`, `/lp/remodeling` (pré-renderizadas, noindex e fora do sitemap)
- Meta Pixel 1004158805431458 no `index.html`, carregado depois do `load`

## Formulários
- O site envia para a API própria (`form-api/`), que manda o e-mail pelo Resend.
- `src/lib/submitLead.ts` concentra o envio; o endpoint padrão é `https://api.tonyspaintingmv.com/lead` e `VITE_FORM_ENDPOINT` pode sobrescrever no build.
- `form-api/server.mjs`: Node sem dependências, validação, honeypot, CORS por origem e limite de 5 envios por IP a cada 10 minutos.
- Destinatário `tonyspainting11@gmail.com`, remetente `leads@tonyspaintingmv.com` (domínio verificado no Resend).
- Não existe CRM nem banco de dados: o lead vive no e-mail.

## Pré-renderização (SEO)
- `npm run build` gera HTML completo para cada página pública e o `dist/sitemap.xml` (37 páginas).
- Arquivos: `src/entry-server.tsx` (lista de rotas), `scripts/prerender.mjs` e `nginx.conf`.
- Serviço novo: adicionar em `SERVICES` (`src/data/serviceContent.ts`). Portfólio novo: `COLLECTIONS` (`src/data/portfolio.ts`). Entram sozinhos no sitemap.
- Página nova: adicionar a rota em `src/App.tsx` e em `sitemapRoutes` (`src/entry-server.tsx`).
- Código que roda na renderização não pode usar `window`/`document` direto (use dentro de `useEffect` ou com `typeof window !== "undefined"`).
- O navegador "hidrata" a página pré-renderizada (`hydrateRoot` em `src/main.tsx`): o HTML do servidor e o do navegador precisam ser iguais. Nada de estado inicial que dependa de `window` (comece com um valor fixo e ajuste no `useEffect`), e `<style>` embutido sempre com `dangerouslySetInnerHTML`.
- `src/lib/replayEarlyInput.ts`: se o visitante digitar antes do JS carregar, o texto é repassado ao formulário.
- `npm run build:spa` gera a versão antiga, sem pré-renderização (plano B).

## Regras de trabalho
1. Antes de editar: `git pull`.
2. Toda alteração passa por `npm run build` sem erro antes do push.
3. Nunca commitar chaves privadas. Segredos ficam nas variáveis do Coolify.
4. O site é sempre em inglês; conversa e documentação em português.

## Histórico
- 2026-11-18 — Formulários passam a usar API própria (form-api + Resend); CRM, Supabase e dashboard removidos; blog linkado no menu.
- 2026-11-18 — HIC #210672 e seguro no rodapé, no About, no contato e no schema.
- 2026-11-18 — Crédito do rodapé passa a ser PRC Group; imagens do hero em WebP.
- 2026-10-01 — Pré-renderização e sitemap automáticos; hidratação no lugar de recriar a página.
