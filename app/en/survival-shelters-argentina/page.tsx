"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { useTranslation } from "@/components/translation-provider"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
// Icons can be imported if used in cards, e.g. Shield, Zap, Droplets from lucide-react

export default function SurvivalSheltersArgentinaPage() {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen bg-background pt-20">
      <Navigation />
      <main className="container mx-auto px-4 py-12">

        <h1 className="text-left text-4xl md:text-5xl font-bold mb-10">{t('survivalSheltersArgentina.title')}</h1>

        {/* Section 1: Introduction */}
        <section className="mb-16">
          <h2 className="text-left text-3xl font-bold mb-6">{t('survivalSheltersArgentina.intro.headline')}</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg text-muted-foreground leading-relaxed">{t('survivalSheltersArgentina.intro.paragraph')}</p>
            </div>
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/shelter/cabin-exterior-1.jpg" // Main view, looks robust
                alt="Survival Shelter in Argentina - Recharge Retreat"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </section>

        {/* Section 2: Recharge Retreat - Premier Survival Shelter */}
        <section className="mb-16">
          <h2 className="text-left text-3xl font-bold mb-8">{t('survivalSheltersArgentina.premierShelter.headline')}</h2>
          <div className="space-y-8">
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-primary">{t('survivalSheltersArgentina.premierShelter.postMeltdown.title')}</h3>
                <p className="text-muted-foreground">{t('survivalSheltersArgentina.premierShelter.postMeltdown.text')}</p>
              </CardContent>
            </Card>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{t('survivalSheltersArgentina.premierShelter.seclusion.title')}</h3>
                  <p className="text-muted-foreground">{t('survivalSheltersArgentina.premierShelter.seclusion.text')}</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{t('survivalSheltersArgentina.premierShelter.offGrid.title')}</h3>
                  <p className="text-muted-foreground">{t('survivalSheltersArgentina.premierShelter.offGrid.text')}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Section 3: Key Features */}
        <section className="mb-16">
          <h2 className="text-left text-3xl font-bold mb-8">{t('survivalSheltersArgentina.keyFeatures.headline')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">{t('survivalSheltersArgentina.keyFeatures.land.title')}</h3>
                <p className="text-sm text-muted-foreground">{t('survivalSheltersArgentina.keyFeatures.land.text')}</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">{t('survivalSheltersArgentina.keyFeatures.solar.title')}</h3>
                <p className="text-sm text-muted-foreground">{t('survivalSheltersArgentina.keyFeatures.solar.text')}</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">{t('survivalSheltersArgentina.keyFeatures.water.title')}</h3>
                <p className="text-sm text-muted-foreground">{t('survivalSheltersArgentina.keyFeatures.water.text')}</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">{t('survivalSheltersArgentina.keyFeatures.climate.title')}</h3>
                <p className="text-sm text-muted-foreground">{t('survivalSheltersArgentina.keyFeatures.climate.text')}</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">{t('survivalSheltersArgentina.keyFeatures.kitchen.title')}</h3>
                <p className="text-sm text-muted-foreground">{t('survivalSheltersArgentina.keyFeatures.kitchen.text')}</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Section 4: The Survival Experience */}
        <section className="mb-16">
          <h2 className="text-left text-3xl font-bold mb-6">{t('survivalSheltersArgentina.experience.headline')}</h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">{t('survivalSheltersArgentina.experience.paragraph')}</p>
        </section>

        {/* Section 5: Secure Your Shelter */}
        <section className="py-12 text-center bg-muted/30 rounded-lg">
          <h2 className="text-3xl font-bold mb-4">{t('survivalSheltersArgentina.secureShelter.headline')}</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">{t('survivalSheltersArgentina.secureShelter.paragraph')}</p>
          <Link href="/en/shelter">
            <Button size="lg" className="text-lg px-8">
              {t('survivalSheltersArgentina.secureShelter.button')}
            </Button>
          </Link>
        </section>

      </main>
      <Footer />
    </div>
  )
}
