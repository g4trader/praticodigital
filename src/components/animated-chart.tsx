'use client'

import { motion } from 'framer-motion'
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const data = [
  { mes: 'Jan', leads: 120, mqls: 45, receita: 15000 },
  { mes: 'Fev', leads: 180, mqls: 72, receita: 24000 },
  { mes: 'Mar', leads: 280, mqls: 126, receita: 38000 },
  { mes: 'Abr', leads: 420, mqls: 210, receita: 56000 },
  { mes: 'Mai', leads: 580, mqls: 290, receita: 78000 },
  { mes: 'Jun', leads: 720, mqls: 396, receita: 102000 },
]

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="glass rounded-lg p-4 border border-primary/20">
        <p className="font-semibold mb-2">{label}</p>
        {payload.map((entry: any, index: number) => (
          <p key={index} className="text-sm" style={{ color: entry.color }}>
            {entry.name}: {entry.value.toLocaleString('pt-BR')}
          </p>
        ))}
      </div>
    )
  }
  return null
}

export function AnimatedChart() {
  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Crescimento <span className="text-gradient">previsível e sustentável</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Veja como nossas soluções impactam suas principais métricas ao longo do tempo
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Evolução de Leads e MQLs</CardTitle>
                <CardDescription>
                  Aumento progressivo na quantidade e qualidade de leads
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                    <XAxis dataKey="mes" className="text-xs" />
                    <YAxis className="text-xs" />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="leads"
                      stroke="#635BFF"
                      strokeWidth={2}
                      name="Total de Leads"
                      dot={{ fill: '#635BFF' }}
                    />
                    <Line
                      type="monotone"
                      dataKey="mqls"
                      stroke="#00E5A0"
                      strokeWidth={2}
                      name="MQLs"
                      dot={{ fill: '#00E5A0' }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Crescimento de Receita</CardTitle>
                <CardDescription>
                  Impacto direto na receita gerada através dos leads qualificados
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                    <XAxis dataKey="mes" className="text-xs" />
                    <YAxis className="text-xs" />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend />
                    <Bar dataKey="receita" fill="#635BFF" name="Receita (R$)" radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

