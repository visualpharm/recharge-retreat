import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold mb-4">Recharge Retreat</h3>
            <p className="text-sm text-muted-foreground">
              Private autonomous shelter in the dunes.
              <br />
              Disconnect. Recharge. Return.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Related Projects</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link 
                  href="https://ilbuco.com.ar" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Il Buco, ultra modern co-living in Carilo
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Project Credit</h3>
            <p className="text-sm text-muted-foreground">
              <Link 
                href="https://aiandtractors.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors"
              >
                Project of Ivan Braun, AI entrepreneur and speaker
              </Link>
            </p>
          </div>
        </div>

        <div className="border-t mt-8 pt-6 text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Recharge Retreat. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
