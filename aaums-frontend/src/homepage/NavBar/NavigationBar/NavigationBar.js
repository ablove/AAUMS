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
      <img src={logo} alt="logo" />
      <h3 className='Title'> ADDIS ABABA UNIVERSITY </h3>
      
      <ul className="nav-items">
        {navItems.map((item) => (
          <li
            key={item.id}
            className="nav-item"
            onMouseEnter={() => handleMouseEnter(item.submenu)}
            onMouseLeave={() => setDropdown(null)}
          >
            {item.icon}
            {item.title}
            {dropdown && item.submenu && <Dropdown items={dropdown} />}
          </li>
        ))}
      </ul>
    </nav>
  );
}
