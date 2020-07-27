import React, { Component } from "react";

class newsLetter extends Component {
  render() {
    return (
      <div className="news-offer">
        
          <h4 className="small-text">NEWS & OFFERS</h4>
        
        <form action="" className="subscribe-form">
          <input
            className="input-subscribe"
            type="text"
            placeholder="Enter Your Email"
          />
          <button className="button-blue suscribe-btn" type="submit">
            Subscribe
          </button>
        </form>
      </div>
    );
  }
}
export default newsLetter;
