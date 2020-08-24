import React, { useEffect, useState, useContext } from "react";
import Axios from "axios";

import AuthContext from "../../Context/authContext";
import SweetAlert from "react-bootstrap-sweetalert";
import jwt_decode from "jwt-decode";

import Header from "../landingPage/Header";
import NewsLetter from "../landingPage/NewsLetter";
import Footer from "../landingPage/Footer";
import PageLoader from "../../pages/PageLoader";
import SingleCenterRight from "./SingleCenterRight";
import SingleCenterIndicator from "./SingleCenterIndicator";
import EventCenterOne from "./EventCenterOne";
import BookingEventModal from "./BookingEventModal";
import ConfirmLoginModal from "./ConfirmLoginModal";
import CardPaymentModal from "./CardPaymentModal";
const ViewSIngleCenter = props => {
  const [singleCenters, setCenter] = useState({});
  const [state, setState] = useState({
    fromTime: "00:00",
    toTime: "00:00"
  });
  const [getDate, setDate] = useState(new Date());
  const [pageLoading, setPageLoading] = useState(true);
  const [getUnavailable, setUnavailable] = useState([]);
  const [getModalState, setModalState] = useState(false);
  const [getToggleBookEvent, setToggleBookEvent] = useState(false);
  const [getIsLoginModal, setIsLogginModal] = useState(false);
  const [getToggleCardPayment, setToggleCardPayment] = useState(false);

  const context = useContext(AuthContext);
  const { user } = context;

  useEffect(() => {
    const calling = async () => {
      try {
        const location = props.location.pathname;
        const url = `https://magnitude-event-manager.herokuapp.com/api${location}`;
        const results = await Axios.get(url);
        setCenter(results.data.center);
        setUnavailable(results.data.center.dates_unavailable);
        setPageLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    calling();
  }, []);
  //my code
  function formatDate(date_val) {
    var d = new Date(date_val),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
  }
  const handleDate = date => {
    setDate(date);
  };
  const handleTime = event => {
    setState({ ...state, [event.target.name]: event.target.value });
  };
  const handleSubmit = event => {
    event.preventDefault();
    const isUserAuth = window.localStorage.getItem("isAuthenticated");
    if (isUserAuth) {
      //  console.log("show modal you are correct");
      const token = localStorage.getItem("token");
      const decoded = jwt_decode(token);
      const d = formatDate(getDate);

      setToggleBookEvent(true);
    } else setIsLogginModal(true);
  };
  const isLoginExit = () => {
    return setIsLogginModal(false);
  };
  const toggleBookEvent = () => {
    setToggleBookEvent(!getToggleBookEvent);
  };
  const toggleCardPayment = () => {
    setToggleBookEvent();
    setToggleCardPayment(!getToggleCardPayment);
  };
  const closeAllModal = () => {
    setToggleBookEvent(false);
    setToggleCardPayment(false);
  };

  if (pageLoading) {
    return <PageLoader />;
  }

  return (
    <React.Fragment>
      <div className="container">
        <Header />
        <CardPaymentModal isCardPaymentToggled={getToggleCardPayment} 
        closeAllModal={closeAllModal}
        />
        <BookingEventModal
          isBookEventToggled={getToggleBookEvent}
          toggleCardPayment={toggleCardPayment}
          closeAllModal={closeAllModal}
          toggleBookEvent={toggleBookEvent}
          getDate={formatDate(getDate)}
          fromTime={state.fromTime}
          toTime={state.toTime}
          user={user}
          amount={singleCenters.price}
        />
        <ConfirmLoginModal
          isLoginModal={getIsLoginModal}
          isLoginExit={isLoginExit}
        />
        <div className="content-wrap">
          <div className="center-wrapper">
            <SingleCenterIndicator name={singleCenters.name} />
            <div className="single-center-container">
              <EventCenterOne
                price={singleCenters.price}
                images={singleCenters.images}
                location={singleCenters.location}
                description={singleCenters.description}
                capacity={singleCenters.capacity}
                facilities={singleCenters.facilities}
                name={singleCenters.name}
              />
              <SingleCenterRight
                handleSubmit={handleSubmit}
                getDate={getDate}
                handleDate={handleDate}
                getUnavailable={getUnavailable}
                fromTime={state.fromTime}
                handleTime={handleTime}
                toTime={state.toTime}
              />
            </div>
          </div>
          <NewsLetter />
          <Footer />
        </div>
      </div>
    </React.Fragment>
  );
};
export default ViewSIngleCenter;
