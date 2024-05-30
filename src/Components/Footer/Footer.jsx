import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
const Footer = () => {
  return (
    <footer>
        <div className="footer-content">
        
        
        <div className="contact-info">
          <h3>Contact Us</h3>
          <p style={{marginLeft:'22px'}}>Sabaragamuwa University of Sri Lanka,</p>
          <p><FontAwesomeIcon icon={faLocationDot} className='icon' />Belihuloya,</p>
          <p style={{marginLeft:'22px'}}>70140</p>

          <p><FontAwesomeIcon icon={faPhone} className='icon' />Phone: +94705845755</p>
          <p><FontAwesomeIcon icon={faEnvelope} className='icon' />Email: prabodaharshani95@gmail.com</p>
        </div>
        <div className="quick-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/services">Login/Sign Up</a></li>
          </ul>
        </div>
        <div className="socialMedia">
          <h3>Follow Us</h3>
          <ul>
            
            <li><FontAwesomeIcon icon={faFacebook} className='icon' /><a href="https://www.facebook.com">Facebook</a></li>
            <li><FontAwesomeIcon icon={faTwitter} className='icon' /><a href="https://www.twitter.com">Twitter</a></li>
            <li><FontAwesomeIcon icon={faInstagram} className='icon' /><a href="https://www.instagram.com">Instagram</a></li>
            <li><FontAwesomeIcon icon={faLinkedin} className='icon' /><a href="https://www.linkedin.com">LinkedIn</a></li>
          </ul>
        </div>
      </div>
      <div className="copyright">
        <p>&copy; 2024  voluntHeart. All rights reserved.</p>
        <p><a href="/privacy-policy">Privacy Policy</a> | <a href="/terms-of-service">Terms of Service</a></p>
      </div>
    </footer>
   
   
  )
}

export default Footer
