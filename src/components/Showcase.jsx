import React from "react";
import eventAvailable from "../images/mdi_event_available.svg";
import payment from "../images/mdi_payment.svg";
import bookmark from "../images/mdi_collections_bookmark.svg";

const Showcase = () => {
  return (
    <React.Fragment>
      <div className="showcase">
        
      <div class="showcase-cover">
          <div class="showcase-text">
            <p class="big-text">
              BOOK A VENUE FOR
              YOUR EVENT
            </p>
            <p class="small-text">FIND YOUR IDEAL
              VENUE INSTANTLY</p>
          </div>

          <form class="form-bg">
            <div class="icon-input">
              <i class="carlender-icon"></i>
              <input type="text" placeholder="Date" />
              <i class="drop-down"></i>
            </div>

            <div class="icon-input">
              <i class="location-icon"></i>
              <input class="text-input" type="text" placeholder="Lagos" />

            </div>
            <div class="icon-input">
              <i class="group-icon"></i>
              <input class="text-input" type="text" placeholder="Number of Guests" />
              <i class="drop-down"></i>
            </div>
            <div class="icon-input">
              <i class="confetti-icon"></i>
              <input type="text" placeholder="Type of Event" />
              <i class="drop-down"></i>
            </div>
            <button type="submit">Search</button>
          </form>

        </div>

      </div>
    </React.Fragment>
  );
};

export default Showcase;
