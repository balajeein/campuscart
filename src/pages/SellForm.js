import React, { useState } from 'react';
import './SellForm.css';

const SellForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    batch: '',
    room: '',
    image: null,
    title: '',
    description: '',
    price: '',
    borrowPrice: '',
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      const file = files[0];
      if (file && file.size > 2 * 1024 * 1024) {
        alert('Image must be less than 2MB');
        return;
      }
      setFormData({ ...formData, image: file });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    // Here you would handle the API or data storage
  };

  return (
    <div className="sell-form-container">
      <h2>Sell Your Stuff</h2>
      <form onSubmit={handleSubmit} className="sell-form">
        <input type="text" name="name" placeholder="Your Name" required onChange={handleChange} />
        <input type="text" name="batch" placeholder="Batch Year (e.g. 2025)" required onChange={handleChange} />
        <input type="text" name="room" placeholder="Room No" required onChange={handleChange} />
        <input type="file" name="image" accept="image/*" required onChange={handleChange} />
        <input type="text" name="title" placeholder="Product Title" required onChange={handleChange} />
        <textarea name="description" placeholder="Product Description" required onChange={handleChange} />
        <input type="number" name="price" placeholder="Price (₹)" required onChange={handleChange} />
        <input type="number" name="borrowPrice" placeholder="Borrow Price (₹)" onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SellForm;
