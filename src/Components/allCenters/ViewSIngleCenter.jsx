import React, { useEffect, useState, useContext } from "react";
import Axios from "axios";

import AuthContext from "../../Context/authContext";
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
import BookingCompletedModal from "./BookingCompletedModal";

const ViewSIngleCenter = props => {
  const [singleCenters, setCenter] = useState({});
  const [state, setState] = useState({
    fromTime: "00:00",
    toTime: "00:00"
  });
  const [getDate, setDate] = useState(new Date());
  const [pageLoading, setPageLoading] = useState(true);
  const [getUnavailable, setUnavailable] = useState([]);
  const [getToggleBookEvent, setToggleBookEvent] = useState(false);
  const [getIsLoginModal, setIsLogginModal] = useState(false);
  const [getToggleCardPayment, setToggleCardPayment] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isCompletedBooking, setBookingComplete] = useState(false);
  const [message, setMessage] = useState("");

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

      // const d = formatDate(getDate);

      setToggleBookEvent(true);
    } else {
      const bookingHistory = props.history.location.pathname;
      window.localStorage.setItem("activeBooking", bookingHistory);

      setIsLogginModal(true);
    }
  };
  const isLoginExit = () => {
    return setIsLogginModal(false);
  };
  const toggleBookEvent = () => {
    setToggleBookEvent(true);
  };
  const toggleCardPayment = () => {
    setToggleBookEvent(false);
    setToggleCardPayment(true);
  };
  const closeAllModal = () => {
    setToggleBookEvent(false);
    setMessage("");
    setBookingComplete(false);
    setIsLogginModal(false);
  };

  const handleBooking = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem("token");
      const decoded = jwt_decode(token);
      const url = `https://magnitude-event-manager.herokuapp.com/api/booking/${singleCenters.id}/book`;
      const makeBooking = await Axios.post(url, {
        event_date: formatDate(getDate),
        from_time: state.fromTime,
        to_time: state.toTime,
        customerId: decoded.id,
        centerId: singleCenters.id,
        purpose: "Wedding reception"
      });
      if (makeBooking) {
        setLoading(false);
        setBookingComplete(true);
        setMessage(makeBooking.data.success);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  if (pageLoading) {
    return <PageLoader />;
  }

  return (
    <React.Fragment>
      <div className="container">
        <Header />
        {/* when a user clicks on pay later this modal should pop up let the user know that the booking is completed successfully */}
        <BookingCompletedModal
          isBookingCompleted={isCompletedBooking}
          message={message}
          closeAllModal={closeAllModal}
        />
        {/* the modal below pops up when user wants to pay immediately */}
        <CardPaymentModal
          isCardPaymentToggled={getToggleCardPayment}
          closeAllModal={closeAllModal}
        />
        {/* once the user has been logged in, the user see some informtaion filled as regarding the booking about to be made */}
        <BookingEventModal
          loading={loading}
          isBookEventToggled={getToggleBookEvent}
          toggleCardPayment={toggleCardPayment}
          closeAllModal={closeAllModal}
          makeBooking={handleBooking}
          toggleBookEvent={toggleBookEvent}
          getDate={formatDate(getDate)}
          fromTime={state.fromTime}
          toTime={state.toTime}
          user={user}
          amount={singleCenters.price}
        />
        {/* this modal pops up when a user is not logged and it instructs the user to log in or sign up */}
        <ConfirmLoginModal
          isLoginModal={getIsLoginModal}
          isLoginExit={isLoginExit}
        />
        <div className="content-wrap">
          <div className="center-wrapper">
            <SingleCenterIndicator name={singleCenters.name} />
            <div className="single-center-container">
              {/* the left side of the single event center showing the information about the center the user is ready to book*/}
              <EventCenterOne
                price={singleCenters.price}
                images={singleCenters.images}
                location={singleCenters.location}
                description={singleCenters.description}
                capacity={singleCenters.capacity}
                facilities={singleCenters.facilities}
                name={singleCenters.name}
              />
              {/* the right side of the single event center */}
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
