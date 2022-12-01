import React, { createContext } from 'react';

export const UserAuth = createContext();

const AuthContext = ({children}) => {

    const demo = {
        name: 'MK'
    }

    return (
        <UserAuth.Provider value={{demo}}>
            {children}
        </UserAuth.Provider>
    );
};

export default AuthContext;