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
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/shelter" className="text-muted-foreground hover:text-foreground transition-colors">
                  The Shelter
                </Link>
              </li>
              <li>
                <Link href="/land" className="text-muted-foreground hover:text-foreground transition-colors">
                  The Land
                </Link>
              </li>
              <li>
                <Link href="/activities" className="text-muted-foreground hover:text-foreground transition-colors">
                  What You'll Do
                </Link>
              </li>
              <li>
                <Link 
                  href="https://book.recharge.com.ar/listing/110889" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Book Now
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Location</h3>
            <p className="text-sm text-muted-foreground">
              Ruta 11, km 429.5
              <br />
              Turn at "Camping" sign
              <br />
              Buenos Aires, Argentina
            </p>
          </div>
        </div>

        <div className="border-t mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Recharge Retreat. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
