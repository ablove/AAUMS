import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUniversity, faHeartbeat, faWrench, faShieldAlt, faUsers, faUtensils, faBook, faPaintBrush, faFutbol, faShare, faFemale, faGraduationCap, faBuilding, faEye } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
    
        <div className="footer-section">
          <h3>ARCHIVE</h3>
          <select className="footer-select">
            <option>Select Month</option>
            <option>January</option>
            <option>February</option>
            
          </select>
        </div>

        {/* Emergency Services Section */}
        <div className="footer-section">
          <h3>Services</h3>
          <ul className="footer-list">
            <li><FontAwesomeIcon icon={faHeartbeat} /> Emergency Services</li>
            <li><FontAwesomeIcon icon={faUniversity} /> Health and Clinics</li>
            <li><FontAwesomeIcon icon={faWrench} /> Maintenance</li>
            <li><FontAwesomeIcon icon={faShieldAlt} /> Security</li>
            <li><FontAwesomeIcon icon={faUsers} /> Student Affairs</li>
            <li><FontAwesomeIcon icon={faUtensils} /> Housing and Dining</li>
            <li><FontAwesomeIcon icon={faPaintBrush} /> Art and Culture</li>
            <li><FontAwesomeIcon icon={faFutbol} /> Recreation and Sports</li>
            <li><FontAwesomeIcon icon={faShare} /> Cost Sharing</li>
            <li><FontAwesomeIcon icon={faFemale} /> Female Students</li>
            <li><FontAwesomeIcon icon={faGraduationCap} /> Student Life</li>
            <li><FontAwesomeIcon icon={faBook} /> Student Activities</li>
            <li><FontAwesomeIcon icon={faBuilding} /> Campuses</li>
          </ul>
        </div>

        {/* Visitor Counter Section */}
        <div className="footer-section">
          <h3>Visitors</h3>
          <p className="visitor-counter"><FontAwesomeIcon icon={faEye} /> Total Visits: 16,315,284</p>
        </div>
      </div>
    </footer>
  );
}