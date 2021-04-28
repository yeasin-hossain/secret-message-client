/* eslint-disable react/no-array-index-key */
import { Spin } from 'antd';
import { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AuthRoutes from './AuthRoutes';
import { authRoutes, publicRoutes, Routes } from './index';
import PrivateRoute from './PrivateRoute';

const RouterWrapper = () => (
    <Router>
        <Suspense
            fallback={
                <div className="spinnerCss">
                    <Spin />
                </div>
            }
        >
            <Switch>
                {publicRoutes.map((router, index) => (
                    <Route exact key={index} path={router.path}>
                        <router.component />
                    </Route>
                ))}
                {Routes.map((router, index) => (
                    <PrivateRoute exact key={index} path={router.path}>
                        <router.component />
                    </PrivateRoute>
                ))}
                {authRoutes.map((router, index) => (
                    <AuthRoutes exact key={index} path={router.path}>
                        <router.component />
                    </AuthRoutes>
                ))}
            </Switch>
        </Suspense>
    </Router>
);
export default RouterWrapper;
