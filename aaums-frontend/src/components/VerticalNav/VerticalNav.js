import React from 'react';
import { NavLink } from 'react-router-dom';
import './VerticalNav.css';

const VerticalNav = ({ menuItems, userRole, isOpen }) => {
  return (
    <nav className={`vertical-nav ${isOpen ? 'active' : ''}`}>
      <div className="nav-header">
        <h2>{isOpen && `${userRole} Dashboard`}</h2>
      </div>
      <ul className="nav-menu">
        {menuItems.map((item, index) => (
          <li key={index} className="nav-item">
            <NavLink to={item.path} activeClassName="active">
              <i className={`${item.icon} nav-icon`}></i>
              {isOpen && <span className="nav-label">{item.label}</span>}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default VerticalNav;