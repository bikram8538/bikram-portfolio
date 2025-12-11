import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Bikram. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Built with care and attention to detail.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
