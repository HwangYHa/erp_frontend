import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SidebarItem.css';
import Sidemenu from './Sidemenu';

export default function SidebarItem({ items }) {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <>
      <ul className="side-wrapper active">
        <li
          onClick={handleClick}
          className={click ? 'menu-items active' : 'menu-items'}
        >
          {items.submenu ? (
            <>
              <Link className="menu">
                {items.title}
                <i className="bi-chevron-down" />{' '}
              </Link>
              <span className="new-window" />
              {/* <i className="bi bi-check-lg"/> */}
              {click && (
                <Sidemenu
                  submenus={items.submenu}
                />
              )}
            </>
          ) : (
            <a href={items.path}>{items.title}</a>
          )}
        </li>
        <div className="section-3-toggle">
          <div className="wrapper-toolbar">
            <div className="pull-left">메뉴접기</div>
            <div className="pull-right">
              <div className="wrapper-flipswitch">
                <input type="checkbox" className="flipswitch-checkbox" />
                <label className="flipswitch-label">
                  <span className="flipswitch-inner" />
                  <span className="flipswitch-switch" />
                </label>
              </div>
            </div>
          </div>
        </div>
      </ul>
    </>
  );
}