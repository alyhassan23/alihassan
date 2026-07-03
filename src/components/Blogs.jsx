import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { BLOGS } from "../data";

const Blogs = () => {
  // Show only the first 2 blogs on the home page
  const displayedBlogs = BLOGS.slice(0, 2);

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
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section id="blogs" className="py-24 bg-transparent border-t border-white/5 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Section with View All Link */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4"
        >
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-textMain mb-4">
              Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-highlight">Insights</span>
            </h2>
            <p className="text-textMuted text-lg">
              Thoughts on Web Development, AI, and Engineering.
            </p>
          </div>
          <Link
            to="/blogs"
            className="text-white bg-white/5 hover:bg-white/10 px-6 py-3 rounded-full font-medium flex items-center gap-2 transition-all duration-300 group border border-white/10 hover:border-accent/50"
          >
            View all articles{" "}
            <ArrowUpRight
              size={18}
              className="group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-accent transition-all"
            />
          </Link>
        </motion.div>

        {/* Blogs Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {displayedBlogs.map((blog) => (
            <motion.div variants={itemVariants} key={blog.id} className="group h-full">
              <Link
                to={`/blog/${blog.id}`}
                className="block h-full"
              >
                <div className="bg-secondary/30 backdrop-blur-xl p-8 rounded-3xl border border-white/10 h-full hover:border-accent/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(6,182,212,0.1)] flex flex-col relative overflow-hidden">
                  {/* Decorative glow inside card */}
                  <div className="absolute inset-0 bg-gradient-to-br from-highlight/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
                  
                  {/* Meta Info */}
                  <div className="flex justify-between items-start mb-6 relative z-10">
                    <span className="px-3 py-1.5 text-xs font-bold text-white bg-white/10 backdrop-blur-md rounded-full border border-white/10 uppercase tracking-wider">
                      {blog.category}
                    </span>
                    <span className="text-textMuted text-sm font-medium">{blog.date}</span>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-highlight transition-colors relative z-10 leading-snug">
                    {blog.title}
                  </h3>
                  <p className="text-textMuted leading-relaxed mb-8 flex-grow relative z-10 text-lg">
                    {blog.excerpt}
                  </p>

                  {/* Read More Link */}
                  <div className="text-white font-medium flex items-center gap-2 mt-auto group-hover:gap-3 transition-all relative z-10 group-hover:text-accent">
                    Read More <ArrowUpRight size={18} className="text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
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

export default Blogs;
