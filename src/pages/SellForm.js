import React, { useEffect, useState } from 'react';
import './SellForm.css';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import colleges from '../data/colleges';

function SellForm() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    sellerName: '',
    phoneNumber: '',
    location: '',
    productName: '',
    description: '',
    price: '',
    age: '',
    category: '',
    image: null
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  const getCollegeName = (collegeCode) => {
    const college = colleges.find(c => c.code === collegeCode);
    return college ? college.name : collegeCode;
  };

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: files ? files[0] : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage('');

    try {
      // Validate form data
      if (!formData.sellerName || !formData.phoneNumber || !formData.location || 
          !formData.productName || !formData.description || !formData.price || 
          !formData.age || !formData.category || !formData.image) {
        setMessage('Please fill in all fields');
        setIsSubmitting(false);
        return;
      }

      // Create new product object
      const newProduct = {
        id: Date.now(), // Generate unique ID
        image: formData.image ? URL.createObjectURL(formData.image) : '/Assets/default-product.jpg',
        title: formData.productName,
        description: formData.description,
        price: parseInt(formData.price),
        roomNo: formData.location,
        time: 'Just now',
        college: user.college,
        sellerName: formData.sellerName,
        phoneNumber: formData.phoneNumber,
        age: formData.age,
        category: formData.category
      };

      // Get existing products from localStorage or use default
      const existingProducts = JSON.parse(localStorage.getItem('userProducts')) || [];
      
      // Add new product
      const updatedProducts = [...existingProducts, newProduct];
      
      // Save to localStorage
      localStorage.setItem('userProducts', JSON.stringify(updatedProducts));

      // Show success message
      setMessage('Product listed successfully! Redirecting to products page...');
      
      // Redirect to products page after 2 seconds
      setTimeout(() => {
        navigate('/product-detail');
      }, 2000);

    } catch (error) {
      setMessage('Error listing product. Please try again.');
      console.error('Error listing product:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!user) {
    return null;
  }

  return (
    <div className="sell-container">
      <h1 className="sell-title">Sell Your Item</h1>
      <p className="sell-subtitle">
        List your item and connect with buyers at <strong>{getCollegeName(user.college)}</strong>
      </p>

      {message && (
        <div className={`message ${message.includes('Error') ? 'error' : 'success'}`}>
          {message}
        </div>
      )}

      <form className="sell-form" onSubmit={handleSubmit}>
        <fieldset className="section">
          <legend>Seller Information</legend>
          <div className="college-info">
            <label>Your College:</label>
            <span className="college-display">{getCollegeName(user.college)}</span>
          </div>
          <input 
            type="text" 
            name="sellerName"
            placeholder="Your Name" 
            value={formData.sellerName}
            onChange={handleInputChange}
            required 
          />
          <input 
            type="text" 
            name="phoneNumber"
            placeholder="Phone Number" 
            value={formData.phoneNumber}
            onChange={handleInputChange}
            required 
          />
          <input 
            type="text" 
            name="location"
            placeholder="Your Location (e.g., Hostel R1, Block A)" 
            value={formData.location}
            onChange={handleInputChange}
            required 
          />
        </fieldset>

        <fieldset className="section">
          <legend>Product Information</legend>
          <input 
            type="text" 
            name="productName"
            placeholder="Product Name (e.g., iPhone 13)" 
            value={formData.productName}
            onChange={handleInputChange}
            required 
          />
          <textarea 
            name="description"
            placeholder="Description" 
            value={formData.description}
            onChange={handleInputChange}
            required 
          />
          <div className="row">
            <input 
              type="number" 
              name="price"
              placeholder="Price ₹" 
              value={formData.price}
              onChange={handleInputChange}
              required 
            />
            <input 
              type="text" 
              name="age"
              placeholder="Age (e.g., 6 months)" 
              value={formData.age}
              onChange={handleInputChange}
              required 
            />
            <select 
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              required
            >
              <option value="">Select Category</option>
              <option value="Electronics">Electronics</option>
              <option value="Books">Books</option>
              <option value="Furniture">Furniture</option>
              <option value="Sports">Sports</option>
              <option value="Clothing">Clothing</option>
              <option value="Others">Others</option>
            </select>
          </div>
        </fieldset>

        <fieldset className="section">
          <legend>Product Image</legend>
          <input 
            type="file" 
            name="image"
            accept="image/png, image/jpeg" 
            onChange={handleInputChange}
            required 
          />
        </fieldset>

        <button 
          className="submit-btn" 
          type="submit" 
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Listing Item...' : 'List My Item'}
        </button>
      </form>
    </div>
  );
}

export default SellForm;
