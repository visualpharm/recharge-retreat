import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Waves, Building2, ArrowUpRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import SingleImageLightbox from "@/components/single-image-lightbox"
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Location & Directions | Recharge Retreat - Faro Querandí, Argentina',
  description: 'Find your way to our secluded beachfront cabins near Faro Querandí, Argentina. Detailed directions, GPS coordinates, and local attractions for your perfect getaway.',
  openGraph: {
    title: 'Location & Directions | Recharge Retreat - Faro Querandí, Argentina',
    description: 'Plan your journey to our private beachfront retreat. Get detailed directions, GPS coordinates, and explore the surrounding area of Faro Querandí, Argentina.',
    images: [
      {
        url: '/images/location/beach-access.jpg',
        width: 1200,
        height: 630,
        alt: 'Beach access and location of Recharge Retreat near Faro Querandí',
      },
    ],
  },
  alternates: {
    canonical: 'https://recharge-retreat.com/location',
  },
  keywords: [
    'Faro Querandí location',
    'beachfront cabin directions',
    'how to get to Recharge Retreat',
    'GPS coordinates Argentina beach',
    'secluded beach Argentina directions',
    'private beach access Argentina',
    'Faro Querandí how to get there',
    'off-grid cabin location'
  ],
}

export default function LocationPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      {/* Hero Section */}
      <section className="relative py-20 md:py-24 overflow-hidden bg-gradient-to-b from-primary/5 to-background">
        <div className="pt-5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Location</h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Find us in the heart of the dunes, where the ocean meets the sky.
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
                  <span>Open in Google Maps</span>
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </a>
                
                <div>
                  <p className="text-lg font-medium">Recharge Retreat</p>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Where Are You?</h2>
            <div className="w-16 h-1 bg-primary"></div>
          </div>

          {/* Location Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <div className="border-l-2 border-gray-200 pl-4">
              <p className="text-gray-800 leading-relaxed">
                On the <span className="font-semibold text-gray-900">Argentine Atlantic coast</span>, close to the{" "}
                <span className="font-semibold text-gray-900">Faro Querandí Reserve</span>
              </p>
            </div>

            <div className="border-l-2 border-gray-200 pl-4">
              <p className="text-gray-800 leading-relaxed">
                3 km from a <span className="font-semibold text-gray-900">completely empty beach</span>
              </p>
            </div>

            <div className="border-l-2 border-gray-200 pl-4">
              <p className="text-gray-800 leading-relaxed">
                Surrounded by <span className="font-semibold text-gray-900">natural dunes</span>, undeveloped
              </p>
            </div>

            <div className="border-l-2 border-gray-200 pl-4">
              <p className="text-gray-800 leading-relaxed">
                10 km from <span className="font-semibold text-gray-900">Mar de las Pampas</span>, if you regret the isolation
              </p>
            </div>
          </div>

          {/* Directions Section */}
          <div className="mb-16">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">How to Get Here</h2>
              <div className="w-16 h-1 bg-primary"></div>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">By Car</h3>
                <ol className="space-y-2 text-gray-800 pl-5 list-decimal">
                  <li>Take Ruta 11 towards the coast</li>
                  <li>Look for km marker 429.5</li>
                  <li>Turn onto the dirt road (look for our sign)</li>
                  <li>Follow the signs to Recharge Retreat (approximately 1.5km from the main road)</li>
                </ol>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">GPS Coordinates</h3>
                <div className="bg-gray-50 p-4 font-mono text-gray-800 text-sm mb-2">
                  -37.3756° S, -57.0770° W
                </div>
                <p className="text-sm text-gray-500">
                  Use these coordinates if your GPS doesn't recognize the address
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Important Notes</h3>
                <ul className="space-y-2 text-gray-800 pl-5 list-disc">
                  <li>The last part of the road is unpaved but accessible by standard vehicles</li>
                  <li>We recommend arriving during daylight hours for your first visit</li>
                  <li>Detailed arrival instructions will be provided after booking</li>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Where Not to Go</h2>
            <p className="text-gray-600">Google Maps sends you the wrong route (I've reported it, but still). Use this map to turn from the ruta 11.</p>
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
