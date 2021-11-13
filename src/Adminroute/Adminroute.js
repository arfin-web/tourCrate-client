import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

const Adminroute = ({ children, ...rest }) => {
    const { user, loading, admin } = useAuth();
    if (loading) {
        return <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    }
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