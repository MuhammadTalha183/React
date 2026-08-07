import React from 'react'
import "../App.css"
function Navbar() {
  return (
   <>
   <header class="header">
    <nav class="navbar">
      <a href="#" class="logo">
        Dev<span>Studio</span>
      </a>

      <ul class="nav-menu">
        <li class="nav-item">
          <a href="#" class="nav-link active">Home</a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link">Services</a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link">Portfolio</a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link">About</a>
        </li>
      </ul>

      <div class="nav-actions">
        <a href="#" class="btn-cta">Get Started</a>
      </div>
    </nav>
  </header>
   </>
  )
}

export default Navbar
