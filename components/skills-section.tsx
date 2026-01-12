import { Card, CardContent } from "@/components/ui/card"
import { Code, Smartphone, Database, Figma, Layout, Server } from "lucide-react"

export function SkillsSection() {
  const skillCategories = [
    {
      icon: Code,
      title: "Développement Web",
      skills: ["HTML5", "CSS3", "JavaScript", "React.js", "Next.js", "Tailwind CSS"],
    },
    {
      icon: Server,
      title: "Backend",
      skills: ["Node.js", "Express", "API REST", "Authentication", "Server Actions"],
    },
    {
      icon: Database,
      title: "Bases de données",
      skills: ["SQL", "PostgreSQL", "MySQL", "Database Design", "Query Optimization"],
    },
    {
      icon: Smartphone,
      title: "Développement Mobile",
      skills: ["Android", "Cross-platform", "Mobile UI/UX", "App Deployment"],
    },
    {
      icon: Figma,
      title: "Design & Prototypage",
      skills: ["Figma", "UI/UX Design", "Wireframing", "Prototyping", "Design Systems"],
    },
    {
      icon: Layout,
      title: "Outils & Méthodologies",
      skills: ["Git/GitHub", "Bitbucket", "VS Code", "Agile", "Microsoft Office"],
    },
  ]

  return (
    <section id="competences" className="py-24 px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-sm text-accent font-medium tracking-wider uppercase">Compétences</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-balance">Technologies et expertise</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Un ensemble de compétences techniques couvrant l'ensemble du développement d'applications modernes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category) => {
              const Icon = category.icon
              return (
                <Card key={category.title} className="border-border/50 hover:border-accent/50 transition-colors">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-accent/10">
                        <Icon className="h-5 w-5 text-accent" />
                      </div>
                      <h4 className="font-semibold text-lg">{category.title}</h4>
                    </div>
                    <ul className="space-y-2">
                      {category.skills.map((skill) => (
                        <li key={skill} className="text-sm text-muted-foreground flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <div className="mt-12 space-y-4">
            <h4 className="text-xl font-semibold text-center">Langues</h4>
            <div className="flex justify-center gap-8">
              <div className="text-center">
                <p className="font-medium">Français</p>
                <p className="text-sm text-muted-foreground">Langue maternelle</p>
              </div>
              <div className="text-center">
                <p className="font-medium">Anglais</p>
                <p className="text-sm text-muted-foreground">Professionnel</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
