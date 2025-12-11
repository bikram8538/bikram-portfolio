import { motion } from "framer-motion";

const skills = [
  { name: "HTML5", category: "Core" },
  { name: "CSS3", category: "Core" },
  { name: "JavaScript", category: "Core" },
  { name: "React", category: "Framework" },
  { name: "TailwindCSS", category: "Styling" },
  { name: "TypeScript", category: "Language" },
  { name: "Git", category: "Tools" },
  { name: "Responsive Design", category: "Skills" },
  { name: "UI/UX", category: "Design" },
];

const additionalSkills = ["SASS", "Bootstrap", "Figma", "REST APIs", "npm", "Vite", "VS Code", "GitHub"];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-32 bg-secondary/30">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm text-muted-foreground uppercase tracking-widest mb-4 block">
            Expertise
          </span>
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle mx-auto">
            The tools and technologies I use to bring ideas to life.
          </p>
        </motion.div>

        {/* Main Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto mb-16">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="card-minimal text-center py-8"
            >
              <span className="text-foreground font-medium">{skill.name}</span>
              <span className="block text-xs text-muted-foreground mt-1">{skill.category}</span>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-sm text-muted-foreground mb-6">Also familiar with</p>
          <div className="flex flex-wrap justify-center gap-3">
            {additionalSkills.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + index * 0.03 }}
                viewport={{ once: true }}
                className="tag-minimal"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
