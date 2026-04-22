import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle, Users, Zap, Globe, Award, TrendingUp, MessageSquare, Lightbulb, Cpu, Rocket, Headphones, BarChart3 } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl font-bold leading-tight text-white">
                  Transform Your Business with
                  <span className="text-orange-500 block">Digital Excellence</span>
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
                  From digital transformation to staff augmentation, we provide end-to-end technology services that drive business growth and innovation.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-orange-600 hover:bg-orange-700 text-white text-lg px-8 py-4 rounded-lg"
                >
                  <Link href="/contact" className="flex items-center">
                    Start Your Journey <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white text-lg px-8 py-4 rounded-lg"
                >
                  <Link href="/services">Learn More About Us</Link>
                </Button>
              </div>

              {/* Stats */}
              <div className="flex items-center gap-8 pt-8">
                <div>
                  <div className="text-3xl font-bold text-orange-500">25+</div>
                  <div className="text-sm text-gray-400">Yrs Industry Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-orange-500">10+</div>
                  <div className="text-sm text-gray-400">Projects Delivered</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-orange-500">4</div>
                  <div className="text-sm text-gray-400">Happy Clients</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative bg-gradient-to-br from-orange-400 to-red-400 rounded-2xl p-1 shadow-2xl">
                <Image
                  src="/placeholder.svg?height=500&width=600"
                  alt="Digital transformation illustration"
                  width={600}
                  height={500}
                  className="rounded-2xl bg-slate-800"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Comprehensive Technology Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From digital transformation to staff augmentation, we provide end-to-end technology services that drive business growth and innovation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="group hover:shadow-lg transition-all duration-300 border border-gray-200 rounded-lg">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto bg-orange-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-4 group-hover:bg-orange-600 group-hover:text-white transition-all">
                  <Zap className="h-8 w-8 text-orange-600 group-hover:text-white" />
                </div>
                <CardTitle className="text-lg">Digital Transformation</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-600 text-sm">
                  Modernize your business processes with cutting-edge digital solutions and cloud-first strategies.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border border-gray-200 rounded-lg">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto bg-blue-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <Globe className="h-8 w-8 text-blue-600 group-hover:text-white" />
                </div>
                <CardTitle className="text-lg">IT Managed Services</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-600 text-sm">
                  Comprehensive IT support and infrastructure management to keep your business running smoothly.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border border-gray-200 rounded-lg">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto bg-green-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-4 group-hover:bg-green-600 group-hover:text-white transition-all">
                  <BarChart3 className="h-8 w-8 text-green-600 group-hover:text-white" />
                </div>
                <CardTitle className="text-lg">Digital Marketing</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-600 text-sm">
                  Data-driven marketing strategies to enhance your online presence and drive customer engagement.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border border-gray-200 rounded-lg">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto bg-purple-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-4 group-hover:bg-purple-600 group-hover:text-white transition-all">
                  <Users className="h-8 w-8 text-purple-600 group-hover:text-white" />
                </div>
                <CardTitle className="text-lg">Staff Augmentation</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-600 text-sm">
                  Scale your team with skilled professionals who integrate seamlessly with your existing workforce.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Our Process */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Equuleus Technology?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our proven process ensures your success at every step
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-4">
            <Card className="text-center border-0 bg-white shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <div className="mx-auto bg-blue-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-4">
                  <MessageSquare className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-base">Requirement Gathering</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">We understand your need to start the development process on the right foot.</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 bg-white shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <div className="mx-auto bg-orange-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-4">
                  <Lightbulb className="h-8 w-8 text-orange-600" />
                </div>
                <CardTitle className="text-base">Idea Exploration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">We shape your ideas into solutions through intensive research.</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 bg-white shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <div className="mx-auto bg-green-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-4">
                  <Cpu className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-base">Tech Check</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">We craft the best tech stack and implementation method to execute the project.</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 bg-white shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <div className="mx-auto bg-purple-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-4">
                  <Rocket className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-base">Agile Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">We build the solution bit by bit with reliable results and zero hassle.</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 bg-white shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <div className="mx-auto bg-red-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-4">
                  <Headphones className="h-8 w-8 text-red-600" />
                </div>
                <CardTitle className="text-base">Steady Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">We ensure a smooth run after launch by providing continuous support.</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Business analytics and data visualization"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-orange-100 rounded-full p-3 flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">99% Uptime Guarantee</h3>
                  <p className="text-gray-600">
                    Our infrastructure ensures maximum availability and reliability for your critical applications
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl mb-8 text-gray-300 leading-relaxed">
              Join hundreds of companies that have accelerated their growth with our innovative technology solutions. Let's discuss how we can help you achieve your digital transformation goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white text-lg px-8 py-4 rounded-lg">
                <Link href="/contact" className="flex items-center">
                  Start Your Journey <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-slate-900 text-lg px-8 py-4 rounded-lg"
              >
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
