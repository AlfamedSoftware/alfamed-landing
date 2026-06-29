# Alfamed Landing — Documentação

## O que é o Alfamed

O **Alfamed** é um software de gestão clínica desenvolvido pela **Moonlab Ink**, voltado para consultórios e pequenas clínicas. Oferece plataforma web e app mobile integrados.

---

## Estrutura do projeto

**Stack:** Next.js 15 (App Router) · TypeScript · Tailwind CSS · Lucide React

```
alfamed-landing/
├── app/
│   ├── layout.tsx    ← todos os meta tags SEO/OG/GEO + JSON-LD
│   ├── page.tsx      ← landing page completa
│   ├── icon.png      ← favicon (copiado de assets/images/logo.png)
│   ├── globals.css
│   ├── sitemap.ts    → /sitemap.xml (automático)
│   └── robots.ts     → /robots.txt (automático)
├── components/
│   └── navbar.tsx    ← menu responsivo com scroll effect
├── assets/
│   └── images/
│       └── logo.png  ← logo original
├── public/
│   ├── logo.png      ← logo servida estaticamente (navbar + footer)
│   └── og-image.png  ← imagem OG (1200×630px) — adicionar manualmente
└── ...config files
```

---

## Seções da página

| Seção | Conteúdo |
|---|---|
| Hero | Headline + mockup de agenda + CTA login |
| Plataforma | Auth segura, multi-unidades, controle por perfil · menção à Moonlab Ink |
| Módulo Base | 6 cards: Profissionais, Agendas, Atendimentos, Especialidades, Procedimentos, Unidades |
| Módulo 1 — Gestão de Exames | Solicitação de exames internos, fluxo coleta→laudo, perfil Técnico Executante |
| App Mobile | Android (Play Store) · iOS (em desenvolvimento) · auto agendamento, anamnese, prontuário, exames |
| Perfis de acesso | Administrador, Assistente Administrativo, Médico (web) · Paciente (mobile) |
| Como funciona | 3 passos |
| CTA | Banner com botão login + botão "Falar com a Moonlab Ink" |
| Contato | E-mail moonlanink@gmail.com · Moonlab Ink |

---

## Módulos do sistema

### Módulo Base
**Cargos:** Administrador, Assistente Administrativo, Médico, Paciente (mobile)

| Funcionalidade | Descrição |
|---|---|
| Profissionais | Cadastro, importação por CPF/nome, vínculo a especialidades |
| Especialidades | Cadastro, ativar/inativar, vínculo com profissionais |
| Procedimentos | Consulta, Retorno, Exame — com código, preço e especialidade |
| Agendas | Grade de horários, filtro por médico/especialidade, controle de conflitos |
| Agendamentos | Agendar pacientes nas vagas disponíveis |
| Atendimento médico | Prontuário, notas clínicas, diagnóstico, solicitação de exames externos |
| Unidades | Dados da clínica (CNPJ, endereço, contato), suporte a multi-unidades |

### Módulo 1 — Gestão de Exames
**Cargo adicional:** Técnico Executante

| Funcionalidade | Descrição |
|---|---|
| Solicitação de exames internos | Médico solicita exame direto no sistema durante o atendimento |
| Fluxo de coleta | Ciclo: solicitação → coleta → análise → laudo |
| Disponibilização do laudo | Laudo acessível pelo médico solicitante e pelo paciente no app |

---

## App Mobile

**Plataformas:** Android (disponível na Play Store) · iOS (em desenvolvimento)

| Funcionalidade | Descrição |
|---|---|
| Auto agendamento | Paciente agenda consulta pelo app (especialidade, médico, horário) |
| Anamnese | Preenchimento da ficha antes da consulta |
| Agendamentos futuros | Lista de consultas com data, horário e status em tempo real |
| Prontuário | Histórico clínico, notas médicas, diagnósticos |
| Exames | Acompanhar exames solicitados + incluir exames externos ao cadastro |

---

## SEO configurado em `app/layout.tsx`

- `<title>`, `description`, `keywords`, `robots`, `canonical`
- OG tags (Facebook/WhatsApp) + Twitter Cards
- `geo.region`, `geo.placename`, `geo.position`, `ICBM` (GEO)
- `google` e `msvalidate.01` ← **substituir pelos códigos reais**
- JSON-LD: `SoftwareApplication` + `Organization` + `WebSite` + `FAQPage`

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
