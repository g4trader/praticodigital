'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import cases from '@/data/cases.json'
import { formatPercent } from '@/lib/utils'

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

export function CaseMiniList() {
  return (
    <section id="casos" className="py-20 md:py-32 bg-muted/30">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Casos de <span className="text-gradient">sucesso reais</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Empresas que transformaram suas operações com nossas soluções
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-3"
        >
          {cases.map((caso, index) => (
            <motion.div key={index} variants={item}>
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Badge variant="secondary">{caso.segmento}</Badge>
                    <span className="text-xs text-muted-foreground">{caso.prazo}</span>
                  </div>
                  <CardTitle className="text-xl">{caso.cliente}</CardTitle>
                  <CardDescription className="text-sm">{caso.desafio}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-medium mb-2">Solução:</p>
                      <p className="text-sm text-muted-foreground">{caso.solucao}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium mb-3">Resultados:</p>
                      <div className="space-y-2">
                        {caso.resultados.slice(0, 3).map((resultado, idx) => (
                          <div key={idx} className="flex items-center justify-between text-sm">
                            <span className="text-muted-foreground">{resultado.metrica}</span>
                            <span className={`font-semibold ${
                              resultado.variacao !== null && resultado.variacao > 0 
                                ? 'text-secondary' 
                                : resultado.variacao !== null && resultado.variacao < 0
                                ? 'text-accent'
                                : 'text-primary'
                            }`}>
                              {resultado.variacao !== null 
                                ? `${resultado.variacao > 0 ? '+' : ''}${resultado.variacao}%`
                                : resultado.depois.toLocaleString('pt-BR')}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="pt-4 border-t">
                      <p className="text-sm italic text-muted-foreground">&ldquo;{caso.depoimento}&rdquo;</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

