import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Rocket, Lightbulb } from "lucide-react";

const experiences = [
  {
    icon: Rocket,
    title: "Frontend Development",
    period: "2023 - Present",
    description: "Building modern, responsive web applications using React, TailwindCSS, and cutting-edge frontend technologies.",
  },
  {
    icon: GraduationCap,
    title: "Webskitters Training",
    period: "2023",
    description: "Completed comprehensive web development training, mastering HTML, CSS, JavaScript, and React fundamentals.",
  },
  {
    icon: Briefcase,
    title: "Personal & Team Projects",
    period: "2023 - Present",
    description: "Developed multiple real-world projects including job portals, NFT marketplaces, and video platforms.",
  },
  {
    icon: Lightbulb,
    title: "Continuous Learning",
    period: "Ongoing",
    description: "Constantly exploring new technologies, UI/UX trends, and best practices in modern web development.",
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">My Journey</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A timeline of my professional growth and achievements
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10">
                <motion.div
                  className="timeline-dot"
                  whileInView={{ scale: [0, 1.2, 1] }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                />
              </div>

              {/* Content Card */}
              <div className={`ml-20 md:ml-0 md:w-[calc(50%-2rem)] ${
                index % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8"
              }`}>
                <motion.div
                  className="glass-card neon-border"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className={`flex items-start gap-4 ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}>
                    <div className="p-3 rounded-xl bg-gradient-primary shrink-0">
                      <exp.icon className="w-6 h-6 text-foreground" />
                    </div>
                    <div className={index % 2 === 0 ? "md:text-right" : ""}>
                      <span className="text-sm text-primary font-medium">{exp.period}</span>
                      <h3 className="font-orbitron text-xl font-bold text-foreground mt-1 mb-2">
                        {exp.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
