import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup  } from "firebase/auth";
import { app } from '../../Config/Firebase';

export const UserAuth = createContext();

const auth = getAuth(app)

const AuthContext = ({children}) => {



    const [user, setUser] = useState(null) 
    const [loading, setLoading] = useState(true)

     

    const GoogleProvider = new GoogleAuthProvider();

    // Create User
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // Create User with Google 
    const createUserGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, GoogleProvider);
    }

    // Update User information
    const updateUser = (userInfo) => {
        setLoading(true)
        return updateProfile(auth.currentUser,userInfo)
    }


    // Log in with Email and Password
    const login = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }


    // user log in Google 
    const googleLogIn = () => {
        setLoading(true)
        return signInWithPopup(auth, GoogleProvider);
    }
    
    


    // User log in 
    useEffect( () =>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            setLoading(false)
        });

        return () => unsubscribe();
    }, [user])


    // sign out 
    const logOut = () => {
        return signOut(auth)
         
    }


    return (
        <UserAuth.Provider value={{createUser, login}}>
            {children}
        </UserAuth.Provider>
    );
};

export default AuthContext;