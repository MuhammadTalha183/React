import React from 'react'
import "../App.css"
function Footer() {
  return (
    <>
    <footer class="footer">
  <div class="footer-container">
    <div class="footer-column">
      <h3 class="footer-logo">BrandName</h3>
      <p class="footer-desc">Creating modern web experiences with clean code and beautiful user interfaces.</p>
    </div>

    <div class="footer-column">
      <h4>Quick Links</h4>
      <ul class="footer-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </div>

    <div class="footer-column">
      <h4>Contact Us</h4>
      <p class="footer-info">📧 support@example.com</p>
      <p class="footer-info">📞 +1 (555) 019-2834</p>
      <p class="footer-info">📍 123 Web Dev Lane, NY</p>
    </div>
  </div>

  <div class="footer-bottom">
    <p>&copy; 2026 BrandName. All rights reserved.</p>
  </div>
</footer>

    </>
  )
}

export default Footer
