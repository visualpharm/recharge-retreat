"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useTranslations, useLocale } from "next-intl"
import { Building2, Menu, X } from "lucide-react"
import LanguageSwitcher from "./language-switcher"

export default function Navigation({ transparent = false }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const locale = useLocale()
  const t = useTranslations('nav')

  const isActive = (path: string) => {
    // Remove locale prefix from pathname for comparison
    const pathWithoutLocale = pathname.replace(/^\/(en|pt)/, '') || '/'
    return pathWithoutLocale === path
  }

  const getLocalizedHref = (path: string) => {
    return locale === 'es' ? path : `/${locale}${path}`
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-20 border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <Link href={getLocalizedHref("/")} className="font-semibold text-lg">
            Recharge Retreat
          </Link>

          {/* Mobile menu button */}
          <button className="md:hidden mt-2 text-foreground" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* Desktop navigation - centered */}
          <nav className="hidden md:flex items-center justify-center flex-1 gap-8">
            <Link
              href={getLocalizedHref("/shelter")}
              className={`text-base font-medium transition-colors ${
                isActive('/shelter') 
                  ? 'text-primary font-semibold' 
                  : 'text-foreground/80 hover:text-foreground'
              }`}
            >
              {t('shelter')}
            </Link>
            <Link
              href={getLocalizedHref("/land")}
              className={`text-base font-medium transition-colors ${
                isActive('/land') 
                  ? 'text-primary font-semibold' 
                  : 'text-foreground/80 hover:text-foreground'
              }`}
            >
              {t('land')}
            </Link>
            <Link
              href={getLocalizedHref("/activities")}
              className={`text-base font-medium transition-colors ${
                isActive('/activities') 
                  ? 'text-primary font-semibold' 
                  : 'text-foreground/80 hover:text-foreground'
              }`}
            >
              {t('activities')}
            </Link>
            <Link
              href={getLocalizedHref("/location")}
              className={`text-base font-medium transition-colors ${
                isActive('/location') 
                  ? 'text-primary font-semibold' 
                  : 'text-foreground/80 hover:text-foreground'
              }`}
            >
              {t('location')}
            </Link>
          </nav>

          {/* Language Switcher and Book button */}
          <div className="hidden md:flex items-center gap-4">
            <LanguageSwitcher />
            <Link
              href={getLocalizedHref("/book")}
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-lg font-medium text-sm transition-colors"
            >
              <Building2 className="h-4 w-4" />
              {t('book')}
            </Link>
          </div>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-6 border-t border-border/10 mt-4 space-y-4 text-center">
            <Link
              href={getLocalizedHref("/shelter")}
              className={`block py-2 text-base font-medium transition-colors ${
                isActive('/shelter') 
                  ? 'text-primary font-semibold' 
                  : 'text-foreground/80 hover:text-foreground'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {t('shelter')}
            </Link>
            <Link
              href={getLocalizedHref("/land")}
              className={`block py-2 text-base font-medium transition-colors ${
                isActive('/land') 
                  ? 'text-primary font-semibold' 
                  : 'text-foreground/80 hover:text-foreground'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {t('land')}
            </Link>
            <Link
              href={getLocalizedHref("/activities")}
              className={`block py-2 text-base font-medium transition-colors ${
                isActive('/activities') 
                  ? 'text-primary font-semibold' 
                  : 'text-foreground/80 hover:text-foreground'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {t('activities')}
            </Link>
            <Link
              href={getLocalizedHref("/location")}
              className={`block py-2 text-base font-medium transition-colors ${
                isActive('/location') 
                  ? 'text-primary font-semibold' 
                  : 'text-foreground/80 hover:text-foreground'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {t('location')}
            </Link>
            
            {/* Language Switcher for Mobile */}
            <div className="flex justify-center py-2">
              <LanguageSwitcher />
            </div>
            
            <Link
              href={getLocalizedHref("/book")}
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-lg font-medium text-sm transition-colors mt-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <Building2 className="h-4 w-4" />
              {t('book')}
            </Link>
          </div>
        )}
      </div>
    </header>
  )
}
