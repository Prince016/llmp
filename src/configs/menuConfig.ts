import { ROLES } from '@/constants/roles';

export const menuConfig = [
  {
    title: 'Order Management',
    path: '/orders',
    roles: [ROLES.ADMIN, ROLES.CONSULTANT],
  },

  {
    title: 'Master Data',
    roles: [ROLES.ADMIN, ROLES.CONSULTANT],
    children: [
      {
        title: 'Samples',
        path: '/master-data/samples',
        roles: [ROLES.ADMIN],
      },
      {
        title: 'Tests',
        path: '/master-data/tests',
        roles: [ROLES.ADMIN],
      },
      {
        title: 'SNOMED Codes',
        path: '/master-data/snomed-codes',
        roles: [ROLES.ADMIN],
      },
      {
        title: 'Tariff Codes',
        path: '/master-data/tariff-codes',
        roles: [ROLES.ADMIN],
      },
      {
        title: 'Hospitals',
        path: '/master-data/hospitals',
        roles: [ROLES.ADMIN],
      },
      {
        title: 'Canned Reports',
        path: '/master-data/canned-reports',
        roles: [ROLES.CONSULTANT],
      },
      {
        title: 'Download Billing Report',
        path: '/billing-report',
        roles: [ROLES.ADMIN, ROLES.CONSULTANT],
      },
    ],
  },

  {
    title: 'IQA',
    roles: [ROLES.ADMIN, ROLES.CONSULTANT],
    children: [
      {
        title: 'IQA Tables',
        path: '/iqa/tables',
        roles: [ROLES.ADMIN],
      },
      {
        title: 'IQA Settings',
        path: '/iqa/settings',
        roles: [ROLES.ADMIN],
      },
      {
        title: 'IQA Cases',
        path: '/iqa/cases',
        roles: [ROLES.CONSULTANT],
      },
    ],
  },

  {
    title: 'Case Reports',
    path: '/case-reports',
    roles: [ROLES.HOSPITAL],
  },
];
