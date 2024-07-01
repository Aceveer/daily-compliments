import React, { useState, useEffect } from 'react';
import './index.css';
import compliments from './compliments';

const ComplimentDisplay = () => {
  const [complimentData, setComplimentData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCompliment();
  }, []);

  const fetchCompliment = async () => {
    try {
      setLoading(true);

      const currentDate = new Date();
      const dayOfYear = Math.floor((currentDate - new Date(currentDate.getFullYear(), 0, 0)) / 86400000);

      await new Promise(resolve => setTimeout(resolve, 1000));

      const compliment = compliments[dayOfYear % compliments.length];
      setComplimentData(compliment);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching compliment:', error);
      setLoading(false);
    }
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
              <img src={require(`./images/${complimentData.imageUrl}`)} alt="Compliment" />
            )}
          </>
        )
      )}
    </div>
  );
};

export default ComplimentDisplay;
