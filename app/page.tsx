

"use client";
import { useState } from "react";
import Brain from "./icons/brain";
import Github from "./icons/github";
import Insta from "./icons/insta";
import X from "./icons/x";
import Pen from "./icons/pen";
import Solana from "./icons/solana";

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

        html {
          scroll-behavior: smooth;
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
              "100% 100%, 100% 100%, 100% 100%, 100% 100%, 50px 50px, 50px 50px",
            backgroundRepeat:
              "no-repeat, no-repeat, no-repeat, no-repeat, repeat, repeat",
            backgroundBlendMode: "screen",
          }}
        ></div>

        {/* Foreground content */}
        <div className="relative z-10 flex justify-center items-start px-4 sm:px-6 py-8 sm:py-12 md:py-24 animate-[slideInDown_0.8s_ease-out]">
          <div className="w-full md:w-1/3 grid grid-cols-1 gap-8 sm:gap-12">
            <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-0">
              {/* Image */}
              <div className="flex justify-center md:justify-start">
                <img
                  src="https://media.istockphoto.com/id/1598719537/vector/teenage-samurai-girl-anime.jpg?s=612x612&w=0&k=20&c=yK7lT21o3E9ZayNdHaAPzjEsSWqcq4hIZklsGDMStuQ="
                  alt="my image"
                  className="rounded-3xl w-48 sm:w-64 md:w-auto h-auto"
                />
              </div>

              {/* Social Icons */}
              <div className="flex flex-row md:grid md:grid-cols-1 justify-center md:justify-start gap-4 md:gap-6 md:mx-50 md:mt-20">
                <a
                  className="hover:bg-gray-800 rounded-xl p-3 md:p-4 text-center h-12 w-12 md:h-15 md:w-15 text-white flex items-center justify-center"
                  href="https://x.com/DShivakale?t=Fs_X7BkJB1fBoT4y9uS0oQ&s=09"
                >
                  <X />
                </a>
                <a
                  className="hover:bg-gray-800 rounded-xl p-3 md:p-4 w-12 h-12 md:w-15 md:h-15 text-center text-white flex items-center justify-center"
                  href="mailto:duleshshivakale@gmail.com"
                >
                  <Insta />
                </a>
                <a
                  className="hover:bg-gray-800 rounded-xl w-12 h-12 md:w-15 p-3 md:p-4 text-center md:h-15 text-white flex items-center justify-center"
                  href="https://github.com/Dulesh123"
                >
                  <Github />
                </a>
              </div>
            </div>

            {/* Intro Text */}
            <div className="text-center md:text-left px-2 sm:px-0">
              <div className="text-3xl sm:text-4xl md:text-5xl text-white font-bold">
                Hi, I'm Dulesh
              </div>
              <div className="text-xl sm:text-2xl text-gray-400 mt-3 sm:mt-5">
                21, Belagavi | Full Stack Engineer
              </div>
              <div className="text-base sm:text-lg md:text-xl text-gray-400 mt-3 sm:mt-4 leading-relaxed">
                I'm a Full Stack Engineer building robust, scalable, and
                user-centric web applications. From designing efficient backend
                architectures to crafting seamless front-end experiences, I turn
                complex technical challenges into intuitive digital solutions.
              </div>
            </div>

            {/* Projects Section */}
            <div className="text-center md:text-left mt-6 sm:mt-10 px-2 sm:px-0">
              <div className=" text-transparent bg-clip-text bg-gradient-to-b from-[#47c4bd] via-[#4ea8a8] to-[#963f6f] font-bold text-2xl animate-pulse drop-shadow-[0_0_15px_rgba(0,182,112,0.8)] drop-shadow-[0_0_30px_rgba(0,182,112,0.5)] drop-shadow-[0_0_45px_rgba(191,0,150,0.3)] text-2xl sm:text-3xl font-semibold mb-2 sm:mb-3 ">
                Projects
              </div>
              <div className="text-gray-400 text-base sm:text-lg md:text-xl">
                Here's a collection of my projects, highlighting my expertise in
                full-stack and blockchain development through real-world,
                problem-solving applications.
              </div>
            </div>
          </div>
        </div>

        {/* Projects Cards Section */}
        <div className="w-full flex justify-center px-4 sm:px-6 pb-12 sm:pb-24 animate-[slideInUp_1s_ease-out]">
          <div className="w-full md:w-1/3 space-y-6 sm:space-y-10">
            {/* Project 1 - Second Brain */}
            {!showPopup ? (
              <div
                onClick={() => setShowPopup(!showPopup)}
                className="bg-gray-900 w-full rounded-xl overflow-hidden hover:bg-gray-800 cursor-pointer"
              >
                <div className="flex w-full h-48 sm:h-56 md:h-64">
                  <div className="relative w-[1%] h-full rounded-l-3xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-[#004d33] via-[#00b670] to-[#bf0096] blur-sm opacity-100"></div>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,255,255,0.45)_0%,_transparent_70%)] opacity-80"></div>
                    <div className="absolute top-1/2 left-0 w-[3px] h-[85%] bg-cyan-400 opacity-70 blur-md animate-pulse transform -translate-y-1/2"></div>
                  </div>

                  <div className="w-[98%] h-full p-3 sm:p-4 flex flex-col justify-between">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2 text-blue-500">
                        <Brain />
                        <span className="text-white text-sm sm:text-base md:text-xl">
                          Second-Brain
                        </span>
                      </div>
                      <div className="text-white text-xs sm:text-sm md:text-xl font-semibold">
                        Full-stack Engineer
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="text-gray-400 text-xs sm:text-sm md:text-xl">
                        A Link Management Web-App
                      </div>
                      <a
                        href="https://github.com/Dulesh123/Second-Brain"
                        className="text-white hover:text-gray-300"
                      >
                        <Github />
                      </a>
                    </div>

                    <div className="flex flex-wrap gap-2 justify-start sm:justify-around">
                      <button className="text-gray-400 px-3 py-1 sm:px-4 sm:py-2 rounded-xl bg-black hover:bg-gray-600 text-xs sm:text-sm md:text-lg hover:text-white">
                        React
                      </button>
                      <button className="text-gray-400 px-3 py-1 sm:px-4 sm:py-2 rounded-xl bg-black hover:bg-gray-600 text-xs sm:text-sm md:text-lg hover:text-white">
                        Nodejs
                      </button>
                      <button className="text-gray-400 px-3 py-1 sm:px-4 sm:py-2 rounded-xl bg-black hover:bg-gray-600 text-xs sm:text-sm md:text-lg hover:text-white">
                        MongoDB
                      </button>
                      <button className="text-gray-400 px-3 py-1 sm:px-4 sm:py-2 rounded-xl bg-black hover:bg-gray-600 text-xs sm:text-sm md:text-lg hover:text-white">
                        Express
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div
                className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50 p-4"
                onClick={() => setShowPopup(!showPopup)}
              >
                <div className="bg-gray-800 rounded-xl shadow-xl p-4 sm:p-6 md:p-8 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
                  <div className="flex items-center gap-3 mb-4 text-green-500">
                    <Brain />
                    <div className="text-white text-xl sm:text-2xl font-bold">
                      Second-Brain
                    </div>
                  </div>

                  <div className="text-white text-base sm:text-lg md:text-xl mb-4">
                    A Link Management Web-App
                  </div>

                  <ol className="list-decimal list-inside text-gray-100 text-sm sm:text-base md:text-lg space-y-2">
                    <li>
                      Full-stack MERN app to save and manage links and notes.
                    </li>
                    <li>React frontend with Express.js & MongoDB backend.</li>
                  </ol>

                  <div className="text-green-500 text-xl sm:text-2xl font-sans mt-6 mb-4">
                    Features
                  </div>

                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    <div className="text-white bg-black rounded-xl px-3 py-2 text-xs sm:text-sm md:text-base">
                      persistent storage
                    </div>
                    <div className="text-white bg-black rounded-xl px-3 py-2 text-xs sm:text-sm md:text-base">
                      smart organization
                    </div>
                    <div className="text-white bg-black rounded-xl px-3 py-2 text-xs sm:text-sm md:text-base">
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
                className="bg-gray-900 w-full rounded-xl overflow-hidden hover:bg-gray-800 cursor-pointer"
              >
                <div className="flex w-full h-48 sm:h-56 md:h-64">
                  <div className="relative w-[1%] h-full rounded-l-3xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-[#004d33] via-[#00b670] to-[#bf0096] blur-sm opacity-100"></div>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,255,255,0.45)_0%,_transparent_70%)] opacity-80"></div>
                    <div className="absolute top-1/2 left-0 w-[3px] h-[85%] bg-cyan-400 opacity-70 blur-md animate-pulse transform -translate-y-1/2"></div>
                  </div>

                  <div className="w-[98%] h-full p-3 sm:p-4 flex flex-col justify-between">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2 text-green-500">
                        <Pen />
                        <span className="text-white text-sm sm:text-base md:text-xl">
                          Live-Sketch
                        </span>
                      </div>
                      <div className="text-white text-xs sm:text-sm md:text-xl font-semibold">
                        Full-stack Engineer
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="text-gray-400 text-xs sm:text-sm md:text-xl">
                        A Real-time Collaborative Canvas
                      </div>
                      <a
                        href="https://github.com/Dulesh123/Live-Sketch"
                        className="text-white hover:text-gray-300"
                      >
                        <Github />
                      </a>
                    </div>

                    <div className="flex flex-wrap gap-2 justify-start sm:justify-around">
                      <button className="text-gray-400 px-3 py-1 sm:px-4 sm:py-2 rounded-xl bg-black hover:bg-gray-600 text-xs sm:text-sm md:text-lg hover:text-white">
                        MERN
                      </button>
                      <button className="text-gray-400 px-3 py-1 sm:px-4 sm:py-2 rounded-xl bg-black hover:bg-gray-600 text-xs sm:text-sm md:text-lg hover:text-white">
                        WebSockets
                      </button>
                      <button className="text-gray-400 px-3 py-1 sm:px-4 sm:py-2 rounded-xl bg-black hover:bg-gray-600 text-xs sm:text-sm md:text-lg hover:text-white">
                        PostgreSQL
                      </button>
                      <button className="text-gray-400 px-3 py-1 sm:px-4 sm:py-2 rounded-xl bg-black hover:bg-gray-600 text-xs sm:text-sm md:text-lg hover:text-white">
                        Turborepo
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div
                className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50 p-4"
                onClick={() => setShowPopup1(!showPopup1)}
              >
                <div className="bg-gray-800 rounded-xl shadow-xl p-4 sm:p-6 md:p-8 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
                  <div className="flex items-center gap-3 mb-4 text-blue-500">
                    <Pen />
                    <div className="text-white text-xl sm:text-2xl font-bold">
                      Live-Sketch
                    </div>
                  </div>

                  <div className="text-white text-base sm:text-lg md:text-xl mb-4">
                    A Real-time Collaborative Canvas
                  </div>

                  <ol className="list-decimal list-inside text-gray-100 text-sm sm:text-base md:text-lg space-y-2">
                    <li>Real-time collaborative drawing with WebSockets.</li>
                    <li>Session and user data stored in PostgreSQL.</li>
                  </ol>

                  <div className="text-blue-500 text-xl sm:text-2xl font-sans mt-6 mb-4">
                    Features
                  </div>

                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    <div className="text-white bg-black rounded-xl px-3 py-2 text-xs sm:text-sm md:text-base">
                      real-time
                    </div>
                    <div className="text-white bg-black rounded-xl px-3 py-2 text-xs sm:text-sm md:text-base">
                      responsive UI
                    </div>
                    <div className="text-white bg-black rounded-xl px-3 py-2 text-xs sm:text-sm md:text-base">
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
                className="bg-gray-900 w-full rounded-xl overflow-hidden hover:bg-gray-800 cursor-pointer"
              >
                <div className="flex w-full h-48 sm:h-56 md:h-64">
                  <div className="relative w-[1%] h-full rounded-l-3xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-[#004d33] via-[#00b670] to-[#bf0096] blur-sm opacity-100"></div>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,255,255,0.45)_0%,_transparent_70%)] opacity-80"></div>
                    <div className="absolute top-1/2 left-0 w-[3px] h-[85%] bg-cyan-400 opacity-70 blur-md animate-pulse transform -translate-y-1/2"></div>
                  </div>

                  <div className="w-[98%] h-full p-3 sm:p-4 flex flex-col justify-between">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2 text-blue-500">
                        <Solana />
                        <span className="text-white text-sm sm:text-base md:text-xl">
                          Sol-care
                        </span>
                      </div>
                      <div className="text-white text-xs sm:text-sm md:text-xl font-semibold">
                        Full-stack BlockChain Engineer
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="text-gray-400 text-xs sm:text-sm md:text-xl">
                        A Decentralized Application
                      </div>
                      <a
                        href="https://github.com/Dulesh123/Sol-Care"
                        className="text-white hover:text-gray-300"
                      >
                        <Github />
                      </a>
                    </div>

                    <div className="flex flex-wrap gap-2 justify-start sm:justify-around">
                      <button className="text-gray-400 px-3 py-1 sm:px-4 sm:py-2 rounded-xl bg-black hover:bg-gray-600 text-xs sm:text-sm md:text-lg hover:text-white">
                        Next JS
                      </button>
                      <button className="text-gray-400 px-3 py-1 sm:px-4 sm:py-2 rounded-xl bg-black hover:bg-gray-600 text-xs sm:text-sm md:text-lg hover:text-white">
                        Web-3
                      </button>
                      <button className="text-gray-400 px-3 py-1 sm:px-4 sm:py-2 rounded-xl bg-black hover:bg-gray-600 text-xs sm:text-sm md:text-lg hover:text-white">
                        JSON-RPC
                      </button>
                      <button className="text-gray-400 px-3 py-1 sm:px-4 sm:py-2 rounded-xl bg-black hover:bg-gray-600 text-xs sm:text-sm md:text-lg hover:text-white">
                        Solana
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div
                className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50 p-4"
                onClick={() => setShowPopup2(!showPopup2)}
              >
                <div className="bg-gray-800 rounded-xl shadow-xl p-4 sm:p-6 md:p-8 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
                  <div className="flex items-center gap-3 mb-4 text-green-500">
                    <Solana />
                    <div className="text-white text-xl sm:text-2xl font-bold">
                      Sol-Care
                    </div>
                  </div>

                  <div className="text-white text-base sm:text-lg md:text-xl mb-4">
                    A D-App
                  </div>

                  <ol className="list-decimal list-inside text-gray-100 text-sm sm:text-base md:text-lg space-y-2">
                    <li>Multi-chain wallet.</li>
                    <li>Blockchain data fetching (JSON-RPC).</li>
                  </ol>

                  <div className="text-green-500 text-xl sm:text-2xl font-sans mt-6 mb-4">
                    Features
                  </div>

                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    <div className="text-white bg-black rounded-xl px-3 py-2 text-xs sm:text-sm md:text-base">
                      Solana
                    </div>
                    <div className="text-white bg-black rounded-xl px-3 py-2 text-xs sm:text-sm md:text-base">
                      Crypto handling
                    </div>
                    <div className="text-white bg-black rounded-xl px-3 py-2 text-xs sm:text-sm md:text-base">
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
