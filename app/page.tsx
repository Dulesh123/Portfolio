"use client";
import { useState } from "react";
import Image from "next/image";
import Brain from "./icons/brain";
import Github from "./icons/github";
import Insta from "./icons/insta";
import X from "./icons/x";
import Pen from "./icons/pen";
import Solana from "./icons/solana";
import portfolioImg from "./portfolio.jpg";

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);
  const [showPopup1, setShowPopup1] = useState(false);
  const [showPopup2, setShowPopup2] = useState(false);

  return (
    <>
      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

      `}</style>
      <div className="min-h-screen scroll-smooth">
        {/* Fixed grid background with subtle blue glow */}
        <div
          className="fixed inset-0 -z-10 pointer-events-none animate-[fadeIn_1s_ease-in]"
          style={{
            backgroundColor: "black",
            backgroundImage: `
            radial-gradient(circle at center, rgba(0,150,255,0.12) 0%, transparent 65%),
            radial-gradient(circle at top left, rgba(0,255,255,0.08) 0%, transparent 60%),
            radial-gradient(circle at bottom right, rgba(255,0,255,0.08) 0%, transparent 70%),
            radial-gradient(circle at bottom left, rgba(0,150,255,0.06) 0%, transparent 75%),
            linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)
          `,
            backgroundSize:
              "100% 100%, 100% 100%, 100% 100%, 100% 100%, 40px 40px, 40px 40px",
            backgroundRepeat:
              "no-repeat, no-repeat, no-repeat, no-repeat, repeat, repeat",
            backgroundBlendMode: "screen",
          }}
        ></div>

        {/* Foreground content */}
        <div className="relative z-10 flex justify-center items-start px-4 md:px-6 lg:px-8 py-8 md:py-16 lg:py-24 animate-[slideInDown_0.8s_ease-out]">
          <div className="w-full max-w-7xl grid grid-cols-1 gap-8 md:gap-10 lg:gap-12">
            {/* Header Section: Image and Social Icons */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12">
              {/* Image */}
              <div className="flex justify-center">
                <Image
                  src={portfolioImg}
                  alt="my image"
                  width={300}
                  height={300}
                  className="rounded-3xl w-48 md:w-64 lg:w-72 h-auto object-cover"
                  priority
                />
              </div>

              {/* Social Icons */}
              <div className="flex flex-row md:flex-col justify-center gap-4 md:gap-6">
                <a
                  className="hover:bg-gray-800 rounded-xl p-3 md:p-4 text-center h-12 w-12 md:h-14 md:w-14 lg:h-16 lg:w-16 text-white flex items-center justify-center transition-all duration-200 hover:scale-110"
                  href="https://x.com/DShivakale?t=Fs_X7BkJB1fBoT4y9uS0oQ&s=09"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter Profile"
                >
                  <X />
                </a>
                <a
                  className="hover:bg-gray-800 rounded-xl p-3 md:p-4 w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 text-center text-white flex items-center justify-center transition-all duration-200 hover:scale-110"
                  href="mailto:duleshshivakale@gmail.com"
                  aria-label="Email"
                >
                  <Insta />
                </a>
                <a
                  className="hover:bg-gray-800 rounded-xl w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 p-3 md:p-4 text-center text-white flex items-center justify-center transition-all duration-200 hover:scale-110"
                  href="https://github.com/Dulesh123"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                >
                  <Github />
                </a>
              </div>
            </div>

            {/* Intro Text */}
            <div className="text-center px-2 md:px-0">
              <div className="text-3xl md:text-4xl lg:text-5xl text-white font-bold leading-tight">
                Hi, I&apos;m Dulesh
              </div>
              <div className="text-xl md:text-2xl lg:text-3xl text-gray-400 mt-3 md:mt-4 lg:mt-5">
                21, Belagavi | Full Stack Engineer
              </div>
              <div className="text-base md:text-lg lg:text-xl text-gray-400 mt-4 md:mt-5 lg:mt-6 leading-relaxed max-w-3xl mx-auto">
                I&apos;m a Full Stack Engineer building robust, scalable, and
                user-centric web applications. From designing efficient backend
                architectures to crafting seamless front-end experiences, I turn
                complex technical challenges into intuitive digital solutions.
              </div>
            </div>

            {/* Projects Section Header */}
            <div className="text-center mt-6 md:mt-8 lg:mt-10 px-2 md:px-0">
              <div className="text-transparent bg-clip-text bg-gradient-to-b from-[#47c4bd] via-[#4ea8a8] to-[#963f6f] font-bold text-2xl md:text-3xl lg:text-4xl animate-pulse drop-shadow-[0_0_15px_rgba(0,182,112,0.8)] drop-shadow-[0_0_30px_rgba(0,182,112,0.5)] drop-shadow-[0_0_45px_rgba(191,0,150,0.3)] mb-3 md:mb-4">
                Projects
              </div>
              <div className="text-gray-400 text-base md:text-lg lg:text-xl max-w-3xl mx-auto">
                Here&apos;s a collection of my projects, highlighting my
                expertise in full-stack and blockchain development through
                real-world, problem-solving applications.
              </div>
            </div>
          </div>
        </div>

        {/* Projects Cards Section */}
        <div className="w-full flex justify-center px-4 md:px-6 lg:px-8 pb-12 md:pb-16 lg:pb-24 animate-[slideInUp_1s_ease-out]">
          <div className="w-full max-w-7xl space-y-6 md:space-y-8 lg:space-y-10">
            {/* Project 1 - Second Brain */}
            {!showPopup ? (
              <div
                onClick={() => setShowPopup(!showPopup)}
                className="bg-gray-900 w-full rounded-xl overflow-hidden hover:bg-gray-800 cursor-pointer transition-all duration-300 hover:scale-[1.01] active:scale-[0.99] shadow-lg hover:shadow-2xl border border-gray-800 hover:border-gray-700"
              >
                <div className="flex w-full min-h-[220px] md:min-h-[240px] lg:min-h-[260px]">
                  {/* Accent Bar */}
                  <div className="relative w-[4px] md:w-[5px] lg:w-[6px] h-full rounded-l-xl overflow-hidden flex-shrink-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-[#004d33] via-[#00b670] to-[#bf0096] blur-sm opacity-100"></div>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,255,255,0.45)_0%,_transparent_70%)] opacity-80"></div>
                    <div className="absolute top-1/2 left-0 w-full h-[85%] bg-cyan-400 opacity-70 blur-md animate-pulse transform -translate-y-1/2"></div>
                  </div>

                  {/* Content Area */}
                  <div className="flex-1 h-full p-5 md:p-6 lg:p-8 flex flex-col gap-4 md:gap-5 lg:gap-6">
                    {/* Header Section */}
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 md:gap-4">
                      <div className="flex items-center gap-2.5 md:gap-3 lg:gap-4 text-blue-500 flex-1 min-w-0">
                        <div className="w-7 h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 flex-shrink-0">
                          <Brain />
                        </div>
                        <span className="text-white text-lg md:text-xl lg:text-2xl font-bold truncate">
                          Second-Brain
                        </span>
                      </div>
                      <div className="text-white text-xs md:text-sm lg:text-base font-semibold bg-gray-800 px-3 py-1.5 md:px-4 md:py-2 lg:px-5 lg:py-2.5 rounded-lg whitespace-nowrap border border-gray-700">
                        Full-stack Engineer
                      </div>
                    </div>

                    {/* Description Section */}
                    <div className="flex items-start justify-between gap-3 md:gap-4">
                      <div className="text-gray-300 text-sm md:text-base lg:text-lg flex-1 leading-relaxed">
                        A Link Management Web-App
                      </div>
                      <a
                        href="https://github.com/Dulesh123/Second-Brain"
                        className="text-white hover:text-blue-400 transition-all flex-shrink-0 hover:scale-110 transform duration-200 p-1 rounded-lg hover:bg-gray-800"
                        onClick={(e) => e.stopPropagation()}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="View Second-Brain on GitHub"
                      >
                        <div className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8">
                          <Github />
                        </div>
                      </a>
                    </div>

                    {/* Technology Tags */}
                    <div className="flex flex-wrap items-center gap-2 md:gap-2.5 lg:gap-3 mt-auto">
                      <span className="text-gray-300 px-3 py-1.5 md:px-4 md:py-2 lg:px-5 lg:py-2.5 rounded-lg bg-black hover:bg-gray-700 text-xs md:text-sm lg:text-base hover:text-white transition-all cursor-default border border-gray-700 hover:border-blue-500">
                        React
                      </span>
                      <span className="text-gray-300 px-3 py-1.5 md:px-4 md:py-2 lg:px-5 lg:py-2.5 rounded-lg bg-black hover:bg-gray-700 text-xs md:text-sm lg:text-base hover:text-white transition-all cursor-default border border-gray-700 hover:border-blue-500">
                        Nodejs
                      </span>
                      <span className="text-gray-300 px-3 py-1.5 md:px-4 md:py-2 lg:px-5 lg:py-2.5 rounded-lg bg-black hover:bg-gray-700 text-xs md:text-sm lg:text-base hover:text-white transition-all cursor-default border border-gray-700 hover:border-blue-500">
                        MongoDB
                      </span>
                      <span className="text-gray-300 px-3 py-1.5 md:px-4 md:py-2 lg:px-5 lg:py-2.5 rounded-lg bg-black hover:bg-gray-700 text-xs md:text-sm lg:text-base hover:text-white transition-all cursor-default border border-gray-700 hover:border-blue-500">
                        Express
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div
                className="fixed inset-0 flex items-center justify-center bg-black/70 backdrop-blur-md z-50 p-4 md:p-6"
                onClick={() => setShowPopup(!showPopup)}
              >
                <div 
                  className="bg-gray-800 rounded-xl shadow-2xl p-5 md:p-8 lg:p-10 w-full max-w-2xl max-h-[90vh] overflow-y-auto border border-gray-700"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="flex items-center gap-3 md:gap-4 mb-5 md:mb-6 text-green-500">
                    <div className="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10">
                      <Brain />
                    </div>
                    <div className="text-white text-xl md:text-2xl lg:text-3xl font-bold">
                      Second-Brain
                    </div>
                  </div>

                  <div className="text-gray-200 text-base md:text-lg lg:text-xl mb-5 md:mb-6 leading-relaxed">
                    A Link Management Web-App
                  </div>

                  <ol className="list-decimal list-inside text-gray-100 text-base md:text-lg lg:text-xl space-y-2 md:space-y-3 pl-3 mb-6 md:mb-8 leading-relaxed">
                    <li>
                      Full-stack MERN app to save and manage links and notes.
                    </li>
                    <li>React frontend with Express.js & MongoDB backend.</li>
                  </ol>

                  <div className="text-green-500 text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-5">
                    Features
                  </div>

                  <div className="flex flex-wrap gap-2 md:gap-3">
                    <div className="text-gray-200 bg-black rounded-lg px-4 py-2 md:px-5 md:py-2.5 text-sm md:text-base border border-gray-700 hover:border-green-500 transition-colors">
                      persistent storage
                    </div>
                    <div className="text-gray-200 bg-black rounded-lg px-4 py-2 md:px-5 md:py-2.5 text-sm md:text-base border border-gray-700 hover:border-green-500 transition-colors">
                      smart organization
                    </div>
                    <div className="text-gray-200 bg-black rounded-lg px-4 py-2 md:px-5 md:py-2.5 text-sm md:text-base border border-gray-700 hover:border-green-500 transition-colors">
                      productivity-focused design
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Project 2 - Live Sketch */}
            {!showPopup1 ? (
              <div
                onClick={() => setShowPopup1(!showPopup1)}
                className="bg-gray-900 w-full rounded-xl overflow-hidden hover:bg-gray-800 cursor-pointer transition-all duration-300 hover:scale-[1.01] active:scale-[0.99] shadow-lg hover:shadow-2xl border border-gray-800 hover:border-gray-700"
              >
                <div className="flex w-full min-h-[220px] md:min-h-[240px] lg:min-h-[260px]">
                  {/* Accent Bar */}
                  <div className="relative w-[4px] md:w-[5px] lg:w-[6px] h-full rounded-l-xl overflow-hidden flex-shrink-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-[#004d33] via-[#00b670] to-[#bf0096] blur-sm opacity-100"></div>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,255,255,0.45)_0%,_transparent_70%)] opacity-80"></div>
                    <div className="absolute top-1/2 left-0 w-full h-[85%] bg-cyan-400 opacity-70 blur-md animate-pulse transform -translate-y-1/2"></div>
                  </div>

                  {/* Content Area */}
                  <div className="flex-1 h-full p-5 md:p-6 lg:p-8 flex flex-col gap-4 md:gap-5 lg:gap-6">
                    {/* Header Section */}
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 md:gap-4">
                      <div className="flex items-center gap-2.5 md:gap-3 lg:gap-4 text-green-500 flex-1 min-w-0">
                        <div className="w-7 h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 flex-shrink-0">
                          <Pen />
                        </div>
                        <span className="text-white text-lg md:text-xl lg:text-2xl font-bold truncate">
                          Live-Sketch
                        </span>
                      </div>
                      <div className="text-white text-xs md:text-sm lg:text-base font-semibold bg-gray-800 px-3 py-1.5 md:px-4 md:py-2 lg:px-5 lg:py-2.5 rounded-lg whitespace-nowrap border border-gray-700">
                        Full-stack Engineer
                      </div>
                    </div>

                    {/* Description Section */}
                    <div className="flex items-start justify-between gap-3 md:gap-4">
                      <div className="text-gray-300 text-sm md:text-base lg:text-lg flex-1 leading-relaxed">
                        A Real-time Collaborative Canvas
                      </div>
                      <a
                        href="https://github.com/Dulesh123/Live-Sketch"
                        className="text-white hover:text-green-400 transition-all flex-shrink-0 hover:scale-110 transform duration-200 p-1 rounded-lg hover:bg-gray-800"
                        onClick={(e) => e.stopPropagation()}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="View Live-Sketch on GitHub"
                      >
                        <div className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8">
                          <Github />
                        </div>
                      </a>
                    </div>

                    {/* Technology Tags */}
                    <div className="flex flex-wrap items-center gap-2 md:gap-2.5 lg:gap-3 mt-auto">
                      <span className="text-gray-300 px-3 py-1.5 md:px-4 md:py-2 lg:px-5 lg:py-2.5 rounded-lg bg-black hover:bg-gray-700 text-xs md:text-sm lg:text-base hover:text-white transition-all cursor-default border border-gray-700 hover:border-green-500">
                        MERN
                      </span>
                      <span className="text-gray-300 px-3 py-1.5 md:px-4 md:py-2 lg:px-5 lg:py-2.5 rounded-lg bg-black hover:bg-gray-700 text-xs md:text-sm lg:text-base hover:text-white transition-all cursor-default border border-gray-700 hover:border-green-500">
                        WebSockets
                      </span>
                      <span className="text-gray-300 px-3 py-1.5 md:px-4 md:py-2 lg:px-5 lg:py-2.5 rounded-lg bg-black hover:bg-gray-700 text-xs md:text-sm lg:text-base hover:text-white transition-all cursor-default border border-gray-700 hover:border-green-500">
                        PostgreSQL
                      </span>
                      <span className="text-gray-300 px-3 py-1.5 md:px-4 md:py-2 lg:px-5 lg:py-2.5 rounded-lg bg-black hover:bg-gray-700 text-xs md:text-sm lg:text-base hover:text-white transition-all cursor-default border border-gray-700 hover:border-green-500">
                        Turborepo
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div
                className="fixed inset-0 flex items-center justify-center bg-black/70 backdrop-blur-md z-50 p-4 md:p-6"
                onClick={() => setShowPopup1(!showPopup1)}
              >
                <div 
                  className="bg-gray-800 rounded-xl shadow-2xl p-5 md:p-8 lg:p-10 w-full max-w-2xl max-h-[90vh] overflow-y-auto border border-gray-700"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="flex items-center gap-3 md:gap-4 mb-5 md:mb-6 text-blue-500">
                    <div className="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10">
                      <Pen />
                    </div>
                    <div className="text-white text-xl md:text-2xl lg:text-3xl font-bold">
                      Live-Sketch
                    </div>
                  </div>

                  <div className="text-gray-200 text-base md:text-lg lg:text-xl mb-5 md:mb-6 leading-relaxed">
                    A Real-time Collaborative Canvas
                  </div>

                  <ol className="list-decimal list-inside text-gray-100 text-base md:text-lg lg:text-xl space-y-2 md:space-y-3 pl-3 mb-6 md:mb-8 leading-relaxed">
                    <li>Real-time collaborative drawing with WebSockets.</li>
                    <li>Session and user data stored in PostgreSQL.</li>
                  </ol>

                  <div className="text-blue-500 text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-5">
                    Features
                  </div>

                  <div className="flex flex-wrap gap-2 md:gap-3">
                    <div className="text-gray-200 bg-black rounded-lg px-4 py-2 md:px-5 md:py-2.5 text-sm md:text-base border border-gray-700 hover:border-blue-500 transition-colors">
                      real-time
                    </div>
                    <div className="text-gray-200 bg-black rounded-lg px-4 py-2 md:px-5 md:py-2.5 text-sm md:text-base border border-gray-700 hover:border-blue-500 transition-colors">
                      responsive U
                    </div>
                    <div className="text-gray-200 bg-black rounded-lg px-4 py-2 md:px-5 md:py-2.5 text-sm md:text-base border border-gray-700 hover:border-blue-500 transition-colors">
                      productivity-focused design
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Project 3 - Sol-care */}
            {!showPopup2 ? (
              <div
                onClick={() => setShowPopup2(!showPopup2)}
                className="bg-gray-900 w-full rounded-xl overflow-hidden hover:bg-gray-800 cursor-pointer transition-all duration-300 hover:scale-[1.01] active:scale-[0.99] shadow-lg hover:shadow-2xl border border-gray-800 hover:border-gray-700"
              >
                <div className="flex w-full min-h-[220px] md:min-h-[240px] lg:min-h-[260px]">
                  {/* Accent Bar */}
                  <div className="relative w-[4px] md:w-[5px] lg:w-[6px] h-full rounded-l-xl overflow-hidden flex-shrink-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-[#004d33] via-[#00b670] to-[#bf0096] blur-sm opacity-100"></div>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,255,255,0.45)_0%,_transparent_70%)] opacity-80"></div>
                    <div className="absolute top-1/2 left-0 w-full h-[85%] bg-cyan-400 opacity-70 blur-md animate-pulse transform -translate-y-1/2"></div>
                  </div>

                  {/* Content Area */}
                  <div className="flex-1 h-full p-5 md:p-6 lg:p-8 flex flex-col gap-4 md:gap-5 lg:gap-6">
                    {/* Header Section */}
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 md:gap-4">
                      <div className="flex items-center gap-2.5 md:gap-3 lg:gap-4 text-blue-500 flex-1 min-w-0">
                        <div className="w-7 h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 flex-shrink-0">
                          <Solana />
                        </div>
                        <span className="text-white text-lg md:text-xl lg:text-2xl font-bold truncate">
                          Sol-care
                        </span>
                      </div>
                      <div className="text-white text-xs md:text-sm lg:text-base font-semibold bg-gray-800 px-3 py-1.5 md:px-4 md:py-2 lg:px-5 lg:py-2.5 rounded-lg whitespace-nowrap border border-gray-700">
                        Full-stack BlockChain Engineer
                      </div>
                    </div>

                    {/* Description Section */}
                    <div className="flex items-start justify-between gap-3 md:gap-4">
                      <div className="text-gray-300 text-sm md:text-base lg:text-lg flex-1 leading-relaxed">
                        A Decentralized Application
                      </div>
                      <a
                        href="https://github.com/Dulesh123/Sol-Care"
                        className="text-white hover:text-blue-400 transition-all flex-shrink-0 hover:scale-110 transform duration-200 p-1 rounded-lg hover:bg-gray-800"
                        onClick={(e) => e.stopPropagation()}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="View Sol-Care on GitHub"
                      >
                        <div className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8">
                          <Github />
                        </div>
                      </a>
                    </div>

                    {/* Technology Tags */}
                    <div className="flex flex-wrap items-center gap-2 md:gap-2.5 lg:gap-3 mt-auto">
                      <span className="text-gray-300 px-3 py-1.5 md:px-4 md:py-2 lg:px-5 lg:py-2.5 rounded-lg bg-black hover:bg-gray-700 text-xs md:text-sm lg:text-base hover:text-white transition-all cursor-default border border-gray-700 hover:border-blue-500">
                        Next JS
                      </span>
                      <span className="text-gray-300 px-3 py-1.5 md:px-4 md:py-2 lg:px-5 lg:py-2.5 rounded-lg bg-black hover:bg-gray-700 text-xs md:text-sm lg:text-base hover:text-white transition-all cursor-default border border-gray-700 hover:border-blue-500">
                        Web-3
                      </span>
                      <span className="text-gray-300 px-3 py-1.5 md:px-4 md:py-2 lg:px-5 lg:py-2.5 rounded-lg bg-black hover:bg-gray-700 text-xs md:text-sm lg:text-base hover:text-white transition-all cursor-default border border-gray-700 hover:border-blue-500">
                        JSON-RPC
                      </span>
                      <span className="text-gray-300 px-3 py-1.5 md:px-4 md:py-2 lg:px-5 lg:py-2.5 rounded-lg bg-black hover:bg-gray-700 text-xs md:text-sm lg:text-base hover:text-white transition-all cursor-default border border-gray-700 hover:border-blue-500">
                        Solana
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div
                className="fixed inset-0 flex items-center justify-center bg-black/70 backdrop-blur-md z-50 p-4 md:p-6"
                onClick={() => setShowPopup2(!showPopup2)}
              >
                <div 
                  className="bg-gray-800 rounded-xl shadow-2xl p-5 md:p-8 lg:p-10 w-full max-w-2xl max-h-[90vh] overflow-y-auto border border-gray-700"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="flex items-center gap-3 md:gap-4 mb-5 md:mb-6 text-green-500">
                    <div className="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10">
                      <Solana />
                    </div>
                    <div className="text-white text-xl md:text-2xl lg:text-3xl font-bold">
                      Sol-Care
                    </div>
                  </div>

                  <div className="text-gray-200 text-base md:text-lg lg:text-xl mb-5 md:mb-6 leading-relaxed">
                    A D-App
                  </div>

                  <ol className="list-decimal list-inside text-gray-100 text-base md:text-lg lg:text-xl space-y-2 md:space-y-3 pl-3 mb-6 md:mb-8 leading-relaxed">
                    <li>Multi-chain wallet.</li>
                    <li>Blockchain data fetching (JSON-RPC).</li>
                  </ol>

                  <div className="text-green-500 text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-5">
                    Features
                  </div>

                  <div className="flex flex-wrap gap-2 md:gap-3">
                    <div className="text-gray-200 bg-black rounded-lg px-4 py-2 md:px-5 md:py-2.5 text-sm md:text-base border border-gray-700 hover:border-green-500 transition-colors">
                      Solana
                    </div>
                    <div className="text-gray-200 bg-black rounded-lg px-4 py-2 md:px-5 md:py-2.5 text-sm md:text-base border border-gray-700 hover:border-green-500 transition-colors">
                      Crypto handling
                    </div>
                    <div className="text-gray-200 bg-black rounded-lg px-4 py-2 md:px-5 md:py-2.5 text-sm md:text-base border border-gray-700 hover:border-green-500 transition-colors">
                      Balance checking
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
