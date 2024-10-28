import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './VerticalNav.css';

const VerticalNav = ({ menuItems, userRole }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button className="toggle-nav-btn" onClick={toggleNav}>
        ☰
      </button>
      <nav className={`vertical-nav ${isOpen ? 'active' : ''}`}>
        <h2>{userRole} Dashboard</h2>
        <ul>
          {menuItems.map((item, index) => (
            <li key={index}>
              <NavLink to={item.path} activeClassName="active">
                <i className={item.icon}></i>
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default VerticalNav;