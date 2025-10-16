'use client'

import { motion } from 'framer-motion'
import {
  Search,
  Bot,
  MessageSquare,
  TrendingUp,
  RefreshCw,
  Headphones,
  Rocket,
} from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const features = [
  {
    title: 'Prospecção de leads',
    description: 'Descoberta ativa com dados e sinais de intenção',
    icon: Search,
  },
  {
    title: 'Qualificação por IA',
    description: 'Score automático de fit, urgência e potencial de conversão',
    icon: Bot,
  },
  {
    title: 'Automação de atendimento',
    description: 'Bots híbridos em todos os canais, disponíveis 24/7',
    icon: MessageSquare,
  },
  {
    title: 'Pré-venda & Vendas',
    description: 'Roteiros orientados por IA e gestão inteligente de objeções',
    icon: TrendingUp,
  },
  {
    title: 'Recuperação de venda',
    description: 'Fluxos automatizados de carrinho e boletos abandonados',
    icon: RefreshCw,
  },
  {
    title: 'Suporte automatizado',
    description: 'Base de conhecimento viva com resolução em segundos',
    icon: Headphones,
  },
  {
    title: 'Lançamentos digitais',
    description: 'Estratégia e operação end-to-end para infoprodutos',
    icon: Rocket,
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export function FeatureCards() {
  return (
    <section className="py-20 md:py-32">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Soluções que <span className="text-gradient">escalam com você</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Do primeiro lead ao cliente recorrente: automações inteligentes em cada etapa da
            jornada
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <motion.div key={feature.title} variants={item}>
                <Card className="h-full transition-all hover:shadow-lg hover:border-primary/50 group">
                  <CardHeader>
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Icon className="h-6 w-6" />
                    </div>
                    <CardTitle>{feature.title}</CardTitle>
                    <CardDescription className="text-base">{feature.description}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

