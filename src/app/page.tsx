import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { LogoCloud } from '@/components/logo-cloud'
import { FeatureCards } from '@/components/feature-cards'
import { HowItWorks } from '@/components/how-it-works'
import { AnimatedChart } from '@/components/animated-chart'
import { KpiCards } from '@/components/kpi-cards'
import { CaseMiniList } from '@/components/case-mini-list'
import { PricingTable } from '@/components/pricing-table'
import { FaqAccordion } from '@/components/faq-accordion'
import { CtaBanner } from '@/components/cta-banner'
import { SiteFooter } from '@/components/site-footer'

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <LogoCloud />
        <FeatureCards />
        <HowItWorks />
        <AnimatedChart />
        <KpiCards />
        <CaseMiniList />
        <PricingTable />
        <FaqAccordion />
        <CtaBanner />
      </main>
      <SiteFooter />
    </div>
  )
}
