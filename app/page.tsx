'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, MessageSquare, Lightbulb, Cpu, Rocket, Headphones, BarChart3, ArrowRight, Zap, Globe, Users, Award } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Transform Your Business with
                <span className="text-orange-500 block">Digital Excellence</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
                Empowering businesses to transform with confidence, operate with agility, and grow with purpose through innovative technology solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-6 text-lg rounded-lg font-semibold">
                  <Link href="/contact" className="flex items-center">
                    Get Started Today <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-6 text-lg rounded-lg font-semibold">
                  <Link href="/services">Explore Services</Link>
                </Button>
              </div>
              <div className="flex gap-12 pt-8">
                <div>
                  <div className="text-3xl font-bold text-orange-500">25+</div>
                  <p className="text-gray-400">Yrs Industry Experience</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-orange-500">10+</div>
                  <p className="text-gray-400">Projects Delivered</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-orange-500">4</div>
                  <p className="text-gray-400">Happy Clients</p>
                </div>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="relative bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg p-8 shadow-2xl">
                <Image
                  src="/placeholder.svg?height=500&width=600"
                  alt="Digital transformation"
                  width={600}
                  height={500}
                  className="rounded-lg bg-gray-700 w-full"
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
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Comprehensive Technology Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From digital transformation to staff augmentation, we provide end-to-end technology services that drive business growth and innovation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Zap, title: "Digital Transformation", desc: "Modernize your business processes with cutting-edge digital solutions and cloud-first strategies.", color: "bg-orange-50 hover:shadow-lg" },
              { icon: Globe, title: "IT Managed Services", desc: "Comprehensive IT support and infrastructure management to keep your business running smoothly.", color: "bg-blue-50 hover:shadow-lg" },
              { icon: BarChart3, title: "Digital Marketing", desc: "Data-driven marketing strategies to enhance your online presence and drive customer engagement.", color: "bg-green-50 hover:shadow-lg" },
              { icon: Users, title: "Staff Augmentation", desc: "Scale your team with skilled professionals who integrate seamlessly with your existing workforce.", color: "bg-purple-50 hover:shadow-lg" }
            ].map((service, idx) => (
              <Card key={idx} className={`border-0 ${service.color} transition-all duration-300`}>
                <CardHeader className="text-center">
                  <div className="mx-auto bg-gray-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-4">
                    <service.icon className="h-8 w-8 text-gray-700" />
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us - Process */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Why Equuleus Technology?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our proven process ensures your success at every step
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-4 mb-16">
            {[
              { icon: MessageSquare, title: "Requirement Gathering", desc: "We understand your need to start the development process on the right foot.", color: "bg-blue-500" },
              { icon: Lightbulb, title: "Idea Exploration", desc: "We shape your ideas into solutions through intensive research.", color: "bg-orange-500" },
              { icon: Cpu, title: "Tech Check", desc: "We craft the best tech stack and implementation method to execute the project.", color: "bg-green-500" },
              { icon: Rocket, title: "Agile Development", desc: "We build the solution bit by bit with reliable results and zero hassle.", color: "bg-purple-500" },
              { icon: Headphones, title: "Steady Support", desc: "We ensure a smooth run after launch by providing continuous support.", color: "bg-red-500" }
            ].map((step, idx) => (
              <Card key={idx} className="border-0 bg-white shadow-md hover:shadow-lg transition-shadow">
                <CardHeader className="text-center pb-3">
                  <div className={`mx-auto ${step.color} rounded-full p-4 w-14 h-14 flex items-center justify-center mb-3`}>
                    <step.icon className="h-7 w-7 text-white" />
                  </div>
                  <CardTitle className="text-sm font-semibold">{step.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-xs text-gray-600 leading-relaxed">{step.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Business analytics"
                width={500}
                height={400}
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-orange-100 rounded-full p-3 mt-1 flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">99% Uptime Guarantee</h3>
                  <p className="text-gray-600">Our infrastructure ensures maximum availability and reliability for your critical applications and services.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-orange-100 rounded-full p-3 mt-1 flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Expert Team</h3>
                  <p className="text-gray-600">Our team of experienced professionals brings decades of collective expertise to every project.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-orange-100 rounded-full p-3 mt-1 flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Proven Methodology</h3>
                  <p className="text-gray-600">We follow industry best practices and agile methodologies to deliver exceptional results.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Join hundreds of companies that have accelerated their growth with our innovative technology solutions. Let's discuss how we can help you achieve your digital transformation goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-6 text-lg rounded-lg font-semibold">
                <Link href="/contact">Start Your Journey</Link>
              </Button>
              <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-6 text-lg rounded-lg font-semibold">
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 bg-gray-100 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold text-orange-600 mb-2">25+</h3>
              <p className="text-gray-600 font-semibold">Years of Experience</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold text-orange-600 mb-2">10+</h3>
              <p className="text-gray-600 font-semibold">Successful Projects</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold text-orange-600 mb-2">100%</h3>
              <p className="text-gray-600 font-semibold">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
