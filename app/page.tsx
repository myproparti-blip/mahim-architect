"use client"
import dynamic from "next/dynamic"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"

// Dynamically import below-the-fold components to improve LCP
// ssr: false prevents hydration mismatch since these components are below-the-fold
const CollectionStrip = dynamic(() => import("@/components/collection-strip").then(mod => ({ default: mod.CollectionStrip })), {
  loading: () => null, // Don't show a loading skeleton
  ssr: false, // CHANGED: Disable SSR for below-the-fold (doesn't affect LCP)
})

const MaterialsSection = dynamic(() => import("@/components/materials-section").then(mod => ({ default: mod.MaterialsSection })), {
  loading: () => null,
  ssr: false, // CHANGED: Disable SSR for below-the-fold
})

const EthosSection = dynamic(() => import("@/components/ethos-section").then(mod => ({ default: mod.EthosSection })), {
  loading: () => null,
  ssr: false, // CHANGED: Disable SSR for below-the-fold
})

const NewsletterSection = dynamic(() => import("@/components/newsletter-section").then(mod => ({ default: mod.NewsletterSection })), {
  loading: () => null,
  ssr: false, // CHANGED: Disable SSR for below-the-fold
})

const Footer = dynamic(() => import("@/components/footer").then(mod => ({ default: mod.Footer })), {
  loading: () => null,
  ssr: false, // CHANGED: Disable SSR for below-the-fold
})

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <CollectionStrip />
      <MaterialsSection />
      <EthosSection />
      <NewsletterSection />
      <Footer />
    </main>
  )
}
