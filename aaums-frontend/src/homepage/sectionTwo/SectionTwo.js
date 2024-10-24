import React from 'react';
import RightSection from './sectionTwoRight/RightSection.js';
import SectionTwoLeft from './sectionTwoLeft/SectionTwoLeft.js';  // Capitalized the name
import './sectionTwo.css';

export default function SectionTwo() {
  return (
    <div className="section-two-container">  {/* Added the class for flexbox layout */}
        <SectionTwoLeft />  {/* Corrected the component name */}
        <RightSection />
    </div>
  );
}