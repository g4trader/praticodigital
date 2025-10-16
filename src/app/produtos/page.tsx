import { Metadata } from 'next'
import Link from 'next/link'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import produtos from '@/data/produtos.json'
import { ArrowRight } from 'lucide-react'
import * as LucideIcons from 'lucide-react'

export const metadata: Metadata = {
  title: 'Produtos e Soluções',
  description:
    'Conheça nossas soluções de Growth Marketing e IA: da prospecção de leads à automação de vendas e suporte.',
}

export default function ProdutosPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero */}
        <section className="py-20 md:py-32 border-b">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Soluções <span className="text-gradient">completas</span> para cada etapa
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Do primeiro contato ao cliente recorrente: automações inteligentes que escalam seu
                negócio com previsibilidade
              </p>
            </div>
          </div>
        </section>

        {/* Produtos Grid */}
        <section className="py-20">
          <div className="container">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {produtos.map((produto) => {
                const IconComponent = (LucideIcons as any)[produto.icone] || LucideIcons.Box
                return (
                  <Card
                    key={produto.slug}
                    className="group hover:shadow-xl hover:border-primary/50 transition-all"
                  >
                    <CardHeader>
                      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <div className="flex items-start justify-between mb-2">
                        <CardTitle className="text-xl">{produto.titulo}</CardTitle>
                        <Badge variant="outline" className="ml-2">
                          {produto.categoria}
                        </Badge>
                      </div>
                      <CardDescription className="text-base">{produto.resumo}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 mb-6">
                        {produto.beneficios.slice(0, 3).map((beneficio, idx) => (
                          <li key={idx} className="text-sm flex items-center gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-secondary" />
                            {beneficio}
                          </li>
                        ))}
                      </ul>
                      <Button className="w-full group" asChild>
                        <Link href={`/produtos/${produto.slug}`}>
                          Ver detalhes
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-muted/30 border-t">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Não sabe qual solução escolher?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Agende um diagnóstico gratuito e descubra o melhor caminho para o seu negócio
              </p>
              <Button size="lg" className="glow" asChild>
                <Link href="/contato">Falar com especialista</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}

