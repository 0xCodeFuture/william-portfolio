import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Rocket, Award, Code } from "lucide-react";

export function AboutSection() {
  const highlights = [
    {
      icon: <Users className="h-6 w-6" />,
      title: "Team Leadership",
      description:
        "Led cross-functional teams of 6+ developers, implementing agile methodologies and mentoring junior engineers to achieve 40% faster delivery cycles.",
    },
    {
      icon: <Rocket className="h-6 w-6" />,
      title: "Startup Experience",
      description:
        "Built products from 0 to 1 at multiple startups, including architecting scalable systems that handled 10M+ users and $50M+ in transaction volume.",
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Industry Impact",
      description:
        "Delivered mission-critical solutions across AI-powered SaaS, Healthcare, eCommerce, and Fintech, improving patient outcomes and financial accessibility.",
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "Technical Innovation",
      description:
        "Pioneered AI/ML integrations and DevOps practices, reducing deployment time by 80% and improving system reliability to 99.9% uptime.",
    },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A passionate full-stack engineer with over 12 years of experience
            building scalable solutions that drive business growth and improve
            user experiences across diverse industries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {highlights.map((highlight, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:border-primary/50 transition-colors"
            >
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-2 bg-primary/10 rounded-lg text-primary">
                    {highlight.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {highlight.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-card rounded-lg p-8 border border-border">
          <h3 className="text-2xl font-semibold text-foreground mb-6">
            Core Values & Approach
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <Badge variant="secondary" className="mb-3">
                Innovation
              </Badge>
              <p className="text-muted-foreground">
                Constantly exploring emerging technologies and best practices to
                deliver cutting-edge solutions.
              </p>
            </div>
            <div>
              <Badge variant="secondary" className="mb-3">
                Collaboration
              </Badge>
              <p className="text-muted-foreground">
                Building strong relationships with stakeholders and fostering
                inclusive, high-performing teams.
              </p>
            </div>
            <div>
              <Badge variant="secondary" className="mb-3">
                Excellence
              </Badge>
              <p className="text-muted-foreground">
                Committed to writing clean, maintainable code and delivering
                products that exceed expectations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
