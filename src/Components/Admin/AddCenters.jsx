import React from "react";
import LOGO from "../../images/LOGO.svg";
import UserImage from "../../images/user-img.png";
import ConfrenceImg from "../../images/conference-room-17 1.png";
import BanquetImg from "../../images/Banquet hall 1.png";
import Center3 from "../../images/event-space-rental-3 1.png";
const AddCenters = () => {
  return (
    <div className="add-center-wrapper">
      <div className="leftside-bar">
        <div className="upper-item">
          <div className="dashboard-logo">
            <a href="#">
              <img src={LOGO} alt="magnitude event hall" />
            </a>
          </div>
          <div className="nav-menu">
            <div className="dashboard-item">
              <i className="dashboard-icon"></i>
              <a href="">Dashboard</a>
            </div>
            <div className="calendar-item">
              <i className="calendar-icon"></i>
              <a href="">Carlendar</a>
            </div>
            <div className="bookings-item">
              <i className="bookings-icon"></i>
              <a href="">Bookings</a>
            </div>
            <div className="centers-item dashboard-active">
              <i className="centers-icon "></i>
              <a href="">Event Centers</a>
            </div>
            <div className="feedback-item">
              <i className="feedback-icon"></i>
              <a href="">Feedbacks</a>
            </div>
            <div className="settings-item">
              <i className="settings-icon"></i>
              <a href="">Settings</a>
            </div>
          </div>
        </div>
        <div className="lower-item">
          <div className="logout-item">
            <i className="logout-icon"></i>
            <a href="">Log Out</a>
          </div>
        </div>
      </div>
      <div className="main-add-center">
        <div className="add-center-header">
          <h3>Event Centers</h3>
          <div className="header-right">
            <form action="" className="search-bar">
              <input placeholder="Search" type="text" />
              <button type="submit">
                <i className="search-icon"></i>
              </button>
            </form>
            <div className="notification">
              <i className="notification-icon"></i>
            </div>
            <div className="user-profile-img">
              <img src={UserImage} alt="user" />
              <p>Admin</p>
            </div>
          </div>
        </div>
        <div className="add-center-body">
          <div className="admin-center-filter">
            <form action="" className="admin-filter">
              <div className="input-group">
                <label>View All</label>
                <input type="checkbox" name="" id="" />
              </div>
              <div className="input-group">
                <label>M & S</label>
                <input type="checkbox" name="" id="" />
              </div>
              <div className="input-group">
                <label>Protea</label>
                <input type="checkbox" name="protea" id="" />
              </div>
              <div className="input-group">
                <label>L'Oreal</label>
                <input type="checkbox" name="loreal" id="" />
              </div>
            </form>
            <button>Add New Center</button>
          </div>
          <div className="admin-view-all">
            <div className="admin-view-all-card">
              <h3 className="center-name">M & S Event Center</h3>
              <img src={ConfrenceImg} alt="conference" />
            </div>
            <div className="admin-view-all-card">
              <h3 className="center-name">Protea Event Center</h3>
              <img src={BanquetImg} alt="" />
            </div>
            <div className="admin-view-all-card">
              <h3 className="center-name">L'Oreal Event Hall</h3>
              <img src={Center3} alt="l oreal event" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCenters;
