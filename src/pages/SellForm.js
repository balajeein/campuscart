import React from 'react';
import './SellForm.css';

function SellForm() {
  return (
    <div className="sell-container">
      <h1 className="sell-title">Sell Your Item</h1>
      <p className="sell-subtitle">List your item and connect with buyers on your campus</p>

      <form className="sell-form">
        <fieldset className="section">
          <legend>Seller Information</legend>
          <input type="text" placeholder="Your Name" required />
          <input type="text" placeholder="Phone Number" required />
          <input type="text" placeholder="Your Location (e.g., Hostel R1, Block A)" required />
        </fieldset>

        <fieldset className="section">
          <legend>Product Information</legend>
          <input type="text" placeholder="Product Name (e.g., iPhone 13)" required />
          <textarea placeholder="Description" required />
          <div className="row">
            <input type="number" placeholder="Price ₹" required />
            <input type="text" placeholder="Age (e.g., 6 months)" required />
            <select required>
              <option value="">Select Category</option>
              <option value="Electronics">Electronics</option>
              <option value="Books">Books</option>
              <option value="Furniture">Furniture</option>
              <option value="Others">Others</option>
            </select>
          </div>
        </fieldset>

        <fieldset className="section">
          <legend>Product Image</legend>
          <input type="file" accept="image/png, image/jpeg" required />
        </fieldset>

        <button className="submit-btn" type="submit">List My Item</button>
      </form>
    </div>
  );
}

export default SellForm;
