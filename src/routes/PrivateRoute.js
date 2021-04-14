/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { isExpired } from 'react-jwt';
import { Redirect, Route } from 'react-router-dom';

function PrivateRoute({ children, ...rest }) {
    const user = JSON.parse(localStorage.getItem('user'));
    const isMyTokenExpired = isExpired(user?.token);
    return (
        <Route
            {...rest}
            render={({ location }) =>
                !isMyTokenExpired ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: '/auth/join',
                            state: { from: location },
                        }}
                    />
                )
            }
        />
    );
}

export default PrivateRoute;
