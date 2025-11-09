
import React from 'react';
import { IoMailOutline, IoLockClosedOutline, IoPersonOutline, IoLogoGoogle } from 'react-icons/io5';
import AuthLayout from './AuthLayout';
import './Signup.css';


const SignUpForm = () => (
  <form className="auth-form signup-form" onSubmit={(e) => e.preventDefault()}>
    <h2>Create Account</h2>

    <div className="social-login">
      <button className="social-button google transition-300">
        <IoLogoGoogle /> Sign Up with Google
      </button>
    </div>
    
    <p className="or-separator"><span>OR</span></p>

    <div className="input-group transition-300">
      <IoPersonOutline className="input-icon" />
      <input type="text" placeholder="Full Name" required />
    </div>
    
    <div className="input-group transition-300">
      <IoMailOutline className="input-icon" />
      <input type="email" placeholder="College Email" required />
    </div>

    <div className="input-group transition-300">
      <IoLockClosedOutline className="input-icon" />
      <input type="password" placeholder="Set Password" required />
    </div>

    <button type="submit" className="btn btn-primary-auth transition-300">
      Sign Up
    </button>
  </form>
);

const Signup = () => {
  return (
    <AuthLayout 
      form={<SignUpForm />} 
      isLogin={false}
    />
  );
};

export default Signup;