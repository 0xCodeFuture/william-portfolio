import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Phone, Sparkles, Code, Zap } from "lucide-react"

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 pt-32 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary/40 to-accent/40 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-secondary/40 to-primary/40 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-accent/30 to-secondary/30 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="bg-slate-900/80 backdrop-blur-xl rounded-3xl p-8 md:p-12 colorful-hover border border-white/20 shadow-2xl">
          <div className="flex justify-center mb-6">
            <div className="flex space-x-4">
              <div className="p-3 bg-gradient-to-r from-primary to-secondary rounded-full shadow-lg">
                <Code className="h-6 w-6 text-white" />
              </div>
              <div className="p-3 bg-gradient-to-r from-accent to-primary rounded-full shadow-lg">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              <div className="p-3 bg-gradient-to-r from-secondary to-accent rounded-full shadow-lg">
                <Zap className="h-6 w-6 text-white" />
              </div>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance text-white drop-shadow-lg relative">
            <span className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent blur-sm opacity-50"></span>
            <span className="relative">William Hatton</span>
          </h1>
          <h2 className="text-2xl md:text-3xl mb-8 font-medium text-white drop-shadow-md relative">
            <span className="absolute inset-0 bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent blur-sm opacity-50"></span>
            <span className="relative">Senior Software Engineer</span>
          </h2>
          <p className="text-xl md:text-2xl text-white/95 mb-12 max-w-3xl mx-auto text-balance leading-relaxed drop-shadow-sm">
            12+ years of experience crafting exceptional digital solutions across Healthcare, Fintech, eCommerce,
            AdTech, and SaaS platforms. Specializing in Full Stack Development, DevOps, and AI/ML technologies.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 border-0"
            >
              <a href="#connect">
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-slate-900 font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 bg-slate-800/50 backdrop-blur-sm"
            >
              <a href="https://github.com/0xCodeFuture" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-white font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 bg-white/10 backdrop-blur-sm"
            >
              <a href="https://linkedin.com/in/william-hatton-518814237" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </a>
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-white/90">
            <div className="flex items-center gap-2 p-3 bg-gradient-to-r from-primary/30 to-accent/30 rounded-full backdrop-blur-sm border border-white/20">
              <Mail className="h-4 w-4 text-primary" />
              <span className="font-medium">williamhatton250@gmail.com</span>
            </div>
            <div className="flex items-center gap-2 p-3 bg-gradient-to-r from-secondary/30 to-primary/30 rounded-full backdrop-blur-sm border border-white/20">
              <Phone className="h-4 w-4 text-secondary" />
              <span className="font-medium">+1 (585) 304-2335</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
