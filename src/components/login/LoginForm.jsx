import React from "react";
import LoginLinks from "./LoginLinks";

const LoginForm = () => {
  return (
    <main className="login-main">
      <h1>
        <span className="welcome-text">Welcome back,</span>
        <span style={{ opacity: 0.5 }}>Log In to continue</span>
      </h1>
      <section className="form-section">
        <form>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Enter Email"
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter Password"
          />
          <input type="submit" value="Log In" className="btn-signIn" />
        </form>
        <LoginLinks />
      </section>
    </main>
  );
};

export default LoginForm;
