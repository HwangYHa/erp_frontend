import React, { useEffect, useState } from 'react';
import './SidebarItem.css';
import SidebarItem from './SidebarItem';
import { SideMenuItems } from './MenuItems';

export default function TestMain({ sideMenuId = -1 }) {
  const [sideMenuItems, setSideMenuItems] = useState([]);

  useEffect(() => {
    setSideMenuItems(
      SideMenuItems.filter((item) => item?.gCode === sideMenuId),
    );
  }, [sideMenuId]);

  return (
    <div className="main">
      <div className="sidebar">
        {sideMenuItems.map((item, index) => (
          <SidebarItem key={index} items={item} />
        ))}
      </div>
      <div className="content"></div>
    </div>
  );
}
