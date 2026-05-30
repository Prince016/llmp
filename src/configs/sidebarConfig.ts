import { ROLES } from '@/constants/roles';

export const sidebarConfig = [
  {
    title: 'Dashboard',
    path: '/dashboard',
    roles: [ROLES.ADMIN, ROLES.CONSULTANT, ROLES.HOSPITAL],
  },

  {
    title: 'User Management',
    path: '/user-management',
    roles: [ROLES.ADMIN],
  },

  {
    title: 'Settings',
    path: '/settings',
    roles: [ROLES.ADMIN, ROLES.CONSULTANT, ROLES.HOSPITAL],
  },
];
