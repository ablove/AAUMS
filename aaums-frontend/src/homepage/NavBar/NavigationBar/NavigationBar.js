import React, { useState } from 'react';
import { navItems } from '../NavItems/NavItems';
import Dropdown from '../../../components/Dropdown/Dropdown';
import logo from '../logo/aauLogo.png';
import './NvigationBar.css';

export default function NavigationBar() {
  const [dropdown, setDropdown] = useState(false);
  const handleMouseEnter = (submenu) => {
    if (submenu) {
      setDropdown(submenu);
    }
  };
  return (
    <nav className='navigationBar'>
      <>
      <img src={logo} alt="logo" />
      <span className='Title'> ADDIS ABABA UNIVERSITY </span>
      </>
      <ul className="nav-items">
        {navItems.map((item) => (
          <li
            key={item.id}
            className={item.cName}
            onMouseEnter={() => setDropdown(item.submenu ? true : false)}
            onMouseLeave={() => setDropdown(false)}
          >
            {item.icon} {/* Render the icon */}
            {item.title}{/* Add spacing between icon and text */}
            {dropdown && item.submenu && <Dropdown items={item.submenu} />}
          </li>
        ))}
      </ul>
    </nav>
  );
}
