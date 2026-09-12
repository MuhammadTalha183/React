// // import React, { useRef, useState } from "react";
// // import { ArrowUpRight } from "lucide-react";

// // export default function Home() {
// //   const stageRef = useRef(null);
// //   const [tilt, setTilt] = useState({ x: 0, y: 0 });

// //   const handleMouseMove = (e) => {
// //     const el = stageRef.current;
// //     if (!el) return;
// //     const rect = el.getBoundingClientRect();
// //     const px = (e.clientX - rect.left) / rect.width - 0.5;
// //     const py = (e.clientY - rect.top) / rect.height - 0.5;
// //     setTilt({ x: px * 10, y: py * -10 });
// //   };

// //   const resetTilt = () => setTilt({ x: 0, y: 0 });

// //   return (
// //     <section
// //       className="relative w-full overflow-hidden font-sans"
// //       style={{ backgroundColor: "#17140F", color: "#F1EAD9" }}
// //     >
// //       <style>{`
// //         @keyframes hh-drift-1 {
// //           0%   { transform: translate(0, 0) rotate(-6deg); }
// //           50%  { transform: translate(14px, -22px) rotate(-2deg); }
// //           100% { transform: translate(0, 0) rotate(-6deg); }
// //         }
// //         @keyframes hh-drift-2 {
// //           0%   { transform: translate(0, 0) rotate(9deg); }
// //           50%  { transform: translate(-18px, 16px) rotate(13deg); }
// //           100% { transform: translate(0, 0) rotate(9deg); }
// //         }
// //         @keyframes hh-drift-3 {
// //           0%   { transform: translate(0, 0) rotate(3deg); }
// //           50%  { transform: translate(10px, 18px) rotate(-1deg); }
// //           100% { transform: translate(0, 0) rotate(3deg); }
// //         }
// //         .hh-scrap-1 { animation: hh-drift-1 11s ease-in-out infinite; }
// //         .hh-scrap-2 { animation: hh-drift-2 14s ease-in-out infinite; }
// //         .hh-scrap-3 { animation: hh-drift-3 9s ease-in-out infinite; }

// //         .hh-underline {
// //           stroke-dasharray: 100;
// //           stroke-dashoffset: 100;
// //           animation: hh-draw 1.1s 0.5s cubic-bezier(0.65, 0, 0.35, 1) forwards;
// //         }
// //         @keyframes hh-draw {
// //           to { stroke-dashoffset: 0; }
// //         }

// //         .hh-ink {
// //           stroke-dasharray: 100;
// //           animation: hh-ink-cycle 6.4s ease-in-out infinite;
// //         }
// //         @keyframes hh-ink-cycle {
// //           0%   { stroke-dashoffset: 100; opacity: 1; }
// //           52%  { stroke-dashoffset: 0;   opacity: 1; }
// //           64%  { stroke-dashoffset: 0;   opacity: 1; }
// //           72%  { stroke-dashoffset: 0;   opacity: 0; }
// //           74%  { stroke-dashoffset: 100; opacity: 0; }
// //           88%  { stroke-dashoffset: 100; opacity: 1; }
// //           100% { stroke-dashoffset: 100; opacity: 1; }
// //         }

// //         .hh-pen {
// //           offset-path: path("M 46,150 C 78,110 108,168 140,132 S 200,96 228,128 S 268,168 296,124");
// //           offset-rotate: auto;
// //           animation: hh-pen-cycle 6.4s ease-in-out infinite;
// //         }
// //         @keyframes hh-pen-cycle {
// //           0%   { offset-distance: 0%;   opacity: 1; }
// //           52%  { offset-distance: 100%; opacity: 1; }
// //           64%  { offset-distance: 100%; opacity: 1; }
// //           72%  { offset-distance: 100%; opacity: 0; }
// //           74%  { offset-distance: 0%;   opacity: 0; }
// //           88%  { offset-distance: 0%;   opacity: 1; }
// //           100% { offset-distance: 0%;   opacity: 1; }
// //         }

// //         @media (prefers-reduced-motion: reduce) {
// //           .hh-scrap-1, .hh-scrap-2, .hh-scrap-3, .hh-ink, .hh-pen, .hh-underline {
// //             animation: none !important;
// //           }
// //           .hh-ink { stroke-dashoffset: 0; }
// //         }
// //       `}</style>

// //       {/* ambient drifting paper scraps */}
// //       <div className="pointer-events-none absolute inset-0 opacity-[0.16]">
// //         <div
// //           className="hh-scrap-1 absolute w-24 h-32 rounded-sm"
// //           style={{
// //             top: "8%",
// //             left: "6%",
// //             background:
// //               "repeating-linear-gradient(180deg, transparent 0 9px, #F1EAD9 9px 10px)",
// //             border: "1px solid #F1EAD9",
// //           }}
// //         />
// //         <div
// //           className="hh-scrap-2 absolute w-20 h-28 rounded-sm"
// //           style={{
// //             bottom: "10%",
// //             left: "18%",
// //             background:
// //               "repeating-linear-gradient(180deg, transparent 0 9px, #F1EAD9 9px 10px)",
// //             border: "1px solid #F1EAD9",
// //           }}
// //         />
// //         <div
// //           className="hh-scrap-3 absolute w-16 h-20 rounded-sm"
// //           style={{
// //             top: "20%",
// //             right: "8%",
// //             background:
// //               "repeating-linear-gradient(180deg, transparent 0 9px, #F1EAD9 9px 10px)",
// //             border: "1px solid #F1EAD9",
// //           }}
// //         />
// //       </div>

// //       <div className="relative max-w-6xl mx-auto px-6 sm:px-10 py-20 sm:py-28">
// //         <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-10 items-center">
// //           {/* Left: headline + copy + CTA */}
// //           <div className="lg:col-span-7">
// //             <p className="text-sm mb-6" style={{ color: "#7D8F74" }}>
// //               Notes on writing, thinking, and making things well
// //             </p>

// //             <h1
// //               className="font-serif leading-[1.05] tracking-tight text-5xl sm:text-6xl lg:text-7xl mb-3"
// //               style={{ color: "#F1EAD9" }}
// //             >
// //               Ideas worth
// //               <br />
// //               <span className="relative inline-block">
// //                 sitting with.
// //                 <svg
// //                   viewBox="0 0 220 20"
// //                   preserveAspectRatio="none"
// //                   className="absolute left-0 -bottom-2 w-full h-4"
// //                 >
// //                   <path
// //                     d="M2,12 C50,4 160,20 218,8"
// //                     fill="none"
// //                     stroke="#C6A15B"
// //                     strokeWidth="4"
// //                     strokeLinecap="round"
// //                     pathLength="100"
// //                     className="hh-underline"
// //                   />
// //                 </svg>
// //               </span>
// //             </h1>

// //             <p
// //               className="text-lg leading-relaxed max-w-md mb-10 mt-8"
// //               style={{ color: "#A9A296" }}
// //             >
// //               A weekly publication on the habits of good thinking — long
// //               essays, short notes, and the occasional argument worth having
// //               with yourself.
// //             </p>

// //             <div className="flex flex-wrap items-center gap-5">
// //               <button
// //                 className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium"
// //                 style={{ backgroundColor: "#C6A15B", color: "#17140F" }}
// //               >
// //                 Start reading
// //                 <ArrowUpRight className="w-4 h-4" strokeWidth={2.5} />
// //               </button>
// //               <button
// //                 className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium border"
// //                 style={{ borderColor: "#3A362E", color: "#F1EAD9" }}
// //               >
// //                 Browse topics
// //               </button>
// //             </div>

// //             <div
// //               className="flex items-center gap-8 mt-16 pt-8 border-t"
// //               style={{ borderColor: "#2A271F" }}
// //             >
// //               <div>
// //                 <p className="font-serif text-3xl">240+</p>
// //                 <p className="text-sm mt-1" style={{ color: "#7A7568" }}>
// //                   essays published
// //                 </p>
// //               </div>
// //               <div>
// //                 <p className="font-serif text-3xl">18k</p>
// //                 <p className="text-sm mt-1" style={{ color: "#7A7568" }}>
// //                   weekly readers
// //                 </p>
// //               </div>
// //               <div>
// //                 <p className="font-serif text-3xl">Fri</p>
// //                 <p className="text-sm mt-1" style={{ color: "#7A7568" }}>
// //                   new issue day
// //                 </p>
// //               </div>
// //             </div>
// //           </div>

// //           {/* Right: animated notebook + pen illustration */}
// //           <div className="lg:col-span-5 flex justify-center">
// //             <div
// //               ref={stageRef}
// //               onMouseMove={handleMouseMove}
// //               onMouseLeave={resetTilt}
// //               style={{
// //                 transform: `perspective(800px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
// //                 transition: "transform 0.25s ease-out",
// //               }}
// //               className="w-full max-w-sm"
// //             >
// //               <svg viewBox="0 0 340 260" className="w-full h-auto">
// //                 {/* notebook shadow */}
// //                 <ellipse cx="170" cy="238" rx="130" ry="12" fill="#0C0A07" opacity="0.5" />

// //                 {/* notebook body */}
// //                 <rect
// //                   x="24"
// //                   y="20"
// //                   width="292"
// //                   height="200"
// //                   rx="10"
// //                   fill="#EFE7D6"
// //                   stroke="#3A362E"
// //                   strokeWidth="2"
// //                 />
// //                 {/* spine */}
// //                 <rect x="24" y="20" width="26" height="200" rx="10" fill="#C6A15B" opacity="0.9" />
// //                 {[0, 1, 2, 3, 4, 5].map((i) => (
// //                   <circle key={i} cx="37" cy={40 + i * 32} r="4.5" fill="#17140F" />
// //                 ))}

// //                 {/* faint ruled lines */}
// //                 {[0, 1, 2, 3, 4, 5, 6].map((i) => (
// //                   <line
// //                     key={i}
// //                     x1="70"
// //                     y1={52 + i * 22}
// //                     x2="296"
// //                     y2={52 + i * 22}
// //                     stroke="#3A362E"
// //                     strokeOpacity="0.18"
// //                     strokeWidth="1.5"
// //                   />
// //                 ))}

// //                 {/* animated handwriting stroke */}
// //                 <path
// //                   d="M 46,150 C 78,110 108,168 140,132 S 200,96 228,128 S 268,168 296,124"
// //                   fill="none"
// //                   stroke="#17140F"
// //                   strokeWidth="3"
// //                   strokeLinecap="round"
// //                   pathLength="100"
// //                   className="hh-ink"
// //                   transform="translate(0,4)"
// //                 />

// //                 {/* pen, moving along the same path */}
// //                 <g className="hh-pen">
// //                   <g transform="translate(-4,-4) rotate(45)">
// //                     <rect x="-4" y="-16" width="8" height="34" rx="3" fill="#17140F" />
// //                     <polygon points="-4,-16 4,-16 0,-26" fill="#C6A15B" />
// //                     <rect x="-4" y="6" width="8" height="7" rx="1.5" fill="#7D8F74" />
// //                   </g>
// //                 </g>
// //               </svg>

// //               <p
// //                 className="text-center text-sm mt-6"
// //                 style={{ color: "#7A7568" }}
// //               >
// //                 Every issue starts the same way — pen to page.
// //               </p>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// import React, { useEffect, useRef } from "react";
// import { ArrowUpRight, Play } from "lucide-react";

// /**
//  * BlogHero — light theme, video-backed hero.
//  *
//  * Drop your own 10–12s clip in by setting VIDEO_SRC below (mp4, muted,
//  * ideally shot/exported to loop cleanly). Until you do, the canvas
//  * "ambient light" layer (soft sunbeam sweep + drifting motes) renders on
//  * its own, so the hero is never static — and it keeps running underneath
//  * your video as a subtle extra layer of motion once you add one.
//  */
// const VIDEO_SRC = ""; // e.g. "/videos/desk-loop.mp4"
// const POSTER_SRC = ""; // e.g. "/videos/desk-loop-poster.jpg"

// export default function Home() {
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext("2d");
//     let raf;
//     let w, h;
//     const motes = Array.from({ length: 46 }, () => ({
//       x: Math.random(),
//       y: Math.random(),
//       r: 1 + Math.random() * 2.2,
//       speed: 0.05 + Math.random() * 0.12,
//       drift: (Math.random() - 0.5) * 0.02,
//       alpha: 0.15 + Math.random() * 0.35,
//     }));

//     const resize = () => {
//       const rect = canvas.parentElement.getBoundingClientRect();
//       w = canvas.width = rect.width * devicePixelRatio;
//       h = canvas.height = rect.height * devicePixelRatio;
//       canvas.style.width = rect.width + "px";
//       canvas.style.height = rect.height + "px";
//     };
//     resize();
//     window.addEventListener("resize", resize);

//     let t = 0;
//     const draw = () => {
//       t += 0.0035;
//       ctx.clearRect(0, 0, w, h);

//       // soft diagonal sunbeam sweep
//       const bx = w * (0.2 + 0.6 * ((Math.sin(t) + 1) / 2));
//       const beam = ctx.createLinearGradient(bx - w * 0.35, 0, bx + w * 0.35, h);
//       beam.addColorStop(0, "rgba(217,196,150,0)");
//       beam.addColorStop(0.5, "rgba(217,196,150,0.22)");
//       beam.addColorStop(1, "rgba(217,196,150,0)");
//       ctx.fillStyle = beam;
//       ctx.fillRect(0, 0, w, h);

//       // drifting light motes
//       motes.forEach((m) => {
//         m.y -= m.speed * 0.0016;
//         m.x += m.drift * 0.001;
//         if (m.y < -0.02) m.y = 1.02;
//         if (m.x < -0.02) m.x = 1.02;
//         if (m.x > 1.02) m.x = -0.02;

//         ctx.beginPath();
//         ctx.arc(m.x * w, m.y * h, m.r * devicePixelRatio, 0, Math.PI * 2);
//         ctx.fillStyle = `rgba(120,100,60,${m.alpha})`;
//         ctx.fill();
//       });

//       raf = requestAnimationFrame(draw);
//     };
//     draw();

//     return () => {
//       cancelAnimationFrame(raf);
//       window.removeEventListener("resize", resize);
//     };
//   }, []);

//   return (
//     <section
//       className="relative w-full overflow-hidden font-sans min-h-[640px] flex items-center"
//       style={{ backgroundColor: "#F6F4EE" }}
//     >
//       {/* video layer */}
//       {VIDEO_SRC ? (
//         <video
//           className="absolute inset-0 w-full h-full object-cover"
//           autoPlay
//           muted
//           loop
//           playsInline
//           poster={POSTER_SRC || undefined}
//         >
//           <source src={VIDEO_SRC} type="video/mp4" />
//         </video>
//       ) : (
//         <div
//           className="absolute inset-0"
//           style={{
//             background:
//               "radial-gradient(circle at 30% 20%, #FBF8F1 0%, #F1EDE2 55%, #E9E3D3 100%)",
//           }}
//         />
//       )}

//       {/* canvas ambient light layer */}
//       <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />

//       {/* legibility wash */}
//       <div
//         className="absolute inset-0"
//         style={{
//           background:
//             "linear-gradient(120deg, rgba(246,244,238,0.92) 0%, rgba(246,244,238,0.55) 42%, rgba(246,244,238,0.15) 70%)",
//         }}
//       />

//       <div className="relative max-w-6xl mx-auto px-6 sm:px-10 py-20 w-full">
//         <div
//           className="max-w-xl rounded-[28px] p-9 sm:p-12"
//           style={{
//             background: "rgba(255,255,255,0.55)",
//             backdropFilter: "blur(18px)",
//             WebkitBackdropFilter: "blur(18px)",
//             border: "1px solid rgba(255,255,255,0.6)",
//             boxShadow: "0 24px 60px -20px rgba(80,70,40,0.25)",
//           }}
//         >
//           <p className="text-sm mb-5" style={{ color: "#4F7A5B" }}>
//             Notes on writing, thinking, and making things well
//           </p>

//           <h1
//             className="font-serif leading-[1.08] tracking-tight text-4xl sm:text-5xl lg:text-6xl mb-6"
//             style={{ color: "#1F2421" }}
//           >
//             Ideas worth
//             <br />
//             sitting with.
//           </h1>

//           <p
//             className="text-base sm:text-lg leading-relaxed mb-9"
//             style={{ color: "#4B4A42" }}
//           >
//             A weekly publication on the habits of good thinking — long
//             essays, short notes, and the occasional argument worth having
//             with yourself.
//           </p>

//           <div className="flex flex-wrap items-center gap-4">
//             <button
//               className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium"
//               style={{ backgroundColor: "#1F2421", color: "#F6F4EE" }}
//             >
//               Start reading
//               <ArrowUpRight className="w-4 h-4" strokeWidth={2.5} />
//             </button>

//             <button
//               className="inline-flex items-center gap-2 px-5 py-3 rounded-full font-medium"
//               style={{
//                 backgroundColor: "rgba(255,255,255,0.7)",
//                 color: "#1F2421",
//                 border: "1px solid rgba(31,36,33,0.15)",
//               }}
//             >
//               <span
//                 className="w-7 h-7 rounded-full flex items-center justify-center"
//                 style={{ backgroundColor: "#D9A441" }}
//               >
//                 <Play className="w-3.5 h-3.5 text-white" fill="white" />
//               </span>
//               Watch the intro
//             </button>
//           </div>

//           <div
//             className="flex items-center gap-8 mt-10 pt-7"
//             style={{ borderTop: "1px solid rgba(31,36,33,0.1)" }}
//           >
//             <div>
//               <p className="font-serif text-2xl" style={{ color: "#1F2421" }}>
//                 240+
//               </p>
//               <p className="text-xs mt-1" style={{ color: "#7A7A6E" }}>
//                 essays published
//               </p>
//             </div>
//             <div>
//               <p className="font-serif text-2xl" style={{ color: "#1F2421" }}>
//                 18k
//               </p>
//               <p className="text-xs mt-1" style={{ color: "#7A7A6E" }}>
//                 weekly readers
//               </p>
//             </div>
//             <div>
//               <p className="font-serif text-2xl" style={{ color: "#1F2421" }}>
//                 Fri
//               </p>
//               <p className="text-xs mt-1" style={{ color: "#7A7A6E" }}>
//                 new issue day
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import React, { useEffect, useRef } from "react";
import { ArrowUpRight, Play } from "lucide-react";
import Navbar from "./Navbar";
/**
 * BlogHero — light theme, story-driven background.
 *
 * The background plays a self-looping ~11s sequence, pure CSS/SVG,
 * no video file needed: a large pen appears -> a closed notebook fades
 * in -> the notebook opens -> the pen writes a line on the page -> fade,
 * loop. If you'd rather drop in a real filmed clip instead, set
 * VIDEO_SRC below and it plays behind the same illustration as an
 * extra ambient layer.
 */
const VIDEO_SRC = ""; // e.g. "/videos/desk-loop.mp4"
const POSTER_SRC = ""; // e.g. "/videos/desk-loop-poster.jpg"

export default function Home() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let raf;
    let w, h;
    const motes = Array.from({ length: 46 }, () => ({
      x: Math.random(),
      y: Math.random(),
      r: 1 + Math.random() * 2.2,
      speed: 0.05 + Math.random() * 0.12,
      drift: (Math.random() - 0.5) * 0.02,
      alpha: 0.15 + Math.random() * 0.35,
    }));

    const resize = () => {
      const rect = canvas.parentElement.getBoundingClientRect();
      w = canvas.width = rect.width * devicePixelRatio;
      h = canvas.height = rect.height * devicePixelRatio;
      canvas.style.width = rect.width + "px";
      canvas.style.height = rect.height + "px";
    };
    resize();
    window.addEventListener("resize", resize);

    let t = 0;
    const draw = () => {
      t += 0.0035;
      ctx.clearRect(0, 0, w, h);

      // soft diagonal sunbeam sweep
      const bx = w * (0.2 + 0.6 * ((Math.sin(t) + 1) / 2));
      const beam = ctx.createLinearGradient(bx - w * 0.35, 0, bx + w * 0.35, h);
      beam.addColorStop(0, "rgba(217,196,150,0)");
      beam.addColorStop(0.5, "rgba(217,196,150,0.22)");
      beam.addColorStop(1, "rgba(217,196,150,0)");
      ctx.fillStyle = beam;
      ctx.fillRect(0, 0, w, h);

      // drifting light motes
      motes.forEach((m) => {
        m.y -= m.speed * 0.0016;
        m.x += m.drift * 0.001;
        if (m.y < -0.02) m.y = 1.02;
        if (m.x < -0.02) m.x = 1.02;
        if (m.x > 1.02) m.x = -0.02;

        ctx.beginPath();
        ctx.arc(m.x * w, m.y * h, m.r * devicePixelRatio, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(120,100,60,${m.alpha})`;
        ctx.fill();
      });

      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div>
      <Navbar />
    <section
      className="relative w-full overflow-hidden font-sans min-h-[640px] flex items-center"
      style={{ backgroundColor: "#F6F4EE" }}
    >
      {/* video layer */}
      {VIDEO_SRC ? (
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster={POSTER_SRC || undefined}
        >
          <source src={VIDEO_SRC} type="video/mp4" />
        </video>
      ) : (
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 30% 20%, #FBF8F1 0%, #F1EDE2 55%, #E9E3D3 100%)",
          }}
        />
      )}

      {/* canvas ambient light layer */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />

      <style>{`
        .hh2-pen-big, .hh2-notebook-closed, .hh2-notebook-open {
          animation-duration: 11s;
          animation-iteration-count: infinite;
          animation-timing-function: ease-in-out;
        }
        .hh2-pen-big { animation-name: hh2-pen-big; }
        @keyframes hh2-pen-big {
          0%   { opacity: 0; transform: scale(2.5) rotate(-14deg); }
          8%   { opacity: 1; transform: scale(2.5) rotate(-14deg); }
          24%  { opacity: 1; transform: scale(2.5) rotate(-14deg); }
          34%  { opacity: 0; transform: scale(1.05) rotate(8deg) translate(70px, -50px); }
          100% { opacity: 0; transform: scale(1.05) rotate(8deg) translate(70px, -50px); }
        }

        .hh2-notebook-closed { animation-name: hh2-notebook-closed; }
        @keyframes hh2-notebook-closed {
          0%   { opacity: 0; transform: scale(0.9) translateY(12px); }
          24%  { opacity: 0; }
          30%  { opacity: 1; transform: scale(1) translateY(0); }
          46%  { opacity: 1; transform: scale(1) translateY(0); }
          55%  { opacity: 0; transform: scale(1.06) translateY(-20px) rotate(-5deg); }
          100% { opacity: 0; }
        }

        .hh2-notebook-open { animation-name: hh2-notebook-open; }
        @keyframes hh2-notebook-open {
          0%   { opacity: 0; transform: scale(0.96); }
          50%  { opacity: 0; }
          60%  { opacity: 1; transform: scale(1); }
          92%  { opacity: 1; transform: scale(1); }
          100% { opacity: 0; transform: scale(1); }
        }

        .hh2-ink {
          stroke-dasharray: 100;
          animation: hh2-ink 11s ease-in-out infinite;
        }
        @keyframes hh2-ink {
          0%   { opacity: 0; stroke-dashoffset: 100; }
          62%  { opacity: 0; stroke-dashoffset: 100; }
          66%  { opacity: 1; stroke-dashoffset: 100; }
          88%  { opacity: 1; stroke-dashoffset: 0; }
          95%  { opacity: 1; stroke-dashoffset: 0; }
          100% { opacity: 0; stroke-dashoffset: 100; }
        }

        .hh2-pen-write {
          offset-path: path("M 212,150 C 244,110 274,168 306,132 S 366,96 394,128");
          offset-rotate: auto;
          animation: hh2-pen-write 11s ease-in-out infinite;
        }
        @keyframes hh2-pen-write {
          0%   { opacity: 0; offset-distance: 0%; }
          62%  { opacity: 0; offset-distance: 0%; }
          66%  { opacity: 1; offset-distance: 0%; }
          88%  { opacity: 1; offset-distance: 100%; }
          95%  { opacity: 1; offset-distance: 100%; }
          100% { opacity: 0; offset-distance: 0%; }
        }

        @media (prefers-reduced-motion: reduce) {
          .hh2-pen-big, .hh2-notebook-closed, .hh2-ink, .hh2-pen-write {
            animation: none !important;
          }
          .hh2-notebook-open { animation: none !important; opacity: 1 !important; }
          .hh2-ink { stroke-dashoffset: 0 !important; opacity: 1 !important; }
        }
      `}</style>

      {/* the story stage: big pen -> notebook -> open -> write, on loop */}
      <div className="absolute inset-0 flex items-center justify-center lg:justify-end lg:pr-20 pointer-events-none">
        <div className="relative w-[420px] h-[340px] sm:w-[520px] sm:h-[420px]">
          {/* stage 1: large pen */}
          <div className="hh2-pen-big absolute inset-0 flex items-center justify-center">
            <svg viewBox="0 0 60 140" className="w-16 h-auto sm:w-20">
              <rect x="18" y="16" width="24" height="86" rx="8" fill="#1F2421" />
              <polygon points="18,16 42,16 30,-6" fill="#D9A441" />
              <rect x="18" y="102" width="24" height="20" rx="4" fill="#4F7A5B" />
              <rect x="27" y="122" width="6" height="14" rx="3" fill="#1F2421" />
            </svg>
          </div>

          {/* stage 2: closed notebook */}
          <div className="hh2-notebook-closed absolute inset-0 flex items-center justify-center">
            <svg viewBox="0 0 240 300" className="w-40 sm:w-48 h-auto">
              <rect x="20" y="14" width="200" height="272" rx="14" fill="#EFE7D6" stroke="#1F2421" strokeWidth="2" />
              <rect x="20" y="14" width="200" height="272" rx="14" fill="#4F7A5B" opacity="0.12" />
              <rect x="86" y="40" width="68" height="8" rx="4" fill="#D9A441" />
              <rect x="70" y="60" width="100" height="4" rx="2" fill="#1F2421" opacity="0.25" />
              <rect x="150" y="14" width="8" height="272" fill="#1F2421" opacity="0.08" />
            </svg>
          </div>

          {/* stage 3: open notebook with pen writing on it */}
          <div className="hh2-notebook-open absolute inset-0 flex items-center justify-center">
            <svg viewBox="0 0 440 300" className="w-full h-auto">
              <ellipse cx="220" cy="278" rx="170" ry="14" fill="#1F2421" opacity="0.08" />
              <rect x="30" y="20" width="380" height="240" rx="12" fill="#FBF8F1" stroke="#1F2421" strokeWidth="2" />
              <line x1="220" y1="20" x2="220" y2="260" stroke="#1F2421" strokeOpacity="0.15" strokeWidth="2" />
              {[0, 1, 2, 3, 4, 5, 6].map((i) => (
                <React.Fragment key={i}>
                  <line x1="50" y1={52 + i * 28} x2="205" y2={52 + i * 28} stroke="#1F2421" strokeOpacity="0.12" strokeWidth="1.5" />
                  <line x1="235" y1={52 + i * 28} x2="392" y2={52 + i * 28} stroke="#1F2421" strokeOpacity="0.12" strokeWidth="1.5" />
                </React.Fragment>
              ))}

              {/* the ink line being written on the right page */}
              <path
                d="M 212,150 C 244,110 274,168 306,132 S 366,96 394,128"
                fill="none"
                stroke="#1F2421"
                strokeWidth="3"
                strokeLinecap="round"
                pathLength="100"
                className="hh2-ink"
              />

              {/* the pen, travelling along the same path */}
              <g className="hh2-pen-write">
                <g transform="translate(-3,-3) rotate(45)">
                  <rect x="-3" y="-14" width="6" height="26" rx="2.5" fill="#1F2421" />
                  <polygon points="-3,-14 3,-14 0,-22" fill="#D9A441" />
                  <rect x="-3" y="6" width="6" height="6" rx="1.5" fill="#4F7A5B" />
                </g>
              </g>
            </svg>
          </div>
        </div>
      </div>

      {/* legibility wash */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(120deg, rgba(246,244,238,0.92) 0%, rgba(246,244,238,0.55) 42%, rgba(246,244,238,0.15) 70%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 sm:px-10 py-20 w-full">
        <div
          className="max-w-xl rounded-[28px] p-9 sm:p-12"
          style={{
            background: "rgba(255,255,255,0.55)",
            backdropFilter: "blur(18px)",
            WebkitBackdropFilter: "blur(18px)",
            border: "1px solid rgba(255,255,255,0.6)",
            boxShadow: "0 24px 60px -20px rgba(80,70,40,0.25)",
          }}
        >
          <p className="text-sm mb-5" style={{ color: "#4F7A5B" }}>
            Notes on writing, thinking, and making things well
          </p>

          <h1
            className="font-serif leading-[1.08] tracking-tight text-4xl sm:text-5xl lg:text-6xl mb-6"
            style={{ color: "#1F2421" }}
          >
            Ideas worth
            <br />
            sitting with.
          </h1>

          <p
            className="text-base sm:text-lg leading-relaxed mb-9"
            style={{ color: "#4B4A42" }}
          >
            A weekly publication on the habits of good thinking — long
            essays, short notes, and the occasional argument worth having
            with yourself.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <button
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium"
              style={{ backgroundColor: "#1F2421", color: "#F6F4EE" }}
            >
              Start reading
              <ArrowUpRight className="w-4 h-4" strokeWidth={2.5} />
            </button>

            <button
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full font-medium"
              style={{
                backgroundColor: "rgba(255,255,255,0.7)",
                color: "#1F2421",
                border: "1px solid rgba(31,36,33,0.15)",
              }}
            >
              <span
                className="w-7 h-7 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "#D9A441" }}
              >
                <Play className="w-3.5 h-3.5 text-white" fill="white" />
              </span>
              Watch the intro
            </button>
          </div>

          <div
            className="flex items-center gap-8 mt-10 pt-7"
            style={{ borderTop: "1px solid rgba(31,36,33,0.1)" }}
          >
            <div>
              <p className="font-serif text-2xl" style={{ color: "#1F2421" }}>
                240+
              </p>
              <p className="text-xs mt-1" style={{ color: "#7A7A6E" }}>
                essays published
              </p>
            </div>
            <div>
              <p className="font-serif text-2xl" style={{ color: "#1F2421" }}>
                18k
              </p>
              <p className="text-xs mt-1" style={{ color: "#7A7A6E" }}>
                weekly readers
              </p>
            </div>
            <div>
              <p className="font-serif text-2xl" style={{ color: "#1F2421" }}>
                Fri
              </p>
              <p className="text-xs mt-1" style={{ color: "#7A7A6E" }}>
                new issue day
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}
