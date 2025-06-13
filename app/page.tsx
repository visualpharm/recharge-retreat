import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { Compass, MapPin, Wheat, Signal, Building2, Waves, TreePine, Droplets } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import ImageGallery from "@/components/image-gallery"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section with Background Image */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/shelter/cabin-exterior-1.jpg"
            alt="Self-sufficient shelter among dunes"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <div className="space-y-8">
              {/* Title without icon */}
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white drop-shadow-lg">
                Recharge Retreat
              </h1>

              <h2 className="text-xl md:text-3xl font-medium tracking-tight text-white leading-tight drop-shadow-lg">
                Private Autonomous Shelter. No Neighbors.
                <br />9 Hectares of Green Dunes and the Ocean.
              </h2>
            </div>

            <div className="flex justify-center">
              <Link href="/shelter">
                <Button size="lg" className="text-lg px-8">
                  Explore the Shelter <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
              <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* La Zona - Photo Gallery */}
      <section className="py-16 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-start gap-4 mb-8">
              <MapPin className="h-7 w-7 text-primary mt-1 flex-shrink-0" />
              <div>
                <h2 className="text-3xl font-bold mb-3">The Zone</h2>
                <p className="text-lg text-muted-foreground">
                  Located in an area of expensive properties — with{" "}
                  <strong>gated communities, boutique hotels and seven-figure homes</strong>.
                </p>
              </div>
            </div>

            <ImageGallery />

            <div className="mt-8 max-w-2xl mx-auto">
              <Card className="border-2 border-primary/20 bg-primary/5">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Compass className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold mb-3">A Unique Ecosystem</h3>
                      <p className="text-muted-foreground">
                        These native species are the only ones that manage to survive in the dunes, creating a landscape
                        of austere and resilient beauty that changes with the seasons and daylight.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* ¿Dónde estás? */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <MapPin className="h-7 w-7 text-primary" />
            <h2 className="text-3xl font-bold">Where Are You?</h2>
          </div>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <p>
                    On the <strong>Argentine Atlantic coast</strong>, close (literally steps away) from the{" "}
                    <strong>Faro Querandí Reserve</strong>
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <p>
                    Surrounded by <strong>natural dunes</strong>, undeveloped
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Waves className="h-5 w-5 text-blue-500 mt-1 flex-shrink-0" />
                  <p>
                    3 km from a <strong>completely empty beach</strong>
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Building2 className="h-5 w-5 text-gray-500 mt-1 flex-shrink-0" />
                  <p>
                    5 km from <strong>Mar de las Pampas</strong>, if you regret the isolation
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Photo Gallery - Remaining Images */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">The Shelter</h2>

          {/* Shelter Description */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="space-y-6">
              {/* Main Description Card */}
              <Card className="border-2 border-primary/20 bg-primary/5">
                <CardContent className="p-8">
                  <blockquote className="text-lg md:text-xl leading-relaxed">
                    <p className="mb-4">Not a hotel. Not a cabin.</p>
                    <p>
                      It's a <strong>self-sufficient shelter</strong>, isolated, among dunes, on a{" "}
                      <strong>private 9-hectare property</strong> near the sea.
                    </p>
                  </blockquote>
                </CardContent>
              </Card>

              {/* Dry run for when it all collapses */}
              <Card className="border border-primary/20 bg-primary/10">
                <CardContent className="p-6">
                  <div className="text-left">
                    <h3 className="text-lg font-semibold mb-3">Dry Run for When It All Collapses</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      But you are <strong>alone</strong>, surrounded by{" "}
                      <strong>pristine dunes</strong>, with no neighbors, no traffic, nothing. A
                      complete disconnection experience, like a rehearsal for when everything collapses.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Grid of images */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="relative aspect-square rounded-lg overflow-hidden">
              <Image
                src="/images/shelter/cabin-exterior-2.jpg"
                alt="Front view of the shelter"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-lg overflow-hidden">
              <Image
                src="/images/shelter/outdoor-chair.jpg"
                alt="Outdoor contemplation space"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-lg overflow-hidden">
              <Image
                src="/images/comfort/bedroom.webp"
                alt="Covered area with seating"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-lg overflow-hidden">
              <Image
                src="/images/shelter/cabin-landscape.jpg"
                alt="The shelter in its natural environment"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Flora and environment */}
          <div className="grid md:grid-cols-3 gap-4">
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
              <Image
                src="/images/plants/native-plants.jpg"
                alt="Native species that survive in the dunes"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
              <Image
                src="/images/plants/nursery.jpg"
                alt="Nursery with tree seedlings"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
              <Image
                src="/images/plants/cactus.jpg"
                alt="Resilient flora of the environment"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* El entorno */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="text-2xl">🌾</div>
            <h2 className="text-3xl font-bold">The Environment</h2>
          </div>

          <div className="space-y-8">
            {/* Main property - First item */}
            <Card className="border-2 border-primary/20 bg-primary/5">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-primary">Main Property</h3>
                    <p className="text-lg leading-relaxed">
                      <strong>9 private hectares of green dunes</strong>, covered by only three native species
                      that manage to survive there — and which are surprisingly beautiful
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Grid layout for remaining features */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Reserva Ecológica */}
              <Card className="border-2">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-3 text-green-700 dark:text-green-400">Protected Reserve</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Located steps away from the <strong>Faro Querandí Ecological Reserve</strong>, a protected area of
                        high natural value
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Aislamiento */}
              <Card className="border-2">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <Wheat className="h-6 w-6 text-amber-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-3 text-amber-700 dark:text-amber-400">Total Isolation</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        <strong>Surrounded by other undeveloped farms</strong>: no neighbors, no
                        buildings, no people as far as you can see
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Camino perimetral - Full width */}
            <Card className="border-2">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <Compass className="h-6 w-6 text-blue-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-3 text-blue-700 dark:text-blue-400">Your Own Reserve</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      A <strong>1,200-meter perimeter path between high dunes and panoramic views</strong>,
                      so you can trek as if walking through your own reserve
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Bottom grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Lago artificial */}
              <Card className="border-2">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3 mb-4">
                    <Droplets className="h-6 w-6 text-blue-500 mt-1 flex-shrink-0" />
                    <Badge variant="secondary">Conectividad</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    There is <strong>cell phone signal</strong>
                  </p>
                </CardContent>
              </Card>

              {/* Vivero */}
              <Card className="border-2">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3 mb-4">
                    <TreePine className="h-6 w-6 text-emerald-500 mt-1 flex-shrink-0" />
                    <Badge variant="secondary">Proximidad</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    There is a <strong>city 5 km away</strong>
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* ¿Por qué "Recharge"? */}
      <section className="container mx-auto px-4 py-16 bg-gradient-to-b from-background to-primary/5">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center text-center mb-10">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
              <div className="text-3xl">🔋</div>
            </div>
            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
              Why "Recharge"?
            </h2>
          </div>

          <Card className="border-2 border-primary bg-primary/5">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-4">Ready to Recharge?</h2>
              <p className="text-muted-foreground mb-6">
                Book your shelter in the dunes and disconnect from everything that drains you.
              </p>
              <a
                href="https://www.airbnb.com/rooms/1150297553735943101?source_impression_id=p3_1749749927_P3mlvFLC4Lgz4bxa"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                <Building2 className="h-5 w-5" />
                Book on Airbnb
              </a>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ¿Y si no lo aguantás? */}
      <section className="container mx-auto px-4 py-16">
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
                  <Badge variant="secondary">Conectividad</Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  Hay <strong>señal de celular</strong>
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Building2 className="h-5 w-5 text-blue-500" />
                  <Badge variant="secondary">Proximidad</Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  Hay <strong>ciudad a 5 km</strong>
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <TreePine className="h-6 w-6 text-emerald-500" />
                  <Badge variant="secondary">Alternativa</Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  We give you a <strong>discount to move to Il Buco</strong>, our Italian villa with{" "}
                  <strong>green terrace</strong> and <strong>500 Mbps WiFi</strong>
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <Card className="border-2 border-primary bg-primary/5">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-4">Ready to Recharge?</h2>
              <p className="text-muted-foreground mb-6">
                Book your shelter in the dunes and disconnect from everything that drains you.
              </p>
              <a
                href="https://www.airbnb.com/rooms/1150297553735943101?source_impression_id=p3_1749749927_P3mlvFLC4Lgz4bxa"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                <Building2 className="h-5 w-5" />
                Book on Airbnb
              </a>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  )
}
