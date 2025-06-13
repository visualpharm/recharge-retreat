"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Masonry from "masonry-layout"
import imagesLoaded from "imagesloaded"

interface MasonryImage {
  src: string
  alt: string
  caption?: string
}

interface MasonryGalleryProps {
  images: MasonryImage[]
  className?: string
}

export default function MasonryGallery({ 
  images,
  className = "" 
}: MasonryGalleryProps) {
  const masonryRef = useRef<HTMLDivElement>(null)
  const [masonryInstance, setMasonryInstance] = useState<Masonry | null>(null)

  useEffect(() => {
    if (!masonryRef.current) return

    // Wait a bit for images to start loading
    const timer = setTimeout(() => {
      const imgLoad = imagesLoaded(masonryRef.current!)
      
      imgLoad.on('done', () => {
        if (masonryRef.current) {
          const msnry = new Masonry(masonryRef.current, {
            itemSelector: '.masonry-item',
            columnWidth: '.masonry-sizer',
            gutter: 16,
            percentPosition: true
          })
          
          setMasonryInstance(msnry)
        }
      })
    }, 100)

    return () => {
      clearTimeout(timer)
      if (masonryInstance) {
        masonryInstance.destroy()
      }
    }
  }, [images])

  return (
    <div className={`${className}`}>
      <div 
        ref={masonryRef}
        className="masonry-gallery"
      >
        {/* Grid sizer for responsive columns */}
        <div className="masonry-sizer w-full sm:w-1/2 lg:w-1/3 xl:w-1/4"></div>
        
        {images.map((image, index) => (
          <div
            key={index}
            className="masonry-item w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-2"
          >
            <div className="relative overflow-hidden rounded-lg bg-gray-100 cursor-pointer group transition-all duration-300 hover:shadow-xl">
              <Image
                src={image.src}
                alt={image.alt}
                width={400}
                height={300}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                style={{ display: 'block' }}
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
    </div>
  )
}

