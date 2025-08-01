import React, { useState } from 'react';
import axios from 'axios';    // ← Import axios here
import './LoginPopup.css';
import { assets } from '../../assets/assets';

const LoginPopup = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState('Login');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Get input values based on currState
    const email = e.target[currState === 'Sign Up' ? 1 : 0].value;
    const password = e.target[currState === 'Sign Up' ? 2 : 1].value;
    const name = currState === 'Sign Up' ? e.target[0].value : undefined;

    try {
      if (currState === 'Sign Up') {
        await axios.post('http://localhost:5000/api/signup', { name, email, password });
        alert('Account created! Please login now.');
        setCurrState('Login');
      } else {
        const response = await axios.post('http://localhost:5000/api/login', { email, password });
        alert('Login successful!');
        console.log('Token:', response.data.token);
        // TODO: Save token in localStorage or React Context here if needed
        setShowLogin(false);
      }
    } catch (error) {
      alert(error.response?.data?.message || 'Error occurred');
    }
  };

  return (
    <div className="login-popup">
      {/* Add onSubmit handler here */}
      <form onSubmit={handleSubmit} className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-inputs">
          {currState === 'Login' ? null : <input type="text" placeholder="Your name" required />}
          <input type="email" placeholder="Your email" required />
          <input type="password" placeholder="password" required />
        </div>

        <button>{currState === 'Sign Up' ? 'Create account' : 'Login'}</button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, I agree to the terms of use & privacy policy</p>
        </div>

        {currState === 'Login' ? (
          <p>
            Create a new account? <span onClick={() => setCurrState('Sign Up')}>Click here</span>
          </p>
        ) : (
          <p>
            Already have an account? <span onClick={() => setCurrState('Login')}>Login here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
