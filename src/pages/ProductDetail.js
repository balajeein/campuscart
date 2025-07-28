import React, { useState, useMemo } from 'react';
import './ProductDetail.css';
import products from '../data/products';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const ProductDetail = () => {
  const { user } = useAuth();
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  // Get user-submitted products from localStorage
  const getUserProducts = () => {
    try {
      return JSON.parse(localStorage.getItem('userProducts')) || [];
    } catch (error) {
      console.error('Error loading user products:', error);
      return [];
    }
  };

  // Combine default products with user-submitted products
  const allProducts = useMemo(() => {
    const userProducts = getUserProducts();
    return [...products, ...userProducts];
  }, []);

  // Show all products if not logged in, or filter by college if logged in
  const displayProducts = user && user.college 
    ? allProducts.filter(product => product.college === user.college)
    : allProducts;

  // Filter products based on search term
  const filteredProducts = useMemo(() => {
    if (!searchTerm.trim()) return displayProducts;
    
    return displayProducts.filter(product =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.roomNo.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [displayProducts, searchTerm]);

  const handleBuy = () => {
    if (!user) {
      navigate('/login');
    } else {
      navigate('/checkout');
    }
  };

  const handleAddToCart = (product) => {
    if (!user) {
      navigate('/login');
    } else {
      addToCart(product);
      // Create a temporary notification
      const notification = document.createElement('div');
      notification.className = 'add-to-cart-notification';
      notification.textContent = `${product.title} added to cart!`;
      notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background-color: #28a745;
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 10000;
        font-weight: bold;
        animation: slideIn 0.3s ease;
      `;
      document.body.appendChild(notification);
      
      setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
          document.body.removeChild(notification);
        }, 300);
      }, 2000);
    }
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const clearSearch = () => {
    setSearchTerm('');
  };

  return (
    <div className="product-list">
      {user && user.college ? (
        <div className="college-header">
          <h2>Products for {user.college} Students</h2>
        </div>
      ) : (
        <div className="college-header">
          <h2>All Available Products</h2>
        </div>
      )}
      
      <div className="search-container">
        <div className="search-box">
          <svg className="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.35-4.35"></path>
          </svg>
          <input
            type="text"
            placeholder="Search products, descriptions, or room numbers..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="search-input"
          />
          {searchTerm && (
            <button onClick={clearSearch} className="clear-search">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          )}
        </div>
        {searchTerm && (
          <div className="search-results-info">
            Found {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
          </div>
        )}
      </div>
      
      {filteredProducts.length === 0 ? (
        <div className="no-products">
          <h2>No Products Found</h2>
          {searchTerm ? (
            <p>No products match your search for "{searchTerm}". Try different keywords.</p>
          ) : (
            <p>There are currently no products available.</p>
          )}
          <p>Check back later or contact your campus administrator.</p>
        </div>
      ) : (
        <div className="products-grid">
          {filteredProducts.map((product) => (
            <div className="product-card" key={product.id}>
              <img src={product.image} alt={product.title} className="product-image" />
              <div className="product-info">
                <h2 className="product-title">{product.title}</h2>
                <p className="product-description">{product.description}</p>
                <p className="product-price">Rs. {product.price}</p>
                <p className="product-rating">Room No: {product.roomNo}</p>
                <p className="product-time">{product.time}</p>
                {product.category && (
                  <p className="product-category">Category: {product.category}</p>
                )}
                {!user && (
                  <p className="product-college">College: {product.college}</p>
                )}
              </div>

              <div className="product-actions">
                <button className="original-buy-button" onClick={handleBuy}>Buy</button>
                <button className="add-to-cart-button" onClick={() => handleAddToCart(product)}>Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
