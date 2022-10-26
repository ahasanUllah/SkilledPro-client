import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import app from '../../firebase/firebase.config';


export const AuthContext = createContext()
const auth = getAuth(app)
const provider = new GoogleAuthProvider()


const AuthProvider = ({children}) => {
    const [user, setUser] = useState([])
    //Create User 
    const createNewUser = (email, password) => {
       return createUserWithEmailAndPassword(auth, email, password)
    }

    //Update FullName and Photo url
    const updateUser = (name, photoUrl) => {
       return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photoUrl
          })
    }

    //Login with email password
    const userLogin = (email, password) => {
       return signInWithEmailAndPassword(auth, email, password)
    }

    //Google Login
    const googleLogin = () => {
        return signInWithPopup(auth, provider)
    }

    //Logout
    const logoutUser = () => {
        return signOut(auth)
    }

    useEffect(() => {
       const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            console.log('currentUser', currentUser);
        })
        return () => unSubscribe()
    }, [])

    const authInfo = {
        user,
        googleLogin,
        createNewUser,
        userLogin,
        updateUser,
        logoutUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;