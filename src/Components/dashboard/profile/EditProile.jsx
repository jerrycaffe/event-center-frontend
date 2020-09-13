import React, { useContext } from "react";
import { Link } from "react-router-dom";

import Header from "../../landingPage/Header";
import Footer from "../../landingPage/Footer";
import NewsLetter from "../../landingPage/NewsLetter";
import UserProfileImg from "../../../images/userProfileImg.png";
import AuthContext from "../../../Context/authContext";

const EditProile = () => {
  const context = useContext(AuthContext);
  console.log(context, "This is the user profile");
  const { id, email, firstname, lastname, gender } = context.user;
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
                Profile
              </a>
            </div>
            <div className="profile-area">
              <div className="dashboard-nav">
                <Link
                  to={`/dashboard/profile/${id}`}
                  className="nav-btn active"
                >
                  Your Profile
                </Link>
                <Link to="/dashboard/bookings" className="nav-btn">
                  Your Booking
                </Link>
              </div>
              <div className="edit-profile">
                <div className="edit-form">
                  <form className="user-edit-profile">
                    <h3>Edit Profile Information</h3>

                    <div className="form-category">
                      <div>
                        <img src={UserProfileImg} alt="" />
                      </div>
                      <div className="pd-left">
                        <label htmlFor="image">Profile Picture</label>
                        <input
                          type="file"
                          name="user-img"
                          id="user-img"
                          placeholder="Upload Image"
                        />
                      </div>
                    </div>
                    <div className="fullname">
                      <div className="left">
                        <label htmlFor="firstname">First Name</label>
                        <input type="text" defaultValue={firstname} />
                      </div>
                      <div className="right">
                        <label htmlFor="firstname">Last Name</label>
                        <input type="text" defaultValue={lastname} />
                      </div>
                    </div>
                    <div className="email-address">
                      <label htmlFor="email">Email address</label>
                      <input type="email" defaultValue={email} />
                    </div>
                    <div className="phone-number">
                      <label htmlFor="phone-number">Gender </label>
                      <input type="text" defaultValue={gender} />
                    </div>
                    <button className="update" type="submit">
                      Update
                    </button>
                  </form>
                </div>
                <div className="edit-form">
                  <form className="user-edit-profile">
                    <p>Edit Profile Information</p>

                    <div>
                      <label htmlFor="current-password">Current Password</label>
                      <input
                        type="password"
                        placeholder="Enter Current Password"
                      />
                    </div>
                    <div>
                      <label htmlFor="new-password">New Password</label>
                      <input type="password" placeholder="Enter New Password" />
                    </div>
                    <button className="password" type="submit">
                      Change Password
                    </button>
                  </form>
                </div>
                <div className="edit-form">
                  <form className="user-edit-profile">
                    <p className="">Delete Account</p>

                   
                  
                    <button className="delete" type="submit">
                      Delete
                    </button>
                    <p>This action cannot be undone</p>
                  </form>
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
export default EditProile;
