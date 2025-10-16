import Link from 'next/link'
import { Instagram, Linkedin, Mail } from 'lucide-react'

const footerNavigation = {
  soluções: [
    { name: 'Prospecção de Leads', href: '/produtos/prospeccao-de-leads' },
    { name: 'Qualificação por IA', href: '/produtos/qualificacao-por-ia' },
    { name: 'Automação de Atendimento', href: '/produtos/automacao-de-atendimento' },
    { name: 'Pré-venda & Vendas', href: '/produtos/pre-venda-vendas' },
  ],
  empresa: [
    { name: 'Sobre', href: '/#sobre' },
    { name: 'Casos de Sucesso', href: '/#casos' },
    { name: 'Contato', href: '/contato' },
  ],
  legal: [
    { name: 'Privacidade', href: '/privacidade' },
    { name: 'Termos de Uso', href: '/termos' },
  ],
  social: [
    { name: 'LinkedIn', href: '#', icon: Linkedin },
    { name: 'Instagram', href: '#', icon: Instagram },
    { name: 'Email', href: 'mailto:contato@praticodigital.com', icon: Mail },
  ],
}

export function SiteFooter() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="col-span-2">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-bold text-gradient">Prático Digital</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground max-w-xs">
              Growth + IA, do lead à receita. Operações inteligentes que não dormem.
            </p>
            <div className="mt-6 flex gap-4">
              {footerNavigation.social.map((item) => {
                const Icon = item.icon
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    <span className="sr-only">{item.name}</span>
                    <Icon className="h-5 w-5" />
                  </a>
                )
              })}
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold">Soluções</h3>
            <ul className="mt-4 space-y-3">
              {footerNavigation.soluções.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold">Empresa</h3>
            <ul className="mt-4 space-y-3">
              {footerNavigation.empresa.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Prático Digital. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            {footerNavigation.legal.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-xs text-muted-foreground hover:text-foreground"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

