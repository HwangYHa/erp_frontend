import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './LNB.css';
import Dropdown from './Dropdown';
import QuickMenu from './QuickMenu';
export default function LNB({ handleChangeMenuId }) {
  const [showMenuKey, setIsShowMenuKey] = useState('');

  const MENU_LIST = [
    { title: 'MyPage', key: '1' },
    { title: 'Self-Customizing', key: '2' },
    { title: '재고 I', key: '3' },
    { title: '재고 II', key: '4' },
    { title: '회계 I', key: '5' },
    { title: '회계 II', key: '6' },
    { title: '관리', key: '7' },
    { title: '세무', key: '8' },
    { title: '그룹웨어', key: '9' },
    { title: '데이터센터', key: '10' },
  ];

  const onClickMenuToggle = (menuKey) => {
    if (showMenuKey === menuKey) {
      setIsShowMenuKey(menuKey);
    } else {
      console.log('off');
      setIsShowMenuKey(menuKey);
    }
  };

  const topMenus = MENU_LIST.map((item, idx) => {
    return (
      <li
        key={idx}
        onClick={() => {
          onClickMenuToggle(item.key);
        }}
        className={showMenuKey === item.key ? 'nav-item active' : 'nav-item'}
      >
        <Link className="nav-links">{item.title}</Link>
        {showMenuKey === item.key && (
          <Dropdown id={item.key} handleChangeMenuId={handleChangeMenuId} />
        )}
      </li>
    );
  });

  return (
    <>
      <QuickMenu />
      <nav className="navbar">
        <div className="section-1">
          <ul className="nav-menu">{topMenus}</ul>
        </div>
        <div className="section-2 " />
      </nav>
      {/* <Section/> */}
    </>
  );
}
