'use client'

import Image from 'next/image'
import { useState } from 'react'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'

interface FloraImage {
  src: string
  alt: string
}

interface FloraGalleryProps {
  images: FloraImage[]
}

export default function FloraGallery({ images }: FloraGalleryProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [photoIndex, setPhotoIndex] = useState(0)

  // Create lightbox slides
  const lightboxSlides = images.map(img => ({ src: img.src }))

  const openLightbox = (index: number) => {
    setPhotoIndex(index)
    setIsOpen(true)
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <div key={index} className="relative group">
            <div 
              className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg cursor-zoom-in"
              onClick={() => openLightbox(index)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            <div className="mt-3 text-center">
              <div className="text-sm font-medium text-foreground" dangerouslySetInnerHTML={{ __html: image.alt }} />
            </div>
          </div>
        ))}
      </div>

      <Lightbox
        open={isOpen}
        close={() => setIsOpen(false)}
        index={photoIndex}
        slides={lightboxSlides}
      />
    </>
  )
}