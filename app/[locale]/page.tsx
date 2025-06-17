"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { Compass, MapPin, Wheat, Signal, Building2, TreePine, Droplets } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import ImageGallery from "@/components/image-gallery"
import ImageGalleryLightbox from "@/components/image-gallery-lightbox"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { useTranslation } from "@/components/translation-provider"

export default function Page() {
  const { t } = useTranslation();
  
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* HERO SECTION - Full Width */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
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

        <div className="relative z-10 container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <div className="space-y-8">
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

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
              <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SHELTER DESCRIPTION SECTION */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-6">
                {t('home.shelter.notHotel')}
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed" 
                 dangerouslySetInnerHTML={{__html: t('home.shelter.description')}} />
            </div>

            {/* Movie Images Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 max-w-6xl mx-auto">
  <Link 
    href="https://www.rottentomatoes.com/m/mountainhead" 
    target="_blank"
    rel="noopener noreferrer"
    className="group"
  >
    <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow duration-300">
      <Image
        src="/images/argentina-shelter/argentina-mountainhead.jpg"
        alt="Mountainhead movie poster"
        fill
        className="object-cover group-hover:scale-105 transition-transform duration-300"
        sizes="(max-width: 768px) 100vw, 33vw"
      />
    </div>
  </Link>
  <Link 
    href="https://www.rottentomatoes.com/tv/love_death_robots/s03"
    target="_blank"
    rel="noopener noreferrer"
    className="group"
  >
    <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow duration-300">
      <Image
        src="/images/argentina-shelter/lovedeathrobots.jpg"
        alt="Love, Death & Robots poster"
        fill
        className="object-cover group-hover:scale-105 transition-transform duration-300"
        sizes="(max-width: 768px) 100vw, 33vw"
      />
    </div>
  </Link>
  <Link 
    href="https://www.rottentomatoes.com/tv/the_last_of_us/s01/e03"
    target="_blank"
    rel="noopener noreferrer"
    className="group"
  >
    <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow duration-300">
      <Image
        src="/images/argentina-shelter/lastofus.avif"
        alt="The Last of Us poster"
        fill
        className="object-cover group-hover:scale-105 transition-transform duration-300"
        sizes="(max-width: 768px) 100vw, 33vw"
      />
    </div>
  </Link>
</div>

          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto my-12 px-4">
  <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">What's special?</h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {/* Digital Detox Card */}
    <div className="rounded-xl shadow bg-white/80 p-6 flex flex-col items-center text-center">
      <div className="text-3xl mb-3">📴</div>
      <h3 className="font-semibold text-lg mb-2">Digital Detox</h3>
      <p className="text-muted-foreground text-base">No distractions, no WiFi, no TV—just nature, peace, and time to reconnect with yourself and the world around you.</p>
    </div>
    {/* Vast Private Reserve Card */}
    <div className="rounded-xl shadow bg-white/80 p-6 flex flex-col items-center text-center">
      <div className="text-3xl mb-3">🌲</div>
      <h3 className="font-semibold text-lg mb-2">Vast Private Reserve</h3>
      <p className="text-muted-foreground text-base">Surrounded by 9 hectares of private land and bordering a protected reserve—no neighbors, no crowds, just wild nature at your doorstep.</p>
    </div>
    {/* Simple Comfort Card */}
    <div className="rounded-xl shadow bg-white/80 p-6 flex flex-col items-center text-center">
      <div className="text-3xl mb-3">🛏️</div>
      <h3 className="font-semibold text-lg mb-2">Simple Comfort</h3>
      <p className="text-muted-foreground text-base">Essential amenities, cozy interiors, off-grid living—everything you need for rest and inspiration, nothing you don’t.</p>
    </div>
  </div>
</section>

      {/* PHOTO GALLERY SECTION */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            
            <div className="mb-3">
              <ImageGalleryLightbox 
                images={[
                  { src: "/images/shelter/cabin-exterior-2.jpg", alt: "Front view of the shelter" },
                  { src: "/images/shelter/outdoor-chair.jpg", alt: "Outdoor contemplation space" },
                  { src: "/images/comfort/bedroom.webp", alt: "Covered area with seating" },
                  { src: "/images/shelter/cabin-landscape.jpg", alt: "The shelter in its natural environment" }
                ]}
                gridCols="grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3"
                imageClassName="aspect-[4/3] md:aspect-[4/3] w-full"
              />
            </div>
            <ImageGalleryLightbox 
              images={[
                { src: "/images/plants/native-plants.jpg", alt: "Native species that survive in the dunes" },
                { src: "/images/plants/nursery.jpg", alt: "Nursery with tree seedlings" },
                { src: "/images/plants/cactus.jpg", alt: "Resilient flora of the environment" }
              ]}
              gridCols="grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3"
              imageClassName="aspect-[4/3] md:aspect-[4/3] w-full"
            />

          </div>
        </div>
      </section>

      {/* ENVIRONMENT SECTION - 6 Cards in 3 Columns */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            
            <h2 className="text-3xl font-bold mb-12 text-center">The Environment</h2>

            <div className="grid md:grid-cols-3 gap-8">
              
              {/* Private Property */}
              <Card className="border-2 border-primary/20 bg-primary/5 h-full">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-3 h-3 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="text-lg font-semibold mb-4 text-primary">
                        {t('home.environment.mainProperty.title')}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed" 
                         dangerouslySetInnerHTML={{__html: t('home.environment.mainProperty.description')}} />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Protected Reserve */}
              <Card className="border-2 h-full">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold mb-4 text-green-700 dark:text-green-400">
                        {t('home.environment.protectedReserve.title')}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed" 
                         dangerouslySetInnerHTML={{__html: t('home.environment.protectedReserve.description')}} />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Total Isolation */}
              <Card className="border-2 h-full">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <Wheat className="h-6 w-6 text-amber-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold mb-4 text-amber-700 dark:text-amber-400">
                        {t('home.environment.totalIsolation.title')}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed" 
                         dangerouslySetInnerHTML={{__html: t('home.environment.totalIsolation.description')}} />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Private Trail */}
              <Card className="border-2 h-full">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <Compass className="h-6 w-6 text-blue-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold mb-4 text-blue-700 dark:text-blue-400">
                        {t('home.environment.ownReserve.title')}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed" 
                         dangerouslySetInnerHTML={{__html: t('home.environment.ownReserve.description')}} />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Artificial Lake */}
              <Card className="border-2 h-full">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <Droplets className="h-6 w-6 text-blue-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold mb-4 text-blue-700 dark:text-blue-400">
                        {t('home.environment.connectivity.title')}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed" 
                         dangerouslySetInnerHTML={{__html: t('home.environment.connectivity.description')}} />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Native Plant Nursery */}
              <Card className="border-2 h-full">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <TreePine className="h-6 w-6 text-emerald-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold mb-4 text-emerald-700 dark:text-emerald-400">
                        {t('home.environment.proximity.title')}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed" 
                         dangerouslySetInnerHTML={{__html: t('home.environment.proximity.description')}} />
                    </div>
                  </div>
                </CardContent>
              </Card>

            </div>
          </div>
        </div>
      </section>

      {/* THE ZONE SECTION */}
      <section className="py-20 bg-muted/10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-6">
                {t('home.zone.title')}
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto" 
                 dangerouslySetInnerHTML={{__html: t('home.zone.description')}} />
            </div>

            <ImageGallery />

          </div>
        </div>
      </section>

      {/* WHAT IF SECTION - 3 Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            
            <h2 className="text-3xl font-bold mb-12 text-center">
              {t('home.whatIf.title')}
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              
              {/* Cell Signal */}
              <Card className="border-2 h-full">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <Signal className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold mb-4 text-green-700 dark:text-green-400">
                        {t('home.whatIf.connectivity.title')}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed" 
                         dangerouslySetInnerHTML={{__html: t('home.whatIf.connectivity.description')}} />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Nearby Town */}
              <Card className="border-2 h-full">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <Building2 className="h-6 w-6 text-blue-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold mb-4 text-blue-700 dark:text-blue-400">
                        {t('home.whatIf.proximity.title')}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed" 
                         dangerouslySetInnerHTML={{__html: t('home.whatIf.proximity.description')}} />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Alternative (Il Buco) */}
              <Card className="border-2 h-full">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <TreePine className="h-6 w-6 text-emerald-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold mb-4 text-emerald-700 dark:text-emerald-400">
                        {t('home.whatIf.alternative.title')}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed" 
                         dangerouslySetInnerHTML={{__html: t('home.whatIf.alternative.description')}} />
                    </div>
                  </div>
                </CardContent>
              </Card>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}