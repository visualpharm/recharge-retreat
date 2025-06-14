"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { Compass, MapPin, Wheat, Signal, Building2, Waves, TreePine, Droplets } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import ImageGallery from "@/components/image-gallery"
import ImageGalleryLightbox from "@/components/image-gallery-lightbox"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { useTranslation } from "@/components/translation-provider"
// Metadata moved to layout for client component

export default function Page() {
  const { t } = useTranslation();
  
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section with Background Image */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/shelter/cabin-exterior-1.jpg"
            alt="Self-sufficient shelter among dunes"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <div className="space-y-8">
              {/* Title without icon */}
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white drop-shadow-lg">
                {t('home.title')}
              </h1>

              <h2 className="text-xl md:text-3xl font-medium tracking-tight text-white leading-tight drop-shadow-lg">
                {t('home.subtitle')}
              </h2>
            </div>

            <div className="flex justify-center">
              <Link href="/shelter">
                <Button size="lg" className="text-lg px-8">
                  {t('home.exploreButton')} <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
              <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
              </div>
            </div>
          </div>
        </div>
      </section>





      {/* Shelter Description - Beautiful Side by Side Layout */}
      <section className="container mx-auto px-4 py-24">
        <div className="max-w-7xl mx-auto">
          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Column - Main Description */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-light text-foreground/90 leading-tight">
                  {t('home.shelter.notHotel')}
                </h2>
                <div className="h-px bg-gradient-to-r from-primary/60 to-transparent"></div>
                <p className="text-lg md:text-xl leading-relaxed text-foreground/80" dangerouslySetInnerHTML={{__html: t('home.shelter.description')}} />
              </div>
            </div>

            {/* Right Column - Collapse Description */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-light text-foreground/90 leading-tight">
                  {t('home.shelter.collapse')}
                </h2>
                <div className="h-px bg-gradient-to-r from-primary/60 to-transparent"></div>
                <p className="text-lg md:text-xl leading-relaxed text-foreground/70" dangerouslySetInnerHTML={{__html: t('home.shelter.collapseDescription')}} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shelter Photos */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Grid of images */}
          <ImageGalleryLightbox 
            images={[
              { src: "/images/shelter/cabin-exterior-2.jpg", alt: "Front view of the shelter" },
              { src: "/images/shelter/outdoor-chair.jpg", alt: "Outdoor contemplation space" },
              { src: "/images/comfort/bedroom.webp", alt: "Covered area with seating" },
              { src: "/images/shelter/cabin-landscape.jpg", alt: "The shelter in its natural environment" }
            ]}
            gridCols="grid-cols-2 md:grid-cols-4"
            className="mb-8"
          />

          {/* Flora and environment */}
          <ImageGalleryLightbox 
            images={[
              { src: "/images/plants/native-plants.jpg", alt: "Native species that survive in the dunes" },
              { src: "/images/plants/nursery.jpg", alt: "Nursery with tree seedlings" },
              { src: "/images/plants/cactus.jpg", alt: "Resilient flora of the environment" }
            ]}
            gridCols="grid md:grid-cols-3"
            imageClassName="aspect-[4/5]"
          />
        </div>
      </section>

      {/* Environment */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">

          {/* All blocks in uniform grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Main property - First item */}
            <Card className="border-2 border-primary/20 bg-primary/5">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold mb-3 text-primary">{t('home.environment.mainProperty.title')}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{__html: t('home.environment.mainProperty.description')}} />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Reserva Ecológica */}
            <Card className="border-2">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <MapPin className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-3 text-green-700 dark:text-green-400">{t('home.environment.protectedReserve.title')}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{__html: t('home.environment.protectedReserve.description')}} />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Aislamiento */}
            <Card className="border-2">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <Wheat className="h-6 w-6 text-amber-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-3 text-amber-700 dark:text-amber-400">{t('home.environment.totalIsolation.title')}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{__html: t('home.environment.totalIsolation.description')}} />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Camino perimetral */}
            <Card className="border-2">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <Compass className="h-6 w-6 text-blue-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-3 text-blue-700 dark:text-blue-400">{t('home.environment.ownReserve.title')}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{__html: t('home.environment.ownReserve.description')}} />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Lago artificial */}
            <Card className="border-2">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <Droplets className="h-6 w-6 text-blue-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-3 text-blue-700 dark:text-blue-400">{t('home.environment.connectivity.title')}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{__html: t('home.environment.connectivity.description')}} />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Vivero */}
            <Card className="border-2">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <TreePine className="h-6 w-6 text-emerald-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-3 text-emerald-700 dark:text-emerald-400">{t('home.environment.proximity.title')}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{__html: t('home.environment.proximity.description')}} />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* La Zona - Photo Gallery */}
      <section className="py-16 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-start gap-4 mb-8">
              <MapPin className="h-7 w-7 text-primary mt-1 flex-shrink-0" />
              <div>
                <h2 className="text-3xl font-bold mb-3">{t('home.zone.title')}</h2>
                <p className="text-lg text-muted-foreground" dangerouslySetInnerHTML={{__html: t('home.zone.description')}} />
              </div>
            </div>

            <ImageGallery />

          </div>
        </div>
      </section>

      {/* ¿Y si no lo aguantás? */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Compass className="h-7 w-7 text-primary" />
            <h2 className="text-3xl font-bold">{t('home.whatIf.title')}</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-2">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <Signal className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-3 text-green-700 dark:text-green-400">{t('home.whatIf.connectivity.title')}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{__html: t('home.whatIf.connectivity.description')}} />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <Building2 className="h-6 w-6 text-blue-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-3 text-blue-700 dark:text-blue-400">{t('home.whatIf.proximity.title')}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{__html: t('home.whatIf.proximity.description')}} />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <TreePine className="h-6 w-6 text-emerald-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-3 text-emerald-700 dark:text-emerald-400">{t('home.whatIf.alternative.title')}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{__html: t('home.whatIf.alternative.description')}} />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>


      <Footer />
    </div>
  )
}
