import React, { useState, useEffect } from 'react';
import './header.css'; 
import logo from './images/header-logo.png';
import MeWowSidebar from './MeWowSidebar';

const Header = () => {
  const [timeLeft, setTimeLeft] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const nextDay = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0, 0);
      const timeDiff = nextDay - now;
      const hours = String(Math.floor(timeDiff / 3600000)).padStart(2, '0');
      const minutes = String(Math.floor((timeDiff % 3600000) / 60000)).padStart(2, '0');
      const seconds = String(Math.floor((timeDiff % 60000) / 1000)).padStart(2, '0');
      setTimeLeft(`${hours}:${minutes}:${seconds}`);
    };

    const timerId = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timerId);
  }, []);

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
      <header className="header">
        <div className="logo-section">
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <div className="tagline-section">
          <button className="api-button" onClick={openSidebar}>Me-Wow</button>
          <span className="tagline">365 Days of Love</span>
          <button className="api-button">Doggo</button>
        </div>
        <div className="countdown-section">
          <span className="countdown-label">Countdown to next message</span>
          <span className="countdown">{timeLeft}</span>
        </div>
      </header>
      <MeWowSidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
    </>
  );
};

export default Header;
