# Alfamed Landing Page

Landing page institucional do Alfamed — software de gestão clínica para consultórios e pequenas clínicas, desenvolvido pela **Moonlab Ink**.

## Stack

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Lucide React** (ícones)

## Desenvolvimento

```bash
npm install
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Deploy (Vercel)

1. Crie um repositório no GitHub e faça push
2. Importe o repositório no [Vercel](https://vercel.com) — zero configuração necessária
3. Atualize `BASE_URL` em `app/layout.tsx`, `app/sitemap.ts` e `app/robots.ts` com o domínio final

## Configurações pendentes após o deploy

| Arquivo | O que atualizar |
|---|---|
| `app/layout.tsx` | `BASE_URL`, código Google Search Console (`google`), código Bing Webmaster Tools (`msvalidate.01`) |
| `app/sitemap.ts` | `BASE_URL` |
| `app/robots.ts` | `BASE_URL` |
| `public/og-image.png` | Adicionar imagem OG (1200×630px) |

Consulte [docs.md](./docs.md) para documentação completa.
