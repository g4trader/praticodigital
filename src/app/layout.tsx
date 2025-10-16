import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import '@/styles/globals.css'
import { cn } from '@/lib/utils'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Prático Digital | Growth + IA para acelerar aquisição, conversão e retenção',
    template: '%s | Prático Digital',
  },
  description:
    'Operações inteligentes que não dormem. Da prospecção à receita: automações de Growth Marketing e IA que geram resultados reais de curto e longo prazo.',
  keywords: [
    'growth marketing',
    'inteligência artificial',
    'automação de vendas',
    'qualificação de leads',
    'prospecção',
    'CRM',
    'chatbots',
    'automação de marketing',
  ],
  authors: [{ name: 'Prático Digital' }],
  creator: 'Prático Digital',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://praticodigital.com.br',
    siteName: 'Prático Digital',
    title: 'Prático Digital | Growth + IA para acelerar resultados',
    description:
      'Operações inteligentes de Growth Marketing e IA que escalam seu negócio de forma previsível.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Prático Digital - Growth + IA',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Prático Digital | Growth + IA',
    description: 'Operações inteligentes que não dormem',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="dark">
      <body className={cn(inter.className, 'antialiased')}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
