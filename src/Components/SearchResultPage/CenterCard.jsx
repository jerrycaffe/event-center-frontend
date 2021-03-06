import React, { Component } from "react";
import {Link} from "react-router-dom";

import centerSearch from "../../images/center-search.png";
import homeIcon from "../../images/home-icon.png";

const CenterCard = (props)=>{

  // /view/center/:id
    const {centerImg, name, located, capacity, price, id} = props
    return (
      <div className="center-card">
        <div className="center-image">
          <img className="center-img" src={centerImg} alt="center search" />
        </div>
        <div className="center-info">
          <div className="center-address">
            <div className="address-left">
              <p>{name}</p>
              <p>{located}</p>
            </div>
            <div className="address-right">
              <img src={homeIcon} alt="" />

              <p>
                {" "}
                {capacity}
                <br />
                Capacity
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
                <p>Price N{price}</p>
              </div>
              <div className="rating-right">
                <p>1.0</p>
              </div>
            </div>
          </div>
          <div className="more-details">
            <Link to={"/center/view_one_center/"+id} className="center-details-btn">
              More Details
            </Link>
          </div>
        </div>
      </div>
    );
  }

export default CenterCard;
