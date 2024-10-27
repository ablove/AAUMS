import React, { useState } from 'react';
import { navItems } from '../NavItems/NavItems';
import Dropdown from '../../../components/Dropdown/Dropdown';
import logo from '../logo/aauLogo.png';
import './NvigationBar.css';
import { Link } from 'react-router-dom';
export default function NavigationBar({ flag }) {
  const [dropdown, setDropdown] = useState(false);

  return (
    <nav className='navigationBar'>
      <div className="nav-left">
        <Link to="/">
        <img src={logo} alt="logo" className="logo" />
        </Link>
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
            <Link className='Link' to={item.path}>
            {item.icon} {/* Render the icon */}
            {item.title} {/* Add spacing between icon and text */}
            </Link>
            {dropdown && item.submenu && <Dropdown items={item.submenu} />}
          </li>
        ))}
        {flag && ( // Conditional rendering using &&
          <li className="sign-in-btn">
            <Link className='Link' to="/login">
            <button className="sign-in">Sign In</button>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}
