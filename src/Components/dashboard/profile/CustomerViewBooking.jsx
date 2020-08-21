import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

import Header from "../../landingPage/Header";
import Footer from "../../landingPage/Footer";
import NewsLetter from "../../landingPage/NewsLetter";
import UserProfileImg from "../../../images/userProfileImg.png";
import AuthContext from "../../../Context/authContext";

const CustomerViewBooking = () => {
  const context = useContext(AuthContext);
  console.log(context.user, "This is the user profile");
  const { id } = context.user;
  useEffect(()=>{
const requestBookings = async()=>{
  try {
   const userBookings = await Axios.get("https://magnitude-event-manager.herokuapp.com/api/auth/customer/bookings")
   console.log(userBookings);
   
  } catch (error) {
    console.log(error);
    
  }
}
requestBookings()
  }, [])
  return (
    <React.Fragment>
      <div className="container">
        <Header />
        <div className="content-wrap">
          <div className="profile-wrapper">
            <div className="page-indicator">
              <Link to="/" className="home">
                Home
              </Link>
              <i className="indicator-divider"></i>
              <a href="#" className="home">
                Search
              </a>
            </div>
            <div className="profile-area">
              <div className="dashboard-nav">
                <Link
                  to={`/dashboard/profile/${id}`}
                  className="nav-btn"
                >
                  Your Profile
                </Link>
                <Link to="/dashboard/bookings" className="nav-btn active">
                  Your Booking
                </Link>
              </div>
              <div className="edit-profile">
                <div className="edit-form">
                 List all bookings here
                </div>
               
              </div>
            </div>
          </div>
          <NewsLetter />
          <Footer />
        </div>
      </div>
    </React.Fragment>
  );
};
export default CustomerViewBooking;
