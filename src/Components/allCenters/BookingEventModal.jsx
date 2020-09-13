import React from "react";
import { Redirect } from "react-router-dom";
import jwt_decode from "jwt-decode";
import Axios from "axios";

import bookingIcon from "../../images/bookingIcon.png";
import closeBtn from "../../images/closeBtn.png";
import loadingIcon from "../../images/loading.gif";
import horizontalNavigator from "../../images/horizontal-indicator.png";
import verticalNavigator from "../../images/verticalIndicator.png";

const BookingEventModal = (props) => {
  const {
    getDate,
    state,
    user,
    singleCenters,
    isBookEventToggled,
    toggleCardPayment,
    closeAllModal,
    handlePayLater,
    loading,
  } = props;

  function formatDate(date_val) {
    var d = new Date(date_val),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
  }

  const handlePayNow = async () => {
    try {
      //setLoading(true);
      const token = localStorage.getItem("token");
      const decoded = jwt_decode(token);
      const url = `https://magnitude-event-manager.herokuapp.com/api/booking/${singleCenters.id}/book`;
      const makeBooking = await Axios.post(url, {
        event_date: formatDate(getDate),
        from_time: state.fromTime,
        to_time: state.toTime,
        customerId: decoded.id,
        centerId: singleCenters.id,
        purpose: "Wedding reception",
      });
      if (makeBooking) {
        //initialize payment and redirect to paystack payment page
        const url = `https://magnitude-event-manager.herokuapp.com/api/booking/${makeBooking.data.bookingId}/pay`;
        const response = await Axios.post(url);
        if (response) {
          const PAYMENT_URL = response.data.response.data.authorization_url;
          window.open(PAYMENT_URL, "_blank");
        }
      }
    } catch (error) {
      // setLoading(false);
      console.log("ERROR:", error);
    }
  };

  if (isBookEventToggled) {
    return (
      <div className="booking-container">
        <div className="booking-modal">
          <div className="booking-header">
            <div className="booking-title">
              <img src={bookingIcon} alt="create booking icon" />
              <p className="booking-title-txt">NEW BOOKING</p>
            </div>
            <img
              src={closeBtn}
              alt=""
              className="pointer"
              onClick={closeAllModal}
            />
          </div>
          <div className="booking-body">
            <div className="book-event-first">
              <div className="booking-nav">
                <p className="nav-body">
                  Booking <span> Details</span>
                </p>
                <p>Payment</p>
              </div>
              <div className="nav-indicator">
                <img
                  className="m-display-none d-flex"
                  src={verticalNavigator}
                  alt="vertical navigation"
                />
                <img
                  className="d-display-none"
                  src={horizontalNavigator}
                  alt="horizontal navigation"
                />
              </div>
            </div>
            <div>
              <form className="book-event">
                <div className="label-date">
                  <label htmlFor="date-time">Date &amp; Time *</label>
                </div>
                <div className="group-list book-date-time">
                  <input
                    className="booking-date"
                    type="text"
                    value={getDate}
                    readOnly
                  />
                  <div className="booking-time">
                    <input
                      className="booking-from"
                      type="text"
                      placeholder="booking-from"
                      value={state.fromTime}
                      readOnly
                    />
                    <input
                      className="booking-to"
                      type="text"
                      placeholder="booking-to"
                      value={state.toTime}
                      readOnly
                    />
                  </div>
                </div>
                <div className="book-name-email">
                  <div className="group-list">
                    <div>
                      <label htmlFor="fullname">Full Name *</label>
                    </div>
                    <input
                      type="text"
                      value={`${user.firstname} ${user.lastname}`}
                      readOnly
                    />
                  </div>
                  <div className="group-list">
                    <div>
                      <label htmlFor="email">Email *</label>
                    </div>
                    <input type="email" value={user.email} readOnly />
                  </div>
                </div>
                <div className="group-list">
                  <div>
                    <label htmlFor="booking-title">Booking Title *</label>
                  </div>
                  <input type="text" placeholder="Wedding Reception" />
                </div>
                <div className="group-list">
                  <div>
                    <label htmlFor="additional-info">
                      Additional Information *
                    </label>
                  </div>
                  <input type="textarea" placeholder="Type here" />
                </div>
              </form>
              <div className="booking-info">
                <div className="booking-fee">
                  <p>BOOKING FEE</p>
                  <p className="booking-amount">N{singleCenters.price}</p>
                </div>
                <div className="note">
                  <p>NOTE</p>
                  <p className="note-info">
                    APPROVAL of your booking is subject to payment either by
                    CARD or BANK, otherwise it will remain PENDING for 7 DAYS
                    before it will be DELETED.
                  </p>
                </div>
              </div>
              {/* if loading is true, return both buttons loading icon else let them be pure buttons */}
              {loading ? (
                <div className="payment-btn">
                  <button className="pay-later-btn pointer">
                    <img
                      src={loadingIcon}
                      alt="please waiting booking is loading"
                    />
                  </button>
                  <button className="pay-later-btn pointer">
                    <img
                      src={loadingIcon}
                      alt="please waiting booking is loading"
                    />
                  </button>
                </div>
              ) : (
                <div className="payment-btn">
                  <button
                    className="pay-later-btn pointer"
                    onClick={handlePayLater}
                  >
                    Pay Later
                  </button>
                  <button
                    className="pay-now-btn pointer"
                    onClick={handlePayNow}
                  >
                    Pay Now
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  } else return null;
};

export default BookingEventModal;
