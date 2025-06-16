"use client" // Add this if not present, for useTranslation hook

import Link from "next/link"
import { useTranslation } from "@/components/translation-provider" // Make sure this path is correct

export default function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t mt-16">
      <div className="container mx-auto px-4 py-8">
        {/* Adjusted grid to accommodate 4 columns on medium screens and up */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold mb-4">Recharge Retreat</h3> {/* This could also be from t() if needed */}
            <p className="text-sm text-muted-foreground" dangerouslySetInnerHTML={{ __html: t('footer.description') }} />
          </div>

          {/* New Column for Explore More Links */}
          <div>
            <h3 className="font-semibold mb-4">{t('footer.exploreMoreTitle')}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/en/argentina-shelter" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t('footer.linkArgentinaShelter')}
                </Link>
              </li>
              <li>
                <Link href="/en/survival-shelters-argentina" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t('footer.linkSurvivalShelters')}
                </Link>
              </li>
              <li>
                <Link href="/en/survival-bunker-argentina" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t('footer.linkSurvivalBunker')}
                </Link>
              </li>
              <li>
                <Link href="/en/bunker-argentina" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t('footer.linkBunkerArgentina')}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">{t('footer.relatedProjectsTitle')}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link 
                  href="https://ilbuco.com.ar" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Il Buco, ultra modern co-living in Carilo {/* This specific text could also be a translation key */}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">{t('footer.projectCreditTitle')}</h3>
            <p className="text-sm text-muted-foreground">
              <Link 
                href="https://aiandtractors.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors"
              >
                Project of Ivan Braun, AI entrepreneur and speaker {/* This specific text could also be a translation key */}
              </Link>
            </p>
          </div>
        </div>

        <div className="border-t mt-8 pt-6 text-center">
          <p className="text-xs text-muted-foreground">
            {t('footer.copyright', { year: currentYear })}
          </p>
        </div>
      </div>
    </footer>
  )
}
