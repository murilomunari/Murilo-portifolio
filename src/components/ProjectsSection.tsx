import { motion } from "framer-motion";
import { ExternalLink, Github, Folder } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Projeto React",
      description: "Aplicação web desenvolvida com React e TypeScript, utilizando boas práticas de desenvolvimento.",
      tags: ["React", "TypeScript", "Tailwind CSS"],
      github: "#",
      demo: "#",
    },
    {
      title: "API Spring Boot",
      description: "API REST desenvolvida em Java com Spring Boot, incluindo autenticação e documentação.",
      tags: ["Java", "Spring Boot", "PostgreSQL"],
      github: "#",
      demo: "#",
    },
    {
      title: "Dashboard de Testes",
      description: "Dashboard para visualização de métricas de testes automatizados e qualidade de software.",
      tags: ["React", "Chart.js", "Node.js"],
      github: "#",
      demo: "#",
    },
    {
      title: "E-commerce Frontend",
      description: "Interface moderna de e-commerce com carrinho de compras e integração de pagamento.",
      tags: ["React", "TypeScript", "Stripe"],
      github: "#",
      demo: "#",
    },
  ];

  return (
    <section id="projetos" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Meus <span className="text-gradient">Projetos</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Confira alguns dos projetos que desenvolvi durante minha jornada de aprendizado.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group glass-card rounded-2xl p-6 hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Folder className="w-6 h-6 text-primary" />
                </div>
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    aria-label={`GitHub do projeto ${project.title}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href={project.demo}
                    aria-label={`Demo do projeto ${project.title}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <h3 className="font-display text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-medium text-primary/80 bg-primary/10 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
