import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MessageCircle, Send } from "lucide-react";

const ContactSection = () => {
  const contacts = [
    {
      icon: Mail,
      label: "Email",
      value: "mu_bissiato@hotmail.com",
      href: "mailto:mu_bissiato@hotmail.com",
      color: "hover:text-red-400",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "@murilomunari",
      href: "https://github.com/murilomunari",
      color: "hover:text-foreground",
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "(11) 99315-5201",
      href: "https://wa.me/5511993155201",
      color: "hover:text-green-400",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "/in/murilomunaribissiato",
      href: "https://www.linkedin.com/in/murilomunaribissiato/",
      color: "hover:text-blue-400",
    },
  ];

  return (
    <section id="contato" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Vamos <span className="text-gradient">Conversar</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Estou sempre aberto a novas oportunidades e parcerias. Entre em contato!
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-4">
            {contacts.map((contact, index) => (
              <motion.a
                key={contact.label}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`group glass-card rounded-xl p-6 flex items-center gap-4 hover:border-primary/30 transition-all duration-300 ${contact.color}`}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <contact.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <span className="text-sm text-muted-foreground">{contact.label}</span>
                  <p className="font-medium">{contact.value}</p>
                </div>
              </motion.a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <a
              href="mailto:mu_bissiato@hotmail.com"
              target="_blank"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-display font-semibold rounded-full hover:opacity-90 transition-opacity animate-pulse-glow"
            >
              <Send className="w-5 h-5" />
              Enviar Mensagem
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
