import React from "react";
import LoginLinks from "./LoginLinks";
import AuthContext from "../../Context/authContext"

const LoginForm = () => {
  const authContext = React.useContext(AuthContext);
  const handleClick=(e)=>{
    e.preventDefault();
    
     authContext.loadUser({correct:"yes"});
     console.log(authContext.user);
  }
  
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
            type="text"
            name="email"
            id="email"
            placeholder="Enter Email"
            required
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter Password"
            required
          />
          <input type="submit" value="Log In" className="btn-signIn" />
        </form>
        <LoginLinks />
      </section>
    </main>
  );
};

export default LoginForm;
