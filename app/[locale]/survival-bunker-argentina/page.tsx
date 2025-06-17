"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Shield, Lock, Zap, Droplets, Thermometer, Wifi } from "lucide-react"
import Image from "next/image"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ImageGalleryLightbox from "@/components/image-gallery-lightbox"
import { Button } from "@/components/ui/button"
import Link from "next/link"

// Bunker images
const bunkerImages = [
  {
    src: "/images/shelter/cabin-exterior-1.jpg",
    alt: "Survival bunker in Argentina",
    caption: "Secure Survival Bunker in Argentina"
  },
  {
    src: "/images/shelter/entrance.jpg",
    alt: "Reinforced entrance to the survival bunker"
  },
  {
    src: "/images/shelter/front.jpg",
    alt: "Discreet exterior of the Argentine survival bunker"
  },
  {
    src: "/images/shelter/cabin-landscape.jpg",
    alt: "Survival bunker integrated into the Argentine landscape",
    caption: "Designed for Discretion"
  },
  {
    src: "/images/shelter/cabin-exterior-3.jpg",
    alt: "Durable construction of the survival bunker"
  },
  {
    src: "/images/shelter/outdoor-chair.jpg",
    alt: "Discreet outdoor area of the survival bunker"
  }
]

export default function SurvivalBunkerArgentina() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/shelter/cabin-exterior-1.jpg"
            alt="Survival bunker in Argentina"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
            Bunker Construction in Argentina
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto drop-shadow-lg">
            Custom construction services for off-grid structures in Argentina's dune landscape
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Survival Bunkers in Argentina</h1>
              <p className="text-xl text-muted-foreground">
                Custom off-grid structures designed for resilience and self-sufficiency in Argentina's diverse landscapes.
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
              <h2 className="text-3xl font-bold">Custom Off-Grid Construction</h2>
              <p className="text-lg text-muted-foreground">
                We specialize in building simple, durable structures that blend with Argentina's dune landscape. Whether you're looking for a small retreat or a larger off-grid home, we can help bring your vision to life using sustainable materials and techniques suited to the local environment.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Our Approach</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <Shield className="h-5 w-5 mt-0.5 text-primary flex-shrink-0" />
                        <div>
                          <p className="font-medium">Simple Construction</p>
                          <p className="text-sm text-muted-foreground">Built with local, natural materials</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <Lock className="h-5 w-5 mt-0.5 text-primary flex-shrink-0" />
                        <div>
                          <p className="font-medium">Basic Security</p>
                          <p className="text-sm text-muted-foreground">Standard locks and basic protection</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <Thermometer className="h-5 w-5 mt-0.5 text-primary flex-shrink-0" />
                        <div>
                          <p className="font-medium">Natural Insulation</p>
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
                    <h3 className="text-xl font-semibold">Construction Services</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <Zap className="h-5 w-5 mt-0.5 text-primary flex-shrink-0" />
                        <div>
                          <p className="font-medium">Solar Power</p>
                          <p className="text-sm text-muted-foreground">Basic electricity from solar panels</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <Droplets className="h-5 w-5 mt-0.5 text-primary flex-shrink-0" />
                        <div>
                          <p className="font-medium">Water Supply</p>
                          <p className="text-sm text-muted-foreground">Basic water storage and collection</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <Wifi className="h-5 w-5 mt-0.5 text-primary flex-shrink-0" />
                        <div>
                          <p className="font-medium">Off-Grid Living</p>
                          <p className="text-sm text-muted-foreground">Designed for disconnecting from technology</p>
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
              <ImageGalleryLightbox images={bunkerImages} />
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
                    <p className="text-sm text-muted-foreground">Premium shelter options in Argentina's beautiful landscapes.</p>
                  </CardContent>
                </Link>
              </Card>
              <Card>
                <Link href="/survival-shelters-argentina">
                  <CardContent className="p-6 hover:bg-muted/50 transition-colors">
                    <h3 className="font-semibold mb-2">Survival Shelters Argentina</h3>
                    <p className="text-sm text-muted-foreground">Secure and self-sufficient shelter solutions.</p>
                  </CardContent>
                </Link>
              </Card>
              <Card>
                <Link href="/bunker-argentina">
                  <CardContent className="p-6 hover:bg-muted/50 transition-colors">
                    <h3 className="font-semibold mb-2">Bunker Argentina</h3>
                    <p className="text-sm text-muted-foreground">Discrete and secure bunker options throughout Argentina.</p>
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
