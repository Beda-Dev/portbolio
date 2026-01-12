import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"
import Link from "next/link"

export function ProjectsSection() {
  const projects = [
    {
      title: "Applications Web Next.js",
      description:
        "Développement et maintenance d'applications web modernes utilisant Next.js, avec intégration d'interfaces utilisateur responsive et performantes.",
      tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      company: "DIGIFAZ",
      period: "2024 - Présent",
    },
    {
      title: "Intégration d'APIs REST",
      description:
        "Conception et intégration de fonctionnalités front-end connectées à des APIs backend, assurant une communication fluide entre les services.",
      tags: ["API REST", "JavaScript", "Fetch API", "State Management"],
      company: "DIGIFAZ",
      period: "2024 - Présent",
    },
    {
      title: "Applications Mobile Flutter",
      description:
        "Développement d'applications mobiles cross-platform pour Android, avec focus sur l'expérience utilisateur et la performance.",
      tags: ["Flutter", "Dart", "Android", "Mobile UI"],
      company: "Projets académiques",
      period: "2024",
    },
    {
      title: "Systèmes de Design UI/UX",
      description:
        "Conception et prototypage d'interfaces utilisateur avec Figma, création de maquettes interactives et systèmes de design cohérents.",
      tags: ["Figma", "UI/UX", "Prototyping", "Design Systems"],
      company: "Projets personnels",
      period: "2024 - Présent",
    },
  ]

  return (
    <section id="projets" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-sm text-accent font-medium tracking-wider uppercase">Projets</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-balance">Réalisations et contributions</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Une sélection de projets qui démontrent mon expertise technique et ma capacité à livrer des solutions
              complètes
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <Card
                key={project.title}
                className="border-border/50 hover:border-accent/50 transition-all hover:shadow-lg"
              >
                <CardHeader>
                  <div className="space-y-2">
                    <CardTitle className="text-xl text-balance">{project.title}</CardTitle>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span>{project.company}</span>
                      <span>•</span>
                      <span>{project.period}</span>
                    </div>
                  </div>
                  <CardDescription className="text-pretty leading-relaxed pt-2">{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-accent/10 text-accent border-accent/20">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center pt-8">
            <Button asChild variant="outline" size="lg">
              <Link href="https://github.com/Beda-Dev" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 mr-2" />
                Voir plus sur GitHub
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
