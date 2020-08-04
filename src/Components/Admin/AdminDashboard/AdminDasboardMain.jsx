import React from 'react'

const AdminDashboardMain = ({pageName}) => {
    console.log(pageName);
    return ( <React.Fragment>
        <div style={{backgroundColor:'cyan',height:"80rem",width:"80%",marginLeft:"auto"}}>
    <strong >{pageName}</strong>
        </div>
    </React.Fragment> );
}
 
export default AdminDashboardMain;