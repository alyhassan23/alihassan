import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "/#about" },
    { name: "Skills", href: "/#skills" },
    { name: "Education", href: "/#education" },
    { name: "Projects", href: "/#projects" },
    { name: "Certifications", href: "/#certifications" },
    { name: "Blogs", href: "/#blogs" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 top-0 start-0 transition-all duration-300 ${
        scrolled
          ? "bg-secondary/70 backdrop-blur-xl border-b border-white/10 shadow-lg py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between px-6">
        {/* Logo */}
        <Link
          to="/"
          className="text-3xl md:text-4xl font-signature font-bold text-white flex items-center gap-2 group"
        >
          Ali
          <span className="text-accent group-hover:text-highlight transition-colors duration-500">
            Hassan
          </span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-400 rounded-lg hover:bg-white/10 focus:outline-none transition-colors"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-1 items-center">
          {navLinks.map((link) => {
            const isActive = location.hash === link.href.replace("/", "");
            return (
              <a
                key={link.name}
                href={link.href}
                className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                  isActive ? "text-white" : "text-textMuted hover:text-white"
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.div
                    layoutId="navbar-active"
                    className="absolute inset-0 bg-white/10 rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
          <a
            href="/#contact"
            className="ml-4 relative inline-flex items-center justify-center px-6 py-2 overflow-hidden font-medium text-white bg-accent rounded-full group hover:bg-highlight transition-colors duration-300"
          >
            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-10"></span>
            <span className="relative">Contact Me</span>
          </a>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="w-full md:hidden overflow-hidden"
            >
              <ul className="flex flex-col font-medium mt-4 rounded-2xl bg-secondary/90 backdrop-blur-xl border border-white/10 p-4 space-y-2">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="block py-3 px-4 text-white rounded-xl hover:bg-white/10 hover:text-accent transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href="/#contact"
                    onClick={() => setIsOpen(false)}
                    className="block py-3 px-4 text-center text-white bg-accent rounded-xl hover:bg-highlight mt-4 transition-colors"
                  >
                    Contact Me
                  </a>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
