"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Flame, Droplets, Sun, Thermometer, Wifi, Utensils, Bed, Shield, MapPin, Globe2 } from "lucide-react"
import Image from "next/image"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ImageGalleryLightbox from "@/components/image-gallery-lightbox"
import { useTranslation } from "@/components/translation-provider"
import Link from "next/link"

// Shelter exterior images
const shelterImages = [
  {
    src: "/images/shelter/cabin-exterior-1.jpg",
    alt: "Main view of the self-sufficient shelter in Argentina",
    caption: "Self-Sufficient Shelter in Argentina"
  },
  {
    src: "/images/shelter/entrance.jpg",
    alt: "Entrance to the Argentine shelter"
  },
  {
    src: "/images/shelter/front.jpg",
    alt: "Front view of the Argentine shelter"
  },
  {
    src: "/images/shelter/cabin-landscape.jpg",
    alt: "The shelter in the Argentine dune environment",
    caption: "Nestled in Argentina's Natural Dunes"
  },
  {
    src: "/images/shelter/cabin-exterior-3.jpg",
    alt: "Side view of the Argentine shelter"
  },
  {
    src: "/images/shelter/outdoor-chair.jpg",
    alt: "Outdoor relaxation area in Argentina"
  }
]

export default function ArgentinaShelter() {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/shelter/cabin-exterior-1.jpg"
            alt="Self-sufficient shelter in Argentina"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
            Argentina Shelter
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto drop-shadow-lg">
            A simple, off-grid retreat in harmony with Argentina's wild dune landscape
          </p>
        </div>
      </section>



      {/* Building in Harmony with Nature */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Building in Harmony with Nature</h2>
          <p className="text-lg text-muted-foreground">
            Crafted with local materials and a light footprint, our shelters blend seamlessly into the dunes so you can live with—not just in—nature.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="pt-0 pb-16">
        <div className="container mx-auto px-4">
          <ImageGalleryLightbox images={shelterImages} />
        </div>
      </section>

      {/* Simple Living in Nature */}
      <main className="container mx-auto px-4 pb-16">
        <div className="max-w-4xl mx-auto space-y-16">
          <section className="space-y-8">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold">Simple Living in Nature</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Tucked away in the wild dunes of Argentina's coastline, our self-sufficient tiny home offers a chance to experience off-grid living. Far from crowded beaches and luxury developments, this is a place to reconnect with nature's rhythms in a comfortable, low-impact way.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold">The Experience</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <Bed className="h-5 w-5 mt-0.5 text-primary flex-shrink-0" />
                        <span>Cozy sleeping loft with premium bedding</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Utensils className="h-5 w-5 text-primary flex-shrink-0" />
                        <span>Fully equipped kitchen with gas stove</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Droplets className="h-5 w-5 text-primary flex-shrink-0" />
                        <span>Solar-heated outdoor shower</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Wifi className="h-5 w-5 text-primary flex-shrink-0" />
                        <span>Starlink internet available</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Off-Grid Features</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <Sun className="h-5 w-5 text-primary flex-shrink-0" />
                        <span>Solar power system</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Droplets className="h-5 w-5 text-primary flex-shrink-0" />
                        <span>Rainwater collection system</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Flame className="h-5 w-5 text-primary flex-shrink-0" />
                        <span>Wood-burning stove</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Thermometer className="h-5 w-5 text-primary flex-shrink-0" />
                        <span>Passive solar design</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>
      </main>

      {/* 🇦🇷 Why Argentina? */}
      <section className="pt-0 pb-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">🇦🇷 Why Argentina?</h2>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            <Card>
              <CardContent className="p-6 space-y-2">
                <Shield className="h-6 w-6 text-primary" />
                <p className="font-medium">Geopolitically Neutral</p>
                <p className="text-sm text-muted-foreground">Far from wars, nuclear targets, and global tensions.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 space-y-2">
                <Thermometer className="h-6 w-6 text-primary" />
                <p className="font-medium">Low Disaster Risk</p>
                <p className="text-sm text-muted-foreground">No hurricanes, volcanoes, or major seismic activity in most regions.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 space-y-2">
                <Droplets className="h-6 w-6 text-primary" />
                <p className="font-medium">Rich in Resources</p>
                <p className="text-sm text-muted-foreground">Freshwater, fertile soil, forests, and renewable energy potential.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 space-y-2">
                <MapPin className="h-6 w-6 text-primary" />
                <p className="font-medium">Space & Privacy</p>
                <p className="text-sm text-muted-foreground">Sparse population outside cities—ideal for autonomy.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 space-y-2">
                <Sun className="h-6 w-6 text-primary" />
                <p className="font-medium">Off-Grid Friendly</p>
                <p className="text-sm text-muted-foreground">Few restrictions on wells, solar systems, and rural builds.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 space-y-2">
                <Globe2 className="h-6 w-6 text-primary" />
                <p className="font-medium">Supply Chain Independence</p>
                <p className="text-sm text-muted-foreground">Minimal reliance on global supply chains—greater autonomy in crises.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 🛖 Why Recharge Retreat? */}
      <section className="pt-0 pb-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">🛖 Why Recharge Retreat?</h2>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            <Card>
              <CardContent className="p-6 space-y-2">
                <Shield className="h-6 w-6 text-primary" />
                <p className="font-medium">9,000 ha Protected Dunes</p>
                <p className="text-sm text-muted-foreground">Bordering a vast reserve where no development is allowed.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 space-y-2">
                <Thermometer className="h-6 w-6 text-primary" />
                <p className="font-medium">Naturally Safe</p>
                <p className="text-sm text-muted-foreground">No floods, earthquakes, or extreme climate risks.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 space-y-2">
                <Sun className="h-6 w-6 text-primary" />
                <p className="font-medium">Solar-Ready & Freshwater</p>
                <p className="text-sm text-muted-foreground">Shallow aquifers and 2,500+ sunshine hours each year.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 space-y-2">
                <Flame className="h-6 w-6 text-primary" />
                <p className="font-medium">Wild Abundance</p>
                <p className="text-sm text-muted-foreground">Firewood, fish, herbs, small game—nature provides.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 space-y-2">
                <MapPin className="h-6 w-6 text-primary" />
                <p className="font-medium">Secluded yet Accessible</p>
                <p className="text-sm text-muted-foreground">Hidden in native pines, minutes from boutique comforts.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 space-y-2 text-center flex flex-col items-center justify-center">
                <p className="text-lg font-medium italic">A place to disappear — without disconnecting.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="pt-0 pb-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Experience Off-Grid Living?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Book your stay at our self-sufficient shelter and experience the beauty of Patagonia in a sustainable way.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/booking">Book Now</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
