'use client';

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Home, Waves, Umbrella, Mountain, Trees, MapPin, Star, Phone, ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { useTranslation } from "@/components/translation-provider"

export default function AlquilerMarAzul() {
  const { t } = useTranslation();
  
  // Helper function to get nested translation
  const getNested = (key: string) => {
    return t(`marAzul.${key}`);
  };
  
  // Features data
  const features = [
    {
      icon: <Home className="w-8 h-8" />,
      title: getNested('features.items.0.title'),
      description: getNested('features.items.0.description')
    },
    {
      icon: <Waves className="w-8 h-8" />,
      title: getNested('features.items.1.title'),
      description: getNested('features.items.1.description')
    },
    {
      icon: <Umbrella className="w-8 h-8" />,
      title: getNested('features.items.2.title'),
      description: getNested('features.items.2.description')
    },
    {
      icon: <Mountain className="w-8 h-8" />,
      title: getNested('features.items.3.title'),
      description: getNested('features.items.3.description')
    },
    {
      icon: <Trees className="w-8 h-8" />,
      title: getNested('features.items.4.title'),
      description: getNested('features.items.4.description')
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: getNested('features.items.5.title'),
      description: getNested('features.items.5.description')
    }
  ];
  
  // Gallery images
  const galleryImages = [
    { src: "/images/shelter/cabin-exterior-1.jpg", alt: getNested('gallery.images.0.alt') },
    { src: "/images/shelter/cabin-exterior-2.jpg", alt: getNested('gallery.images.1.alt') },
    { src: "/images/shelter/cabin-exterior-3.jpg", alt: getNested('gallery.images.2.alt') },
    { src: "/images/shelter/entrance.jpg", alt: getNested('gallery.images.3.alt') },
    { src: "/images/shelter/front.jpg", alt: getNested('gallery.images.4.alt') },
    { src: "/images/shelter/outdoor-chair.jpg", alt: getNested('gallery.images.5.alt') }
  ];
  
  // Testimonials
  const testimonials = [
    {
      quote: getNested('testimonials.items.0.quote'),
      author: getNested('testimonials.items.0.author'),
      rating: 5
    },
    {
      quote: getNested('testimonials.items.1.quote'),
      author: getNested('testimonials.items.1.author'),
      rating: 5
    },
    {
      quote: getNested('testimonials.items.2.quote'),
      author: getNested('testimonials.items.2.author'),
      rating: 5
    }
  ];
  
  // Location sections
  const locationSections = [
    {
      title: getNested('location.sections.0.title'),
      items: [
        getNested('location.sections.0.items.0'),
        getNested('location.sections.0.items.1'),
        getNested('location.sections.0.items.2')
      ]
    },
    {
      title: getNested('location.sections.1.title'),
      items: [
        getNested('location.sections.1.items.0'),
        getNested('location.sections.1.items.1'),
        getNested('location.sections.1.items.2')
      ]
    },
    {
      title: getNested('location.sections.2.title'),
      items: [
        getNested('location.sections.2.items.0'),
        getNested('location.sections.2.items.1'),
        getNested('location.sections.2.items.2')
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/shelter/cabin-exterior-1.jpg"
            alt="Cabaña en Mar Azul con vista al mar"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 text-center text-white">
          <div className="max-w-4xl mx-auto px-4 py-16 md:py-24">
            <h1 className="mb-6 text-4xl font-bold md:text-6xl font-heading">
              <span 
                className="block" 
                dangerouslySetInnerHTML={{ __html: getNested('hero.title') }}
              />
              <span className="text-2xl md:text-3xl font-normal">{getNested('hero.subtitle')}</span>
            </h1>
            <p className="max-w-3xl mx-auto mb-8 text-lg md:text-xl">
              {getNested('hero.description')}
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="text-lg bg-transparent border-2 border-white text-white hover:bg-white/10 hover:text-white">
                <Link 
                  href="https://book.recharge.com.ar/listing/110889"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  {getNested('hero.ctaPrimary')}
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg bg-transparent border-2 border-white text-white hover:bg-white/10 hover:text-white">
                <Link href="/shelter" className="hover:text-white">
                  {getNested('hero.ctaSecondary')}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl font-heading">
              {getNested('features.title')}
            </h2>
            <p className="text-lg text-gray-600">
              {getNested('features.description')}
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: <Home className="w-8 h-8" />,
                title: "Cabaña Completamente Equipada",
                description: "Cocina completa, baño privado, ropa de cama y todo lo necesario para tu comodidad."
              },
              {
                icon: <Waves className="w-8 h-8" />,
                title: "A Pasos de la Playa",
                description: "Ubicación privilegiada a solo 300 metros de la playa virgen de Mar Azul."
              },
              {
                icon: <Umbrella className="w-8 h-8" />,
                title: "Terraza con Parrilla",
                description: "Disfruta de comidas al aire libre en nuestra espaciosa terraza con parrilla."
              },
              {
                icon: <Mountain className="w-8 h-8" />,
                title: "Entorno Natural",
                description: "Rodeado de médanos y vegetación autóctona para una experiencia de desconexión total."
              },
              {
                icon: <Trees className="w-8 h-8" />,
                title: "Estacionamiento Privado",
                description: "Espacio seguro para estacionar tu vehículo dentro del predio."
              },
              {
                icon: <MapPin className="w-8 h-8" />,
                title: "Ubicación Privilegiada",
                description: "A solo 5 minutos del centro de Mar Azul y cerca de todos los servicios."
              }
            ].map((feature, index) => (
              <div key={index} className="p-6 text-center bg-gray-50 rounded-lg">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 text-primary">
                  {feature.icon}
                </div>
                <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="galeria" className="py-20 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl font-heading">
              {getNested('gallery.title')}
            </h2>
            <p className="text-lg text-gray-600">
              {getNested('gallery.description')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {galleryImages.map((image, index) => (
              <div key={index} className="overflow-hidden rounded-lg shadow-md">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={600}
                  height={400}
                  className="object-cover w-full h-64 transition-transform duration-300 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl font-heading">
              {getNested('testimonials.title')}
            </h2>
            <p className="text-lg text-gray-600">
              {getNested('testimonials.description')}
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                quote: "La mejor experiencia de alojamiento en Mar Azul. La cabaña es exactamente como en las fotos, impecable y con todo lo necesario.",
                author: "María G., Buenos Aires",
                rating: 5
              },
              {
                quote: "La ubicación es perfecta: cerca de todo pero lo suficientemente alejado para tener privacidad. Volveremos sin dudas.",
                author: "Carlos R., Córdoba",
                rating: 5
              },
              {
                quote: "La atención fue excelente y la cabaña tiene un encanto especial. Ideal para desconectar y disfrutar de la naturaleza.",
                author: "Laura M., Rosario",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="p-6 bg-gray-50 rounded-lg">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="mb-4 italic text-gray-700">"{testimonial.quote}"</p>
                <p className="font-semibold text-gray-900">{testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl font-heading">
              Ubicación Privilegiada
            </h2>
            <p className="text-lg text-gray-600">
              Nuestra cabaña se encuentra en una de las mejores zonas de Mar Azul, cerca de todo pero en un entorno tranquilo y privado.
            </p>
          </div>
          
          <div className="overflow-hidden rounded-lg shadow-lg h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.1234567890123!2d-57.0770374!3d-37.3756338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5b5515744056f796!2sRecharge%20Retreat!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              title="Ubicación de la cabaña en Mar Azul"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            ></iframe>
          </div>
          <div className="mt-6">
            <a
              href="https://maps.app.goo.gl/Qmi7HQApb5oEiKdE8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition-colors"
            >
              <span>Abrir en Google Maps</span>
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </a>
          </div>
          
          <div className="grid gap-8 mt-12 md:grid-cols-3">
            {[
              {
                title: "A Poca Distancia",
                items: [
                  "Playa virgen - 300 m",
                  "Centro de Mar Azul - 5 min en auto",
                  "Supermercado - 3 min en auto"
                ]
              },
              {
                title: "Cercanías",
                items: [
                  "Restaurantes - 5 min en auto",
                  "Faro Querandí - 10 min en auto",
                  "Mar de las Pampas - 15 min en auto"
                ]
              },
              {
                title: "Cómo Llegar",
                items: [
                  "Desde Buenos Aires: 4.5 horas en auto",
                  "Aeropuerto más cercano: Aeroparque (BUE)",
                  "Colectivos a Mar Azul desde Retiro"
                ]
              }
            ].map((category, index) => (
              <div key={index}>
                <h3 className="mb-4 text-xl font-semibold">{category.title}</h3>
                <ul className="space-y-2">
                  {category.items.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="mr-2 text-primary">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

// No type definitions needed as we're using the TranslationProvider
