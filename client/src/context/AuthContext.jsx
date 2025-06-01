import React, {createContext, useState } from 'react'
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2';


const AuthContext = createContext();
function AuthProvider({children}) {
    const [isAuth,setIsAuth] = useState(false);
    const navigate = useNavigate();
    function login(email,password) {
        if(email=='admin@gmail.com' && password=='admin'){
            navigate('/dashboard/intro');
            Swal.fire({
                title: 'Login Successful',
                text: 'Welcome to the Dashboard!',
                icon: 'success',
            });
        }
        else{
            Swal.fire({
                title: 'Login Failed',
                text: 'Invalid email or password',
                icon: 'error',
            });
        }
    }
    function logout(){
        setIsAuth(false);
        navigate('/login');
        Swal.fire({
            title: 'Logout Successful',
            text: 'You have been logged out.',
            icon: 'success',
        });
    }
  return (
    <AuthContext.Provider value={{login,logout}}>
        {children}
    </AuthContext.Provider>
  );
}
export {AuthProvider};
export default AuthContext;


