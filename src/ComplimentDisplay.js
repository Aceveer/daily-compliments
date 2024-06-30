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
        <>
          <p className='loader'></p>
          <p className='loader'></p>
          <p className='loader'></p>
          <p className='loader'></p>
          <p className='loader'></p>
          <p className='loader'></p>
        </>
      ) : (
        complimentData && (
          <>
            <h2>Day {complimentData.id}</h2>
            <p><strong>{complimentData.topic}:</strong> {complimentData.compliment}</p>
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
