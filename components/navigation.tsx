"use client"

import { useState } from "react"
import Link from "next/link"
import { Building2, Menu, X } from "lucide-react"

export default function Navigation({ transparent = false }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-20 border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <Link href="/" className="font-semibold text-lg">
            Recharge Retreat
          </Link>

          {/* Mobile menu button */}
          <button className="md:hidden mt-2 text-foreground" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* Desktop navigation - centered */}
          <nav className="hidden md:flex items-center justify-center flex-1 gap-8">
            <Link
              href="/shelter"
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              The Shelter
            </Link>
            <Link
              href="/land"
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              The Land
            </Link>
            <Link
              href="/activities"
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              What You'll Do
            </Link>
            <Link
              href="/location"
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              Location
            </Link>
          </nav>

          {/* Book button */}
          <div className="hidden md:block">
            <Link
              href="/book"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-lg font-medium text-sm transition-colors"
            >
              <Building2 className="h-4 w-4" />
              Book Now
            </Link>
          </div>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-6 border-t border-border/10 mt-4 space-y-4 text-center">
            <Link
              href="/shelter"
              className="block py-2 text-foreground/80 hover:text-foreground transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              The Shelter
            </Link>
            <Link
              href="/land"
              className="block py-2 text-foreground/80 hover:text-foreground transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              The Land
            </Link>
            <Link
              href="/activities"
              className="block py-2 text-foreground/80 hover:text-foreground transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              What You'll Do
            </Link>
            <Link
              href="/location"
              className="block py-2 text-foreground/80 hover:text-foreground transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Location
            </Link>
            <Link
              href="/book"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-lg font-medium text-sm transition-colors mt-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <Building2 className="h-4 w-4" />
              Book Now
            </Link>
          </div>
        )}
      </div>
    </header>
  )
}
