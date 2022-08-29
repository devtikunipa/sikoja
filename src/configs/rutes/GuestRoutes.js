import React from 'react';

import Loadable from '../../components/Loadable';
import GuestLayout from '../../pages/guest';

const Home = Loadable(React.lazy(() => import('../../pages/guest/home')));
const About = Loadable(React.lazy(() => import('../../pages/guest/about')));
const Sikojas = Loadable(React.lazy(() => import('../../pages/guest/sikojas')));
const Detail = Loadable(React.lazy(() => import('../../pages/guest/detail')));


const GuestRoutes = {
    path: '/',
    element: <GuestLayout />,
    children: [
        {
            path: '/',
            element: <Home />
        },
        {
            path: 'about',
            element: <About />
        },
        {
            path: 'sikojas',
            element: <Sikojas />
        },
        {
            path: 'detail',
            children: [
                {
                    path: ':id',
                    element: <Detail />
                }
            ]
        },
    ]
}

export default GuestRoutes