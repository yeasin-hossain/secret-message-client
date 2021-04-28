import { lazy } from 'react';

export const Routes = [];

export const publicRoutes = [
    {
        path: '/',
        component: lazy(() => import('../views/welcome/Welcome')),
    },
    {
        path: '/:userName',
        component: lazy(() => import('../views/Home/Home')),
    },
    // {
    //     path: '/auth/join',
    //     component: lazy(() => import('../views/Login/Join')),
    // },
];

export const authRoutes = [
    {
        path: '/auth/join',
        component: lazy(() => import('../views/Login/Join')),
    },
];
