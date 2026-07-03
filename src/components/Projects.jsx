import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { PROJECTS } from "../data";

const Projects = () => {
  // Show only the first 4 projects on the home page
  const displayedProjects = PROJECTS.slice(0, 4);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section id="projects" className="py-24 bg-transparent relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Section with View All Link */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4"
        >
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-bold text-textMain mb-4">
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-highlight">Work</span>
            </h2>
            <p className="text-textMuted text-lg max-w-2xl">
              A selection of projects demonstrating my engineering capabilities.
            </p>
          </div>
          <Link
            to="/projects"
            className="text-white bg-white/5 hover:bg-white/10 px-6 py-3 rounded-full font-medium flex items-center gap-2 transition-all duration-300 group border border-white/10 hover:border-accent/50"
          >
            View all projects{" "}
            <ArrowUpRight
              size={18}
              className="group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-accent transition-all"
            />
          </Link>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {displayedProjects.map((project) => (
            <motion.div variants={itemVariants} key={project.id} className="group h-full">
              <Link
                to={`/project/${project.id}`}
                className="block h-full"
              >
                <div className="bg-secondary/30 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10 hover:border-accent/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] hover:-translate-y-2 h-full flex flex-col relative">
                  {/* Decorative glow inside card */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
                  
                  {/* Image Container */}
                  <div className="h-64 overflow-hidden relative z-10 m-2 rounded-2xl">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10"></div>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                    />
                    <div className="absolute top-4 right-4 z-20">
                        <div className="bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg uppercase tracking-wider">
                            {project.category}
                        </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 flex flex-col flex-grow relative z-10">
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-accent transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-textMuted line-clamp-2 mb-6 flex-grow leading-relaxed">
                      {project.desc}
                    </p>

                    <div className="mt-auto flex items-center text-white/70 font-medium text-sm group-hover:text-accent transition-colors duration-300">
                      View Case Study{" "}
                      <span className="ml-2 group-hover:translate-x-2 transition-transform duration-300">
                        →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
