import React from 'react';

import LogoImg from '../images/logo.png';
import { FaUser, FaLock } from 'react-icons/fa'; // Import icons from react-icons (install with npm install react-icons)
import './LoginForm.css'; // Ensure to add CSS styles here

export default function LoginForm() {
  return (
    <div className="login-container">
      <div className="logo">
        <img src={LogoImg} alt="Logo" />
      </div>
      <div className="form">
        <div className="input-group">
          <FaUser className="input-icon" />
          <input
            type="text"
            placeholder="Username"
            className="input-field"
          />
        </div>
        <div className="input-group">
          <FaLock className="input-icon" />
          <input
            type="password"
            placeholder="Password"
            className="input-field"
          />
        </div>
        <button className="login-button">Login</button>
      </div>
    </div>
  );
}