import { motion } from "framer-motion";
import { ArrowDown, ExternalLink, Mail } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full blur-[120px] opacity-30"
          style={{
            background: "linear-gradient(135deg, hsl(270 95% 65%), hsl(330 100% 65%))",
            top: "10%",
            left: "10%",
          }}
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full blur-[100px] opacity-25"
          style={{
            background: "linear-gradient(135deg, hsl(200 100% 55%), hsl(270 95% 65%))",
            bottom: "20%",
            right: "10%",
          }}
          animate={{
            x: [0, -40, 0],
            y: [0, -40, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Grid Lines */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(hsl(270 95% 65%) 1px, transparent 1px),
              linear-gradient(90deg, hsl(270 95% 65%) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-primary"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.2,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Glowing Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 glass-card mb-8 rounded-full"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-muted-foreground">Available for hire</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-orbitron text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
          >
            <span className="text-foreground">BIKRAM</span>
            <br />
            <span className="text-gradient">Frontend Developer</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-muted-foreground mb-12 font-light max-w-2xl mx-auto"
          >
            Crafting modern, intelligent & immersive web experiences with cutting-edge technologies.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.a
              href="#projects"
              className="btn-neon inline-flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <ExternalLink size={20} />
              View Projects
            </motion.a>
            <motion.a
              href="#contact"
              className="btn-outline-neon inline-flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Mail size={20} />
              Contact Me
            </motion.a>
          </motion.div>

          {/* Floating UI Elements */}
          <div className="absolute top-20 left-10 hidden lg:block">
            <motion.div
              className="glass-card p-4 rounded-xl"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <div className="w-16 h-16 rounded-lg bg-gradient-primary flex items-center justify-center">
                <span className="font-orbitron text-2xl font-bold">&lt;/&gt;</span>
              </div>
            </motion.div>
          </div>

          <div className="absolute bottom-40 right-10 hidden lg:block">
            <motion.div
              className="glass-card p-4 rounded-xl"
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-neon-purple" />
                <div className="w-3 h-3 rounded-full bg-neon-blue" />
                <div className="w-3 h-3 rounded-full bg-neon-pink" />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-muted-foreground"
          >
            <span className="text-sm">Scroll Down</span>
            <ArrowDown size={20} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
