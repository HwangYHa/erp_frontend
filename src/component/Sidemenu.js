import React from 'react';
import { Link } from 'react-router-dom';

export default function Sidemenu({ submenus }) {
  return (
    <ul className="dropdown">
      {submenus.map((submenu, index) => (
        <li key={index} className="menu-items">
          <Link to={submenu.path} href={submenu.path}>
            {submenu.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
