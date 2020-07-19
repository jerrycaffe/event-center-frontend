import React from "react";
import bookings from "../images/mdi_event_available.svg";
import artist from "../images/artist.png";
import wedding from "../images/wedding.png";
import reuinion from "../images/reuinion.png";

const Services = () => {
  return (
    <div className="services">
      <h2 className="title">MAGNITUDE EVENT CENTER</h2>
      <div className="card-wrapper">
        <div className="card">
          <div className="card-image">
            <img src={wedding} alt="wedding" />
          </div>
          <h3 className="card-caption">WEDDING</h3>
          <p>
            Your dream wedding needs the perfect venue. We care about you, it is
            our duty to provide you the opportunity of having a memorable
            wedding ceremony.
          </p>
        </div>
        <div className="card">
          <div className="card-image">
            <img src={reuinion} alt="get together" />
          </div>
          <h3 className="card-caption">BIRTHDAY</h3>
          <p>
            Let us put you in the spotlight by providing a venue for you to
            celebrate your new age. You deserve an accolade for reaching such a
            wonderful milestone
          </p>
        </div>
        <div className="card">
          <div className="card-image">
            <img src={artist} alt="birthday" />
          </div>
          <h3 className="card-caption">CONCERT</h3>
          <p>
            Your fans deserve to feel the sound of your new beat, let us provide
            a venue worthy of such connection. Trust us to bring you closer to
            your fans.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
