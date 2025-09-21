import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Linkedin, Mail, Phone } from "lucide-react"

export function ContactSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Connect</h2>
        <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto text-balance">
          Ready to discuss your next project or explore collaboration opportunities? I'd love to hear from you.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                Email
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">williamhatton250@gmail.com</p>
              <Button asChild className="w-full bg-primary hover:bg-primary/90">
                <a href="mailto:williamhatton250@gmail.com">Send Email</a>
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" />
                Phone
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">+1 (585) 304-2335</p>
              <Button asChild variant="outline" className="w-full bg-transparent">
                <a href="tel:+15853042335">Call Now</a>
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="flex justify-center gap-4">
          <Button asChild variant="outline" size="lg">
            <a href="https://0xCodeFuture" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5" />
              GitHub
            </a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="https://linkedin.com/in/william-hatton-518814237" target="_blank" rel="noopener noreferrer">
              <Linkedin className="mr-2 h-5 w-5" />
              LinkedIn
            </a>
          </Button>
        </div>

        <div className="mt-16 pt-8 border-t border-border">
          <p className="text-muted-foreground">
            © 2024 William Hatton. Senior Software Engineer with 12+ years of experience.
          </p>
        </div>
      </div>
    </section>
  )
}
