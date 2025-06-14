"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { X, ChevronLeft, ChevronRight, TreePine } from "lucide-react"
import { cn } from "@/lib/utils"
import { useTranslation } from "@/components/translation-provider"

const images = [
  {
    src: "/images/plants/dunes-sunset.jpeg",
    alt: "Dunes at sunset",
    caption: "Unique sunsets among native vegetation",
  },
  {
    src: "/images/plants/native-flora.jpeg",
    alt: "Native flora of the dunes",
    caption: "Resilient flora that survives in extreme conditions",
  },
  {
    src: "/images/plants/water-view.jpeg",
    alt: "View of the artificial lake",
    caption: "Artificial lake where wild animals drink",
  },
  {
    src: "/images/plants/fence-sunset.jpeg",
    alt: "Natural boundaries",
    caption: "Natural boundaries that integrate with the landscape",
  },
  {
    src: "/images/plants/white-flowers.jpeg",
    alt: "Wild flowers",
    caption: "Wild flowers that grow among the dunes",
  },
]

export default function ImageGallery() {
  const { t, locale } = useTranslation()
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImage, setCurrentImage] = useState(0)

  const openLightbox = (index: number) => {
    setCurrentImage(index)
    setLightboxOpen(true)
    document.body.style.overflow = "hidden"
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
    document.body.style.overflow = "auto"
  }

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation()
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation()
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") closeLightbox()
    if (e.key === "ArrowRight") setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1))
    if (e.key === "ArrowLeft") setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const floraUrl = locale === 'es' ? '/flora-faro-querandi' : `/${locale}/flora-faro-querandi`

  return (
    <>
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative rounded-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
            style={{ height: '172px' }}
            onClick={() => openLightbox(index)}
          >
            <Image 
              src={image.src || "/placeholder.svg"} 
              alt={image.alt} 
              fill 
              className="object-cover" 
              sizes="(max-width: 768px) 33vw, (max-width: 1024px) 25vw, 16vw"
              priority={index < 6}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        ))}
        
        {/* Flora Link Card */}
        <Link href={floraUrl}>
          <div
            className="relative rounded-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-lg bg-gradient-to-br from-green-500 to-emerald-600 flex flex-col items-center justify-center text-white"
            style={{ height: '172px' }}
          >
            <TreePine className="h-12 w-12 mb-2" />
            <p className="text-sm font-medium text-center px-2 leading-tight">
              {locale === 'es' ? 'Todas las plantas de nuestros médanos' : 
               locale === 'pt' ? 'Todas as plantas das nossas dunas' : 
               'All plants of our dunes'}
            </p>
            <div className="absolute inset-0 bg-white/0 hover:bg-white/10 transition-colors duration-300"></div>
          </div>
        </Link>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <button
            className="absolute top-4 right-4 text-white p-2 rounded-full bg-black/20 hover:bg-black/40 transition-colors z-50"
            onClick={closeLightbox}
          >
            <X className="h-6 w-6" />
          </button>

          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white p-2 rounded-full bg-black/20 hover:bg-black/40 transition-colors z-50"
            onClick={prevImage}
          >
            <ChevronLeft className="h-8 w-8" />
          </button>

          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white p-2 rounded-full bg-black/20 hover:bg-black/40 transition-colors z-50"
            onClick={nextImage}
          >
            <ChevronRight className="h-8 w-8" />
          </button>

          <div className="relative w-full h-full max-w-5xl max-h-[80vh] flex items-center justify-center">
            <div
              className={cn(
                "absolute transition-opacity duration-300 w-full h-full flex items-center justify-center",
                lightboxOpen ? "opacity-100" : "opacity-0",
              )}
            >
              <div className="relative w-full h-full">
                <Image
                  src={images[currentImage].src || "/placeholder.svg"}
                  alt={images[currentImage].alt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 80vw"
                  priority
                />
              </div>
            </div>

            <div className="absolute bottom-4 left-0 right-0 text-center text-white">
              <p className="text-lg font-medium">{images[currentImage].caption}</p>
              <p className="text-sm text-white/70 mt-1">
                {currentImage + 1} / {images.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
