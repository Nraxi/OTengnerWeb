import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';
import '@fortawesome/fontawesome-free/css/all.css'

import './SocialMediaLinks.css'
function SocialMedia() {
  return (
    <div className="social-media-container">
      {/* Home icon and link */}
      <a href="https://nraxi.github.io/OTengnerWeb/" target="_blank" rel="noopener noreferrer">
        <i className="fas fa-home social-icon"></i>
      </a>
      {/* Instagram ikon och länk */}
      <a href="https://www.instagram.com/olle_sthlm/" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-instagram social-icon"></i>
      </a>

      {/* LinkedIn ikon och länk */}
      <a href="https://www.linkedin.com/in/olle-tengnér-331835175" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-linkedin social-icon"></i>
      </a>

      {/* GitHub ikon och länk */}
      <a href="https://github.com/nraxi" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-github social-icon"></i>
      </a>


    </div>
  )
}

export default SocialMedia