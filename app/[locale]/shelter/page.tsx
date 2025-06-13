import { Card, CardContent } from "@/components/ui/card"
import { Flame, Droplets, Sun, Thermometer, Wifi, Utensils, Bed, Zap, ChefHat, Gift, Heater } from "lucide-react"
import Image from "next/image"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ImageGalleryLightbox from "@/components/image-gallery-lightbox"
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
    src: "/images/shelter/entrance.jpg",
    alt: "Entrance to the shelter"
  },
  {
    src: "/images/shelter/front.jpg",
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
          <div className="mb-8">
            <ImageGalleryLightbox 
              images={shelterImages}
              gridCols="grid-cols-2 md:grid-cols-3"
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
          <div className="mb-8">
            <ImageGalleryLightbox 
              images={comfortImages}
              gridCols="grid-cols-2 md:grid-cols-2"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <Card className="h-full">
              <CardContent className="p-6 h-full">
                <div className="flex items-start gap-4">
                  <Zap className="h-6 w-6 text-yellow-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Solar Power System</h3>
                    <p className="text-muted-foreground">
                      Equipped with solar panels providing lights and standard 220V outlets for all your devices.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="h-full">
              <CardContent className="p-6 h-full">
                <div className="flex items-start gap-4">
                  <Droplets className="h-6 w-6 text-blue-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Hot Shower</h3>
                    <p className="text-muted-foreground">
                      Private bathroom with hot shower for comfortable hygiene routines.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="h-full">
              <CardContent className="p-6 h-full">
                <div className="flex items-start gap-4">
                  <ChefHat className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Full Kitchen</h3>
                    <p className="text-muted-foreground">
                      Stove, fridge, and complete cookware: plates, cutlery, glasses, pots, pans, kettle, and all cooking utensils.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="h-full">
              <CardContent className="p-6 h-full">
                <div className="flex items-start gap-4">
                  <Gift className="h-6 w-6 text-purple-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Welcome Amenities</h3>
                    <p className="text-muted-foreground">
                      Complimentary welcome tea and sweets to start your retreat experience.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="h-full">
              <CardContent className="p-6 h-full">
                <div className="flex items-start gap-4">
                  <Heater className="h-6 w-6 text-orange-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Climate Control</h3>
                    <p className="text-muted-foreground">
                      Well-insulated with gas heating, suitable for cold climates and comfortable year-round.
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
          </div>

          {/* What's Not Included */}
          <Card className="border-2 border-orange-500/20 bg-orange-500/5 mt-12">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">What's Not Included</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Wifi className="h-5 w-5 text-orange-500 mt-1 flex-shrink-0" />
                  <span>
                    <strong>No WiFi</strong> - We present this as a place to disconnect. However, there is good mobile internet reception from all carriers for when you need it.
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
