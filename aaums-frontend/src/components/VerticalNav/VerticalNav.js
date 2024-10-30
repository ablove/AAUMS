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
          <li key={index} className="navs-item">
            <NavLink to={item.path} activeClassName="actives">
              <i className={`${item.icon} navs-icon`}></i>
              {isOpen && <span className="navs-label">{item.label}</span>}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default VerticalNav;