import React, { useEffect, useState } from 'react';
import './SidebarItem.css';
import SidebarItem from './SidebarItem';
import { SideMenuItems } from './MenuItems';
export default function Sudebar({ sideMenuId = 1 }) {
  const [sideMenuItems, setSideMenuItems] = useState([]);
  const selectMenu = SideMenuItems.filter((item) => item?.gCode === sideMenuId);

  useEffect(() => {
    setSideMenuItems(selectMenu);
  }, [sideMenuId]);
  return (
    <div className="sidebar">
      {sideMenuItems.map((item, index) => (
        <SidebarItem key={index} items={item}></SidebarItem>
      ))}
    </div>
  );
}