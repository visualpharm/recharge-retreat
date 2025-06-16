"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { useTranslation } from "@/components/translation-provider"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

export default function BunkerArgentinaPage() {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen bg-background pt-20">
      <Navigation />
      <main className="container mx-auto px-4 py-12">

        <h1 className="text-left text-4xl md:text-5xl font-bold mb-10">{t('bunkerArgentina.title')}</h1>

        {/* Section 1: Introduction */}
        <section className="mb-16">
          <h2 className="text-left text-3xl font-bold mb-6">{t('bunkerArgentina.intro.headline')}</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg text-muted-foreground leading-relaxed">{t('bunkerArgentina.intro.paragraph')}</p>
            </div>
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/shelter/cabin-landscape.jpg" // Broad view
                alt="Bunker in Argentina - Recharge Retreat Landscape"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </section>

        {/* Section 2: Recharge Retreat - Premier Bunker */}
        <section className="mb-16">
          <h2 className="text-left text-3xl font-bold mb-8">{t('bunkerArgentina.premierBunker.headline')}</h2>
          <div className="space-y-8">
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-primary">{t('bunkerArgentina.premierBunker.modernApproach.title')}</h3>
                <p className="text-muted-foreground">{t('bunkerArgentina.premierBunker.modernApproach.text')}</p>
              </CardContent>
            </Card>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{t('bunkerArgentina.premierBunker.privacy.title')}</h3>
                  <p className="text-muted-foreground">{t('bunkerArgentina.premierBunker.privacy.text')}</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{t('bunkerArgentina.premierBunker.autonomy.title')}</h3>
                  <p className="text-muted-foreground">{t('bunkerArgentina.premierBunker.autonomy.text')}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Section 3: Key Attributes */}
        <section className="mb-16">
          <h2 className="text-left text-3xl font-bold mb-8">{t('bunkerArgentina.keyAttributes.headline')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">{t('bunkerArgentina.keyAttributes.estate.title')}</h3>
                <p className="text-sm text-muted-foreground">{t('bunkerArgentina.keyAttributes.estate.text')}</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">{t('bunkerArgentina.keyAttributes.energy.title')}</h3>
                <p className="text-sm text-muted-foreground">{t('bunkerArgentina.keyAttributes.energy.text')}</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">{t('bunkerArgentina.keyAttributes.utilities.title')}</h3>
                <p className="text-sm text-muted-foreground">{t('bunkerArgentina.keyAttributes.utilities.text')}</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">{t('bunkerArgentina.keyAttributes.climate.title')}</h3>
                <p className="text-sm text-muted-foreground">{t('bunkerArgentina.keyAttributes.climate.text')}</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">{t('bunkerArgentina.keyAttributes.location.title')}</h3>
                <p className="text-sm text-muted-foreground">{t('bunkerArgentina.keyAttributes.location.text')}</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Section 4: Bunker Lifestyle */}
        <section className="mb-16">
          <h2 className="text-left text-3xl font-bold mb-6">{t('bunkerArgentina.lifestyle.headline')}</h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">{t('bunkerArgentina.lifestyle.paragraph')}</p>
        </section>

        {/* Section 5: Explore Bunker */}
        <section className="py-12 text-center bg-muted/30 rounded-lg">
          <h2 className="text-3xl font-bold mb-4">{t('bunkerArgentina.explore.headline')}</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">{t('bunkerArgentina.explore.paragraph')}</p>
          <Link href="/en/shelter">
            <Button size="lg" className="text-lg px-8">
              {t('bunkerArgentina.explore.button')}
            </Button>
          </Link>
        </section>

      </main>
      <Footer />
    </div>
  )
}
