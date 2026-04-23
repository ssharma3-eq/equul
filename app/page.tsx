'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowRight, Code2, Brain, Headphones, Wrench, CheckCircle, Shield } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-black text-white py-32 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  Custom Solutions,
                  <span className="text-green-500 block">AI-Powered Results</span>
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
                  Expert custom development, AI-first solutions, and reliable application support for businesses in Rohtak and beyond.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg rounded-lg font-semibold">
                  <Link href="/contact">Get Started</Link>
                </Button>
                <Button variant="outline" className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-6 text-lg rounded-lg font-semibold">
                  <Link href="/services">Our Services</Link>
                </Button>
              </div>
              <div className="flex gap-8 pt-8 border-t border-gray-700">
                <div>
                  <div className="text-3xl font-bold text-green-500">10+</div>
                  <p className="text-gray-400">Years Experience</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-500">50+</div>
                  <p className="text-gray-400">Projects Completed</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-500">98%</div>
                  <p className="text-gray-400">Client Satisfaction</p>
                </div>
              </div>
            </div>
            <div className="hidden lg:flex items-center justify-center">
              <div className="relative w-full h-96 bg-gradient-to-br from-green-900 to-black rounded-xl border-2 border-green-600 flex items-center justify-center">
                <div className="text-6xl font-bold text-green-500 opacity-20">EL</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Our Core Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive technology solutions tailored to your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Code2,
                title: "Custom Development",
                description: "Tailored software solutions built from the ground up to solve your unique business challenges."
              },
              {
                icon: Brain,
                title: "AI-First Solutions",
                description: "Harness the power of artificial intelligence to automate, optimize, and innovate your operations."
              },
              {
                icon: Headphones,
                title: "Application Support",
                description: "24/7 dedicated support for your applications ensuring maximum uptime and performance."
              },
              {
                icon: Wrench,
                title: "Managed Services",
                description: "End-to-end IT management so you can focus on your core business operations."
              }
            ].map((service, idx) => (
              <Card key={idx} className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white">
                <CardHeader className="pb-3">
                  <div className="mb-4">
                    <service.icon className="h-10 w-10 text-green-600" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold mb-4">Why Partner With Equuleus Technology?</h2>
                <p className="text-xl text-gray-600">
                  We combine expertise, innovation, and dedication to deliver results that matter.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  "Expert team with 10+ years in custom development",
                  "AI-first approach to modern problem-solving",
                  "Reliable 24/7 application support and monitoring",
                  "Managed services that scale with your business",
                  "Transparent communication and project management",
                  "Based in Rohtak with global reach"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-700 text-lg">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-black rounded-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Our Expertise</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-lg mb-2">Technologies</h4>
                  <p className="text-gray-300 text-sm">Modern tech stacks including React, Node.js, Python, Cloud platforms, and more.</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-lg mb-2">Industries</h4>
                  <p className="text-gray-300 text-sm">E-commerce, SaaS, Healthcare, Finance, and Enterprise applications.</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-lg mb-2">Approach</h4>
                  <p className="text-gray-300 text-sm">Agile methodology with transparent communication and continuous improvement.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>      </section>

      {/* Process Section */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Our Process</h2>
            <p className="text-xl text-gray-600">How we turn your vision into reality</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { num: "01", title: "Discovery", desc: "Understand your requirements and business goals" },
              { num: "02", title: "Planning", desc: "Design scalable architecture and AI integration" },
              { num: "03", title: "Development", desc: "Build with cutting-edge tech and best practices" },
              { num: "04", title: "Support", desc: "24/7 monitoring and continuous optimization" }
            ].map((step, idx) => (
              <div key={idx} className="text-center">
                <div className="bg-black text-green-500 rounded-full w-16 h-16 flex items-center justify-center font-bold text-2xl mx-auto mb-4">
                  {step.num}
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-black text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Transform Your Technology?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how custom development, AI solutions, and managed services can accelerate your business.
          </p>
          <Button className="bg-green-600 hover:bg-green-700 text-white px-10 py-6 text-lg rounded-lg font-semibold">
            <Link href="/contact" className="flex items-center gap-2">
              Start a Conversation <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
