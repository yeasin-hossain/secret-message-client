import { lazy } from 'react';

export const Routes = [
    {
        path: '/',
        component: lazy(() => import('../views/Home/Home')),
    },
    {
        path: '/profile',
        component: lazy(() => import('../views/Profile/Profile')),
    },
    {
        path: '/rock',
        component: lazy(() => import('../views/Profile/Rock')),
    },
];

export const publicRoutes = [
    {
        path: '/join',
        component: lazy(() => import('../views/Login/Join')),
    },
];
// export default Routes;
