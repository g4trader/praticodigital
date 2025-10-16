'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, Sparkles } from 'lucide-react'

export function CtaBanner() {
  return (
    <section id="cta" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/80 to-secondary" />
        <div className="absolute inset-0 grid-pattern opacity-20" />
      </div>

      {/* Glow effects */}
      <div className="absolute top-0 left-1/4 -z-10 h-96 w-96 rounded-full bg-secondary/30 blur-[128px]" />
      <div className="absolute bottom-0 right-1/4 -z-10 h-96 w-96 rounded-full bg-primary/30 blur-[128px]" />

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center text-white"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5">
            <Sparkles className="h-4 w-4" />
            <span className="text-sm">Comece hoje mesmo</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Pronto para acelerar seu crescimento com IA?
          </h2>
          <p className="text-lg md:text-xl mb-10 text-white/90">
            Agende um diagnóstico gratuito e descubra como podemos multiplicar seus resultados em
            30-60 dias
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="text-base group bg-white text-primary hover:bg-white/90"
              asChild
            >
              <Link href="/contato">
                Agendar diagnóstico gratuito
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-base border-white text-white hover:bg-white/10"
              asChild
            >
              <Link href="/produtos">Explorar soluções</Link>
            </Button>
          </div>

          <p className="mt-8 text-sm text-white/70">
            Sem compromisso • Diagnóstico personalizado • Resultados garantidos
          </p>
        </motion.div>
      </div>
    </section>
  )
}

