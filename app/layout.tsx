import type React from "react"
import type { Metadata } from "next"
import { Inter, Geist_Mono } from "next/font/google"
import Script from "next/script"
// import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" })

export const metadata: Metadata = {
  title: "AccessHealthData | Healthcare Data API",
  description:
    "The easiest way for developers to access complete patient medical histories. One API. Instant FHIR normalization. Nationwide coverage.",
    generator: 'v0.app'
}

const gtagScript = `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-P20W9BTLE2');
`

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-P20W9BTLE2"
        />
        <Script
          id="gtag-init"
          dangerouslySetInnerHTML={{
            __html: gtagScript,
          }}
        />
      </head>
      <body className={`${inter.variable} ${geistMono.variable} font-sans antialiased`}>
        {children}
        {/* <GoogleAnalytics gaId="G-P20W9BTLE2" /> */}
      </body>
    </html>
  )
}
