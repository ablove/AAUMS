import React from 'react';
import { FaHeartbeat, FaUniversity, FaBrain, FaBookOpen, FaGavel, FaFlask, FaPalette, FaGlobe, FaLeaf } from 'react-icons/fa';
import './Colleges.css'; // Import the CSS for styling
import health from './images/health.png';
import art from './images/art.png';
import developmental from './images/developmentalStudy.png';
import human from './images/download.png';
import economics from './images/Economics.png';
import social from './images/social.png';
import natural from './images/naturalSince.png';
import veterinary from './images/veternary.png';
import law from './images/law_hunmanty.png';
import kk from './images/communication.png';

const colleges = [
  {
    id: 1,
    name: "College of Business and Economics",
    image: economics,
    description: "Explore global markets and financial systems.",
    icon: <FaUniversity />
  },
  {
    id: 2,
    name: "College of Development Studies",
    image: developmental,
    description: "Learn about developmental policies and practices.",
    icon: <FaGlobe />
  },
  {
    id: 3,
    name: "College of Education and Behavioral Studies",
    image: human,
    description: "Understand psychology and education systems.",
    icon: <FaBrain />
  },
  {
    id: 4,
    name: "College of Health Sciences",
    image: health,
    description: "Discover health and psychological sciences.",
    icon: <FaHeartbeat />
  },
  {
    id: 5,
    name: "College of Humanities, Language Studies, Journalism, and Communication",
    image: kk,
    description: "Explore the world of communication and journalism.",
    icon: <FaBookOpen />
  },
  {
    id: 6,
    name: "College of Law and Governance Studies",
    image: law,
    description: "Delve into law and governance studies.",
    icon: <FaGavel />
  },
  {
    id: 7,
    name: "College of Natural Science",
    image: natural,
    description: "Discover the wonders of natural science.",
    icon: <FaFlask />
  },
  {
    id: 8,
    name: "College of Performing and Visual Arts",
    image: art,
    description: "Unlock your creativity in visual and performing arts.",
    icon: <FaPalette />
  },
  {
    id: 9,
    name: "College of Social Sciences",
    image: social,
    description: "Study social dynamics and global changes.",
    icon: <FaGlobe />
  },
  {
    id: 10,
    name: "College of Veterinary Medicine and Agriculture",
    image: veterinary,
    description: "Learn about veterinary medicine and agricultural practices.",
    icon: <FaLeaf />
  }
];

export default function Colleges() {
  return (
    <div className="colleges-section">
      <h2 className="collegesTittle ">AAU Colleges</h2>
      <div className="colleges-container">
        {colleges.map((college) => (
          <div key={college.id} className="college-card">
            <img src={college.image} alt={college.name} className="college-image" />
            <div className="college-content">
              <div className="college-icon">{college.icon}</div>
              <h3>{college.name}</h3>
              <p>{college.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}



