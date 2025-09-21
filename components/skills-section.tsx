import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Server, Cloud, Brain } from "lucide-react"

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Code,
      skills: ["JavaScript/TypeScript", "React", "Next.js", "Angular", "React Native"],
      description: "Building responsive, performant user interfaces",
    },
    {
      title: "Backend Development",
      icon: Server,
      skills: ["Node.js", "Python", "Ruby on Rails", "API Design", "Database Design"],
      description: "Scalable server-side architecture and APIs",
    },
    {
      title: "DevOps & Cloud",
      icon: Cloud,
      skills: ["AWS", "Docker", "CI/CD", "Infrastructure as Code", "Monitoring"],
      description: "Streamlined deployment and infrastructure management",
    },
    {
      title: "AI & Machine Learning",
      icon: Brain,
      skills: ["Machine Learning", "Data Analysis", "AI Integration", "Model Deployment"],
      description: "Intelligent solutions and data-driven insights",
    },
  ]

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">Technical Expertise</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-balance">
            Comprehensive skill set spanning the entire technology stack
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon
            return (
              <Card key={index} className="bg-card border-border hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{category.title}</CardTitle>
                  </div>
                  <p className="text-muted-foreground">{category.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="bg-secondary/20 text-secondary hover:bg-secondary/30"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
