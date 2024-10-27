import React, { useState } from 'react';
import { navItems } from '../NavItems/NavItems';
import Dropdown from '../../../components/Dropdown/Dropdown';
import logo from '../logo/aauLogo.png';
import './NvigationBar.css';

export default function NavigationBar({ flag }) {
  const [dropdown, setDropdown] = useState(false);

  return (
    <nav className='navigationBar'>
      <div className="nav-left">
        <img src={logo} alt="logo" className="logo" />
        <h3 className="title">ADDIS ABABA UNIVERSITY</h3>
      </div>
      <ul className="nav-items">
        {navItems.map((item) => (
          <li
            key={item.id}
            className={item.cName}
            onMouseEnter={() => setDropdown(item.submenu ? true : false)}
            onMouseLeave={() => setDropdown(false)}
          >
            {item.icon} {/* Render the icon */}
            {item.title} {/* Add spacing between icon and text */}
            {dropdown && item.submenu && <Dropdown items={item.submenu} />}
          </li>
        ))}
        {flag && ( // Conditional rendering using &&
          <li className="sign-in-btn">
            <button className="sign-in">Sign In</button>
          </li>
        )}
      </ul>
    </nav>
  );
}
