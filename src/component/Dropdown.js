import React, { useState } from 'react';
import './Dropdown.css';
import { MenuItems } from './MenuItems';
import { Link } from 'react-router-dom';

const Dropdown = ({ id, handleChangeMenuId }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <ul className='dropdown-menu'>
      {
        MenuItems.filter(item => item.key === id)
          .map(item => (
            <li key={item.id}>
              <Link
                className={`${item.cName} ${item.id === selectedItem ? 'active' : ''}`}
                onClick={() => {
                  setSelectedItem(item.id);
                  handleChangeMenuId(item.id);
                }}
              >
                {item.title}
              </Link>
            </li>
          ))
      }
    </ul>
  );
};

export default Dropdown;