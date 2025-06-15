import React from 'react';
import './AboutUs.css';

function AboutUs() {
  return (
    <div className="aboutus-container">
      <div className="aboutus-inner">
        <section className="aboutus-hero">
          <h1>About CampusCart</h1>
          <p>Your one-stop marketplace for all things on campus – from books and electronics to furniture and more!</p>
        </section>

        <section className="aboutus-section">
          <h2>🚀 Our Mission</h2>
          <p>
            CampusCart is built by students, for students. We aim to make it easy to buy, sell, and trade products within your college community.
            No more shady deals – just safe and convenient transactions among trusted peers.
          </p>
        </section>

        <section className="aboutus-section team">
          <h2>👨‍💻 Meet the Team</h2>
          <div className="team-cards">
            <div className="team-member">
              <img src="/Assets/IMG_7380.jpg" alt="Balajee" />
              <h4>Balajee</h4>
              <p>Founder & Developer</p>
            </div>
          </div>
        </section>

        <section className="aboutus-section features">
          <h2>✨ Features</h2>
          <ul>
            <li>Buy & sell easily within your campus</li>
            <li>Image upload for better listings</li>
            <li>Category filters for quick browsing</li>
            <li>Contact sellers directly via phone</li>
          </ul>
        </section>

        <section className="aboutus-section contact-newsletter">
          <h2>📬 Stay Connected</h2>
          <p>Have questions, suggestions or just want to say hi? Reach out to us!</p>
          <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Message or Feedback..." rows="4" required />
            <button type="submit">Send Message</button>
          </form>
          <p className="newsletter-note">Subscribe to get updates on new features and listings!</p>
        </section>
      </div>
    </div>
  );
}

export default AboutUs;
