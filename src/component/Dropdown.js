import React, { useState } from 'react';
import { MenuItems } from './MenuItems';
import './Dropdown.css';
import { Link } from 'react-router-dom';

export default function Dropdown({ id, handleChangeMenuId }) {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? 'dropdown-menu active' : 'dropdown-menu'}
        style={{ left: '0px' }}
      >
        {MenuItems.filter((item) => item.key === id).map((item, index) => {
          return (
            <li key={index}>
              <Link
                className={item.cName}
                onClick={(e) => {
                  handleChangeMenuId(item.id);
                  setClick(false);
                  e.stopPropagation();
                }}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
