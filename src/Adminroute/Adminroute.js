import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

const Adminroute = ({ children, ...rest }) => {
    const { user, admin } = useAuth();
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user && admin ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/home",
                            state: { from: location }
                        }}
                    />
                )
            }
        >

        </Route>
    );
};

export default Adminroute;