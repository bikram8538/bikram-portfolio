import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "AJobs",
    description: "A modern job portal platform with sleek UI and smooth user experience for job seekers and employers.",
    image: "/placeholder.svg",
    tags: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://bikram8538.github.io/ajobs/",
    codeUrl: "https://github.com/bikram8538/ajobs",
  },
  {
    id: 2,
    title: "ZapCap",
    description: "Dynamic caption generator with modern design and intuitive interface for content creators.",
    image: "/placeholder.svg",
    tags: ["React", "CSS", "JavaScript"],
    liveUrl: "https://bikram8538.github.io/zapcap/",
    codeUrl: "https://github.com/bikram8538/zapcap",
  },
  {
    id: 3,
    title: "Cryptoverse",
    description: "Cryptocurrency tracking dashboard with real-time data visualization and market insights.",
    image: "/placeholder.svg",
    tags: ["React", "API", "TailwindCSS"],
    liveUrl: "https://bikram8538.github.io/cryptoverse/",
    codeUrl: "https://github.com/bikram8538/cryptoverse",
  },
  {
    id: 4,
    title: "Job Portal",
    description: "Full-featured job listing platform with advanced search and filtering capabilities.",
    image: "/placeholder.svg",
    tags: ["React", "TailwindCSS", "JavaScript"],
    liveUrl: "https://bikram8538.github.io/job-portal/",
    codeUrl: "https://github.com/bikram8538/job-portal",
  },
  {
    id: 5,
    title: "Nexa NFT",
    description: "NFT marketplace landing page with Web3 aesthetics and immersive animations.",
    image: "/placeholder.svg",
    tags: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://bikram8538.github.io/nexa-nft/",
    codeUrl: "https://github.com/bikram8538/nexa-nft",
  },
  {
    id: 6,
    title: "Vido",
    description: "Video streaming platform interface with modern UI and responsive design.",
    image: "/placeholder.svg",
    tags: ["React", "CSS", "JavaScript"],
    liveUrl: "https://bikram8538.github.io/vido/",
    codeUrl: "https://github.com/bikram8538/vido",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[150px] opacity-20"
          style={{
            background: "radial-gradient(circle, hsl(270 95% 65%) 0%, transparent 70%)",
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
            <span className="text-gradient">My Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore my latest work showcasing modern web development skills
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="glass-card neon-border overflow-hidden h-full flex flex-col">
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden rounded-lg mb-4">
                  <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/20 to-neon-blue/20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-orbitron text-3xl font-bold text-gradient opacity-50">
                      {project.title}
                    </span>
                  </div>
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-primary hover:glow-purple transition-all"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink size={20} />
                    </motion.a>
                    <motion.a
                      href={project.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-secondary hover:glow-blue transition-all"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github size={20} />
                    </motion.a>
                  </div>
                </div>

                {/* Project Info */}
                <div className="flex-1 flex flex-col">
                  <h3 className="font-orbitron text-xl font-bold text-foreground mb-2 group-hover:text-gradient transition-all">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 flex-1">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs rounded-full border border-primary/30 text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 btn-neon text-center text-sm py-2"
                    >
                      Live Demo
                    </a>
                    <a
                      href={project.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 btn-outline-neon text-center text-sm py-2"
                    >
                      View Code
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
