import React, { useContext } from 'react';
import AuthContext from '../../../Context/authContext';

const AdminDashboardMain = ({pageName}) => {
    const context = useContext(AuthContext)
    console.log(context.admin);
    return ( <React.Fragment>
        <div style={{backgroundColor:'cyan',height:"80rem",width:"80%",marginLeft:"auto"}}>
    <strong >{pageName}</strong>
        </div>
    </React.Fragment> );
}
 
export default AdminDashboardMain;