"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Shield, Droplets, Zap, Thermometer, Wifi, Compass } from "lucide-react"
import Image from "next/image"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ImageGalleryLightbox from "@/components/image-gallery-lightbox"
import { Button } from "@/components/ui/button"
import Link from "next/link"

// Shelter exterior images
const shelterImages = [
  {
    src: "/images/shelter/cabin-exterior-1.jpg",
    alt: "Survival shelter in the Argentine wilderness",
    caption: "Rugged Survival Shelter in Argentina"
  },
  {
    src: "/images/shelter/entrance.jpg",
    alt: "Secure entrance to the survival shelter"
  },
  {
    src: "/images/shelter/front.jpg",
    alt: "Front view of the Argentine survival shelter"
  },
  {
    src: "/images/shelter/cabin-landscape.jpg",
    alt: "Survival shelter in Argentina's natural environment",
    caption: "Blending with Nature"
  },
  {
    src: "/images/shelter/cabin-exterior-3.jpg",
    alt: "Durable construction of the survival shelter"
  },
  {
    src: "/images/shelter/outdoor-chair.jpg",
    alt: "Survival shelter outdoor area"
  }
]

export default function SurvivalSheltersArgentina() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/shelter/cabin-exterior-1.jpg"
            alt="Survival shelter in Argentina"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
            Simple Shelters in Nature
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto drop-shadow-lg">
            Experience off-grid living in Argentina's untouched dune landscape
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Survival Shelters in Argentina</h1>
              <p className="text-xl text-muted-foreground">
                Simple, sustainable shelters designed for off-grid living in Argentina's diverse landscapes.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 text-2xl font-bold">
                  🇦🇷 Why Argentina?
                </div>
                <p className="text-lg">
                  Argentina is one of the world's most resilient and strategic countries for long-term survival and self-sufficiency:
                </p>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <span>•</span>
                    <span><strong>Geopolitically neutral:</strong> Far from wars, nuclear targets, and global tensions.</span>
                  </li>
                  <li className="flex gap-3">
                    <span>•</span>
                    <span><strong>Low natural disaster risk:</strong> No hurricanes, volcanoes, or major seismic activity in most regions.</span>
                  </li>
                  <li className="flex gap-3">
                    <span>•</span>
                    <span><strong>Rich in resources:</strong> Freshwater, fertile soil, forests, and renewable energy potential.</span>
                  </li>
                  <li className="flex gap-3">
                    <span>•</span>
                    <span><strong>Sparse population:</strong> Ideal for privacy and autonomy outside urban centers.</span>
                  </li>
                  <li className="flex gap-3">
                    <span>•</span>
                    <span><strong>Off-grid-friendly:</strong> Few restrictions on wells, solar systems, and rural construction.</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 text-2xl font-bold">
                  🛖 Why Recharge Retreat?
                </div>
                <p className="text-lg">
                  Recharge Retreat is surrounded by millionaire homes and boutique hotels, on the border with the vast wilderness of the Querandí coastal reserve — offering safety, discretion, and access to nature:
                </p>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <span>•</span>
                    <span><strong>Protected wilderness:</strong> Next to 9,000+ hectares of protected dunes and forest — no construction allowed.</span>
                  </li>
                  <li className="flex gap-3">
                    <span>•</span>
                    <span><strong>Naturally safe:</strong> No floods, earthquakes, or extreme climate risks. Stable terrain and mild weather year-round.</span>
                  </li>
                  <li className="flex gap-3">
                    <span>•</span>
                    <span><strong>Self-sufficient:</strong> Shallow aquifers and 2,500+ hours of sun per year — perfect for off-grid systems.</span>
                  </li>
                  <li className="flex gap-3">
                    <span>•</span>
                    <span><strong>Wild abundance:</strong> Firewood, fish, wild herbs, small game — nature provides.</span>
                  </li>
                  <li className="flex gap-3">
                    <span>•</span>
                    <span><strong>Secluded yet accessible:</strong> Hidden in native pines, steps from luxury — but completely shielded.</span>
                  </li>
                </ul>
                <p className="text-lg font-medium">
                  A place to disappear — without disconnecting.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-4xl mx-auto space-y-16">
          <section className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Back to Basics in Argentina's Dunes</h2>
              <p className="text-lg text-muted-foreground">
                Our simple shelters are designed for those who want to experience life off the grid, surrounded by nature. Built with local materials and designed to blend into the landscape, these shelters offer a peaceful retreat from modern life while providing basic comforts.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold">The Experience</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <Shield className="h-5 w-5 mt-0.5 text-primary flex-shrink-0" />
                        <div>
                          <p className="font-medium">Simple Design</p>
                          <p className="text-sm text-muted-foreground">Built with local, natural materials</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <Droplets className="h-5 w-5 mt-0.5 text-primary flex-shrink-0" />
                        <div>
                          <p className="font-medium">Basic Water</p>
                          <p className="text-sm text-muted-foreground">Fresh water for essential needs</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <Thermometer className="h-5 w-5 mt-0.5 text-primary flex-shrink-0" />
                        <div>
                          <p className="font-medium">Natural Comfort</p>
                          <p className="text-sm text-muted-foreground">Designed to work with the local climate</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Simple Living</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <Zap className="h-5 w-5 mt-0.5 text-primary flex-shrink-0" />
                        <div>
                          <p className="font-medium">Solar Power</p>
                          <p className="text-sm text-muted-foreground">Basic electricity from solar panels</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <Wifi className="h-5 w-5 mt-0.5 text-primary flex-shrink-0" />
                        <div>
                          <p className="font-medium">Off-Grid Living</p>
                          <p className="text-sm text-muted-foreground">Designed for disconnecting from technology</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <Compass className="h-5 w-5 mt-0.5 text-primary flex-shrink-0" />
                        <div>
                          <p className="font-medium">Natural Setting</p>
                          <p className="text-sm text-muted-foreground">Situated in peaceful dune landscapes</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-bold">Gallery</h2>
            <div className="rounded-lg overflow-hidden">
              <ImageGalleryLightbox images={shelterImages} />
            </div>
          </section>

          <section className="bg-muted/50 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Try Our Shelter</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Experience simple living in our tiny home. If you love the lifestyle, we can discuss building your own shelter on our property.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/book">Book a Stay</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="mailto:ciao@ilbuco.com.ar" className="no-underline">Discuss Your Project</a>
              </Button>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold">Explore Our Other Solutions</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <Link href="/argentina-shelter">
                  <CardContent className="p-6 hover:bg-muted/50 transition-colors">
                    <h3 className="font-semibold mb-2">Argentina Shelter</h3>
                    <p className="text-sm text-muted-foreground">Experience our premium shelter in Argentina's beautiful landscape.</p>
                  </CardContent>
                </Link>
              </Card>
              <Card>
                <Link href="/survival-bunker-argentina">
                  <CardContent className="p-6 hover:bg-muted/50 transition-colors">
                    <h3 className="font-semibold mb-2">Survival Bunker Argentina</h3>
                    <p className="text-sm text-muted-foreground">Heavy-duty bunker solutions for maximum protection.</p>
                  </CardContent>
                </Link>
              </Card>
              <Card>
                <Link href="/bunker-argentina">
                  <CardContent className="p-6 hover:bg-muted/50 transition-colors">
                    <h3 className="font-semibold mb-2">Bunker Argentina</h3>
                    <p className="text-sm text-muted-foreground">Premium bunker options in strategic Argentine locations.</p>
                  </CardContent>
                </Link>
              </Card>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}
