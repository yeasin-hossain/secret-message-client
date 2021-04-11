/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Redirect, Route } from 'react-router-dom';

function PrivateRoute({ children, ...rest }) {
    return (
        <Route
            {...rest}
            render={({ location }) =>
                // eslint-disable-next-line no-constant-condition
                true ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: '/join',
                            state: { from: location },
                        }}
                    />
                )
            }
        />
    );
}

export default PrivateRoute;
