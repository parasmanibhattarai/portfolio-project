import React, { useState } from "react";
import {
  Mail,
  Linkedin,
  Github,
  Menu,
  X,
  Briefcase,
  Code,
  Star,
  ExternalLink,
} from "lucide-react";

// Main App Component
export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  const socialLinks = [
    {
      href: "https://github.com/parasmanibhattarai",
      icon: Github,
      label: "GitHub",
    },
    {
      href: "https://www.linkedin.com/in/parasmanibhattarai56/",
      icon: Linkedin,
      label: "LinkedIn",
    },
    { href: "bhattaraiparas56@gmail.com", icon: Mail, label: "Email" },
  ];

  const projects = [
    {
      title: "Project One",
      description:
        "A brief description of this project, highlighting the technologies used and its purpose. For instance, a full-stack web application for task management.",
      tags: ["React", "Node.js", "PostgreSQL", "Tailwind CSS"],
      link: "#",
      repo: "#",
    },
    {
      title: "Project Two",
      description:
        "Describe your second project. Maybe it's a mobile app, a data science project, or a creative coding experiment. Focus on what you learned.",
      tags: ["React Native", "Firebase", "Data Visualization"],
      link: "#",
      repo: "#",
    },
    {
      title: "Project Three",
      description:
        "Showcase another piece of your work. This could be a personal website, a freelance project, or a significant contribution to an open-source project.",
      tags: ["Vue.js", "Express", "MongoDB"],
      link: "#",
      repo: "#",
    },
  ];

  return (
    <div className="bg-background text-gray-200 font-sans leading-normal tracking-tight antialiased">
      {/* --- Header --- */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a
              href="#"
              className="text-2xl font-bold text-white flex items-center gap-2"
            >
              <Code className="w-6 h-6 text-primary" />
              <span>Paras Mani Bhattarai</span>
            </a>

            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-gray-300 hover:text-primary transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300 hover:text-white focus:outline-none"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden bg-background px-4 pt-2 pb-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block text-gray-300 hover:text-primary transition-colors duration-300 py-2 rounded-md text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
        )}
      </header>

      <main className="pt-16">
        {/* --- Hero Section --- */}
        <section id="hero" className="py-20 sm:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <img
              src="./assets/images/LinkedinProfile.JPG"
              alt="Portrait of Paras Mani Bhattarai"
              className="w-32 h-32 sm:w-40 sm:h-40 rounded-full mx-auto my-8 object-cover shadow-lg border-4 border-gray-700 hidden md:block"
            />

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white leading-tight">
              Hi, I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Paras Mani Bhattarai
              </span>
            </h1>
            <p className="mt-4 text-lg sm:text-xl lg:text-2xl text-gray-400 max-w-3xl mx-auto">
              I'm a passionate developer building modern web experiences. I
              specialize in React, Node.js, and crafting beautiful, functional
              user interfaces.
            </p>
            <div className="mt-8 flex justify-center items-center gap-4">
              <a
                href="#contact"
                className="bg-gradient-to-r from-primary to-accent hover:shadow-glow-primary text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Get in Touch
              </a>
              <a
                href="#projects"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300"
              >
                View My Work
              </a>
            </div>
            <div className="mt-12 flex justify-center gap-6">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-secondary transition-colors duration-300"
                >
                  <link.icon size={28} />
                  <span className="sr-only">{link.label}</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* --- About Section --- */}
        <section id="about" className="py-20 sm:py-24 bg-background-light">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white flex items-center justify-center gap-3">
                <Briefcase className="w-8 h-8 text-primary" />
                About Me
              </h2>
              <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
                Here's a bit more about my background and skills.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-4 text-lg text-gray-300">
                <p>
                  Hello! I'm a software developer with a strong passion for
                  creating elegant solutions to complex problems. My journey
                  into web development started with a simple "Hello World" and
                  has since grown into a full-fledged career building scalable
                  and performant applications.
                </p>
                <p>
                  I thrive in collaborative environments and enjoy turning ideas
                  into reality. When I'm not coding, I enjoy exploring new
                  technologies, contributing to open-source projects, and hiking
                  in the great outdoors.
                </p>
              </div>
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-white">My Skills</h3>
                <div className="flex flex-wrap gap-3">
                  {[
                    "JavaScript (ES6+)",
                    "React",
                    "Next.js",
                    "Node.js",
                    "Express",
                    "Python",
                    "SQL",
                    "NoSQL",
                    "HTML5 & CSS3",
                    "Tailwind CSS",
                    "Git & GitHub",
                    "Docker",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="bg-primary/20 text-secondary text-sm font-medium px-4 py-2 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- Projects Section --- */}
        <section id="projects" className="py-20 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white flex items-center justify-center gap-3">
                <Star className="w-8 h-8 text-primary" />
                Featured Projects
              </h2>
              <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
                Here are some of the projects I'm proud of. Feel free to explore
                them.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="bg-background-light border border-transparent hover:border-primary rounded-lg overflow-hidden transition-all duration-300 flex flex-col group"
                >
                  <div className="p-6 flex-grow">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mb-4 text-base leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-semibold bg-primary/20 text-secondary px-3 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="p-6 bg-background/50 mt-auto flex justify-between items-center">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-secondary hover:text-primary font-semibold transition-colors duration-300"
                    >
                      Live Demo <ExternalLink size={18} />
                    </a>
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white"
                    >
                      <Github size={22} />
                      <span className="sr-only">GitHub Repository</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- Contact Section --- */}
        <section id="contact" className="py-20 sm:py-24 bg-background-light">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Get In Touch
            </h2>
            <p className="mt-4 text-gray-400 max-w-xl mx-auto">
              I'm currently open to new opportunities and collaborations. If you
              have a project in mind or just want to say hello, feel free to
              reach out!
            </p>
            <div className="mt-8">
              <a
                href="mailto:bhattaraiparas56@gmail.com"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-primary to-accent hover:shadow-glow-primary text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105"
              >
                <Mail size={22} />
                <span>Say Hello</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* --- Footer --- */}
      <footer className="bg-background border-t border-background-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-gray-500">
          <div className="flex justify-center gap-6 mb-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary transition-colors duration-300"
              >
                <link.icon size={24} />
                <span className="sr-only">{link.label}</span>
              </a>
            ))}
          </div>
          <p>
            &copy; {new Date().getFullYear()} Paras Mani Bhattarai. All Rights
            Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
