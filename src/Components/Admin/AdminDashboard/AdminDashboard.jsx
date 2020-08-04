import React, { useState } from "react";
import AdminDashboardMenu from "./AdminDashboardMenu";
import AdminDashboardMain from "./AdminDasboardMain";

const AdminDashboard = () => {
  const [page, setPage] = useState("Dashboard");
  const handleClick = (page) => {
    setPage(page);
  };
  return (
    <React.Fragment>
      <div className="admin-dashboard">
        <AdminDashboardMenu setPage = {handleClick} page={page}/>
        <AdminDashboardMain pageName={page}/>
      </div>
    </React.Fragment>
  );
};

export default AdminDashboard;
