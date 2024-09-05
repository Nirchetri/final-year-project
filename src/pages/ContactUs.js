// src/pages/ContactUs.js
import React from 'react';
import './ContactUs.css'; // Ensure this path is correct
import '@fortawesome/fontawesome-free/css/all.min.css';
import Footer from '../components/Footer'; // Import Footer component

const ContactUs = () => {
  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="container">
          <h1 className="contact-title">Contact Us</h1>
          <p className="contact-description">
            We're excited to connect with you! Whether you have questions about our services, need a consultation, or want to discuss a potential project, the Link Kiwi team is here to help.
          </p>
        </div>
      </section>

      <section className="contact-info">
        <div className="container">
          <h2 className="info-title">Get in Touch</h2>
          <div className="contact-cards">
            {[
              {
                icon: 'fas fa-envelope',
                title: 'Email',
                content: <a href="mailto:info@linkkiwi.com">info@linkkiwi.com</a>
              },
              {
                icon: 'fas fa-phone',
                title: 'Phone',
                content: <a href="tel:+1234567890">+1234567890</a>
              },
              {
                icon: 'fas fa-map-marker-alt',
                title: 'Address',
                content: '123 Business Rd, City, Country'
              },
              {
                icon: 'fas fa-clock',
                title: 'Business Hours',
                content: 'Monday to Friday, 9 AM - 6 PM'
              }
            ].map((item, index) => (
              <div className="contact-card" key={index}>
                <div className="contact-icon">
                  <i className={item.icon}></i>
                </div>
                <div className="contact-card-content">
                  <h4>{item.title}</h4>
                  <p>{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-form-section">
        <div className="container">
          <h3 className="form-title">Send Us a Message</h3>
          <form className="contact-form">
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
            <textarea placeholder="Message" required></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </section>

      <section className="follow-us">
        <div className="container">
          <h3 className="follow-title">Follow Us</h3>
          <div className="social-icons">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactUs;
