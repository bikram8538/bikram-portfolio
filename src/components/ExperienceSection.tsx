import { motion } from "framer-motion";

const experiences = [
  {
    title: "Frontend Development",
    period: "2023 — Present",
    description: "Building modern, responsive web applications using React, TailwindCSS, and cutting-edge frontend technologies.",
  },
  {
    title: "Webskitters Training",
    period: "2023",
    description: "Completed comprehensive web development training, mastering HTML, CSS, JavaScript, and React fundamentals.",
  },
  {
    title: "Personal & Team Projects",
    period: "2023 — Present",
    description: "Developed multiple real-world projects including job portals, NFT marketplaces, and video platforms.",
  },
  {
    title: "Continuous Learning",
    period: "Ongoing",
    description: "Constantly exploring new technologies, UI/UX trends, and best practices in modern web development.",
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-32 bg-secondary/30">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-sm text-muted-foreground uppercase tracking-widest mb-4 block">
            Journey
          </span>
          <h2 className="section-title">Experience</h2>
        </motion.div>

        <div className="max-w-3xl">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative pl-8 pb-12 last:pb-0 border-l border-border"
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 top-2 w-2 h-2 rounded-full bg-foreground -translate-x-1/2" />
              
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                <h3 className="text-xl font-semibold text-foreground">
                  {exp.title}
                </h3>
                <span className="text-sm text-muted-foreground whitespace-nowrap">
                  {exp.period}
                </span>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
