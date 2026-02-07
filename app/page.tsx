"use client";

import { Github, Mail, Twitter, Eye, ExternalLink, Sparkles, LucideIcon } from "lucide-react";
import { useEffect, useState } from "react";

// Type definitions
interface Project {
  id: number;
  title: string;
  role: string;
  description: string;
  details: string;
  features: string[];
  tags: string[];
  github: string;
  color: string;
  glowColor: string;
}

interface Blog {
  id: number;
  title: string;
  category: string;
  description: string;
  tags: string[];
  color: string;
  glowColor: string;
}

interface SocialLink {
  Icon: LucideIcon;
  href: string;
  label: string;
  color: string;
}

interface Skill {
  name: string;
  category: string;
  gradient: string;
}

// Custom hook for typewriter effect
export function useTypewriter(
  words: string[],
  typingSpeed: number = 120,
  deletingSpeed: number = 60,
  delay: number = 1000
): string {
  const [text, setText] = useState<string>("");
  const [index, setIndex] = useState<number>(0);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);

  useEffect(() => {
    const currentWord = words[index];

    const timeout = setTimeout(() => {
      setText((prev) =>
        isDeleting
          ? currentWord.substring(0, prev.length - 1)
          : currentWord.substring(0, prev.length + 1)
      );

      if (!isDeleting && text === currentWord) {
        setTimeout(() => setIsDeleting(true), delay);
      }

      if (isDeleting && text === "") {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % words.length);
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, index, words, typingSpeed, deletingSpeed, delay]);

  return text;
}

export default function Portfolio() {
  const [activeProject, setActiveProject] = useState<number | null>(null);
  
  const text = useTypewriter([
    "Hi, I'm Dulesh",
    "Full Stack Developer",
    "AI Enthusiast",
  ]);

  const projects: Project[] = [
    {
      id: 1,
      title: "Second-Brain",
      role: "Full-stack Engineer",
      description: "A Link Management Web-App",
      details: "Full-stack MERN app to save and manage links and notes. React frontend with Express.js & MongoDB backend.",
      features: ["Persistent storage", "Smart organization", "Productivity-focused design"],
      tags: ["React", "Node.js", "MongoDB", "Express"],
      github: "https://github.com/Dulesh123/Second-Brain",
      color: "from-blue-500 to-cyan-500",
      glowColor: "rgba(59, 130, 246, 0.3)"
    },
    {
      id: 2,
      title: "Live-Sketch",
      role: "Full-stack Engineer",
      description: "A Real-time Collaborative Canvas",
      details: "Real-time collaborative drawing with WebSockets. Session and user data stored in PostgreSQL.",
      features: ["Real-time collaboration", "Responsive UI", "Productivity-focused design"],
      tags: ["MERN", "WebSockets", "PostgreSQL", "Turborepo"],
      github: "https://github.com/Dulesh123/Live-Sketch",
      color: "from-purple-500 to-pink-500",
      glowColor: "rgba(168, 85, 247, 0.3)"
    },
    {
      id: 3,
      title: "Sol-care",
      role: "Full-stack BlockChain Engineer",
      description: "A Decentralized Application",
      details: "Multi-chain wallet with blockchain data fetching using JSON-RPC.",
      features: ["Solana integration", "Crypto handling", "Balance checking"],
      tags: ["Next.js", "Web3", "JSON-RPC", "Solana"],
      github: "https://github.com/Dulesh123/Sol-Care",
      color: "from-green-500 to-emerald-500",
      glowColor: "rgba(34, 197, 94, 0.3)"
    },
    {
      id: 4,
      title: "Diabetic-Retinopathy",
      role: "IOT and ML Engineer",
      description: "A Diabetic Stage Detection Application",
      details: "AI-powered system for early detection using retinal images. IOT device integration with Raspberry Pi.",
      features: [
        "Retinal image analysis",
        "Stage classification",
        "IOT device control",
        "Automated detection"
      ],
      tags: ["IOT", "ML", "Raspberry Pi", "AI"],
      github: "https://github.com/Dulesh123/Diabetic-Retinopathy",
      color: "from-orange-500 to-red-500",
      glowColor: "rgba(249, 115, 22, 0.3)"
    }
  ];

  const blogs: Blog[] = [
    {
      id: 1,
      title: "Modern Web Development",
      category: "Web Development",
      description: "Modern web development has evolved significantly with frameworks enabling faster, scalable applications. Component-based architectures, server-side rendering, and type-safe development revolutionize project approaches.",
      tags: ["React", "Next.js", "TypeScript", "Best Practices"],
      color: "from-indigo-500 to-blue-500",
      glowColor: "rgba(99, 102, 241, 0.3)"
    },
    {
      id: 2,
      title: "AWS Cloud Infrastructure",
      category: "Cloud Computing",
      description: "AWS has become the backbone of modern cloud infrastructure, offering comprehensive services for scaling, securing, and optimizing applications. Core services include EC2, S3, Lambda, and CloudFormation.",
      tags: ["EC2", "S3", "Lambda", "CloudFormation"],
      color: "from-yellow-500 to-orange-500",
      glowColor: "rgba(234, 179, 8, 0.3)"
    },
    {
      id: 3,
      title: "Docker & Containerization",
      category: "DevOps",
      description: "Docker has revolutionized software deployment through containerization. Containers package applications with all dependencies, ensuring consistency across development, testing, and production.",
      tags: ["Docker", "Containers", "Docker Compose", "Orchestration"],
      color: "from-cyan-500 to-blue-500",
      glowColor: "rgba(6, 182, 212, 0.3)"
    }
  ];

  const socialLinks: SocialLink[] = [
    {
      Icon: Github,
      href: "https://github.com/dulesh123",
      label: "GitHub",
      color: "hover:bg-purple-500/20 hover:border-purple-500"
    },
    {
      Icon: Mail,
      href: "mailto:duleshshivakale@gmail.com",
      label: "Mail",
      color: "hover:bg-pink-500/20 hover:border-pink-500"
    },
    {
      Icon: Twitter,
      href: "https://x.com/DShivakale",
      label: "Twitter",
      color: "hover:bg-cyan-500/20 hover:border-cyan-500"
    }
  ];

  const skillsRow1: Skill[] = [
    { name: "Java", category: "Language", gradient: "from-orange-500 to-red-600" },
    { name: "JavaScript", category: "Language", gradient: "from-yellow-400 to-orange-500" },
    { name: "TypeScript", category: "Language", gradient: "from-blue-500 to-cyan-600" },
    { name: "Python", category: "Language", gradient: "from-blue-600 to-yellow-500" },
    { name: "React.js", category: "Frontend", gradient: "from-cyan-400 to-blue-600" },
    { name: "Express", category: "Backend", gradient: "from-gray-600 to-gray-800" },
    { name: "Tailwind CSS", category: "Styling", gradient: "from-cyan-500 to-blue-500" },
  ];

  const skillsRow2: Skill[] = [
    { name: "MySQL", category: "Database", gradient: "from-blue-600 to-blue-800" },
    { name: "MongoDB", category: "Database", gradient: "from-green-500 to-emerald-700" },
    { name: "Docker", category: "DevOps", gradient: "from-blue-500 to-cyan-600" },
    { name: "AWS", category: "Cloud", gradient: "from-orange-500 to-yellow-600" },
    { name: "Git & GitHub", category: "Version Control", gradient: "from-purple-600 to-pink-600" },
    { name: "NumPy", category: "AI/ML", gradient: "from-blue-400 to-indigo-600" },
    { name: "Pandas", category: "AI/ML", gradient: "from-purple-500 to-blue-600" },
  ];

  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
      {/* Google Font Import */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Playfair+Display:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@300;400;500;600;700&display=swap');
        
        * {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }

        .font-display {
          font-family: 'Playfair Display', Georgia, serif;
        }

        .font-mono {
          font-family: 'JetBrains Mono', 'Courier New', monospace;
        }

        /* Floating Animations */
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-20px) rotate(5deg); }
          66% { transform: translateY(-10px) rotate(-5deg); }
        }
        
        @keyframes floatSlow {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(50px, -50px) scale(1.05); }
        }

        /* Pulse & Glow Animations */
        @keyframes pulse {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.15); }
        }

        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.5); }
          50% { box-shadow: 0 0 40px rgba(59, 130, 246, 0.8); }
        }
        
        /* Shimmer & Shine Effects */
        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }

        @keyframes shine {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        
        /* Grid Flow Animation */
        @keyframes gridFlow {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(60px); opacity: 0.5; }
        }

        /* Skills Scroll Animations */
        @keyframes scrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @keyframes scrollRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }

        /* Orbit Animations */
        @keyframes orbitSlow {
          0% { transform: rotate(0deg) translateX(100px) rotate(0deg); }
          100% { transform: rotate(360deg) translateX(100px) rotate(-360deg); }
        }

        @keyframes orbitFast {
          0% { transform: rotate(0deg) translateX(150px) rotate(0deg); }
          100% { transform: rotate(-360deg) translateX(150px) rotate(360deg); }
        }

        /* Fade Animations */
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* Gradient Animations */
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        /* Utility Classes */
        .animate-float {
          animation: float 8s ease-in-out infinite;
          will-change: transform;
        }
        
        .animate-float-slow {
          animation: floatSlow 15s ease-in-out infinite;
          will-change: transform;
        }
        
        .animate-pulse-slow {
          animation: pulse 4s ease-in-out infinite;
          will-change: opacity, transform;
        }
        
        .animate-shimmer {
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.15), transparent);
          background-size: 1000px 100%;
          animation: shimmer 3s infinite;
          will-change: background-position;
        }
        
        .animate-grid-flow {
          animation: gridFlow 20s linear infinite;
          will-change: transform, opacity;
        }

        .animate-scroll-left {
          animation: scrollLeft 30s linear infinite;
        }

        .animate-scroll-right {
          animation: scrollRight 35s linear infinite;
        }

        .animate-scroll-left:hover,
        .animate-scroll-right:hover {
          animation-play-state: paused;
        }

        .animate-orbit-slow {
          animation: orbitSlow 30s linear infinite;
          will-change: transform;
        }

        .animate-orbit-fast {
          animation: orbitFast 20s linear infinite;
          will-change: transform;
        }

        .animate-fade-in {
          animation: fadeIn 0.5s ease-out forwards;
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }

        .animate-glow {
          animation: glow 3s ease-in-out infinite;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradientShift 8s ease infinite;
        }

        /* Hover Effects */
        .hover-lift {
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s ease;
        }

        .hover-lift:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
        }

        .hover-scale {
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .hover-scale:hover {
          transform: scale(1.05);
        }

        .hover-glow {
          transition: box-shadow 0.3s ease, filter 0.3s ease;
        }

        .hover-glow:hover {
          box-shadow: 0 0 30px rgba(59, 130, 246, 0.6);
          filter: brightness(1.1);
        }

        /* Smooth transitions */
        .transition-smooth {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        /* Performance optimizations */
        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }

        /* Improved text rendering */
        * {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          text-rendering: optimizeLegibility;
        }

        /* Responsive orbit animations for mobile */
        @media (max-width: 768px) {
          @keyframes orbitSlowMobile {
            0% { transform: rotate(0deg) translateX(50px) rotate(0deg); }
            100% { transform: rotate(360deg) translateX(50px) rotate(-360deg); }
          }

          @keyframes orbitFastMobile {
            0% { transform: rotate(0deg) translateX(75px) rotate(0deg); }
            100% { transform: rotate(-360deg) translateX(75px) rotate(360deg); }
          }

          .animate-orbit-slow {
            animation: orbitSlowMobile 30s linear infinite;
          }

          .animate-orbit-fast {
            animation: orbitFastMobile 20s linear infinite;
          }
        }
      `}</style>

      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        
        {/* Animated grid */}
        <div 
          className="absolute inset-0 opacity-20 animate-grid-flow"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(59, 130, 246, 0.15) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(59, 130, 246, 0.15) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        ></div>
        
        {/* Floating orbs with pulse animation */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-56 h-56 md:w-80 md:h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-48 h-48 md:w-64 md:h-64 bg-cyan-500/15 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '4s' }}></div>
        
        {/* Small floating particles */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-blue-400 rounded-full animate-orbit-slow"></div>
        <div className="absolute top-40 right-40 w-2 h-2 bg-purple-400 rounded-full animate-orbit-fast"></div>
        <div className="absolute bottom-20 left-1/3 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-orbit-slow" style={{ animationDelay: '3s' }}></div>
        
        {/* Radial gradient overlay */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/50 to-black"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        {/* Hero Section */}
        <section className="mb-16 sm:mb-20 lg:mb-28">
          <div className="flex flex-col items-center gap-8 lg:gap-12 mb-10 lg:mb-12">
            {/* Profile Image with enhanced animation */}
            <div className="relative group flex-shrink-0">
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full blur-xl opacity-75 animate-pulse-slow"></div>
              <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-44 md:h-44 rounded-full overflow-hidden border-4 border-gray-800 animate-float">
                <img
                  src="/profile.png"
                  alt="Profile"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-3 sm:gap-4 items-center justify-center">
              {socialLinks.map(({ Icon, href, label, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl 
                    bg-gray-900/50 backdrop-blur 
                    border border-gray-800 
                    flex items-center justify-center 
                    transition-all duration-300 
                    hover:scale-110 hover:-translate-y-1 
                    group ${color}`}
                >
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-gray-400 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Intro Text */}
          <div className="space-y-3 sm:space-y-4 text-center">
            <div className="relative inline-block">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent px-4">
                {text}
                <span className="animate-pulse">|</span>
              </h1>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
            </div>
            <p className="text-lg sm:text-xl md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-semibold px-4">
              22, Belagavi | Full Stack Engineer
            </p>
            <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-3xl leading-relaxed mx-auto px-4">
              I&apos;m a Full Stack Engineer building robust, scalable, and user-centric web applications. 
              From designing efficient backend architectures to crafting seamless front-end experiences, 
              I turn complex technical challenges into intuitive digital solutions.
            </p>
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-16 sm:mb-20 lg:mb-28">
          <div className="mb-8 sm:mb-10 lg:mb-12 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent px-4 lg:px-0">
              Projects
            </h2>
          </div>

          <div className="space-y-4 sm:space-y-5 lg:space-y-6">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="group relative w-full"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {activeProject === project.id ? (
                  <div className="relative bg-gradient-to-br from-gray-900/95 to-gray-900/80 backdrop-blur-2xl border border-gray-800 rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-10 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5"></div>
                    <div className={`absolute inset-0 opacity-20 blur-3xl bg-gradient-to-r ${project.color}`}></div>
                    
                    <button
                      onClick={() => setActiveProject(null)}
                      className="absolute top-3 right-3 sm:top-4 sm:right-4 lg:top-6 lg:right-6 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-800/80 hover:bg-gray-700 backdrop-blur flex items-center justify-center transition-all hover:scale-110 z-10"
                      aria-label="Close project details"
                    >
                      <span className="text-xl sm:text-2xl text-gray-300">✕</span>
                    </button>
                    
                    <div className="relative z-10">
                      <div className={`h-1 sm:h-1.5 w-16 sm:w-24 bg-gradient-to-r ${project.color} rounded-full mb-4 sm:mb-6`}></div>
                      
                      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3">{project.title}</h3>
                      <p className="text-sm sm:text-base lg:text-lg text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-4 sm:mb-6">{project.role}</p>
                      <p className="text-sm sm:text-base lg:text-lg text-gray-300 mb-6 sm:mb-8 leading-relaxed">{project.details}</p>
                      
                      <div className="mb-6 sm:mb-8">
                        <h4 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 flex items-center gap-2">
                          <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
                          Features
                        </h4>
                        <ul className="space-y-2 sm:space-y-3">
                          {project.features.map((feature, i) => (
                            <li key={i} className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base lg:text-lg text-gray-300">
                              <div className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-gradient-to-r ${project.color} flex-shrink-0 mt-1.5 sm:mt-2`}></div>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-2 sm:gap-3 px-5 sm:px-6 lg:px-8 py-2.5 sm:py-3 lg:py-4 text-sm sm:text-base lg:text-lg font-semibold bg-gradient-to-r ${project.color} rounded-xl sm:rounded-2xl hover:shadow-2xl transition-all duration-300 hover:scale-105`}
                        style={{ boxShadow: `0 10px 40px ${project.glowColor}` }}
                      >
                        <Github className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
                        View on GitHub
                        <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5" />
                      </a>
                    </div>
                  </div>
                ) : (
                  <div
                    onClick={() => setActiveProject(project.id)}
                    className="relative h-full bg-gray-900/40 backdrop-blur border border-gray-800 rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8 cursor-pointer transition-all duration-300 hover:bg-gray-900/60 hover:border-gray-700 hover:scale-[1.01] sm:hover:scale-[1.02] hover:shadow-2xl overflow-hidden group"
                    style={{ boxShadow: `0 0 0 ${project.glowColor}` }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.boxShadow = `0 10px 60px ${project.glowColor}`)
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.boxShadow = `0 0 0 ${project.glowColor}`)
                    }
                  >
                    <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-gradient-to-br ${project.color}`}></div>
                    
                    <div className="relative z-10">
                      <div className={`h-1 sm:h-1.5 w-14 sm:w-20 bg-gradient-to-r ${project.color} rounded-full mb-3 sm:mb-5`}></div>
                      
                      <div className="flex items-start justify-between mb-3 sm:mb-5 gap-3 sm:gap-4">
                        <div className="flex-1 min-w-0">
                          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-1.5 sm:mb-2">{project.title}</h3>
                          <p className="text-xs sm:text-sm lg:text-base text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">{project.role}</p>
                        </div>
                        <Eye className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 group-hover:text-blue-400 transition-colors flex-shrink-0 mt-0.5 sm:mt-1" />
                      </div>

                      <p className="text-sm sm:text-base lg:text-lg text-gray-400 mb-3 sm:mb-5">{project.description}</p>

                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 sm:px-3 lg:px-4 py-1 sm:py-1.5 lg:py-2 text-xs sm:text-sm rounded-full bg-gray-800/50 text-gray-300 border border-gray-700 hover:border-gray-600 transition-colors whitespace-nowrap"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-16 sm:mb-20 lg:mb-28">
          <div className="mb-10 sm:mb-12 lg:mb-16 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent px-4 lg:px-0">
              Skills & Technologies
            </h2>
          </div>

          <div className="relative overflow-hidden py-3 sm:py-4">
            {/* Gradient fade on edges */}
            <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 lg:w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 lg:w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>

            {/* First row - scrolling left */}
            <div className="flex gap-3 sm:gap-4 lg:gap-5 mb-5 sm:mb-6 lg:mb-8 animate-scroll-left">
              <div className="flex gap-3 sm:gap-4 lg:gap-5">
                {[...skillsRow1, ...skillsRow1].map((skill, index) => (
                  <SkillCard key={`${skill.name}-${index}`} skill={skill} />
                ))}
              </div>
            </div>

            {/* Second row - scrolling right */}
            <div className="flex gap-3 sm:gap-4 lg:gap-5 animate-scroll-right">
              <div className="flex gap-3 sm:gap-4 lg:gap-5">
                {[...skillsRow2, ...skillsRow2].map((skill, index) => (
                  <SkillCard key={`${skill.name}-${index}`} skill={skill} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Blogs Section */}
        <section>
          <div className="mb-8 sm:mb-10 lg:mb-12 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent px-4 lg:px-0">
              Blogs
            </h2>
          </div>

          <div className="space-y-4 sm:space-y-5 lg:space-y-6">
            {blogs.map((blog, index) => (
              <div
                key={blog.id}
                className="relative bg-gray-900/40 backdrop-blur border border-gray-800 rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8 hover:bg-gray-900/60 hover:border-gray-700 transition-all duration-300 hover:scale-[1.01] sm:hover:scale-[1.02] cursor-pointer group overflow-hidden"
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  boxShadow: `0 0 0 ${blog.glowColor}`
                }}
                onMouseEnter={(e) => e.currentTarget.style.boxShadow = `0 10px 60px ${blog.glowColor}`}
                onMouseLeave={(e) => e.currentTarget.style.boxShadow = `0 0 0 ${blog.glowColor}`}
              >
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-gradient-to-br ${blog.color}`}></div>
                
                <div className="relative z-10">
                  <div className={`h-1 sm:h-1.5 w-14 sm:w-20 bg-gradient-to-r ${blog.color} rounded-full mb-3 sm:mb-5`}></div>
                  
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-1.5 sm:mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all">
                    {blog.title}
                  </h3>
                  <p className="text-xs sm:text-sm lg:text-base text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-3 sm:mb-5">{blog.category}</p>
                  <p className="text-sm sm:text-base lg:text-lg text-gray-400 mb-3 sm:mb-5 leading-relaxed">{blog.description}</p>

                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {blog.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 sm:px-3 lg:px-4 py-1 sm:py-1.5 lg:py-2 text-xs sm:text-sm rounded-full bg-gray-800/50 text-gray-300 border border-gray-700 hover:border-gray-600 transition-colors whitespace-nowrap"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

// Skill Card Component for reusability
function SkillCard({ skill }: { skill: Skill }) {
  return (
    <div className="relative group flex-shrink-0">
      {/* Glow effect background */}
      <div className={`absolute -inset-0.5 bg-gradient-to-r ${skill.gradient} rounded-xl sm:rounded-2xl blur opacity-0 group-hover:opacity-75 transition-all duration-500`}></div>
      
      <div className="relative px-4 sm:px-6 lg:px-8 py-3 sm:py-4 lg:py-5 bg-gray-900/80 backdrop-blur-xl border border-gray-800 rounded-xl sm:rounded-2xl transition-all duration-300 hover:bg-gray-900/90 hover:border-gray-700 hover:scale-105 hover:shadow-2xl cursor-pointer overflow-hidden min-w-[140px] sm:min-w-[160px] lg:min-w-[180px]">
        {/* Animated gradient bar on top */}
        <div className={`absolute top-0 left-0 right-0 h-0.5 sm:h-1 bg-gradient-to-r ${skill.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
        
        {/* Shimmer effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 text-center">
          <p className="text-sm sm:text-base lg:text-lg font-bold text-gray-100 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-200 transition-all mb-1 sm:mb-1.5">
            {skill.name}
          </p>
          <div className={`h-0.5 w-0 mx-auto bg-gradient-to-r ${skill.gradient} transition-all duration-300 group-hover:w-full mb-1.5 sm:mb-2`}></div>
          <p className="text-[10px] sm:text-xs text-gray-500 group-hover:text-gray-400 transition-colors font-medium uppercase tracking-wider">
            {skill.category}
          </p>
        </div>

        {/* Corner accent */}
        <div className={`absolute bottom-0 right-0 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-tl ${skill.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-tl-xl sm:rounded-tl-2xl`}></div>
      </div>
    </div>
  );
}