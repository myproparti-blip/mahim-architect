"use client"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { CollectionStrip } from "@/components/collection-strip"
import { MaterialsSection } from "@/components/materials-section"
import { EthosSection } from "@/components/ethos-section"
import { NewsletterSection } from "@/components/newsletter-section"
import { Footer } from "@/components/footer"

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
