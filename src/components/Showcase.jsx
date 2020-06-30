import React from "react";
import eventAvailable from "../images/mdi_event_available.svg";
import payment from "../images/mdi_payment.svg";
import bookmark from "../images/mdi_collections_bookmark.svg";

const Showcase = () => {
  return (
    <React.Fragment>
      <div className="showcase">
        <div className="sign">
          <a href="#" className="d-display-none t-display-none btn">
            Sign up!
          </a>
        </div>
        <div className="showcase-text">
          <p className="leading-text">
            Managing your reservations has never been easier
          </p>
          <p className="showcase-text2">
            Bookings helps you manage reservations of all your event centers in
            one place.
          </p>

          <a href="#" className="d-display t-display btn m-display-none">
            Sign up!
          </a>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Showcase;
