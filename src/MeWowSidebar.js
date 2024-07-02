import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './MeWowSidebar.css';

const MeWowSidebar = ({ isOpen, onClose }) => {
  const [catImage, setCatImage] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isOpen) {
      fetchCatImage();
    }
  }, [isOpen]);

  const fetchCatImage = async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://api.thecatapi.com/v1/images/search', {
        headers: {
          'x-api-key': 'live_MGKNgYXoxJqANfiHeo34SXeFrDA3qr97KgwJZkkPK0TLcGDzFIJFWBj3OqLMN8X6',
        },
      });
      setCatImage(response.data[0].url);
    } catch (error) {
      console.error('Error fetching cat image:', error);
    }
    setTimeout(() => {
        setLoading(false);
      }, 1000);
  };

  return (
    <>
      <div className={`mewow-sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-content">
          <button className="close-button" onClick={onClose}>
            Close
          </button>
          <div className="sidebar-inner-content">
            <h2>Me-Wow Content</h2>
            {loading ? (
              <p className='loader-cat'></p>
            ) : (
              catImage && <img src={catImage} alt="Cat" className="cat-image" />
            )}
            <button className="generate-button" onClick={fetchCatImage}>
              New Purr-spective
            </button>
          </div>
        </div>
      </div>
      {isOpen && <div className="overlay" onClick={onClose}></div>}
    </>
  );
};

export default MeWowSidebar;
