import React from 'react';
import './SellerFooter.css';

const SellerFooter = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-links">
          <a href="/PolicyUse">Acceptable Use Policy</a>
          <a href="/ConditionsOf">Terms of Conditions</a>
          <a href="/PrivacyPolicy">Privacy Policy</a>
          <a href="/TermsSale">Terms of Sale</a>
        </div>
        
        <div className="copyright">
          <p>@Copyright {currentYear}</p>
        </div>
      </div>
    </footer>
  );
};

export default SellerFooter;