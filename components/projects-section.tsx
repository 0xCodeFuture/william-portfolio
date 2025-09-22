import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

export function ProjectsSection() {
  const projects = [
    {
      title: "Healthcare Platform",
      description:
        "Built a comprehensive patient management system serving 100K+ users with real-time data synchronization, HIPAA compliance, and AI-powered diagnostics.",
      technologies: ["React", "Node.js", "PostgreSQL", "AWS", "Python", "TensorFlow"],
      highlights: ["99.9% uptime", "HIPAA compliant", "AI diagnostics"],
      category: "Healthcare",
      image: "/modern-healthcare-dashboard-with-patient-data-and-.jpg",
    },
    {
      title: "Fintech Trading Platform",
      description:
        "Developed a high-frequency trading platform processing $50M+ daily volume with microsecond latency and advanced risk management algorithms.",
      technologies: ["Next.js", "Python", "Redis", "WebSocket", "Docker", "Kubernetes"],
      highlights: ["<1ms latency", "$50M+ volume", "Real-time analytics"],
      category: "Fintech",
      image: "/financial-trading-dashboard-with-charts-graphs-and.jpg",
    },
    {
      title: "AdTech Attribution Engine",
      description:
        "Created a multi-touch attribution system analyzing 10B+ events daily, providing actionable insights for marketing optimization.",
      technologies: ["React", "Ruby on Rails", "BigQuery", "Apache Kafka", "ML"],
      highlights: ["10B+ events/day", "Multi-touch attribution", "ML insights"],
      category: "AdTech",
      image: "/marketing-analytics-dashboard-with-attribution-dat.jpg",
    },
    {
      title: "E-commerce Marketplace",
      description:
        "Architected a scalable marketplace platform supporting 1M+ products with advanced search, recommendation engine, and payment processing.",
      technologies: ["Angular", "Node.js", "MongoDB", "Elasticsearch", "Stripe"],
      highlights: ["1M+ products", "AI recommendations", "Global payments"],
      category: "E-commerce",
      image: "/modern-e-commerce-marketplace-with-product-grid-an.jpg",
    },
    {
      title: "SaaS Analytics Dashboard",
      description:
        "Built a comprehensive analytics platform with real-time data visualization, custom reporting, and predictive analytics capabilities.",
      technologies: ["React", "Python", "ClickHouse", "D3.js", "Machine Learning"],
      highlights: ["Real-time analytics", "Custom reports", "Predictive ML"],
      category: "SaaS",
      image: "/business-analytics-dashboard-with-charts-metrics-a.jpg",
    },
    {
      title: "Mobile Banking App",
      description:
        "Developed a secure mobile banking application with biometric authentication, P2P payments, and investment tracking features.",
      technologies: ["React Native", "Node.js", "PostgreSQL", "Biometrics", "Encryption"],
      highlights: ["Bank-grade security", "Biometric auth", "P2P payments"],
      category: "Mobile",
      image: "/mobile-banking-app-interface-with-account-balance-.jpg",
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A showcase of impactful solutions I've built across various industries, demonstrating technical expertise
            and business value delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={`${project.title} screenshot`}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                <Badge variant="outline" className="absolute top-3 left-3 text-xs bg-background/80 backdrop-blur-sm">
                  {project.category}
                </Badge>
              </div>

              <CardHeader className="pb-3">
                <CardTitle className="text-xl text-foreground">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed text-sm">{project.description}</p>

                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-2">Key Highlights</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.highlights.map((highlight, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-2">Technologies</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex space-x-2 pt-2">
                  <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Details
                  </Button>
                  {/* <Button size="sm" variant="ghost">
                    <Github className="h-4 w-4" />
                  </Button> */}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
