import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Equuleus Technologies - Digital Transformation & IT Services",
  description:
    "Empowering businesses with digital transformation, IT managed services, digital marketing, and staff augmentation. 20+ years of collective experience.",
  keywords:
    "digital transformation, IT services, managed services, digital marketing, staff augmentation, cloud migration, DevOps",
    generator: 'v0.dev'
}

function Navigation() {
  return (
    <header className="sticky top-0 z-50 bg-black border-b border-green-600 shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center font-bold text-white text-2xl">
            <span className="text-green-500">EL</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-300 hover:text-green-500 transition-colors font-medium">
              Home
            </Link>
            <Link href="/about" className="text-gray-300 hover:text-green-500 transition-colors font-medium">
              About
            </Link>
            <Link href="/services" className="text-gray-300 hover:text-green-500 transition-colors font-medium">
              Services
            </Link>
            <Button className="bg-green-600 hover:bg-green-700 text-white rounded-lg px-6">
              <Link href="/contact">Contact</Link>
            </Button>
          </nav>

          <Button variant="ghost" size="sm" className="md:hidden text-white hover:text-green-500">
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="bg-black text-gray-300 border-t border-green-600">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4 text-white">About</h3>
            <p className="text-sm leading-relaxed">
              Equuleus Technology Private Limited specializes in custom development, AI-first solutions, application support, and managed services.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-white">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services" className="hover:text-green-500 transition-colors">
                  Custom Development
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-green-500 transition-colors">
                  AI Solutions
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-green-500 transition-colors">
                  Application Support
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-green-500 transition-colors">
                  Managed Services
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-white">Contact</h3>
            <div className="space-y-3 text-sm">
              <p>
                <strong>Address:</strong><br />
                A-10, Sector 34<br />
                Suncity Township<br />
                Rohtak, Haryana, India
              </p>
              <p>
                <strong>Phone:</strong><br />
                <Link href="tel:+919999398103" className="hover:text-green-500 transition-colors">
                  +91-9999398103
                </Link>
              </p>
              <p>
                <strong>Email:</strong><br />
                <Link href="mailto:info@equuleustechnology.com" className="hover:text-green-500 transition-colors">
                  info@equuleustechnology.com
                </Link>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-sm">
          <p>© 2024 Equuleus Technology Private Limited. All rights reserved.</p>
          <div className="flex justify-center gap-6 mt-4">
            <Link href="#" className="hover:text-green-500 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-green-500 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
