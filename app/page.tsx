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
            src="/images/cabin-exterior-1.jpg"
            alt="Refugio autosuficiente entre médanos"
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

      {/* Short Intro */}
      <section className="container mx-auto px-4 py-16 bg-gradient-to-b from-black/80 to-background">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {/* Main Description Card */}
            <Card className="border-2 border-white/20 bg-black/40 backdrop-blur-sm">
              <CardContent className="p-8">
                <blockquote className="text-lg md:text-xl leading-relaxed text-white">
                  <p className="mb-4">No es un hotel. No es una cabaña.</p>
                  <p>
                    Es un <strong className="text-white">refugio autosuficiente</strong>, aislado, entre médanos, en una{" "}
                    <strong className="text-white">chacra privada de 9 hectáreas</strong> cerca del mar.
                  </p>
                </blockquote>
              </CardContent>
            </Card>

            {/* Dry run for when it all collapses */}
            <Card className="border border-white/20 bg-white/5 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="text-left">
                  <h3 className="text-lg font-semibold text-white mb-3">Dry Run for When It All Collapses</h3>
                  <p className="text-white/80 text-sm leading-relaxed">
                    Pero vos estás <strong className="text-white">solo</strong>, rodeado de{" "}
                    <strong className="text-white">médanos vírgenes</strong>, sin vecinos, sin tránsito, sin nada. Una
                    experiencia de desconexión total, como un ensayo para cuando todo colapse.
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-center pt-8">
              <Link href="/shelter">
                <Button variant="outline" size="lg" className="text-lg">
                  See the Shelter <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
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
                <h2 className="text-3xl font-bold mb-3">La Zona</h2>
                <p className="text-lg text-muted-foreground">
                  Está en una zona de propiedades caras — con{" "}
                  <strong>barrios cerrados, hoteles boutique y casas de siete cifras</strong>.
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
                      <h3 className="text-lg font-semibold mb-3">Un ecosistema único</h3>
                      <p className="text-muted-foreground">
                        Estas especies nativas son las únicas que logran sobrevivir en los médanos, creando un paisaje
                        de belleza austera y resistente que cambia con las estaciones y la luz del día.
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
            <h2 className="text-3xl font-bold">¿Dónde estás?</h2>
          </div>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <p>
                    En la <strong>costa atlántica argentina</strong>, cerca (literalmente a pasos) de la{" "}
                    <strong>Reserva Faro Querandí</strong>
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <p>
                    Rodeado por <strong>médanos naturales</strong>, no urbanizados
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Waves className="h-5 w-5 text-blue-500 mt-1 flex-shrink-0" />
                  <p>
                    A 3 km de una <strong>playa completamente vacía</strong>
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Building2 className="h-5 w-5 text-gray-500 mt-1 flex-shrink-0" />
                  <p>
                    A 5 km de <strong>Mar de las Pampas</strong>, si te arrepentís del aislamiento
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
          <h2 className="text-3xl font-bold text-center mb-12">El Refugio</h2>

          {/* Grid of images */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="relative aspect-square rounded-lg overflow-hidden">
              <Image
                src="/images/cabin-exterior-2.jpg"
                alt="Vista frontal del refugio"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
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
                src="/images/interior-seating.jpg"
                alt="Área cubierta con asientos"
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
          </div>

          {/* Flora and environment */}
          <div className="grid md:grid-cols-3 gap-4">
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
              <Image
                src="/images/native-plants.jpg"
                alt="Especies nativas que sobreviven en los médanos"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
              <Image
                src="/images/nursery.jpg"
                alt="Vivero con plantines de árboles"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
              <Image
                src="/images/cactus.jpg"
                alt="Flora resistente del entorno"
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
            <h2 className="text-3xl font-bold">El entorno</h2>
          </div>

          <div className="space-y-8">
            {/* Main property - First item */}
            <Card className="border-2 border-primary/20 bg-primary/5">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-primary">Propiedad Principal</h3>
                    <p className="text-lg leading-relaxed">
                      <strong>9 hectáreas privadas de médanos verdes</strong>, cubiertos por solo tres especies nativas
                      que logran sobrevivir ahí — y que son sorprendentemente hermosas
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
                      <h4 className="font-semibold mb-3 text-green-700 dark:text-green-400">Reserva Protegida</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Ubicada a pasos de la <strong>Reserva Ecológica Faro Querandí</strong>, un área protegida de
                        alto valor natural
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
                      <h4 className="font-semibold mb-3 text-amber-700 dark:text-amber-400">Aislamiento Total</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        <strong>Rodeado de otras chacras no desarrolladas</strong>: no hay vecinos, no hay
                        construcciones, no hay gente hasta donde mires
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
                    <h4 className="font-semibold mb-3 text-blue-700 dark:text-blue-400">Tu Propia Reserva</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Un <strong>camino perimetral de 1.200 metros entre médanos altos y vistas panorámicas</strong>,
                      para que hagas trekking como si caminaras tu propia reserva
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
                    Hay <strong>señal de celular</strong>
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
                    Hay <strong>ciudad a 5 km</strong>
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
              ¿Por qué "Recharge"?
            </h2>
          </div>

          <Card className="border-2 border-primary bg-primary/5">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-4">¿Listo para recargar?</h2>
              <p className="text-muted-foreground mb-6">
                Reservá tu refugio en los médanos y desconectate de todo lo que te drena.
              </p>
              <a
                href="https://www.airbnb.com/rooms/1150297553735943101?source_impression_id=p3_1749749927_P3mlvFLC4Lgz4bxa"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                <Building2 className="h-5 w-5" />
                Reservar en Airbnb
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
            <h2 className="text-3xl font-bold">¿Y si no lo aguantás?</h2>
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
                  Te hacemos <strong>descuento para mudarte a Il Buco</strong>, nuestra villa italiana con{" "}
                  <strong>terraza verde</strong> y <strong>WiFi de 500 Mbps</strong>
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
              <h2 className="text-3xl font-bold mb-4">¿Listo para recargar?</h2>
              <p className="text-muted-foreground mb-6">
                Reservá tu refugio en los médanos y desconectate de todo lo que te drena.
              </p>
              <a
                href="https://www.airbnb.com/rooms/1150297553735943101?source_impression_id=p3_1749749927_P3mlvFLC4Lgz4bxa"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                <Building2 className="h-5 w-5" />
                Reservar en Airbnb
              </a>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  )
}
