import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Code2,
  Brain,
  Headphones,
  Wrench,
  CheckCircle,
  ArrowRight,
  Zap,
  Shield,
  BarChart3,
} from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-20">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive technology solutions tailored to your business needs
          </p>
        </div>

        {/* Custom Development */}
        <section className="mb-20">
          <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="pb-4">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-black p-3 rounded-lg">
                  <Code2 className="h-8 w-8 text-green-500" />
                </div>
                <div>
                  <CardTitle className="text-3xl">Custom Development</CardTitle>
                  <p className="text-gray-600 mt-2">
                    Tailored software solutions built specifically for your unique business challenges
                  </p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-bold text-lg mb-3">What We Deliver</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Full-stack web applications",
                    "Mobile app development",
                    "API design and development",
                    "Cloud architecture",
                    "Database optimization",
                    "Microservices architecture"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-3">Technologies We Use</h3>
                <div className="flex flex-wrap gap-2">
                  {["React", "Node.js", "TypeScript", "PostgreSQL", "AWS", "Docker", "Kubernetes"].map((tech, idx) => (
                    <Badge key={idx} variant="secondary" className="bg-green-100 text-green-800">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              <Button className="bg-green-600 hover:bg-green-700 text-white">
                <Link href="/contact">Start Your Project</Link>
              </Button>
            </CardContent>
          </Card>
        </section>

        {/* AI-First Solutions */}
        <section className="mb-20">
          <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="pb-4">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-black p-3 rounded-lg">
                  <Brain className="h-8 w-8 text-green-500" />
                </div>
                <div>
                  <CardTitle className="text-3xl">AI-First Solutions</CardTitle>
                  <p className="text-gray-600 mt-2">
                    Harness the power of artificial intelligence to automate, optimize, and innovate
                  </p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-bold text-lg mb-3">AI Services</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Machine learning model development",
                    "Large Language Model (LLM) integration",
                    "Natural language processing",
                    "Computer vision solutions",
                    "Predictive analytics",
                    "AI-powered automation"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-3">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {["Python", "TensorFlow", "PyTorch", "OpenAI APIs", "LangChain", "LLaMA"].map((tech, idx) => (
                    <Badge key={idx} variant="secondary" className="bg-green-100 text-green-800">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              <Button className="bg-green-600 hover:bg-green-700 text-white">
                <Link href="/contact">Explore AI Solutions</Link>
              </Button>
            </CardContent>
          </Card>
        </section>

        {/* Application Support */}
        <section className="mb-20">
          <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="pb-4">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-black p-3 rounded-lg">
                  <Headphones className="h-8 w-8 text-green-500" />
                </div>
                <div>
                  <CardTitle className="text-3xl">Application Support</CardTitle>
                  <p className="text-gray-600 mt-2">
                    24/7 dedicated support ensuring maximum uptime and optimal performance
                  </p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-bold text-lg mb-3">Support Services</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "24/7 incident response",
                    "Performance monitoring",
                    "Bug fixes and patches",
                    "Security updates",
                    "User support and training",
                    "Continuous optimization"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <p className="font-semibold text-green-900">Service Level Agreement (SLA)</p>
                <p className="text-green-800 mt-2">99% uptime guarantee with priority support escalation</p>
              </div>

              <Button className="bg-green-600 hover:bg-green-700 text-white">
                <Link href="/contact">Get Support Plan</Link>
              </Button>
            </CardContent>
          </Card>
        </section>

        {/* Managed Services */}
        <section className="mb-20">
          <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="pb-4">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-black p-3 rounded-lg">
                  <Wrench className="h-8 w-8 text-green-500" />
                </div>
                <div>
                  <CardTitle className="text-3xl">Managed Services</CardTitle>
                  <p className="text-gray-600 mt-2">
                    End-to-end IT management allowing you to focus on core business operations
                  </p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-bold text-lg mb-3">Managed Services Include</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Infrastructure management",
                    "Cloud operations",
                    "Security management",
                    "Backup and disaster recovery",
                    "Network monitoring",
                    "Capacity planning"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-3">Platforms We Manage</h3>
                <div className="flex flex-wrap gap-2">
                  {["AWS", "Azure", "GCP", "Kubernetes", "Linux", "Windows"].map((platform, idx) => (
                    <Badge key={idx} variant="secondary" className="bg-green-100 text-green-800">
                      {platform}
                    </Badge>
                  ))}
                </div>
              </div>

              <Button className="bg-green-600 hover:bg-green-700 text-white">
                <Link href="/contact">Discuss Your Needs</Link>
              </Button>
            </CardContent>
          </Card>
        </section>

        {/* CTA Section */}
        <section className="bg-black text-white py-16 px-8 rounded-xl text-center">
          <h2 className="text-3xl font-bold mb-4">Need More Information?</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Our team is ready to discuss how these services can benefit your organization
          </p>
          <Button className="bg-green-600 hover:bg-green-700 text-white px-8">
            <Link href="/contact" className="flex items-center gap-2">
              Contact Our Team <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </section>
      </div>
    </div>
  )
}


