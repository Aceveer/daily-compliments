import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './header.css'; 
import logo from './images/header-logo.png';
import MeWowSidebar from './MeWowSidebar';
import DoggoSidebar from './DoggoSidebar';

const Header = () => {
  const [timeLeft, setTimeLeft] = useState('');
  const [isSidebarOpenCat, setIsSidebarOpenCat] = useState(false);
  const [isSidebarOpenDog, setIsSidebarOpenDog] = useState(false);

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

  const openSidebar = (item) => {
    if (item === "Cat") {
      setIsSidebarOpenCat(true);
      setIsSidebarOpenDog(false); // Ensure dog sidebar is closed
    }
    if (item === "Dog") {
      setIsSidebarOpenDog(true);
      setIsSidebarOpenCat(false); // Ensure cat sidebar is closed
    }
  };

  const closeSidebar = (item) => {
    if (item === "Cat") setIsSidebarOpenCat(false);
    if (item === "Dog") setIsSidebarOpenDog(false);
  };

  return (
    <>
      <header className="header">
        <div className="logo-section">
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <div className="tagline-section">
          <button className="api-button" onClick={() => openSidebar("Cat")}>Me-Wow</button>
          <span className="tagline">365 Days of Love</span>
          <button className="api-button" onClick={() => openSidebar("Dog")}>Doggo</button>
        </div>
        <div className="countdown-section">
          <span className="countdown-label">Countdown to next message</span>
          <span className="countdown">{timeLeft}</span>
        </div>
      </header>
      <MeWowSidebar isOpen={isSidebarOpenCat} onClose={() => closeSidebar("Cat")} onOpenOther={() => openSidebar("Dog")} />
      <DoggoSidebar isOpen={isSidebarOpenDog} onClose={() => closeSidebar("Dog")} onOpenOther={() => openSidebar("Cat")} />
    </>
  );
};

export default Header;
