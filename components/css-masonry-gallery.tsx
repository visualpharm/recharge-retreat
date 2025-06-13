"use client"

import { useEffect, useRef } from 'react'
import Image from "next/image"

interface GalleryImage {
  src: string
  alt: string
  caption?: string
}

interface CSSMasonryGalleryProps {
  images: GalleryImage[]
  gap?: string
  className?: string
}

export default function CSSMasonryGallery({ 
  images,
  gap = "1rem",
  className = ""
}: CSSMasonryGalleryProps) {
  const galleryRef = useRef<HTMLDivElement>(null)

  // Single row gallery with consistent height
  const galleryStyle: React.CSSProperties = {
    display: 'flex',
    flexWrap: 'nowrap',
    gap: gap,
    width: '100%',
    overflowX: 'auto',
    scrollbarWidth: 'none' as const,
    msOverflowStyle: 'none',
    padding: '0.5rem 0',
    margin: '0 -1rem',
    paddingLeft: '1rem',
    paddingRight: '1rem',
  }

  useEffect(() => {
    const style = document.createElement('style')
    style.textContent = `
      .single-row-gallery::-webkit-scrollbar {
        display: none;
      }
    `
    document.head.appendChild(style)
    return () => {
      document.head.removeChild(style)
    }
  }, [])

  return (
    <div 
      ref={galleryRef}
      className={`single-row-gallery ${className}`} 
      style={galleryStyle}
    >
      {images.map((image, index) => (
        <div
          key={index}
          className="flex-shrink-0 cursor-pointer group transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
        >
          <div className="relative overflow-hidden rounded-lg bg-gray-100" style={{ width: '300px', height: '200px' }}>
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width: 768px) 50vw, 300px"
              priority={index < 3} // Load first 3 images with priority
            />
            
            {/* Overlay on hover */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            
            {/* Caption if provided */}
            {image.caption && (
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-sm font-medium">{image.caption}</p>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}