'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Search, Lightbulb, Rocket, TrendingUp } from 'lucide-react'

const steps = [
  {
    icon: Search,
    title: 'Diagnóstico',
    description: 'Análise profunda do seu funil, processos e oportunidades de crescimento',
  },
  {
    icon: Lightbulb,
    title: 'Blueprint de Growth + IA',
    description: 'Estratégia personalizada com automações e IA para cada etapa da jornada',
  },
  {
    icon: Rocket,
    title: 'Implementação',
    description: 'Execução hands-on: integrações, configurações e treinamento do time',
  },
  {
    icon: TrendingUp,
    title: 'Escala & Otimização',
    description: 'Monitoramento contínuo, testes A/B e ajustes para maximizar resultados',
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const item = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 },
}

export function HowItWorks() {
  return (
    <section className="py-20 md:py-32">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Como <span className="text-gradient">trabalhamos</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Processo estruturado em 4 etapas para resultados consistentes
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 relative"
        >
          {/* Connector Line (desktop) */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-primary opacity-20" />

          {steps.map((step, idx) => {
            const Icon = step.icon
            return (
              <motion.div key={idx} variants={item} className="relative">
                <Card className="relative h-full hover:shadow-lg transition-shadow">
                  {/* Step Number */}
                  <div className="absolute -top-4 -left-4 h-10 w-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-lg shadow-lg z-10">
                    {idx + 1}
                  </div>

                  <CardHeader>
                    <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="h-7 w-7" />
                    </div>
                    <CardTitle className="text-xl">{step.title}</CardTitle>
                    <CardDescription className="text-base">{step.description}</CardDescription>
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

