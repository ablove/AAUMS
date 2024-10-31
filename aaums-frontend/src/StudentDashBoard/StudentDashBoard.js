import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import VerticalNav from '../components/VerticalNav/VerticalNav';
import './StudentDashBoard.css';
import NavigationBar from '../homepage/NavBar/NavigationBar/NavigationBar';

const studentMenuItems = [
  { label: 'Profile', path: 'profile', icon: 'fas fa-user' },
  { label: 'Admissions', path: 'admissions', icon: 'fas fa-school' },
  { label: 'Register', path: 'register', icon: 'fas fa-book-open' },
  { label: 'Attendance', path: 'track', icon: 'fas fa-check-circle' },
  { label: 'Assess', path: 'assess', icon: 'fas fa-chart-line' },
  { label: 'Transcript', path: 'transcript', icon: 'fas fa-file-alt' },
  { label: 'Complaints', path: 'complaints', icon: 'fas fa-exclamation-circle' },
];

const StudentDashBoard = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <NavigationBar flag={false} />
      <div className="dashboard">

        <div className={`dashboard-sidebar ${isOpen ? 'open' : 'closed'}`}>
        <button className="toggle-nav-button" onClick={toggleNav}>
            <i className={`fas ${isOpen ? 'fa-chevron-left' : 'fa-chevron-right'}`}></i>
          </button>
          <VerticalNav menuItems={studentMenuItems} userRole="Student" isOpen={isOpen} />
         
        </div>
        <div className={`main-content ${isOpen ? 'expanded' : 'collapsed'}`}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default StudentDashBoard;