import { Card, CardContent } from "@/components/ui/card"
import { Calendar, MapPin, Briefcase } from "lucide-react"

export function ExperienceSection() {
  const experiences = [
    {
      title: "Développeur Front-End - EDUCTY NOVA",
      company: "DIGIFAZ",
      period: "Octobre 2024 - Présent",
      location: "Abidjan, Côte d'Ivoire",
      responsibilities: [
        "Développement de l'interface utilisateur d'une application de gestion scolaire avec Next.js 14, React 18 et TypeScript",
        "Conception et intégration de composants réutilisables avec Tailwind CSS ",
        "Mise en place d'un système de cache avec IndexedDB pour optimiser les performances",
        "Intégration complète avec l'API REST backend  pour la gestion des inscriptions, paiements et suivi académique",
        "Développement de formulaires multi-étapes pour l'inscription des élèves avec validation en temps réel ",
        "Création de tableaux de bord interactifs avec visualisation de données ",
      ],
    },
    {
      title: "Développeur Back-End - Kbine Mobile",
      company: "Projet Freelance",
      period: "2025 - Présent",
      location: "Abidjan, Côte d'Ivoire",
      responsibilities: [
        "Développement d'une API RESTful avec Node.js et Express.js pour une plateforme d'achat de crédits téléphoniques",
        "Conception et implémentation d'une architecture clean (controllers, services, repositories)",
        "Intégration de systèmes de paiement mobile (Wave, Orange Money, MTN Money, Moov Money) via TouchPoint API",
        "Mise en place d'un système d'authentification  avec gestion des rôles ",
        "Développement d'un système de notifications push avec Firebase Cloud Messaging (FCM)",
        "Implémentation de notifications temps réel pour le suivi des commandes",
        "Gestion de base de données MySQL ",
      ],
    },
  ]

  return (
    <section id="experience" className="py-24 px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-sm text-accent font-medium tracking-wider uppercase">Expérience</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-balance">Parcours professionnel</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Une expérience pratique dans le développement d'applications web professionnelles
            </p>
          </div>

          <div className="space-y-6">
            {experiences.map((exp) => (
              <Card key={exp.title} className="border-l-4 border-l-accent">
                <CardContent className="p-6 md:p-8 space-y-6">
                  <div className="space-y-4">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                      <div className="space-y-1">
                        <h4 className="text-2xl font-bold">{exp.title}</h4>
                        <div className="flex items-center gap-2 text-lg text-accent font-medium">
                          <Briefcase className="h-4 w-4" />
                          <span>{exp.company}</span>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2 text-sm text-muted-foreground md:text-right">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    <ul className="space-y-3 pt-4">
                      {exp.responsibilities.map((resp, index) => (
                        <li key={index} className="flex gap-3 text-muted-foreground leading-relaxed">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
                          <span className="text-pretty">{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
