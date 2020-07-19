import React, { Component } from 'react'

class filterSearch extends Component {
  render() {
    return (
      <form className="form-bg">
            <div className="icon-input">
              <i className="carlender-icon"></i>
              <input type="text" placeholder="Date" />
              <i className="drop-down"></i>
            </div>

            <div className="icon-input">
              <i className="location-icon"></i>
              <input className="text-input" type="text" placeholder="Lagos" />

            </div>
            <div className="icon-input">
              <i className="group-icon"></i>
              <input className="text-input" type="text" placeholder="Number of Guests" />
              <i className="drop-down"></i>
            </div>
            <div className="icon-input">
              <i className="confetti-icon"></i>
              <input type="text" placeholder="Type of Event" />
              <i className="drop-down"></i>
            </div>
            <button type="submit">Search</button>
          </form>
    )
  }
}
export default filterSearch;