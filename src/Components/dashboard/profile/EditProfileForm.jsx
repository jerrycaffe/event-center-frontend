import React from "react";
import UserProfileImg from "../../../images/userProfileImg.png";

const EditProfileForm = () => {
  return (
    
    <div className="edit-profile">
      <div className="edit-form">
        <form className="user-edit-profile">
          <h3 className="title">Edit Profile Information</h3>
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
              <input type="text" placeholder="Bunmi" />
            </div>
            <div className="right">
              <label htmlFor="firstname">Last Name</label>
              <input type="text" placeholder="Daniels" />
            </div>
          </div>
          <div className="email-address">
            <label htmlFor="email">Email address</label>
            <input type="email" placeholder="Bunmi_d@gmail.com" />
          </div>
          <div className="phone-number">
            <label htmlFor="phone-number">Phone Number</label>
            <input type="text" placeholder="08088492993" />
          </div>
          <button className="update" type="submit">
            Update
          </button>
        </form>
      </div>
      <div className="edit-form">
        <form className="user-edit-profile">
          <p className="title">Edit Profile Information</p>

          <div>
            <label htmlFor="current-password">Current Password</label>
            <input type="password" placeholder="Enter Current Password" />
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
    </div>
  );
};
export default EditProfileForm;
