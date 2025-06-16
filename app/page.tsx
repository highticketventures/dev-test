import { SignedIn, SignedOut, SignInButton } from '@clerk/nextjs'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            HTV Request Hub
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Multi-tenant request management system with real-time updates and Linear integration.
          </p>
          
          <SignedOut>
            <SignInButton mode="modal">
              <Button size="lg" className="text-lg px-8 py-4">
                Get Started
              </Button>
            </SignInButton>
          </SignedOut>
          
          <SignedIn>
            <div className="space-x-4">
              <Button asChild size="lg">
                <Link href="/dashboard">
                  Go to Dashboard
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/admin">
                  Admin Panel
                </Link>
              </Button>
            </div>
          </SignedIn>
        </div>
      </div>
    </div>
  )
}