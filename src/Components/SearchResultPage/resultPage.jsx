import React, { Component } from "react";
import {Link} from 'react-router-dom';
import CenterCard from "./CenterCard";
import SelectFilterForm from "./SearchFilter";

class resultPage extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="search-contents">
          <div className="search-wrapper">
            <div className="result-body">
              <div className="desktop-filter">
                <div className="page-indicator">
                  <Link to="/" className="home">
                    Home
                  </Link>
                  <i className="indicator-divider"></i>
                  <a href="#" className="home">
                    Search
                  </a>
                </div>
                <SelectFilterForm />
              </div>
              <div className="center-result">
                <form className="form-filter">
                  <input type="text" placeholder="filter" />
                  <i className="filter-icon"></i>
                </form>
                <div>
                  <p className="search-count">1 Result Found</p>
                </div>
                <CenterCard />
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default resultPage;
