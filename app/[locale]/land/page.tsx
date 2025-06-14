"use client"

import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Compass, TreePine, Droplets, Shield, Camera, Home } from "lucide-react"
import Image from "next/image"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ImageGalleryLightbox from "@/components/image-gallery-lightbox"
import SingleImageLightbox from "@/components/single-image-lightbox"
import { useTranslation } from "@/components/translation-provider"

export default function LandPage() {
  const { t } = useTranslation()
  return (
    <div className="min-h-screen bg-background pt-20">
      <Navigation />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('land.title')}</h1>
          <p className="text-xl text-muted-foreground mb-8">
            {t('land.subtitle')}
          </p>
        </div>
      </section>

      {/* Aerial Views Gallery */}
      <section className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mb-12">
            {/* Fork - left column */}
            <div 
              className="relative rounded-xl overflow-hidden group shadow-lg hover:shadow-2xl transition-all duration-300 cursor-zoom-in"
              style={{ height: '320px' }}
            >
              <SingleImageLightbox
                src="/images/aereo/fork.webp"
                alt="Aerial view of the property fork"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                containerClassName="w-full h-full"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
            </div>
            
            {/* Ocean - center two columns */}
            <div 
              className="md:col-span-2 relative rounded-xl overflow-hidden group shadow-xl hover:shadow-2xl transition-all duration-300 cursor-zoom-in"
              style={{ height: '320px' }}
            >
              <SingleImageLightbox
                src="/images/aereo/ocean.webp"
                alt="Aerial view towards the ocean"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                containerClassName="w-full h-full"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-sm font-medium text-gray-800">{t('land.oceanView')}</p>
              </div>
            </div>
            
            {/* Lake - right column */}
            <div 
              className="relative rounded-xl overflow-hidden group shadow-lg hover:shadow-2xl transition-all duration-300 cursor-zoom-in"
              style={{ height: '320px' }}
            >
              <SingleImageLightbox 
                src="/images/aereo/lago.webp" 
                alt="Aerial view of the artificial lake" 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-500" 
                containerClassName="w-full h-full"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
            </div>
          </div>
        </div>
      </section>

      {/* The Surroundings */}
      <section className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">

          <div className="space-y-8">
            {/* Main property */}
            <Card className="border-2 border-primary/20 bg-primary/5">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-primary">{t('land.privateProperty.title')}</h3>
                    <p className="text-lg leading-relaxed" dangerouslySetInnerHTML={{__html: t('land.privateProperty.description')}} />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Grid layout for features */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Reserva Ecológica */}
              <Card className="border-2">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-3 text-green-700 dark:text-green-400">{t('land.protectedReserve.title')}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{__html: t('land.protectedReserve.description')}} />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Private Trail */}
              <Card className="border-2">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <Compass className="h-6 w-6 text-blue-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-3 text-blue-700 dark:text-blue-400">{t('land.privateTrail.title')}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{__html: t('land.privateTrail.description')}} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Additional features */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Artificial Lake */}
              <Card className="border-2">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <Droplets className="h-6 w-6 text-blue-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-3 text-blue-700 dark:text-blue-400">{t('land.artificialLake.title')}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {t('land.artificialLake.description')}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Nursery */}
              <Card className="border-2">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <TreePine className="h-6 w-6 text-emerald-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-3 text-emerald-700 dark:text-emerald-400">
                        {t('land.nursery.title')}
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {t('land.nursery.description')}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Shield className="h-7 w-7 text-primary" />
            <h2 className="text-3xl font-bold">{t('land.security.title')}</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Fenced Area */}
            <Card className="border-2">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <Shield className="h-6 w-6 text-amber-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-3 text-amber-700 dark:text-amber-400">{t('land.security.fenced.title')}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{__html: t('land.security.fenced.description')}} />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Security Cameras */}
            <Card className="border-2">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <Camera className="h-6 w-6 text-blue-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-3 text-blue-700 dark:text-blue-400">{t('land.security.surveillance.title')}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{__html: t('land.security.surveillance.description')}} />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Caretaker */}
            <Card className="border-2">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <Home className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-3 text-green-700 dark:text-green-400">{t('land.security.caretaker.title')}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{__html: t('land.security.caretaker.description')}} />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Aerial Map */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="relative aspect-[16/9] rounded-xl overflow-hidden group shadow-xl hover:shadow-2xl transition-all duration-300">
            <SingleImageLightbox src="/images/rancho-aereal-map.jpg" alt="Aerial map view of the property" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="bg-white/95 backdrop-blur-sm px-6 py-3 rounded-xl shadow-lg">
                <p className="text-black font-bold">{t('land.aerialMap.area')}</p>
                <p className="text-sm text-gray-600">{t('land.aerialMap.shape')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Plants Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">{t('land.plants.title')}</h2>
          <ImageGalleryLightbox 
            images={[
              { src: "/images/plants/dunes-sunset.jpeg", alt: "Dunes at sunset" },
              { src: "/images/plants/native-flora.jpeg", alt: "Native flora of the dunes" },
              { src: "/images/plants/water-view.jpeg", alt: "View of the artificial lake" },
              { src: "/images/plants/fence-sunset.jpeg", alt: "Natural boundaries at sunset" },
              { src: "/images/plants/white-flowers.jpeg", alt: "Wild flowers" },
              { src: "/images/plants/tall-grass.jpeg", alt: "Tall grasses" },
              { src: "/images/plants/native-plants.jpg", alt: "Native species that survive in the dunes" },
              { src: "/images/plants/nursery.jpg", alt: "Nursery with tree seedlings" },
              { src: "/images/plants/cactus.jpg", alt: "Resilient flora of the environment" }
            ]}
          />
        </div>
      </section>

      <Footer />
    </div>
  )
}
