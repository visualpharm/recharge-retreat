import { Card, CardContent } from "@/components/ui/card"
import { Flame, Droplets, Sun, Thermometer, Wifi, Utensils, Bed } from "lucide-react"
import Image from "next/image"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import CSSMasonryGallery from "@/components/css-masonry-gallery"
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Self-Sufficient Beachfront Shelter | Recharge Retreat Argentina',
  description: 'Experience sustainable off-grid living in our self-sufficient beachfront shelter. Solar power, rainwater collection, and modern comforts in a private dune setting near Faro Querandí.',
  openGraph: {
    title: 'Self-Sufficient Beachfront Shelter | Recharge Retreat Argentina',
    description: 'Discover our eco-friendly shelter with solar power, rainwater collection, and stunning ocean views. Perfect for a digital detox in nature.',
    images: [
      {
        url: '/images/shelter/cabin-exterior-1.jpg',
        width: 1200,
        height: 630,
        alt: 'Self-sufficient beachfront shelter at Recharge Retreat',
      },
    ],
  },
  alternates: {
    canonical: 'https://recharge-retreat.com/shelter',
  },
  keywords: [
    'self-sufficient shelter Argentina',
    'off-grid beach cabin',
    'sustainable beach house',
    'solar powered cabin Argentina',
    'eco-friendly beach retreat',
    'private beach shelter',
    'sustainable tourism Argentina',
    'off-grid living'
  ],
}

// Shelter exterior images
const shelterImages = [
  {
    src: "/images/shelter/cabin-exterior-1.jpg",
    alt: "Main view of the self-sufficient shelter",
    caption: "Self-Sufficient Shelter"
  },
  {
    src: "/images/shelter/cabin-exterior-2.jpg",
    alt: "Front view of the shelter"
  },
  {
    src: "/images/shelter/cabin-landscape.jpg",
    alt: "The shelter in its natural dune environment",
    caption: "Surrounded by Natural Dunes"
  },
  {
    src: "/images/shelter/cabin-exterior-3.jpg",
    alt: "Side view of the shelter"
  },
  {
    src: "/images/shelter/outdoor-chair.jpg",
    alt: "Outdoor relaxation area"
  }
]

// Comfort images
const comfortImages = [
  {
    src: "/images/comfort/bedroom.webp",
    alt: "Comfortable bedroom area",
    caption: "Restful Sleep"
  },
  {
    src: "/images/comfort/window_view.webp",
    alt: "Panoramic window view",
    caption: "Panoramic Views"
  },
  {
    src: "/images/comfort/toilet.webp",
    alt: "Modern bathroom facilities"
  },
  {
    src: "/images/comfort/rancho.webp",
    alt: "Comfortable seating area inside the cabin"
  }
]

export default function ShelterPage() {
  return (
    <div className="min-h-screen bg-background pt-20">
      <Navigation />

      <div className="container mx-auto px-4 max-w-5xl">
        {/* Hero Section */}
        <section className="py-12">
          <div className="max-w-4xl">
            <h1 className="text-4xl font-bold mb-6">The Shelter</h1>
            <p className="text-xl text-muted-foreground">
              A self-sufficient refuge designed for disconnection and recharging.
            </p>
          </div>
        </section>

        {/* Shelter Exterior Section */}
        <section className="pt-4 pb-12">
          <div className="w-full overflow-hidden mb-8">
            <CSSMasonryGallery 
              images={shelterImages}
              className="-mx-2"
              gap="0.5rem"
            />
          </div>
          
          {/* Exterior Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <Card className="h-full">
              <CardContent className="p-6 h-full">
                <div className="flex items-start gap-4">
                  <Sun className="h-6 w-6 text-amber-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Solar Powered</h3>
                    <p className="text-muted-foreground">
                      Fully self-sufficient with solar panels providing all the electricity you need.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="h-full">
              <CardContent className="p-6 h-full">
                <div className="flex items-start gap-4">
                  <Thermometer className="h-6 w-6 text-blue-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Well Insulated</h3>
                    <p className="text-muted-foreground">
                      Stays cool in summer and warm in winter with natural insulation.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Cabin Comforts Section */}
        <section className="py-8">
          <h2 className="text-3xl font-bold mb-8">Cabin Comforts</h2>

          {/* Comfort Images Gallery */}
          <div className="w-full overflow-hidden mb-8">
            <CSSMasonryGallery 
              images={comfortImages}
              className="-mx-2"
              gap="0.5rem"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <Card className="h-full">
              <CardContent className="p-6 h-full">
                <div className="flex items-start gap-4">
                  <Droplets className="h-6 w-6 text-blue-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Hot Shower</h3>
                    <p className="text-muted-foreground">
                      Solar-heated water for comfortable showers even in the middle of nowhere.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="h-full">
              <CardContent className="p-6 h-full">
                <div className="flex items-start gap-4">
                  <Flame className="h-6 w-6 text-orange-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Fire Pit</h3>
                    <p className="text-muted-foreground">
                      Outdoor fire pit for cooking and evening gatherings under the stars.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="h-full">
              <CardContent className="p-6 h-full">
                <div className="flex items-start gap-4">
                  <Bed className="h-6 w-6 text-gray-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Comfortable Sleeping</h3>
                    <p className="text-muted-foreground">
                      Quality mattress and bedding for restful nights after days in nature.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="h-full">
              <CardContent className="p-6 h-full">
                <div className="flex items-start gap-4">
                  <Utensils className="h-6 w-6 text-gray-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Basic Kitchen</h3>
                    <p className="text-muted-foreground">
                      Essential cooking equipment and utensils for preparing meals.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* What's Not Included */}
          <Card className="border-2 border-orange-500/20 bg-orange-500/5 mt-12">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">What's Not Included</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Wifi className="h-5 w-5 text-orange-500 mt-1 flex-shrink-0" />
                  <span>
                    <strong>No WiFi</strong> - This is a digital detox space. Mobile signal is available for
                    emergencies.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="inline-block h-5 w-5 text-center text-orange-500 mt-1 flex-shrink-0">!</span>
                  <span>
                    <strong>Bring your own sheets and towels</strong> - We recommend bringing your own linens for
                    comfort.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="inline-block h-5 w-5 text-center text-orange-500 mt-1 flex-shrink-0">!</span>
                  <span>
                    <strong>Limited electricity</strong> - Solar power is sufficient for lights and charging devices,
                    but not for high-consumption appliances.
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>

    
        </section>
      </div>
      <Footer />
    </div>
  )
}
