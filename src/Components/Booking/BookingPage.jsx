import React from "react";
import Axios from "axios";

const user_id = sessionStorage.getItem("customer_id");
const center_id = sessionStorage.getItem("center_id");
const from = sessionStorage.getItem("from");
const to = sessionStorage.getItem("to");
const event_date = sessionStorage.getItem("date");

const handleSubmit = (event) => {
  event.preventDefault();
  // make POST request to /api/booking/{id}/book
  const url = `https://magnitude-event-manager.herokuapp.com/api/booking/${center_id}/book`;
  Axios.post(url, {
    event_date: event_date,
    from_time: from,
    to_time: to,
    customerId: user_id,
    centerId: center_id,
    purpose: "Wedding reception",
  })
    .then(function (response) {
      console.log("Booking Response: ", response);
    })
    .catch(function (error) {
      console.log(error.response);
    });
};

export default function BookingPage() {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>This is the booking page</h1>
        <button type="submit" value="Confirm Booking">
          Confirm Booking
        </button>
      </form>
    </div>
  );
}
