import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Recharge Retreat | Refugio Privado en la Costa Atlántica',
  description: 'Refugio autónomo privado en 9 hectáreas de médanos vírgenes. Desconexión total frente al mar en la costa atlántica argentina. ¡Vive la experiencia de la naturaleza en estado puro!',
  keywords: [
    'refugio costa atlántica',
    'cabaña frente al mar Argentina',
    'alojamiento en médanos',
    'escapada naturaleza Argentina',
    'refugio sustentable',
    'cabaña off-grid',
    'retiro espiritual naturaleza',
    'alojamiento ecológico costa argentina',
    'desconexión digital',
    'Faro Querandí alojamiento'
  ],
  openGraph: {
    title: 'Recharge Retreat | Refugio Privado en la Costa Atlántica',
    description: 'Descubre nuestro refugio autosuficiente en 9 hectáreas de médanos vírgenes. Desconexión total frente al mar en la costa atlántica argentina.',
    type: 'website',
    locale: 'es_AR',
    url: 'https://recharge-retreat.com',
    siteName: 'Recharge Retreat',
    images: [{
      url: '/images/hero.jpg',
      width: 1200,
      height: 630,
      alt: 'Refugio autónomo en medio de los médanos con vista al mar'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Recharge Retreat | Refugio Privado en la Costa Atlántica',
    description: 'Descubre nuestro refugio autosuficiente en 9 hectáreas de médanos vírgenes. Desconexión total frente al mar.',
    images: ['/images/hero.jpg']
  },
  alternates: {
    canonical: 'https://recharge-retreat.com',
    languages: {
      'es-AR': 'https://recharge-retreat.com/es',
      'en-US': 'https://recharge-retreat.com/en'
    }
  }
};
