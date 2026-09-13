// // // import React, { useEffect, useRef } from "react";
// // // import { ArrowUpRight, Play } from "lucide-react";
// // // import Navbar from "./Navbar";
// // // /**
// // //  * BlogHero — light theme, story-driven background.
// // //  *
// // //  * The background plays a self-looping ~11s sequence, pure CSS/SVG,
// // //  * no video file needed: a large pen appears -> a closed notebook fades
// // //  * in -> the notebook opens -> the pen writes a line on the page -> fade,
// // //  * loop. If you'd rather drop in a real filmed clip instead, set
// // //  * VIDEO_SRC below and it plays behind the same illustration as an
// // //  * extra ambient layer.
// // //  */
// // // const VIDEO_SRC = ""; // e.g. "/videos/desk-loop.mp4"
// // // const POSTER_SRC = ""; // e.g. "/videos/desk-loop-poster.jpg"

// // // export default function Home() {
// // //   const canvasRef = useRef(null);

// // //   useEffect(() => {
// // //     const canvas = canvasRef.current;
// // //     const ctx = canvas.getContext("2d");
// // //     let raf;
// // //     let w, h;
// // //     const motes = Array.from({ length: 46 }, () => ({
// // //       x: Math.random(),
// // //       y: Math.random(),
// // //       r: 1 + Math.random() * 2.2,
// // //       speed: 0.05 + Math.random() * 0.12,
// // //       drift: (Math.random() - 0.5) * 0.02,
// // //       alpha: 0.15 + Math.random() * 0.35,
// // //     }));

// // //     const resize = () => {
// // //       const rect = canvas.parentElement.getBoundingClientRect();
// // //       w = canvas.width = rect.width * devicePixelRatio;
// // //       h = canvas.height = rect.height * devicePixelRatio;
// // //       canvas.style.width = rect.width + "px";
// // //       canvas.style.height = rect.height + "px";
// // //     };
// // //     resize();
// // //     window.addEventListener("resize", resize);

// // //     let t = 0;
// // //     const draw = () => {
// // //       t += 0.0035;
// // //       ctx.clearRect(0, 0, w, h);

// // //       // soft diagonal sunbeam sweep
// // //       const bx = w * (0.2 + 0.6 * ((Math.sin(t) + 1) / 2));
// // //       const beam = ctx.createLinearGradient(bx - w * 0.35, 0, bx + w * 0.35, h);
// // //       beam.addColorStop(0, "rgba(217,196,150,0)");
// // //       beam.addColorStop(0.5, "rgba(217,196,150,0.22)");
// // //       beam.addColorStop(1, "rgba(217,196,150,0)");
// // //       ctx.fillStyle = beam;
// // //       ctx.fillRect(0, 0, w, h);

// // //       // drifting light motes
// // //       motes.forEach((m) => {
// // //         m.y -= m.speed * 0.0016;
// // //         m.x += m.drift * 0.001;
// // //         if (m.y < -0.02) m.y = 1.02;
// // //         if (m.x < -0.02) m.x = 1.02;
// // //         if (m.x > 1.02) m.x = -0.02;

// // //         ctx.beginPath();
// // //         ctx.arc(m.x * w, m.y * h, m.r * devicePixelRatio, 0, Math.PI * 2);
// // //         ctx.fillStyle = `rgba(120,100,60,${m.alpha})`;
// // //         ctx.fill();
// // //       });

// // //       raf = requestAnimationFrame(draw);
// // //     };
// // //     draw();

// // //     return () => {
// // //       cancelAnimationFrame(raf);
// // //       window.removeEventListener("resize", resize);
// // //     };
// // //   }, []);

// // //   return (
// // //     <div>
// // //       <Navbar />
// // //     <section
// // //       className="relative w-full overflow-hidden font-sans min-h-[640px] flex items-center"
// // //       style={{ backgroundColor: "#F6F4EE" }}
// // //     >
// // //       {/* video layer */}
// // //       {VIDEO_SRC ? (
// // //         <video
// // //           className="absolute inset-0 w-full h-full object-cover"
// // //           autoPlay
// // //           muted
// // //           loop
// // //           playsInline
// // //           poster={POSTER_SRC || undefined}
// // //         >
// // //           <source src={VIDEO_SRC} type="video/mp4" />
// // //         </video>
// // //       ) : (
// // //         <div
// // //           className="absolute inset-0"
// // //           style={{
// // //             background:
// // //               "radial-gradient(circle at 30% 20%, #FBF8F1 0%, #F1EDE2 55%, #E9E3D3 100%)",
// // //           }}
// // //         />
// // //       )}

// // //       {/* canvas ambient light layer */}
// // //       <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />

// // //       <style>{`
// // //         .hh2-pen-big, .hh2-notebook-closed, .hh2-notebook-open {
// // //           animation-duration: 11s;
// // //           animation-iteration-count: infinite;
// // //           animation-timing-function: ease-in-out;
// // //         }
// // //         .hh2-pen-big { animation-name: hh2-pen-big; }
// // //         @keyframes hh2-pen-big {
// // //           0%   { opacity: 0; transform: scale(2.5) rotate(-14deg); }
// // //           8%   { opacity: 1; transform: scale(2.5) rotate(-14deg); }
// // //           24%  { opacity: 1; transform: scale(2.5) rotate(-14deg); }
// // //           34%  { opacity: 0; transform: scale(1.05) rotate(8deg) translate(70px, -50px); }
// // //           100% { opacity: 0; transform: scale(1.05) rotate(8deg) translate(70px, -50px); }
// // //         }

// // //         .hh2-notebook-closed { animation-name: hh2-notebook-closed; }
// // //         @keyframes hh2-notebook-closed {
// // //           0%   { opacity: 0; transform: scale(0.9) translateY(12px); }
// // //           24%  { opacity: 0; }
// // //           30%  { opacity: 1; transform: scale(1) translateY(0); }
// // //           46%  { opacity: 1; transform: scale(1) translateY(0); }
// // //           55%  { opacity: 0; transform: scale(1.06) translateY(-20px) rotate(-5deg); }
// // //           100% { opacity: 0; }
// // //         }

// // //         .hh2-notebook-open { animation-name: hh2-notebook-open; }
// // //         @keyframes hh2-notebook-open {
// // //           0%   { opacity: 0; transform: scale(0.96); }
// // //           50%  { opacity: 0; }
// // //           60%  { opacity: 1; transform: scale(1); }
// // //           92%  { opacity: 1; transform: scale(1); }
// // //           100% { opacity: 0; transform: scale(1); }
// // //         }

// // //         .hh2-ink {
// // //           stroke-dasharray: 100;
// // //           animation: hh2-ink 11s ease-in-out infinite;
// // //         }
// // //         @keyframes hh2-ink {
// // //           0%   { opacity: 0; stroke-dashoffset: 100; }
// // //           62%  { opacity: 0; stroke-dashoffset: 100; }
// // //           66%  { opacity: 1; stroke-dashoffset: 100; }
// // //           88%  { opacity: 1; stroke-dashoffset: 0; }
// // //           95%  { opacity: 1; stroke-dashoffset: 0; }
// // //           100% { opacity: 0; stroke-dashoffset: 100; }
// // //         }

// // //         .hh2-pen-write {
// // //           offset-path: path("M 212,150 C 244,110 274,168 306,132 S 366,96 394,128");
// // //           offset-rotate: auto;
// // //           animation: hh2-pen-write 11s ease-in-out infinite;
// // //         }
// // //         @keyframes hh2-pen-write {
// // //           0%   { opacity: 0; offset-distance: 0%; }
// // //           62%  { opacity: 0; offset-distance: 0%; }
// // //           66%  { opacity: 1; offset-distance: 0%; }
// // //           88%  { opacity: 1; offset-distance: 100%; }
// // //           95%  { opacity: 1; offset-distance: 100%; }
// // //           100% { opacity: 0; offset-distance: 0%; }
// // //         }

// // //         @media (prefers-reduced-motion: reduce) {
// // //           .hh2-pen-big, .hh2-notebook-closed, .hh2-ink, .hh2-pen-write {
// // //             animation: none !important;
// // //           }
// // //           .hh2-notebook-open { animation: none !important; opacity: 1 !important; }
// // //           .hh2-ink { stroke-dashoffset: 0 !important; opacity: 1 !important; }
// // //         }
// // //       `}</style>

// // //       {/* the story stage: big pen -> notebook -> open -> write, on loop */}
// // //       <div className="absolute inset-0 flex items-center justify-center lg:justify-end lg:pr-20 pointer-events-none">
// // //         <div className="relative w-[420px] h-[340px] sm:w-[520px] sm:h-[420px]">
// // //           {/* stage 1: large pen */}
// // //           <div className="hh2-pen-big absolute inset-0 flex items-center justify-center">
// // //             <svg viewBox="0 0 60 140" className="w-16 h-auto sm:w-20">
// // //               <rect x="18" y="16" width="24" height="86" rx="8" fill="#1F2421" />
// // //               <polygon points="18,16 42,16 30,-6" fill="#D9A441" />
// // //               <rect x="18" y="102" width="24" height="20" rx="4" fill="#4F7A5B" />
// // //               <rect x="27" y="122" width="6" height="14" rx="3" fill="#1F2421" />
// // //             </svg>
// // //           </div>

// // //           {/* stage 2: closed notebook */}
// // //           <div className="hh2-notebook-closed absolute inset-0 flex items-center justify-center">
// // //             <svg viewBox="0 0 240 300" className="w-40 sm:w-48 h-auto">
// // //               <rect x="20" y="14" width="200" height="272" rx="14" fill="#EFE7D6" stroke="#1F2421" strokeWidth="2" />
// // //               <rect x="20" y="14" width="200" height="272" rx="14" fill="#4F7A5B" opacity="0.12" />
// // //               <rect x="86" y="40" width="68" height="8" rx="4" fill="#D9A441" />
// // //               <rect x="70" y="60" width="100" height="4" rx="2" fill="#1F2421" opacity="0.25" />
// // //               <rect x="150" y="14" width="8" height="272" fill="#1F2421" opacity="0.08" />
// // //             </svg>
// // //           </div>

// // //           {/* stage 3: open notebook with pen writing on it */}
// // //           <div className="hh2-notebook-open absolute inset-0 flex items-center justify-center">
// // //             <svg viewBox="0 0 440 300" className="w-full h-auto">
// // //               <ellipse cx="220" cy="278" rx="170" ry="14" fill="#1F2421" opacity="0.08" />
// // //               <rect x="30" y="20" width="380" height="240" rx="12" fill="#FBF8F1" stroke="#1F2421" strokeWidth="2" />
// // //               <line x1="220" y1="20" x2="220" y2="260" stroke="#1F2421" strokeOpacity="0.15" strokeWidth="2" />
// // //               {[0, 1, 2, 3, 4, 5, 6].map((i) => (
// // //                 <React.Fragment key={i}>
// // //                   <line x1="50" y1={52 + i * 28} x2="205" y2={52 + i * 28} stroke="#1F2421" strokeOpacity="0.12" strokeWidth="1.5" />
// // //                   <line x1="235" y1={52 + i * 28} x2="392" y2={52 + i * 28} stroke="#1F2421" strokeOpacity="0.12" strokeWidth="1.5" />
// // //                 </React.Fragment>
// // //               ))}

// // //               {/* the ink line being written on the right page */}
// // //               <path
// // //                 d="M 212,150 C 244,110 274,168 306,132 S 366,96 394,128"
// // //                 fill="none"
// // //                 stroke="#1F2421"
// // //                 strokeWidth="3"
// // //                 strokeLinecap="round"
// // //                 pathLength="100"
// // //                 className="hh2-ink"
// // //               />

// // //               {/* the pen, travelling along the same path */}
// // //               <g className="hh2-pen-write">
// // //                 <g transform="translate(-3,-3) rotate(45)">
// // //                   <rect x="-3" y="-14" width="6" height="26" rx="2.5" fill="#1F2421" />
// // //                   <polygon points="-3,-14 3,-14 0,-22" fill="#D9A441" />
// // //                   <rect x="-3" y="6" width="6" height="6" rx="1.5" fill="#4F7A5B" />
// // //                 </g>
// // //               </g>
// // //             </svg>
// // //           </div>
// // //         </div>
// // //       </div>

// // //       {/* legibility wash */}
// // //       <div
// // //         className="absolute inset-0"
// // //         style={{
// // //           background:
// // //             "linear-gradient(120deg, rgba(246,244,238,0.92) 0%, rgba(246,244,238,0.55) 42%, rgba(246,244,238,0.15) 70%)",
// // //         }}
// // //       />

// // //       <div className="relative max-w-6xl mx-auto px-6 sm:px-10 py-20 w-full">
// // //         <div
// // //           className="max-w-xl rounded-[28px] p-9 sm:p-12"
// // //           style={{
// // //             background: "rgba(255,255,255,0.55)",
// // //             backdropFilter: "blur(18px)",
// // //             WebkitBackdropFilter: "blur(18px)",
// // //             border: "1px solid rgba(255,255,255,0.6)",
// // //             boxShadow: "0 24px 60px -20px rgba(80,70,40,0.25)",
// // //           }}
// // //         >
// // //           <p className="text-sm mb-5" style={{ color: "#4F7A5B" }}>
// // //             Notes on writing, thinking, and making things well
// // //           </p>

// // //           <h1
// // //             className="font-serif leading-[1.08] tracking-tight text-4xl sm:text-5xl lg:text-6xl mb-6"
// // //             style={{ color: "#1F2421" }}
// // //           >
// // //             Ideas worth
// // //             <br />
// // //             sitting with.
// // //           </h1>

// // //           <p
// // //             className="text-base sm:text-lg leading-relaxed mb-9"
// // //             style={{ color: "#4B4A42" }}
// // //           >
// // //             A weekly publication on the habits of good thinking — long
// // //             essays, short notes, and the occasional argument worth having
// // //             with yourself.
// // //           </p>

// // //           <div className="flex flex-wrap items-center gap-4">
// // //             <button
// // //               className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium"
// // //               style={{ backgroundColor: "#1F2421", color: "#F6F4EE" }}
// // //             >
// // //               Start reading
// // //               <ArrowUpRight className="w-4 h-4" strokeWidth={2.5} />
// // //             </button>

// // //             <button
// // //               className="inline-flex items-center gap-2 px-5 py-3 rounded-full font-medium"
// // //               style={{
// // //                 backgroundColor: "rgba(255,255,255,0.7)",
// // //                 color: "#1F2421",
// // //                 border: "1px solid rgba(31,36,33,0.15)",
// // //               }}
// // //             >
// // //               <span
// // //                 className="w-7 h-7 rounded-full flex items-center justify-center"
// // //                 style={{ backgroundColor: "#D9A441" }}
// // //               >
// // //                 <Play className="w-3.5 h-3.5 text-white" fill="white" />
// // //               </span>
// // //               Watch the intro
// // //             </button>
// // //           </div>

// // //           <div
// // //             className="flex items-center gap-8 mt-10 pt-7"
// // //             style={{ borderTop: "1px solid rgba(31,36,33,0.1)" }}
// // //           >
// // //             <div>
// // //               <p className="font-serif text-2xl" style={{ color: "#1F2421" }}>
// // //                 240+
// // //               </p>
// // //               <p className="text-xs mt-1" style={{ color: "#7A7A6E" }}>
// // //                 essays published
// // //               </p>
// // //             </div>
// // //             <div>
// // //               <p className="font-serif text-2xl" style={{ color: "#1F2421" }}>
// // //                 18k
// // //               </p>
// // //               <p className="text-xs mt-1" style={{ color: "#7A7A6E" }}>
// // //                 weekly readers
// // //               </p>
// // //             </div>
// // //             <div>
// // //               <p className="font-serif text-2xl" style={{ color: "#1F2421" }}>
// // //                 Fri
// // //               </p>
// // //               <p className="text-xs mt-1" style={{ color: "#7A7A6E" }}>
// // //                 new issue day
// // //               </p>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </section>
// // //     </div>
// // //   );
// // // }
// // import React from "react";
// // import {
// //     Box,
// //     Typography,
// //     Button,
// //     Stack,
// //     Chip,
// // } from "@mui/material";

// // import {
// //     ArrowForward,
// //     AutoAwesome,
// //     PlayArrow,
// // } from "@mui/icons-material";

// // import { Link } from "react-router-dom";

// // function Home() {
// //     return (
// //         <Box
// //             sx={{
// //                 minHeight: "calc(100vh - 72px)",
// //                 position: "relative",
// //                 overflow: "hidden",
// //                 background: "#F8FAFC",
// //                 display: "flex",
// //                 alignItems: "center",
// //             }}
// //         >

// //             {/* =====================================================
// //                 ANIMATED BACKGROUND
// //             ====================================================== */}

// //             <Box
// //                 sx={{
// //                     position: "absolute",
// //                     inset: 0,
// //                     overflow: "hidden",
// //                     pointerEvents: "none",
// //                 }}
// //             >

// //                 {/* Large gradient orb */}

// //                 <Box
// //                     className="hero-orb orb-one"
// //                     sx={{
// //                         position: "absolute",
// //                         width: { xs: 280, md: 500 },
// //                         height: { xs: 280, md: 500 },
// //                         borderRadius: "50%",
// //                         background:
// //                             "radial-gradient(circle, rgba(99,102,241,0.20) 0%, rgba(139,92,246,0.08) 45%, transparent 70%)",
// //                         top: "-180px",
// //                         left: "-150px",
// //                         filter: "blur(10px)",
// //                     }}
// //                 />

// //                 {/* Second orb */}

// //                 <Box
// //                     className="hero-orb orb-two"
// //                     sx={{
// //                         position: "absolute",
// //                         width: { xs: 300, md: 550 },
// //                         height: { xs: 300, md: 550 },
// //                         borderRadius: "50%",
// //                         background:
// //                             "radial-gradient(circle, rgba(168,85,247,0.16) 0%, rgba(236,72,153,0.06) 45%, transparent 70%)",
// //                         right: "-200px",
// //                         bottom: "-220px",
// //                         filter: "blur(15px)",
// //                     }}
// //                 />

// //                 {/* Small glowing orb */}

// //                 <Box
// //                     className="hero-orb orb-three"
// //                     sx={{
// //                         position: "absolute",
// //                         width: 180,
// //                         height: 180,
// //                         borderRadius: "50%",
// //                         background:
// //                             "radial-gradient(circle, rgba(59,130,246,0.12), transparent 70%)",
// //                         right: "20%",
// //                         top: "10%",
// //                         filter: "blur(10px)",
// //                     }}
// //                 />

// //                 {/* Grid */}

// //                 <Box
// //                     sx={{
// //                         position: "absolute",
// //                         inset: 0,
// //                         opacity: 0.45,
// //                         backgroundImage: `
// //                             linear-gradient(
// //                                 rgba(99,102,241,0.045) 1px,
// //                                 transparent 1px
// //                             ),
// //                             linear-gradient(
// //                                 90deg,
// //                                 rgba(99,102,241,0.045) 1px,
// //                                 transparent 1px
// //                             )
// //                         `,
// //                         backgroundSize: "55px 55px",
// //                         maskImage:
// //                             "linear-gradient(to bottom, black, transparent 85%)",
// //                         WebkitMaskImage:
// //                             "linear-gradient(to bottom, black, transparent 85%)",
// //                     }}
// //                 />

// //             </Box>


// //             {/* =====================================================
// //                 CONTENT
// //             ====================================================== */}

// //             <Box
// //                 sx={{
// //                     width: "100%",
// //                     maxWidth: "1250px",
// //                     mx: "auto",
// //                     px: { xs: 3, sm: 5, md: 7 },
// //                     py: { xs: 8, md: 10 },
// //                     position: "relative",
// //                     zIndex: 2,
// //                 }}
// //             >

// //                 <Box
// //                     sx={{
// //                         display: "grid",
// //                         gridTemplateColumns: {
// //                             xs: "1fr",
// //                             md: "1fr 0.9fr",
// //                         },
// //                         alignItems: "center",
// //                         gap: { xs: 7, md: 5 },
// //                     }}
// //                 >


// //                     {/* =================================================
// //                         LEFT CONTENT
// //                     ================================================== */}

// //                     <Box
// //                         className="hero-content"
// //                         sx={{
// //                             maxWidth: "680px",
// //                         }}
// //                     >

// //                         {/* Badge */}

// //                         <Chip
// //                             icon={
// //                                 <AutoAwesome
// //                                     sx={{ fontSize: "16px !important" }}
// //                                 />
// //                             }
// //                             label="A space for ideas, stories & knowledge"
// //                             sx={{
// //                                 height: "36px",
// //                                 borderRadius: "50px",
// //                                 px: 1,
// //                                 mb: 3,
// //                                 background:
// //                                     "rgba(255,255,255,0.75)",
// //                                 border:
// //                                     "1px solid rgba(99,102,241,0.15)",
// //                                 color: "#4F46E5",
// //                                 fontWeight: 600,
// //                                 backdropFilter: "blur(10px)",
// //                                 boxShadow:
// //                                     "0 8px 30px rgba(99,102,241,0.08)",
// //                                 animation:
// //                                     "fadeUp 0.8s ease forwards",
// //                             }}
// //                         />


// //                         {/* Main Heading */}

// //                         <Typography
// //                             component="h1"
// //                             sx={{
// //                                 fontSize: {
// //                                     xs: "48px",
// //                                     sm: "64px",
// //                                     md: "72px",
// //                                     lg: "82px",
// //                                 },
// //                                 lineHeight: {
// //                                     xs: 1.05,
// //                                     md: 0.98,
// //                                 },
// //                                 letterSpacing: "-4px",
// //                                 fontWeight: 850,
// //                                 color: "#172033",
// //                                 mb: 3,
// //                                 animation:
// //                                     "fadeUp 0.9s ease forwards",
// //                             }}
// //                         >
// //                             Ideas worth
// //                             <br />

// //                             <Box
// //                                 component="span"
// //                                 sx={{
// //                                     position: "relative",
// //                                     display: "inline-block",
// //                                     background:
// //                                         "linear-gradient(100deg,#4F46E5 0%,#7C3AED 45%,#C026D3 100%)",
// //                                     backgroundClip: "text",
// //                                     WebkitBackgroundClip: "text",
// //                                     WebkitTextFillColor:
// //                                         "transparent",
// //                                 }}
// //                             >
// //                                 sharing.
// //                             </Box>
// //                         </Typography>


// //                         {/* Description */}

// //                         <Typography
// //                             sx={{
// //                                 maxWidth: "570px",
// //                                 fontSize: {
// //                                     xs: "16px",
// //                                     md: "18px",
// //                                 },
// //                                 lineHeight: 1.8,
// //                                 color: "#64748B",
// //                                 mb: 4,
// //                                 animation:
// //                                     "fadeUp 1s ease forwards",
// //                             }}
// //                         >
// //                             Discover thoughtful stories, practical
// //                             knowledge and fresh perspectives — or
// //                             create something worth remembering.
// //                         </Typography>


// //                         {/* Buttons */}

// //                         <Stack
// //                             direction={{
// //                                 xs: "column",
// //                                 sm: "row",
// //                             }}
// //                             spacing={2}
// //                             sx={{
// //                                 animation:
// //                                     "fadeUp 1.1s ease forwards",
// //                             }}
// //                         >

// //                             <Button
// //                                 component={Link}
// //                                 to="/blogs"
// //                                 variant="contained"
// //                                 endIcon={<ArrowForward />}
// //                                 sx={{
// //                                     minWidth: "175px",
// //                                     height: "54px",
// //                                     borderRadius: "15px",
// //                                     textTransform: "none",
// //                                     fontSize: "15px",
// //                                     fontWeight: 700,
// //                                     background:
// //                                         "linear-gradient(135deg,#6366F1,#7C3AED)",
// //                                     boxShadow:
// //                                         "0 14px 30px rgba(99,102,241,0.25)",
// //                                     transition:
// //                                         "all 0.3s ease",

// //                                     "&:hover": {
// //                                         transform:
// //                                             "translateY(-3px)",
// //                                         background:
// //                                             "linear-gradient(135deg,#4F46E5,#6D28D9)",
// //                                         boxShadow:
// //                                             "0 18px 35px rgba(99,102,241,0.30)",
// //                                     },
// //                                 }}
// //                             >
// //                                 Explore Blogs
// //                             </Button>


// //                             <Button
// //                                 component={Link}
// //                                 to="/dashboard"
// //                                 variant="outlined"
// //                                 startIcon={
// //                                     <PlayArrow
// //                                         sx={{
// //                                             fontSize:
// //                                                 "20px !important",
// //                                         }}
// //                                     />
// //                                 }
// //                                 sx={{
// //                                     minWidth: "160px",
// //                                     height: "54px",
// //                                     borderRadius: "15px",
// //                                     textTransform: "none",
// //                                     fontSize: "15px",
// //                                     fontWeight: 700,
// //                                     color: "#475569",
// //                                     borderColor:
// //                                         "#E2E8F0",
// //                                     background:
// //                                         "rgba(255,255,255,0.7)",
// //                                     backdropFilter:
// //                                         "blur(10px)",
// //                                     transition:
// //                                         "all 0.3s ease",

// //                                     "&:hover": {
// //                                         transform:
// //                                             "translateY(-3px)",
// //                                         borderColor:
// //                                             "#C7D2FE",
// //                                         background:
// //                                             "#FFFFFF",
// //                                         boxShadow:
// //                                             "0 12px 30px rgba(15,23,42,0.08)",
// //                                     },
// //                                 }}
// //                             >
// //                                 Start Writing
// //                             </Button>

// //                         </Stack>


// //                         {/* Trust / mini stats */}

// //                         <Stack
// //                             direction="row"
// //                             spacing={3}
// //                             sx={{
// //                                 mt: 5,
// //                                 flexWrap: "wrap",
// //                                 rowGap: 2,
// //                             }}
// //                         >

// //                             <Box>
// //                                 <Typography
// //                                     sx={{
// //                                         fontSize: "20px",
// //                                         fontWeight: 800,
// //                                         color: "#1E293B",
// //                                     }}
// //                                 >
// //                                     100+
// //                                 </Typography>

// //                                 <Typography
// //                                     sx={{
// //                                         fontSize: "12px",
// //                                         color: "#94A3B8",
// //                                     }}
// //                                 >
// //                                     Stories
// //                                 </Typography>
// //                             </Box>


// //                             <Box
// //                                 sx={{
// //                                     width: "1px",
// //                                     background: "#E2E8F0",
// //                                 }}
// //                             />


// //                             <Box>
// //                                 <Typography
// //                                     sx={{
// //                                         fontSize: "20px",
// //                                         fontWeight: 800,
// //                                         color: "#1E293B",
// //                                     }}
// //                                 >
// //                                     Fresh
// //                                 </Typography>

// //                                 <Typography
// //                                     sx={{
// //                                         fontSize: "12px",
// //                                         color: "#94A3B8",
// //                                     }}
// //                                 >
// //                                     Perspectives
// //                                 </Typography>
// //                             </Box>


// //                             <Box
// //                                 sx={{
// //                                     width: "1px",
// //                                     background: "#E2E8F0",
// //                                 }}
// //                             />


// //                             <Box>
// //                                 <Typography
// //                                     sx={{
// //                                         fontSize: "20px",
// //                                         fontWeight: 800,
// //                                         color: "#1E293B",
// //                                     }}
// //                                 >
// //                                     Open
// //                                 </Typography>

// //                                 <Typography
// //                                     sx={{
// //                                         fontSize: "12px",
// //                                         color: "#94A3B8",
// //                                     }}
// //                                 >
// //                                     For everyone
// //                                 </Typography>
// //                             </Box>

// //                         </Stack>

// //                     </Box>


// //                     {/* =================================================
// //                         RIGHT VISUAL
// //                     ================================================== */}

// //                     <Box
// //                         sx={{
// //                             minHeight: {
// //                                 xs: "380px",
// //                                 sm: "470px",
// //                                 md: "570px",
// //                             },
// //                             position: "relative",
// //                             display: "flex",
// //                             alignItems: "center",
// //                             justifyContent: "center",
// //                         }}
// //                     >

// //                         {/* Central glow */}

// //                         <Box
// //                             className="central-glow"
// //                             sx={{
// //                                 position: "absolute",
// //                                 width: {
// //                                     xs: 250,
// //                                     md: 390,
// //                                 },
// //                                 height: {
// //                                     xs: 250,
// //                                     md: 390,
// //                                 },
// //                                 borderRadius: "50%",
// //                                 background:
// //                                     "radial-gradient(circle, rgba(99,102,241,0.18), rgba(139,92,246,0.06), transparent 70%)",
// //                                 filter: "blur(10px)",
// //                             }}
// //                         />


// //                         {/* Main glass card */}

// //                         <Box
// //                             className="main-blog-card"
// //                             sx={{
// //                                 width: {
// //                                     xs: "270px",
// //                                     sm: "320px",
// //                                     md: "360px",
// //                                 },
// //                                 minHeight: "390px",
// //                                 borderRadius: "28px",
// //                                 background:
// //                                     "rgba(255,255,255,0.78)",
// //                                 border:
// //                                     "1px solid rgba(255,255,255,0.9)",
// //                                 backdropFilter:
// //                                     "blur(20px)",
// //                                 WebkitBackdropFilter:
// //                                     "blur(20px)",
// //                                 boxShadow:
// //                                     "0 35px 80px rgba(79,70,229,0.15)",
// //                                 p: 2,
// //                                 position: "relative",
// //                                 zIndex: 3,
// //                                 transform:
// //                                     "rotate(-4deg)",
// //                                 transition:
// //                                     "transform 0.5s ease",
// //                                 animation:
// //                                     "floatCard 5s ease-in-out infinite",

// //                                 "&:hover": {
// //                                     transform:
// //                                         "rotate(0deg) translateY(-8px)",
// //                                 },
// //                             }}
// //                         >

// //                             {/* Image area */}

// //                             <Box
// //                                 sx={{
// //                                     height: "205px",
// //                                     borderRadius: "20px",
// //                                     overflow: "hidden",
// //                                     position: "relative",
// //                                     background: `
// //                                         linear-gradient(
// //                                             135deg,
// //                                             #6366F1,
// //                                             #8B5CF6 50%,
// //                                             #EC4899
// //                                         )
// //                                     `,
// //                                 }}
// //                             >

// //                                 {/* abstract shapes */}

// //                                 <Box
// //                                     sx={{
// //                                         position: "absolute",
// //                                         width: 180,
// //                                         height: 180,
// //                                         borderRadius: "50%",
// //                                         border:
// //                                             "35px solid rgba(255,255,255,0.18)",
// //                                         top: -70,
// //                                         right: -40,
// //                                     }}
// //                                 />

// //                                 <Box
// //                                     sx={{
// //                                         position: "absolute",
// //                                         width: 100,
// //                                         height: 100,
// //                                         borderRadius: "30px",
// //                                         background:
// //                                             "rgba(255,255,255,0.12)",
// //                                         transform:
// //                                             "rotate(35deg)",
// //                                         bottom: -25,
// //                                         left: 25,
// //                                     }}
// //                                 />

// //                                 <Typography
// //                                     sx={{
// //                                         position:
// //                                             "absolute",
// //                                         bottom: 18,
// //                                         left: 20,
// //                                         color: "white",
// //                                         fontWeight: 700,
// //                                         fontSize: "13px",
// //                                         letterSpacing:
// //                                             "1px",
// //                                         textTransform:
// //                                             "uppercase",
// //                                     }}
// //                                 >
// //                                     Featured Story
// //                                 </Typography>

// //                             </Box>


// //                             {/* Card content */}

// //                             <Box sx={{ p: 2 }}>

// //                                 <Typography
// //                                     sx={{
// //                                         fontSize: "11px",
// //                                         color: "#6366F1",
// //                                         fontWeight: 700,
// //                                         textTransform:
// //                                             "uppercase",
// //                                         letterSpacing:
// //                                             "1px",
// //                                         mb: 1,
// //                                     }}
// //                                 >
// //                                     Technology • 5 min read
// //                                 </Typography>


// //                                 <Typography
// //                                     sx={{
// //                                         fontSize: "21px",
// //                                         lineHeight: 1.25,
// //                                         fontWeight: 800,
// //                                         color: "#1E293B",
// //                                         mb: 1.5,
// //                                     }}
// //                                 >
// //                                     The future belongs
// //                                     to curious minds.
// //                                 </Typography>


// //                                 <Typography
// //                                     sx={{
// //                                         fontSize: "13px",
// //                                         lineHeight: 1.6,
// //                                         color: "#64748B",
// //                                     }}
// //                                 >
// //                                     Ideas become powerful
// //                                     when they are shared.
// //                                 </Typography>

// //                             </Box>

// //                         </Box>


// //                         {/* Floating mini card — top */}

// //                         <Box
// //                             sx={{
// //                                 position: "absolute",
// //                                 top: {
// //                                     xs: "10px",
// //                                     md: "35px",
// //                                 },
// //                                 right: {
// //                                     xs: "0px",
// //                                     md: "-10px",
// //                                 },
// //                                 width: "155px",
// //                                 p: 2,
// //                                 borderRadius: "18px",
// //                                 background:
// //                                     "rgba(255,255,255,0.88)",
// //                                 backdropFilter:
// //                                     "blur(15px)",
// //                                 border:
// //                                     "1px solid rgba(255,255,255,0.9)",
// //                                 boxShadow:
// //                                     "0 20px 40px rgba(15,23,42,0.08)",
// //                                 zIndex: 5,
// //                                 animation:
// //                                     "floatSmall 4s ease-in-out infinite",
// //                             }}
// //                         >

// //                             <Typography
// //                                 sx={{
// //                                     fontSize: "10px",
// //                                     color: "#94A3B8",
// //                                     mb: 0.7,
// //                                 }}
// //                             >
// //                                 TRENDING
// //                             </Typography>

// //                             <Typography
// //                                 sx={{
// //                                     fontSize: "14px",
// //                                     fontWeight: 700,
// //                                     color: "#334155",
// //                                     lineHeight: 1.4,
// //                                 }}
// //                             >
// //                                 Building better
// //                                 digital experiences
// //                             </Typography>

// //                         </Box>


// //                         {/* Floating mini card — bottom */}

// //                         <Box
// //                             sx={{
// //                                 position: "absolute",
// //                                 bottom: {
// //                                     xs: "10px",
// //                                     md: "55px",
// //                                 },
// //                                 left: {
// //                                     xs: "0px",
// //                                     md: "-15px",
// //                                 },
// //                                 width: "175px",
// //                                 p: 2,
// //                                 borderRadius: "18px",
// //                                 background:
// //                                     "rgba(255,255,255,0.9)",
// //                                 backdropFilter:
// //                                     "blur(15px)",
// //                                 border:
// //                                     "1px solid rgba(255,255,255,0.9)",
// //                                 boxShadow:
// //                                     "0 20px 40px rgba(15,23,42,0.08)",
// //                                 zIndex: 5,
// //                                 animation:
// //                                     "floatSmallReverse 5s ease-in-out infinite",
// //                             }}
// //                         >

// //                             <Stack
// //                                 direction="row"
// //                                 alignItems="center"
// //                                 spacing={1.2}
// //                             >

// //                                 <Box
// //                                     sx={{
// //                                         width: 35,
// //                                         height: 35,
// //                                         borderRadius: "11px",
// //                                         display: "flex",
// //                                         alignItems: "center",
// //                                         justifyContent:
// //                                             "center",
// //                                         background:
// //                                             "#EEF2FF",
// //                                         color:
// //                                             "#6366F1",
// //                                     }}
// //                                 >
// //                                     <AutoAwesome
// //                                         fontSize="small"
// //                                     />
// //                                 </Box>

// //                                 <Box>

// //                                     <Typography
// //                                         sx={{
// //                                             fontSize:
// //                                                 "12px",
// //                                             fontWeight: 700,
// //                                             color:
// //                                                 "#334155",
// //                                         }}
// //                                     >
// //                                         New ideas
// //                                     </Typography>

// //                                     <Typography
// //                                         sx={{
// //                                             fontSize:
// //                                                 "10px",
// //                                             color:
// //                                                 "#94A3B8",
// //                                         }}
// //                                     >
// //                                         Keep creating
// //                                     </Typography>

// //                                 </Box>

// //                             </Stack>

// //                         </Box>


// //                         {/* Floating dots */}

// //                         <Box
// //                             sx={{
// //                                 position: "absolute",
// //                                 width: 8,
// //                                 height: 8,
// //                                 borderRadius: "50%",
// //                                 background: "#818CF8",
// //                                 top: "20%",
// //                                 left: "12%",
// //                                 boxShadow:
// //                                     "0 0 0 7px rgba(129,140,248,0.10)",
// //                                 animation:
// //                                     "pulseDot 2.5s infinite",
// //                             }}
// //                         />

// //                         <Box
// //                             sx={{
// //                                 position: "absolute",
// //                                 width: 6,
// //                                 height: 6,
// //                                 borderRadius: "50%",
// //                                 background: "#C084FC",
// //                                 bottom: "20%",
// //                                 right: "10%",
// //                                 animation:
// //                                     "pulseDot 3s infinite",
// //                             }}
// //                         />

// //                     </Box>

// //                 </Box>

// //             </Box>


// //             {/* =====================================================
// //                 ANIMATION STYLES
// //             ====================================================== */}

// //             <style>
// //                 {`

// //                 @keyframes floatCard {

// //                     0%, 100% {
// //                         transform: translateY(0px) rotate(-4deg);
// //                     }

// //                     50% {
// //                         transform: translateY(-15px) rotate(-2deg);
// //                     }

// //                 }


// //                 @keyframes floatSmall {

// //                     0%, 100% {
// //                         transform: translateY(0px);
// //                     }

// //                     50% {
// //                         transform: translateY(-12px);
// //                     }

// //                 }


// //                 @keyframes floatSmallReverse {

// //                     0%, 100% {
// //                         transform: translateY(0px);
// //                     }

// //                     50% {
// //                         transform: translateY(10px);
// //                     }

// //                 }


// //                 @keyframes fadeUp {

// //                     from {
// //                         opacity: 0;
// //                         transform: translateY(25px);
// //                     }

// //                     to {
// //                         opacity: 1;
// //                         transform: translateY(0);
// //                     }

// //                 }


// //                 @keyframes pulseDot {

// //                     0%, 100% {
// //                         opacity: 0.5;
// //                         transform: scale(1);
// //                     }

// //                     50% {
// //                         opacity: 1;
// //                         transform: scale(1.5);
// //                     }

// //                 }


// //                 .orb-one {
// //                     animation: moveOrbOne 12s ease-in-out infinite;
// //                 }


// //                 .orb-two {
// //                     animation: moveOrbTwo 15s ease-in-out infinite;
// //                 }


// //                 .orb-three {
// //                     animation: moveOrbThree 10s ease-in-out infinite;
// //                 }


// //                 @keyframes moveOrbOne {

// //                     0%, 100% {
// //                         transform: translate(0, 0);
// //                     }

// //                     50% {
// //                         transform: translate(80px, 50px);
// //                     }

// //                 }


// //                 @keyframes moveOrbTwo {

// //                     0%, 100% {
// //                         transform: translate(0, 0);
// //                     }

// //                     50% {
// //                         transform: translate(-70px, -50px);
// //                     }

// //                 }


// //                 @keyframes moveOrbThree {

// //                     0%, 100% {
// //                         transform: translate(0, 0);
// //                     }

// //                     50% {
// //                         transform: translate(-40px, 60px);
// //                     }

// //                 }


// //                 @media (prefers-reduced-motion: reduce) {

// //                     *,
// //                     *::before,
// //                     *::after {
// //                         animation-duration: 0.01ms !important;
// //                         animation-iteration-count: 1 !important;
// //                     }

// //                 }

// //                 `}
// //             </style>

// //         </Box>
// //     );
// // }

// // export default Home;


// import React, { useEffect, useRef } from "react";
// import {
//   Box,
//   Button,
//   Chip,
//   Container,
//   Typography,
//   Stack,
// } from "@mui/material";
// import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
// import AutoStoriesIcon from "@mui/icons-material/AutoStories";
// import CreateIcon from "@mui/icons-material/Create";

// function Home() {
//   const canvasRef = useRef(null);
//   const visualRef = useRef(null);

//   // =========================
//   // PARTICLE BACKGROUND
//   // =========================
//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext("2d");

//     let width;
//     let height;
//     let animationFrame;

//     const particles = [];

//     const resizeCanvas = () => {
//       width = canvas.width = window.innerWidth;
//       height = canvas.height = window.innerHeight;
//     };

//     resizeCanvas();

//     window.addEventListener("resize", resizeCanvas);

//     // Create particles
//     for (let i = 0; i < 90; i++) {
//       particles.push({
//         x: Math.random() * width,
//         y: Math.random() * height,
//         size: Math.random() * 2 + 0.5,
//         speedX: (Math.random() - 0.5) * 0.25,
//         speedY: (Math.random() - 0.5) * 0.25,
//         opacity: Math.random() * 0.5 + 0.1,
//       });
//     }

//     const animate = () => {
//       ctx.clearRect(0, 0, width, height);

//       particles.forEach((particle) => {
//         particle.x += particle.speedX;
//         particle.y += particle.speedY;

//         if (particle.x < 0) particle.x = width;
//         if (particle.x > width) particle.x = 0;

//         if (particle.y < 0) particle.y = height;
//         if (particle.y > height) particle.y = 0;

//         ctx.beginPath();
//         ctx.arc(
//           particle.x,
//           particle.y,
//           particle.size,
//           0,
//           Math.PI * 2
//         );

//         ctx.fillStyle = `rgba(99, 102, 241, ${particle.opacity})`;
//         ctx.fill();
//       });

//       animationFrame = requestAnimationFrame(animate);
//     };

//     animate();

//     return () => {
//       cancelAnimationFrame(animationFrame);
//       window.removeEventListener("resize", resizeCanvas);
//     };
//   }, []);

//   // =========================
//   // MOUSE PARALLAX
//   // =========================
//   useEffect(() => {
//     const handleMouseMove = (event) => {
//       if (!visualRef.current) return;

//       const x = (event.clientX / window.innerWidth - 0.5) * 2;
//       const y = (event.clientY / window.innerHeight - 0.5) * 2;

//       visualRef.current.style.transform = `
//         perspective(1200px)
//         rotateY(${x * 4}deg)
//         rotateX(${-y * 4}deg)
//       `;
//     };

//     window.addEventListener("mousemove", handleMouseMove);

//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//     };
//   }, []);

//   return (
//     <Box
//       sx={{
//         minHeight: "100vh",
//         position: "relative",
//         overflow: "hidden",
//         background:
//           "linear-gradient(135deg, #f8fafc 0%, #eef2ff 45%, #faf5ff 100%)",
//       }}
//     >
//       {/* =========================
//           BACKGROUND GLOW
//       ========================= */}

//       <Box
//         sx={{
//           position: "absolute",
//           width: 500,
//           height: 500,
//           borderRadius: "50%",
//           background:
//             "radial-gradient(circle, rgba(99,102,241,0.16), transparent 70%)",
//           top: "-180px",
//           left: "-150px",
//           filter: "blur(20px)",
//           animation: "floatGlow 8s ease-in-out infinite",
//         }}
//       />

//       <Box
//         sx={{
//           position: "absolute",
//           width: 550,
//           height: 550,
//           borderRadius: "50%",
//           background:
//             "radial-gradient(circle, rgba(139,92,246,0.13), transparent 70%)",
//           right: "-180px",
//           bottom: "-200px",
//           filter: "blur(25px)",
//           animation: "floatGlowReverse 10s ease-in-out infinite",
//         }}
//       />

//       {/* =========================
//           GRID
//       ========================= */}

//       <Box
//         sx={{
//           position: "absolute",
//           inset: 0,
//           opacity: 0.3,
//           backgroundImage: `
//             linear-gradient(rgba(99,102,241,0.06) 1px, transparent 1px),
//             linear-gradient(90deg, rgba(99,102,241,0.06) 1px, transparent 1px)
//           `,
//           backgroundSize: "55px 55px",
//           maskImage:
//             "linear-gradient(to bottom, black, transparent 80%)",
//         }}
//       />

//       {/* =========================
//           PARTICLES
//       ========================= */}

//       <canvas
//         ref={canvasRef}
//         style={{
//           position: "absolute",
//           inset: 0,
//           pointerEvents: "none",
//         }}
//       />

//       {/* =========================
//           MAIN CONTENT
//       ========================= */}

//       <Container
//         maxWidth="xl"
//         sx={{
//           position: "relative",
//           zIndex: 2,
//           minHeight: "100vh",
//           display: "flex",
//           alignItems: "center",
//           py: { xs: 12, md: 8 },
//         }}
//       >
//         <Box
//           sx={{
//             width: "100%",
//             display: "grid",
//             gridTemplateColumns: {
//               xs: "1fr",
//               md: "1fr 1fr",
//             },
//             alignItems: "center",
//             gap: { xs: 7, md: 4 },
//           }}
//         >
//           {/* =========================
//               LEFT CONTENT
//           ========================= */}

//           <Box
//             sx={{
//               maxWidth: 650,
//               animation: "contentReveal 1s ease forwards",
//             }}
//           >
//             <Chip
//               icon={<AutoStoriesIcon />}
//               label="A place for ideas worth sharing"
//               sx={{
//                 mb: 3,
//                 px: 1,
//                 py: 2.5,
//                 borderRadius: "30px",
//                 fontWeight: 600,
//                 color: "#4f46e5",
//                 background: "rgba(255,255,255,0.75)",
//                 border: "1px solid rgba(99,102,241,0.15)",
//                 backdropFilter: "blur(10px)",
//                 boxShadow: "0 10px 30px rgba(79,70,229,0.08)",
//               }}
//             />

//             <Typography
//               component="h1"
//               sx={{
//                 fontSize: {
//                   xs: "3.2rem",
//                   sm: "4.3rem",
//                   md: "5rem",
//                   lg: "5.8rem",
//                 },
//                 lineHeight: 0.95,
//                 fontWeight: 800,
//                 letterSpacing: "-0.055em",
//                 color: "#111827",
//                 mb: 3,
//               }}
//             >
//               Ideas
//               <br />
//               <Box
//                 component="span"
//                 sx={{
//                   background:
//                     "linear-gradient(90deg, #4f46e5, #7c3aed, #9333ea)",
//                   WebkitBackgroundClip: "text",
//                   WebkitTextFillColor: "transparent",
//                   backgroundSize: "200% auto",
//                   animation: "gradientMove 5s linear infinite",
//                 }}
//               >
//                 worth sharing.
//               </Box>
//             </Typography>

//             <Typography
//               sx={{
//                 fontSize: { xs: "1.05rem", md: "1.18rem" },
//                 lineHeight: 1.8,
//                 color: "#64748b",
//                 maxWidth: 570,
//                 mb: 4,
//               }}
//             >
//               Discover thoughtful stories, practical knowledge and
//               fresh perspectives — or create something worth
//               remembering.
//             </Typography>

//             {/* BUTTONS */}

//             <Stack
//               direction={{ xs: "column", sm: "row" }}
//               spacing={2}
//             >
//               <Button
//                 variant="contained"
//                 size="large"
//                 endIcon={<ArrowForwardIcon />}
//                 sx={{
//                   px: 3.5,
//                   py: 1.7,
//                   borderRadius: "14px",
//                   textTransform: "none",
//                   fontSize: "1rem",
//                   fontWeight: 700,
//                   background:
//                     "linear-gradient(135deg, #4f46e5, #7c3aed)",
//                   boxShadow:
//                     "0 15px 35px rgba(79,70,229,0.25)",
//                   transition: "all 0.3s ease",

//                   "&:hover": {
//                     transform: "translateY(-4px)",
//                     boxShadow:
//                       "0 20px 45px rgba(79,70,229,0.35)",
//                   },
//                 }}
//               >
//                 Explore Blogs
//               </Button>

//               <Button
//                 variant="outlined"
//                 size="large"
//                 startIcon={<CreateIcon />}
//                 sx={{
//                   px: 3.5,
//                   py: 1.7,
//                   borderRadius: "14px",
//                   textTransform: "none",
//                   fontSize: "1rem",
//                   fontWeight: 700,
//                   color: "#4f46e5",
//                   borderColor: "rgba(79,70,229,0.25)",
//                   background: "rgba(255,255,255,0.6)",
//                   backdropFilter: "blur(10px)",

//                   "&:hover": {
//                     borderColor: "#4f46e5",
//                     background: "rgba(255,255,255,0.9)",
//                     transform: "translateY(-4px)",
//                   },

//                   transition: "all 0.3s ease",
//                 }}
//               >
//                 Start Writing
//               </Button>
//             </Stack>

//             {/* SMALL STATS */}

//             <Stack
//               direction="row"
//               spacing={{ xs: 3, sm: 5 }}
//               sx={{
//                 mt: 5,
//                 flexWrap: "wrap",
//                 rowGap: 2,
//               }}
//             >
//               <Box>
//                 <Typography
//                   sx={{
//                     fontSize: "1.5rem",
//                     fontWeight: 800,
//                     color: "#111827",
//                   }}
//                 >
//                   10K+
//                 </Typography>

//                 <Typography
//                   sx={{
//                     fontSize: "0.85rem",
//                     color: "#94a3b8",
//                   }}
//                 >
//                   Ideas shared
//                 </Typography>
//               </Box>

//               <Box>
//                 <Typography
//                   sx={{
//                     fontSize: "1.5rem",
//                     fontWeight: 800,
//                     color: "#111827",
//                   }}
//                 >
//                   2.5K+
//                 </Typography>

//                 <Typography
//                   sx={{
//                     fontSize: "0.85rem",
//                     color: "#94a3b8",
//                   }}
//                 >
//                   Writers
//                 </Typography>
//               </Box>

//               <Box>
//                 <Typography
//                   sx={{
//                     fontSize: "1.5rem",
//                     fontWeight: 800,
//                     color: "#111827",
//                   }}
//                 >
//                   ∞
//                 </Typography>

//                 <Typography
//                   sx={{
//                     fontSize: "0.85rem",
//                     color: "#94a3b8",
//                   }}
//                 >
//                   Possibilities
//                 </Typography>
//               </Box>
//             </Stack>
//           </Box>

//           {/* =========================
//               RIGHT ANIMATION
//           ========================= */}

//           <Box
//             ref={visualRef}
//             sx={{
//               position: "relative",
//               height: { xs: 450, sm: 550, md: 650 },
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               transition: "transform 0.2s ease-out",
//             }}
//           >
//             {/* OUTER ORBIT */}

//             <Box
//               sx={{
//                 position: "absolute",
//                 width: { xs: 280, md: 430 },
//                 height: { xs: 280, md: 430 },
//                 borderRadius: "50%",
//                 border:
//                   "1px solid rgba(99,102,241,0.12)",
//                 animation: "orbit 18s linear infinite",
//               }}
//             />

//             <Box
//               sx={{
//                 position: "absolute",
//                 width: { xs: 360, md: 530 },
//                 height: { xs: 360, md: 530 },
//                 borderRadius: "50%",
//                 border:
//                   "1px dashed rgba(124,58,237,0.12)",
//                 animation: "orbitReverse 25s linear infinite",
//               }}
//             />

//             {/* =========================
//                 GLOW
//             ========================= */}

//             <Box
//               sx={{
//                 position: "absolute",
//                 width: 260,
//                 height: 260,
//                 borderRadius: "50%",
//                 background:
//                   "radial-gradient(circle, rgba(99,102,241,0.25), rgba(124,58,237,0.08), transparent 70%)",
//                 filter: "blur(15px)",
//                 animation: "corePulse 4s ease-in-out infinite",
//               }}
//             />

//             {/* =========================
//                 IDEA CORE
//             ========================= */}

//             <Box
//               sx={{
//                 position: "absolute",
//                 width: 105,
//                 height: 105,
//                 borderRadius: "50%",
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 background:
//                   "linear-gradient(135deg, #6366f1, #8b5cf6)",
//                 boxShadow:
//                   "0 0 80px rgba(99,102,241,0.4), 0 20px 50px rgba(79,70,229,0.2)",
//                 animation: "ideaFloat 4s ease-in-out infinite",
//                 zIndex: 5,
//               }}
//             >
//               <AutoStoriesIcon
//                 sx={{
//                   color: "white",
//                   fontSize: 45,
//                   animation: "iconSpin 8s ease-in-out infinite",
//                 }}
//               />
//             </Box>

//             {/* =========================
//                 SVG THOUGHT PATH
//             ========================= */}

//             <svg
//               viewBox="0 0 600 600"
//               style={{
//                 position: "absolute",
//                 width: "100%",
//                 height: "100%",
//                 overflow: "visible",
//               }}
//             >
//               <defs>
//                 <linearGradient
//                   id="thoughtGradient"
//                   x1="0%"
//                   y1="0%"
//                   x2="100%"
//                   y2="100%"
//                 >
//                   <stop
//                     offset="0%"
//                     stopColor="#6366f1"
//                     stopOpacity="0"
//                   />

//                   <stop
//                     offset="35%"
//                     stopColor="#6366f1"
//                     stopOpacity="0.8"
//                   />

//                   <stop
//                     offset="70%"
//                     stopColor="#8b5cf6"
//                     stopOpacity="0.7"
//                   />

//                   <stop
//                     offset="100%"
//                     stopColor="#a855f7"
//                     stopOpacity="0"
//                   />
//                 </linearGradient>

//                 <filter id="glow">
//                   <feGaussianBlur
//                     stdDeviation="5"
//                     result="blur"
//                   />

//                   <feMerge>
//                     <feMergeNode in="blur" />
//                     <feMergeNode in="SourceGraphic" />
//                   </feMerge>
//                 </filter>
//               </defs>

//               {/* Main thought path */}

//               <path
//                 d="M300 300
//                    C380 250 410 160 500 190
//                    C550 210 535 275 470 300
//                    C400 330 430 400 500 420"
//                 fill="none"
//                 stroke="url(#thoughtGradient)"
//                 strokeWidth="3"
//                 strokeLinecap="round"
//                 filter="url(#glow)"
//                 strokeDasharray="1000"
//                 strokeDashoffset="1000"
//                 style={{
//                   animation:
//                     "drawThought 5s ease-in-out infinite",
//                 }}
//               />

//               {/* Secondary path */}

//               <path
//                 d="M300 300
//                    C220 245 170 190 110 235
//                    C70 265 110 325 175 320"
//                 fill="none"
//                 stroke="rgba(99,102,241,0.2)"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeDasharray="8 12"
//                 style={{
//                   animation:
//                     "pathMove 8s linear infinite",
//                 }}
//               />

//               {/* Floating dots */}

//               <circle
//                 cx="500"
//                 cy="190"
//                 r="6"
//                 fill="#6366f1"
//                 style={{
//                   animation:
//                     "dotPulse 2s ease-in-out infinite",
//                 }}
//               />

//               <circle
//                 cx="470"
//                 cy="300"
//                 r="5"
//                 fill="#8b5cf6"
//                 style={{
//                   animation:
//                     "dotPulse 2.5s ease-in-out infinite",
//                 }}
//               />

//               <circle
//                 cx="500"
//                 cy="420"
//                 r="6"
//                 fill="#a855f7"
//                 style={{
//                   animation:
//                     "dotPulse 3s ease-in-out infinite",
//                 }}
//               />
//             </svg>

//             {/* =========================
//                 ARTICLE CARD
//             ========================= */}

//             <Box
//               sx={{
//                 position: "absolute",
//                 width: { xs: 250, sm: 290, md: 320 },
//                 minHeight: 200,
//                 right: { xs: "3%", md: "2%" },
//                 top: { xs: "8%", md: "12%" },
//                 borderRadius: "24px",
//                 padding: 2.5,
//                 background:
//                   "rgba(255,255,255,0.72)",
//                 border:
//                   "1px solid rgba(255,255,255,0.9)",
//                 backdropFilter: "blur(20px)",
//                 boxShadow:
//                   "0 30px 70px rgba(79,70,229,0.13)",
//                 transform: "rotate(5deg)",
//                 animation:
//                   "cardAppear 10s ease-in-out infinite",
//                 zIndex: 4,
//               }}
//             >
//               <Stack spacing={1.5}>
//                 <Box
//                   sx={{
//                     width: 45,
//                     height: 6,
//                     borderRadius: 10,
//                     background:
//                       "linear-gradient(90deg, #6366f1, #8b5cf6)",
//                   }}
//                 />

//                 <Typography
//                   sx={{
//                     fontWeight: 800,
//                     color: "#1e293b",
//                     fontSize: "1.15rem",
//                   }}
//                 >
//                   The power of an idea
//                 </Typography>

//                 <Typography
//                   sx={{
//                     color: "#64748b",
//                     fontSize: "0.85rem",
//                     lineHeight: 1.6,
//                   }}
//                 >
//                   Every meaningful story starts
//                   with a simple thought...
//                 </Typography>

//                 {/* Fake writing lines */}

//                 <Stack spacing={1}>
//                   <Box
//                     sx={{
//                       height: 5,
//                       width: "100%",
//                       borderRadius: 5,
//                       background:
//                         "rgba(99,102,241,0.12)",
//                     }}
//                   />

//                   <Box
//                     sx={{
//                       height: 5,
//                       width: "82%",
//                       borderRadius: 5,
//                       background:
//                         "rgba(99,102,241,0.12)",
//                     }}
//                   />

//                   <Box
//                     sx={{
//                       height: 5,
//                       width: "65%",
//                       borderRadius: 5,
//                       background:
//                         "rgba(99,102,241,0.12)",
//                     }}
//                   />
//                 </Stack>
//               </Stack>
//             </Box>

//             {/* =========================
//                 FLOATING MINI CARD
//             ========================= */}

//             <Box
//               sx={{
//                 position: "absolute",
//                 left: { xs: "2%", md: "4%" },
//                 bottom: { xs: "10%", md: "15%" },
//                 px: 2,
//                 py: 1.5,
//                 borderRadius: "16px",
//                 background:
//                   "rgba(255,255,255,0.8)",
//                 border:
//                   "1px solid rgba(255,255,255,0.9)",
//                 backdropFilter: "blur(15px)",
//                 boxShadow:
//                   "0 20px 50px rgba(15,23,42,0.08)",
//                 animation:
//                   "miniFloat 5s ease-in-out infinite",
//                 zIndex: 6,
//               }}
//             >
//               <Stack
//                 direction="row"
//                 alignItems="center"
//                 spacing={1}
//               >
//                 <Box
//                   sx={{
//                     width: 10,
//                     height: 10,
//                     borderRadius: "50%",
//                     background: "#8b5cf6",
//                     boxShadow:
//                       "0 0 15px rgba(139,92,246,0.5)",
//                   }}
//                 />

//                 <Typography
//                   sx={{
//                     fontSize: "0.8rem",
//                     fontWeight: 700,
//                     color: "#475569",
//                   }}
//                 >
//                   Your next story starts here.
//                 </Typography>
//               </Stack>
//             </Box>

//             {/* =========================
//                 SMALL ORBITING DOTS
//             ========================= */}

//             <Box
//               sx={{
//                 position: "absolute",
//                 width: 12,
//                 height: 12,
//                 borderRadius: "50%",
//                 background: "#6366f1",
//                 top: "22%",
//                 left: "20%",
//                 boxShadow:
//                   "0 0 20px rgba(99,102,241,0.5)",
//                 animation:
//                   "smallOrbit 6s linear infinite",
//               }}
//             />

//             <Box
//               sx={{
//                 position: "absolute",
//                 width: 8,
//                 height: 8,
//                 borderRadius: "50%",
//                 background: "#a855f7",
//                 right: "18%",
//                 bottom: "25%",
//                 boxShadow:
//                   "0 0 18px rgba(168,85,247,0.5)",
//                 animation:
//                   "smallOrbitReverse 7s linear infinite",
//               }}
//             />
//           </Box>
//         </Box>
//       </Container>

//       {/* =========================
//           CSS ANIMATIONS
//       ========================= */}

//       <style>
//         {`
//           @keyframes contentReveal {
//             from {
//               opacity: 0;
//               transform: translateY(35px);
//             }

//             to {
//               opacity: 1;
//               transform: translateY(0);
//             }
//           }

//           @keyframes gradientMove {
//             0% {
//               background-position: 0% 50%;
//             }

//             50% {
//               background-position: 100% 50%;
//             }

//             100% {
//               background-position: 0% 50%;
//             }
//           }

//           @keyframes floatGlow {
//             0%, 100% {
//               transform: translate(0, 0) scale(1);
//             }

//             50% {
//               transform: translate(80px, 60px) scale(1.15);
//             }
//           }

//           @keyframes floatGlowReverse {
//             0%, 100% {
//               transform: translate(0, 0) scale(1);
//             }

//             50% {
//               transform: translate(-70px, -60px) scale(1.12);
//             }
//           }

//           @keyframes orbit {
//             from {
//               transform: rotate(0deg);
//             }

//             to {
//               transform: rotate(360deg);
//             }
//           }

//           @keyframes orbitReverse {
//             from {
//               transform: rotate(360deg);
//             }

//             to {
//               transform: rotate(0deg);
//             }
//           }

//           @keyframes corePulse {
//             0%, 100% {
//               transform: scale(0.9);
//               opacity: 0.65;
//             }

//             50% {
//               transform: scale(1.2);
//               opacity: 1;
//             }
//           }

//           @keyframes ideaFloat {
//             0%, 100% {
//               transform: translateY(0) scale(1);
//             }

//             50% {
//               transform: translateY(-15px) scale(1.05);
//             }
//           }

//           @keyframes iconSpin {
//             0%, 70%, 100% {
//               transform: rotate(0deg);
//             }

//             85% {
//               transform: rotate(12deg);
//             }
//           }

//           @keyframes drawThought {
//             0% {
//               stroke-dashoffset: 1000;
//               opacity: 0;
//             }

//             10% {
//               opacity: 1;
//             }

//             45% {
//               stroke-dashoffset: 0;
//               opacity: 1;
//             }

//             70% {
//               stroke-dashoffset: 0;
//               opacity: 0.7;
//             }

//             100% {
//               stroke-dashoffset: -1000;
//               opacity: 0;
//             }
//           }

//           @keyframes pathMove {
//             from {
//               stroke-dashoffset: 0;
//             }

//             to {
//               stroke-dashoffset: -200;
//             }
//           }

//           @keyframes dotPulse {
//             0%, 100% {
//               transform: scale(1);
//               opacity: 0.5;
//             }

//             50% {
//               transform: scale(1.8);
//               opacity: 1;
//             }
//           }

//           @keyframes cardAppear {
//             0%, 12% {
//               opacity: 0;
//               transform: translateY(35px) rotate(8deg) scale(0.8);
//               filter: blur(8px);
//             }

//             25% {
//               opacity: 1;
//               transform: translateY(0) rotate(5deg) scale(1);
//               filter: blur(0);
//             }

//             55% {
//               opacity: 1;
//               transform: translateY(-10px) rotate(3deg) scale(1.02);
//             }

//             75% {
//               opacity: 1;
//               transform: translateY(5px) rotate(5deg) scale(1);
//             }

//             90%, 100% {
//               opacity: 0;
//               transform: translateY(-25px) rotate(10deg) scale(0.9);
//               filter: blur(6px);
//             }
//           }

//           @keyframes miniFloat {
//             0%, 100% {
//               transform: translateY(0) rotate(-2deg);
//             }

//             50% {
//               transform: translateY(-15px) rotate(2deg);
//             }
//           }

//           @keyframes smallOrbit {
//             0% {
//               transform: translate(0, 0);
//             }

//             25% {
//               transform: translate(35px, -20px);
//             }

//             50% {
//               transform: translate(60px, 20px);
//             }

//             75% {
//               transform: translate(25px, 50px);
//             }

//             100% {
//               transform: translate(0, 0);
//             }
//           }

//           @keyframes smallOrbitReverse {
//             0% {
//               transform: translate(0, 0);
//             }

//             25% {
//               transform: translate(-40px, 25px);
//             }

//             50% {
//               transform: translate(-65px, -10px);
//             }

//             75% {
//               transform: translate(-25px, -50px);
//             }

//             100% {
//               transform: translate(0, 0);
//             }
//           }

//           @media (prefers-reduced-motion: reduce) {
//             *,
//             *::before,
//             *::after {
//               animation-duration: 0.01ms !important;
//               animation-iteration-count: 1 !important;
//               scroll-behavior: auto !important;
//             }
//           }
//         `}
//       </style>
//     </Box>
//   );
// }

// export default Home;





import React, { useEffect, useRef, useState } from "react";

import {
  Box,
  Container,
  Stack,
  Chip,
  Typography,
  Button,
  Paper,
  IconButton,
  Tooltip,
  Avatar,
  TextField
} from "@mui/material";

import {
  Sparkles,
  ArrowRight,
  Feather,
  FileText,
  Users,
  TrendingUp,
  Clock,
  Eye,
  PenTool,
  Pause,
  Play,
  Tag,
  Heart,
  Bookmark,
  Flame,
  Send,
  CheckCircle2
} from "lucide-react";

import { TAGLINES, CATEGORIES, FEATURED_POSTS } from "../data/blogData";


function Home({
  isDarkMode,
  textColor,
  textMuted,
  cardBg,
  cardBorder,
  setCurrentTab,
  activeCategory,
  setActiveCategory,
  activePostIndex,
  setActivePostIndex,
  bookmarked,
  setBookmarked,
  liked,
  setLiked,
  likeCounts,
  setLikeCounts
}) {
  const visualRef = useRef(null);

  const [taglineIndex, setTaglineIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isTypingCode, setIsTypingCode] = useState(true);
  const [codeTypedText, setCodeTypedText] = useState("");
  const [wordCount, setWordCount] = useState(340);
  const [activeTags, setActiveTags] = useState([
    "#ideas",
    "#tech",
    "#design",
    "#future"
  ]);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    const currentTagline = TAGLINES[taglineIndex];
    const speed = isDeleting ? 35 : 75;

    const timeout = setTimeout(() => {
      if (!isDeleting && displayText === currentTagline) {
        setTimeout(() => setIsDeleting(true), 2200);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setTaglineIndex(
          (prev) => (prev + 1) % TAGLINES.length
        );
      } else {
        setDisplayText(
          isDeleting
            ? currentTagline.substring(
                0,
                displayText.length - 1
              )
            : currentTagline.substring(
                0,
                displayText.length + 1
              )
        );
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, taglineIndex]);

  useEffect(() => {
    if (!isTypingCode) return;

    const fullSnippet =
      FEATURED_POSTS[activePostIndex].draftSnippet;

    let charIndex = 0;

    setCodeTypedText("");

    const interval = setInterval(() => {
      if (charIndex <= fullSnippet.length) {
        setCodeTypedText(
          fullSnippet.slice(0, charIndex)
        );

        setWordCount(
          320 + Math.floor(charIndex / 3)
        );

        charIndex++;
      } else {
        clearInterval(interval);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [activePostIndex, isTypingCode]);

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (!visualRef.current) return;

      const x =
        (event.clientX / window.innerWidth - 0.5) * 2;

      const y =
        (event.clientY / window.innerHeight - 0.5) * 2;

      visualRef.current.style.transform = `
        perspective(1200px)
        rotateY(${x * 6}deg)
        rotateX(${-y * 6}deg)
        translateZ(10px)
      `;
    };

    window.addEventListener(
      "mousemove",
      handleMouseMove
    );

    return () =>
      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );
  }, []);

  const toggleBookmark = (id) => {
    setBookmarked((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const toggleLike = (id) => {
    setLiked((prev) => {
      const isCurrentlyLiked = prev[id];

      setLikeCounts((cPrev) => ({
        ...cPrev,
        [id]: isCurrentlyLiked
          ? cPrev[id] - 1
          : cPrev[id] + 1
      }));

      return {
        ...prev,
        [id]: !isCurrentlyLiked
      };
    });
  };

  const handleAddTag = () => {
    const sampleTags = [
      "#creativity",
      "#publishing",
      "#thoughts",
      "#philosophy",
      "#code",
      "#deepwork"
    ];

    const randomTag =
      sampleTags[
        Math.floor(
          Math.random() * sampleTags.length
        )
      ];

    if (!activeTags.includes(randomTag)) {
      setActiveTags((prev) => [
        ...prev,
        randomTag
      ]);
    }
  };

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (newsletterEmail.trim()) {
      setSubscribed(true);

      setTimeout(
        () => setSubscribed(false),
        4000
      );

      setNewsletterEmail("");
    }
  };

  const activePost =
    FEATURED_POSTS[activePostIndex];

  return (
    <>
      <Container
        maxWidth="xl"
        sx={{
          position: "relative",
          zIndex: 5,
          minHeight: "calc(100vh - 110px)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          py: { xs: 4, md: 6 }
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              lg: "1.1fr 0.9fr"
            },
            gap: { xs: 5, lg: 8 },
            alignItems: "center"
          }}
        >

          {/* Left Hero Column */}

          <Box
            sx={{
              animation:
                "contentReveal 0.9s ease forwards"
            }}
          >
            <Chip
              icon={
                <Sparkles
                  size={16}
                  color="#7c3aed"
                />
              }
              label="The Premium Writing & Reading Hub"
              sx={{
                mb: 3,
                px: 1.5,
                py: 2.2,
                borderRadius: "30px",
                fontWeight: 600,
                fontSize: "0.88rem",
                color: isDarkMode
                  ? "#c084fc"
                  : "#6d28d9",
                background: isDarkMode
                  ? "rgba(168, 85, 247, 0.14)"
                  : "rgba(124, 58, 237, 0.08)",
                border: isDarkMode
                  ? "1px solid rgba(168, 85, 247, 0.3)"
                  : "1px solid rgba(124, 58, 237, 0.2)",
                backdropFilter: "blur(10px)"
              }}
            />

            <Typography
              component="h1"
              sx={{
                fontSize: {
                  xs: "2.8rem",
                  sm: "3.8rem",
                  md: "4.5rem",
                  lg: "5rem"
                },
                lineHeight: 1.08,
                fontWeight: 900,
                letterSpacing: "-0.04em",
                color: textColor,
                mb: 2.5
              }}
            >
              Ideas <br />

              <Box
                component="span"
                sx={{
                  background:
                    "linear-gradient(90deg, #4f46e5, #7c3aed, #9333ea)",
                  WebkitBackgroundClip:
                    "text",
                  WebkitTextFillColor:
                    "transparent",
                  display: "inline-block"
                }}
              >
                {displayText}
              </Box>

              <Box
                component="span"
                sx={{
                  display: "inline-block",
                  width: "4px",
                  height: {
                    xs: "2.5rem",
                    sm: "3.5rem",
                    md: "4.2rem"
                  },
                  backgroundColor: "#4f46e5",
                  ml: 1,
                  animation:
                    "blink 1s step-end infinite",
                  verticalAlign: "middle"
                }}
              />
            </Typography>

            <Typography
              sx={{
                fontSize: {
                  xs: "1.05rem",
                  md: "1.18rem"
                },
                lineHeight: 1.8,
                color: textMuted,
                maxWidth: 580,
                mb: 4
              }}
            >
              Immerse yourself in deep-dive essays,
              tech breakthroughs, and creative
              inspirations authored by independent
              thinkers and creators around the world.
            </Typography>

            {/* Category Filter Chips */}

            <Box sx={{ mb: 4 }}>
              <Typography
                variant="subtitle2"
                sx={{
                  color: textMuted,
                  mb: 1.5,
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  fontSize: "0.75rem"
                }}
              >
                Filter by Topic
              </Typography>

              <Stack
                direction="row"
                spacing={1}
                flexWrap="wrap"
                useFlexGap
                sx={{ gap: 1 }}
              >
                {CATEGORIES.map((cat) => (
                  <Chip
                    key={cat}
                    label={cat}
                    onClick={() =>
                      setActiveCategory(cat)
                    }
                    sx={{
                      borderRadius: "10px",
                      fontWeight: 600,
                      cursor: "pointer",
                      fontSize: "0.82rem",
                      transition:
                        "all 0.2s ease",

                      background:
                        activeCategory === cat
                          ? "linear-gradient(135deg, #4f46e5, #7c3aed)"
                          : isDarkMode
                          ? "rgba(255, 255, 255, 0.05)"
                          : "rgba(255, 255, 255, 0.7)",

                      color:
                        activeCategory === cat
                          ? "#fff"
                          : textMuted,

                      border:
                        activeCategory === cat
                          ? "none"
                          : `1px solid ${cardBorder}`,

                      boxShadow:
                        activeCategory === cat
                          ? "0 4px 14px rgba(79,70,229,0.3)"
                          : "none",

                      "&:hover": {
                        background:
                          activeCategory === cat
                            ? "linear-gradient(135deg, #4338ca, #6d28d9)"
                            : isDarkMode
                            ? "rgba(255, 255, 255, 0.1)"
                            : "#ffffff",

                        color:
                          activeCategory === cat
                            ? "#fff"
                            : textColor
                      }
                    }}
                  />
                ))}
              </Stack>
            </Box>

            {/* CTA Action Buttons */}

            <Stack
              direction={{
                xs: "column",
                sm: "row"
              }}
              spacing={2.5}
              sx={{ mb: 6 }}
            >
              <Button
                variant="contained"
                size="large"
                onClick={() =>
                  setCurrentTab("articles")
                }
                endIcon={
                  <ArrowRight size={20} />
                }
                sx={{
                  px: 4,
                  py: 1.8,
                  borderRadius: "14px",
                  textTransform: "none",
                  fontSize: "1.05rem",
                  fontWeight: 700,
                  background:
                    "linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)",
                  boxShadow:
                    "0 14px 30px rgba(79,70,229,0.3)",
                  transition:
                    "all 0.3s ease",

                  "&:hover": {
                    transform:
                      "translateY(-3px)",
                    boxShadow:
                      "0 18px 40px rgba(79,70,229,0.45)"
                  }
                }}
              >
                Start Exploring
              </Button>

              <Button
                variant="outlined"
                size="large"
                onClick={() =>
                  setCurrentTab("write")
                }
                startIcon={
                  <Feather size={18} />
                }
                sx={{
                  px: 4,
                  py: 1.8,
                  borderRadius: "14px",
                  textTransform: "none",
                  fontSize: "1.05rem",
                  fontWeight: 700,
                  color: textColor,
                  borderColor: cardBorder,
                  background: isDarkMode
                    ? "rgba(255, 255, 255, 0.04)"
                    : "rgba(255, 255, 255, 0.7)",
                  backdropFilter: "blur(10px)",
                  boxShadow:
                    "0 4px 15px rgba(0,0,0,0.02)",

                  "&:hover": {
                    borderColor: "#4f46e5",
                    background: isDarkMode
                      ? "rgba(255, 255, 255, 0.08)"
                      : "#ffffff",
                    transform:
                      "translateY(-3px)"
                  },

                  transition:
                    "all 0.3s ease"
                }}
              >
                Become an Author
              </Button>
            </Stack>

            {/* Platform Stats Row */}

            <Stack
              direction="row"
              spacing={{
                xs: 3,
                sm: 6
              }}
              sx={{
                pt: 3,
                borderTop:
                  `1px solid ${cardBorder}`,
                flexWrap: "wrap",
                rowGap: 2
              }}
            >
              <Box>
                <Stack
                  direction="row"
                  alignItems="center"
                  spacing={1}
                >
                  <FileText
                    size={18}
                    color="#4f46e5"
                  />

                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 800,
                      color: textColor
                    }}
                  >
                    12K+
                  </Typography>
                </Stack>

                <Typography
                  variant="caption"
                  sx={{
                    color: textMuted,
                    fontWeight: 500
                  }}
                >
                  Curated Articles
                </Typography>
              </Box>

              <Box>
                <Stack
                  direction="row"
                  alignItems="center"
                  spacing={1}
                >
                  <Users
                    size={18}
                    color="#7c3aed"
                  />

                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 800,
                      color: textColor
                    }}
                  >
                    3.2K+
                  </Typography>
                </Stack>

                <Typography
                  variant="caption"
                  sx={{
                    color: textMuted,
                    fontWeight: 500
                  }}
                >
                  Active Writers
                </Typography>
              </Box>

              <Box>
                <Stack
                  direction="row"
                  alignItems="center"
                  spacing={1}
                >
                  <TrendingUp
                    size={18}
                    color="#10b981"
                  />

                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 800,
                      color: textColor
                    }}
                  >
                    650K+
                  </Typography>
                </Stack>

                <Typography
                  variant="caption"
                  sx={{
                    color: textMuted,
                    fontWeight: 500
                  }}
                >
                  Monthly Readers
                </Typography>
              </Box>
            </Stack>
          </Box>

          {/* Right Featured Preview Card */}

          <Box
            ref={visualRef}
            sx={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              minHeight: {
                xs: 480,
                md: 560
              },
              transition:
                "transform 0.15s ease-out"
            }}
          >
            <Box
              sx={{
                position: "absolute",
                width: {
                  xs: 320,
                  md: 450
                },
                height: {
                  xs: 320,
                  md: 450
                },
                borderRadius: "50%",
                border:
                  "1px solid rgba(79,70,229,0.18)",
                animation:
                  "orbit 26s linear infinite"
              }}
            />

            <Box
              sx={{
                position: "absolute",
                width: {
                  xs: 380,
                  md: 540
                },
                height: {
                  xs: 380,
                  md: 540
                },
                borderRadius: "50%",
                border:
                  "1px dashed rgba(124,58,237,0.18)",
                animation:
                  "orbitReverse 32s linear infinite"
              }}
            />

            {/* Post Switcher Dots */}

            <Stack
              direction="row"
              spacing={1}
              sx={{
                position: "absolute",
                top: 0,
                right: "6%",
                zIndex: 10,
                background: isDarkMode
                  ? "rgba(15, 23, 42, 0.8)"
                  : "rgba(255, 255, 255, 0.9)",
                p: 0.6,
                borderRadius: "20px",
                border:
                  `1px solid ${cardBorder}`,
                backdropFilter: "blur(12px)",
                boxShadow:
                  "0 4px 15px rgba(0,0,0,0.05)"
              }}
            >
              {FEATURED_POSTS.map(
                (_, idx) => (
                  <Button
                    key={idx}
                    size="small"
                    onClick={() =>
                      setActivePostIndex(idx)
                    }
                    sx={{
                      minWidth: 32,
                      height: 28,
                      borderRadius: "12px",
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      color:
                        activePostIndex === idx
                          ? "#fff"
                          : textMuted,

                      background:
                        activePostIndex === idx
                          ? "linear-gradient(135deg, #4f46e5, #7c3aed)"
                          : "transparent"
                    }}
                  >
                    0{idx + 1}
                  </Button>
                )
              )}
            </Stack>

            {/* Main Interactive Card */}

            <Paper
              elevation={0}
              sx={{
                position: "relative",
                width: {
                  xs: "100%",
                  sm: 420,
                  md: 450
                },
                p: 3.5,
                borderRadius: "28px",
                background: cardBg,
                backdropFilter: "blur(25px)",
                border:
                  `1px solid ${cardBorder}`,

                boxShadow: isDarkMode
                  ? "0 25px 60px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1)"
                  : "0 20px 50px rgba(79, 70, 229, 0.08), inset 0 1px 0 rgba(255,255,255,0.9)",

                zIndex: 4,
                transition:
                  "all 0.4s ease"
              }}
            >
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                sx={{ mb: 2 }}
              >
                <Chip
                  label={activePost.category}
                  size="small"
                  sx={{
                    fontWeight: 700,
                    fontSize: "0.75rem",
                    color: "#4f46e5",
                    background:
                      "rgba(79, 70, 229, 0.1)",
                    border:
                      "1px solid rgba(79, 70, 229, 0.2)"
                  }}
                />

                <Stack
                  direction="row"
                  alignItems="center"
                  spacing={1}
                  sx={{
                    color: textMuted,
                    fontSize: "0.8rem"
                  }}
                >
                  <Clock size={14} />

                  <Typography variant="caption">
                    {activePost.readTime}
                  </Typography>

                  <Typography variant="caption">
                    •
                  </Typography>

                  <Eye size={14} />

                  <Typography variant="caption">
                    {activePost.views}
                  </Typography>
                </Stack>
              </Stack>

              <Typography
                variant="h6"
                sx={{
                  fontWeight: 800,
                  color: textColor,
                  mb: 1.5,
                  lineHeight: 1.35
                }}
              >
                {activePost.title}
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  color: textMuted,
                  mb: 2.5,
                  lineHeight: 1.6
                }}
              >
                {activePost.excerpt}
              </Typography>

              {/* Typewriter snippet preview */}

              <Box
                sx={{
                  mb: 3,
                  p: 2,
                  borderRadius: "16px",
                  background: isDarkMode
                    ? "rgba(15, 23, 42, 0.9)"
                    : "#0f172a",
                  border:
                    "1px solid rgba(79, 70, 229, 0.2)",
                  fontFamily:
                    "'Fira Code', monospace, sans-serif",
                  fontSize: "0.78rem",
                  color: "#a7f3d0",
                  position: "relative"
                }}
              >
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  sx={{ mb: 1 }}
                >
                  <Stack
                    direction="row"
                    alignItems="center"
                    spacing={1}
                  >
                    <PenTool
                      size={14}
                      color="#818cf8"
                    />

                    <Typography
                      variant="caption"
                      sx={{
                        color: "#818cf8",
                        fontWeight: 700
                      }}
                    >
                      Live Draft Counter (
                      {wordCount} words)
                    </Typography>
                  </Stack>

                  <IconButton
                    size="small"
                    onClick={() =>
                      setIsTypingCode(
                        (prev) => !prev
                      )
                    }
                    sx={{
                      color: "#94a3b8"
                    }}
                  >
                    {isTypingCode ? (
                      <Pause size={14} />
                    ) : (
                      <Play size={14} />
                    )}
                  </IconButton>
                </Stack>

                <Box
                  component="pre"
                  sx={{
                    margin: 0,
                    whiteSpace: "pre-wrap",
                    overflowX: "auto"
                  }}
                >
                  {codeTypedText}

                  <Box
                    component="span"
                    sx={{
                      animation:
                        "blink 1s infinite"
                    }}
                  >
                    |
                  </Box>
                </Box>
              </Box>

              <Stack
                direction="row"
                spacing={0.8}
                alignItems="center"
                flexWrap="wrap"
                sx={{
                  mb: 3,
                  gap: 0.5
                }}
              >
                {activeTags.map((tag) => (
                  <Chip
                    key={tag}
                    label={tag}
                    size="small"
                    sx={{
                      height: 24,
                      fontSize: "0.72rem",
                      background:
                        "rgba(124, 58, 237, 0.1)",
                      color: "#7c3aed",
                      border:
                        "1px solid rgba(124, 58, 237, 0.2)"
                    }}
                  />
                ))}

                <IconButton
                  size="small"
                  onClick={handleAddTag}
                  sx={{
                    width: 24,
                    height: 24,
                    background:
                      "rgba(79, 70, 229, 0.1)",
                    color: "#4f46e5",

                    "&:hover": {
                      background: "#4f46e5",
                      color: "#fff"
                    }
                  }}
                >
                  <Tag size={12} />
                </IconButton>
              </Stack>

              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                sx={{
                  pt: 2,
                  borderTop:
                    `1px solid ${cardBorder}`
                }}
              >
                <Stack
                  direction="row"
                  alignItems="center"
                  spacing={1.5}
                >
                  <Avatar
                    src={
                      activePost.author.avatar
                    }
                    alt={
                      activePost.author.name
                    }
                    sx={{
                      width: 38,
                      height: 38,
                      border:
                        "2px solid #4f46e5"
                    }}
                  />

                  <Box>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        fontWeight: 700,
                        color: textColor,
                        fontSize: "0.85rem",
                        lineHeight: 1.1
                      }}
                    >
                      {activePost.author.name}
                    </Typography>

                    <Typography
                      variant="caption"
                      sx={{
                        color: textMuted
                      }}
                    >
                      {activePost.author.role}
                    </Typography>
                  </Box>
                </Stack>

                <Stack
                  direction="row"
                  spacing={0.5}
                >
                  <Tooltip title="Like story">
                    <IconButton
                      size="small"
                      onClick={() =>
                        toggleLike(
                          activePost.id
                        )
                      }
                      sx={{
                        color: liked[
                          activePost.id
                        ]
                          ? "#ef4444"
                          : textMuted
                      }}
                    >
                      <Heart
                        size={18}
                        fill={
                          liked[
                            activePost.id
                          ]
                            ? "#ef4444"
                            : "none"
                        }
                      />
                    </IconButton>
                  </Tooltip>

                  <Tooltip title="Save story">
                    <IconButton
                      size="small"
                      onClick={() =>
                        toggleBookmark(
                          activePost.id
                        )
                      }
                      sx={{
                        color: bookmarked[
                          activePost.id
                        ]
                          ? "#4f46e5"
                          : textMuted
                      }}
                    >
                      <Bookmark
                        size={18}
                        fill={
                          bookmarked[
                            activePost.id
                          ]
                            ? "#4f46e5"
                            : "none"
                        }
                      />
                    </IconButton>
                  </Tooltip>
                </Stack>
              </Stack>
            </Paper>

            {/* Activity floating badge */}

            <Paper
              elevation={0}
              sx={{
                position: "absolute",
                left: {
                  xs: "-2%",
                  md: "-5%"
                },
                bottom: {
                  xs: "2%",
                  md: "5%"
                },
                px: 2.2,
                py: 1.6,
                borderRadius: "18px",
                background: cardBg,
                backdropFilter: "blur(18px)",
                border:
                  `1px solid ${cardBorder}`,
                boxShadow:
                  "0 15px 35px rgba(0,0,0,0.06)",
                animation:
                  "miniFloat 6s ease-in-out infinite",
                zIndex: 6
              }}
            >
              <Stack
                direction="row"
                alignItems="center"
                spacing={1.5}
              >
                <Box
                  sx={{
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    background: "#10b981",
                    boxShadow:
                      "0 0 10px #10b981"
                  }}
                />

                <Box>
                  <Stack
                    direction="row"
                    alignItems="center"
                    spacing={0.5}
                  >
                    <Flame
                      size={14}
                      color="#4f46e5"
                    />

                    <Typography
                      variant="caption"
                      sx={{
                        fontWeight: 700,
                        color: textColor,
                        display: "block"
                      }}
                    >
                      Community Resonances
                    </Typography>
                  </Stack>

                  <Typography
                    variant="caption"
                    sx={{
                      color: textMuted,
                      fontSize: "0.72rem"
                    }}
                  >
                    {
                      likeCounts[
                        activePost.id
                      ]
                    }{" "}
                    readers loved this article
                  </Typography>
                </Box>
              </Stack>
            </Paper>
          </Box>
        </Box>
      </Container>

      {/* Quick Newsletter Banner */}

      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          zIndex: 10,
          py: {
            xs: 6,
            md: 8
          }
        }}
      >
        <Paper
          elevation={0}
          sx={{
            p: {
              xs: 4,
              md: 6
            },
            borderRadius: "32px",

            background: isDarkMode
              ? "linear-gradient(135deg, rgba(30,27,75,0.8), rgba(17,24,39,0.9))"
              : "linear-gradient(135deg, #ffffff, #f1f5f9)",

            border:
              `1px solid ${cardBorder}`,

            boxShadow:
              "0 20px 50px rgba(79, 70, 229, 0.08)",

            textAlign: "center",
            position: "relative",
            overflow: "hidden"
          }}
        >
          <Stack
            spacing={2}
            alignItems="center"
            sx={{
              maxWidth: 600,
              mx: "auto"
            }}
          >
            <Box
              sx={{
                width: 50,
                height: 50,
                borderRadius: "16px",
                background:
                  "rgba(79, 70, 229, 0.1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mb: 1
              }}
            >
              <Send
                size={24}
                color="#4f46e5"
              />
            </Box>

            <Typography
              variant="h4"
              sx={{
                fontWeight: 800,
                color: textColor
              }}
            >
              Stay Inspired Weekly
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: textMuted,
                lineHeight: 1.6
              }}
            >
              Get handpicked essays, deep dives
              into AI and technology, and curated
              creative wisdom delivered directly to
              your inbox.
            </Typography>

            <Box
              component="form"
              onSubmit={handleSubscribe}
              sx={{
                width: "100%",
                mt: 2
              }}
            >
              <Stack
                direction={{
                  xs: "column",
                  sm: "row"
                }}
                spacing={1.5}
                sx={{ width: "100%" }}
              >
                <TextField
                  placeholder="Enter your email address..."
                  variant="outlined"
                  fullWidth
                  value={newsletterEmail}
                  onChange={(e) =>
                    setNewsletterEmail(
                      e.target.value
                    )
                  }
                  sx={{
                    "& .MuiOutlinedInput-root":
                      {
                        borderRadius: "14px",
                        background:
                          isDarkMode
                            ? "rgba(15, 23, 42, 0.6)"
                            : "#ffffff",
                        borderColor:
                          cardBorder,
                        color: textColor
                      }
                  }}
                />

                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    px: 4,
                    py: 1.6,
                    borderRadius: "14px",
                    fontWeight: 700,
                    textTransform: "none",
                    whiteSpace: "nowrap",
                    background:
                      "linear-gradient(135deg, #4f46e5, #7c3aed)",
                    boxShadow:
                      "0 8px 20px rgba(79, 70, 229, 0.3)",

                    "&:hover": {
                      background:
                        "linear-gradient(135deg, #4338ca, #6d28d9)"
                    }
                  }}
                >
                  {subscribed
                    ? "Subscribed! ✨"
                    : "Subscribe Free"}
                </Button>
              </Stack>
            </Box>

            {subscribed && (
              <Stack
                direction="row"
                alignItems="center"
                spacing={1}
                sx={{
                  color: "#10b981",
                  mt: 1
                }}
              >
                <CheckCircle2 size={16} />

                <Typography
                  variant="caption"
                  sx={{
                    fontWeight: 600
                  }}
                >
                  Thank you! You've successfully
                  joined our newsletter.
                </Typography>
              </Stack>
            )}
          </Stack>
        </Paper>
      </Container>
    </>
  );
}

export default Home;