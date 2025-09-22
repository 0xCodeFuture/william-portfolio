import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Calendar } from "lucide-react";

export function ExperienceSection() {
  const experiences = [
    {
      company: "Goitrise",
      period: "October 2022 - Present",
      duration: "2+ years",
      role: "Senior Software Engineer",
      description:
        "Leading full-stack development initiatives and mentoring junior developers",
    },
    {
      company: "DockYard",
      period: "September 2019 - September 2022",
      duration: "3 years",
      role: "Senior Full Stack Engineer",
      description:
        "Developed complex web applications and implemented DevOps best practices",
    },
    {
      company: "BairesDev",
      period: "February 2015 - August 2019",
      duration: "4+ years",
      role: "Freelance Software Engineer",
      description:
        "Built scalable solutions for international clients across multiple industries",
    },
    {
      company: "Clover Health",
      period: "February 2013 - January 2015",
      duration: "2 years",
      role: "Full Stack Developer",
      description:
        "Contributed to healthcare platform development and data analytics",
    },
  ];

  const industries = ["AI-powered SaaS", "Healthcare", "eCommerce", "Fintech"];

  return (
    <section id="experience" className="py-20 px-4 bg-card/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Professional Journey
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            12+ years of delivering impactful solutions across diverse
            industries
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-center">
            Industry Experience
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {industries.map((industry, index) => (
              <Badge
                key={index}
                variant="outline"
                className="text-lg py-2 px-4 border-primary/30 text-primary"
              >
                {industry}
              </Badge>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index} className="bg-card border-border">
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Building className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{exp.company}</CardTitle>
                      <p className="text-primary font-medium">{exp.role}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm">{exp.period}</span>
                    <Badge variant="secondary" className="ml-2">
                      {exp.duration}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{exp.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="bg-card border-border max-w-md mx-auto">
            <CardHeader>
              <CardTitle className="text-xl">Education</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                <strong>Bachelor of Science</strong>
                <br />
                Information Technology
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
