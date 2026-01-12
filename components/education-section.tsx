import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Calendar } from "lucide-react"

export function EducationSection() {
  const education = [
    {
      degree: "Licence III Génie Électrique",
      institution: "Institut des Technologies d'Abidjan",
      period: "2024 - 2025",
      status: "En cours",
    },
    {
      degree: "BTS Informatique - Développeur d'Application",
      institution: "Institut des Technologies d'Abidjan",
      period: "2023 - 2024",
      status: "Obtenu",
    },
    {
      degree: "Licence II Génie Électrique",
      institution: "Institut des Technologies d'Abidjan",
      period: "2023 - 2024",
      status: "Obtenu",
    },
    {
      degree: "Licence I Génie Électrique",
      institution: "Institut des Technologies d'Abidjan",
      period: "2022 - 2023",
      status: "Obtenu",
    },
    {
      degree: "Baccalauréat Série D",
      institution: "Lycée Moderne Lucien Yébarth 1 de San-Pedro",
      period: "2021 - 2022",
      status: "Obtenu",
    },
  ]

  return (
    <section id="formation" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-sm text-accent font-medium tracking-wider uppercase">Formation</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-balance">Parcours académique</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Une double formation en Génie Électrique et en Informatique, combinant expertise technique et compétences
              en développement
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2" />

            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="relative">
                  {/* Timeline dot */}
                  <div className="hidden md:block absolute left-1/2 top-8 h-4 w-4 rounded-full bg-accent border-4 border-background -translate-x-1/2 z-10" />

                  <Card
                    className={`md:w-[calc(50%-2rem)] ${index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"} border-border/50`}
                  >
                    <CardContent className="p-6 space-y-3">
                      <div className="flex items-start justify-between gap-4">
                        <div className="space-y-2 flex-1">
                          <div className="flex items-center gap-2 text-accent">
                            <GraduationCap className="h-5 w-5 flex-shrink-0" />
                            <span className="text-sm font-medium">{edu.status}</span>
                          </div>
                          <h4 className="text-xl font-bold text-balance">{edu.degree}</h4>
                          <p className="text-muted-foreground text-pretty">{edu.institution}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground pt-2">
                        <Calendar className="h-4 w-4" />
                        <span>{edu.period}</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12">
            <Card className="border-accent/50 bg-accent/5">
              <CardContent className="p-8 text-center space-y-4">
                <h4 className="text-2xl font-bold">Double compétence unique</h4>
                <p className="text-muted-foreground text-pretty max-w-2xl mx-auto leading-relaxed">
                  Ma formation en Génie Électrique et en Informatique me permet d'aborder les projets technologiques
                  avec une perspective complète, alliant compréhension des systèmes électroniques et expertise en
                  développement logiciel.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
