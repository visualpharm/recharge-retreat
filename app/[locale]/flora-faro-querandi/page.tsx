import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import FloraGallery from '@/components/flora-gallery'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Flora of Faro Querandí | Recharge Retreat',
  description: 'Explore native plant species thriving in the coastal dunes surrounding Faro Querandí and Recharge Retreat.'
}

// Plant names by locale
const plantNames = {
  es: {
    'macela': 'Macela<br><span style="color: #666; font-style: italic;">Achyrocline satureioides</span>',
    'panicum-racemosum': 'Pasto de Médano<br><span style="color: #666; font-style: italic;">Panicum racemosum</span>',
    'grindelia-orientalis': 'Melosa Amarilla<br><span style="color: #666; font-style: italic;">Grindelia orientalis</span>',
    'herbe-pampa': 'Cortadera<br><span style="color: #666; font-style: italic;">Cortaderia selloana</span>',
    'verbena-litoralis': 'Verbena de Costa<br><span style="color: #666; font-style: italic;">Verbena litoralis</span>',
    'spartina-ciliata': 'Don Diego de noche<br><span style="color: #666; font-style: italic;">Oenothera mollissima</span>',
    'juncus-acutus': 'Plumerillo negro<br><span style="color: #666; font-style: italic;">Oxypetalum solanoides</span>',
    'echinocloa-crusgalli': 'Pasto de Laguna<br><span style="color: #666; font-style: italic;">Echinocloa crus-galli</span>',
    'abanico-daisy': 'Marcela<br><span style="color: #666; font-style: italic;">Achyrocline satureioides</span>',
    'cenchrus-longispinus': 'Cadillo<br><span style="color: #666; font-style: italic;">Cenchrus longispinus</span>',
    'muehlenbergia-capillaris': 'Chajapé<br><span style="color: #666; font-style: italic;">Imperata brasiliensis</span>',
    'ophryosporus-dune': 'Olivillo de Médano<br><span style="color: #666; font-style: italic;">Ophryosporus triangularis</span>'
  },
  en: {
    'macela': 'Marcela<br><span style="color: #666; font-style: italic;">Achyrocline satureioides</span>',
    'panicum-racemosum': 'Dune Grass<br><span style="color: #666; font-style: italic;">Panicum racemosum</span>',
    'grindelia-orientalis': 'Coastal Sunflower<br><span style="color: #666; font-style: italic;">Grindelia orientalis</span>',
    'herbe-pampa': 'Pampas Grass<br><span style="color: #666; font-style: italic;">Cortaderia selloana</span>',
    'verbena-litoralis': 'Coastal Verbena<br><span style="color: #666; font-style: italic;">Verbena litoralis</span>',
    'spartina-ciliata': 'Evening Primrose<br><span style="color: #666; font-style: italic;">Oenothera mollissima</span>',
    'juncus-acutus': 'Black Plumerillo<br><span style="color: #666; font-style: italic;">Oxypetalum solanoides</span>',
    'echinocloa-crusgalli': 'Barnyard Grass<br><span style="color: #666; font-style: italic;">Echinocloa crus-galli</span>',
    'abanico-daisy': 'Marcela<br><span style="color: #666; font-style: italic;">Achyrocline satureioides</span>',
    'cenchrus-longispinus': 'Spiny Bur Grass<br><span style="color: #666; font-style: italic;">Cenchrus longispinus</span>',
    'muehlenbergia-capillaris': 'Brazilian Satintail<br><span style="color: #666; font-style: italic;">Imperata brasiliensis</span>',
    'ophryosporus-dune': 'Dune Shrub<br><span style="color: #666; font-style: italic;">Ophryosporus triangularis</span>'
  },
  pt: {
    'macela': 'Marcela<br><span style="color: #666; font-style: italic;">Achyrocline satureioides</span>',
    'panicum-racemosum': 'Capim das Dunas<br><span style="color: #666; font-style: italic;">Panicum racemosum</span>',
    'grindelia-orientalis': 'Girassol da Costa<br><span style="color: #666; font-style: italic;">Grindelia orientalis</span>',
    'herbe-pampa': 'Capim dos Pampas<br><span style="color: #666; font-style: italic;">Cortaderia selloana</span>',
    'verbena-litoralis': 'Verbena da Costa<br><span style="color: #666; font-style: italic;">Verbena litoralis</span>',
    'spartina-ciliata': 'Prímula da Tarde<br><span style="color: #666; font-style: italic;">Oenothera mollissima</span>',
    'juncus-acutus': 'Plumerillo Negro<br><span style="color: #666; font-style: italic;">Oxypetalum solanoides</span>',
    'echinocloa-crusgalli': 'Capim de Lagoa<br><span style="color: #666; font-style: italic;">Echinocloa crus-galli</span>',
    'abanico-daisy': 'Marcela<br><span style="color: #666; font-style: italic;">Achyrocline satureioides</span>',
    'cenchrus-longispinus': 'Capim Carrapicho<br><span style="color: #666; font-style: italic;">Cenchrus longispinus</span>',
    'muehlenbergia-capillaris': 'Capim Imperata<br><span style="color: #666; font-style: italic;">Imperata brasiliensis</span>',
    'ophryosporus-dune': 'Arbusto das Dunas<br><span style="color: #666; font-style: italic;">Ophryosporus triangularis</span>'
  }
}

// Base flora images
const baseFloraImages = [
  { src: '/images/flora-faro-querandi/macela.jpg', key: 'macela' },
  { src: '/images/flora-faro-querandi/panicum-racemosum.jpg', key: 'panicum-racemosum' },
  { src: '/images/flora-faro-querandi/grindelia-orientalis.jpg', key: 'grindelia-orientalis' },
  { src: '/images/flora-faro-querandi/herbe-pampa.jpg', key: 'herbe-pampa' },
  { src: '/images/flora-faro-querandi/verbena-litoralis.jpg', key: 'verbena-litoralis' },
  { src: '/images/flora-faro-querandi/spartina-ciliata.jpg', key: 'spartina-ciliata' },
  { src: '/images/flora-faro-querandi/juncus-acutus.png', key: 'juncus-acutus' },
  { src: '/images/flora-faro-querandi/echinocloa-crusgalli.jpg', key: 'echinocloa-crusgalli' },
  { src: '/images/flora-faro-querandi/abanico-daisy.jpg', key: 'abanico-daisy' },
  { src: '/images/flora-faro-querandi/cenchrus-longispinus.png', key: 'cenchrus-longispinus' },
  { src: '/images/flora-faro-querandi/muehlenbergia-capillaris.jpg', key: 'muehlenbergia-capillaris' },
  { src: '/images/flora-faro-querandi/ophryosporus-dune.jpg', key: 'ophryosporus-dune' }
];

interface FloraPageProps {
  params: { locale: string }
}

export default function FloraPage({ params }: FloraPageProps) {
  const locale = params.locale as keyof typeof plantNames;
  const names = plantNames[locale] || plantNames.en;
  
  // Generate flora images with localized names
  const floraImages = baseFloraImages.map(img => ({
    src: img.src,
    alt: names[img.key as keyof typeof names] || img.key
  }));
  return (
    <div className="min-h-screen bg-background pt-20">
      <Navigation />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Flora of Faro Querandí</h1>
          <p className="text-xl text-muted-foreground mb-8">
            The coastal dunes of Faro Querandí host a surprising diversity of hardy plant
            species adapted to shifting sands, salty winds, and intense sun. Below is a visual
            catalogue of some of the native grasses, shrubs, and wildflowers you can discover
            while wandering the 9-hectare grounds of Recharge Retreat and the surrounding nature reserve.
          </p>

          <FloraGallery images={floraImages} />
        </div>
      </section>
      <Footer />
    </div>
  )
}