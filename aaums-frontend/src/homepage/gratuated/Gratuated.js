import React from 'react';
import './Gratuated.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGraduate, faUserTie, faSchool } from '@fortawesome/free-solid-svg-icons';
import { useInView } from 'react-intersection-observer';
import useCountUp from './useCountUp';

export default function Gratuated() {
  const { ref, inView } = useInView({ triggerOnce: true });
  
  // Incremental numbers using the custom hook
  const undergraduateCount = useCountUp(0, 50000, 2000, inView); // Starts from 0 to 50000
  const postGradCount = useCountUp(0, 20000, 2000, inView);     // Starts from 0 to 20000
  const totalGradCount = useCountUp(0, 100000, 2000, inView);   // Starts from 0 to 100000

  return (
    <div className="graduated-stats" ref={ref}>
      <div className="stat-box">
        <FontAwesomeIcon icon={faUserGraduate} className="icon" />
        <h3>Undergraduate Graduates</h3>
        <p>{undergraduateCount}</p>
      </div>

      <div className="stat-box">
        <FontAwesomeIcon icon={faUserTie} className="icon" />
        <h3>Master's & PhD Graduates</h3>
        <p>{postGradCount}</p>
      </div>

      <div className="stat-box">
        <FontAwesomeIcon icon={faSchool} className="icon" />
        <h3>Total Graduates</h3>
        <p>{totalGradCount}</p>
      </div>
    </div>
  );
}