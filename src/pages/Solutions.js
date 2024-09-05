// src/pages/Solutions.js
import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Footer from '../components/Footer'; // Importing Footer component
import './Solutions.css';

const solutionsData = [
  {
    title: "Cloud Computing",
    overview: "Our cloud computing solutions provide the flexibility, scalability, and efficiency your business needs to thrive in the modern world. We help you transition to the cloud, optimize your infrastructure, and leverage cloud-based applications for enhanced productivity.",
    keyServices: [
      "Cloud Migration: Smoothly transition your existing systems to the cloud.",
      "Cloud Infrastructure Management: Manage and optimize your cloud environment for performance and cost-efficiency.",
      "SaaS Solutions: Develop and deploy cloud-based applications tailored to your business needs."
    ],
    benefits: [
      "Scalability: Easily scale your operations as your business grows.",
      "Cost Efficiency: Reduce IT costs with pay-as-you-go cloud services.",
      "Security: Benefit from advanced cloud security protocols."
    ]
  },
  {
    title: "Cybersecurity",
    overview: "In an increasingly digital world, protecting your data and systems from cyber threats is more critical than ever. Our cybersecurity services are designed to safeguard your business from breaches, ensuring your information is secure and your operations are uninterrupted.",
    keyServices: [
      "Threat Detection and Prevention: Stay ahead of cyber threats with real-time monitoring and advanced threat detection.",
      "Data Encryption: Protect sensitive information with robust encryption technologies.",
      "Incident Response: Minimize damage and recovery time with our expert incident response services."
    ],
    benefits: [
      "Enhanced Security: Protect your business against a wide range of cyber threats.",
      "Compliance: Ensure your business meets all regulatory and industry standards.",
      "Peace of Mind: Operate confidently, knowing your data is secure."
    ]
  },
  {
    title: "Data Analytics",
    overview: "Data is one of the most valuable assets your business has. Our data analytics solutions enable you to unlock the full potential of your data, providing you with actionable insights that drive better decision-making and business growth.",
    keyServices: [
      "Business Intelligence: Leverage data to gain insights into your operations and customer behavior.",
      "Advanced Analytics: Use predictive analytics to anticipate trends and stay ahead of the competition.",
      "Data Visualization: Present your data in an easy-to-understand format with custom dashboards and visualizations."
    ],
    benefits: [
      "Informed Decisions: Make data-driven decisions with confidence.",
      "Improved Efficiency: Optimize operations and strategies based on actionable insights.",
      "Competitive Advantage: Stay ahead of the competition with predictive analytics."
    ]
  },
  {
    title: "IT Infrastructure Management",
    overview: "Your IT infrastructure is the backbone of your business operations. We ensure that your systems are always running efficiently, securely, and aligned with your business goals.",
    keyServices: [
      "Network Management: Keep your networks secure and operational with proactive monitoring and maintenance.",
      "Server Management: Ensure your servers are optimized for performance and reliability.",
      "IT Support: Get 24/7 support from our expert team to resolve issues quickly and minimize downtime."
    ],
    benefits: [
      "Operational Efficiency: Maximize uptime and productivity with reliable IT infrastructure.",
      "Cost Savings: Reduce maintenance costs with proactive management.",
      "Scalability: Easily scale your infrastructure as your business grows."
    ]
  },
  {
    title: "Custom Software Development",
    overview: "No two businesses are alike, and neither are their software needs. Our custom software development services provide you with tailored solutions that meet your specific requirements and help you achieve your business objectives.",
    keyServices: [
      "Custom Applications: Develop software solutions that are perfectly aligned with your business processes.",
      "System Integration: Ensure seamless integration of new software with your existing systems.",
      "Software Maintenance: Keep your software up-to-date and running smoothly with ongoing support and maintenance."
    ],
    benefits: [
      "Tailored Solutions: Get software that is built specifically for your business needs.",
      "Seamless Integration: Ensure smooth operation with your existing systems.",
      "Ongoing Support: Receive continuous updates and support to keep your software performing at its best."
    ]
  }
];

const Solutions = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const toggleExpand = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <>
      <Container className="solutions-hero-section">
        <h1 className="solutions-hero-title animated">Solutions</h1>
        <p className="solutions-hero-description">
          At Link Kiwi, we are committed to delivering innovative and reliable IT solutions that empower businesses to achieve their goals in the ever-evolving digital landscape. Our offerings are designed to address a wide range of business needs, from cloud computing to cybersecurity, ensuring your company remains competitive and secure.
        </p>
      </Container>

      <Container className="solutions-container">
        <Row>
          {solutionsData.map((solution, index) => (
            <Col md={6} lg={4} key={index} className="solution-col">
              <Card className="solution-card">
                <Card.Body>
                  <Card.Title className="solution-title">{solution.title}</Card.Title>
                  <Card.Text className="solution-overview">
                    {expandedCard === index
                      ? solution.overview
                      : `${solution.overview.substring(0, 150)}...`
                    }
                  </Card.Text>
                  {solution.keyServices.length > 0 && (
                    <>
                      <h5 className="solution-section-title">Key Services:</h5>
                      <ul className="solution-services">
                        {solution.keyServices.map((service, i) => (
                          <li key={i}>{service}</li>
                        ))}
                      </ul>
                    </>
                  )}
                  {solution.benefits.length > 0 && (
                    <>
                      <h5 className="solution-section-title">Benefits:</h5>
                      <ul className="solution-benefits">
                        {solution.benefits.map((benefit, i) => (
                          <li key={i}>{benefit}</li>
                        ))}
                      </ul>
                    </>
                  )}
                  <Button variant="link" onClick={() => toggleExpand(index)}>
                    {expandedCard === index ? 'Read Less' : 'Read More'}
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <Footer />
    </>
  );
};

export default Solutions;
