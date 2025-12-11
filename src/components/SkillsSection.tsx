import { motion } from "framer-motion";

const skills = [
  { name: "HTML5", color: "from-orange-500 to-red-500" },
  { name: "CSS3", color: "from-blue-500 to-blue-700" },
  { name: "JavaScript", color: "from-yellow-400 to-yellow-600" },
  { name: "React", color: "from-cyan-400 to-blue-500" },
  { name: "TailwindCSS", color: "from-teal-400 to-cyan-500" },
  { name: "Git", color: "from-orange-600 to-red-600" },
  { name: "GitHub", color: "from-gray-400 to-gray-600" },
  { name: "UI/UX", color: "from-pink-500 to-purple-500" },
  { name: "Responsive Design", color: "from-green-400 to-emerald-600" },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute w-96 h-96 rounded-full blur-[100px] opacity-20"
          style={{
            background: "linear-gradient(135deg, hsl(200 100% 55%), hsl(180 100% 50%))",
            top: "20%",
            right: "-10%",
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Skills & Technologies</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Technologies I work with to bring ideas to life
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <motion.div
                className="relative aspect-square flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                {/* Outer Ring */}
                <div className="absolute inset-0 rounded-full border-2 border-primary/20 group-hover:border-primary/50 transition-colors duration-300" />
                
                {/* Animated Ring */}
                <motion.div
                  className="absolute inset-2 rounded-full border border-dashed border-primary/30"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
                
                {/* Inner Glow */}
                <div className={`absolute inset-4 rounded-full bg-gradient-to-br ${skill.color} opacity-10 group-hover:opacity-30 transition-opacity duration-300 blur-xl`} />
                
                {/* Center Content */}
                <div className="relative glass-card rounded-full w-24 h-24 md:w-28 md:h-28 flex items-center justify-center group-hover:glow-purple transition-all duration-300">
                  <span className="font-orbitron text-xs md:text-sm font-semibold text-center px-2 text-foreground">
                    {skill.name}
                  </span>
                </div>

                {/* Pulse Ring */}
                <motion.div
                  className="absolute inset-0 rounded-full border border-primary/30"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.2,
                  }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 glass-card neon-border max-w-3xl mx-auto"
        >
          <h3 className="font-orbitron text-xl font-bold text-center mb-6 text-foreground">
            Also Familiar With
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {["TypeScript", "SASS", "Bootstrap", "Figma", "REST APIs", "npm", "Vite", "VS Code"].map((item, idx) => (
              <motion.span
                key={item}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + idx * 0.05 }}
                viewport={{ once: true }}
                className="skill-badge"
              >
                {item}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
