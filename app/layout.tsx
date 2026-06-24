import type { Metadata } from "next"
import "./globals.css"

const BASE_URL = "https://alfamed-landing.vercel.app"

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: "Alfamed — Gestão Clínica Completa para Unidades de Saúde",
    template: "%s | Alfamed",
  },
  description:
    "Plataforma web e mobile integrada para gestão clínica. Gerencie profissionais, agendas, atendimentos, especialidades e procedimentos em um só lugar.",
  keywords: [
    "gestão clínica",
    "sistema médico",
    "agendamento médico",
    "prontuário digital",
    "gestão de unidade de saúde",
    "sistema para clínicas",
    "software médico",
    "agendamento de consultas",
    "controle de atendimentos",
    "alfamed",
    "saúde digital",
    "gestão hospitalar",
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
    title: "Alfamed — Gestão Clínica Completa para Unidades de Saúde",
    description:
      "Plataforma web e mobile integrada para gestão clínica. Profissionais, agendas, atendimentos e prontuários em um só sistema.",
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
    title: "Alfamed — Gestão Clínica Completa",
    description:
      "Plataforma web e mobile integrada para gestão clínica. Profissionais, agendas, atendimentos e prontuários em um só sistema.",
    images: ["/og-image.png"],
  },

  verification: {
    // Substitua pelos códigos reais após verificar no Google Search Console e Bing Webmaster Tools
    google: "COLE_AQUI_SEU_CODIGO_GOOGLE",
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
      url: BASE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/og-image.png`,
      },
      sameAs: [],
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
