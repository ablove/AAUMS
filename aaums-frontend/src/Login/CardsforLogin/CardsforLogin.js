import React from 'react';
import alumni from '../images/Alumni.png';
import test from '../images/ApplyFprTesting.png';
import freshman from '../images/freshman.png';
import admission from '../images/5.png';
import './CardsforLogin.css'; // Ensure you add CSS styling here

export default function CardsforLogin() {
  const cards = [
    {
      image: test,
      title: "Apply for Testing",
      definition: "Prospective applicants and professionals can apply for exams offered at Addis Ababa University",
    },
    {
      image: admission,
      title: "Apply for Admission",
      definition: "New applicants who aspire to join Addis Ababa University can apply here.",
    },
    {
      image: freshman,
      title: "Freshman Students",
      definition: "New students can update their profile, view dormitory, and section placement information.",
    },
    {
      image: alumni,
      title: "Alumni Services",
      definition: "You can submit alumni service requests to Addis Ababa University.",
    },
  ];

  return (
    <div className='ContainerOfCard'>
    
    <div className="container-of-cards">
    <div className="styled-text">
        <span className="initial">T</span>
        <p>This portal is designed to provide services for students, applicants, academic staff, and for those who<br/> play management roles at Addis Ababa University.</p>
      </div>
      {cards.map((item, index) => (
        <div className="card" key={index}>
          <div className="card-image">
            <img src={item.image} alt={item.title} />
          </div>
          <div className="card-content">
            <h3 className="card-title">{item.title}</h3>
            <p className="card-description">{item.definition}</p>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}