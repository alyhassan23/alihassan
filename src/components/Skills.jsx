import React from "react";
import { motion } from "framer-motion";
import { SKILLS } from "../data";

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-transparent overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-6 mb-16 text-center"
      >
        <h2 className="text-3xl md:text-5xl font-bold text-textMain">
          Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-highlight">Expertise</span>
        </h2>
        <p className="text-textMuted text-lg mt-4 max-w-2xl mx-auto">
          Technologies I work with to build scalable solutions.
        </p>
      </motion.div>

      <div className="relative w-full overflow-hidden py-10">
        {/* Gradients for smooth fade effect at edges */}
        <div className="absolute top-0 left-0 z-10 h-full w-32 bg-gradient-to-r from-[#050505] to-transparent pointer-events-none"></div>
        <div className="absolute top-0 right-0 z-10 h-full w-32 bg-gradient-to-l from-[#050505] to-transparent pointer-events-none"></div>

        <div className="flex w-max animate-scroll hover:[animation-play-state:paused] items-center">
          {/* First set of skills */}
          <div className="flex gap-8 px-4">
            {SKILLS.map((skill, index) => (
              <SkillCard key={`skill-1-${index}`} skill={skill} />
            ))}
          </div>
          {/* Duplicate set for seamless scrolling */}
          <div className="flex gap-8 px-4">
            {SKILLS.map((skill, index) => (
              <SkillCard key={`skill-2-${index}`} skill={skill} />
            ))}
          </div>
          {/* Triplicate set to ensure it covers wide screens if list is short */}
          <div className="flex gap-8 px-4">
            {SKILLS.map((skill, index) => (
              <SkillCard key={`skill-3-${index}`} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const SkillCard = ({ skill }) => (
  <div className="flex flex-col items-center justify-center min-w-[180px] p-8 bg-secondary/30 backdrop-blur-md rounded-2xl border border-white/10 hover:border-accent/50 hover:bg-white/5 transition-all duration-300 group hover:shadow-[0_0_20px_rgba(6,182,212,0.15)] hover:-translate-y-2 cursor-pointer">
    <div className="text-highlight mb-4 text-5xl group-hover:scale-110 group-hover:text-accent transition-all duration-300">
      <skill.icon />
    </div>
    <h3 className="text-xl font-bold text-white whitespace-nowrap group-hover:text-accent transition-colors">
      {skill.name}
    </h3>
    <p className="text-sm text-textMuted mt-2 px-3 py-1 bg-white/5 rounded-full">{skill.level}</p>
  </div>
);

export default Skills;
