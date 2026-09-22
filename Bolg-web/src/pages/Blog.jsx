import React, { useEffect, useState } from 'react'
import BlogCard from '../components/BlogCard'
import Navbar from '../components/Navbar'
import AnimatedCanvasBackground from '../components/AnimatedCanvasBackground';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase/config';

function Blog() {
    
      const [isDarkMode, setIsDarkMode] = useState(false);
    
      const [user, setUser] = useState(null);
    
    
      const themeBg = isDarkMode
  ? "linear-gradient(135deg, #0f172a 0%, #111827 50%, #172033 100%)"
  : "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 50%, #eef2ff 100%)";

const textColor = isDarkMode
  ? "#f1f5f9"
  : "#0f172a";

const textMuted = isDarkMode
  ? "#94a3b8"
  : "#64748b";

const cardBg = isDarkMode
  ? "rgba(17, 24, 39, 0.82)"
  : "rgba(255, 255, 255, 0.88)";

const cardBorder = isDarkMode
  ? "rgba(148, 163, 184, 0.16)"
  : "rgba(15, 23, 42, 0.08)";
    
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
    
  return (
    <div>
        <AnimatedCanvasBackground
        isDarkMode={isDarkMode}
      />
       <Navbar
        user={user}

        isDarkMode={isDarkMode}

        setIsDarkMode={setIsDarkMode}

        textColor={textColor}

        textMuted={textMuted}

        cardBorder={cardBorder}
      />

      <BlogCard/>
    </div>
  )
}

export default Blog
