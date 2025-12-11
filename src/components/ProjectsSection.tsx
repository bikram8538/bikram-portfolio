import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "AJobs",
    description: "A modern job portal platform with sleek UI and smooth user experience.",
    tags: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://bikram8538.github.io/ajobs/",
    codeUrl: "https://github.com/bikram8538/ajobs",
  },
  {
    id: 2,
    title: "ZapCap",
    description: "Dynamic caption generator with modern design for content creators.",
    tags: ["React", "CSS", "JavaScript"],
    liveUrl: "https://bikram8538.github.io/zapcap/",
    codeUrl: "https://github.com/bikram8538/zapcap",
  },
  {
    id: 3,
    title: "Cryptoverse",
    description: "Cryptocurrency tracking dashboard with real-time data visualization.",
    tags: ["React", "API", "TailwindCSS"],
    liveUrl: "https://bikram8538.github.io/cryptoverse/",
    codeUrl: "https://github.com/bikram8538/cryptoverse",
  },
  {
    id: 4,
    title: "Job Portal",
    description: "Full-featured job listing platform with advanced search capabilities.",
    tags: ["React", "TailwindCSS", "JavaScript"],
    liveUrl: "https://bikram8538.github.io/job-portal/",
    codeUrl: "https://github.com/bikram8538/job-portal",
  },
  {
    id: 5,
    title: "Nexa NFT",
    description: "NFT marketplace landing page with Web3 aesthetics.",
    tags: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://bikram8538.github.io/nexa-nft/",
    codeUrl: "https://github.com/bikram8538/nexa-nft",
  },
  {
    id: 6,
    title: "Vido",
    description: "Video streaming platform interface with modern responsive design.",
    tags: ["React", "CSS", "JavaScript"],
    liveUrl: "https://bikram8538.github.io/vido/",
    codeUrl: "https://github.com/bikram8538/vido",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-32">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm text-muted-foreground uppercase tracking-widest mb-4 block">
            Work
          </span>
          <h2 className="section-title">Selected Projects</h2>
          <p className="section-subtitle mx-auto">
            A collection of projects showcasing my skills and passion for web development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="card-minimal h-full flex flex-col">
                {/* Project Header */}
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-semibold text-foreground group-hover:text-muted-foreground transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mt-2 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6 flex-grow">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag-minimal text-xs">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 pt-6 border-t border-border">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    View Project
                    <ArrowUpRight size={16} />
                  </a>
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Github size={16} />
                    Code
                  </a>
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
