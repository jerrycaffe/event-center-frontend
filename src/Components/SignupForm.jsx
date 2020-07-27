import React, { useState } from "react";
import SignupLinks from "./SignupLinks";
import loadingGif from "../images/loading.gif";
import Axios from "axios";

const SignupForm = props => {
  //customer details
  const [date, setDate] = useState(new Date())
  const [state, setState] = useState({
    firstname: "",
    lastname: "",
    password: "",
    confirm_password: "",
    email: "",
    phone_number: "",
    gender: ""
  });
  //alerts onSubmit
  const [alert, setAlert] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setLoading(true);
    Axios.post(
      "https://magnitude-event-manager.herokuapp.com/api/auth/customer/signup",
      state
    )
      .then(res => {
        setAlert(res.data.message); //alert with response message
        props.histry.push("/login"); //redirect to login page
        setLoading(false);
        setAlert("");
      })
      .catch(err => {
        setLoading(false);
        //setAlert(err.message); //alert with response message

        setAlert(err.response.data.message);
        setTimeout(() => setAlert(""), 3000); //remove response message after 3secs
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
            type="text"
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
          <p style={{ color: "red", margin: "auto" }}>{alert}</p>
          <button type="submit" className="btn-signIn">
            {loading ? <img src={loadingGif} alt="loading" /> : "Sign Up"}
          </button>
        </form>
        <SignupLinks />
      </section>
    </main>
  );
};

export default SignupForm;
