import React, { useState, useContext } from "react";
import LoginLinks from "./LoginLinks";
import AuthContext from "../../Context/authContext";
import { withRouter } from "react-router-dom";
import loadingGif from "../../images/loading.gif";
import Axios from "axios";

const LoginForm = (props) => {
  const context = useContext(AuthContext);
  const [state, setState] = useState({ email: "", password: "" });
  //alerts
  const [alert, setAlert] = useState({
    message: "",
    color: "#1d48b7",
    loading: false,
  });

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (state.email === "" || state.password === "") {
      setAlert({ ...alert, message: "Please fill all fields" });
      setTimeout(() => setAlert({ ...alert, message: "" }), 3000);
    } else {
      setAlert({ ...alert, loading: true });
      Axios.post(
        "https://magnitude-event-manager.herokuapp.com/api/auth/customer/signin",
        state
      )
        .then((res) => {
          localStorage.setItem("token", res.data.token);
          Axios.defaults.headers.common["authorization"] = res.data.token; //set token to authorization header
          localStorage.setItem("isAuthenticated", true); // isAuthenticated true to localStorage
          localStorage.setItem("account", "user");
          context.loginUser();
          context.loadUser();
          setAlert({ ...alert, loading: false, message: res.data.message });
          props.history.push("/"); //redirect to homepage
        })
        .catch((err) => {
          setAlert({
            ...alert,
            loading: false,
            color: "red",
            message: err.response.data.message,
          });
          setTimeout(() => setAlert({ ...alert, message: "" }), 5000);
        });
    }
  };

  return (
    <main className="login-main">
      <h1>
        <span className="welcome-text">Welcome back,</span>
        <span style={{ opacity: 0.5 }}>Log In to continue</span>
      </h1>
      <section className="form-section">
        <form onSubmit={handleClick}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter Email"
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
          <p style={{ color: alert.color, margin: "auto" }}>{alert.message}</p>
          <button type="submit" className="btn-signIn">
            {alert.loading ? <img src={loadingGif} alt="loading" /> : "Sign In"}
          </button>
        </form>
        <LoginLinks />
      </section>
    </main>
  );
};

export default withRouter(LoginForm);
