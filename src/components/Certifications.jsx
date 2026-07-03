import React from "react";
import { Award, ExternalLink, Calendar, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { CERTIFICATIONS } from "../data";

const Certifications = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section
      id="certifications"
      className="py-24 bg-transparent relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-textMain mb-4">
            Licenses & <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-highlight">Certifications</span>
          </h2>
          <p className="text-textMuted text-lg max-w-2xl mx-auto">
            Professional credentials validating my expertise in Data Science,
            AI, and Engineering.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {CERTIFICATIONS.map((cert) => (
            <motion.div
              variants={itemVariants}
              key={cert.id}
              className="group bg-secondary/30 backdrop-blur-md p-8 rounded-3xl border border-white/10 hover:border-accent/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.1)] flex flex-col sm:flex-row gap-6 items-start hover:-translate-y-1"
            >
              {/* Logo / Icon Placeholder */}
              <div className="shrink-0 w-20 h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-3xl font-bold text-white group-hover:bg-white/10 group-hover:text-accent transition-colors shadow-inner">
                {cert.logo === "Google" ? (
                  <span className="text-blue-500">G</span>
                ) : cert.logo === "IBM" ? (
                  <span className="text-blue-600">IBM</span>
                ) : (
                  <Award className="text-accent" size={32} />
                )}
              </div>

              {/* Content */}
              <div className="flex-grow">
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-accent transition-colors">
                  {cert.title}
                </h3>
                <p className="text-textMuted text-sm mb-4">{cert.issuer}</p>

                <div className="flex flex-wrap gap-3 text-xs text-textMuted mb-6">
                  <span className="flex items-center gap-1.5 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">
                    <Calendar size={14} className="text-highlight" /> Issued {cert.date}
                  </span>
                  {cert.credentialId && (
                    <span className="flex items-center gap-1.5 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">
                      <CheckCircle size={14} className="text-highlight" /> ID:{" "}
                      {cert.credentialId}
                    </span>
                  )}
                </div>

                {/* Verify Button */}
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-white/5 px-4 py-2 rounded-full border border-white/10 hover:bg-accent hover:border-accent hover:text-primary transition-all duration-300 group/btn"
                >
                  Show Credential
                  <ExternalLink
                    size={16}
                    className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform"
                  />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
