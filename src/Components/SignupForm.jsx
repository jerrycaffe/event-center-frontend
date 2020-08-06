import React, { useState } from "react";
import SignupLinks from "./SignupLinks";
import loadingGif from "../images/loading.gif";
import Axios from "axios";
import { withRouter } from "react-router-dom";

const SignupForm = (props) => {
  //customer details
  const [date, setDate] = useState(new Date());
  const [state, setState] = useState({
    firstname: "",
    lastname: "",
    password: "",
    confirm_password: "",
    email: "",
    phone_number: "",
    gender: "",
  });
  //alerts onSubmit
  const [alert, setAlert] = useState({ message: "", color: "#1d48b7" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
    setAlert({ ...alert, message: "" });//Remove error message when user is typing
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    Axios.post(
      "https://magnitude-event-manager.herokuapp.com/api/auth/customer/signup",
      state
    )
      .then((res) => {
        setAlert({ ...alert, message: res.data.message }); //alert with response message
        props.history.replace("/login"); //redirect to login page
        setLoading(false);
        setAlert({ ...alert, message: "" });
      })
      .catch((err) => {
        setLoading(false);
        setAlert({
          ...alert,
          message: err.response.data.message,
          color: "red",
        }); //alert with response message
      });
  };
  return (
    <main className="login-main">
      <h1>
        <span className="welcome-text">Create an account,</span>
        <span style={{ opacity: 0.5 }}>for reservation</span>
      </h1>
      <section className="form-section">
        <form onSubmit={handleSubmit}>
          <div className="signup-names">
            <div>
              <label htmlFor="firstname">First Name</label>
              <input
                type="text"
                name="firstname"
                id="firstname"
                placeholder="Enter First Name"
                required
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="lastname">Last Name</label>
              <input
                type="text"
                name="lastname"
                id="lastname"
                placeholder="Enter Last Name"
                required
                onChange={handleChange}
              />
            </div>
          </div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter Email"
            required
            onChange={handleChange}
          />
          <label htmlFor="phone_number">Phone Number</label>
          <input
            type="number"
            name="phone_number"
            id="phone_number"
            placeholder="Enter Phone Number"
            required
            onChange={handleChange}
          />
          <label htmlFor="gender">Gender</label>
          <select name="gender" id="gender" required onChange={handleChange}>
            <option value="">Choose your gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter Password"
            required
            onChange={handleChange}
          />
          <label htmlFor="confirm_password">Confirm Password</label>
          <input
            type="password"
            name="confirm_password"
            id="confirm_password"
            placeholder="Retype Password"
            required
            onChange={handleChange}
          />
          <p
            style={
              alert.message
                ? {
                    color: alert.color,
                    margin: "auto",
                    padding: "0.5rem 1rem",
                    backgroundColor: "#f4f4f4",
                  }
                : {}
            }
          >
            {alert.message}
          </p>
          <button type="submit" className="btn-signIn">
            {loading ? <img src={loadingGif} alt="loading" /> : "Sign Up"}
          </button>
        </form>
        <SignupLinks />
      </section>
    </main>
  );
};

export default withRouter(SignupForm);
