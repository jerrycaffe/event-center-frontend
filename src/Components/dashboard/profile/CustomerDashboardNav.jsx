import React from "react";
import { withRouter, Link } from "react-router-dom";
const CustomerDashboardNav = props => {
  return (
    <div className="dashboard-nav">
      <Link
        to=""
        // className="nav-btn active"
      >
        Your Profile
      </Link>
      <Link
        to=""
        // className="nav-btn"
      >
        Your Booking
      </Link>
    </div>
  );
};
export default CustomerDashboardNav;
