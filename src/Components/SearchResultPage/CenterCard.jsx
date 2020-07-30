import React, { Component } from "react";
import centerSearch from "../../images/center-search.png";
import homeIcon from "../../images/home-icon.png";

class CenterCard extends Component {
  render() {
    return (
      <div className="center-card">
        <div className="center-image">
          <img className="center-img" src={this.props.centerImg} alt="center search" />
        </div>
        <div className="center-info">
          <div className="center-address">
            <div className="address-left">
              <p>L’Oreal Event Center</p>
              <p>Ikeja, Lagos.</p>
            </div>
            <div className="address-right">
              <img src={homeIcon} alt="" />

              <p>
                {" "}
                500 guests
                <br />
                capacity
              </p>
            </div>
          </div>
          <div className="facilities">
            <div className="facilities-icons">
              <div className="top-icons">
                <i className="police-icon"></i>
                <i className="wireless-icon mg-left"></i>
                <i className="air-condition-icon mg-left"></i>
              </div>
              <div className="bottom-icons">
                <i className="parking-icon"></i>
                <i className="generator-icon mg-left"></i>
                <i className="toilet-icon mg-left"></i>
              </div>
            </div>
            <div className="ratings">
              <div className="rating-left">
                <div className="star-icons"></div>
                <p>200 Reviews</p>
              </div>
              <div className="rating-right">
                <p>1.0</p>
              </div>
            </div>
          </div>
          <div className="more-details">
            <a href="#" className="center-details-btn">
              More Details
            </a>
          </div>
        </div>
      </div>
    );
  }
}
export default CenterCard;
