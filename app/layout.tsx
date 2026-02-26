import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { FloatingActionButton } from "@/components/floating-action-button"
import { JsonLd } from "@/components/json-ld"
import { getOrganizationSchema, siteConfigData } from "@/lib/seo-metadata"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://mahimarchitect.com"),
  title: {
    template: "%s | Mahim Architects by Ashish Patel - Architecture in Surat, Gujarat",
    default: "Mahim Architects by Ashish Patel - Residential & Commercial Architecture in Surat, Gujarat",
  },
  description:
    "Mahim Architects - Led by Ashish Patel (15+ years experience). Premium residential and commercial architecture services in Surat and Gujarat. Award-winning architectural designs for modern homes and businesses.",
  keywords: [
    "architect in Surat",
    "best architect Surat",
    "architecture firm Gujarat",
    "residential architect Surat",
    "commercial architect Gujarat",
    "architectural services Surat",
    "building design Gujarat",
    "interior architect Surat",
  ],
  generator: "Next.js",
  verification: {
    google: "NdpqGNyZe2LJXw5qeWCc5unMjsGWS9zrIeRQl0T_UDY",
  },
  alternates: {
    canonical: "https://mahimarchitect.com/",
  },
  openGraph: {
    siteName: "Mahim Architects",
    title: "Mahim Architects by Ashish Patel - Premium Architecture Services in Surat, Gujarat",
    description:
      "Led by Ashish Patel (15+ years). Award-winning residential and commercial architecture designs in Surat and Gujarat",
    type: "website",
    url: "https://mahimarchitect.com/",
    images: [
      {
        url: "https://mahimarchitect.com/og-image.jpg",
        alt: "Mahim Architects - Premium Architecture Services",
        width: 1200,
        height: 630,
        type: "image/jpeg",
      },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mahim Architects by Ashish Patel - Premium Architecture Services in Surat",
    description:
      "Led by Ashish Patel (15+ years). Award-winning residential and commercial architecture designs in Surat and Gujarat",
    images: ["https://mahimarchitect.com/og-image.jpg"],
    creator: "@mahimarchitects",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en-IN" className={`${inter.variable} antialiased`}>
      <head>
        {/* JSON-LD Organization Schema */}
        <JsonLd data={getOrganizationSchema()} />

        {/* Google Search Console Verification */}
        <meta name="google-site-verification" content="NdpqGNyZe2LJXw5qeWCc5unMjsGWS9zrIeRQl0T_UDY" />

        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />

        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.initialization'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-XXXXXXXXX');
            `,
          }}
        />

        {/* Additional Meta Tags */}
        <meta name="application-name" content="Mahim Architects" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Mahim Architects" />
        <meta name="theme-color" content="#000000" />
        <meta name="mobile-web-app-capable" content="yes" />

        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="font-sans bg-neutral-50 text-neutral-900 overflow-x-hidden">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Architect",
              name: "Mahim Architect",
              url: "https://mahimarchitect.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Surat",
                addressRegion: "Gujarat",
                addressCountry: "India",
              },
            }),
          }}
        />
        {children}
        <FloatingActionButton />
      </body>
    </html>
  )
}