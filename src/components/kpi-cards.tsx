'use client'

import { motion } from 'framer-motion'
import { TrendingUp, TrendingDown, DollarSign, Users } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { formatPercent } from '@/lib/utils'

const kpis = [
  {
    label: 'Aumento em MQLs',
    value: '+127%',
    icon: Users,
    trend: 'up',
  },
  {
    label: 'Redução no CAC',
    value: '-43%',
    icon: DollarSign,
    trend: 'down',
  },
  {
    label: 'Aumento no LTV',
    value: '+22%',
    icon: TrendingUp,
    trend: 'up',
  },
  {
    label: 'ROI médio',
    value: '480%',
    icon: TrendingUp,
    trend: 'up',
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
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1 },
}

export function KpiCards() {
  return (
    <section className="py-20 md:py-32">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Resultados que <span className="text-gradient">falam por si</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Métricas reais dos nossos clientes após implementação das soluções
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
        >
          {kpis.map((kpi) => {
            const Icon = kpi.icon
            const TrendIcon = kpi.trend === 'up' ? TrendingUp : TrendingDown
            return (
              <motion.div key={kpi.label} variants={item}>
                <Card className="relative overflow-hidden group hover:shadow-xl transition-all">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <CardContent className="p-6 relative">
                    <div className="flex items-start justify-between mb-4">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <TrendIcon
                        className={`h-4 w-4 ${
                          kpi.trend === 'up' ? 'text-secondary' : 'text-accent'
                        }`}
                      />
                    </div>
                    <div className="text-3xl font-bold mb-1">{kpi.value}</div>
                    <div className="text-sm text-muted-foreground">{kpi.label}</div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

