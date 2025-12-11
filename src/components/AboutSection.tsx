import { motion } from "framer-motion";
import { Download, Code, Palette, Zap } from "lucide-react";

const skills = [
  "HTML5", "CSS3", "JavaScript", "React", "TailwindCSS", 
  "Git", "GitHub", "Responsive Design", "UI/UX"
];

const highlights = [
  { icon: Code, label: "Clean Code", desc: "Writing maintainable, scalable code" },
  { icon: Palette, label: "Modern UI", desc: "Crafting beautiful interfaces" },
  { icon: Zap, label: "Performance", desc: "Optimized for speed & efficiency" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">About Me</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Passionate about creating exceptional digital experiences
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Info Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-card neon-border"
          >
            <div className="mb-6">
              <h3 className="font-orbitron text-2xl font-bold mb-4 text-foreground">
                Frontend Developer
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                I'm a passionate frontend developer with a keen eye for design and a love for 
                creating seamless user experiences. With expertise in modern web technologies, 
                I transform ideas into interactive, responsive, and visually stunning web applications.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My journey in web development has equipped me with the skills to build 
                everything from sleek landing pages to complex web applications. I believe 
                in writing clean, maintainable code and staying up-to-date with the latest 
                industry trends and best practices.
              </p>
            </div>

            {/* Skills */}
            <div className="mb-6">
              <h4 className="font-orbitron text-lg font-semibold mb-4 text-foreground">
                Tech Stack
              </h4>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="skill-badge"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Download Resume */}
            <motion.a
              href="#"
              className="btn-neon inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Download size={20} />
              Download Resume
            </motion.a>
          </motion.div>

          {/* Right Side - Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="glass-card flex items-start gap-4 group hover:border-primary/40 transition-all duration-300"
              >
                <div className="p-3 rounded-xl bg-gradient-primary group-hover:glow-purple transition-all duration-300">
                  <item.icon className="w-6 h-6 text-foreground" />
                </div>
                <div>
                  <h4 className="font-orbitron text-lg font-semibold text-foreground mb-1">
                    {item.label}
                  </h4>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              </motion.div>
            ))}

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              {[
                { value: "6+", label: "Projects" },
                { value: "1+", label: "Years Exp" },
                { value: "100%", label: "Dedication" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-card text-center"
                >
                  <span className="block font-orbitron text-3xl font-bold text-gradient">
                    {stat.value}
                  </span>
                  <span className="text-muted-foreground text-sm">{stat.label}</span>
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
