import { motion } from "framer-motion";
import { Code2, TestTube, Layers } from "lucide-react";

const AboutSection = () => {
  const skills = [
    { name: "React", level: 80 },
    { name: "TypeScript", level: 80 },
    { name: "Java Spring Boot", level: 65 },
    { name: "Testes / QA", level: 90 },
  ];

  const highlights = [
    {
      icon: TestTube,
      title: "1 Ano em QA",
      description: "Experiência sólida em garantia de qualidade e testes",
    },
    {
      icon: Code2,
      title: "Front-end Dev",
      description: "Em transição para desenvolvimento front-end",
    },
    {
      icon: Layers,
      title: "Full Stack",
      description: "Conhecimento em Java Spring Boot para back-end",
    },
  ];

  return (
    <section id="sobre" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Sobre <span className="text-gradient">Mim</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Profissional em transição de carreira, trazendo a mentalidade de qualidade do QA para o desenvolvimento front-end.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left side - About text and highlights */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-card rounded-2xl p-8 mb-8">
              <p className="text-foreground/90 leading-relaxed mb-6">
                Sou um profissional de QA há 1 ano, atualmente em transição para desenvolvimento front-end. Sou formado em Análise e Desenvolvimento de Sistemas (ADS), e minha experiência em testes me proporcionou uma visão única sobre a importância da qualidade do código, da confiabilidade das funcionalidades e da experiência do usuário.
              </p>
              <p className="text-foreground/90 leading-relaxed">
                Trabalho principalmente com <span className="text-primary font-medium">React</span> e{" "}
                <span className="text-primary font-medium">TypeScript</span>, e também possuo conhecimento em{" "}
                <span className="text-primary font-medium">Java Spring Boot</span> para desenvolvimento back-end.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="glass-card rounded-xl p-4 text-center hover:border-primary/30 transition-colors"
                >
                  <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-primary/10 flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-sm mb-1">{item.title}</h3>
                  <p className="text-muted-foreground text-xs">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right side - Skills */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-2xl p-8"
          >
            <h3 className="font-display text-xl font-semibold mb-6">Minhas Skills</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-primary">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                      className="h-full rounded-full bg-gradient-to-r from-primary to-primary/70"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
