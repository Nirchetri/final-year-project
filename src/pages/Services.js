import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop, faMobileAlt, faShoppingCart, faBullhorn, faUsers, faCloud } from '@fortawesome/free-solid-svg-icons';
import Footer from '../components/Footer'; // Ensure the path is correct
import './Services.css'; // For custom styling

const Services = () => {
  return (
    <div className="services-page">
      <section className="services-intro">
        <h1>Our Services</h1>
        <p>At Link Kiwi, we provide a comprehensive range of digital solutions designed to help your business thrive in the digital age. Our team of experts is dedicated to delivering high-quality services tailored to meet your unique needs.</p>
      </section>

      <section className="services-container">
        <div className="service-item">
          <FontAwesomeIcon icon={faDesktop} size="3x" className="service-icon"/>
          <div className="service-details">
            <h2>Web Development</h2>
            <p>Our web development services focus on creating responsive, user-friendly websites that are tailored to your business goals.</p>
            <ul>
              <li><strong>Custom Website Design:</strong> Crafting unique, tailored website designs that reflect your brand identity.</li>
              <li><strong>Responsive Design:</strong> Ensuring your site looks great on all devices, from desktops to smartphones.</li>
              <li><strong>CMS Integration:</strong> Utilizing platforms like WordPress, Wix, or custom CMS solutions to make content management easy.</li>
            </ul>
          </div>
        </div>

        <div className="service-item">
          <FontAwesomeIcon icon={faMobileAlt} size="3x" className="service-icon"/>
          <div className="service-details">
            <h2>Mobile App Development</h2>
            <p>We specialize in developing high-quality mobile applications that provide seamless user experiences across platforms.</p>
            <ul>
              <li><strong>iOS and Android Development:</strong> Building native and cross-platform apps that meet your business requirements.</li>
              <li><strong>User-Centric Design:</strong> Creating intuitive interfaces that enhance user engagement and satisfaction.</li>
              <li><strong>App Maintenance & Support:</strong> Providing ongoing support and updates to keep your app running smoothly.</li>
            </ul>
          </div>
        </div>

        <div className="service-item">
          <FontAwesomeIcon icon={faShoppingCart} size="3x" className="service-icon"/>
          <div className="service-details">
            <h2>E-Commerce Solutions</h2>
            <p>We offer end-to-end services to create secure, scalable, and user-friendly e-commerce platforms that drive sales and customer loyalty.</p>
            <ul>
              <li><strong>Custom Online Stores:</strong> Developing personalized e-commerce websites tailored to your brand.</li>
              <li><strong>Payment Gateway Integration:</strong> Implementing secure and convenient payment options for your customers.</li>
              <li><strong>SEO & Marketing:</strong> Enhancing your online presence with search engine optimization and digital marketing strategies.</li>
            </ul>
          </div>
        </div>

        <div className="service-item">
          <FontAwesomeIcon icon={faBullhorn} size="3x" className="service-icon"/>
          <div className="service-details">
            <h2>Digital Marketing</h2>
            <p>Our digital marketing services are designed to increase your brand visibility and engagement.</p>
            <ul>
              <li><strong>SEO & SEM:</strong> Improving your website's search engine ranking and increasing organic traffic.</li>
              <li><strong>Social Media Marketing:</strong> Engaging your audience through targeted social media campaigns.</li>
              <li><strong>Content Marketing:</strong> Creating compelling content that resonates with your audience and builds brand authority.</li>
            </ul>
          </div>
        </div>

        <div className="service-item">
          <FontAwesomeIcon icon={faUsers} size="3x" className="service-icon"/>
          <div className="service-details">
            <h2>UI/UX Design</h2>
            <p>Our UI/UX design services focus on creating intuitive, engaging interfaces that provide an exceptional user experience.</p>
            <ul>
              <li><strong>User Research & Analysis:</strong> Understanding your audience to create designs that meet their needs.</li>
              <li><strong>Wireframing & Prototyping:</strong> Developing detailed wireframes and prototypes to visualize the user journey.</li>
              <li><strong>Usability Testing:</strong> Conducting tests to ensure your product is user-friendly and effective.</li>
            </ul>
          </div>
        </div>

        <div className="service-item">
          <FontAwesomeIcon icon={faCloud} size="3x" className="service-icon"/>
          <div className="service-details">
            <h2>Cloud Services</h2>
            <p>We provide solutions that enhance scalability, flexibility, and security for your business operations.</p>
            <ul>
              <li><strong>Cloud Migration:</strong> Seamlessly moving your data and applications to the cloud.</li>
              <li><strong>Cloud Infrastructure Management:</strong> Optimizing and managing your cloud resources for maximum efficiency.</li>
              <li><strong>Data Backup & Recovery:</strong> Ensuring your data is protected with reliable backup and recovery solutions.</li>
            </ul>
          </div>
        </div>
      </section>
      <div className="footer-spacing" /> {/* Adds space before the footer */}
      <Footer />
    </div>
  );
};

export default Services;
