import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Sidemenu({ submenus }) {
  const [selectedSubject, setSelectedSubject] = useState('');

  return (
    <ul className="dropdown">
      {submenus.map((submenu, index) => (
        <li key={index} className="menu-items">
          <Link to={`${submenu.path}?id=${submenu.id}`} onClick={() => setSelectedSubject(submenu.subject)} >
            {submenu.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}