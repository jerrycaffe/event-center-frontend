import React from "react";
import axios from "axios";
import bookingIcon from "../../images/bookingIcon.png";
import closeBtn from "../../images/closeBtn.png";
import horizontalNavigator from "../../images/horizontal-indicator.png";
import verticalNavigator from "../../images/verticalNavigator.jpg";

const handlePayment = (getDate, fromTime, toTime) => {
  // create booking
  const centerId = sessionStorage.getItem("centerId");
  const token = localStorage.getItem("token");
  console.log("TOKEN:", token);
  axios
    .post(
      `https://magnitude-event-manager.herokuapp.com/api/booking/${centerId}/book`,
      {
        data: {
          event_date: getDate,
          from_time: fromTime,
          to_time: toTime,
          purpose: "General",
        },
      },
      {
        headers: {
          Authorization: token,
        },
      }
    )
    .then(function (response) {
      console.log("RESPONSE: ", JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log("ERROR: ", error.response);
    });

  // redirect to link to make payment
};

const BookingEventModal = (props) => {
  const {
    getDate,
    fromTime,
    toTime,
    user,
    amount,
    isBookEventToggled,
    toggleBookEvent,
    toggleCardPayment,
    closeAllModal,
  } = props;

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
                {/* <img
                  className="m-display-none d-flex"
                  src={verticalNavigator}
                  alt="vertical navigation"
                /> */}
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
                      value={fromTime}
                      readOnly
                    />
                    <input
                      className="booking-to"
                      type="text"
                      placeholder="booking-to"
                      value={toTime}
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
                  <p className="booking-amount">N{amount}</p>
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
              <div className="payment-btn">
                <button
                  className="pay-later-btn pointer"
                  onClick={toggleBookEvent}
                >
                  Pay Later
                </button>
                <button
                  className="pay-now-btn pointer"
                  onClick={() => handlePayment(getDate, fromTime, toTime)}
                >
                  Pay Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else return null;
};

export default BookingEventModal;
