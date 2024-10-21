import React, { useState } from "react";
import { serviceDropdown } from "../../homepage/NavBar/NavItems/NavItems";

import "./Dropdown.css";

function Dropdown({items}) {
  const [dropdown, setDropdown] = useState(false);

  return (
    <ul className="services-submenu">
    {items.map((item, index) => (
      <li key={index}>

        <a href={item.path}>{item.icon}{item.title}</a>
      </li>
    ))}
  </ul>
);
}

export default Dropdown;