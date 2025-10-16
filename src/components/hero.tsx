'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, Sparkles } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 animated-gradient opacity-20" />
        <div className="absolute inset-0 grid-pattern opacity-30" />
      </div>

      {/* Glow effects */}
      <div className="absolute top-1/4 left-1/4 -z-10 h-96 w-96 rounded-full bg-primary/20 blur-[128px]" />
      <div className="absolute bottom-1/4 right-1/4 -z-10 h-96 w-96 rounded-full bg-secondary/20 blur-[128px]" />

      <div className="container relative">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm"
          >
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-primary">Resultados reais com Growth + IA</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl mb-6"
          >
            Growth + IA para{' '}
            <span className="text-gradient">acelerar aquisição</span>, conversão e retenção
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto"
          >
            Da prospecção à receita: operações inteligentes que não dormem. Resultados reais de
            curto e longo prazo, com automações que escalam.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button size="lg" className="glow text-base group" asChild>
              <Link href="/contato">
                Agendar diagnóstico
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-base" asChild>
              <Link href="/produtos">Ver soluções</Link>
            </Button>
          </motion.div>

          {/* Social Proof */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-16 flex flex-col items-center gap-4"
          >
            <p className="text-sm text-muted-foreground">Confiado por empresas inovadoras</p>
            <div className="flex flex-wrap justify-center gap-8 opacity-50 grayscale">
              {['Cliente A', 'Startup B', 'Empresa C', 'SaaS D'].map((name) => (
                <div key={name} className="text-sm font-semibold">{name}</div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

