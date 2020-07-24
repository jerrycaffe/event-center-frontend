import React from "react";
import SignupLinks from "./SignupLinks";

const SignupForm = () => {
  return (
    <main className="login-main">
      <h1>
        <span className="welcome-text">Create an account,</span>
        <span style={{ opacity: 0.5 }}>for reservation</span>
      </h1>
      <section className="form-section">
        <form>
          <div className="signup-names">
            <div>
              <label htmlFor="first_name">
                First Name
              </label>
              <input
                type="text"
                name="first_name"
                id="first_name"
                placeholder="Enter First Name"
              />
            </div>
            <div>
              <label htmlFor="last_name">
                Last Name
              </label>
              <input
                type="text"
                name="last_name"
                id="last_name"
                placeholder="Enter Last Name"
              />
            </div>
          </div>
          
          <label htmlFor="email">
            Email
          </label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Enter Email"
          />
          <label htmlFor="phone_num">Phone Number</label>
          <input
            type="text"
            name="phone_num"
            id="phone_num"
            placeholder="Enter Phone Number"
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter Password"
          />
          <label htmlFor="password">Confirm Password</label>
          <input
            type="password"
            name="confirm_password"
            id="password"
            placeholder="Retype Password"
          />
          <input type="submit" value="Sign Up" className="btn-signIn" />
        </form>
        <SignupLinks />
      </section>
    </main>
  );
};

export default SignupForm;
