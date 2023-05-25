import React from 'react';
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
        <br></br>
        <br></br>  
      <p className="footer-text">© {new Date().getFullYear()} Weather Checker App by Mustafa. All rights reserved.</p>
    </footer>
  );
};

export default Footer;