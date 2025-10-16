import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { ContactForm } from '@/components/contact-form'
import { PricingTable } from '@/components/pricing-table'
import produtos from '@/data/produtos.json'
import integracoes from '@/data/integracoes.json'
import { Check, ArrowRight } from 'lucide-react'
import * as LucideIcons from 'lucide-react'

interface PageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return produtos.map((produto) => ({
    slug: produto.slug,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const produto = produtos.find((p) => p.slug === params.slug)

  if (!produto) {
    return {
      title: 'Produto não encontrado',
    }
  }

  return {
    title: produto.titulo,
    description: produto.descricao,
  }
}

export default function ProdutoPage({ params }: PageProps) {
  const produto = produtos.find((p) => p.slug === params.slug)

  if (!produto) {
    notFound()
  }

  const IconComponent = (LucideIcons as any)[produto.icone] || LucideIcons.Box
  const produtoIntegracoes = integracoes.filter((int) =>
    produto.integracoes.includes(int.nome)
  )

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero do Produto */}
        <section className="py-20 md:py-32 border-b">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <IconComponent className="h-8 w-8" />
                </div>
                <Badge variant="secondary">{produto.categoria}</Badge>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">{produto.titulo}</h1>
              <p className="text-xl text-muted-foreground mb-8">{produto.descricao}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="glow" asChild>
                  <Link href="#contato">
                    Quero essa solução
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/contato">Agendar demonstração</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* O Problema */}
        <section className="py-20 bg-muted/30">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">O Problema</h2>
              <p className="text-lg text-muted-foreground">{produto.problema}</p>
            </div>
          </div>
        </section>

        {/* Nossa Solução */}
        <section className="py-20">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Nossa Solução</h2>
              <p className="text-lg text-muted-foreground mb-8">{produto.solucao}</p>
              <div className="grid gap-4 md:grid-cols-2">
                {produto.beneficios.map((beneficio, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="mt-1">
                      <Check className="h-5 w-5 text-secondary" />
                    </div>
                    <span className="text-base">{beneficio}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Como Funciona */}
        <section className="py-20 bg-muted/30">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Como Funciona</h2>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                {produto.comoFunciona.map((etapa, idx) => (
                  <Card key={idx} className="relative">
                    <CardHeader>
                      <div className="absolute -top-4 left-6 h-8 w-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                        {idx + 1}
                      </div>
                      <CardTitle className="text-base mt-2">{etapa}</CardTitle>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Integrações */}
        <section className="py-20">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Integrações</h2>
              <p className="text-center text-muted-foreground mb-12">
                Conecta perfeitamente com as ferramentas que você já usa
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                {produtoIntegracoes.map((integracao) => {
                  const IntIcon = (LucideIcons as any)[integracao.icone] || LucideIcons.Box
                  return (
                    <div
                      key={integracao.nome}
                      className="flex flex-col items-center gap-2 p-4 rounded-lg border bg-card hover:border-primary/50 transition-colors"
                    >
                      <IntIcon className="h-8 w-8 text-primary" />
                      <span className="text-sm font-medium">{integracao.nome}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Planos */}
        <PricingTable />

        {/* FAQ do Produto */}
        <section className="py-20 bg-muted/30">
          <div className="container max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Perguntas Frequentes
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {produto.faq.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">{faq.pergunta}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.resposta}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Formulário de Contato */}
        <section id="contato" className="py-20">
          <div className="container max-w-2xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Pronto para começar?</h2>
              <p className="text-lg text-muted-foreground">
                Preencha o formulário e nosso time entrará em contato em até 24h
              </p>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}

