"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { useTranslation } from "@/components/translation-provider"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
// Import ImageGalleryLightbox if you use it for the "Why Choose" section
// import ImageGalleryLightbox from "@/components/image-gallery-lightbox"

// Define images for any galleries if used
// const whyChooseGalleryImages = [
//   { src: "/images/shelter/cabin-exterior-1.jpg", alt: "Argentina Shelter main view" },
//   { src: "/images/shelter/cabin-landscape.jpg", alt: "Argentina Shelter in dunes" },
//   { src: "/images/comfort/window_view.webp", alt: "View from Argentina Shelter" }
// ];

export default function ArgentinaShelterPage() {
  const { t } = useTranslation()

  // Note: Meta tags for title and description should ideally be handled by a Head component or Next.js metadata API.
  // This subtask focuses on page body content. Assume t('argentinaShelter.metaTitle') and t('argentinaShelter.metaDescription') are for SEO.

  return (
    <div className="min-h-screen bg-background pt-20">
      <Navigation />
      <main className="container mx-auto px-4 py-12">

        {/* Page Title */}
        <h1 className="text-left text-4xl md:text-5xl font-bold mb-10">{t('argentinaShelter.title')}</h1>

        {/* Section 1: Introduction */}
        <section className="mb-16">
          <h2 className="text-left text-3xl font-bold mb-6">{t('argentinaShelter.intro.headline')}</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg text-muted-foreground leading-relaxed">{t('argentinaShelter.intro.paragraph')}</p>
            </div>
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/shelter/cabin-landscape.jpg"
                alt="Argentina Shelter in its natural dune environment"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </section>

        {/* Section 2: Why Choose Our Argentina Shelter? */}
        <section className="mb-16">
          <h2 className="text-left text-3xl font-bold mb-8">{t('argentinaShelter.whyChoose.headline')}</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">{t('argentinaShelter.whyChoose.privacy.title')}</h3>
                <p className="text-muted-foreground">{t('argentinaShelter.whyChoose.privacy.text')}</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">{t('argentinaShelter.whyChoose.selfSufficiency.title')}</h3>
                <p className="text-muted-foreground">{t('argentinaShelter.whyChoose.selfSufficiency.text')}</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">{t('argentinaShelter.whyChoose.coastalEnvironment.title')}</h3>
                <p className="text-muted-foreground">{t('argentinaShelter.whyChoose.coastalEnvironment.text')}</p>
              </CardContent>
            </Card>
          </div>
          {/* Optional: Add ImageGalleryLightbox here if desired for this section */}
          {/* <ImageGalleryLightbox images={whyChooseGalleryImages} gridCols="grid-cols-1 md:grid-cols-3" /> */}
        </section>

        {/* Section 3: Inside Your Argentina Shelter */}
        <section className="mb-16">
          <h2 className="text-left text-3xl font-bold mb-6">{t('argentinaShelter.inside.headline')}</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6 max-w-3xl">{t('argentinaShelter.inside.paragraph')}</p>
          {/* Consider adding a few key amenity highlights using Cards or a list */}
        </section>

        {/* Section 4: The Experience: Disconnect & Recharge */}
        <section className="mb-16">
          <h2 className="text-left text-3xl font-bold mb-6">{t('argentinaShelter.experience.headline')}</h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">{t('argentinaShelter.experience.paragraph')}</p>
        </section>

        {/* Section 5: Location & Booking */}
        <section className="py-12 text-center bg-muted/30 rounded-lg">
          <h2 className="text-3xl font-bold mb-4">{t('argentinaShelter.locationBooking.headline')}</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">{t('argentinaShelter.locationBooking.paragraph')}</p>
          <Link href="/en/shelter">
            <Button size="lg" className="text-lg px-8">
              {t('argentinaShelter.locationBooking.button')}
            </Button>
          </Link>
        </section>

      </main>
      <Footer />
    </div>
  )
}
