'use client'

import { useState } from "react"
import Image from "next/image"
import Lightbox from "yet-another-react-lightbox"
import "yet-another-react-lightbox/styles.css"

interface ImageItem {
  src: string
  alt: string
}

interface ImageGalleryLightboxProps {
  images: ImageItem[]
  className?: string
  imageClassName?: string
  gridCols?: string
}

export default function ImageGalleryLightbox({ 
  images, 
  className = "", 
  imageClassName = "",
  gridCols = "grid-cols-2 md:grid-cols-3"
}: ImageGalleryLightboxProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [photoIndex, setPhotoIndex] = useState(0)

  const lightboxImages = images.map(img => ({ src: img.src }))

  const openLightbox = (index: number) => {
    setPhotoIndex(index)
    setIsOpen(true)
  }

  return (
    <>
      <div className={`grid ${gridCols} gap-4 ${className}`}>
        {images.map((image, index) => (
          <div 
            key={index}
            className={`relative aspect-square rounded-lg overflow-hidden cursor-zoom-in ${imageClassName}`}
            onClick={() => openLightbox(index)}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>

      <Lightbox
        open={isOpen}
        close={() => setIsOpen(false)}
        index={photoIndex}
        slides={lightboxImages}
      />
    </>
  )
}