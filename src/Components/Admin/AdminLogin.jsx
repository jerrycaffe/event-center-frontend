import React from 'react';
import Footer from '../landingPage/Footer';
import LoginHeader from '../login/LoginHeader';
import AdminLoginForm from './AdminLoginForm';

const AdminLogin = () => {
    return ( 
        <React.Fragment>
        <div className="signin-up-body">
         <LoginHeader/>
       <AdminLoginForm /> 
       <Footer/>
       </div>
     </React.Fragment>
     );
}
 
export default AdminLogin;