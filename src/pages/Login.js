import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const { login } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = login(username, password);
    if (success) {
      navigate('/');
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="home">
      <div className="hero" style={{ maxWidth: 400 }}>
        <h2>Login</h2>
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
            Login
          </button>
        </form>
        <p style={{ marginTop: 16 }}>
          Don't have an account? <Link to="/signup" style={{ color: '#ffcc00' }}>Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login; 