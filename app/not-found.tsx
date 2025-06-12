import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="max-w-md text-center px-4">
        <h1 className="text-4xl font-bold mb-4">You got lost in the dunes...</h1>
        <p className="text-xl text-muted-foreground mb-8">...but not for real. This page doesn't exist.</p>
        <Link href="/">
          <Button size="lg" className="gap-2">
            <ArrowLeft className="h-5 w-5" /> Find your way back
          </Button>
        </Link>
      </div>
    </div>
  )
}
