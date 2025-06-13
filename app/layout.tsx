import type { Metadata, Viewport } from 'next'
import './globals.css'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#ffffff',
}

export const metadata: Metadata = {
  title: {
    default: 'Recharge Retreat | Secluded Beachfront Cabins in Argentina',
    template: '%s | Recharge Retreat',
  },
  description: 'Escape to our secluded beachfront cabins in Argentina. Experience ultimate privacy, stunning ocean views, and a digital detox in our sustainable retreat near Faro Querandí.',
  keywords: [
    'beachfront cabins Argentina',
    'secluded retreat Argentina',
    'ocean view cabins',
    'digital detox Argentina',
    'private beach cabins',
    'Faro Querandí accommodation',
    'sustainable retreat Argentina',
    'off-grid cabins',
    'nature retreat',
    'private beach Argentina'
  ],
  authors: [{ name: 'Recharge Retreat' }],
  creator: 'Recharge Retreat',
  publisher: 'Recharge Retreat',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://recharge-retreat.com',
    siteName: 'Recharge Retreat',
    title: 'Recharge Retreat | Secluded Beachfront Cabins in Argentina',
    description: 'Experience ultimate privacy in our secluded beachfront cabins. Stunning ocean views, digital detox, and sustainable living near Faro Querandí, Argentina.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Recharge Retreat | Secluded Beachfront Cabins in Argentina',
    description: 'Escape to our private beachfront cabins for a digital detox experience in nature. Book your secluded retreat today.',
    creator: '@rechargeretreat',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  generator: 'Next.js',
  applicationName: 'Recharge Retreat',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
