import React, { useState } from "react";
import loadingGif from "../../../images/loading.gif";
import Axios from "axios";
import { withRouter } from "react-router-dom";
import AdminSignUpLinks from "./AdminSignUpLinks";

const AdminSignUpForm = (props) => {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
    email: "",
    phoneNum: "",
    address: "",
    businessName: "",
    file: "",
  });
  //alerts onSubmit
  const [alert, setAlert] = useState({ message: "", color: "#1d48b7" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    switch (e.target.name) {
      case "file":
        setState({ ...state, file: e.target.files[0] });
        break;
      default:
        setState({ ...state, [e.target.name]: e.target.value });
    }
    setAlert({ ...alert, message: "" }); //Remove error message when user is typing
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const {
      firstName,
      lastName,
      password,
      confirmPassword,
      email,
      phoneNum,
      address,
      businessName,
      file,
    } = state;
    let formData = new FormData();
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("password", password);
    formData.append("confirmPassword", confirmPassword);
    formData.append("email", email);
    formData.append("phoneNum", phoneNum);
    formData.append("address", address);
    formData.append("businessName", businessName);
    formData.append("logo", file);

    Axios.post(
      "https://magnitude-event-manager.herokuapp.com/api/auth/admin/signup",
      formData
    )
      .then((res) => {
        setAlert({ ...alert, message: res.data.message }); //alert with response message
        props.history.replace("/Admin_sign-in"); //redirect to login page
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
        <span style={{ opacity: 0.5 }}>for managers</span>
      </h1>
      <section className="form-section">
        <form onSubmit={handleSubmit}>
          <div className="signup-names">
            <div>
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                placeholder="Enter First Name"
                required
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                name="lastName"
                id="lastName"
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
          <label htmlFor="phoneNum">Phone Number</label>
          <input
            type="number"
            name="phoneNum"
            id="phoneNum"
            placeholder="Enter Phone Number"
            required
            onChange={handleChange}
          />
          <label htmlFor="address">Address</label>
          <input
            type="text"
            name="address"
            id="address"
            placeholder="Enter Addresss"
            required
            onChange={handleChange}
          />
          <label htmlFor="businessName">Business Name</label>
          <input
            type="text"
            name="businessName"
            id="businessName"
            placeholder="Enter Business Name"
            required
            onChange={handleChange}
          />
          <label htmlFor="file">Logo</label>
          <input
            type="file"
            name="file"
            id="file"
            accept=".jpg, .png, .jpeg|image/*"
            required
            onChange={handleChange}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter Password"
            required
            onChange={handleChange}
          />
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
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
        <AdminSignUpLinks />
      </section>
    </main>
  );
};

export default withRouter(AdminSignUpForm);
