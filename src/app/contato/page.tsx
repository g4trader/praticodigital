import { Metadata } from 'next'
import Link from 'next/link'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { ContactForm } from '@/components/contact-form'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Mail, MapPin, Clock, MessageCircle, Calendar } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contato',
  description:
    'Entre em contato com a Prático Digital. Agende um diagnóstico gratuito ou tire suas dúvidas sobre nossas soluções.',
}

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    details: 'contato@praticodigital.com',
    link: 'mailto:contato@praticodigital.com',
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    details: '+55 (11) 99999-9999',
    link: 'https://wa.me/5511999999999',
  },
  {
    icon: MapPin,
    title: 'Localização',
    details: 'São Paulo, SP - Brasil',
  },
  {
    icon: Clock,
    title: 'Horário',
    details: 'Seg-Sex: 9h às 18h',
  },
]

export default function ContatoPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero */}
        <section className="py-20 md:py-32 border-b">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Vamos <span className="text-gradient">conversar</span>?
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Conte-nos sobre seus desafios e descubra como podemos acelerar o crescimento do
                seu negócio
              </p>
            </div>
          </div>
        </section>

        {/* Formulário e Informações */}
        <section className="py-20">
          <div className="container">
            <div className="grid gap-12 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <ContactForm />
              </div>

              <div className="space-y-6">
                {/* Informações de contato */}
                <div className="space-y-4">
                  {contactInfo.map((info, idx) => {
                    const Icon = info.icon
                    const content = (
                      <Card key={idx} className="hover:border-primary/50 transition-colors">
                        <CardHeader className="flex-row items-center gap-4 space-y-0">
                          <div className="p-2 rounded-lg bg-primary/10">
                            <Icon className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <CardTitle className="text-base">{info.title}</CardTitle>
                            <CardDescription>{info.details}</CardDescription>
                          </div>
                        </CardHeader>
                      </Card>
                    )

                    return info.link ? (
                      <a
                        key={idx}
                        href={info.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                      >
                        {content}
                      </a>
                    ) : (
                      content
                    )
                  })}
                </div>

                {/* Quick Actions */}
                <Card className="bg-primary/5 border-primary/20">
                  <CardHeader>
                    <CardTitle className="text-lg">Prefere agendar uma call?</CardTitle>
                    <CardDescription>
                      Escolha o melhor horário na nossa agenda
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full" variant="outline" asChild>
                      <a
                        href={process.env.NEXT_PUBLIC_CALENDLY_URL || '#'}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Calendar className="mr-2 h-4 w-4" />
                        Agendar no Calendly
                      </a>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="bg-secondary/5 border-secondary/20">
                  <CardHeader>
                    <CardTitle className="text-lg">Chame no WhatsApp</CardTitle>
                    <CardDescription>Resposta rápida em horário comercial</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full" variant="secondary" asChild>
                      <a
                        href="https://wa.me/5511999999999"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <MessageCircle className="mr-2 h-4 w-4" />
                        Abrir WhatsApp
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}

