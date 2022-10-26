import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()

    if(loading) {
        return <div className="flex items-center justify-center space-x-2 min-h-screen">
        <div className="w-4 h-4 rounded-full animate-pulse bg-blue-600"></div>
        <div className="w-4 h-4 rounded-full animate-pulse bg-blue-600"></div>
        <div className="w-4 h-4 rounded-full animate-pulse bg-blue-600"></div>
    </div>
    }
    
    if(user?.uid){
        return children
    } 
   return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default PrivateRoute;