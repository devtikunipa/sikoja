import React from 'react';

import Loadable from '../../components/Loadable';

const Login = Loadable(React.lazy(() => import('../../pages/auth/Login')));

const AuthRoutes = {
    path: '/login',
    element: <Login />,
    children: []
}

export default AuthRoutes