import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import colleges from '../data/colleges';

const Home = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const getCollegeName = (collegeCode) => {
    const college = colleges.find(c => c.code === collegeCode);
    return college ? college.name : collegeCode;
  };

  return (
    <div className="home">
      <div className="hero">
        <h2>Welcome to CampusCart</h2>
        {user && user.college ? (
          <>
            <p className="college-welcome">
              Your go-to platform to buy and sell stuff at <strong>{getCollegeName(user.college)}</strong>.
            </p>
            <p className="college-description">
              Connect with fellow students, find great deals, and make your campus life easier!
            </p>
          </>
        ) : (
          <p>Your go-to platform to buy and sell stuff on campus.</p>
        )}
        <div className="button-group">
          <button className="buy-button" onClick={() => navigate('/product-detail')}>
            Browse Products
          </button>
          <button className="sell-button" onClick={() => navigate('/sell')}>
            Sell Your Items
          </button>
        </div>
        {!user && (
          <div className="login-suggestion">
            <p>Already have an account? <button onClick={() => navigate('/login')} className="login-link">Login</button> to access your college's marketplace.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
