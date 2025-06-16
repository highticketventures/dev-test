import { SignedIn, SignedOut, SignInButton } from '@clerk/nextjs'
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
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg text-lg">
                Get Started
              </button>
            </SignInButton>
          </SignedOut>
          
          <SignedIn>
            <div className="space-x-4">
              <Link href="/dashboard" className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg">
                Go to Dashboard
              </Link>
              <Link href="/admin" className="border border-blue-600 text-blue-600 hover:bg-blue-50 font-medium py-3 px-8 rounded-lg">
                Admin Panel
              </Link>
            </div>
          </SignedIn>
        </div>
      </div>
    </div>
  )
}