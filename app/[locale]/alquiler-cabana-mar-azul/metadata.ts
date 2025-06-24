import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Alquiler de Cabaña en Mar Azul | Cabañas Cerca de la Playa',
  description: 'Disfruta del mejor alquiler de cabaña en Mar Azul. Cómodas cabañas a pocos pasos de la playa. ¡Reserva ahora tu escapada perfecta!',
  keywords: [
    'alquiler cabaña en Mar Azul',
    'cabañas en Mar Azul alquiler',
    'alquiler temporario Mar Azul',
    'cabañas cerca de la playa Mar Azul',
    'alquiler cabaña frente al mar',
    'cabañas en alquiler Mar Azul',
    'alquiler temporada Mar Azul',
    'cabañas económicas Mar Azul'
  ],
  openGraph: {
    title: 'Alquiler de Cabaña en Mar Azul | Cabañas Cerca de la Playa',
    description: 'Disfruta de unas vacaciones inolvidables en nuestra cabaña en Mar Azul. Playa virgen, privacidad y todas las comodidades para tu descanso.',
    type: 'website',
    locale: 'es_AR',
    url: 'https://recharge-retreat.com/es/alquiler-cabana-mar-azul',
    siteName: 'Recharge Retreat',
    images: [{
      url: '/images/shelter/cabin-exterior-1.jpg',
      width: 1200,
      height: 800,
      alt: 'Cabaña de alquiler en Mar Azul a pocos metros de la playa'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alquiler de Cabaña en Mar Azul | Cabañas Cerca de la Playa',
    description: 'Disfruta de unas vacaciones inolvidables en nuestra cabaña en Mar Azul. Playa virgen, privacidad y todas las comodidades para tu descanso.',
    images: ['/images/shelter/cabin-exterior-1.jpg']
  },
  alternates: {
    canonical: 'https://recharge-retreat.com/es/alquiler-cabana-mar-azul',
    languages: {
      'es-AR': 'https://recharge-retreat.com/es/alquiler-cabana-mar-azul',
      'en-US': 'https://recharge-retreat.com/en/rental-mar-azul'
    }
  }
};
