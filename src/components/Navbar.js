import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import CartIcon from './CartIcon';
import colleges from '../data/colleges';
import './Navbar.css';

const Navbar = () => {
  const { user, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const getCollegeName = (collegeCode) => {
    const college = colleges.find(c => c.code === collegeCode);
    return college ? college.name : collegeCode;
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <nav className="navbar">
      <div className="nav-brand">
        <Link to="/" className="brand-link" onClick={closeMenu}>
          CampusCart
        </Link>
      </div>
      
      <div className="nav-menu">
        <Link to="/" className="nav-link" onClick={closeMenu}>Home</Link>
        <Link to="/product-detail" className="nav-link" onClick={closeMenu}>Products</Link>
        <Link to="/sell" className="nav-link" onClick={closeMenu}>Sell Stuff</Link>
        <Link to="/about-us" className="nav-link" onClick={closeMenu}>About Us</Link>
      </div>
      
      <div className="nav-actions">
        {user ? (
          <>
            <CartIcon />
            <div className="user-menu" ref={menuRef}>
              <button className="user-menu-button" onClick={toggleMenu}>
                <span className="user-name">{user.username}</span>
                <svg className="menu-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 12h18M3 6h18M3 18h18"/>
                </svg>
              </button>
              
              {isMenuOpen && (
                <div className="dropdown-menu">
                  <div className="menu-header">
                    <span className="menu-title">Welcome, {user.username}</span>
                    <span className="menu-subtitle">{getCollegeName(user.college)}</span>
                  </div>
                  <div className="menu-divider"></div>
                  <Link to="/cart" className="menu-item" onClick={closeMenu}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="9" cy="21" r="1"></circle>
                      <circle cx="20" cy="21" r="1"></circle>
                      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                    </svg>
                    My Cart
                  </Link>
                  <Link to="/sell" className="menu-item" onClick={closeMenu}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                    Sell Items
                  </Link>
                  <div className="menu-divider"></div>
                  <button onClick={() => { logout(); closeMenu(); }} className="menu-item logout-menu-item">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
                      <polyline points="16,17 21,12 16,7"/>
                      <line x1="21" y1="12" x2="9" y2="12"/>
                    </svg>
                    Logout
                  </button>
                </div>
              )}
            </div>
          </>
        ) : (
          <Link to="/login" className="nav-link login-link">Login</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 