
// import './App.css'
// import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import Login from './pages/auth/Login'
// import Signup from './pages/auth/Signup'
// import Home from './pages/Home'
// import ProtectedRoute from './components/ProtectedRoute'
// import Navbar from './components/Navbar'
// import AnimatedCanvasBackground from "./components/AnimatedCanvasBackground";
// function App() {

//   return (
//   <>
//  
//   <BrowserRouter>
//   <Routes>
//     {/* <Route path="/" element={<ProtectedRoute><Home/></ProtectedRoute>} /> */}
//     <Route path="/" element={<Home/>} />
//     <Route path="/login" element={<Login/>} />
//     <Route path="/signup" element={<Signup/>} />
//     <Route path="/dashboard" element={<ProtectedRoute><Dashboard/></ProtectedRoute>} />
//   </Routes>
//   </BrowserRouter>
//   </>
//   )
// }

// export default App


import React, { useState } from "react";
import { Box } from "@mui/material";
import { Compass, PenTool } from "lucide-react";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import AnimatedCanvasBackground from "./components/AnimatedCanvasBackground";
import ModernFooter from "./components/ModernFooter";

import Home from "./pages/Home";
import About from "./pages/About";
import Placeholder from "./pages/Placeholder";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";

import { FEATURED_POSTS } from "./data/blogData";

function BlogApp() {
  const [currentTab, setCurrentTab] = useState("home");
  const [isDarkMode, setIsDarkMode] = useState(false);

  const [activeCategory, setActiveCategory] =
    useState("All Topics");

  const [activePostIndex, setActivePostIndex] =
    useState(0);

  const [bookmarked, setBookmarked] =
    useState({});

  const [liked, setLiked] =
    useState({});

  const [likeCounts, setLikeCounts] =
    useState({
      1: FEATURED_POSTS[0].likes,
      2: FEATURED_POSTS[1].likes,
      3: FEATURED_POSTS[2].likes,
    });

  const themeBg = isDarkMode
    ? "linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #111827 100%)"
    : "linear-gradient(135deg, #f8fafc 0%, #eef2ff 45%, #faf5ff 100%)";

  const textColor = isDarkMode
    ? "#f8fafc"
    : "#0f172a";

  const textMuted = isDarkMode
    ? "#94a3b8"
    : "#475569";

  const cardBg = isDarkMode
    ? "rgba(30, 41, 59, 0.75)"
    : "rgba(255, 255, 255, 0.8)";

  const cardBorder = isDarkMode
    ? "rgba(255, 255, 255, 0.12)"
    : "rgba(99, 102, 241, 0.15)";

  return (
    <Box
      sx={{
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",

        background: themeBg,
        color: textColor,

        fontFamily:
          "'Inter', system-ui, -apple-system, sans-serif",

        transition:
          "background 0.5s ease, color 0.5s ease",
      }}
    >
      {/* Animated Background */}

      <AnimatedCanvasBackground
        isDarkMode={isDarkMode}
      />

      {/* Navbar */}

      <Navbar
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        textColor={textColor}
        textMuted={textMuted}
        cardBorder={cardBorder}
      />

      {/* Home */}

      {currentTab === "home" && (
        <Home
          isDarkMode={isDarkMode}
          textColor={textColor}
          textMuted={textMuted}
          cardBg={cardBg}
          cardBorder={cardBorder}
          setCurrentTab={setCurrentTab}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          activePostIndex={activePostIndex}
          setActivePostIndex={setActivePostIndex}
          bookmarked={bookmarked}
          setBookmarked={setBookmarked}
          liked={liked}
          setLiked={setLiked}
          likeCounts={likeCounts}
          setLikeCounts={setLikeCounts}
        />
      )}

      {/* About */}

      {currentTab === "about" && (
        <About
          isDarkMode={isDarkMode}
          textColor={textColor}
          textMuted={textMuted}
          cardBg={cardBg}
          cardBorder={cardBorder}
          setCurrentTab={setCurrentTab}
        />
      )}

      {/* Articles */}

      {currentTab === "articles" && (
        <Placeholder
          title="Articles & Explore"
          icon={Compass}
          description="Browse over 12,000+ curated essays, architectural tech breakdowns, and creative guides."
          textColor={textColor}
          textMuted={textMuted}
          cardBg={cardBg}
          cardBorder={cardBorder}
          setCurrentTab={setCurrentTab}
        />
      )}

      {/* Writer's Studio */}

      {currentTab === "write" && (
        <Placeholder
          title="Writer's Studio"
          icon={PenTool}
          description="Draft, edit, and publish rich markdown stories directly to your subscribers."
          textColor={textColor}
          textMuted={textMuted}
          cardBg={cardBg}
          cardBorder={cardBorder}
          setCurrentTab={setCurrentTab}
        />
      )}

      {/* Footer */}

      <ModernFooter
        isDarkMode={isDarkMode}
        textColor={textColor}
        textMuted={textMuted}
        cardBorder={cardBorder}
        setCurrentTab={setCurrentTab}
      />

      {/* Animation Styles */}

      <style>
        {`
          @keyframes blink {
            0%, 100% {
              opacity: 1;
            }

            50% {
              opacity: 0;
            }
          }

          @keyframes contentReveal {
            from {
              opacity: 0;
              transform: translateY(25px);
            }

            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes orbit {
            from {
              transform: rotate(0deg);
            }

            to {
              transform: rotate(360deg);
            }
          }

          @keyframes orbitReverse {
            from {
              transform: rotate(360deg);
            }

            to {
              transform: rotate(0deg);
            }
          }

          @keyframes miniFloat {
            0%, 100% {
              transform: translateY(0) rotate(-1deg);
            }

            50% {
              transform: translateY(-10px) rotate(1deg);
            }
          }
        `}
      </style>
    </Box>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Main Blog */}

       

        {/* Login Page */}

        <Route
          path="/login"
          element={<Login />}
        />
         <Route
          path="/signup"
          element={<Signup   />}
        />

         <Route
          path="/*"
          element={<BlogApp />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;