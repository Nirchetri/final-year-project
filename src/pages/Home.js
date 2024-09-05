// src/pages/Home.js
import React from 'react';
import Slider from 'react-slick';
import Footer from '../components/Footer'; // Adjust the path as needed
import './Home.css'; // For custom styling

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
  };

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Link Kiwi</h1>
          <p>Your gateway to innovative solutions and services.</p>
          <button className="cta-button">Learn More</button>
        </div>
      </section>

      <section className="features">
        <h2>Our Features</h2>
        <div className="feature-cards">
          <div className="feature-card">
            <img src="https://via.placeholder.com/100" alt="Feature 1"/>
            <h3>Feature 1</h3>
            <p>Description of Feature 1</p>
          </div>
          <div className="feature-card">
            <img src="https://via.placeholder.com/100" alt="Feature 2"/>
            <h3>Feature 2</h3>
            <p>Description of Feature 2</p>
          </div>
          <div className="feature-card">
            <img src="https://via.placeholder.com/100" alt="Feature 3"/>
            <h3>Feature 3</h3>
            <p>Description of Feature 3</p>
          </div>
        </div>
      </section>

      <section className="testimonials">
           <center><h2>What Our Clients Say</h2></center>
        <Slider {...settings} className="testimonial-slider">
          <div className="testimonial-card">
            <p>"Link Kiwi provided exceptional service and support!"</p>
            <cite>- Client 1</cite>
          </div>
          <div className="testimonial-card">
            <p>"Their solutions have greatly enhanced our business operations."</p>
            <cite>- Client 2</cite>
          </div>
        </Slider>
      </section>
      
      <section className="contact">
        <h2>Get in Touch</h2>
        <p>Have questions? Feel free to contact us.</p>
        <button className="cta-button">Contact Us</button>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
