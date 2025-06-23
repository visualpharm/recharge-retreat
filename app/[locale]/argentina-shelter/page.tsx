"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Flame, Droplets, Sun, Thermometer, Wifi, Utensils, Bed, Shield, MapPin, Globe2 } from "lucide-react"
import Image from "next/image"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ImageGalleryLightbox from "@/components/image-gallery-lightbox"
import { useTranslation } from "@/components/translation-provider"
import Link from "next/link"



export default function ArgentinaShelter() {
  const { t } = useTranslation()
  
  // Shelter exterior images
  const shelterImages = [
    {
      src: "/images/shelter/cabin-exterior-1.jpg",
      alt: t('argentinaShelter.images.main.alt'),
      caption: t('argentinaShelter.images.main.caption')
    },
    {
      src: "/images/shelter/entrance.jpg",
      alt: t('argentinaShelter.images.entrance.alt')
    },
    {
      src: "/images/shelter/front.jpg",
      alt: t('argentinaShelter.images.front.alt')
    },
    {
      src: "/images/shelter/cabin-landscape.jpg",
      alt: t('argentinaShelter.images.landscape.alt'),
      caption: t('argentinaShelter.images.landscape.caption')
    },
    {
      src: "/images/shelter/cabin-exterior-3.jpg",
      alt: t('argentinaShelter.images.side.alt')
    },
    {
      src: "/images/shelter/outdoor-chair.jpg",
      alt: t('argentinaShelter.images.outdoor.alt')
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
            alt={t('argentinaShelter.hero.alt')}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
            {t('argentinaShelter.hero.title')}
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto drop-shadow-lg">
            {t('argentinaShelter.hero.subtitle')}
          </p>
        </div>
      </section>



      {/* Building in Harmony with Nature */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('argentinaShelter.harmony.title')}</h2>
          <p className="text-lg text-muted-foreground">
            {t('argentinaShelter.harmony.description')}
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="pt-0 pb-16">
        <div className="container mx-auto px-4">
          <ImageGalleryLightbox images={shelterImages} />
        </div>
      </section>

      {/* Simple Living in Nature */}
      <main className="container mx-auto px-4 pb-16">
        <div className="max-w-4xl mx-auto space-y-16">
          <section className="space-y-8">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold">{t('argentinaShelter.simpleLiving.title')}</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                {t('argentinaShelter.simpleLiving.description')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold">{t('argentinaShelter.experience.title')}</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <Bed className="h-5 w-5 mt-0.5 text-primary flex-shrink-0" />
                        <span>{t('argentinaShelter.experience.bed')}</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Utensils className="h-5 w-5 text-primary flex-shrink-0" />
                        <span>{t('argentinaShelter.experience.kitchen')}</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Droplets className="h-5 w-5 text-primary flex-shrink-0" />
                        <span>{t('argentinaShelter.experience.shower')}</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Wifi className="h-5 w-5 text-primary flex-shrink-0" />
                        <span>{t('argentinaShelter.experience.internet')}</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold">{t('argentinaShelter.features.title')}</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <Sun className="h-5 w-5 text-primary flex-shrink-0" />
                        <span>{t('argentinaShelter.features.solar')}</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Droplets className="h-5 w-5 text-primary flex-shrink-0" />
                        <span>{t('argentinaShelter.features.water')}</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Flame className="h-5 w-5 text-primary flex-shrink-0" />
                        <span>{t('argentinaShelter.features.heating')}</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Thermometer className="h-5 w-5 text-primary flex-shrink-0" />
                        <span>{t('argentinaShelter.features.design')}</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>
      </main>

      {/* 🇦🇷 Why Argentina? */}
      <section className="pt-0 pb-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">{t('argentinaShelter.whyArgentina.title')}</h2>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            <Card>
              <CardContent className="p-6 space-y-2">
                <Shield className="h-6 w-6 text-primary" />
                <p className="font-medium">{t('argentinaShelter.whyArgentina.neutral.title')}</p>
                <p className="text-sm text-muted-foreground">{t('argentinaShelter.whyArgentina.neutral.description')}</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 space-y-2">
                <Thermometer className="h-6 w-6 text-primary" />
                <p className="font-medium">{t('argentinaShelter.whyArgentina.disaster.title')}</p>
                <p className="text-sm text-muted-foreground">{t('argentinaShelter.whyArgentina.disaster.description')}</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 space-y-2">
                <Droplets className="h-6 w-6 text-primary" />
                <p className="font-medium">{t('argentinaShelter.whyArgentina.resources.title')}</p>
                <p className="text-sm text-muted-foreground">{t('argentinaShelter.whyArgentina.resources.description')}</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 space-y-2">
                <MapPin className="h-6 w-6 text-primary" />
                <p className="font-medium">{t('argentinaShelter.whyArgentina.space.title')}</p>
                <p className="text-sm text-muted-foreground">{t('argentinaShelter.whyArgentina.space.description')}</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 space-y-2">
                <Sun className="h-6 w-6 text-primary" />
                <p className="font-medium">{t('argentinaShelter.whyArgentina.offGrid.title')}</p>
                <p className="text-sm text-muted-foreground">{t('argentinaShelter.whyArgentina.offGrid.description')}</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 space-y-2">
                <Globe2 className="h-6 w-6 text-primary" />
                <p className="font-medium">Supply Chain Independence</p>
                <p className="text-sm text-muted-foreground">Minimal reliance on global supply chains—greater autonomy in crises.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 🛖 Why Recharge Retreat? */}
      <section className="pt-0 pb-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">🛖 Why Recharge Retreat?</h2>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            <Card>
              <CardContent className="p-6 space-y-2">
                <Shield className="h-6 w-6 text-primary" />
                <p className="font-medium">9,000 ha Protected Dunes</p>
                <p className="text-sm text-muted-foreground">Bordering a vast reserve where no development is allowed.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 space-y-2">
                <Thermometer className="h-6 w-6 text-primary" />
                <p className="font-medium">Naturally Safe</p>
                <p className="text-sm text-muted-foreground">No floods, earthquakes, or extreme climate risks.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 space-y-2">
                <Sun className="h-6 w-6 text-primary" />
                <p className="font-medium">Solar-Ready & Freshwater</p>
                <p className="text-sm text-muted-foreground">Shallow aquifers and 2,500+ sunshine hours each year.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 space-y-2">
                <Flame className="h-6 w-6 text-primary" />
                <p className="font-medium">Wild Abundance</p>
                <p className="text-sm text-muted-foreground">Firewood, fish, herbs, small game—nature provides.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 space-y-2">
                <MapPin className="h-6 w-6 text-primary" />
                <p className="font-medium">Secluded yet Accessible</p>
                <p className="text-sm text-muted-foreground">Hidden in native pines, minutes from boutique comforts.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 space-y-2 text-center flex flex-col items-center justify-center">
                <p className="text-lg font-medium italic">A place to disappear — without disconnecting.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="pt-0 pb-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Experience Off-Grid Living?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Book your stay at our self-sufficient shelter and experience the beauty of Patagonia in a sustainable way.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/booking">Book Now</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
