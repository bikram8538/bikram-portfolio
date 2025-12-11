import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.a
            href="#home"
            className="font-orbitron text-xl font-bold text-gradient"
            whileHover={{ scale: 1.05 }}
          >
            BIKRAM
          </motion.a>

          <p className="text-muted-foreground text-sm flex items-center gap-2">
            Made with <Heart size={16} className="text-accent fill-accent" /> by Bikram
          </p>

          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
