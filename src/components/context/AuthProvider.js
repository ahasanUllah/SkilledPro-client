import React, { createContext, useEffect, useState } from 'react';
import {
   createUserWithEmailAndPassword,
   getAuth,
   GithubAuthProvider,
   GoogleAuthProvider,
   onAuthStateChanged,
   signInWithEmailAndPassword,
   signInWithPopup,
   signOut,
   updateProfile,
} from 'firebase/auth';
import app from '../../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
   const [user, setUser] = useState([]);
   const [displayError, setDisplayError] = useState('');
   const [loading, setLoading] = useState(true);
   //Create User
   const createNewUser = (email, password) => {
      setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password);
   };

   //Update FullName and Photo url
   const updateUser = (name, photoUrl) => {
      return updateProfile(auth.currentUser, {
         displayName: name,
         photoURL: photoUrl,
      });
   };

   //Login with email password
   const userLogin = (email, password) => {
      setLoading(true);
      return signInWithEmailAndPassword(auth, email, password);
   };

   //Google Login
   const googleLogin = () => {
      setLoading(true);
      return signInWithPopup(auth, provider);
   };

   //Github Login
   const githubLogin = () => {
      setLoading(true);
      return signInWithPopup(auth, githubProvider);
   };

   //Logout
   const logoutUser = () => {
      return signOut(auth);
   };

   useEffect(() => {
      const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
         setUser(currentUser);

         setLoading(false);
      });
      return () => unSubscribe();
   }, []);

   const authInfo = {
      user,
      googleLogin,
      createNewUser,
      userLogin,
      updateUser,
      logoutUser,
      githubLogin,
      displayError,
      setDisplayError,
      loading,
   };
   return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
