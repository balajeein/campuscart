import React from 'react';
import './AboutUs.css'; 

function AboutUs() {
  return (
    <div className="about-us-container">
      <div className="about-us-content">
        <h1 className="heading">About CampusCart</h1>
        <p className="description">
          CampusCart is an OLX-style marketplace designed specifically for campus communities. Whether you're looking to buy, sell, or exchange items within your college, CampusCart makes it easy and secure.
        </p>
        
        <h2 className="sub-heading">Our Mission</h2>
        <p className="description">
          Our mission is to create a hassle-free platform for students to trade goods and services within their campus. We aim to build a trustworthy and convenient community-driven marketplace.
        </p>

        <h2 className="sub-heading">Why CampusCart?</h2>
        <ul className="features-list">
          <li>Easy to list and browse items.</li>
          <li>Connect with other students safely within your campus.</li>
          <li>No commission or hidden charges.</li>
          <li>Quick and direct transactions.</li>
        </ul>

        <p className="description">
          Built by students, for students, CampusCart is your go-to app for all on-campus trading needs.
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
