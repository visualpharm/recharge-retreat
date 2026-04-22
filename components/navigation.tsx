"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useTranslation } from './translation-provider'
import { Menu, X } from "lucide-react"
import SimpleLanguageSwitcher from "./simple-language-switcher"

const MELI_LISTING_URL = "https://inmueble.mercadolibre.com.ar/MLA-PLACEHOLDER"

export default function Navigation({ transparent = false }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const { locale, t } = useTranslation()

  const isActive = (path: string) => {
    // Remove locale prefix from pathname for comparison
    const pathWithoutLocale = pathname.replace(/^\/(en|pt)/, '') || '/'
    return pathWithoutLocale === path
  }

  const getLocalizedHref = (path: string) => {
    return locale === 'es' ? path : `/${locale}${path}`
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-20">
      {/* Sale announcement banner */}
      <div className="bg-amber-500 text-amber-950 text-center py-2 px-4 text-sm font-medium">
        <span>{t('saleBanner.text')}</span>
        {' '}
        <span className="font-bold">{t('saleBanner.forSale')}</span>
        {' '}
        <a
          href={MELI_LISTING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:no-underline font-bold"
        >
          {t('saleBanner.linkText')}
        </a>
      </div>
      <div className="border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-row items-center justify-between">
          <Link href={getLocalizedHref("/")} className="font-semibold text-lg">
            Recharge Retreat
          </Link>

          {/* Mobile menu button */}
          <button className="md:hidden text-foreground" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* Desktop navigation - centered */}
          <nav className="hidden md:flex items-center justify-center flex-1 gap-8 mx-8">
            <Link
              href={getLocalizedHref("/shelter")}
              className={`text-base font-medium transition-colors ${
                isActive('/shelter') 
                  ? 'text-primary font-semibold' 
                  : 'text-foreground/80 hover:text-foreground'
              }`}
            >
              {t('nav.shelter')}
            </Link>
            <Link
              href={getLocalizedHref("/land")}
              className={`text-base font-medium transition-colors ${
                isActive('/land') 
                  ? 'text-primary font-semibold' 
                  : 'text-foreground/80 hover:text-foreground'
              }`}
            >
              {t('nav.land')}
            </Link>
            <Link
              href={getLocalizedHref("/activities")}
              className={`text-base font-medium transition-colors ${
                isActive('/activities') 
                  ? 'text-primary font-semibold' 
                  : 'text-foreground/80 hover:text-foreground'
              }`}
            >
              {t('nav.activities')}
            </Link>
            <Link
              href={getLocalizedHref("/location")}
              className={`text-base font-medium transition-colors ${
                isActive('/location') 
                  ? 'text-primary font-semibold' 
                  : 'text-foreground/80 hover:text-foreground'
              }`}
            >
              {t('nav.location')}
            </Link>
          </nav>

          {/* Language Switcher */}
          <div className="hidden md:flex items-center gap-4 ml-auto">
            <SimpleLanguageSwitcher />
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
              {t('nav.shelter')}
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
              {t('nav.land')}
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
              {t('nav.activities')}
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
              {t('nav.location')}
            </Link>

            {/* Language Switcher for Mobile */}
            <div className="flex justify-center py-2">
              <SimpleLanguageSwitcher />
            </div>
          </div>
        )}
      </div>
      </div>
    </header>
  )
}
