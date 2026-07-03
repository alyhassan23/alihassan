import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code,
  Database,
  Globe,
  Cpu,
  Briefcase,
  Award,
  User,
  Zap,
} from "lucide-react";
import { SKILLS, EDUCATION, CERTIFICATIONS } from "../data";

const About = () => {
  const [activeTab, setActiveTab] = useState("journey");

  const tabs = [
    { id: "journey", label: "Journey", icon: User },
    { id: "education", label: "Education", icon: Award },
    { id: "skills", label: "Tech Stack", icon: Code },
    { id: "interests", label: "Interests", icon: Zap },
  ];

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <section id="about" className="py-24 bg-transparent relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-textMain mb-6">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-highlight">Me</span>
          </h2>
          <p className="text-textMuted text-lg max-w-2xl mx-auto leading-relaxed">
            More than just code. I'm a problem solver, a creative thinker, and a lifelong learner.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-12">
          {/* Navigation Tabs (Left Side on Desktop) */}
          <div className="w-full md:w-1/4">
            <div className="flex flex-row md:flex-col gap-4 overflow-x-auto md:overflow-visible pb-4 md:pb-0 scrollbar-hide">
              {tabs.map((tab, idx) => {
                const Icon = tab.icon;
                return (
                  <motion.button
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-4 px-6 py-4 rounded-xl transition-all duration-300 w-full text-left bg-secondary/50 backdrop-blur-md border border-white/5 hover:bg-white/5 ${
                      activeTab === tab.id
                        ? "border-accent/50 bg-white/10 shadow-[0_0_20px_rgba(6,182,212,0.15)] scale-105"
                        : "hover:border-white/20 hover:scale-105"
                    }`}
                  >
                    <Icon
                      size={20}
                      className={`transition-colors duration-300 ${
                        activeTab === tab.id ? "text-accent" : "text-textMuted"
                      }`}
                    />
                    <span
                      className={`font-medium ${
                        activeTab === tab.id ? "text-white" : "text-textMuted"
                      }`}
                    >
                      {tab.label}
                    </span>
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* Content Area (Right Side) */}
          <div className="w-full md:w-3/4 bg-secondary/30 backdrop-blur-xl p-8 rounded-2xl border border-white/10 shadow-2xl min-h-[400px]">
            <AnimatePresence mode="wait">
              {activeTab === "journey" && (
                <motion.div
                  key="journey"
                  variants={variants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  transition={{ duration: 0.4 }}
                  className="space-y-6"
                >
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <User className="text-accent" /> My Journey
                  </h3>
                  <div className="prose prose-invert max-w-none text-textMuted leading-loose text-lg">
                    <p>
                      My journey into tech wasn't just about learning syntax; it
                      was about understanding how to build systems that scale
                      and matter. I started with a curiosity for how things work
                      on the web and quickly dove into{" "}
                      <strong className="text-white">Full-Stack Development</strong>.
                    </p>
                    <p>
                      Currently, I am pursuing my{" "}
                      <strong className="text-white">
                        BS in Software Engineering
                      </strong>{" "}
                      at Lahore Garrison University. I've built everything from
                      dynamic web applications to data analysis dashboards.
                    </p>
                    <p>
                      I believe in the power of{" "}
                      <strong className="text-white">Open Source</strong> and
                      community. When I'm not coding, I'm likely exploring new
                      AI tools, reading about system architecture, or refining
                      my problem-solving skills on platforms like LeetCode.
                    </p>
                  </div>
                </motion.div>
              )}

              {activeTab === "education" && (
                <motion.div
                  key="education"
                  variants={variants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  transition={{ duration: 0.4 }}
                  className="space-y-6"
                >
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <Award className="text-accent" /> Education & Certifications
                  </h3>
                  <div className="space-y-6">
                    {EDUCATION.map((edu, idx) => (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        key={edu.id}
                        className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10 hover:border-accent/50 transition-all duration-300 hover:shadow-[0_0_15px_rgba(6,182,212,0.1)] group"
                      >
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h4 className="text-xl font-bold text-white group-hover:text-accent transition-colors">
                              {edu.school}
                            </h4>
                            <p className="text-highlight font-medium">{edu.degree}</p>
                          </div>
                          <span className="text-xs bg-white/10 px-3 py-1 rounded-full text-white group-hover:bg-accent/20 group-hover:text-accent transition-colors">
                            {edu.year}
                          </span>
                        </div>
                        <p className="text-textMuted text-sm mt-2">{edu.details}</p>
                      </motion.div>
                    ))}
                    
                    <div className="pt-6 border-t border-white/10">
                        <h4 className="text-lg font-semibold text-white mb-4">Certifications</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {CERTIFICATIONS.map((cert, idx) => (
                                <motion.a 
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: idx * 0.1 + 0.2 }}
                                    key={cert.id}
                                    href={cert.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-highlight/50 transition-all group"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center text-2xl font-bold text-white group-hover:bg-highlight/20 group-hover:text-highlight transition-colors shadow-inner">
                                        {cert.logo[0]}
                                    </div>
                                    <div>
                                        <h5 className="font-medium text-white group-hover:text-highlight transition-colors line-clamp-1">{cert.title}</h5>
                                        <p className="text-xs text-textMuted">{cert.issuer}</p>
                                    </div>
                                </motion.a>
                            ))}
                        </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === "skills" && (
                <motion.div
                  key="skills"
                  variants={variants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  transition={{ duration: 0.4 }}
                >
                   <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <Code className="text-accent" /> Technical Arsenal
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {SKILLS.map((skill, index) => {
                      const Icon = skill.icon;
                      return (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.05 }}
                          key={index}
                          className="p-4 bg-white/5 rounded-xl border border-white/10 hover:border-accent/50 hover:bg-white/10 transition-all duration-300 group flex flex-col items-center justify-center text-center gap-3 hover:-translate-y-1 hover:shadow-lg"
                        >
                          <Icon className="text-4xl text-textMuted group-hover:text-accent transition-colors duration-300" />
                          <div>
                            <h4 className="font-semibold text-white">
                              {skill.name}
                            </h4>
                            <p className="text-xs text-textMuted">
                              {skill.level}
                            </p>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              )}

              {activeTab === "interests" && (
                <motion.div
                  key="interests"
                  variants={variants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  transition={{ duration: 0.4 }}
                  className="space-y-6"
                >
                   <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <Zap className="text-accent" /> Interests & Hobbies
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      {
                        title: "AI & Machine Learning",
                        desc: "Exploring Large Language Models and their applications in web dev.",
                        icon: Cpu,
                      },
                      {
                        title: "Open Source",
                        desc: "Contributing to community projects and building public tools.",
                        icon: Globe,
                      },
                       {
                        title: "Tech Innovation",
                        desc: "Keeping up with the latest frameworks and architectural patterns.",
                        icon: Zap,
                      },
                      {
                        title: "Mentorship",
                        desc: "Sharing knowledge with junior developers and peers.",
                        icon: User,
                      }
                    ].map((item, idx) => {
                        const Icon = item.icon;
                        return (
                             <motion.div 
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                key={idx} 
                                className="flex gap-4 p-5 rounded-xl bg-white/5 border border-white/10 hover:border-accent/50 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1"
                             >
                                <div className="mt-1 p-3 rounded-lg bg-accent/10 text-accent h-fit shadow-inner">
                                    <Icon size={20} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white mb-1 group-hover:text-accent transition-colors">{item.title}</h4>
                                    <p className="text-sm text-textMuted">{item.desc}</p>
                                </div>
                             </motion.div>
                        )
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
