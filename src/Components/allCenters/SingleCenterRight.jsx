import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import EventMap from "./EventMap";

const SingleCenterRight = props => {
  const {
    handleSubmit,
    getDate,
    handleDate,
    getUnavailable,
    fromTime,
    handleTime,
    toTime
  } = props;
  return (
    <div className="book-center-container">
      <div className="book-center">
        <h4 className="title">Check a availability</h4>
        <form onSubmit={handleSubmit} className="booking-form">
          <label htmlFor="date-time">Date &amp; Time*</label>
          <div className="lg-width">
            <DatePicker
              // selected={getDate}
              minDate={getDate}
              onChange={handleDate}
              name="eve_date"
              placeholderText={getDate.toDateString()}
              // value={getDate}
              autoComplete="off"
              excludeDates={getUnavailable.map(date => new Date(date))}
            >
              <div
                style={{
                  color: "red",
                  textAlign: "center",
                  fontSize: "15px"
                }}
              >
                Mark out date are not available
              </div>
            </DatePicker>
          </div>
          <div className="md-width">
            <input
              className="input"
              type="time"
              id="fromTime"
              name="fromTime"
              value={fromTime}
              // min={fullDate}
              // max="2021-12-31"
              onChange={handleTime}
            />

            <input
              className="input"
              type="time"
              id="toTime"
              name="toTime"
              value={toTime}
              // min={fullDate}
              // max="2021-12-31"
              onChange={handleTime}
            />
          </div>

          <button type="submit" className="book-btn">
            Book Now
          </button>
        </form>
      </div>
      <EventMap />
    </div>
  );
};

export default SingleCenterRight;
