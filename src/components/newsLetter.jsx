import React, { Component } from "react";

class newsLetter extends Component {
  render() {
    return (
      <div className="news-offer">
        <span className="small-text">NEWS & OFFERS</span>
        <form action="">
          <input
            className="input-subscribe"
            type="text"
            placeholder="Enter Your Email"
          />
          <button className=" suscribe-btn" type="submit">
            Subscribe
          </button>
        </form>
      </div>
    );
  }
}
export default newsLetter;
