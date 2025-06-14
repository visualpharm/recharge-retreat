"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Flame, Droplets, Sun, Thermometer, Wifi, Utensils, Bed, Zap, ChefHat, Gift, Heater } from "lucide-react"
import Image from "next/image"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ImageGalleryLightbox from "@/components/image-gallery-lightbox"
import { useTranslation } from "@/components/translation-provider"

// Shelter exterior images
const shelterImages = [
  {
    src: "/images/shelter/cabin-exterior-1.jpg",
    alt: "Main view of the self-sufficient shelter",
    caption: "Self-Sufficient Shelter"
  },
  {
    src: "/images/shelter/entrance.jpg",
    alt: "Entrance to the shelter"
  },
  {
    src: "/images/shelter/front.jpg",
    alt: "Front view of the shelter"
  },
  {
    src: "/images/shelter/cabin-landscape.jpg",
    alt: "The shelter in its natural dune environment",
    caption: "Surrounded by Natural Dunes"
  },
  {
    src: "/images/shelter/cabin-exterior-3.jpg",
    alt: "Side view of the shelter"
  },
  {
    src: "/images/shelter/outdoor-chair.jpg",
    alt: "Outdoor relaxation area"
  }
]

// Comfort images
const comfortImages = [
  {
    src: "/images/comfort/bedroom.webp",
    alt: "Comfortable bedroom area",
    caption: "Restful Sleep"
  },
  {
    src: "/images/comfort/window_view.webp",
    alt: "Panoramic window view",
    caption: "Panoramic Views"
  },
  {
    src: "/images/comfort/toilet.webp",
    alt: "Modern bathroom facilities"
  },
  {
    src: "/images/comfort/rancho.webp",
    alt: "Comfortable seating area inside the cabin"
  }
]

export default function ShelterPage() {
  const { t } = useTranslation()
  return (
    <div className="min-h-screen bg-background pt-20">
      <Navigation />

      <div className="container mx-auto px-4 max-w-5xl">
        {/* Hero Section */}
        <section className="py-12">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('shelter.title')}</h1>
            <p className="text-xl text-muted-foreground">
              {t('shelter.subtitle')}
            </p>
          </div>
        </section>

        {/* Shelter Exterior Section */}
        <section className="pt-4 pb-12">
          <div className="mb-8">
            <ImageGalleryLightbox 
              images={shelterImages}
              gridCols="grid-cols-2 md:grid-cols-3"
            />
          </div>
          
          {/* Exterior Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <Card className="h-full">
              <CardContent className="p-6 h-full">
                <div className="flex items-start gap-4">
                  <Sun className="h-6 w-6 text-amber-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">{t('shelter.exterior.solarPowered.title')}</h3>
                    <p className="text-muted-foreground">
                      {t('shelter.exterior.solarPowered.description')}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="h-full">
              <CardContent className="p-6 h-full">
                <div className="flex items-start gap-4">
                  <Thermometer className="h-6 w-6 text-blue-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">{t('shelter.exterior.insulated.title')}</h3>
                    <p className="text-muted-foreground">
                      {t('shelter.exterior.insulated.description')}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Cabin Comforts Section */}
        <section className="py-8">
          <h2 className="text-3xl font-bold mb-8">{t('shelter.comforts.title')}</h2>

          {/* Comfort Images Gallery */}
          <div className="mb-8">
            <ImageGalleryLightbox 
              images={comfortImages}
              gridCols="grid-cols-2 md:grid-cols-2"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <Card className="h-full">
              <CardContent className="p-6 h-full">
                <div className="flex items-start gap-4">
                  <Zap className="h-6 w-6 text-yellow-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">{t('shelter.comforts.solarSystem.title')}</h3>
                    <p className="text-muted-foreground">
                      {t('shelter.comforts.solarSystem.description')}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="h-full">
              <CardContent className="p-6 h-full">
                <div className="flex items-start gap-4">
                  <Droplets className="h-6 w-6 text-blue-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">{t('shelter.comforts.hotShower.title')}</h3>
                    <p className="text-muted-foreground">
                      {t('shelter.comforts.hotShower.description')}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="h-full">
              <CardContent className="p-6 h-full">
                <div className="flex items-start gap-4">
                  <ChefHat className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">{t('shelter.comforts.kitchen.title')}</h3>
                    <p className="text-muted-foreground">
                      {t('shelter.comforts.kitchen.description')}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="h-full">
              <CardContent className="p-6 h-full">
                <div className="flex items-start gap-4">
                  <Gift className="h-6 w-6 text-purple-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">{t('shelter.comforts.amenities.title')}</h3>
                    <p className="text-muted-foreground">
                      {t('shelter.comforts.amenities.description')}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="h-full">
              <CardContent className="p-6 h-full">
                <div className="flex items-start gap-4">
                  <Heater className="h-6 w-6 text-orange-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">{t('shelter.comforts.climate.title')}</h3>
                    <p className="text-muted-foreground">
                      {t('shelter.comforts.climate.description')}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="h-full">
              <CardContent className="p-6 h-full">
                <div className="flex items-start gap-4">
                  <Bed className="h-6 w-6 text-gray-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">{t('shelter.comforts.sleeping.title')}</h3>
                    <p className="text-muted-foreground">
                      {t('shelter.comforts.sleeping.description')}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* What's Not Included */}
          <Card className="border-2 border-orange-500/20 bg-orange-500/5 mt-12">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">{t('shelter.notIncluded.title')}</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Wifi className="h-5 w-5 text-orange-500 mt-1 flex-shrink-0" />
                  <span dangerouslySetInnerHTML={{__html: t('shelter.notIncluded.noWifi')}} />
                </li>
                <li className="flex items-start gap-3">
                  <span className="inline-block h-5 w-5 text-center text-orange-500 mt-1 flex-shrink-0">!</span>
                  <span dangerouslySetInnerHTML={{__html: t('shelter.notIncluded.linens')}} />
                </li>
                <li className="flex items-start gap-3">
                  <span className="inline-block h-5 w-5 text-center text-orange-500 mt-1 flex-shrink-0">!</span>
                  <span dangerouslySetInnerHTML={{__html: t('shelter.notIncluded.electricity')}} />
                </li>
              </ul>
            </CardContent>
          </Card>

    
        </section>
      </div>
      <Footer />
    </div>
  )
}
