# Alfamed Landing — Documentação

## O que foi criado

**Projeto:** `alfamed-landing/` (Next.js 15 + TypeScript + Tailwind CSS)

**Estrutura:**
```
alfamed-landing/
├── app/
│   ├── layout.tsx    ← todos os meta tags SEO/OG/GEO
│   ├── page.tsx      ← landing page completa
│   ├── globals.css
│   ├── sitemap.ts    → /sitemap.xml (automático)
│   └── robots.ts     → /robots.txt (automático)
├── components/
│   └── navbar.tsx    ← menu responsivo com scroll effect
├── package.json
└── ...config files
```

**Seções da página:**

| Seção | Conteúdo |
|---|---|
| Hero | Headline + mockup de agenda animado + CTA login |
| Plataforma | Auth segura, multi-unidades, controle por perfil |
| Funcionalidades | 6 cards: Profissionais, Agendas, Atendimentos, Especialidades, Procedimentos, Unidades |
| ServiceDesk | Área interna @alfamed.com com mockup dark mode |
| App Mobile | Flutter (Android/iOS) com mockup de celular |
| Perfis | Médico, Administrativo, Assistente, Paciente |
| Como funciona | 3 passos |
| CTA | Banner com botão login |

**SEO configurado em `app/layout.tsx`:**
- `<title>`, `description`, `keywords`, `robots`, `canonical`
- OG tags (Facebook/WhatsApp) + Twitter Cards
- `geo.region`, `geo.placename`, `geo.position`, `ICBM` (GEO)
- `google` e `msvalidate.01` ← **substituir pelos códigos reais**
- JSON-LD: `SoftwareApplication` + `Organization` + `WebSite`

---

## Passos para publicar no Vercel

**1. Criar imagem OG** (1200×630px) e salvar em `public/og-image.png`

**2. Criar repo no GitHub** e fazer push:
```bash
git remote add origin https://github.com/SEU_USER/alfamed-landing.git
git push -u origin master
```

**3. Conectar no Vercel** → New Project → importar o repo → deploy automático

**4. Após publicar, pegar os códigos de verificação:**
- [Google Search Console](https://search.google.com/search-console) → adicionar propriedade → copiar o código `google`
- [Bing Webmaster Tools](https://www.bing.com/webmasters) → copiar o código `msvalidate.01`
- Editar `app/layout.tsx` nas linhas `verification` e fazer redeploy

**5. Atualizar a URL base** (`BASE_URL`) em `app/layout.tsx`, `app/sitemap.ts` e `app/robots.ts` para o domínio final do Vercel
