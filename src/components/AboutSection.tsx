import { motion } from "framer-motion";
import { Download } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-32">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-sm text-muted-foreground uppercase tracking-widest mb-4 block">
              About
            </span>
            <h2 className="section-title mb-8">
              Creating digital<br />experiences that matter.
            </h2>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a frontend developer with a passion for creating clean, intuitive, 
              and user-centered web experiences. I believe that great design is invisible — 
              it just works.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My approach combines technical expertise with a keen eye for aesthetics. 
              I focus on performance, accessibility, and the small details that elevate 
              a good product to a great one.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              When I'm not coding, I'm exploring new technologies, refining my craft, 
              and finding inspiration in minimalist design and everyday interactions.
            </p>

            <motion.a
              href="#"
              className="btn-secondary inline-flex mt-4"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Download size={18} />
              Download Resume
            </motion.a>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-3 gap-8 mt-24 pt-16 border-t border-border"
        >
          {[
            { value: "6+", label: "Projects Completed" },
            { value: "1+", label: "Years Experience" },
            { value: "100%", label: "Dedication" },
          ].map((stat, index) => (
            <div key={stat.label} className="text-center">
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                viewport={{ once: true }}
                className="block text-4xl md:text-5xl font-semibold text-foreground mb-2"
              >
                {stat.value}
              </motion.span>
              <span className="text-sm text-muted-foreground">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
