"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

const images = [
  {
    src: "/images/dunes-sunset.jpeg",
    alt: "Médanos al atardecer",
    caption: "Atardeceres únicos entre la vegetación nativa",
  },
  {
    src: "/images/native-flora.jpeg",
    alt: "Flora nativa de los médanos",
    caption: "Flora resistente que sobrevive en condiciones extremas",
  },
  {
    src: "/images/water-view.jpeg",
    alt: "Vista del lago artificial",
    caption: "Lago artificial donde beben los animales silvestres",
  },
  {
    src: "/images/fence-sunset.jpeg",
    alt: "Límites naturales",
    caption: "Límites naturales que se integran con el paisaje",
  },
  {
    src: "/images/white-flowers.jpeg",
    alt: "Flores silvestres",
    caption: "Flores silvestres que crecen entre los médanos",
  },
  {
    src: "/images/tall-grass.jpeg",
    alt: "Pastos altos",
    caption: "Pastos nativos que se mecen con la brisa marina",
  },
]

export default function ImageGallery() {
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

  return (
    <>
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative aspect-square rounded-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
            onClick={() => openLightbox(index)}
          >
            <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        ))}
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
