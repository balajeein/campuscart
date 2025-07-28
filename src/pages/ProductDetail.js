import React from 'react';
import './ProductDetail.css';
import products from '../data/products';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const ProductDetail = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleAction = () => {
    if (!user) {
      navigate('/login');
    } else {
      navigate('/checkout');
    }
  };

  return (
    <div className="product-list">
      {products.map((product) => (
        <div className="product-card" key={product.id}>
          <img src={product.image} alt={product.title} className="product-image" />
          <div className="product-info">
            <h2 className="product-title">{product.title}</h2>
            <p className="product-description">{product.description}</p>
            <p className="product-price">Rs. {product.price}</p>
            <p className="product-rating">Room No: {product.roomNo}</p>
            <p className="product-time">{product.time}</p>
          </div>

          <div className="product-actions">
            <button className="original-buy-button" onClick={handleAction}>Buy</button>
            <button className="borrow-button" onClick={handleAction}>Borrow</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductDetail;
