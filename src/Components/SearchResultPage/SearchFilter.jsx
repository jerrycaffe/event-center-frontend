import React, { Component } from 'react'

class SearchFilter extends Component {
  render() {
    return (
      <form action="" className="select-filter">
      <p className="filter-title">Filters</p>
      <hr />
      <p className="filter-category filter-pd">Name</p>
      <div className="select-items">
        <input type="checkbox" />
        <label htmlFor="all">All</label>
      </div>
      <div className="select-items">
        <input type="checkbox" />
        <label htmlFor="mandn">M & N</label>
      </div>
      <div className="select-items">
        <input type="checkbox" />
        <label htmlFor="protea">Protea</label>
      </div>
      <div className="select-items">
        <input type="checkbox" />
        <label htmlFor="loreal">L'L’Oreal</label>
      </div>
      <hr />
      <p className="filter-category  filter-pd">Capacity</p>
      <div className="select-items">
        <input type="checkbox" />
        <label htmlFor="hundred">100 - 200 Capacity</label>
      </div>
      <div className="select-items">
        <input type="checkbox" />
        <label htmlFor="two-hundred">200 - 300 Capacity</label>
      </div>
      <div className="select-items">
        <input type="checkbox" />
        <label htmlFor="three-hundred">300 - 400 Capacity</label>
      </div>
      <div className="select-items">
        <input type="checkbox" />
        <label htmlFor="four-hundred">400 - 500 Capacity</label>
      </div>
      <hr />
      <p className="filter-category filter-pd">Price</p>
      <div className="select-items">
        <input type="checkbox" />
        <label htmlFor="first">N0 - N50,000</label>
      </div>
      <div className="select-items">
        <input type="checkbox" />
        <label htmlFor="second">N51,000 - N100,000 </label>
      </div>
      <div className="select-items">
        <input type="checkbox" />
        <label htmlFor="third">N101,000 - N200,000</label>
      </div>
      <div className="select-items">
        <input type="checkbox" />
        <label htmlFor="fourth">N201,000 - N300,000</label>
      </div>
      <div className="select-items">
        <input type="checkbox" />
        <label htmlFor="fifth">N301,000 - N400,000</label>
      </div>
      <hr />
      <p className="filter-category filter-pd">Amenities</p>
      <div className="select-items">
        <input type="checkbox" />
        <label htmlFor="security">Security</label>
      </div>
      <div className="select-items">
        <input type="checkbox" />
        <label htmlFor="parking">Parking</label>
      </div>
      <div className="select-items">
        <input type="checkbox" />
        <label htmlFor="projector">Projector</label>
      </div>
      <div className="select-items">
        <input type="checkbox" />
        <label htmlFor="wifi">Free Wifi</label>
      </div>
      <button type="submit">Apply</button>
    </form>
    )
  }
}
export default SearchFilter;