import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MessageCircle, ChevronDown } from "lucide-react";

const HeroSection = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com/murilomunari", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/murilomunaribissiato/", label: "LinkedIn" },
    { icon: Mail, href: "mailto:mu_bissiato@hotmail.com", label: "Email" },
    { icon: MessageCircle, href: "#", label: "WhatsApp" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/20" />
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-2 mb-6 text-sm font-medium text-primary border border-primary/30 rounded-full bg-primary/5">
            QA → Front-end Developer
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
        >
          Olá, eu sou{" "}
          <span className="text-gradient">Murilo Munari</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10"
        >
          Desenvolvedor Front-end em transição, com 1 ano de experiência em QA. 
          Apaixonado por criar interfaces bonitas e funcionais com React e TypeScript.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex items-center justify-center gap-4 mb-16"
        >
          {socialLinks.map((social, index) => (
            <a
              key={social.label}
              href={social.href}
              aria-label={social.label}
              className="p-3 rounded-full bg-secondary/50 border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
            >
              <social.icon className="w-5 h-5" />
            </a>
          ))}
        </motion.div>

        <motion.a
          href="#sobre"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="inline-flex flex-col items-center text-muted-foreground hover:text-primary transition-colors"
        >
          <span className="text-sm mb-2">Scroll para explorar</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </motion.a>
      </div>
    </section>
  );
};

export default HeroSection;
