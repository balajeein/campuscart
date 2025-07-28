import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import colleges from '../data/colleges';
import './Login.css';

const Signup = () => {
  const { signup } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [selectedCollege, setSelectedCollege] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedCollege) {
      setError('Please select a college');
      return;
    }
    const success = signup(username, password, selectedCollege);
    if (success) {
      navigate('/');
    } else {
      setError('Username already exists');
    }
  };

  return (
    <div className="home">
      <div className="hero login-container">
        <h2>Sign Up for CampusCart</h2>
        <p className="login-subtitle">Select your college to get started</p>
        
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="college">Select Your College *</label>
            <select
              id="college"
              value={selectedCollege}
              onChange={(e) => setSelectedCollege(e.target.value)}
              required
              className="college-select"
            >
              <option value="">Choose your college...</option>
              {colleges.map((college) => (
                <option key={college.id} value={college.code}>
                  {college.name}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              placeholder="Choose a username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              placeholder="Choose a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="form-input"
            />
          </div>

          {error && <div className="error-message">{error}</div>}
          
          <button className="login-button" type="submit">
            Sign Up
          </button>
        </form>

        <div className="login-footer">
          <p>
            Already have an account? <Link to="/login" className="signup-link">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup; 