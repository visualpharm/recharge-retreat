import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Compass, TreePine, Droplets } from "lucide-react"
import Image from "next/image"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function LandPage() {
  return (
    <div className="min-h-screen bg-background pt-20">
      <Navigation />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">The Land</h1>
          <p className="text-xl text-muted-foreground mb-8">
            9 hectares of pristine dunes and natural beauty, all to yourself.
          </p>
        </div>
      </section>

      {/* Featured Image */}
      <section className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="relative aspect-[21/9] rounded-lg overflow-hidden mb-12">
            <Image
              src="/images/dunes-sunset.jpeg"
              alt="Panoramic view of the dunes at sunset"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* The Surroundings */}
      <section className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="text-2xl">🌾</div>
            <h2 className="text-3xl font-bold">The Surroundings</h2>
          </div>

          <div className="space-y-8">
            {/* Main property */}
            <Card className="border-2 border-primary/20 bg-primary/5">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-primary">Private Property</h3>
                    <p className="text-lg leading-relaxed">
                      <strong>9 hectares of green dunes</strong>, covered by only three native species that manage to
                      survive here — and are surprisingly beautiful.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Grid layout for features */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Reserva Ecológica */}
              <Card className="border-2">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-3 text-green-700 dark:text-green-400">Protected Reserve</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Located steps away from the <strong>Faro Querandí Ecological Reserve</strong>, a protected area
                        of high natural value.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Private Trail */}
              <Card className="border-2">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <Compass className="h-6 w-6 text-blue-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-3 text-blue-700 dark:text-blue-400">Private Trail</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        A <strong>1,200-meter perimeter path between high dunes with panoramic views</strong>, for
                        trekking as if you were walking in your own private reserve.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Additional features */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Artificial Lake */}
              <Card className="border-2">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <Droplets className="h-6 w-6 text-blue-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-3 text-blue-700 dark:text-blue-400">Artificial Lake</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        A small artificial lake where wild animals come to drink, creating a unique ecosystem within the
                        property.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Nursery */}
              <Card className="border-2">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <TreePine className="h-6 w-6 text-emerald-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-3 text-emerald-700 dark:text-emerald-400">
                        Native Plant Nursery
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        A small nursery with native tree seedlings, part of our ongoing effort to preserve and enhance
                        the local ecosystem.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Property Map</h2>
          <div className="relative aspect-[16/9] rounded-lg overflow-hidden">
            <Image src="/images/dunes-sunset.jpeg" alt="Satellite view of the property" fill className="object-cover" />
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
              <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg">
                <p className="text-black font-medium">Recharge Retreat Property</p>
                <p className="text-xs text-gray-600">Route 11, km 429.5 — near Faro Querandí</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">The Natural Environment</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="relative aspect-square rounded-lg overflow-hidden">
              <Image
                src="/images/native-plants.jpg"
                alt="Native plants surviving in the dunes"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-lg overflow-hidden">
              <Image
                src="/images/white-flowers.jpeg"
                alt="Wild flowers growing in the dunes"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-lg overflow-hidden">
              <Image
                src="/images/tall-grass.jpeg"
                alt="Native grasses swaying in the sea breeze"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
