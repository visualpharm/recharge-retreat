"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Shield, Lock, Zap, Droplets, Thermometer, Wifi } from "lucide-react"
import Image from "next/image"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ImageGalleryLightbox from "@/components/image-gallery-lightbox"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useTranslation } from "@/components/translation-provider"

export default function SurvivalBunkerArgentina() {
  const { t } = useTranslation()
  
  // Bunker images with translations
  const bunkerImages = [
    {
      src: "/images/shelter/cabin-exterior-1.jpg",
      alt: t('survivalBunker.images.main.alt'),
      caption: t('survivalBunker.images.main.caption')
    },
    {
      src: "/images/shelter/entrance.jpg",
      alt: t('survivalBunker.images.entrance.alt')
    },
    {
      src: "/images/shelter/front.jpg",
      alt: t('survivalBunker.images.front.alt')
    },
    {
      src: "/images/shelter/cabin-landscape.jpg",
      alt: t('survivalBunker.images.landscape.alt'),
      caption: t('survivalBunker.images.landscape.caption')
    },
    {
      src: "/images/shelter/cabin-exterior-3.jpg",
      alt: t('survivalBunker.images.side.alt')
    },
    {
      src: "/images/shelter/outdoor-chair.jpg",
      alt: t('survivalBunker.images.outdoor.alt')
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
            alt={t('survivalBunker.hero.alt')}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
            {t('survivalBunker.hero.title')}
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto drop-shadow-lg">
            {t('survivalBunker.hero.subtitle')}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('survivalBunker.title')}</h1>
              <p className="text-xl text-muted-foreground">
                {t('survivalBunker.subtitle')}
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 text-2xl font-bold">
                  {t('survivalBunker.whyArgentina.title')}
                </div>
                <p className="text-lg">
                  {t('survivalBunker.whyArgentina.description')}
                </p>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <span>•</span>
                    <span><strong>{t('survivalBunker.whyArgentina.points.neutral.title')}:</strong> {t('survivalBunker.whyArgentina.points.neutral.description')}</span>
                  </li>
                  <li className="flex gap-3">
                    <span>•</span>
                    <span><strong>{t('survivalBunker.whyArgentina.points.disaster.title')}:</strong> {t('survivalBunker.whyArgentina.points.disaster.description')}</span>
                  </li>
                  <li className="flex gap-3">
                    <span>•</span>
                    <span><strong>{t('survivalBunker.whyArgentina.points.resources.title')}:</strong> {t('survivalBunker.whyArgentina.points.resources.description')}</span>
                  </li>
                  <li className="flex gap-3">
                    <span>•</span>
                    <span><strong>{t('survivalBunker.whyArgentina.points.population.title')}:</strong> {t('survivalBunker.whyArgentina.points.population.description')}</span>
                  </li>
                  <li className="flex gap-3">
                    <span>•</span>
                    <span><strong>{t('survivalBunker.whyArgentina.points.offGrid.title')}:</strong> {t('survivalBunker.whyArgentina.points.offGrid.description')}</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 text-2xl font-bold">
                  {t('survivalBunker.whyRecharge.title')}
                </div>
                <p className="text-lg">
                  {t('survivalBunker.whyRecharge.description')}
                </p>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <span>•</span>
                    <span><strong>{t('survivalBunker.whyRecharge.points.wilderness.title')}:</strong> {t('survivalBunker.whyRecharge.points.wilderness.description')}</span>
                  </li>
                  <li className="flex gap-3">
                    <span>•</span>
                    <span><strong>{t('survivalBunker.whyRecharge.points.safety.title')}:</strong> {t('survivalBunker.whyRecharge.points.safety.description')}</span>
                  </li>
                  <li className="flex gap-3">
                    <span>•</span>
                    <span><strong>{t('survivalBunker.whyRecharge.points.selfSufficient.title')}:</strong> {t('survivalBunker.whyRecharge.points.selfSufficient.description')}</span>
                  </li>
                  <li className="flex gap-3">
                    <span>•</span>
                    <span><strong>{t('survivalBunker.whyRecharge.points.abundance.title')}:</strong> {t('survivalBunker.whyRecharge.points.abundance.description')}</span>
                  </li>
                  <li className="flex gap-3">
                    <span>•</span>
                    <span><strong>{t('survivalBunker.whyRecharge.points.location.title')}:</strong> {t('survivalBunker.whyRecharge.points.location.description')}</span>
                  </li>
                </ul>
                <p className="text-lg font-medium">
                  {t('survivalBunker.whyRecharge.tagline')}
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-4xl mx-auto space-y-16">
          <section className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">{t('survivalBunker.construction.title')}</h2>
              <p className="text-lg text-muted-foreground">
                {t('survivalBunker.construction.description')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold">{t('survivalBunker.approach.title')}</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <Shield className="h-5 w-5 mt-0.5 text-primary flex-shrink-0" />
                        <div>
                          <p className="font-medium">{t('survivalBunker.approach.construction.title')}</p>
                          <p className="text-sm text-muted-foreground">{t('survivalBunker.approach.construction.description')}</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <Lock className="h-5 w-5 mt-0.5 text-primary flex-shrink-0" />
                        <div>
                          <p className="font-medium">{t('survivalBunker.approach.security.title')}</p>
                          <p className="text-sm text-muted-foreground">{t('survivalBunker.approach.security.description')}</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <Thermometer className="h-5 w-5 mt-0.5 text-primary flex-shrink-0" />
                        <div>
                          <p className="font-medium">{t('survivalBunker.approach.insulation.title')}</p>
                          <p className="text-sm text-muted-foreground">{t('survivalBunker.approach.insulation.description')}</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold">{t('survivalBunker.services.title')}</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <Zap className="h-5 w-5 mt-0.5 text-primary flex-shrink-0" />
                        <div>
                          <p className="font-medium">{t('survivalBunker.services.solar.title')}</p>
                          <p className="text-sm text-muted-foreground">{t('survivalBunker.services.solar.description')}</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <Droplets className="h-5 w-5 mt-0.5 text-primary flex-shrink-0" />
                        <div>
                          <p className="font-medium">{t('survivalBunker.services.water.title')}</p>
                          <p className="text-sm text-muted-foreground">{t('survivalBunker.services.water.description')}</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <Wifi className="h-5 w-5 mt-0.5 text-primary flex-shrink-0" />
                        <div>
                          <p className="font-medium">{t('survivalBunker.services.offGrid.title')}</p>
                          <p className="text-sm text-muted-foreground">{t('survivalBunker.services.offGrid.description')}</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-bold">{t('survivalBunker.gallery.title')}</h2>
            <div className="rounded-lg overflow-hidden">
              <ImageGalleryLightbox images={bunkerImages} />
            </div>
          </section>

          <section className="bg-muted/50 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">{t('survivalBunker.cta.title')}</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              {t('survivalBunker.cta.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/book">{t('common.actions.bookStay')}</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="mailto:ciao@ilbuco.com.ar" className="no-underline">{t('common.actions.discussProject')}</a>
              </Button>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold">{t('common.exploreSolutions')}</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <Link href="/argentina-shelter">
                  <CardContent className="p-6 hover:bg-muted/50 transition-colors">
                    <h3 className="font-semibold mb-2">{t('common.solutions.argentinaShelter.title')}</h3>
                    <p className="text-sm text-muted-foreground">{t('common.solutions.argentinaShelter.description')}</p>
                  </CardContent>
                </Link>
              </Card>
              <Card>
                <Link href="/survival-shelters-argentina">
                  <CardContent className="p-6 hover:bg-muted/50 transition-colors">
                    <h3 className="font-semibold mb-2">{t('common.solutions.survivalShelters.title')}</h3>
                    <p className="text-sm text-muted-foreground">{t('common.solutions.survivalShelters.description')}</p>
                  </CardContent>
                </Link>
              </Card>
              <Card>
                <Link href="/bunker-argentina">
                  <CardContent className="p-6 hover:bg-muted/50 transition-colors">
                    <h3 className="font-semibold mb-2">{t('common.solutions.bunkerArgentina.title')}</h3>
                    <p className="text-sm text-muted-foreground">{t('common.solutions.bunkerArgentina.description')}</p>
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
