import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './DoggoSidebar.css';

const DoggoSidebar = ({ isOpen, onClose, onOpenOther }) => {
  const [dogImage, setDogImage] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isOpen) {
      fetchDogImage();
    }
  }, [isOpen]);

  const fetchDogImage = async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://api.thedogapi.com/v1/images/search', {
        headers: {
          'x-api-key': 'live_MGKNgYXoxJqANfiHeo34SXeFrDA3qr97KgwJZkkPK0TLcGDzFIJFWBj3OqLMN8X6',
        },
      });
      setDogImage(response.data[0].url);
    }  catch (error) {
      console.error('Error fetching dog image:', error);
    }
    setTimeout(() => {
      setLoading(false);
    }, 1000); // Ensure the loader is displayed for at least 2 seconds
  };

  return (
    <>
      <div className={`doggo-sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-content">
          <button className="close-button" onClick={onClose}>
            Close
          </button>
          <div className="sidebar-inner-content">
            <h2>Woof Woof</h2>
            {loading ? (
              <p className='loader-dog'></p>
            ) : (
              dogImage && <img src={dogImage} alt="Dog" className="dog-image" />
            )}
            <div className='sidebar-buttons'>
              <button className="generate-button" onClick={fetchDogImage}>
                Fetch Another
              </button>
              <button className="switch-button" onClick={onOpenOther}>
                Switch to Me-Wow
              </button>
            </div>
          </div>
        </div>
      </div>
      {isOpen && <div className="overlay" onClick={onClose}></div>}
    </>
  );
};

export default DoggoSidebar;
