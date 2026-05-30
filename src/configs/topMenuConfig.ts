import { ROLES } from './roles';

export const topMenuConfig = {
  dashboard: [
    {
      title: 'Order Management',
      path: '/dashboard/orders',
      roles: [ROLES.ADMIN, ROLES.CONSULTANT],
    },

    {
      title: 'Master Data',
      path: '/dashboard/master-data',
      roles: [ROLES.ADMIN, ROLES.CONSULTANT],
    },

    {
      title: 'IQA',
      path: '/dashboard/iqa',
      roles: [ROLES.ADMIN, ROLES.CONSULTANT],
    },
  ],

  userManagement: [
    {
      title: 'Users',
      path: '/user-management/users',
      roles: [ROLES.ADMIN],
    },

    {
      title: 'Roles',
      path: '/user-management/roles',
      roles: [ROLES.ADMIN],
    },

    {
      title: 'Specialities',
      path: '/user-management/specialities',
      roles: [ROLES.ADMIN],
    },
  ],

  settings: [
    {
      title: 'Profile Information',
      path: '/settings/profile',
      roles: [ROLES.ADMIN, ROLES.CONSULTANT, ROLES.HOSPITAL],
    },
  ],
};
