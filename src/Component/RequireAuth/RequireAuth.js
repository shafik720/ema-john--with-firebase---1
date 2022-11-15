import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const RequireAuth = () => {
    function AuthProvider({children}){
        const[user] = useAuthState(auth);
    }
    return (
        <div>
            
        </div>
    );
};

export default RequireAuth;