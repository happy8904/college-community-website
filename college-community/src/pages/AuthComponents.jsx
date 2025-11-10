
import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { IoMailOutline, IoLockClosedOutline, IoPersonOutline, IoLogoGoogle } from 'react-icons/io5';
import './AuthPage.css'; 

const AuthComp = () => {
  const location = useLocation();
  const [isSignUp, setIsSignUp] = useState(location.pathname === '/signup');

  useEffect(() => {
    setIsSignUp(location.pathname === '/signup');
  }, [location.pathname]);

  const toggleAuthMode = () => {
    if (isSignUp) {
      window.history.pushState(null, '', '/login');
    } else {
      window.history.pushState(null, '', '/signup');
    }
    setIsSignUp(!isSignUp);
  };

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

  return (
    <div className="auth-wrapper">
      <div className={`auth-container ${isSignUp ? 'right-panel-active' : ''}`}>
        
        <div className="forms-container">
          <div className="form-panel login-panel">
            <LoginForm />
          </div>
          <div className="form-panel signup-panel">
            <SignUpForm />
          </div>
        </div>

        <div className="overlay-container">
          <div className="overlay">
            
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>To keep connected, please log in with your personal info.</p>
              <button className="btn btn-ghost transition-300" onClick={toggleAuthMode}>
                Sign In
              </button>
            </div>

            <div className="overlay-panel overlay-right">
              <h1>Hello, Peer!</h1>
              <p>Enter your details and start your journey with the College Community.</p>
              <button className="btn btn-ghost transition-300" onClick={toggleAuthMode}>
                Sign Up
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthComp;