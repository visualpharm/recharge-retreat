import { Card, CardContent } from "@/components/ui/card"
import { Flame, Droplets, Sun, Thermometer, Wifi, Utensils, Bed } from "lucide-react"
import Image from "next/image"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function ShelterPage() {
  return (
    <div className="min-h-screen bg-background pt-20">
      <Navigation />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">The Shelter</h1>
          <p className="text-xl text-muted-foreground mb-8">
            A self-sufficient refuge designed for disconnection and recharging.
          </p>
        </div>
      </section>

      {/* Cabin Images */}
      <section className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image src="/images/cabin-exterior-2.jpg" alt="Vista frontal del refugio" fill className="object-cover" />
            </div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src="/images/interior-seating.jpg"
                alt="Área cubierta con asientos"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Cabin Comforts */}
      <section className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Cabin Comforts</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Sun className="h-6 w-6 text-amber-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Solar Powered</h3>
                    <p className="text-sm text-muted-foreground">
                      Fully self-sufficient with solar panels providing all the electricity you need.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Thermometer className="h-6 w-6 text-blue-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Well Insulated</h3>
                    <p className="text-sm text-muted-foreground">
                      Stays cool in summer and warm in winter with natural insulation.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Droplets className="h-6 w-6 text-blue-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Hot Shower</h3>
                    <p className="text-sm text-muted-foreground">
                      Solar-heated water for comfortable showers even in the middle of nowhere.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Flame className="h-6 w-6 text-orange-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Fire Pit</h3>
                    <p className="text-sm text-muted-foreground">
                      Outdoor fire pit for cooking and evening gatherings under the stars.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Bed className="h-6 w-6 text-gray-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Comfortable Sleeping</h3>
                    <p className="text-sm text-muted-foreground">
                      Quality mattress and bedding for restful nights after days in nature.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Utensils className="h-6 w-6 text-gray-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Basic Kitchen</h3>
                    <p className="text-sm text-muted-foreground">
                      Essential cooking equipment and utensils for preparing meals.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* What's Not Included */}
          <Card className="border-2 border-orange-500/20 bg-orange-500/5 mb-12">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">What's Not Included</h3>
              <ul className="space-y-3 text-sm">
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

          {/* Additional Images */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="relative aspect-square rounded-lg overflow-hidden">
              <Image
                src="/images/outdoor-chair.jpg"
                alt="Espacio de contemplación exterior"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-lg overflow-hidden">
              <Image
                src="/images/cabin-landscape.jpg"
                alt="El refugio en su entorno natural"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-lg overflow-hidden">
              <Image
                src="/images/cabin-exterior-3.jpg"
                alt="Another view of the shelter"
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
