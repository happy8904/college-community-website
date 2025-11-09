
import React from 'react';
import { Link } from 'react-router-dom';
import { IoMailOutline, IoLockClosedOutline, IoLogoGoogle } from 'react-icons/io5';
import AuthLayout from './AuthLayout'; 
import './Signup.css';


const LoginForm = () => (
  <form className="auth-form login-form" onSubmit={(e) => e.preventDefault()}>
    <h2>Sign In</h2>
    <div className="social-login">
      <button className="social-button google transition-300">
        <IoLogoGoogle /> Log In with Google
      </button>
    </div>

    <p className="or-separator"><span>OR</span></p>

    <div className="input-group transition-300">
      <IoMailOutline className="input-icon" />
      <input type="email" placeholder="College Email" required />
    </div>

    <div className="input-group transition-300">
      <IoLockClosedOutline className="input-icon" />
      <input type="password" placeholder="Password" required />
    </div>

    <div className="form-footer">
      <label>
        <input type="checkbox" /> Remember Me
      </label>
      <Link to="#" className="forgot-password transition-300">Forgot Password?</Link>
    </div>

    <button type="submit" className="btn btn-primary-auth transition-300">
      Sign In
    </button>
  </form>
);

const Login = () => {
  return (
    <AuthLayout 
      form={<LoginForm />} 
      isLogin={true}
    />
  );
};

export default Login;