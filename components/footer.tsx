"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

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

        <div className="border-t mt-8 pt-6 text-center">
          <p className="text-xs text-muted-foreground">
            {es ? "Copyright" : "Copyright"} {new Date().getFullYear()} Recharge Retreat. {es ? "Todos los derechos reservados." : "All rights reserved."}
            © {new Date().getFullYear()} Recharge Retreat. {es ? "Todos los derechos reservados." : "All rights reserved."}
          </p>
        </div>
      </div>
    </footer>
  )
}
