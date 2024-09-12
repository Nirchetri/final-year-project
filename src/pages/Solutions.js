import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud, faShieldAlt, faChartBar, faNetworkWired, faCode } from '@fortawesome/free-solid-svg-icons';
import Footer from '../components/Footer';
import './Solutions.css';
import { Fade } from 'react-awesome-reveal';

const SolutionItem = ({ icon, title, overview, keyServices, benefits }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="solution-item">
      <FontAwesomeIcon icon={icon} size="3x" className="solution-icon" />
      <div className="solution-details">
        <h2>{title}</h2>
        <p>{overview}</p>
        {isExpanded && (
          <>
            <h3>Key Services:</h3>
            <ul>
              {keyServices.map((service, index) => (
                <li key={index}>{service}</li>
              ))}
            </ul>
            <h3>Benefits:</h3>
            <ul>
              {benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          </>
        )}
        <button onClick={toggleExpand} className="read-more-button">
          {isExpanded ? 'Read Less' : 'Read More'}
        </button>
      </div>
    </div>
  );
};

const Solutions = () => {
  return (
    <div className="solutions-page">
      <section className="hero-section">
        <Fade triggerOnce duration={1500}>
          <h1>Our Solutions</h1>
          <p>
            At Link Kiwi, we are committed to delivering innovative and reliable IT solutions that empower businesses to achieve their goals in the ever-evolving digital landscape. Our offerings are designed to address a wide range of business needs, from cloud computing to cybersecurity, ensuring your company remains competitive and secure.
          </p>
        </Fade>
      </section>

      <section className="solutions-container">
        <SolutionItem
          icon={faCloud}
          title="Cloud Computing"
          overview="Our cloud computing solutions provide the flexibility, scalability, and efficiency your business needs to thrive in the modern world. We help you transition to the cloud, optimize your infrastructure, and leverage cloud-based applications for enhanced productivity."
          keyServices={[
            "Cloud Migration: Smoothly transition your existing systems to the cloud.",
            "Cloud Infrastructure Management: Manage and optimize your cloud environment for performance and cost-efficiency.",
            "SaaS Solutions: Develop and deploy cloud-based applications tailored to your business needs."
          ]}
          benefits={[
            "Scalability: Easily scale your operations as your business grows.",
            "Cost Efficiency: Reduce IT costs with pay-as-you-go cloud services.",
            "Security: Benefit from advanced cloud security protocols."
          ]}
        />
        <SolutionItem
          icon={faShieldAlt}
          title="Cybersecurity"
          overview="In an increasingly digital world, protecting your data and systems from cyber threats is more critical than ever. Our cybersecurity services are designed to safeguard your business from breaches, ensuring your information is secure and your operations are uninterrupted."
          keyServices={[
            "Threat Detection and Prevention: Stay ahead of cyber threats with real-time monitoring and advanced threat detection.",
            "Data Encryption: Protect sensitive information with robust encryption technologies.",
            "Incident Response: Minimize damage and recovery time with our expert incident response services."
          ]}
          benefits={[
            "Enhanced Security: Protect your business against a wide range of cyber threats.",
            "Compliance: Ensure your business meets all regulatory and industry standards.",
            "Peace of Mind: Operate confidently, knowing your data is secure."
          ]}
        />
        <SolutionItem
          icon={faChartBar}
          title="Data Analytics"
          overview="Data is one of the most valuable assets your business has. Our data analytics solutions enable you to unlock the full potential of your data, providing you with actionable insights that drive better decision-making and business growth."
          keyServices={[
            "Business Intelligence: Leverage data to gain insights into your operations and customer behavior.",
            "Advanced Analytics: Use predictive analytics to anticipate trends and stay ahead of the competition.",
            "Data Visualization: Present your data in an easy-to-understand format with custom dashboards and visualizations."
          ]}
          benefits={[
            "Informed Decisions: Make data-driven decisions with confidence.",
            "Improved Efficiency: Optimize operations and strategies based on actionable insights.",
            "Competitive Advantage: Stay ahead of the competition with predictive analytics."
          ]}
        />
        <SolutionItem
          icon={faNetworkWired}
          title="IT Infrastructure Management"
          overview="Your IT infrastructure is the backbone of your business operations. We ensure that your systems are always running efficiently, securely, and aligned with your business goals."
          keyServices={[
            "Network Management: Keep your networks secure and operational with proactive monitoring and maintenance.",
            "Server Management: Ensure your servers are optimized for performance and reliability.",
            "IT Support: Get 24/7 support from our expert team to resolve issues quickly and minimize downtime."
          ]}
          benefits={[
            "Operational Efficiency: Maximize uptime and productivity with reliable IT infrastructure.",
            "Cost Savings: Reduce maintenance costs with proactive management.",
            "Scalability: Easily scale your infrastructure as your business grows."
          ]}
        />
        <SolutionItem
          icon={faCode}
          title="Custom Software Development"
          overview="No two businesses are alike, and neither are their software needs. Our custom software development services provide you with tailored solutions that meet your specific requirements and help you achieve your business objectives."
          keyServices={[
            "Custom Applications: Develop software solutions that are perfectly aligned with your business processes.",
            "System Integration: Ensure seamless integration of new software with your existing systems.",
            "Software Maintenance: Keep your software up-to-date and running smoothly with ongoing support and maintenance."
          ]}
          benefits={[
            "Tailored Solutions: Get software that is built specifically for your business needs.",
            "Seamless Integration: Ensure smooth operation with your existing systems.",
            "Ongoing Support: Receive continuous updates and support to keep your software performing at its best."
          ]}
        />
      </section>
      <div className="footer-spacing" />
      <Footer />
    </div>
  );
};

export default Solutions;
