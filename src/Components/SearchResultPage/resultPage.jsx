import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CenterCard from "./CenterCard";
import SelectFilterForm from "./SearchFilter";
import Header from "../landingPage/Header";
import Footer from "../landingPage/Footer";
import NewsLetter from "../landingPage/NewsLetter";
import Axios from "axios";
import Error500 from "../../pages/Error500";
import PageLoader from "../../pages/PageLoader";

const ResultPage = props => {
  const [getCenters, setCenters] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [getNetworkError, setNetworkError] = useState(false)
  useEffect(() => {
    const result = async () => {
      try {
        const searchParams = props.location.search;
        const endPoint =
          "https://magnitude-event-manager.herokuapp.com/api/center/search/q";
        const getCenters = await Axios.get(`${endPoint}${searchParams}`);

        setCenters([...getCenters.data.result]);
        setLoading(false);
      } catch (error) {
        console.log('Error: ', error.response);
        // if(error){
        //  return setNetworkError(true)
        // }
        
      }
    };
    result();
  }, []);

  if(getNetworkError){
    return <Error500 />
  }
  if (isLoading) {
    return <PageLoader />;
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
                    {getCenters.length} Result Found
                  </p>
                </div>
                {getCenters.map(center => {
                  return (
                    <CenterCard
                      key={center.id}
                      id={center.id}
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
};

export default ResultPage;
