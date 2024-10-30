import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import VerticalNav from "../components/VerticalNav/VerticalNav";
import "./FacultyDashBoard.css";


const FacultyMenuItems = [
  { label: "Profile", path: "profile", icon: "fas fa-user" },
  { label: "Submit&Approve", path: "Submit&Approve", icon: "fas fa-school" },
  { label: "Attendance", path: "track", icon: "fas fa-check-circle" },
  { label: "TrackAttendance", path: "track", icon: "fas fa-check-circle" },
  { label: "Performance", path: "Performance", icon: "fas fa-chart-line" },

  { label: "Grade&Assessment", path: "assess", icon: "fas fa-chart-line" },
  { label: "TeachingLoad", path: "TeachingLoad", icon: "fas fa-file-alt" }
];

const FacultyDashBoard = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dashboard">
      <div className="dashboard-content">
        <VerticalNav
          menuItems={FacultyMenuItems}
          userRole="Faculty"
          isOpen={isOpen}
        />

        {/* Toggle button centered on the right edge of the sidebar */}
        <button className="toggle-nav-button" onClick={toggleNav}>
          <i
            className={`fas ${isOpen ? "fa-chevron-left" : "fa-chevron-right"}`}
          ></i>
        </button>

        <div className={`main-content ${isOpen ? "expanded" : "collapsed"}`}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default FacultyDashBoard;




