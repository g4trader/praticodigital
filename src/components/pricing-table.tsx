'use client'

import { motion } from 'framer-motion'
import { Check, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import planos from '@/data/planos.json'
import { formatCurrency } from '@/lib/utils'
import Link from 'next/link'

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

export function PricingTable() {
  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Planos para <span className="text-gradient">cada momento</span> do seu crescimento
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Escolha o plano ideal para a sua operação atual e evolua conforme cresce
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto"
        >
          {planos.map((plano) => (
            <motion.div key={plano.nome} variants={item}>
              <Card
                className={`relative h-full flex flex-col ${
                  plano.destaque
                    ? 'border-primary shadow-xl scale-105 md:scale-110'
                    : ''
                }`}
              >
                {plano.destaque && (
                  <div className="absolute -top-4 left-0 right-0 flex justify-center">
                    <Badge className="bg-gradient-to-r from-primary to-secondary">
                      Mais Popular
                    </Badge>
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl">{plano.nome}</CardTitle>
                  <CardDescription>{plano.descricao}</CardDescription>
                  <div className="mt-4">
                    {plano.preco ? (
                      <div>
                        <span className="text-4xl font-bold">{formatCurrency(plano.preco)}</span>
                        <span className="text-muted-foreground">/{plano.periodo}</span>
                      </div>
                    ) : (
                      <div className="text-2xl font-bold">Sob consulta</div>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <ul className="space-y-3 mb-8 flex-1">
                    {plano.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        {feature.incluido ? (
                          <Check className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                        ) : (
                          <X className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                        )}
                        <span
                          className={`text-sm ${
                            !feature.incluido ? 'text-muted-foreground' : ''
                          }`}
                        >
                          {feature.nome}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full ${plano.destaque ? 'glow' : ''}`}
                    variant={plano.destaque ? 'default' : 'outline'}
                    asChild
                  >
                    <Link href="/contato">{plano.cta}</Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

