import React from "react";
import Axios from "axios";
import {  Route, Redirect, Switch } from "react-router-dom";
import "../src/styles/styles.css";
import "./App.css";
import AuthState from "./Context/authState";

import CustomerResultPage from "./components/SearchResultPage/resultPage";
import Home from "./components/landingPage/Home";
import Login from "./components/login/Login";
import SignUp from "./components/SignUp";
import BookingPage from "./components/Booking/BookingPage";
import AllCenters from "./components/allCenters/AllCenters";

import UserProfile from "./components/dashboard/profile/EditProile";
import AddCenters from "./components/Admin/AddCenters";
import AdminLogin from "./components/Admin/AdminLogin";
import AdminSignUp from "./components/Admin/AdminSignUp/AdminSignUp";
import Admin from "./components/Admin/AdminPage/Admin";
import ViewSIngleCenter from "./components/allCenters/ViewSIngleCenter";
import CustomerBookings from "./components/dashboard/profile/CustomerViewBooking";
//save token in local storage, this will set the header authorization = localStorage.token

if (localStorage.token) {
  Axios.defaults.headers.common["authorization"] = localStorage.token;
}

function App() {
  return (
    <AuthState>
      <div>
        <Switch>
          <Route path="/sign-up" component={SignUp} />
          <Route path="/login" component={Login} />
          <Route
            path="/search/:date?/:location?/:guests?/:event?"
            component={CustomerResultPage}
          />
          <Route path="/admin_sign-in" component={AdminLogin} />
          <Route path="/admin_sign-up" component={AdminSignUp} />
          <Route path="/admin" component={Admin} />

          <Route path="/all/centers" component={AllCenters} />
          <Route path="/dashboard/profile/:id" exact component={UserProfile} />
          <Route path="/dashboard/admin/add/centers" component={AddCenters} />
          <Route path="/center/view_one_center/:id" component={ViewSIngleCenter} />
          <Route path="/dashboard/bookings" component={CustomerBookings} />
          <Route path="/center/:id/book" component={BookingPage} />
         
          <Route path="/" exact component={Home} />

          <Redirect to="/" />
        </Switch>
      </div>
    </AuthState>
  );
}

export default App;
