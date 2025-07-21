import React, { useState } from 'react';
import './ProductDetail.css';
import products from '../data/products';

const ProductDetail = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      {/* Search Input */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for a product..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Product List */}
      <div className="product-list">
        {filteredProducts.map((product) => (
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
              <button className="original-buy-button">Buy</button>
              <button className="borrow-button">Borrow</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDetail;
