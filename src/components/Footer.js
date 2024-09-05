// src/components/Footer.js
import React from 'react';
import './Footer.css'; // For custom styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Link Kiwi Description */}
        <div className="footer-description">
          <h1>Link Kiwi</h1>
          <p>Empower. Innovate. Succeed.</p>
        </div>

        {/* Contact Information */}
        <div className="footer-contact">
          <h3>Contact</h3>
          <p>500 Main Street, YourCity, XYZ</p>
          <p><strong>General Inquiries:</strong> info@linkkiwi.com</p>
          <p><strong>Sales:</strong> sales@linkkiwi.com</p>
          <p><strong>Customer Care:</strong> hello@linkkiwi.com</p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/terms-and-conditions">Terms & Conditions</a></li>
            <li><a href="/privacy-policy">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Connect with Us */}
        <div className="footer-newsletter">
          <h3>Connect with Us</h3>
          <p>Stay informed with the latest IT trends and updates.</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Your Email" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
