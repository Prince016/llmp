import { Routes, Route } from 'react-router-dom';

import Orders from '@/pages/Orders/Orders';
import OrderForm from '@/pages/Orders/OrderForm';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Orders />} />
      <Route path="/orders/new" element={<OrderForm />} />

      <Route path="/orders/:orderId" element={<OrderForm />} />
    </Routes>
  );
};

export default AppRoutes;
// -----------------------------------------------------------------------------------------------------------
// import { Routes, Route } from 'react-router-dom';

// import MainLayout from '@/layout/MainLayout';

// import ProtectedRoute from './ProtectedRoute';
// import RoleRoute from './RoleRoute';

// import Orders from '@/pages/Orders';
// import MasterData from '@/pages/MasterData';
// import IQA from '@/pages/IQA';

// import Users from '@/pages/Users';
// import Roles from '@/pages/Roles';
// import Specialities from '@/pages/Specialities';

// import Profile from '@/pages/Profile';
// import CaseReports from '@/pages/CaseReports';

// import { ROLES } from '@/constants/roles';

// const AppRoutes = () => {
//   return (
//     <Routes>
//       {/* <Route path="/login" element={<Login />} /> */}

//       <Route element={<ProtectedRoute />}>
//         <Route element={<MainLayout />}>
//           {/* ================= DASHBOARD ================= */}

//           <Route path="/dashboard/orders" element={<Orders />} />
//         </Route>

//         {/* Master Data */}
//         <Route element={<RoleRoute allowedRoles={[ROLES.ADMIN, ROLES.CONSULTANT]} />}>
//           <Route path="/dashboard/master-data" element={<MasterData />} />
//         </Route>

//         <Route element={<RoleRoute allowedRoles={[ROLES.ADMIN, ROLES.CONSULTANT]} />}>
//           <Route path="/dashboard/iqa" element={<IQA />} />
//         </Route>

//         <Route element={<RoleRoute allowedRoles={[ROLES.ADMIN]} />}>
//           <Route path="/user-management/users" element={<Users />} />

//           <Route path="/user-management/roles" element={<Roles />} />

//           <Route path="/user-management/specialities" element={<Specialities />} />
//         </Route>

//         <Route
//           element={<RoleRoute allowedRoles={[ROLES.ADMIN, ROLES.CONSULTANT, ROLES.HOSPITAL]} />}
//         >
//           <Route path="/settings/profile" element={<Profile />} />
//         </Route>

//         <Route element={<RoleRoute allowedRoles={[ROLES.HOSPITAL]} />}>
//           <Route path="/case-reports" element={<CaseReports />} />
//         </Route>
//       </Route>
//     </Routes>
//   );
// };

// export default AppRoutes;
