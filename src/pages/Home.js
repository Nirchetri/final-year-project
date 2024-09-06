import React from "react";
import Slider from "react-slick";
import Footer from "../components/Footer"; // Adjust the path as needed
import "./Home.css"; // For custom styling

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
        <div>
          <video autoPlay muted loop className="hero-video">
            <source src="/videos/backgroundd.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
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
            <img
              src="https://images.pexels.com/photos/842548/pexels-photo-842548.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Feature 1"
            />
            <h3>Innovative Solutions</h3>
            <p>
              Cutting-Edge Technology: Harness the power of the latest
              technology to drive your business forward. Customizable
              Options:Tailor solutions to meet the unique needs of your
              business. Seamless Integration: Easily integrate with existing
              systems for a smooth transition
            </p>
          </div>
          <div className="feature-card">
            <img
              src="https://images.pexels.com/photos/927629/pexels-photo-927629.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Feature 2"
            />
            <h3>Exceptional Support</h3>
            <p>
              24/7 Availability: Get assistance whenever you need it, no matter
              the time or day. Expert Team: Access a team of knowledgeable
              professionals dedicated to your success.
            </p>
          </div>
          <div className="feature-card">
            <img
              src="https://images.pexels.com/photos/935743/pexels-photo-935743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Feature 3"
            />
            <h3>Advanced Analytics</h3>
            <p>
              Real-Time Data: Access live data to make informed decisions
              quickly. Comprehensive Reports: Generate detailed reports to
              analyze performance and trends. Intelligent Insights: Leverage
              AI-driven insights to optimize your strategies and achieve better
              results.
            </p>
          </div>
        </div>
      </section>

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
            <p>
              "Their solutions have greatly enhanced our business operations."
            </p>
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
