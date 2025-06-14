"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Signal, Building2, TreePine, Book, Footprints, Compass } from "lucide-react"
import Image from "next/image"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ImageGalleryLightbox from "@/components/image-gallery-lightbox"
import { useTranslation } from "@/components/translation-provider"

export default function ActivitiesPage() {
  const { t } = useTranslation()
  return (
    <div className="min-h-screen bg-background pt-20">
      <Navigation />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('activities.title')}</h1>
          <p className="text-xl text-muted-foreground mb-8">
            {t('activities.subtitle')}
          </p>
        </div>
      </section>

      {/* What to Do */}
      <section className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Quiet Activities */}
            <div>
              <h3 className="text-xl font-semibold mb-6 flex items-center">
                <Book className="h-5 w-5 mr-2" /> {t('activities.quiet.title')}
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <p>{t('activities.quiet.read')}</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <p>{t('activities.quiet.journal')}</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <p>{t('activities.quiet.meditate')}</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <p>{t('activities.quiet.stargaze')}</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <p>{t('activities.quiet.coffee')}</p>
                </li>
              </ul>
            </div>

            {/* Active Pursuits */}
            <div>
              <h3 className="text-xl font-semibold mb-6 flex items-center">
                <Footprints className="h-5 w-5 mr-2" /> {t('activities.active.title')}
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <p>{t('activities.active.hike')}</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <p>{t('activities.active.beach')}</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <p>{t('activities.active.wildlife')}</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <p>{t('activities.active.yoga')}</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <p>{t('activities.active.cook')}</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <p>{t('activities.active.fish')}</p>
                </li>
              </ul>
            </div>
          </div>

          {/* Activities Images */}
          <div className="mb-12">
            <ImageGalleryLightbox 
              images={[
                { src: "/images/activities/beach-fishing.png", alt: "Beach fishing activities" },
                { src: "/images/activities/shark-fishing.png", alt: "Shark fishing on the steep coast" },
                { src: "/images/activities/outdoor-activities.png", alt: "Outdoor activities and exploration" },
                { src: "/images/activities/nature-exploration.png", alt: "Nature exploration in the dunes" }
              ]}
              gridCols="grid-cols-2 md:grid-cols-4"
            />
          </div>

          {/* Fishing Video */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-center">{t('activities.fishing.title')}</h3>
            <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.youtube.com/embed/gXvgVHJOcn0?start=16"
                title="Shark Fishing at Recharge Retreat"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
            <p className="text-center text-muted-foreground mt-4">
              {t('activities.fishing.description')}
            </p>
          </div>

        </div>
      </section>

      {/* What if You Can't Handle It? */}
      <section className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Compass className="h-7 w-7 text-primary" />
            <h2 className="text-3xl font-bold">{t('activities.cantHandle.title')}</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Signal className="h-5 w-5 text-green-500" />
                  <Badge variant="secondary">{t('activities.cantHandle.connectivity.badge')}</Badge>
                </div>
                <p className="text-sm text-muted-foreground" dangerouslySetInnerHTML={{__html: t('activities.cantHandle.connectivity.description')}} />
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Building2 className="h-5 w-5 text-blue-500" />
                  <Badge variant="secondary">{t('activities.cantHandle.proximity.badge')}</Badge>
                </div>
                <p className="text-sm text-muted-foreground" dangerouslySetInnerHTML={{__html: t('activities.cantHandle.proximity.description')}} />
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <TreePine className="h-6 w-6 text-emerald-500" />
                  <Badge variant="secondary">{t('activities.cantHandle.alternative.badge')}</Badge>
                </div>
                <p className="text-sm text-muted-foreground" dangerouslySetInnerHTML={{__html: t('activities.cantHandle.alternative.description')}} />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
