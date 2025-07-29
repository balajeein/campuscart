import React, { useState } from 'react';
import bg from '../Assets/download.png'; // adjust path if needed

const Checkout = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    paymentMethod: 'cod',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Order placed! (Dummy checkout)');
    console.log(formData);
  };

  return (
    <div
      className="checkout"
      style={{
        minHeight: '100vh',
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2rem',
      }}
    >
      <div
        style={{
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
          zIndex: 1,
        }}
      ></div>

      <div
        className="checkout-card"
        style={{
          position: 'relative',
          zIndex: 2,
          backgroundColor: 'rgba(255, 255, 255, 0.15)',
          backdropFilter: 'blur(12px)',
          padding: '2rem',
          borderRadius: '15px',
          boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
          maxWidth: '600px',
          width: '100%',
          color: 'white',
        }}
      >
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Checkout</h2>
        <form onSubmit={handleSubmit}>
          <label style={labelStyle}>Full Name</label>
          <input
            style={inputStyle}
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
          />

          <label style={labelStyle}>Address</label>
          <input
            style={inputStyle}
            type="text"
            name="address"
            required
            value={formData.address}
            onChange={handleChange}
          />

          <div style={{ display: 'flex', gap: '2rem' }}>
            <div style={{ flex: 1 }}>
              <label style={labelStyle}>City</label>
              <input
                style={inputStyle}
                type="text"
                name="city"
                required
                value={formData.city}
                onChange={handleChange}
              />
            </div>
            <div style={{ flex: 1 }}>
              <label style={labelStyle}>State</label>
              <input
                style={inputStyle}
                type="text"
                name="state"
                required
                value={formData.state}
                onChange={handleChange}
              />
            </div>
          </div>

          <label style={labelStyle}>ZIP Code</label>
          <input
            style={inputStyle}
            type="text"
            name="zip"
            required
            value={formData.zip}
            onChange={handleChange}
          />

          <label style={labelStyle}>Payment Method</label>
          <select
            style={inputStyle}
            name="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleChange}
          >
            <option value="cod">Cash on Delivery</option>
            <option value="upi">UPI</option>
            <option value="card">Credit/Debit Card</option>
          </select>

          <button
            type="submit"
            style={{
              marginTop: '1.5rem',
              padding: '0.8rem 1.2rem',
              backgroundColor: 'black',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              width: '100%',
              fontSize: '1rem',
              transition: 'background-color 0.3s ease',
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = '#1f1f1f')}
            onMouseOut={(e) => (e.target.style.backgroundColor = 'black')}
          >
            Place Order
          </button>
        </form>
      </div>
    </div>
  );
};

const inputStyle = {
  width: '100%',
  padding: '0.6rem',
  border: 'none',
  borderRadius: '8px',
  marginBottom: '0.5rem',
  backgroundColor: 'rgba(255, 255, 255, 0.8)',
  color: '#303030',
  fontSize: '1rem',
};

const labelStyle = {
  display: 'block',
  marginTop: '1rem',
  marginBottom: '0.3rem',
  fontWeight: '600',
};

export default Checkout;
