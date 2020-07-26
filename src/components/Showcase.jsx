import React from "react";
import eventAvailable from "../images/mdi_event_available.svg";
import FilterSearch from "./customerResultPage/filterSearch";

const Showcase = () => {
  return (
    <React.Fragment>
      <div className="showcase">
        <div className="showcase-cover">
          <div className="showcase-text">
            <p className="big-text">BOOK A VENUE FOR YOUR EVENT</p>
            <p className="small-text">FIND YOUR IDEAL VENUE INSTANTLY</p>
          </div>

          <FilterSearch />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Showcase;
