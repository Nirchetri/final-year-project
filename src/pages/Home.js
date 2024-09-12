// src/pages/Home.js
import React from "react";
import Slider from "react-slick";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import CustomButton from "../components/CustomButton"; // Import CustomButton
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

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

  const redirectToContact = () => {
    navigate("/contact-us");
  };

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div>
          <video autoPlay muted loop className="hero-video">
            <source src="/videos/backgroundd.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="hero-content">
          <h1>Welcome to Link Kiwi</h1>
          <p>Your gateway to innovative solutions and services.</p>
          {/* Use CustomButton here */}
          <CustomButton text="Learn More" onClick={() => console.log('Learn More clicked')} />
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Our Features</h2>
        <div className="feature-cards">
          <div className="feature-card">
            <LazyLoadImage
              src="https://images.pexels.com/photos/842548/pexels-photo-842548.jpeg"
              alt="Innovative Solutions"
              effect="blur"
            />
            <h3>Innovative Solutions</h3>
            <p>
              Cutting-Edge Technology: Harness the power of the latest technology to drive your business forward.
            </p>
          </div>
          <div className="feature-card">
            <LazyLoadImage
              src="https://images.pexels.com/photos/927629/pexels-photo-927629.jpeg"
              alt="Exceptional Support"
              effect="blur"
            />
            <h3>Exceptional Support</h3>
            <p>
              24/7 Availability: Get assistance whenever you need it, no matter the time or day.
            </p>
          </div>
          <div className="feature-card">
            <LazyLoadImage
              src="https://images.pexels.com/photos/935743/pexels-photo-935743.jpeg"
              alt="Advanced Analytics"
              effect="blur"
            />
            <h3>Advanced Analytics</h3>
            <p>Real-Time Data: Access live data to make informed decisions quickly.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <center>
          <h2>What Our Clients Say</h2>
        </center>
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

      {/* Contact Section */}
      <section className="contact">
        <h2>Get in Touch</h2>
        <p>Have questions? Feel free to contact us.</p>
        {/* Use CustomButton here */}
        <CustomButton text="Contact Us" onClick={redirectToContact} />
      </section>

      <Footer />
    </div>
  );
};

export default Home;
