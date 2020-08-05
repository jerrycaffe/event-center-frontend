import React from "react";
// import eventAvailable from "../images/mdi_event_available.svg";
import FilterSearch from "../SearchResultPage/filterSearch";

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
          <div id="about-us">
            {/* points to about us, here just to give space */}
        </div>
        </div>
      </div>
    
    </React.Fragment>
  );
};

export default Showcase;
