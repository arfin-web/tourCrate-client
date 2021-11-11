import React, { createContext } from 'react';
import useFirebase from '../Hooks/useFirebase';

export const authContext = createContext();

const Authprovider = ({ children }) => {
    const allContext = useFirebase();

    return (
        <authContext.Provider value={allContext}>
            {children}
        </authContext.Provider>
    );
};

export default Authprovider;