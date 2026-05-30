import { topMenuConfig } from '@/configs/topMenuConfig';
import React from 'react';
import { useLocation } from 'react-router-dom';

const TopHeader = () => {
  const location = useLocation();

  let menus = [];

  if (location.pathname.includes('/dashboard')) {
    menus = topMenuConfig.dashboard;
  }

  if (location.pathname.includes('/user-management')) {
    menus = topMenuConfig.userManagement;
  }

  if (location.pathname.includes('/settings')) {
    menus = topMenuConfig.settings;
  }

  return (
    <div>
      {menus.map((menu) => (
        <Link key={menu.path} to={menu.path}>
          {menu.title}
        </Link>
      ))}
    </div>
  );
};

export default TopHeader;
