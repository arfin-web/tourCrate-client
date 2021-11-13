import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

const Privateroute = ({ children, ...rest }) => {
    const { user, loading } = useAuth();
    if (loading) {
        return <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    }
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/signin",
                            state: { from: location }
                        }}
                    />
                )
            }
        >

        </Route>
    );
};

export default Privateroute;