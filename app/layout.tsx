import type { Metadata } from "next"
import "./globals.css"

const BASE_URL = "https://alfamed-page.vercel.app"

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: "Alfamed | Sistema de Gestão de Saúde — Agendamento e Atendimentos",
    template: "%s | Alfamed",
  },
  description:
    "Alfamed é o sistema de gestão de saúde completo para unidades de saúde. Plataforma web e mobile integrada: profissionais, agendas, atendimentos, prontuário digital e app para pacientes.",
  keywords: [
    "alfamed",
    "alfamed sistema de saude",
    "sistema de saude",
    "sistema de gestão de saúde",
    "gestão clínica",
    "sistema médico",
    "agendamento médico",
    "prontuário digital",
    "gestão de unidade de saúde",
    "sistema para clínicas",
    "software médico",
    "agendamento de consultas",
    "controle de atendimentos",
    "saúde digital",
    "gestão hospitalar",
    "plataforma de saúde digital",
    "software gestão de saúde",
    "gestão de clínica médica",
    "sistema para unidades de saúde",
  ],
  authors: [{ name: "Alfamed" }],
  creator: "Alfamed",
  publisher: "Alfamed",
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
    title: "Alfamed | Sistema de Gestão de Saúde — Agendamento e Atendimentos",
    description:
      "Alfamed é o sistema de gestão de saúde completo para unidades de saúde. Plataforma web e mobile: profissionais, agendas, atendimentos e prontuários em um só sistema.",
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
    title: "Alfamed | Sistema de Gestão de Saúde",
    description:
      "Alfamed é o sistema de gestão de saúde completo para unidades de saúde. Profissionais, agendas, atendimentos e prontuários em um só sistema.",
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
      description: "Plataforma integrada de gestão clínica para unidades de saúde",
      inLanguage: "pt-BR",
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${BASE_URL}/#app`,
      name: "Alfamed",
      applicationCategory: "HealthApplication",
      applicationSubCategory: "Medical Practice Management",
      operatingSystem: "Web, Android, iOS",
      description:
        "Sistema completo de gestão clínica com módulos de profissionais, agendas, atendimentos, especialidades e procedimentos.",
      inLanguage: "pt-BR",
      url: BASE_URL,
      offers: {
        "@type": "Offer",
        availability: "https://schema.org/InStock",
      },
      featureList: [
        "Gestão de profissionais de saúde",
        "Agendamento de consultas",
        "Prontuário digital",
        "Gestão de especialidades",
        "Controle de procedimentos",
        "App mobile para pacientes",
        "Multi-unidades",
        "Controle de acesso por perfil",
      ],
    },
    {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      name: "Alfamed",
      alternateName: "Alfamed Sistema de Saúde",
      description: "Alfamed é um sistema de gestão de saúde digital para unidades de saúde, clínicas e consultórios médicos.",
      url: BASE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/og-image.png`,
      },
      sameAs: [],
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
            text: "O Alfamed é um sistema de gestão de saúde — uma plataforma web e mobile completa para unidades de saúde. Permite gerenciar profissionais, agendas, atendimentos, especialidades, procedimentos e prontuários digitais em um único lugar.",
          },
        },
        {
          "@type": "Question",
          name: "O Alfamed é um sistema de saúde para quais tipos de unidades?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "O Alfamed atende clínicas médicas, consultórios e unidades de saúde de todos os portes. O sistema suporta multi-unidades, permitindo que uma mesma organização gerencie várias unidades com controle de acesso individualizado por perfil.",
          },
        },
        {
          "@type": "Question",
          name: "Quais funcionalidades o Alfamed sistema de saúde oferece?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "O Alfamed oferece: gestão de profissionais de saúde, agendamento de consultas, prontuário digital, gestão de especialidades médicas, controle de procedimentos, app mobile para pacientes (Android e iOS), controle de acesso por perfil (médico, administrativo, assistente, paciente) e ServiceDesk para equipe interna.",
          },
        },
        {
          "@type": "Question",
          name: "O Alfamed tem aplicativo mobile para pacientes?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sim. O Alfamed disponibiliza app mobile para Android e iOS voltado para pacientes. Pelo app, o paciente pode se cadastrar, visualizar consultas agendadas, acompanhar o status dos atendimentos e acessar prontuário e resultados de exames.",
          },
        },
        {
          "@type": "Question",
          name: "Como funciona o agendamento no sistema Alfamed?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "O Alfamed possui um módulo de agendas com grade de horários em tempo real. O administrativo cria as agendas dos médicos e agenda pacientes nas vagas. O status do atendimento é acompanhado em tempo real: Agendado, Em andamento ou Finalizado — tanto no sistema web quanto no app.",
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
