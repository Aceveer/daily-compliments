import React, { useState, useEffect } from 'react';
import './index.css';
import compliments from './compliments';

const ComplimentDisplay = () => {
  const [complimentData, setComplimentData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    fetchCompliment();
  }, []);

  const fetchCompliment = async () => {
    try {
      setLoading(true);

      const currentDate = new Date();
      const dayOfYear = Math.floor((currentDate - new Date(currentDate.getFullYear(), 0, 0)) / 86400000);

      await new Promise(resolve => setTimeout(resolve, 1000));

      // const compliment = compliments[dayOfYear % compliments.length];
      const compliment = compliments[5];
      setComplimentData(compliment);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching compliment:', error);
      setLoading(false);
    }
  };

  const handleMouseEnter = () => {
    setIsFlipped(true);
  };

  const handleMouseLeave = () => {
    setIsFlipped(false);
  };

  return (
    <div className="compliment-display">
      {loading ? (
        <div>
          <p className='loader'></p>
          <p className='loader'></p>
          <p className='loader'></p>
          <p className='loader'></p>
          <p className='loader'></p>
          <p className='loader'></p>
          <p className='loader'></p>
        </div>
      ) : (
        complimentData && (
          <>
            <p><strong>{complimentData.topic}:</strong> <span className="hoverable">{complimentData.compliment}</span></p>
            <p><strong>Reason:</strong> {complimentData.desc}</p>
            {complimentData.imageUrl && (
              <div
                className={`card ${isFlipped ? 'flipped' : ''}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div className="card-inner">
                  <div className="card-front">
                    <img src={require(`./images/${complimentData.imageUrl}`)} alt="Compliment" />
                  </div>
                  <div className="card-back">
                    <p>
                      <strong>{complimentData.backTitle}</strong> : {complimentData.backMessage}
                      </p>
                  </div>
                </div>
              </div>
            )}
          </>
        )
      )}
    </div>
  );
};

export default ComplimentDisplay;
