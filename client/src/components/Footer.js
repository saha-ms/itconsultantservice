import React from 'react';

function Footer() {
  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <p style={copyrightStyle}>&copy; {new Date().getFullYear()} IT Consulting Service. All rights reserved.</p>
        <div style={socialIconsStyle}>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={socialIconLink}>
            {/* Replace with your Twitter icon (e.g., an SVG or image) */}
            <img src="/images/twitter-icon.png" alt="Twitter" style={socialIconImage} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={socialIconLink}>
            {/* Replace with your LinkedIn icon */}
            <img src="/images/linkedin-icon.png" alt="LinkedIn" style={socialIconImage} />
          </a>
          {/* Add more social media links as needed */}
        </div>
      </div>
    </footer>
  );
}

const footerStyle = {
  backgroundColor: '#34495e', // A slightly different dark, professional color
  color: '#ecf0f1',
  padding: '20px 0', // Reduced vertical padding
  textAlign: 'center',
  width: '100%',
  boxSizing: 'border-box', // Ensure padding doesn't add to the width
};

const containerStyle = {
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '0 20px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const copyrightStyle = {
  fontSize: '0.9em', // Slightly smaller copyright text
  margin: 0,
};

const socialIconsStyle = {
  display: 'flex',
  gap: '15px', // Spacing between icons
};

const socialIconLink = {
  textDecoration: 'none',
  color: '#ecf0f1', // Default icon color
};

const socialIconImage = {
  width: '24px', // Adjust size as needed
  height: '24px',
  verticalAlign: 'middle', // Align icons with text if any
  opacity: 0.7, // Slightly desaturated
  transition: 'opacity 0.3s ease',
};

// Optional hover effect for social icons
const socialIconHoverStyle = {
  opacity: 1,
};

export default Footer;