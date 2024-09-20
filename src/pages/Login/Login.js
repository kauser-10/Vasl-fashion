import React from "react";
import './Login.css';
import backgroundImage from '../../assets/design5.jpg';  // Adjust the path as needed
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div
      className="login-container"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        minHeight: '90vh',
      }}
    >
      <div className="login-box">
        <h2>Login</h2>
        <form>
          <div className="input-field">
            <input type="text" placeholder="user" required />
          </div>
          <div className="input-field">
            <input type="password" placeholder="password" required />
          </div>
          <div className="remember-me">
            <input type="checkbox" />
            <label>Remember me</label>
          </div>
          <button type="submit" className="login-btn">Login</button>
        </form>
        <div className="forgot-password">
          <a href="/">Forgot password?</a>
        </div>
        <div className="register-link">
          <span>Don't have an account? </span>
          <Link to="/register">Register</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
