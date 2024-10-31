import React, { useState } from 'react';
import { FaUser, FaLock } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import LogoImg from '../images/logo.png';
import './LoginForm.css';

export default function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  
  const correctUsername = 'student';
  const correctPassword = 'password123';
  

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === correctUsername && password === correctPassword) {
      navigate('/student-dashboard');
    } else {
      setError('Invalid username or password');
    }
  };
  return (
    <div className="login-container">
      <div className="logo">
        <img src={LogoImg} alt="Logo" />
      </div>
      <form className="form" onSubmit={handleLogin}>
        <div className="input-group">
          <FaUser className="input-icon" />
          <input
            type="text"
            placeholder="Username"
            className="input-field"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="input-group">
          <FaLock className="input-icon" />
          <input
            type="password"
            placeholder="Password"
            className="input-field"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        <button type="submit" className="login-button">Login</button>
      </form>
    </div>
  );
}
