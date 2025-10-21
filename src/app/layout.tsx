import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/hooks/use-auth";
import { StructuredData } from "@/components/structured-data";
import { AnalyticsWrapper } from "@/components/analytics-wrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: {
    default: "Repositório de Projetos IIW - IFPR | Projetos de Estudantes",
    template: "%s | Repositório de Projetos IIW - IFPR"
  },
  description: "Repositório oficial de projetos dos estudante do Instituto Federal do Paraná (IFPR). Explore projetos desenvolvidos por estudantes do curso técnico em Informática para Internet. Projetos em React, Next.js, JavaScript, TypeScript e muito mais.",
  keywords: [
    "IFPR",
    "Instituto Federal do Paraná",
    "projetos finais de curso",
    "TCC",
    "técnico em informática",
    "desenvolvimento web",
    "React",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "projetos acadêmicos",
    "portfólio estudantil",
    "programação",
    "tecnologia",
    "educação técnica"
  ],
  authors: [{ name: "IFPR Campus Assis Chateaubriand" }],
  creator: "IFPR Campus Assis Chateaubriand",
  publisher: "Instituto Federal do Paraná",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://repositorio-projetos-ifpr.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Repositório de Projetos IIW - IFPR",
    description: "Explore projetos finais de curso desenvolvidos por estudantes do IFPR. Projetos em React, Next.js, JavaScript, TypeScript e muito mais.",
    url: 'https://repositorio-projetos-ifpr.vercel.app',
    siteName: 'Repositório de Projetos IIW - IFPR',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Repositório de Projetos IIW - IFPR',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Repositório de Projetos IIW - IFPR",
    description: "Explore projetos finais de curso desenvolvidos por estudantes do IFPR. Projetos em React, Next.js, JavaScript, TypeScript e muito mais.",
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'AljKmSIDRlPJ49XLxxu1yvNmDdPjIY595Do18qZIRJ4',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/logo-if.png" color="#fff" />
        <StructuredData />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthProvider>
          {children}
        </AuthProvider>
        <AnalyticsWrapper />
      </body>
    </html>
  );
}
