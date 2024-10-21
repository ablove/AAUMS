import React, { useState, useEffect } from 'react';
import info1 from '../images/home-4.jpg'
import info2 from '../images/homed.jpg'
import info3 from '../images/homek (1).jpg'
import './InfoPages.css'
export default function InfoPages() {
    const infoArray = [
        {
          title: "Presidential Seminar Commemorates ....",
          image: info1,
          link: "/presidential-seminar",
        },
        {
          title: "Korean Traditional Music Orchestra of the Blind (KTMOB)...",
          image: info2,
          link: "/ktmob",
        },
        {
          title: "Inaugural Reunion 2024: AAU Alumni Reconnect, Reminisce, Reflect",
          image: info3,
          link: "/reunion-2024",
        }
      ];
    
      const [currentIndex, setCurrentIndex] = useState(0);
    
      // Change info every 5 seconds
      useEffect(() => {
        const interval = setInterval(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % infoArray.length);
        }, 5000); // Change every 5 seconds
    
        // Clear interval on component unmount
        return () => clearInterval(interval);
      }, [infoArray.length]);
    
      return (
        <div className="info-section">
          <div
            className="info-card"
            style={{ backgroundImage: `url(${infoArray[currentIndex].image})` }}
          >
            <div className="info-overlay">
              <h2 className="info-title">{infoArray[currentIndex].title}</h2>
              <a href={infoArray[currentIndex].link}>
                <button className="read-more">Read More {'>'} </button>
              </a>
            </div>
          </div>
        </div>
      );
}
