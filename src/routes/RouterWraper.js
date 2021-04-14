/* eslint-disable react/no-array-index-key */
import { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { publicRoutes, Routes } from './index';
import PrivateRoute from './PrivateRoute';

const RouterWrapper = () => (
    <Router>
        <Suspense fallback={<div>Loading...</div>}>
            <Switch>
                {publicRoutes.map((router, index) => (
                    <Route exact key={index} path={router.path}>
                        <router.component />
                    </Route>
                ))}
                {Routes.map((router, index) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <PrivateRoute exact key={index} path={router.path}>
                        <router.component />
                    </PrivateRoute>
                ))}
            </Switch>
        </Suspense>
    </Router>
);
export default RouterWrapper;
