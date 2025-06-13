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
    default: 'Recharge Retreat | Refugio Privado en Argentina',
    template: '%s | Recharge Retreat',
  },
  description: 'Refugio autónomo privado en Argentina. Sin vecinos. 9 hectáreas de médanos verdes y el océano. Experiencia de desconexión total cerca de Faro Querandí.',
  keywords: [
    'cabañas frente al mar Argentina',
    'refugio aislado Argentina', 
    'cabañas vista al océano',
    'desconexión digital Argentina',
    'cabañas playa privada',
    'alojamiento Faro Querandí',
    'refugio sustentable Argentina',
    'cabañas off-grid',
    'retiro naturaleza',
    'playa privada Argentina'
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
    locale: 'es_AR',
    url: 'https://recharge-retreat.com',
    siteName: 'Recharge Retreat',
    title: 'Recharge Retreat | Refugio Privado en Argentina',
    description: 'Refugio autónomo privado. Sin vecinos. 9 hectáreas de médanos verdes y el océano cerca de Faro Querandí, Argentina.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Recharge Retreat | Refugio Privado en Argentina',
    description: 'Escapá a nuestro refugio privado para una experiencia de desconexión total en la naturaleza. Reservá tu estadía.',
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
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased bg-background text-foreground">
        {children}
      </body>
    </html>
  )
}
