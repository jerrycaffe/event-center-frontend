import React, {useContext} from "react";
import { Link, NavLink, Switch, Route } from "react-router-dom";
import AuthState from "../../../Context/authState"

import Header from "../../landingPage/Header";
import Footer from "../../landingPage/Footer";
import NewsLetter from "../../landingPage/NewsLetter";
import CustomerDashboardNav from "./CustomerDashboardNav";
import EditProfileForm from "./EditProfileForm";
import CustomerViewBooking from "./CustomerViewBooking";

const EditProile = props => {
  const context = useContext(AuthState)
  
  
  return (
    <React.Fragment>
    { console.log(context)}
      <div className="container">
        <Header />
        <div className="content-wrap">
          <div className="profile-wrapper">
            <div className="page-indicator">
              <NavLink to="/" className="home">
                Home
              </NavLink>
              <i className="indicator-divider"></i>
              <NavLink to={props.location} className="home">
                Profile
              </NavLink>
            </div>
            <div className="profile-area">
              <CustomerDashboardNav />
            <Switch>
            <Route
            path="/dashboard/profile/:id"
            component={EditProfileForm}
          />
            <Route
            path="/customer/view/bookings"
            render={CustomerViewBooking}
          />
              <EditProfileForm/>

              <CustomerViewBooking/>
            </Switch>
            </div>
          </div>
          <NewsLetter />
          <Footer />
        </div>
      
        
      </div>
    </React.Fragment>
  );
};
export default EditProile;
