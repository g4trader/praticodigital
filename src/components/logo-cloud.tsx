'use client'

import { motion } from 'framer-motion'

const companies = [
  'Cliente A',
  'Startup B',
  'Empresa C',
  'SaaS D',
  'Edtech E',
  'E-commerce F',
]

export function LogoCloud() {
  return (
    <section className="py-12 border-y bg-muted/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-center text-sm text-muted-foreground mb-8">
            Confiado por empresas que crescem de verdade
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-60 grayscale">
            {companies.map((company) => (
              <div key={company} className="text-lg font-semibold">
                {company}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

