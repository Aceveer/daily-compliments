import React from 'react';
import './header.css'; 
import logo from './images/header-logo.png'; 

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="Logo" className="logo" />
      <div className="header-content">
        <span className="tagline">365 Days of Love</span>
      </div>
    </header>
  );
};

export default Header;
