import React from "react";

function EventCenterOne(props) {
  const {
    price,
    images,
    location,
    description,
    capacity,
    facilities,
    name
  } = props;
  return (
    <div className="center-one-card">
      <div className="center-image">
        <div className="booking">
          <p className="sm-txt">BOOKING FEE</p>
          <h3>N{price}</h3>
        </div>
        <img className="center-img" src={images} alt="center search" />
      </div>
      <div className="center-info">
        <div className="center-address">
          <div className="address-left">
            <h3>
              {name}, {location}{" "}
            </h3>
            <p>{description}</p>
          </div>
        </div>
        <div className="capacity-rating">
          <div className="rating-capacity">
            <div className="m-display">
              <i className="city-hall-icon"></i>
              <p>
                {capacity}
                <br />
                Capacity
              </p>
            </div>
            <div className="ratings">
              <div className="rating-right">
                <p>1.0</p>
              </div>
            </div>
          </div>
        </div>
        <h4 className="title pd-top-10">Amenities</h4>
        <div className="facilities">{facilities}</div>
      </div>
    </div>
  );
}

export default EventCenterOne;
