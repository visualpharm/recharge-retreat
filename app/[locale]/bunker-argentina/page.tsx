"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Shield, Lock, Zap, Droplets, Home, Wifi, MapPin } from "lucide-react"
import Image from "next/image"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ImageGalleryLightbox from "@/components/image-gallery-lightbox"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useTranslation } from "@/components/translation-provider"



export default function BunkerArgentina() {
  const { t } = useTranslation()
  
  // Bunker images with translations
  const bunkerImages = [
    {
      src: "/images/shelter/cabin-exterior-1.jpg",
      alt: t('bunker.images.main.alt'),
      caption: t('bunker.images.main.caption')
    },
    {
      src: "/images/shelter/entrance.jpg",
      alt: t('bunker.images.entrance.alt')
    },
    {
      src: "/images/shelter/front.jpg",
      alt: t('bunker.images.front.alt')
    },
    {
      src: "/images/shelter/cabin-landscape.jpg",
      alt: t('bunker.images.landscape.alt'),
      caption: t('bunker.images.landscape.caption')
    },
    {
      src: "/images/shelter/cabin-exterior-3.jpg",
      alt: t('bunker.images.side.alt')
    },
    {
      src: "/images/shelter/outdoor-chair.jpg",
      alt: t('bunker.images.outdoor.alt')
    }
  ]
  
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/shelter/cabin-exterior-1.jpg"
            alt={t('bunker.hero.alt')}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
            {t('bunker.hero.title')}
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto drop-shadow-lg">
            {t('bunker.hero.subtitle')}
          </p>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('bunker.title')}</h1>
            <p className="text-xl text-muted-foreground">
              {t('bunker.subtitle')}
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 text-2xl font-bold">
                {t('bunker.whyArgentina.title')}
              </div>
              <p className="text-lg">
                {t('bunker.whyArgentina.description')}
              </p>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span>•</span>
                  <span><strong>{t('bunker.whyArgentina.points.neutral.title')}:</strong> {t('bunker.whyArgentina.points.neutral.description')}</span>
                </li>
                <li className="flex gap-3">
                  <span>•</span>
                  <span><strong>{t('bunker.whyArgentina.points.disaster.title')}:</strong> {t('bunker.whyArgentina.points.disaster.description')}</span>
                </li>
                <li className="flex gap-3">
                  <span>•</span>
                  <span><strong>{t('bunker.whyArgentina.points.resources.title')}:</strong> {t('bunker.whyArgentina.points.resources.description')}</span>
                </li>
                <li className="flex gap-3">
                  <span>•</span>
                  <span><strong>{t('bunker.whyArgentina.points.population.title')}:</strong> {t('bunker.whyArgentina.points.population.description')}</span>
                </li>
                <li className="flex gap-3">
                  <span>•</span>
                  <span><strong>{t('bunker.whyArgentina.points.offGrid.title')}:</strong> {t('bunker.whyArgentina.points.offGrid.description')}</span>
                </li>
              </ul>
            </div>
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 text-2xl font-bold">
                {t('bunker.whyRecharge.title')}
              </div>
              <p className="text-lg">
                {t('bunker.whyRecharge.description')}
              </p>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span>•</span>
                  <span><strong>{t('bunker.whyRecharge.points.wilderness.title')}:</strong> {t('bunker.whyRecharge.points.wilderness.description')}</span>
                </li>
                <li className="flex gap-3">
                  <span>•</span>
                  <span><strong>{t('bunker.whyRecharge.points.safety.title')}:</strong> {t('bunker.whyRecharge.points.safety.description')}</span>
                </li>
                <li className="flex gap-3">
                  <span>•</span>
                  <span><strong>{t('bunker.whyRecharge.points.selfSufficient.title')}:</strong> {t('bunker.whyRecharge.points.selfSufficient.description')}</span>
                </li>
                <li className="flex gap-3">
                  <span>•</span>
                  <span><strong>{t('bunker.whyRecharge.points.abundance.title')}:</strong> {t('bunker.whyRecharge.points.abundance.description')}</span>
                </li>
                <li className="flex gap-3">
                  <span>•</span>
                  <span><strong>{t('bunker.whyRecharge.points.location.title')}:</strong> {t('bunker.whyRecharge.points.location.description')}</span>
                </li>
              </ul>
              <p className="text-lg font-medium">
                {t('bunker.whyRecharge.tagline')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto space-y-16">
          <section className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">{t('bunker.harmony.title')}</h2>
              <p className="text-lg text-muted-foreground">
                {t('bunker.harmony.description')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold">{t('bunker.philosophy.title')}</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <Shield className="h-5 w-5 mt-0.5 text-primary flex-shrink-0" />
                        <div>
                          <p className="font-medium">{t('bunker.philosophy.materials.title')}</p>
                          <p className="text-sm text-muted-foreground">{t('bunker.philosophy.materials.description')}</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <Lock className="h-5 w-5 mt-0.5 text-primary flex-shrink-0" />
                        <div>
                          <p className="font-medium">{t('bunker.philosophy.security.title')}</p>
                          <p className="text-sm text-muted-foreground">{t('bunker.philosophy.security.description')}</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <MapPin className="h-5 w-5 mt-0.5 text-primary flex-shrink-0" />
                        <div>
                          <p className="font-medium">{t('bunker.philosophy.locations.title')}</p>
                          <p className="text-sm text-muted-foreground">{t('bunker.philosophy.locations.description')}</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold">{t('bunker.services.title')}</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <Home className="h-5 w-5 mt-0.5 text-primary flex-shrink-0" />
                        <div>
                          <p className="font-medium">{t('bunker.services.interiors.title')}</p>
                          <p className="text-sm text-muted-foreground">{t('bunker.services.interiors.description')}</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <Zap className="h-5 w-5 mt-0.5 text-primary flex-shrink-0" />
                        <div>
                          <p className="font-medium">{t('bunker.services.solar.title')}</p>
                          <p className="text-sm text-muted-foreground">{t('bunker.services.solar.description')}</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <Wifi className="h-5 w-5 mt-0.5 text-primary flex-shrink-0" />
                        <div>
                          <p className="font-medium">{t('bunker.services.offGrid.title')}</p>
                          <p className="text-sm text-muted-foreground">{t('bunker.services.offGrid.description')}</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-bold">{t('bunker.gallery.title')}</h2>
            <div className="rounded-lg overflow-hidden">
              <ImageGalleryLightbox images={bunkerImages} />
            </div>
          </section>

          <section className="bg-muted/50 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">{t('bunker.cta.title')}</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              {t('bunker.cta.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/book">{t('bunker.cta.book')}</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="mailto:ciao@ilbuco.com.ar" className="no-underline">{t('bunker.cta.discuss')}</a>
              </Button>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold">{t('bunker.explore.title')}</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <Link href="/argentina-shelter">
                  <CardContent className="p-6 hover:bg-muted/50 transition-colors">
                    <h3 className="font-semibold mb-2">{t('bunker.explore.argentinaShelter.title')}</h3>
                    <p className="text-sm text-muted-foreground">{t('bunker.explore.argentinaShelter.description')}</p>
                  </CardContent>
                </Link>
              </Card>
              <Card>
                <Link href="/survival-shelters-argentina">
                  <CardContent className="p-6 hover:bg-muted/50 transition-colors">
                    <h3 className="font-semibold mb-2">{t('bunker.explore.survivalShelters.title')}</h3>
                    <p className="text-sm text-muted-foreground">{t('bunker.explore.survivalShelters.description')}</p>
                  </CardContent>
                </Link>
              </Card>
              <Card>
                <Link href="/survival-bunker-argentina">
                  <CardContent className="p-6 hover:bg-muted/50 transition-colors">
                    <h3 className="font-semibold mb-2">{t('bunker.explore.survivalBunker.title')}</h3>
                    <p className="text-sm text-muted-foreground">{t('bunker.explore.survivalBunker.description')}</p>
                  </CardContent>
                </Link>
              </Card>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}
