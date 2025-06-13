import Image from 'next/image'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Flora of Faro Querandí | Recharge Retreat',
  description: 'Explore native plant species thriving in the coastal dunes surrounding Faro Querandí and Recharge Retreat.'
}

// Import images from public directory
const images = [
  '/images/flora-faro-querandi/macela.jpg',
  '/images/flora-faro-querandi/panicum-racemosum.jpg',
  '/images/flora-faro-querandi/grindelia-orientalis.jpg',
  '/images/flora-faro-querandi/herbe-pampa.jpg',
  '/images/flora-faro-querandi/verbena-litoralis.jpg',
  '/images/flora-faro-querandi/spartina-ciliata.jpg',
  '/images/flora-faro-querandi/juncus-acutus.png',
  '/images/flora-faro-querandi/echinocloa-crusgalli.jpg',
  '/images/flora-faro-querandi/abanico-daisy.jpg',
  '/images/flora-faro-querandi/cenchrus-longispinus.png',
  '/images/flora-faro-querandi/muehlenbergia-capillaris.jpg',
  '/images/flora-faro-querandi/ophryosporus-dune.jpg'
];

const altTexts = [
  'Achyrocline satureioides (Macela) flowering on coastal dune',
  'Panicum racemosum grass stabilising sand',
  'Grindelia orientalis and Spartina ciliata in bloom',
  'Cortaderia selloana (Pampas grass) plume',
  'Verbena litoralis adding colour to the dunes',
  'Spartina ciliata colonising wet interdune hollows',
  'Juncus acutus, a sharp-leaved rush thriving in salty soils',
  'Echinocloa crus-galli grass near seasonal lagoon',
  'Native fan daisy hugging the sand',
  'Cenchrus longispinus seed heads (watch your feet!)',
  'Clouds of pink Muehlenbergia capillaris at sunset',
  'Rare Ophryosporus species endemic to the reserve'
];

export default function FloraPage() {
  return (
    <div className="min-h-screen bg-background pt-20">
      <Navigation />
      <main className="container mx-auto px-4 py-12 max-w-5xl">
        <h1 className="text-4xl font-bold mb-6">Flora of Faro Querandí</h1>
        <p className="text-lg text-muted-foreground mb-10">
          The coastal dunes of Faro Querandí host a surprising diversity of hardy plant
          species adapted to shifting sands, salty winds, and intense sun. Below is a visual
          catalogue of some of the native grasses, shrubs, and wildflowers you can discover
          while wandering the 9-hectare grounds of Recharge Retreat and the surrounding nature reserve.
        </p>

        <div className="grid gap-4 md:gap-6" style={{gridTemplateColumns: 'repeat(auto-fill,minmax(220px,1fr))'}}>
          {images.map((src, idx) => (
            <div key={src} className="relative w-full aspect-[4/3] overflow-hidden rounded-lg shadow-sm">
              <Image
                src={src}
                alt={altTexts[idx] || `Flora image ${idx + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
