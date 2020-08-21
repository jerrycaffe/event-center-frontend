import React from "react";

import bookingIcon from "../../images/bookingIcon.png";
import closeBtn from "../../images/closeBtn.png";

const BookingEvent = () => {
  return (
    <div className="booking-container">
      <div className="booking-modal">
        <div className="booking-header">
          <div className="booking-title">
            <img src={bookingIcon} alt="create booking icon" />
            <p className="booking-title-txt">NEW BOOKING</p>
          </div>
          <img src={closeBtn} alt="" />
        </div>
        <div className="booking-body">
          <div className="booking-left">
            <div className="up">Booking Details</div>
            <div className="down">Payment</div>
          </div>
          <div className="booking-right">
            <form className="form-booking">
              <div>
                <label htmlFor="date">Date &amp;Time*</label>
              </div>
              <div className="group-list">
                <div className="inline">
                  <input type="date" name="event-date" id="event-date" />
                  <div className="event-time">
                    <input type="time" name="from" id="from" />
                    <input type="time" name="to" id="to" />
                  </div>
                </div>
              </div>
              <div className="group-list">
                <div className="group-list-left">
                  <label htmlFor="fullname">Full name*</label>
                  <input
                    type="text"
                    name="fullname"
                    id="fullname"
                    placeholder="bunmi daniels"
                  />
                </div>
                <div className="group-list-right">
                  <label htmlFor="email">Email*</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="bunmidaniels@email.com"
                  />
                </div>
              </div>
              <div className="group-list">
                <label htmlFor="booking-title" className="disp-blk">
                  Booking Title(Optional)
                </label>

                <input
                  type="text"
                  name="wedding-reception"
                  id="wedding-reception"
                  placeholder="wedding-reception"
                />
              </div>
              <div className="group-list">
                <label htmlFor="additional-info">Additional Information</label>
                <input
                  type="text-area"
                  name="additional-info"
                  id="additional-info"
                  placeholder="type here"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingEvent;
