import { motion } from "framer-motion";
import { ExternalLink, Github, Folder } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Linktree Clone",
      description:
        "Clone do Linktree para gerenciar múltiplos links em um só lugar com banco de dados firebase e verificação de usuário.",
      tags: ["React", "TypeScript", "Tailwind CSS"],
      github: "https://github.com/murilomunari/linktree.git",
      demo: "#",
    },
    {
      title: "wsplus E-commerce Backend",
      description:
        "Um monolito backend para um sistema de e-commerce com funcionalidades completas de gerenciamento de produtos, usuários e pedidos.",
      tags: ["Java", "Spring Boot", "PostgreSQL", "Docker", "AWS", "Stripe"],
      github: "https://github.com/murilomunari/wsplus",
      demo: "#",
    },
    {
      title: "Teste de API Automatizado",
      description:
        "Teste de API RESTful utilizando Cypress para garantir a funcionalidade e performance das endpoints, baseado no wsplus.",
      tags: ["React", "cypress.js", "Node.js"],
      github: "https://github.com/murilomunari/wsplus_cypress",
      demo: "#",
    },
    {
      title: "laisa-zen",
      description:
        "Website pessoal de Laísa Mammana, especialista em massagem relaxante e limpeza de pele. Criado para apresentar serviços, qualificações e facilitar contato.",
      tags: ["React", "TypeScript", "Tailwind CSS"],
      github: "https://github.com/murilomunari/laisa-zen",
      demo: "https://bylaisafisio.netlify.app",
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
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`GitHub do projeto ${project.title}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
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
