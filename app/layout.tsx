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
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/equuleus-logo.jpg"
              alt="Equuleus Technologies Logo"
              width={180}
              height={60}
              className="h-12 w-auto"
            />
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">
              About
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">
              Services
            </Link>
            <Link href="/careers" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">
              Careers
            </Link>
            <Button className="bg-orange-600 hover:bg-orange-700 text-white rounded-lg px-6">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </nav>

          <Button variant="ghost" size="sm" className="md:hidden">
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h3 className="font-semibold text-lg mb-6">Services</h3>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <Link href="/services" className="hover:text-white transition-colors">
                    Digital Transformation
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-white transition-colors">
                    IT Managed Services
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-white transition-colors">
                    Digital Marketing
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-white transition-colors">
                    Staff Augmentation
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-6">Company</h3>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <Link href="/about" className="hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="hover:text-white transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-6">Innovation</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Leading the future with cloud-first solutions and innovative technology partnerships.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 py-8">
        <div className="container mx-auto px-4">
          <div className="text-center text-gray-400 text-sm">
            <p className="mb-2">© 2026 Equuleus Technology. All rights reserved.</p>
            <div className="flex justify-center space-x-6 mb-4">
              <Link href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
            <p className="mb-2">📍 Plot no. A-10, First Floor, Sector - 34, Rohtak, Haryana, India</p>
            <p>📞 +91 9999398103 | ✉️ info@equuleustechnologies.com</p>
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
