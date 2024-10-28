import React from 'react';
import VerticalNav from '../components/VerticalNav/VerticalNav';
import './StudentDashBoard.css';

const studentMenuItems = [
  { label: 'Profile', path: '/student/profile', icon: 'fas fa-user' },
  { label: 'Admissions', path: '/student/admissions', icon: 'fas fa-school' },
  { label: 'Register', path: '/student/register', icon: 'fas fa-book-open' },
  { label: 'Attendance', path: '/student/track', icon: 'fas fa-check-circle' },
  { label: 'Assess', path: '/student/assess', icon: 'fas fa-chart-line' },
  { label: 'Transcript', path: '/student/transcript', icon: 'fas fa-file-alt' },
  { label: 'Complaints', path: '/student/complaints', icon: 'fas fa-exclamation-circle' },
];

const StudentDashBoard = () => {
  return (
    <div className="dashboard">
      <VerticalNav menuItems={studentMenuItems} userRole="Student" />
      <div className="content">
        {/* Main content specific to each use case will be routed here */}
      </div>
    </div>
  );
};
export default StudentDashBoard;