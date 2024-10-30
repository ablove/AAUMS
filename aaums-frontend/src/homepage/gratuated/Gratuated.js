import React from 'react';
import './Gratuated.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGraduate, faUserTie, faSchool } from '@fortawesome/free-solid-svg-icons';
import { useInView } from 'react-intersection-observer'; // use in view 
import useCountUp from './useCountUp';

export default function Gratuated() {
  const { ref, inView } = useInView({ triggerOnce: true });
  const undergraduateCount = useCountUp(0, 50000, 2000, inView);
  const postGradCount = useCountUp(0, 20000, 2000, inView);
  const totalGradCount = useCountUp(0, 100000, 2000, inView);   

  return (
    <div className="graduated-stats" ref={ref}>
      <div className="stat-box">
        <FontAwesomeIcon icon={faUserGraduate} className="icon" />
        <h3 >Undergraduate Graduates</h3>
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




