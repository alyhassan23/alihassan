import React from "react";
import { GraduationCap, Calendar, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { EDUCATION } from "../data";

const Education = () => {
  return (
    <section id="education" className="py-24 bg-transparent relative">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-textMain mb-4">
            Education <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-highlight">Path</span>
          </h2>
          <p className="text-textMuted text-lg">
            My academic background and qualifications.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-white/10 ml-3 md:ml-6 space-y-12">
          {EDUCATION.map((edu, idx) => (
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              key={edu.id} 
              className="relative pl-8 md:pl-12 group"
            >
              {/* Timeline Dot (Absolute Positioned on the line) */}
              <div className="absolute top-0 -left-[9px] w-4 h-4 bg-accent rounded-full border-4 border-primary group-hover:bg-highlight group-hover:scale-125 transition-all duration-300 shadow-[0_0_10px_rgba(6,182,212,0.5)]"></div>

              {/* Content Card */}
              <div className="p-8 bg-secondary/30 backdrop-blur-md rounded-2xl border border-white/10 hover:border-accent/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.1)] hover:-translate-y-2">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-2">
                  <div>
                    <h3 className="text-2xl font-bold text-white flex flex-wrap items-center gap-3 group-hover:text-accent transition-colors">
                      <GraduationCap
                        className="text-highlight shrink-0"
                        size={24}
                      />
                      {edu.degree}
                    </h3>
                    <span className="text-accent font-medium mt-2 block text-lg">
                      {edu.school}
                    </span>
                  </div>

                  {/* Date & Location */}
                  <div className="flex flex-row md:flex-col gap-4 md:gap-2 text-sm text-textMuted mt-2 md:mt-0">
                    <span className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-full backdrop-blur-md border border-white/10">
                      <Calendar size={14} className="text-highlight" /> {edu.year}
                    </span>
                    <span className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-full backdrop-blur-md border border-white/10">
                      <MapPin size={14} className="text-highlight" /> {edu.location}
                    </span>
                  </div>
                </div>

                <p className="text-gray-400 leading-relaxed border-t border-white/10 pt-6 mt-6">
                  {edu.details}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
