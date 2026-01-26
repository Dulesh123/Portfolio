"use client";
import { useState } from "react";
import { Github, Mail, Twitter } from "lucide-react";

import { Pen, Eye, Code, ExternalLink, Sparkles } from "lucide-react";

export default function Portfolio() {
  const [activeProject, setActiveProject] = useState<number | null>(null);

 const projects = [
  {
    id: 1,
    title: "Second-Brain",
    role: "Full-stack Engineer",
    description: "A Link Management Web-App",
    details:
      "Full-stack MERN app to save and manage links and notes. React frontend with Express.js & MongoDB backend.",
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
    details:
      "Real-time collaborative drawing with WebSockets. Session and user data stored in PostgreSQL.",
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
    details:
      "Multi-chain wallet with blockchain data fetching using JSON-RPC.",
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
    details:
      "AI-powered system for early detection using retinal images. IOT device integration with Raspberry Pi.",
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


  const blogs = [
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

  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
      {/* Google Font Import */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap');
        
        * {
          font-family: 'Space Grotesk', sans-serif;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-20px) rotate(5deg); }
          66% { transform: translateY(-10px) rotate(-5deg); }
        }
        
        @keyframes floatSlow {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(50px, -50px); }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.1); }
        }
        
        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }
        
        @keyframes gridFlow {
          0% { transform: translateY(0); }
          100% { transform: translateY(60px); }
        }

        @keyframes orbitSlow {
          0% { transform: rotate(0deg) translateX(100px) rotate(0deg); }
          100% { transform: rotate(360deg) translateX(100px) rotate(-360deg); }
        }

        @keyframes orbitFast {
          0% { transform: rotate(0deg) translateX(150px) rotate(0deg); }
          100% { transform: rotate(-360deg) translateX(150px) rotate(360deg); }
        }

        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        
        .animate-float-slow {
          animation: floatSlow 15s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse 4s ease-in-out infinite;
        }
        
        .animate-shimmer {
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
          background-size: 1000px 100%;
          animation: shimmer 3s infinite;
        }
        
        .animate-grid-flow {
          animation: gridFlow 20s linear infinite;
        }

        .animate-orbit-slow {
          animation: orbitSlow 30s linear infinite;
        }

        .animate-orbit-fast {
          animation: orbitFast 20s linear infinite;
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
        
        {/* Floating orbs with orbit animation */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-cyan-500/15 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '4s' }}></div>
        
        {/* Small floating particles */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-blue-400 rounded-full animate-orbit-slow"></div>
        <div className="absolute top-40 right-40 w-2 h-2 bg-purple-400 rounded-full animate-orbit-fast"></div>
        <div className="absolute bottom-20 left-1/3 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-orbit-slow" style={{ animationDelay: '3s' }}></div>
        
        {/* Radial gradient overlay */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/50 to-black"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        {/* Hero Section */}
        <div className="mb-20 sm:mb-24 lg:mb-32">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 mb-12">
            {/* Profile Image with enhanced animation */}
            <div className="relative group flex-shrink-0">
  <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full blur-xl opacity-75 animate-pulse-slow"></div>

  <div className="relative w-44 h-44 rounded-full overflow-hidden border-4 border-gray-800 animate-float">
    <img
      src="/profile.png"
      alt="Profile"
      className="w-full h-full object-cover rounded-full"
    />
  </div>
</div>


            {/* Social Icons with improved layout */}
           <div className="flex flex-col items-center lg:items-start gap-6 w-full lg:w-auto">
  <div className="grid grid-cols-4 gap-3 sm:gap-4">
    {[
    
      {
        Icon: Github,
        href: "https://github.com/your-username",
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
        href: "https://x.com/your-username",
        label: "Twitter",
        color: "hover:bg-cyan-500/20 hover:border-cyan-500"
      }
    ].map(({ Icon, href, label, color }) => (
      <a
        key={label}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl 
          bg-gray-900/50 backdrop-blur 
          border border-gray-800 
          flex items-center justify-center 
          transition-all duration-300 
          hover:scale-110 hover:-translate-y-1 
          group ${color}`}
      >
        <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-gray-400 group-hover:text-white transition-colors" />
      </a>
    ))}
  </div>
</div>
          </div>

          {/* Intro Text with shimmer effect */}
          <div className="space-y-4 sm:space-y-5 text-center lg:text-left">
            <div className="relative inline-block">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
                Hi, I'm Dulesh
              </h1>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
            </div>
            <p className="text-xl sm:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-semibold">
              21, Belagavi | Full Stack Engineer
            </p>
            <p className="text-base sm:text-lg text-gray-300 max-w-3xl leading-relaxed mx-auto lg:mx-0">
              I'm a Full Stack Engineer building robust, scalable, and user-centric web applications. 
              From designing efficient backend architectures to crafting seamless front-end experiences, 
              I turn complex technical challenges into intuitive digital solutions.
            </p>
          </div>
        </div>

        {/* Projects Section */}
        <section className="mb-20 sm:mb-24 lg:mb-32">
          <div className="mb-12 text-center lg:text-left">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                <Code className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent">
                Projects
              </h2>
            </div>
            <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto lg:mx-0">
              A collection of projects highlighting my expertise in full-stack and blockchain development
            </p>
          </div>

          <div className="space-y-6">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="group relative w-full"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {activeProject === project.id ? (
                  <div className="relative bg-gradient-to-br from-gray-900/95 to-gray-900/80 backdrop-blur-2xl border border-gray-800 rounded-3xl p-6 sm:p-8 lg:p-10 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5"></div>
                    <div className={`absolute inset-0 opacity-20 blur-3xl bg-gradient-to-r ${project.color}`}></div>
                    
                    <button
                      onClick={() => setActiveProject(null)}
                      className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 rounded-full bg-gray-800/80 hover:bg-gray-700 backdrop-blur flex items-center justify-center transition-all hover:scale-110 z-10"
                    >
                      <span className="text-2xl text-gray-300">✕</span>
                    </button>
                    
                    <div className="relative z-10">
                      <div className={`h-1.5 w-24 bg-gradient-to-r ${project.color} rounded-full mb-6`}></div>
                      
                      <h3 className="text-3xl sm:text-4xl font-bold mb-3">{project.title}</h3>
                      <p className="text-base sm:text-lg text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-6">{project.role}</p>
                      <p className="text-base sm:text-lg text-gray-300 mb-8 leading-relaxed">{project.details}</p>
                      
                      <div className="mb-8">
                        <h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
                          <Sparkles className="w-5 h-5 text-blue-400" />
                          Features
                        </h4>
                        <ul className="space-y-3">
                          {project.features.map((feature, i) => (
                            <li key={i} className="flex items-start gap-3 text-base sm:text-lg text-gray-300">
                              <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${project.color} flex-shrink-0 mt-2`}></div>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold bg-gradient-to-r ${project.color} rounded-2xl hover:shadow-2xl transition-all duration-300 hover:scale-105`}
                        style={{ boxShadow: `0 10px 40px ${project.glowColor}` }}
                      >
                        <Github className="w-5 h-5 sm:w-6 sm:h-6" />
                        View on GitHub
                        <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
                      </a>
                    </div>
                  </div>
                ) : (
                  <div
                  
                    key={project.id}
  onClick={() => setActiveProject(prev => (prev === project.id ? null : project.id))}
  className="relative h-full bg-gray-900/40 backdrop-blur border border-gray-800 rounded-3xl p-6 sm:p-8 cursor-pointer transition-all duration-300 hover:bg-gray-900/60 hover:border-gray-700 hover:scale-[1.02] hover:shadow-2xl overflow-hidden group"
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
                      <div className={`h-1.5 w-20 bg-gradient-to-r ${project.color} rounded-full mb-5`}></div>
                      
                      <div className="flex items-start justify-between mb-5 gap-4">
                        <div className="flex-1 min-w-0">
                          <h3 className="text-2xl sm:text-3xl font-bold mb-2">{project.title}</h3>
                          <p className="text-sm sm:text-base text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">{project.role}</p>
                        </div>
                        <Eye className="w-6 h-6 text-gray-600 group-hover:text-blue-400 transition-colors flex-shrink-0 mt-1" />
                      </div>

                      <p className="text-base sm:text-lg text-gray-400 mb-5">{project.description}</p>

                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm rounded-full bg-gray-800/50 text-gray-300 border border-gray-700 hover:border-gray-600 transition-colors whitespace-nowrap"
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

        {/* Blogs Section */}
        <section>
          <div className="mb-12 text-center lg:text-left">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                <Pen className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
                Blogs
              </h2>
            </div>
            <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto lg:mx-0">
              Insights and learnings from my development journey
            </p>
          </div>

          <div className="space-y-6">
            {blogs.map((blog, index) => (
              <div
                key={blog.id}
                className="relative bg-gray-900/40 backdrop-blur border border-gray-800 rounded-3xl p-6 sm:p-8 hover:bg-gray-900/60 hover:border-gray-700 transition-all duration-300 hover:scale-[1.02] cursor-pointer group overflow-hidden"
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  boxShadow: `0 0 0 ${blog.glowColor}`
                }}
                onMouseEnter={(e) => e.currentTarget.style.boxShadow = `0 10px 60px ${blog.glowColor}`}
                onMouseLeave={(e) => e.currentTarget.style.boxShadow = `0 0 0 ${blog.glowColor}`}
              >
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-gradient-to-br ${blog.color}`}></div>
                
                <div className="relative z-10">
                  <div className={`h-1.5 w-20 bg-gradient-to-r ${blog.color} rounded-full mb-5`}></div>
                  
                  <h3 className="text-2xl sm:text-3xl font-bold mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all">
                    {blog.title}
                  </h3>
                  <p className="text-sm sm:text-base text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-5">{blog.category}</p>
                  <p className="text-base sm:text-lg text-gray-400 mb-5 leading-relaxed">{blog.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {blog.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm rounded-full bg-gray-800/50 text-gray-300 border border-gray-700 hover:border-gray-600 transition-colors whitespace-nowrap"
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