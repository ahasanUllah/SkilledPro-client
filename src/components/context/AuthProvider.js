import React, { createContext } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateProfile} from 'firebase/auth'
import app from '../../firebase/firebase.config';


export const AuthContext = createContext()
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
const AuthProvider = ({children}) => {

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

    const authInfo = {
        googleLogin,
        createNewUser,
        userLogin,
        updateUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;