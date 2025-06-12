import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Signal, Building2, TreePine, Book, Footprints, Compass } from "lucide-react"
import Image from "next/image"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function ActivitiesPage() {
  return (
    <div className="min-h-screen bg-background pt-20">
      <Navigation />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">What You'll Do</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Turn the absence of entertainment into a feature. Reconnect with yourself and nature.
          </p>
        </div>
      </section>

      {/* Why Recharge */}
      <section className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center text-center mb-10">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
              <div className="text-3xl">🔋</div>
            </div>
            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
              ¿Por qué "Recharge"?
            </h2>
          </div>

          <Card className="border-2 border-primary/20 bg-primary/5 mb-12">
            <CardContent className="p-8">
              <p className="text-lg leading-relaxed">
                In our hyperconnected world, true disconnection has become a luxury. Recharge Retreat offers a rare
                opportunity to step away from the constant noise, notifications, and demands of modern life.
              </p>
              <p className="text-lg leading-relaxed mt-4">
                Here, surrounded by nothing but natural dunes and the distant sound of the ocean, you can finally hear
                yourself think. You can recharge your mental batteries, reset your perspective, and return to your
                regular life with renewed energy and clarity.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* What to Do */}
      <section className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">What to Do</h2>

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
              </ul>
            </div>
          </div>

          {/* Images */}
          <div className="grid grid-cols-2 gap-4 mb-12">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image src="/images/dunes-sunset.jpeg" alt="Sunset over the dunes" fill className="object-cover" />
            </div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src="/images/fence-sunset.jpeg"
                alt="Evening atmosphere at the retreat"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Guest Quote */}
          <Card className="border-2 border-primary/20 bg-primary/5 mb-12">
            <CardContent className="p-8">
              <blockquote className="text-lg italic">
                "I came here exhausted and left recharged. The silence was deafening at first, then liberating. I've
                never slept better or thought more clearly."
              </blockquote>
              <p className="text-right mt-4 text-sm text-muted-foreground">— Previous Guest</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* What if You Can't Handle It? */}
      <section className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Compass className="h-7 w-7 text-primary" />
            <h2 className="text-3xl font-bold">¿Y si no lo aguantás?</h2>
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
