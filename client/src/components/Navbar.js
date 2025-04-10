import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={navbarStyle}>
      <div className="container" style={containerStyle}>
        <Link to="/" style={logoStyle}>
          IT Consulting Service
        </Link>
        <ul style={navListStyle}>
          <li><Link to="/about-us" style={navLinkStyle}>About Us</Link></li>
          <li><Link to="/services" style={navLinkStyle}>Services</Link></li>
          <li><Link to="/contact" style={navLinkStyle}>Contact</Link></li>
          <li><Link to="/blog" style={navLinkStyle}>Blog</Link></li>
          <li><Link to="/faqs" style={navLinkStyle}>FAQs</Link></li>
        </ul>
      </div>
    </nav>
  );
}

const navbarStyle = {
  backgroundColor: '#2c3e50',
  padding: '20px 0',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  position: 'sticky',
  top: 0,
  zIndex: 100,
};

const containerStyle = {
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '0 20px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const logoStyle = {
  fontWeight: 'bold',
  fontSize: '2em',
  textDecoration: 'none',
  color: '#ecf0f1',
  backgroundColor: 'transparent', // Explicitly set to transparent
};

const navListStyle = {
  listStyle: 'none',
  display: 'flex',
  gap: '30px',
  margin: 0,
  padding: 0,
  backgroundColor: '#2c3e50', // Explicitly set to transparent
};

const navLinkStyle = {
  textDecoration: 'none',
  color: '#ecf0f1',
  fontSize: '1.1em',
  fontWeight: '500',
  transition: 'color 0.3s ease',
  backgroundColor: 'transparent', // Explicitly set to transparent
};


export default Navbar;