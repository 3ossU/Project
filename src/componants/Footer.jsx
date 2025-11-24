import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-links">
          <a href="/Policy">Acceptable Use Policy</a>
          <a href="/Conditions">Terms of Conditions</a>
          <a href="/Privacy">Privacy Policy</a>
          <a href="/Terms">Terms of Sale</a>
        </div>
        
        <div className="copyright">
          <p>@Copyright {currentYear}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;