import React, { useState } from "react";
import AdminDashboardMain from "./AdminDasboardMain";
import AdminMenu from "./AdminMenu";
import AdminHeader from "./AdminHeader";
import AddCenterModal from "./AddCenterModal";

const Admin = () => {
  const [page, setPage] = useState("Dashboard");
  const handleClick = (page) => {
    setPage(page);
  };
  return (
    <React.Fragment>
      <div className="admin-dashboard">
        <AdminMenu setPage = {handleClick} page={page}/>
        <AdminHeader pageName={page}/>
        <AddCenterModal/>
        <AdminDashboardMain pageName={page}/>
      </div>
    </React.Fragment>
  );
};

export default Admin;
