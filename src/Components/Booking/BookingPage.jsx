import React from "react";
import Axios from "axios";

import Header from "../landingPage/Header";
import SweetAlert from "react-bootstrap-sweetalert";
import Footer from "../landingPage/Footer";

const user_id = sessionStorage.getItem("customer_id");
const center_id = sessionStorage.getItem("center_id");
const from = sessionStorage.getItem("from");
const to = sessionStorage.getItem("to");
const event_date = sessionStorage.getItem("date");
const center_name = sessionStorage.getItem("center_name");
const price = sessionStorage.getItem("price");
const capacity = sessionStorage.getItem("capacity");
const location = sessionStorage.getItem("location");

const handleSubmit = event => {
  event.preventDefault();
  // make POST request to /api/booking/{id}/book
  const url = `https://magnitude-event-manager.herokuapp.com/api/booking/${center_id}/book`;
  Axios.post(url, {
    event_date: event_date,
    from_time: from,
    to_time: to,
    customerId: user_id,
    centerId: center_id,
    purpose: "Wedding reception"
  })
    .then(function(response) {
      console.log("Booking Response: ", response);
      window.alert(response.data.success);
    })
    .catch(function(error) {
      console.log(error.response.data.error, "from here withing");
      let message =
        error.response === undefined
          ? "Something went wrong check your network and restart"
          : error.response.data.error;
      window.alert(message);
    });
};

const handleCancel = history => {
  history.push(`/center/view_one_center/${center_id}`);
};

export default function BookingPage({ history }) {
  return (
    <div className="container">
      <Header />
      <div className="content-wrap">
        <div className="booking-wrapper">
          <form className="confirm-booking-form" onSubmit={handleSubmit}>
            <h2>Please confirm the details of your booking</h2>
            <div className="confirm-booking-child">
              <label htmlFor="hall">Hall Name: </label>
              {center_name}
            </div>
            <div className="confirm-booking-child">
              <label htmlFor="price">Price: </label>N{price}
            </div>
            <div className="confirm-booking-child">
              <label htmlFor="capacity">Capacity: </label>
              {capacity}
            </div>
            <div className="confirm-booking-child">
              <label htmlFor="location">Location: </label>
              {location}
            </div>
            <div className="confirm-booking-child">
              <label htmlFor="date">Date of event: </label>
              {new Date(event_date).toDateString()}
            </div>
            <div className="confirm-booking-child">
              <label htmlFor="from">From: </label>
              {from} <label htmlFor="to">to: {to}</label>
            </div>
            <div className="confirm-booking-child book-btns">
              <button
                className="cancel-btn"
                onClick={() => handleCancel(history)}
              >
                Back to Booking
              </button>
              <button className="confirm-btn" type="submit">
                Confirm Booking
              </button>
            </div>
          </form>
        </div>

        <Footer />
      </div>
    </div>
  );
}
