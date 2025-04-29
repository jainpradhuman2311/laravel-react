import { FaInstagram, FaFacebook, FaLinkedin, FaYoutube } from 'react-icons/fa'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-links">
          <a href="#" className="footer-link">About us</a>
          <a href="#" className="footer-link">Help Center</a>
          <a href="#" className="footer-link">Contact us</a>
        </div>
        
        <div className="footer-social">
          <a href="#" className="social-icon" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="#" className="social-icon" aria-label="Facebook">
            <FaFacebook />
          </a>
          <a href="#" className="social-icon" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="#" className="social-icon" aria-label="YouTube">
            <FaYoutube />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer