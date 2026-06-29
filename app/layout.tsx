import type { Metadata } from "next"
import "./globals.css"

const BASE_URL = "https://alfamed-page.vercel.app"

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: "Alfamed | Software de Gestão Clínica para Consultórios e Clínicas",
    template: "%s | Alfamed",
  },
  description:
    "Alfamed é o software de gestão clínica para consultórios e pequenas clínicas, desenvolvido pela Moonlab Ink. Plataforma web e mobile: agendamento, prontuário digital, gestão de exames e app para pacientes.",
  keywords: [
    "alfamed",
    "alfamed sistema de saude",
    "alfamed moonlab",
    "software gestão clínica",
    "sistema para consultório médico",
    "gestão de consultório",
    "sistema para clínica médica",
    "software médico",
    "agendamento médico online",
    "prontuário eletrônico",
    "prontuário digital",
    "gestão de exames médicos",
    "laudo médico digital",
    "auto agendamento médico",
    "sistema de gestão de saúde",
    "gestão clínica",
    "controle de atendimentos",
    "saúde digital",
    "plataforma de saúde digital",
    "software médico brasil",
    "moonlab ink",
    "app agendamento médico",
    "agenda médica online",
    "sistema para clínicas pequenas",
  ],
  authors: [{ name: "Moonlab Ink" }],
  creator: "Moonlab Ink",
  publisher: "Moonlab Ink",
  category: "health",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: BASE_URL,
    siteName: "Alfamed",
    title: "Alfamed | Software de Gestão Clínica para Consultórios e Clínicas",
    description:
      "Alfamed é o software de gestão clínica para consultórios e pequenas clínicas. Web e mobile: agendamento, prontuário, gestão de exames e app para pacientes.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Alfamed — Gestão Clínica Completa",
        type: "image/png",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Alfamed | Software de Gestão Clínica",
    description:
      "Alfamed é o software de gestão clínica para consultórios e clínicas. Agendamento, prontuário, gestão de exames e app para pacientes — da Moonlab Ink.",
    images: ["/og-image.png"],
  },

  verification: {
    // Substitua pelos códigos reais após verificar no Google Search Console e Bing Webmaster Tools
    google: "GqXBVQRz-Nq6TSaF08o6VzI93EMGwTuMVxOORB62q4o",
    other: {
      "msvalidate.01": ["COLE_AQUI_SEU_CODIGO_BING"],
    },
  },

  alternates: {
    canonical: BASE_URL,
    languages: {
      "pt-BR": BASE_URL,
    },
  },

  other: {
    // GEO meta tags para geolocalização (Brasil)
    "geo.region": "BR",
    "geo.placename": "Brasil",
    "geo.position": "-14.235;-51.925",
    ICBM: "-14.235, -51.925",
    // Idioma e região explícitos
    language: "Portuguese",
    "content-language": "pt-BR",
    // Revisit after 7 days (para crawlers antigos)
    revisit: "7 days",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      url: BASE_URL,
      name: "Alfamed",
      description: "Software de gestão clínica para consultórios e pequenas clínicas",
      inLanguage: "pt-BR",
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${BASE_URL}/#app`,
      name: "Alfamed",
      applicationCategory: "HealthApplication",
      applicationSubCategory: "Medical Practice Management",
      operatingSystem: "Web, Android",
      description:
        "Software de gestão clínica para consultórios e pequenas clínicas. Módulo Base: profissionais, especialidades, procedimentos, agendas, agendamentos e atendimentos médicos com prontuário digital. Módulo 1 (Gestão de Exames): solicitação de exames internos, fluxo de coleta até laudo. App mobile Android com auto agendamento, anamnese e prontuário do paciente.",
      inLanguage: "pt-BR",
      url: BASE_URL,
      offers: {
        "@type": "Offer",
        availability: "https://schema.org/InStock",
      },
      featureList: [
        "Gestão de profissionais de saúde",
        "Agendamento de consultas",
        "Auto agendamento pelo app",
        "Anamnese digital",
        "Prontuário eletrônico",
        "Gestão de especialidades médicas",
        "Controle de procedimentos",
        "Solicitação de exames internos",
        "Fluxo de coleta e laudo de exames",
        "App mobile para pacientes (Android)",
        "Multi-unidades",
        "Controle de acesso por perfil",
      ],
    },
    {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      name: "Moonlab Ink",
      alternateName: "Moonlab",
      description: "Moonlab Ink é a empresa desenvolvedora do Alfamed, software de gestão clínica para consultórios e pequenas clínicas.",
      url: BASE_URL,
      email: "moonlanink@gmail.com",
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/logo.png`,
      },
      sameAs: [],
      makesOffer: {
        "@type": "Offer",
        itemOffered: {
          "@type": "SoftwareApplication",
          name: "Alfamed",
          url: BASE_URL,
        },
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${BASE_URL}/#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "O que é o Alfamed?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "O Alfamed é um software de gestão clínica para consultórios e pequenas clínicas, desenvolvido pela Moonlab Ink. Oferece plataforma web e app mobile integrados: gestão de profissionais, especialidades, procedimentos, agendas, atendimentos com prontuário digital e módulo de gestão de exames.",
          },
        },
        {
          "@type": "Question",
          name: "Para quais tipos de clínicas o Alfamed é indicado?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "O Alfamed é voltado para consultórios médicos e pequenas clínicas. O sistema suporta multi-unidades e controle de acesso por perfil (Administrador, Assistente Administrativo, Médico e Paciente via app).",
          },
        },
        {
          "@type": "Question",
          name: "Quais funcionalidades o Alfamed oferece?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "O Alfamed possui dois módulos: Módulo Base (cadastro e gestão de profissionais, especialidades, procedimentos, agendas, agendamentos e atendimento médico com prontuário e solicitação de exames externos) e Módulo 1 — Gestão de Exames (solicitação de exames internos, fluxo de coleta até disponibilização do laudo, com cargo de Técnico Executante).",
          },
        },
        {
          "@type": "Question",
          name: "O Alfamed tem aplicativo mobile para pacientes?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sim. O app Alfamed está disponível para Android na Play Store. O iOS está em desenvolvimento. Pelo app, o paciente pode fazer auto agendamento, preencher anamnese, visualizar consultas futuras, acessar prontuário e acompanhar exames — incluindo exames externos adicionados ao cadastro.",
          },
        },
        {
          "@type": "Question",
          name: "Como funciona o agendamento no Alfamed?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "O Alfamed possui dois fluxos de agendamento: pelo sistema web, o Assistente Administrativo agenda pacientes nas vagas da grade de horários do médico; pelo app mobile, o próprio paciente realiza o auto agendamento escolhendo especialidade, médico e horário disponível. O status é atualizado em tempo real: Agendado, Em andamento ou Finalizado.",
          },
        },
        {
          "@type": "Question",
          name: "Quem desenvolveu o Alfamed?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "O Alfamed é um software desenvolvido pela Moonlab Ink. Para contratar ou saber mais, entre em contato pelo e-mail moonlanink@gmail.com.",
          },
        },
        {
          "@type": "Question",
          name: "O Alfamed tem módulo de gestão de exames?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sim. O Módulo 1 do Alfamed é dedicado à Gestão de Exames. Permite que médicos solicitem exames internos durante o atendimento, com controle do fluxo completo: solicitação, coleta, análise e disponibilização do laudo. O módulo inclui o cargo de Técnico Executante, responsável pelo processo de coleta e registro dos resultados.",
          },
        },
      ],
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="canonical" href={BASE_URL} />
        <meta name="theme-color" content="#2563eb" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body className="antialiased bg-white text-gray-900">{children}</body>
    </html>
  )
}
