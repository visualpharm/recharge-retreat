import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Signal, Building2, TreePine, Book, Footprints, Compass } from "lucide-react"
import Image from "next/image"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ImageGalleryLightbox from "@/components/image-gallery-lightbox"
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Activities & Digital Detox Experience | Recharge Retreat',
  description: 'Disconnect to reconnect. Enjoy beach walks, nature exploration, and digital detox activities at our secluded retreat. Perfect for mindfulness and relaxation.',
  openGraph: {
    title: 'Activities & Digital Detox Experience | Recharge Retreat',
    description: 'Experience the art of doing nothing or explore nature. Beach walks, stargazing, and digital detox in a pristine natural setting.',
    images: [
      {
        url: '/images/activities/beach-walk.jpg',
        width: 1200,
        height: 630,
        alt: 'Peaceful beach walk at Recharge Retreat',
      },
    ],
  },
  alternates: {
    canonical: 'https://recharge-retreat.com/activities',
  },
  keywords: [
    'digital detox Argentina',
    'beach activities Faro Querandí',
    'nature retreat activities',
    'mindfulness retreat Argentina',
    'off-grid activities',
    'disconnect to reconnect',
    'beach meditation',
    'stargazing Argentina'
  ],
}

export default function ActivitiesPage() {
  return (
    <div className="min-h-screen bg-background pt-20">
      <Navigation />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">What You'll Do</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Turn the absence of entertainment into a feature. Reconnect with yourself and nature.
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
                <Book className="h-5 w-5 mr-2" /> Quiet Activities
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <p>Read that book you've been putting off</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <p>Journal your thoughts without distractions</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <p>Meditate with panoramic dune views</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <p>Stargaze in one of the darkest skies in the region</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <p>Enjoy your morning coffee in complete silence</p>
                </li>
              </ul>
            </div>

            {/* Active Pursuits */}
            <div>
              <h3 className="text-xl font-semibold mb-6 flex items-center">
                <Footprints className="h-5 w-5 mr-2" /> Active Pursuits
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <p>Hike the 1,200-meter private trail through the dunes</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <p>Walk to the completely empty beach (3km)</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <p>Observe local wildlife and native plants</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <p>Practice yoga or exercise in nature</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <p>Cook over an open fire under the stars</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <p>Fish on the steep coast — you can catch sharks</p>
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
            <h3 className="text-2xl font-bold mb-6 text-center">Shark Fishing Experience</h3>
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
              Experience the thrill of fishing on our steep coastal waters where sharks roam.
            </p>
          </div>

        </div>
      </section>

      {/* What if You Can't Handle It? */}
      <section className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Compass className="h-7 w-7 text-primary" />
            <h2 className="text-3xl font-bold">What If You Can't Handle It?</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Signal className="h-5 w-5 text-green-500" />
                  <Badge variant="secondary">Connectivity</Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  There is <strong>cell phone signal</strong> for emergencies
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Building2 className="h-5 w-5 text-blue-500" />
                  <Badge variant="secondary">Proximity</Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  There is a <strong>town just 5 km away</strong>
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <TreePine className="h-6 w-6 text-emerald-500" />
                  <Badge variant="secondary">Alternative</Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  We offer a <strong>discount to move to Il Buco</strong>, our Italian villa with a{" "}
                  <strong>green terrace</strong> and <strong>500 Mbps WiFi</strong>
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
