import React, { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code2,
  Palette,
  Zap,
  ChevronDown,
} from "lucide-react";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const projects = [
    {
      title: "Finance Management Application",
      description:
        "Developed secure finance and invoice automation app integrating generative AI for document processing, improving accuracy and efficiency.",
      tech: ["React", "Node.js", "Express", "PostgreSQL", "AI Integration"],
      link: "https://finetica.onrender.com/login",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Fantasy Football Platform",
      description:
        "Database-driven fantasy football web app with user authentication, admin roles, and a custom scoring system.",
      tech: ["PHP", "JavaScript", "Docker", "Heroku", "MySQL"],
      link: "https://github.com/filipljoljic/fantasyfootball",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Communication Solutions (Infobip)",
      description:
        "Designed and implemented client-specific integrations using Infobip’s CPaaS and SaaS platform and APIs to improve messaging flow and data reliability.",
      tech: ["Java", "JavaScript", "SQL", "REST API"],
      link: "https://www.infobip.com/",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      title: "Data Processing Pipelines",
      description:
        "Developed and optimized Python-based data workflows for real-time logistics tracking and performance optimization.",
      tech: ["Python", "Django", "SQL", "PostgreSQL"],
      link: "https://www.caseware.com/products/idea/",
      gradient: "from-orange-500 to-red-500",
    },
    {
      title: "Padel App",
      description:
        "Developed a padel app where users can track their match scores and players which they have played. Future development includes adding a chat functionality and a leaderboard, aswell an AI system that suggests players based on your skill level and process videos of your matches to improve your skills.",
      tech: ["React", "Node.js", "Express", "Prisma", "AI Integration"],
      link: "https://github.com/filipljoljic/Padel-app",
      gradient: "from-orange-500 to-red-500",
    },
    {
      title: "Food Ordering App",
      description:
        "Developed a food ordering app where users can order food from their favorite restaurants.",
      tech: ["PHP", "JavaScript", "Docker", "Heroku", "MySQL"],
      link: "https://github.com/filipljoljic/food-order-project",
      gradient: "from-orange-500 to-red-500",
    },
  ];

  const skills = [
    {
      category: "Languages & Frameworks",
      items: [
        "Python",
        "Java",
        "JavaScript",
        "PHP",
        "React",
        "Node.js",
        "Express",
        "SQL",
        "HTML/CSS",
      ],
    },
    {
      category: "Databases",
      items: ["PostgreSQL", "MySQL", "NoSQL"],
    },
    {
      category: "Tools & Platforms",
      items: [
        "Git",
        "Docker",
        "Postman",
        "AWS",
        "Jest",
        "Vite",
        "REST APIs",
        "Agile/Scrum",
      ],
    },
    {
      category: "Other Skills",
      items: [
        "Low-Code Development (Mendix)",
        "Solution Design & Engineering",
        "OOP Principles",
        "Performance Optimization",
        "Testing & QA",
      ],
    },
  ];

  const scrollToSection = (section) => {
    setActiveSection(section);
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md z-50 border-b border-purple-500/20">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Filip Ljoljic
          </div>
          <div className="flex gap-8">
            {["home", "about", "projects", "skills", "contact"].map(
              (section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize hover:text-purple-400 transition-colors ${
                    activeSection === section
                      ? "text-purple-400"
                      : "text-gray-300"
                  }`}
                >
                  {section}
                </button>
              )
            )}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center px-6 pt-20"
      >
        <div
          className={`text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="mb-6">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-purple-500 to-pink-500 p-1">
              <img
                src="/src/assets/profile.jpeg"
                alt="Filip Ljoljic"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>
          <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            Software Engineer
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Passionate about building scalable software and elegant web
            applications using modern technologies. Focused on performance,
            reliability, and user experience.
          </p>
          <div className="flex gap-4 justify-center">
            <button
              onClick={() => scrollToSection("projects")}
              className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all"
            >
              View Projects
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="px-8 py-3 border-2 border-purple-500 rounded-full font-semibold hover:bg-purple-500/10 transition-all"
            >
              Get in Touch
            </button>
          </div>
          <div className="mt-12 animate-bounce">
            <ChevronDown size={32} className="mx-auto text-purple-400" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-gray-300 text-lg mb-12 text-center leading-relaxed">
            I’m a recent graduate in Information Technology from International
            Burch University. My experience includes full-stack development,
            solution engineering, and data handling. I’ve worked with companies
            like <strong>Symphony.is</strong>, <strong>Infobip</strong>,{" "}
            <strong>IDEA Software</strong>, and <strong>UniCredit Bank</strong>,
            where I developed scalable applications, integrated APIs, automated
            workflows, and led Scrum teams. I’m passionate about clean
            architecture, AI integration, and continuous learning.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/50 transition-all">
              <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
                <Code2 className="text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Clean Code</h3>
              <p className="text-gray-400">
                I follow best practices and write maintainable, testable, and
                efficient code across full-stack projects.
              </p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/50 transition-all">
              <div className="w-12 h-12 bg-pink-500/20 rounded-lg flex items-center justify-center mb-4">
                <Palette className="text-pink-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">User Experience</h3>
              <p className="text-gray-400">
                I design user-focused, responsive, and accessible interfaces
                that emphasize clarity and simplicity.
              </p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/50 transition-all">
              <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
                <Zap className="text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Performance</h3>
              <p className="text-gray-400">
                I focus on building efficient and optimized systems that perform
                reliably under scale and complexity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="min-h-screen flex items-center px-6 py-20"
      >
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <a
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-purple-500/20 hover:border-purple-500/50 transition-all hover:transform hover:scale-105"
              >
                <div
                  className={`h-48 bg-gradient-to-r ${project.gradient} opacity-80 group-hover:opacity-100 transition-opacity`}
                ></div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2 flex items-center justify-between">
                    {project.title}
                    <ExternalLink
                      className="text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity"
                      size={20}
                    />
                  </h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="min-h-screen flex items-center px-6 py-20"
      >
        <div className="max-w-4xl mx-auto w-full">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skillGroup, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-purple-500/20"
              >
                <h3 className="text-xl font-semibold mb-4 text-purple-400">
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 bg-slate-700/50 rounded-lg text-gray-300 hover:bg-purple-500/20 hover:text-purple-300 transition-all"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="min-h-screen flex items-center px-6 py-20"
      >
        <div className="max-w-2xl mx-auto text-center w-full">
          <h2 className="text-4xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Let's Connect
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            I’m open to collaborations, freelance work, and full-time
            opportunities in software development and solution engineering.
            Let’s create something impactful together.
          </p>
          <div className="flex justify-center gap-6 mb-8">
            <a
              href="mailto:filipljoljic2000@gmail.com"
              className="w-14 h-14 bg-purple-500/20 rounded-full flex items-center justify-center hover:bg-purple-500/40 transition-all"
            >
              <Mail className="text-purple-400" />
            </a>
            <a
              href="https://github.com/filipljoljic"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 bg-purple-500/20 rounded-full flex items-center justify-center hover:bg-purple-500/40 transition-all"
            >
              <Github className="text-purple-400" />
            </a>
            <a
              href="https://www.linkedin.com/in/filip-ljoljic-sarajevo"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 bg-purple-500/20 rounded-full flex items-center justify-center hover:bg-purple-500/40 transition-all"
            >
              <Linkedin className="text-purple-400" />
            </a>
          </div>
          <a
            href="mailto:filipljoljic2000@gmail.com"
            className="inline-block px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all"
          >
            Send Message
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-8 px-6 border-t border-purple-500/20">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Filip Ljoljic. Built with React &
            Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}
