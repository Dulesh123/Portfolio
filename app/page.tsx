"use client";

import { Github, Mail, Twitter, Pen, Eye, Code, ExternalLink, Sparkles, LucideIcon } from "lucide-react";
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

      // Pause before deleting
      if (!isDeleting && text === currentWord) {
        setTimeout(() => setIsDeleting(true), delay);
      }

      // Move to next word
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
          0%, 100% { 
            transform: translateY(0px) rotate(0deg); 
          }
          33% { 
            transform: translateY(-20px) rotate(5deg); 
          }
          66% { 
            transform: translateY(-10px) rotate(-5deg); 
          }
        }
        
        @keyframes floatSlow {
          0%, 100% { 
            transform: translate(0, 0) scale(1); 
          }
          50% { 
            transform: translate(50px, -50px) scale(1.05); 
          }
        }

        @keyframes floatVertical {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-30px);
          }
        }

        @keyframes floatHorizontal {
          0%, 100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(30px);
          }
        }
        
        /* Pulse & Glow Animations */
        @keyframes pulse {
          0%, 100% { 
            opacity: 0.4; 
            transform: scale(1); 
          }
          50% { 
            opacity: 0.7; 
            transform: scale(1.15); 
          }
        }

        @keyframes pulseRing {
          0% {
            transform: scale(0.9);
            opacity: 1;
          }
          100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }

        @keyframes glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.5);
          }
          50% {
            box-shadow: 0 0 40px rgba(59, 130, 246, 0.8);
          }
        }

        @keyframes glowRainbow {
          0% {
            box-shadow: 0 0 20px rgba(255, 0, 0, 0.5);
          }
          33% {
            box-shadow: 0 0 30px rgba(0, 255, 0, 0.5);
          }
          66% {
            box-shadow: 0 0 30px rgba(0, 0, 255, 0.5);
          }
          100% {
            box-shadow: 0 0 20px rgba(255, 0, 0, 0.5);
          }
        }
        
        /* Shimmer & Shine Effects */
        @keyframes shimmer {
          0% { 
            background-position: -1000px 0; 
          }
          100% { 
            background-position: 1000px 0; 
          }
        }

        @keyframes shine {
          0% {
            background-position: -200% center;
          }
          100% {
            background-position: 200% center;
          }
        }

        @keyframes sparkle {
          0%, 100% {
            opacity: 0;
            transform: scale(0);
          }
          50% {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        /* Grid & Flow Animations */
        @keyframes gridFlow {
          0% { 
            transform: translateY(0); 
            opacity: 1;
          }
          100% { 
            transform: translateY(60px); 
            opacity: 0.5;
          }
        }

        @keyframes waveFlow {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        /* Orbit Animations */
        @keyframes orbitSlow {
          0% { 
            transform: rotate(0deg) translateX(100px) rotate(0deg); 
          }
          100% { 
            transform: rotate(360deg) translateX(100px) rotate(-360deg); 
          }
        }

        @keyframes orbitFast {
          0% { 
            transform: rotate(0deg) translateX(150px) rotate(0deg); 
          }
          100% { 
            transform: rotate(-360deg) translateX(150px) rotate(360deg); 
          }
        }

        @keyframes orbitReverse {
          0% { 
            transform: rotate(360deg) translateX(120px) rotate(-360deg); 
          }
          100% { 
            transform: rotate(0deg) translateX(120px) rotate(0deg); 
          }
        }

        /* Spin & Rotate Animations */
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes spinSlow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes wiggle {
          0%, 100% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(-10deg);
          }
          75% {
            transform: rotate(10deg);
          }
        }

        @keyframes swing {
          0%, 100% {
            transform: rotate(0deg);
            transform-origin: top center;
          }
          25% {
            transform: rotate(15deg);
          }
          75% {
            transform: rotate(-15deg);
          }
        }

        /* Fade Animations */
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        /* Scale Animations */
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.5);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes scaleUp {
          from {
            transform: scale(1);
          }
          to {
            transform: scale(1.2);
          }
        }

        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
            animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
          }
          50% {
            transform: translateY(-25%);
            animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
          }
        }

        @keyframes bounceIn {
          0% {
            opacity: 0;
            transform: scale(0.3);
          }
          50% {
            opacity: 1;
            transform: scale(1.05);
          }
          70% {
            transform: scale(0.9);
          }
          100% {
            transform: scale(1);
          }
        }

        /* Gradient Animations */
        @keyframes gradientShift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes gradientRotate {
          0% {
            background-position: 0% 0%;
          }
          25% {
            background-position: 100% 0%;
          }
          50% {
            background-position: 100% 100%;
          }
          75% {
            background-position: 0% 100%;
          }
          100% {
            background-position: 0% 0%;
          }
        }

        @keyframes rainbowGlow {
          0% {
            filter: hue-rotate(0deg);
          }
          100% {
            filter: hue-rotate(360deg);
          }
        }

        /* Shake & Vibrate */
        @keyframes shake {
          0%, 100% {
            transform: translateX(0);
          }
          10%, 30%, 50%, 70%, 90% {
            transform: translateX(-10px);
          }
          20%, 40%, 60%, 80% {
            transform: translateX(10px);
          }
        }

        @keyframes vibrate {
          0%, 100% {
            transform: translate(0, 0);
          }
          25% {
            transform: translate(-2px, 2px);
          }
          50% {
            transform: translate(2px, -2px);
          }
          75% {
            transform: translate(-2px, -2px);
          }
        }

        /* Flip Animations */
        @keyframes flip {
          0% {
            transform: perspective(400px) rotateY(0);
          }
          100% {
            transform: perspective(400px) rotateY(360deg);
          }
        }

        @keyframes flipX {
          0% {
            transform: perspective(400px) rotateX(0);
          }
          100% {
            transform: perspective(400px) rotateX(360deg);
          }
        }

        /* Slide Animations */
        @keyframes slideInLeft {
          from {
            transform: translateX(-100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes slideInRight {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            transform: translateY(100%);
          }
          to {
            transform: translateY(0);
          }
        }

        /* Blur & Focus */
        @keyframes blurIn {
          from {
            filter: blur(10px);
            opacity: 0;
          }
          to {
            filter: blur(0);
            opacity: 1;
          }
        }

        @keyframes focusPulse {
          0%, 100% {
            filter: blur(0px);
          }
          50% {
            filter: blur(2px);
          }
        }

        /* Typewriter Effect */
        @keyframes typewriter {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }

        @keyframes blink {
          50% {
            opacity: 0;
          }
        }

        /* Morphing */
        @keyframes morph {
          0%, 100% {
            border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
          }
          50% {
            border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
          }
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

        .animate-float-vertical {
          animation: floatVertical 6s ease-in-out infinite;
        }

        .animate-float-horizontal {
          animation: floatHorizontal 8s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse 4s ease-in-out infinite;
          will-change: opacity, transform;
        }

        .animate-pulse-ring {
          animation: pulseRing 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        
        .animate-shimmer {
          background: linear-gradient(
            90deg, 
            transparent, 
            rgba(255, 255, 255, 0.15), 
            transparent
          );
          background-size: 1000px 100%;
          animation: shimmer 3s infinite;
          will-change: background-position;
        }

        .animate-shine {
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(255, 255, 255, 0.3) 50%,
            transparent 100%
          );
          background-size: 200% 100%;
          animation: shine 3s infinite;
        }

        .animate-sparkle {
          animation: sparkle 2s ease-in-out infinite;
        }
        
        .animate-grid-flow {
          animation: gridFlow 20s linear infinite;
          will-change: transform, opacity;
        }

        .animate-wave {
          animation: waveFlow 3s ease-in-out infinite;
        }

        .animate-orbit-slow {
          animation: orbitSlow 30s linear infinite;
          will-change: transform;
        }

        .animate-orbit-fast {
          animation: orbitFast 20s linear infinite;
          will-change: transform;
        }

        .animate-orbit-reverse {
          animation: orbitReverse 25s linear infinite;
        }

        .animate-spin {
          animation: spin 1s linear infinite;
        }

        .animate-spin-slow {
          animation: spinSlow 3s linear infinite;
        }

        .animate-wiggle {
          animation: wiggle 1s ease-in-out infinite;
        }

        .animate-swing {
          animation: swing 2s ease-in-out infinite;
        }

        .animate-fade-in {
          animation: fadeIn 0.5s ease-out forwards;
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }

        .animate-fade-in-down {
          animation: fadeInDown 0.6s ease-out forwards;
        }

        .animate-fade-in-left {
          animation: fadeInLeft 0.6s ease-out forwards;
        }

        .animate-fade-in-right {
          animation: fadeInRight 0.6s ease-out forwards;
        }

        .animate-scale-in {
          animation: scaleIn 0.5s ease-out forwards;
        }

        .animate-scale-up {
          animation: scaleUp 0.3s ease-out forwards;
        }

        .animate-bounce {
          animation: bounce 1s infinite;
        }

        .animate-bounce-in {
          animation: bounceIn 0.8s ease-out forwards;
        }

        .animate-glow {
          animation: glow 3s ease-in-out infinite;
        }

        .animate-glow-rainbow {
          animation: glowRainbow 5s ease-in-out infinite;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradientShift 8s ease infinite;
        }

        .animate-gradient-rotate {
          background-size: 400% 400%;
          animation: gradientRotate 15s ease infinite;
        }

        .animate-rainbow {
          animation: rainbowGlow 3s linear infinite;
        }

        .animate-shake {
          animation: shake 0.5s ease-in-out;
        }

        .animate-vibrate {
          animation: vibrate 0.3s ease-in-out infinite;
        }

        .animate-flip {
          animation: flip 2s ease-in-out infinite;
        }

        .animate-flip-x {
          animation: flipX 2s ease-in-out infinite;
        }

        .animate-slide-in-left {
          animation: slideInLeft 0.6s ease-out forwards;
        }

        .animate-slide-in-right {
          animation: slideInRight 0.6s ease-out forwards;
        }

        .animate-slide-up {
          animation: slideUp 0.6s ease-out forwards;
        }

        .animate-blur-in {
          animation: blurIn 1s ease-out forwards;
        }

        .animate-focus-pulse {
          animation: focusPulse 3s ease-in-out infinite;
        }

        .animate-typewriter {
          overflow: hidden;
          white-space: nowrap;
          animation: typewriter 3s steps(40) forwards;
        }

        .animate-blink {
          animation: blink 1s step-end infinite;
        }

        .animate-morph {
          animation: morph 8s ease-in-out infinite;
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

        .hover-scale-lg {
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .hover-scale-lg:hover {
          transform: scale(1.1);
        }

        .hover-glow {
          transition: box-shadow 0.3s ease, filter 0.3s ease;
        }

        .hover-glow:hover {
          box-shadow: 0 0 30px rgba(59, 130, 246, 0.6);
          filter: brightness(1.1);
        }

        .hover-rotate {
          transition: transform 0.3s ease;
        }

        .hover-rotate:hover {
          transform: rotate(5deg);
        }

        .hover-float {
          transition: transform 0.3s ease;
        }

        .hover-float:hover {
          transform: translateY(-5px);
        }

        .hover-tilt {
          transition: transform 0.3s ease;
        }

        .hover-tilt:hover {
          transform: perspective(1000px) rotateX(10deg);
        }

        .hover-shimmer:hover {
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          background-size: 200% 100%;
          animation: shimmer 1.5s ease-in-out;
        }

        /* Smooth transitions */
        .transition-smooth {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .transition-spring {
          transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .transition-bounce {
          transition: all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }

        /* Delay classes */
        .delay-75 { animation-delay: 75ms; }
        .delay-100 { animation-delay: 100ms; }
        .delay-150 { animation-delay: 150ms; }
        .delay-200 { animation-delay: 200ms; }
        .delay-300 { animation-delay: 300ms; }
        .delay-500 { animation-delay: 500ms; }
        .delay-700 { animation-delay: 700ms; }
        .delay-1000 { animation-delay: 1000ms; }

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
              <div className="grid grid-cols-3 gap-3 sm:gap-5 items-center w-fit mx-auto">
                {socialLinks.map(({ Icon, href, label, color }) => (
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
              <h1 className="text-5xl sm:text-5xl md:text-5xl lg:text-5xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
                {text}
                <span className="animate-pulse">|</span>
              </h1>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
            </div>
            <p className="text-xl sm:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-semibold">
              21, Belagavi | Full Stack Engineer
            </p>
            <p className="text-base sm:text-lg text-gray-300 max-w-3xl leading-relaxed mx-auto lg:mx-0">
              I&apos;m a Full Stack Engineer building robust, scalable, and user-centric web applications. 
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
                    onClick={() => setActiveProject(project.id)}
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