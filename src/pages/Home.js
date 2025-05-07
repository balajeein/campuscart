import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home">
      <div className="hero">
        <h2>Welcome to Campuscart</h2>
        <p>Your go-to platform to buy and sell stuff on campus.</p>
        <div className="button-group">
          <button className="buy-button" onClick={() => navigate('/product-detail')}>
            Buy
          </button>
          <button className="sell-button" onClick={() => navigate('/sell')}>
            Sell
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
