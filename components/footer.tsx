"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Instagram } from "lucide-react";

export default function Footer() {
  const pathname = usePathname();
  const es = pathname?.startsWith("/es");
  const p = es ? "/es" : "";
  return (
    <footer className="border-t mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold mb-4">Recharge Retreat</h3>
            <p className="text-sm text-muted-foreground mb-4">
              {es ? (
                <>
                  Refugio autónomo privado en las dunas.
                  <br />
                  Desconectate. Recargate. Regresa.
                </>
              ) : (
                <>
                  Private autonomous shelter in the dunes.
                  <br />
                  Disconnect. Recharge. Return.
                </>
              )}
            </p>
            <div className="mt-4">
              <Link 
                href="https://www.instagram.com/retreat.querandi/" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span>@retreat.querandi</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">{es ? "El Proyecto del Refugio" : "The Shelter Project"}</h3>
            <ul className="space-y-1 text-sm">
              <li>
                <Link href={`${p}/argentina-shelter`} className="text-muted-foreground hover:text-foreground transition-colors">
                  {es ? "Refugio en Argentina" : "Argentina Shelter"}
                </Link>
              </li>
              <li>
                <Link href={`${p}/survival-shelters-argentina`} className="text-muted-foreground hover:text-foreground transition-colors">
                  {es ? "Refugios de Supervivencia Argentina" : "Survival Shelters Argentina"}
                </Link>
              </li>
              <li>
                <Link href={`${p}/survival-bunker-argentina`} className="text-muted-foreground hover:text-foreground transition-colors">
                  {es ? "Bunker de Supervivencia Argentina" : "Survival Bunker Argentina"}
                </Link>
              </li>
              <li>
                <Link href={`${p}/alquiler-cabana-mar-azul`} className="text-muted-foreground hover:text-foreground transition-colors">
                  {es ? "Alquiler Cabaña Mar Azul" : "Mar Azul Cabin Rental"}
                </Link>
              </li>
              <li>
                <Link href={`${p}/bunker-argentina`} className="text-muted-foreground hover:text-foreground transition-colors">
                  Bunker Argentina
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">{es ? "Créditos del Proyecto" : "Project Credit"}</h3>
            <p className="text-sm text-muted-foreground mb-4">
              <Link 
                href="https://aiandtractors.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors"
              >
                {es ? "Proyecto de Ivan Braun, emprendedor de IA y conferencista" : "Project of Ivan Braun, AI entrepreneur and speaker"}
              </Link>
            </p>
            <Link 
              href="https://ilbuco.com.ar" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors block mt-2"
            >
              {es ? "Il Buco, co-living ultramoderno en Cariló" : "Il Buco, ultra modern co-living in Carilo"}
            </Link>
          </div>
        </div>

        {!pathname?.endsWith('/book') && <nav aria-label={es ? "Otros proyectos" : "Other projects"} className="project-links flex flex-wrap gap-x-6 gap-y-4 border-t mt-8 pt-6 text-base text-blue-700 dark:text-blue-300">
          <a href="https://usabruno.com">Bruno</a>
          <a href="https://lira-voice.app">Lira</a>
          <a href="https://humanrounds.org">Human Rounds</a>
          <a href="https://inglesconjenny.vercel.app">Inglés con Jenny</a>
          <a href="https://finda-capital.com">Finda Capital</a>
        </nav>}

        <div className="border-t mt-8 pt-6 text-center">
          <p className="text-base text-foreground">
            © {new Date().getFullYear()} Recharge Retreat. {es ? "Todos los derechos reservados." : "All rights reserved."}
          </p>
        </div>
      </div>
    </footer>
  )
}
