"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { useTranslation } from "@/components/translation-provider"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

export default function SurvivalBunkerArgentinaPage() {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen bg-background pt-20">
      <Navigation />
      <main className="container mx-auto px-4 py-12">

        <h1 className="text-left text-4xl md:text-5xl font-bold mb-10">{t('survivalBunkerArgentina.title')}</h1>

        {/* Section 1: Introduction */}
        <section className="mb-16">
          <h2 className="text-left text-3xl font-bold mb-6">{t('survivalBunkerArgentina.intro.headline')}</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg text-muted-foreground leading-relaxed">{t('survivalBunkerArgentina.intro.paragraph')}</p>
            </div>
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/shelter/cabin-exterior-3.jpg" // Side view, looks solid
                alt="Survival Bunker in Argentina - Recharge Retreat"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </section>

        {/* Section 2: Recharge Retreat - Premier Survival Bunker */}
        <section className="mb-16">
          <h2 className="text-left text-3xl font-bold mb-8">{t('survivalBunkerArgentina.premierBunker.headline')}</h2>
          <div className="space-y-8">
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-primary">{t('survivalBunkerArgentina.premierBunker.postMeltdown.title')}</h3>
                <p className="text-muted-foreground">{t('survivalBunkerArgentina.premierBunker.postMeltdown.text')}</p>
              </CardContent>
            </Card>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{t('survivalBunkerArgentina.premierBunker.seclusion.title')}</h3>
                  <p className="text-muted-foreground">{t('survivalBunkerArgentina.premierBunker.seclusion.text')}</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{t('survivalBunkerArgentina.premierBunker.lifeSupport.title')}</h3>
                  <p className="text-muted-foreground">{t('survivalBunkerArgentina.premierBunker.lifeSupport.text')}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Section 3: Core Features */}
        <section className="mb-16">
          <h2 className="text-left text-3xl font-bold mb-8">{t('survivalBunkerArgentina.coreFeatures.headline')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">{t('survivalBunkerArgentina.coreFeatures.compound.title')}</h3>
                <p className="text-sm text-muted-foreground">{t('survivalBunkerArgentina.coreFeatures.compound.text')}</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">{t('survivalBunkerArgentina.coreFeatures.energy.title')}</h3>
                <p className="text-sm text-muted-foreground">{t('survivalBunkerArgentina.coreFeatures.energy.text')}</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">{t('survivalBunkerArgentina.coreFeatures.water.title')}</h3>
                <p className="text-sm text-muted-foreground">{t('survivalBunkerArgentina.coreFeatures.water.text')}</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">{t('survivalBunkerArgentina.coreFeatures.shielding.title')}</h3>
                <p className="text-sm text-muted-foreground">{t('survivalBunkerArgentina.coreFeatures.shielding.text')}</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">{t('survivalBunkerArgentina.coreFeatures.sustenance.title')}</h3>
                <p className="text-sm text-muted-foreground">{t('survivalBunkerArgentina.coreFeatures.sustenance.text')}</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Section 4: Life in Your Bunker */}
        <section className="mb-16">
          <h2 className="text-left text-3xl font-bold mb-6">{t('survivalBunkerArgentina.livability.headline')}</h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">{t('survivalBunkerArgentina.livability.paragraph')}</p>
        </section>

        {/* Section 5: Invest in Your Bunker */}
        <section className="py-12 text-center bg-muted/30 rounded-lg">
          <h2 className="text-3xl font-bold mb-4">{t('survivalBunkerArgentina.investBunker.headline')}</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">{t('survivalBunkerArgentina.investBunker.paragraph')}</p>
          <Link href="/en/shelter">
            <Button size="lg" className="text-lg px-8">
              {t('survivalBunkerArgentina.investBunker.button')}
            </Button>
          </Link>
        </section>

      </main>
      <Footer />
    </div>
  )
}
