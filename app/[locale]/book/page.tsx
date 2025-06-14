import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Building2, MessageCircle, MapPin } from "lucide-react"
import Image from "next/image"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Book Your Stay | Recharge Retreat - Secluded Beach Cabins',
  description: 'Reserve your digital detox getaway. Check availability and book your stay at our secluded beachfront cabins near Faro Querandí, Argentina.',
  openGraph: {
    title: 'Book Your Stay | Recharge Retreat - Secluded Beach Cabins',
    description: 'Secure your private beachfront escape. Simple booking process for our self-sufficient cabins in the dunes of Argentina.',
    images: [
      {
        url: '/images/booking/beach-cabin-view.jpg',
        width: 1200,
        height: 630,
        alt: 'Book your stay at Recharge Retreat',
      },
    ],
  },
  alternates: {
    canonical: 'https://recharge-retreat.com/book',
  },
  keywords: [
    'book beach cabin Argentina',
    'Faro Querandí accommodation',
    'private beach rental',
    'off-grid cabin booking',
    'digital detox retreat Argentina',
    'secluded beach house rental',
    'sustainable tourism booking',
    'private dune cabin Argentina'
  ],
}

export default function BookPage() {
  return (
    <div className="min-h-screen bg-background pt-20">
      <Navigation />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Book Your Stay</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Ready to disconnect and recharge? Book your retreat in the dunes.
          </p>
        </div>
      </section>

      {/* Booking Options */}
      <section className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Airbnb Booking */}
            <Card className="border-2 border-primary/20 bg-primary/5">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Building2 className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-semibold">Book on Airbnb</h3>
                </div>
                <p className="text-muted-foreground mb-6">
                  Check availability, see more photos, and book instantly through our Airbnb listing.
                </p>
                <a
                  href="https://www.airbnb.com/rooms/1150297553735943101?source_impression_id=p3_1749749927_P3mlvFLC4Lgz4bxa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  <Building2 className="h-5 w-5" />
                  View on Airbnb
                </a>
              </CardContent>
            </Card>

            {/* Direct Contact */}
            <Card>
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <MessageCircle className="h-6 w-6 text-blue-500" />
                  <h3 className="text-xl font-semibold">Contact Directly</h3>
                </div>
                <p className="text-muted-foreground mb-6">
                  Have questions or prefer to book directly? Contact us via WhatsApp.
                </p>
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-600 text-white hover:bg-green-700 px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Contact on WhatsApp
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Pricing</h2>

          <Card>
            <CardContent className="p-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Weekday Rate</h3>
                  <p className="text-3xl font-bold">
                    $XXX <span className="text-base font-normal text-muted-foreground">per night</span>
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">Weekend Rate</h3>
                  <p className="text-3xl font-bold">
                    $XXX <span className="text-base font-normal text-muted-foreground">per night</span>
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">Weekly Rate</h3>
                  <p className="text-3xl font-bold">
                    $XXX <span className="text-base font-normal text-muted-foreground">per week</span>
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">(Includes 1 night free)</p>
                </div>

                <div className="pt-4 border-t">
                  <p className="text-sm text-muted-foreground">
                    * Prices may vary by season. Check Airbnb for current rates and availability.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ */}
      <section className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>How do I access the property?</AccordionTrigger>
              <AccordionContent>
                Detailed access instructions will be provided after booking. The property is located off Ruta 11, km
                429.5, with a turn at Faro Querandí.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>What should I bring?</AccordionTrigger>
              <AccordionContent>
                We recommend bringing your own sheets and towels, food supplies, drinking water, and any personal items
                you'll need. The shelter is equipped with basic kitchen supplies and solar power for lights and charging
                devices.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>Are pets allowed?</AccordionTrigger>
              <AccordionContent>
                Well-behaved dogs are welcome, but please keep them under control to protect the local wildlife and
                natural environment.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>Is there internet or WiFi?</AccordionTrigger>
              <AccordionContent>
                No, there is no WiFi. This is intentionally a digital detox space. There is mobile phone signal for
                emergencies.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger>How far is the beach?</AccordionTrigger>
              <AccordionContent>
                The beach is approximately 3 km away. It's a completely empty beach with no facilities or lifeguards.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Location */}
      <section className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <MapPin className="h-7 w-7 text-primary" />
            <h2 className="text-3xl font-bold">Location</h2>
          </div>

          <div className="mb-6">
            <p className="text-lg mb-2">
              <strong>Address:</strong> Ruta 11, km 429.5 — turn at the "Camping" sign
            </p>
            <p className="text-sm text-gray-600">
              If the keeper asks for money, say you're going to Ivan
            </p>
          </div>

          <div className="relative aspect-[16/9] rounded-lg overflow-hidden mb-8">
            {/* This would be replaced with an actual Google Maps embed */}
            <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
              <p className="text-gray-500">Google Maps Embed</p>
            </div>
          </div>

          <div className="relative aspect-square md:aspect-[4/3] rounded-lg overflow-hidden">
            <Image src="/images/cabin-landscape.jpg" alt="Entry path to the retreat" fill className="object-cover" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
