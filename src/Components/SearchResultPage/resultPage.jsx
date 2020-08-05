import React, { Component } from "react";
import { Link } from "react-router-dom";
import CenterCard from "./CenterCard";
import SelectFilterForm from "./SearchFilter";
import Header from "../landingPage/Header";
import Footer from "../landingPage/Footer";
import NewsLetter from "../landingPage/NewsLetter";
import searchImg from "../../images/center-search.png";
import Axios from "axios";
import Error500 from "../../pages/Error500";

class resultPage extends Component {
  componentDidMount = async () => {
    try {
      const searchParams = this.props.location.search;
      const endPoint =
        "https://magnitude-event-manager.herokuapp.com/api/center/search/q";
      const getCenters = await Axios.get(`${endPoint}${searchParams}`);
      this.setState({ ...this.state, centers: [...getCenters.data.result] });
    } catch (error) {
     this.setState({
       networkErr: true
     })
    }
  };
  state = {
    centers: "",
    networkErr: false
  };
  render() {
    
    const centers = this.state.centers;
    if(this.state.networkErr){
      return <Error500 />
    }
    if (!centers) {
      return "Please wait for the search to load";
    }
    return (
      <div className="container">
        <Header />
        <div className="content-wrap">
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
                    <p className="search-count">
                      {centers.length} Result Found
                    </p>
                  </div>
                  {centers.map(center => {
                    return (
                      <CenterCard
                        key={center.id}
                        centerImg={center.images}
                        name={center.name}
                        located={center.location}
                        capacity={center.capacity}
                        price={center.price}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          <NewsLetter />
          <Footer />
        </div>
      </div>
    );
  }
}
export default resultPage;
