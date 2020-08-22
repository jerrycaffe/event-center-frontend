import React from "react";
import {Link} from 'react-router-dom';

function SingleCenterIndicator(props) {
  const {name} = props
  return (
    <div className="special-indicator pd-left-20 ">
      <Link to="/">Home</Link>
      <i className="indicator-divider"></i>
      <Link to="/all/centers">Venues</Link>
      <i className="indicator-divider"></i>
      <Link to="">{name}</Link>
    </div>
  );
}

export default SingleCenterIndicator;
