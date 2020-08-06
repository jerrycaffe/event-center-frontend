import React, { useContext } from "react";
import white_logo from "../../../images/Admin/white_logo.svg";
import Axios from "axios";
import AuthContext from "../../../Context/authContext";
import { withRouter } from "react-router-dom";

const AdminMenu = ({setPage,page,history}) => {
  const context = useContext(AuthContext);
  const handleLogout=()=>{
    localStorage.clear();
    context.logoutUser();
    delete Axios.defaults.headers.common["authorization"];
    history.replace("/");
  }
  return (
    <div className="admin-menu">
      <div>
        <img src={white_logo} alt="logo" />
      </div>
      <p  className={page==="Dashboard"?"admin_active":""} onClick={()=>setPage("Dashboard")}>
        <i className="dashboard_icon"></i>
        <span>Dashboard</span>
      </p>
      <p  className={page==="Calendar"?"admin_active":""}  onClick={()=>setPage("Calendar")}>
        <i className="calender_icon"></i>
        <span>Calendar</span>
      </p>
      <p  className={page==="Bookings"?"admin_active":""}  onClick={()=>setPage("Bookings")}>
        <i className="bookings_icon"></i>
        <span>Bookings</span>
      </p>
      <p  className={page==="Event Centers"?"admin_active":""}  onClick={()=>setPage("Event Centers")}>
        <i className="centers_icon"></i>
        <span>Event Centers</span>
      </p>
      <p  className={page==="Feedbacks"?"admin_active":"" }  onClick={()=>setPage("Feedbacks")}>
        <i className="feedbacks_icon"></i>
        <span>Feedbacks</span>
      </p>
      <p  className={page==="Settings"?"admin_active":""}  onClick={()=>setPage("Settings")}>
        <i className="settings_icon"></i>
        <span>Settings</span>
      </p>
      <p className="admin-logout" onClick={handleLogout}>
        <i className="logout_icon"></i>
        <span>Log Out</span>
      </p>
    </div>
  );
};

export default withRouter(AdminMenu);
