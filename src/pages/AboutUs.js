import React from 'react';
import './AboutUs.css';
import Footer from '../components/Footer'; // Correct path to Footer.js

const AboutUs = () => {
  return (
    <div className="about-us">
      {/* Hero Section */}
      <section className="about">
  <div className="about-container">
    <div className="about-content">
      <h1>About Us</h1>
      <p>
        Welcome to Link Kiwi, where innovation meets creativity. Established
        in [Year], we specialize in crafting exceptional digital experiences
        that connect people and ideas.
      </p>
    </div>
    <div className="about-image">
      <img src="https://www.blogtyrant.com/wp-content/uploads/2011/02/best-about-us-pages.png" alt="About Us Image" />
    </div>
  </div>
</section>
      {/* Our Mission Section */}
      <section className="mission">
        <div className="mission-container">
          <h2 className="mission-title">Our Mission</h2>
          <p className="mission-description">
            At Link Kiwi, our mission is to empower businesses and individuals
            through innovative digital solutions. We strive to create seamless
            and engaging user experiences that foster connection and growth.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="story">
        <div className="story-container">
          <center><h3>Our Story</h3></center>
        
          <blockquote className="story-quote">

            <p>
              "Founded by <span className="founder-name">XYZ</span>, Link Kiwi began with a simple idea: to bridge the gap between technology and creativity. With a background in <span className="industry">[industry or field]</span>, <span className="founder-name">XYZ</span> set out to create a company that not only delivers exceptional products but also inspires change and innovation in the digital landscape."
            </p>
            <footer className="quote-author">Founder of Link Kiwi</footer>
          </blockquote>
        </div>
      </section>


      {/* Our Team Section */}
      <section className="team">
        <div className="container">
          <h2>Our Team</h2>
          <div>
            <h1>
              Our team at Link Kiwi is a diverse group of talented
              professionals, each bringing their unique expertise and
              perspective. From designers to developers, we are united by a
              shared passion for pushing boundaries and creating impactful
              solutions.
            </h1>
          </div>
          <div className="team-cards">
            {/* Team Member 1 */}
            <div className="team-card">
              <img
                src="https://t4.ftcdn.net/jpg/03/25/73/59/360_F_325735908_TkxHU7okor9CTWHBhkGfdRumONWfIDEb.jpg"
                alt="Saurabh"
                className="team-card-image"
              />
              <div className="team-card-content">
                <h3>Saurabh Kumar</h3>
                <p>iOS Developer</p>
              </div>
            </div>
            {/* Team Member 2 */}
            <div className="team-card">
              <img
                src="https://s3.envato.com/files/464320541/20220703_373_DP_NerT_Book_H.haru_Naplab_Business_EM5M2_Vers_1_P1010009_.jpg"
                alt="Nikhil"
                className="team-card-image"
              />
              <div className="team-card-content">
                <h3>Nikhil Chetry</h3>
                <p>MERN Stack Developer</p>
              </div>
            </div>
            {/* Team Member 3 */}
            <div className="team-card">
              <img
                src="https://i.pinimg.com/236x/cf/0b/74/cf0b7475f26c043b55fe50cfb98c15d5.jpg"
                alt="Ravi"
                className="team-card-image"
              />
              <div className="team-card-content">
                <h3>Ravi Patel</h3>
                <p>Backend Developer</p>
              </div>
            </div>
            {/* Team Member 4 */}
            <div className="team-card">
              <img
                src="https://static.wixstatic.com/media/a3c153_6e0a766c048c40aaa5230e53f2d6ac59~mv2.jpg/v1/fill/w_362,h_485,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/IMG_2698_edited.jpg"
                alt="Anita"
                className="team-card-image"
              />
              <div className="team-card-content">
                <h3>Anita sharma</h3>
                <p>UI/UX Designer</p>
              </div>
            </div>
            {/* Team Member 5 */}
            <div className="team-card">
              <img
                src="https://static.wixstatic.com/media/a3c153_86b7b7a7dbc64942a968e08b13dce3aa~mv2.jpg/v1/fill/w_362,h_485,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/IMG_4499%20(1)_edited.jpg"
                alt="Amit"
                className="team-card-image"
              />
              <div className="team-card-content">
                <h3>Amit Singh</h3>
                <p>Product Manager</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us">
        <div className="container">
          <h2>Why Choose Link Kiwi?</h2>
          <div className="box-container">
            <div className="box">
              <div className="box-icon">
                <i className="fas fa-lightbulb"></i> {/* Font Awesome icon */}
              </div>
              <h3>Innovation-Driven</h3>
              <p>We stay at the forefront of digital trends to bring you cutting-edge solutions.</p>
            </div>
            <div className="box">
              <div className="box-icon">
                <i className="fas fa-users"></i> {/* Font Awesome icon */}
              </div>
              <h3>Customer-Centric</h3>
              <p>Your needs and satisfaction are our top priorities in every project we undertake.</p>
            </div>
            <div className="box">
              <div className="box-icon">
                <i className="fas fa-tachometer-alt"></i> {/* Font Awesome icon */}
              </div>
              <h3>Efficiency</h3>
              <p>Our solutions are designed for efficiency, ensuring you get the best results quickly.</p>
            </div>
            <div className="box">
              <div className="box-icon">
                <i className="fas fa-thumbs-up"></i> {/* Font Awesome icon */}
              </div>
              <h3>Quality Assurance</h3>
              <p>We adhere to the highest standards to deliver top-quality results in every project.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default AboutUs;
