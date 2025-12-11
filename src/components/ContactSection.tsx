import { motion } from "framer-motion";
import { useState } from "react";
import { Send, Github, Linkedin, Instagram, Mail, MapPin, Phone } from "lucide-react";

const socialLinks = [
  { icon: Github, label: "GitHub", href: "https://github.com/bikram8538" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Mail, label: "Email", href: "mailto:your-email@example.com" },
];

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <section id="contact" className="py-24 relative">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full blur-[150px] opacity-15"
          style={{
            background: "linear-gradient(135deg, hsl(330 100% 65%), hsl(270 95% 65%))",
            bottom: "-20%",
            left: "-10%",
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 10,
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
            <span className="text-gradient">Get In Touch</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Have a project in mind? Let's work together to create something amazing.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="glass-card neon-border space-y-6">
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-4 bg-muted/30 border border-border rounded-lg focus:outline-none focus:border-primary transition-colors peer placeholder-transparent"
                  placeholder="Your Name"
                  required
                />
                <label
                  htmlFor="name"
                  className="absolute left-4 -top-2.5 text-sm text-muted-foreground bg-card px-2 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-primary"
                >
                  Your Name
                </label>
              </div>

              <div className="relative">
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-4 bg-muted/30 border border-border rounded-lg focus:outline-none focus:border-primary transition-colors peer placeholder-transparent"
                  placeholder="Your Email"
                  required
                />
                <label
                  htmlFor="email"
                  className="absolute left-4 -top-2.5 text-sm text-muted-foreground bg-card px-2 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-primary"
                >
                  Your Email
                </label>
              </div>

              <div className="relative">
                <textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-4 bg-muted/30 border border-border rounded-lg focus:outline-none focus:border-primary transition-colors peer placeholder-transparent resize-none"
                  placeholder="Your Message"
                  required
                />
                <label
                  htmlFor="message"
                  className="absolute left-4 -top-2.5 text-sm text-muted-foreground bg-card px-2 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-primary"
                >
                  Your Message
                </label>
              </div>

              <motion.button
                type="submit"
                className="w-full btn-neon flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Send size={20} />
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="glass-card neon-border">
              <h3 className="font-orbitron text-2xl font-bold text-foreground mb-6">
                Let's Connect
              </h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or 
                opportunities to be part of your visions. Feel free to reach out!
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4 text-muted-foreground">
                  <div className="p-3 rounded-lg bg-muted/50">
                    <MapPin size={20} className="text-primary" />
                  </div>
                  <span>Kolkata, India</span>
                </div>
                <div className="flex items-center gap-4 text-muted-foreground">
                  <div className="p-3 rounded-lg bg-muted/50">
                    <Mail size={20} className="text-primary" />
                  </div>
                  <span>your-email@example.com</span>
                </div>
                <div className="flex items-center gap-4 text-muted-foreground">
                  <div className="p-3 rounded-lg bg-muted/50">
                    <Phone size={20} className="text-primary" />
                  </div>
                  <span>+91 XXXXX XXXXX</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="glass-card neon-border">
              <h3 className="font-orbitron text-xl font-bold text-foreground mb-6">
                Follow Me
              </h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-xl bg-muted/50 border border-border hover:border-primary hover:glow-purple transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon size={24} className="text-foreground" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
