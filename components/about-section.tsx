export function AboutSection() {
  const calculateAge = () => {
    const birthDate = new Date('2004-03-29');
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  return (
    <section id="apropos" className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-sm text-accent font-medium tracking-wider uppercase">À propos</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-balance">
              Développeur passionné par l'innovation technologique
            </h3>
          </div>

          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p className="text-pretty">
              Diplômé en Génie Électrique et en Informatique, je suis un développeur polyvalent spécialisé dans la
              création d'applications web et mobile. Ma double formation me permet d'aborder les projets avec une vision
              technique complète et une compréhension approfondie des systèmes.
            </p>
            <p className="text-pretty">
              Actuellement en stage chez <span className="text-foreground font-medium">DIGIFAZ</span>, je contribue au
              développement d'applications web modernes avec Next.js et React. Je maîtrise l'ensemble du cycle de
              développement, de la conception d'interfaces utilisateur à l'intégration d'APIs, en passant par la gestion
              de versions avec Git.
            </p>
            <p className="text-pretty">
              Mon expertise couvre le développement front-end avec React et Next.js, le développement mobile avec
              Flutter, ainsi que les technologies back-end incluant Node.js et les bases de données SQL. J'utilise
              également Figma pour le design et le prototypage d'interfaces.
            </p>
            <p className="text-pretty">
              Rigoureux, adaptable et responsable, je m'engage à livrer des solutions de qualité qui répondent aux
              besoins réels des utilisateurs et des entreprises.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 pt-8">
            <div className="space-y-2">
              <p className="text-3xl font-bold text-accent">2+</p>
              <p className="text-sm text-muted-foreground">Années d'études spécialisées</p>
            </div>
            <div className="space-y-2">
              <p className="text-3xl font-bold text-accent">Full Stack</p>
              <p className="text-sm text-muted-foreground">Web & Mobile</p>
            </div>
            <div className="space-y-2">
              <p className="text-3xl font-bold text-accent">{calculateAge()} ans</p>
              <p className="text-sm text-muted-foreground">Basé à Abidjan</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
