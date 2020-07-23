import React from "react";
import eventAvailable from "../images/mdi_event_available.svg";
import FilterSearch from "./customerResultPage/filterSearch";

const Showcase = () => {
  return (
    <React.Fragment>
      <div className="showcase">
        <div class="showcase-cover">
          <div class="showcase-text">
            <p class="big-text">BOOK A VENUE FOR YOUR EVENT</p>
            <p class="small-text">FIND YOUR IDEAL VENUE INSTANTLY</p>
          </div>

          <FilterSearch />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Showcase;
