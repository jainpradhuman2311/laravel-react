import { useState } from 'react'
import { FaQuestionCircle, FaBell, FaBars } from 'react-icons/fa'
import './Header.css'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    'Home', 'Provider', 'Content', 'Listing', 
    'Form', 'Banner', 'Student', 'Report'
  ]

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-left">
          <h1 className="logo">Staff Hub</h1>
          <button
            className="mobile-menu-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <FaBars />
          </button>
        </div>

        <nav className={`main-nav ${isMenuOpen ? 'open' : ''}`}>
          <ul className="nav-list">
            {navItems.map((item, index) => (
              <li key={index} className="nav-item">
                <a href="#" className="nav-link">{item}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-right">
          <button className="icon-btn" aria-label="Help">
            <FaQuestionCircle />
          </button>
          <button className="icon-btn" aria-label="Notifications">
            <FaBell />
          </button>
          <div className="avatar-small">
            <img 
              src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg" 
              alt="User profile" 
            />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header