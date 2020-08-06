import React, { useEffect, useContext } from "react";
import search_icon from "../../../images/search.svg";
import bell from "../../../images/notification 1.png";
import AuthContext from "../../../Context/authContext";

const AdminHeader = ({ pageName }) => {
  const date = new Date().toDateString();
  const context = useContext(AuthContext);
  let adminImage = context.admin.logo ? context.admin.logo : "";
  let adminName = context.admin.firstname ? context.admin.firstname : "";
  return (
      <div className="admin_header-container">
    <div className="admin_header">
      <div>
        <h2>{pageName}</h2>
        <p><strong>{date.substr(date.indexOf(" ") + 1)}</strong></p>
      </div>
      <div className="search_admin">
        <input type="search" name="" id="" placeholder="Search" />
        <button>
          <img src={search_icon} alt="" />
        </button>
      </div>
      <div className="admin_logo_section">
        <i>
          <img src={bell} alt="" />
        </i>
        <div className="admin_logo-container">
          <img src={adminImage} alt="admin logo" />
        </div>
        <p>{adminName}</p>
      </div>
    </div>
    <button className="add_center"><strong>Add New Center</strong></button>
    </div>
  );
};

export default AdminHeader;
