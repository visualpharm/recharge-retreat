import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Refugio Autónomo en la Costa | Recharge Retreat',
  description: 'Refugio autosuficiente en 9 hectáreas de médanos vírgenes. Desconexión total frente al mar en la costa atlántica argentina. ¡Reserva tu experiencia única!',
  keywords: [
    'refugio autónomo costa atlántica',
    'cabaña frente al mar Argentina',
    'alojamiento en médanos',
    'escapada naturaleza Argentina',
    'refugio sustentable',
    'cabaña off-grid',
    'retiro espiritual naturaleza',
    'alojamiento ecológico costa argentina',
    'desconexión digital'
  ],
  openGraph: {
    title: 'Refugio Autónomo en la Costa | Recharge Retreat',
    description: 'Vive la experiencia de un refugio autosuficiente en medio de la naturaleza virgen. 9 hectáreas de médanos privados frente al mar en la costa atlántica argentina.',
    type: 'website',
    locale: 'es_AR',
    url: 'https://recharge-retreat.com/es/refugio',
    siteName: 'Recharge Retreat',
    images: [{
      url: '/images/shelter/hero.jpg',
      width: 1200,
      height: 630,
      alt: 'Refugio autónomo en medio de los médanos con vista al mar'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Refugio Autónomo en la Costa | Recharge Retreat',
    description: 'Vive la experiencia de un refugio autosuficiente en medio de la naturaleza virgen. 9 hectáreas de médanos privados frente al mar.',
    images: ['/images/shelter/hero.jpg']
  },
  alternates: {
    canonical: 'https://recharge-retreat.com/es/refugio',
    languages: {
      'es-AR': 'https://recharge-retreat.com/es/refugio',
      'en-US': 'https://recharge-retreat.com/en/shelter'
    }
  }
};
