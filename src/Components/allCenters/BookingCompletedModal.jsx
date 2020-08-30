import React from "react";
import { withRouter } from "react-router-dom";

const BookingCompletedModal = props => {
  const { isBookingCompleted, closeAllModal, message } = props;
  if (isBookingCompleted) {
    return (
      <div className="completed-booking-container">
        <div className="completed-booking-content">
          <div className="completed-booking-body">
            <i className="success"></i>
            <p className="booking-modal-title">Booking Completed</p>
            <hr className="hr-success" />
            <p className="confirm-message">{message}</p>
            <button
              className="pay-later-btn pointer"
              onClick={() => {
                window.localStorage.removeItem("activeBooking");
                props.history.replace("/");
                closeAllModal();
              }}
            >
              Ok
            </button>
          </div>
        </div>
      </div>
    );
  }
  return null;
};

export default withRouter(BookingCompletedModal);
