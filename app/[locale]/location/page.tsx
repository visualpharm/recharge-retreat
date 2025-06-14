"use client"

import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Waves, Building2, ArrowUpRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import SingleImageLightbox from "@/components/single-image-lightbox"
import { useTranslation } from "@/components/translation-provider"

export default function LocationPage() {
  const { t } = useTranslation()
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      {/* Hero Section */}
      <section className="relative py-20 md:py-24 overflow-hidden bg-gradient-to-b from-primary/5 to-background">
        <div className="pt-5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('location.title')}</h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                {t('location.subtitle')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Section */}
      <section className="pt-0 pb-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="-mt-8">
              <div className="w-full h-[400px] rounded-xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.1234567890123!2d-57.0770374!3d-37.3756338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5b5515744056f796!2sRecharge%20Retreat!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                ></iframe>
              </div>
              
              <div className="mt-6 space-y-4">
                <a
                  href="https://maps.app.goo.gl/Qmi7HQApb5oEiKdE8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition-colors"
                >
                  <span>{t('location.openMaps')}</span>
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </a>
                
                <div>
                  <p className="text-lg font-medium">{t('location.address')}</p>
                  <p className="text-gray-600">
                    Parcela 48AT, 7165<br />
                    Partido Villa Gesell, Provincia de Buenos Aires, Argentina
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Where Are You Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">{t('location.whereAreYou.title')}</h2>
            <div className="w-16 h-1 bg-primary"></div>
          </div>

          {/* Location Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <div className="border-l-2 border-gray-200 pl-4">
              <p className="text-gray-800 leading-relaxed" dangerouslySetInnerHTML={{__html: t('location.whereAreYou.coast')}} />
            </div>

            <div className="border-l-2 border-gray-200 pl-4">
              <p className="text-gray-800 leading-relaxed" dangerouslySetInnerHTML={{__html: t('location.whereAreYou.beach')}} />
            </div>

            <div className="border-l-2 border-gray-200 pl-4">
              <p className="text-gray-800 leading-relaxed" dangerouslySetInnerHTML={{__html: t('location.whereAreYou.dunes')}} />
            </div>

            <div className="border-l-2 border-gray-200 pl-4">
              <p className="text-gray-800 leading-relaxed" dangerouslySetInnerHTML={{__html: t('location.whereAreYou.distance')}} />
            </div>
          </div>

          {/* Directions Section */}
          <div className="mb-16">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">{t('location.howToGet.title')}</h2>
              <div className="w-16 h-1 bg-primary"></div>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('location.howToGet.byCar')}</h3>
                <ul className="space-y-3 text-gray-800 pl-5 list-disc">
                  <li dangerouslySetInnerHTML={{__html: t('location.howToGet.step1')}} />
                  <li>{t('location.howToGet.step2')}</li>
                  <li>{t('location.howToGet.step3')}</li>
                  <li dangerouslySetInnerHTML={{__html: t('location.howToGet.warning')}} />
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('location.howToGet.gpsTitle')}</h3>
                <div className="bg-gray-50 p-4 font-mono text-gray-800 text-sm mb-2">
                  -37.3756° S, -57.0770° W
                </div>
                <p className="text-sm text-gray-500">
                  {t('location.howToGet.gpsNote')}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('location.howToGet.notesTitle')}</h3>
                <ul className="space-y-2 text-gray-800 pl-5 list-disc">
                  <li>{t('location.howToGet.note1')}</li>
                  <li>{t('location.howToGet.note2')}</li>
                  <li>{t('location.howToGet.note3')}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>

      {/* Hand-drawn Map Section */}
      <section className="pt-0 pb-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">{t('location.whereNotToGo.title')}</h2>
            <p className="text-gray-600">{t('location.whereNotToGo.description')}</p>
            <div className="w-16 h-1 bg-primary mt-2"></div>
          </div>
          <div className="bg-white rounded-lg overflow-hidden">
            <SingleImageLightbox
              src="/images/directions/Como llegar al rancho@0.5x.png"
              alt="Correct route to Recharge Retreat - turn from ruta 11"
              width={1200}
              height={800}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>
      </section>
      <Footer />
    </div>
  )
}
