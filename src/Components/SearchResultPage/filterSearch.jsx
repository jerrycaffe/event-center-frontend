import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import Flatpickr from "react-flatpickr";
import DatePicker from "react-datepicker";

const FilterSearch = props => {
  const [date, setDate] = useState(new Date());
  const [eventList] = useState([
    "Wedding Reception",
    "Engagement Party",
    "Birthday party",
    "Funeral Reception",
    "Concert",
    "Audition",
    "Conference",
    "Christmas Party",
    "Dinner Party",
    "Exihibition"
  ]);
  const [noOfGuest] = useState([
    "100 - 200",
    "201 - 300",
    "301 - 400",
    "401 -500",
    "501 and above"
  ]);
  const [filter, setFilter] = useState({
    location: "",
    guests: "",
    event: ""
  });
  const changeFilter = e => {
    setFilter({ ...filter, [e.target.name]: e.target.value });
  };
  const changeDate = date => {
    setDate(date);
  };
  const handleSubmit = e => {
    e.preventDefault();

    const { location: locate, guests: guestss, event: eventing } = filter;

    props.history.push(`/search/q?location=${locate}`);
  };

  return (
    <form className="form-bg" onSubmit={handleSubmit}>
      <div className="icon-input">
        <div className="carlender-icon"></div>
        {/* <i className="carlender-icon"></i> */}
        <div>
          <DatePicker
            // selected={getDate}
            minDate={date}
            onChange={changeDate}
            name="eve_date"
            placeholderText="Date"
            autoComplete="off"
          />
        </div>

        {/* <i className="drop-down"></i> */}
      </div>

      <div className="icon-input">
        <i className="location-icon"></i>
        <input
          name="location"
          className="border-none text-input width-90"
          type="text"
          placeholder="Lagos"
          onChange={changeFilter}
        />
      </div>
      <div className="icon-input">
        <i className="group-icon"></i>
        <select
          name="event"
          className="border-none text-input width-90"
          onChange={changeFilter}
        >
          <option>Number of guests </option>
          {noOfGuest.map((lists, i) => {
            return (
              <option value={lists} key={i}>
                {lists}
              </option>
            );
          })}
        </select>
      </div>
      <div className="icon-input">
        <i className="confetti-icon"></i>
        <select
          name="guests"
          className="border-none text-input width-90"
          onChange={changeFilter}
        >
          <option>Type of Event</option>
          {eventList.map((guest, i) => {
            return (
              <option value={guest} key={i}>
                {guest}
              </option>
            );
          })}
        </select>
      </div>
      <button className="button-blue" type="submit">
        Search
      </button>
    </form>
  );
};

export default withRouter(FilterSearch);
