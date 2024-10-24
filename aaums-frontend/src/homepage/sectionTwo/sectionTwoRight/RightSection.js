import React from 'react'
import healthCare from './Images/medicalCare.png'
import health from './Images/health award  (1).png'
import research from './Images/reorganizationandResarch (1).png'
import higherEducation from './Images/higherEducation.png'
import "./RightSection.css"
export default function RightSection() {
return (
        <div className="right-section">
                
          <h2 className="section-title">Addis Ababa University Awards & Recognitions</h2>


          <div className="awards-section">
            <div className="award">
              <img src={healthCare} alt="Healthcare Contribution" className="award-image" />
              <p className="award-description">
                Recognized for its healthcare contributions, AAU has led impactful research and community services in the medical field.
              </p>
            </div>
            <div className="award">
              <img src={health} alt="Health Award" className="award-image" />
              <p className="award-description">
                Dr. Rahel Argaw was awarded the Lifetime Achievement Award for her exceptional service in advancing healthcare in Ethiopia.
              </p>
            </div>
            <div className="award">
              <img src={research} alt="Research Recognition" className="award-image" />
              <p className="award-description">
                AAU has been recognized for its significant contributions to scientific research with publications in top international journals.
              </p>
            </div>
            <div className="award">
              <img src={higherEducation} alt="Higher Education Excellence" className="award-image" />
              <p className="award-description">
                AAU was acknowledged as Ethiopia’s first autonomous institution, leading innovation in higher education.
              </p>
            </div>
          </div>
        </div>
      )
}
