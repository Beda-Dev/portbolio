import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function HeroSection() {
  return (
    <section id="accueil" className="min-h-screen flex items-center justify-center pt-16 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 text-center md:text-left">
            <div className="space-y-4">
              <p className="text-sm text-accent font-medium tracking-wider uppercase">Développeur Full Stack</p>
              <h1 className="text-5xl md:text-7xl font-bold text-balance leading-tight">Dingui Beda Junior</h1>
              <p className="text-xl md:text-2xl text-muted-foreground text-balance max-w-2xl">
                Je transforme des idées en applications web et mobile performantes, modernes et centrées sur l'expérience
                utilisateur.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Button asChild size="lg">
                <Link href="#contact">Me contacter</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="#projets">Voir mes projets</Link>
              </Button>
            </div>

            <div className="flex gap-4 justify-center md:justify-start">
              <Link
                href="https://github.com/Beda-Dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://www.linkedin.com/in/dingui-beda-junior"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="mailto:dinguibedajunior@gmail.com"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="relative w-80 h-80 md:w-96 md:h-96">
              <Image
                src="/images/Beda 3.webp"
                alt="Dingui Beda Junior"
                fill
                className="object-cover object-top rounded-full shadow-lg"
                priority
              />
            </div>
          </div>
        </div>

        <div className="mt-16 flex justify-center">
          <Link href="#apropos" className="animate-bounce">
            <ArrowDown className="h-6 w-6 text-muted-foreground" />
            <span className="sr-only">Scroll vers le bas</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
