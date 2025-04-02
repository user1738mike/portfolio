/* eslint-disable no-unused-vars */
"use client";

import { useState, useEffect, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiExternalLink } from "react-icons/fi";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import { FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiFirebase } from "react-icons/si";

const navigation = [
  { name: "Home", href: "#home" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

const projects = [
  {
    title: "E-commerce Dashboard",
    description:
      "A comprehensive analytics dashboard for tracking sales, customer behavior, and inventory management.",
    tech: ["React", "TypeScript", "TailwindCSS"],
    link: "#",
  },
  {
    title: "AI Content Generator",
    description:
      "Machine learning-powered application that creates custom marketing copy based on brand guidelines.",
    tech: ["Python", "TensorFlow", "FastAPI"],
    link: "#",
  },
  {
    title: "Task Management System",
    description:
      "A collaborative platform for teams to manage projects, assign tasks, and track progress in real-time.",
    tech: ["Next.js", "Prisma", "PostgreSQL"],
    link: "#",
  },
];

const experiences = [
  {
    company: "TechCorp Inc.",
    role: "Senior Frontend Developer",
    period: "2022 - Present",
    description:
      "Led the frontend team in developing scalable web applications with modern frameworks.",
  },
  {
    company: "InnovateSoft",
    role: "Full Stack Engineer",
    period: "2020 - 2022",
    description:
      "Designed and implemented RESTful APIs and responsive user interfaces for enterprise clients.",
  },
  {
    company: "StartupX",
    role: "Junior Developer",
    period: "2018 - 2020",
    description:
      "Collaborated on building MVPs for early-stage startups in various industries.",
  },
];

const techStack = [
  { name: "React", icon: <FaReact className="w-6 h-6 text-blue-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="w-6 h-6 text-green-500" /> },
  { name: "MongoDB", icon: <SiMongodb className="w-6 h-6 text-green-600" /> },
  {
    name: "Tailwind",
    icon: <SiTailwindcss className="w-6 h-6 text-cyan-400" />,
  },
  {
    name: "Firebase",
    icon: <SiFirebase className="w-6 h-6 text-yellow-500" />,
  },
  { name: "Git", icon: <FaGitAlt className="w-6 h-6 text-orange-600" /> },
];

export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "projects", "experience", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-gray-100 min-h-screen">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden -z-10">
        <motion.div
          className="absolute inset-0 bg-[url('/grid.svg')] bg-[length:100px_100px] opacity-20"
          style={{ y }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-950/80" />
      </div>

      {/* Navigation */}
      <header className="fixed inset-x-0 top-0 z-50 backdrop-blur-md bg-gray-950/50 border-b border-gray-800">
        <nav className="flex items-center justify-between p-4 lg:px-8 max-w-7xl mx-auto">
          <a href="#home" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
              <span className="font-bold text-white">MO</span>
            </div>
            <span className="font-semibold text-gray-100">Michael Omole</span>
          </a>

          <div className="hidden lg:flex gap-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  activeSection === item.href.slice(1)
                    ? "text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex">
            <a
              href="#contact"
              className="text-sm font-medium bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-2 rounded-md hover:opacity-90 transition-all"
            >
              Contact Me
            </a>
          </div>

          <button
            className="lg:hidden text-gray-400 hover:text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <HiOutlineMenuAlt3 className="h-6 w-6" />
          </button>
        </nav>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-gray-950/95 backdrop-blur-md"
          >
            <div className="flex flex-col h-full p-6">
              <div className="flex justify-between items-center mb-12">
                <a href="#home" className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-md bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                    <span className="font-bold text-white">MO</span>
                  </div>
                  <span className="font-semibold text-gray-100">
                    Michael Omole
                  </span>
                </a>
                <button
                  className="text-gray-400 hover:text-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <HiX className="h-6 w-6" />
                </button>
              </div>

              <div className="flex flex-col gap-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`text-xl font-medium transition-colors ${
                      activeSection === item.href.slice(1)
                        ? "text-white"
                        : "text-gray-400 hover:text-white"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
              </div>

              <div className="mt-auto">
                <a
                  href="#contact"
                  className="block w-full text-center bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-3 rounded-md hover:opacity-90 transition-all"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact Me
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section with Profile Image and Social Links */}
      <section id="home" className="min-h-screen flex items-center pt-20">
        <div className="container mx-auto px-6 lg:px-8 py-32">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative group w-full max-w-xs lg:max-w-sm"
            >
              <div className="relative aspect-square rounded-full overflow-hidden border-4 border-gray-800 shadow-xl">
                {/* Replace this div with your actual image */}
                <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <span className="text-7xl font-bold text-white">MO</span>
                </div>
                <img 
                  src="/profile.jpg" 
                  alt="Michael Omole"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -inset-4 rounded-full border-2 border-blue-400/30 group-hover:border-blue-400/50 transition-all duration-500 -z-10"></div>
              <div className="absolute -inset-6 rounded-full border border-purple-500/20 group-hover:border-purple-500/30 transition-all duration-700 -z-20"></div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex-1"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                Hi, I'm{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                  Michael Omole
                </span>
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-gray-300 leading-relaxed max-w-2xl">
                A Full Stack Developer from Nairobi,Kenya specializing in modern web
                technologies to build scalable and cool applications.
              </p>

              {/* Social Links */}
              <div className="mt-8 flex gap-4">
                <a
                  href="https://github.com/user1738mike"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors p-2 rounded-full bg-gray-800 hover:bg-gray-700"
                  aria-label="GitHub"
                >
                  <FiGithub className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/feed/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors p-2 rounded-full bg-gray-800 hover:bg-gray-700"
                  aria-label="LinkedIn"
                >
                  <FiLinkedin className="w-5 h-5" />
                </a>
                <a
                  href="mailto:radingmichael10@gmail.com"
                  className="text-gray-400 hover:text-white transition-colors p-2 rounded-full bg-gray-800 hover:bg-gray-700"
                  aria-label="Email"
                >
                  <FiMail className="w-5 h-5" />
                </a>
              </div>

              {/* Action Buttons */}
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-md hover:opacity-90 transition-all font-medium"
                >
                  View Projects
                </a>
                <a
                  href="#contact"
                  className="px-6 py-3 border border-gray-700 rounded-md hover:bg-gray-800/50 transition-all font-medium"
                >
                  Contact Me
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Featured{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                Projects
              </span>
            </h2>
            <p className="mt-4 text-lg text-gray-300 max-w-2xl">
              Here are some of my recent projects that showcase my skills and
              expertise.
            </p>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-900/50 border border-gray-800 rounded-xl overflow-hidden hover:border-blue-500/30 transition-all group"
                >
                  <div className="p-6">
                    <div className="flex justify-between items-start">
                      <h3 className="text-xl font-semibold">{project.title}</h3>
                      <a
                        href={project.link}
                        className="text-gray-400 hover:text-blue-400 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FiExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                    <p className="mt-3 text-gray-400">{project.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-2 py-1 bg-gray-800/50 rounded-md text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 bg-gray-900/30">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Professional{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                Experience
              </span>
            </h2>
            <p className="mt-4 text-lg text-gray-300 max-w-2xl">
              My journey through the tech industry and the roles I've held.
            </p>

            <div className="mt-16 space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-blue-500/30 transition-all"
                >
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                    <div>
                      <h3 className="text-xl font-semibold">{exp.company}</h3>
                      <p className="text-blue-400 mt-1">{exp.role}</p>
                    </div>
                    <span className="text-gray-400 bg-gray-800/50 px-3 py-1 rounded-md text-sm">
                      {exp.period}
                    </span>
                  </div>
                  <p className="mt-4 text-gray-300">{exp.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Tech{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                Stack
              </span>
            </h2>
            <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
              Technologies I work with on a daily basis
            </p>

            <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 max-w-4xl mx-auto">
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center gap-4 p-6 bg-gray-900/50 border border-gray-800 rounded-xl hover:border-blue-500/30 transition-all"
                >
                  <div className="text-3xl">{tech.icon}</div>
                  <span className="text-gray-300 font-medium">{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gray-900/30">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-center">
              Get In{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                Touch
              </span>
            </h2>
            <p className="mt-4 text-lg text-gray-300 text-center">
              Have a project in mind or want to collaborate? Feel free to reach
              out!
            </p>

            <form className="mt-16 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Subject"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium py-3 px-6 rounded-md hover:opacity-90 transition-all"
              >
                Send Message
              </button>
            </form>

            <div className="mt-16 flex justify-center gap-6">
              <a
                href="https://github.com/user1738mike"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FiGithub className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/feed/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FiLinkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:radingmichael10@gmail.com"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FiMail className="w-6 h-6" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-800">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-md bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <span className="font-bold text-white">MO</span>
              </div>
              <span className="font-semibold">Michael Omole</span>
            </div>
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}