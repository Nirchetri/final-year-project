import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop, faMobileAlt, faShoppingCart, faBullhorn, faUsers, faCloud } from '@fortawesome/free-solid-svg-icons';
import Footer from '../components/Footer'; // Ensure the path is correct
import './Services.css'; // For custom styling

const ServiceItem = ({ icon, title, summary, details }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="service-item">
      <FontAwesomeIcon icon={icon} size="3x" className="service-icon"/>
      <div className="service-details">
        <h2>{title}</h2>
        <p>{summary}</p>
        {isExpanded && <p className="service-details-expanded">{details}</p>}
        <button onClick={toggleExpand} className="read-more-button">
          {isExpanded ? 'Read Less' : 'Read More'}
        </button>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <div className="services-page">
      <section className="services-intro">
        <h1>Our Services</h1>
        <p>At Link Kiwi, we provide a comprehensive range of digital solutions designed to help your business thrive in the digital age. Our team of experts is dedicated to delivering high-quality services tailored to meet your unique needs.</p>
      </section>

      <section className="services-container">
        <ServiceItem
          icon={faDesktop}
          title="Web Development"
          summary="Our web development services focus on creating responsive, user-friendly websites that are tailored to your business goals."
          details="Crafting unique, tailored website designs that reflect your brand identity. Ensuring your site looks great on all devices, from desktops to smartphones. Utilizing platforms like WordPress, Wix, or custom CMS solutions to make content management easy."
        />

        <ServiceItem
          icon={faMobileAlt}
          title="Mobile App Development"
          summary="We specialize in developing high-quality mobile applications that provide seamless user experiences across platforms."
          details="Building native and cross-platform apps that meet your business requirements. Creating intuitive interfaces that enhance user engagement and satisfaction. Providing ongoing support and updates to keep your app running smoothly."
        />

        <ServiceItem
          icon={faShoppingCart}
          title="E-Commerce Solutions"
          summary="We offer end-to-end services to create secure, scalable, and user-friendly e-commerce platforms that drive sales and customer loyalty."
          details="Developing personalized e-commerce websites tailored to your brand. Implementing secure and convenient payment options for your customers. Enhancing your online presence with search engine optimization and digital marketing strategies."
        />

        <ServiceItem
          icon={faBullhorn}
          title="Digital Marketing"
          summary="Our digital marketing services are designed to increase your brand visibility and engagement."
          details="Improving your website's search engine ranking and increasing organic traffic. Engaging your audience through targeted social media campaigns. Creating compelling content that resonates with your audience and builds brand authority."
        />

        <ServiceItem
          icon={faUsers}
          title="UI/UX Design"
          summary="Our UI/UX design services focus on creating intuitive, engaging interfaces that provide an exceptional user experience."
          details="Understanding your audience to create designs that meet their needs. Developing detailed wireframes and prototypes to visualize the user journey. Conducting tests to ensure your product is user-friendly and effective."
        />

        <ServiceItem
          icon={faCloud}
          title="Cloud Services"
          summary="We provide solutions that enhance scalability, flexibility, and security for your business operations."
          details="Seamlessly moving your data and applications to the cloud. Optimizing and managing your cloud resources for maximum efficiency. Ensuring your data is protected with reliable backup and recovery solutions."
        />
      </section>
      <div className="footer-spacing" /> {/* Adds space before the footer */}
      <Footer />
    </div>
  );
};

export default Services;
