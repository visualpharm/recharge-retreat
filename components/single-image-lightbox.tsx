'use client'

import { useState } from "react"
import Image from "next/image"
import Lightbox from "yet-another-react-lightbox"
import "yet-another-react-lightbox/styles.css"

interface SingleImageLightboxProps {
  src: string
  alt: string
  fill?: boolean
  width?: number
  height?: number
  className?: string
  containerClassName?: string
  priority?: boolean
}

export default function SingleImageLightbox({ 
  src, 
  alt, 
  fill, 
  width, 
  height, 
  className = "",
  containerClassName = "",
  priority
}: SingleImageLightboxProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div 
        className={`cursor-zoom-in ${containerClassName}`}
        onClick={() => setIsOpen(true)}
      >
        <Image
          src={src}
          alt={alt}
          fill={fill}
          width={width}
          height={height}
          className={className}
          priority={priority}
        />
      </div>

      <Lightbox
        open={isOpen}
        close={() => setIsOpen(false)}
        slides={[{ src }]}
      />
    </>
  )
}