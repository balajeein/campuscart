import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Signup = () => {
  const { signup } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = signup(username, password);
    if (success) {
      navigate('/');
    } else {
      setError('Signup failed');
    }
  };

  return (
    <div className="home">
      <div className="hero" style={{ maxWidth: 400 }}>
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            style={{ width: '100%', marginBottom: 12 }}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ width: '100%', marginBottom: 12 }}
          />
          {error && <div style={{ color: 'red', marginBottom: 8 }}>{error}</div>}
          <button className="buy-button" type="submit" style={{ width: '100%' }}>
            Sign Up
          </button>
        </form>
        <p style={{ marginTop: 16 }}>
          Already have an account? <Link to="/login" style={{ color: '#ffcc00' }}>Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup; 