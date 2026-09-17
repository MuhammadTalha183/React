
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

import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import {
  onAuthStateChanged,
} from "firebase/auth";

import { auth } from "./firebase/config";

import Navbar from "./components/Navbar";
import AnimatedCanvasBackground from "./components/AnimatedCanvasBackground";
import ModernFooter from "./components/ModernFooter";

import Home from "./pages/Home";
import About from "./pages/About";
import Placeholder from "./pages/Placeholder";

import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import Dashboard from "./pages/dashboard/Dashboard";

import { FEATURED_POSTS } from "./data/blogData";

import { Compass } from "lucide-react";


// ==========================================
// BLOG APP
// ==========================================

function BlogApp() {

  const [isDarkMode, setIsDarkMode] = useState(false);

  const [user, setUser] = useState(null);

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


  // ==========================================
  // FIREBASE AUTH STATE
  // ==========================================

  useEffect(() => {

    const unsubscribe =
      onAuthStateChanged(
        auth,
        (currentUser) => {

          setUser(currentUser);

        }
      );

    return () => unsubscribe();

  }, []);


  // ==========================================
  // THEME
  // ==========================================

  const themeBg = isDarkMode
    ? "linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #111827 100%)"
    : "linear-gradient(135deg, #f8fafc 0%, #eef2ff 45%, #faf5ff 100%)";


  const textColor = isDarkMode
    ? "gradient(90deg, #e0e7ff 0%, #c7d2fe 50%, #a5b4fc 100%)"
    : "#1e293b";


  const textMuted = isDarkMode
    ? "rgba(255, 255, 255, 0.6)"
    : "#6b7280";


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

        background: themeBg,

        color: textColor,

        fontFamily:
          "'Inter', system-ui, -apple-system, sans-serif",

        transition:
          "background 0.5s ease, color 0.5s ease",
      }}
    >

      {/* ====================================== */}
      {/* BACKGROUND */}
      {/* ====================================== */}

      <AnimatedCanvasBackground
        isDarkMode={isDarkMode}
      />


      {/* ====================================== */}
      {/* NAVBAR */}
      {/* ====================================== */}

      <Navbar
        user={user}

        isDarkMode={isDarkMode}

        setIsDarkMode={setIsDarkMode}

        textColor={textColor}

        textMuted={textMuted}

        cardBorder={cardBorder}
      />


      {/* ====================================== */}
      {/* ROUTES */}
      {/* ====================================== */}

      <Routes>

        {/* HOME */}

        <Route
          path="/"
          element={
            <Home
              isDarkMode={isDarkMode}
              textColor={textColor}
              textMuted={textMuted}
              cardBg={cardBg}
              cardBorder={cardBorder}

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
          }
        />


        {/* ARTICLES */}

        <Route
          path="/blogs"
          element={
            <Placeholder
              title="Articles & Explore"
              icon={Compass}
              description="Browse over 12,000+ curated essays, architectural tech breakdowns, and creative guides."

              textColor={textColor}
              textMuted={textMuted}
              cardBg={cardBg}
              cardBorder={cardBorder}
            />
          }
        />


        {/* ABOUT */}

        <Route
          path="/about"
          element={
            <About
              isDarkMode={isDarkMode}
              textColor={textColor}
              textMuted={textMuted}
              cardBg={cardBg}
              cardBorder={cardBorder}
            />
          }
        />

      </Routes>


      {/* ====================================== */}
      {/* FOOTER */}
      {/* ====================================== */}

      <ModernFooter
        isDarkMode={isDarkMode}
        textColor={textColor}
        textMuted={textMuted}
        cardBorder={cardBorder}
      />


      {/* ====================================== */}
      {/* ANIMATION */}
      {/* ====================================== */}

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


// ==========================================
// MAIN APP
// ==========================================

function App() {

  return (

    <BrowserRouter>

      <Routes>

        {/* ================================= */}
        {/* MAIN WEBSITE */}
        {/* ================================= */}

        <Route
          path="/*"
          element={<BlogApp />}
        />


        {/* ================================= */}
        {/* AUTH */}
        {/* ================================= */}

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/signup"
          element={<Signup />}
        />


        {/* ================================= */}
        {/* DASHBOARD */}
        {/* ================================= */}

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

      </Routes>

    </BrowserRouter>
  );
}


export default App;