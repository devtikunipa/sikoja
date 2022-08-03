import React from 'react';

import AdminLayout from '../../pages/adminOnly/adminLayouts';
import Loadable from '../../components/Loadable';

const Dashboard = Loadable(React.lazy(() => import('../../pages/adminOnly/dashboard')));
const Sikoja = Loadable(React.lazy(() => import('../../pages/adminOnly/sikoja')));
const Sibolang = Loadable(React.lazy(() => import('../../pages/adminOnly/sibolang')));


const AdminRoutes = {
    path: '/',
    element: <AdminLayout />,
    children: [
        {
            path: '/',
            element: <Dashboard />,
        },
        {
            path: 'dashboard',
            element: <Dashboard />,
        },
        {
            path: 'sikoja',
            element: <Sikoja />,
        },
        {
            path: 'sibolang',
            element: <Sibolang />,
        },
    ]
}

export default AdminRoutes