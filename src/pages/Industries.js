import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Footer from '../components/Footer';
import './Industries.css';

const industriesData = [
  {
    title: "Technology",
    description: "In the fast-paced world of technology, staying ahead is key. We provide cutting-edge web development and digital solutions that drive innovation and growth.",
    services: [
      "Web Development: Crafting responsive, high-performance websites that engage users and enhance brand visibility.",
      "App Development: Designing user-friendly mobile applications that deliver seamless experiences across platforms."
    ]
  },
  {
    title: "E-Commerce",
    description: "Our e-commerce solutions are designed to optimize online sales and improve customer engagement. We create platforms that are secure, scalable, and easy to manage.",
    services: [
      "Custom Online Stores: Building bespoke e-commerce websites tailored to your brand and business goals.",
      "Payment Integration: Ensuring seamless and secure transactions with a variety of payment gateway options."
    ]
  },
  {
    title: "Healthcare",
    description: "Link Kiwi is dedicated to enhancing healthcare delivery through technology. Our solutions focus on improving patient care and operational efficiency.",
    services: [
      "Healthcare Portals: Developing secure platforms for patient management and health information exchange.",
      "Telemedicine Solutions: Enabling remote consultations and virtual healthcare services."
    ]
  },
  {
    title: "Education",
    description: "Transforming education through digital solutions, we provide platforms that support learning and collaboration in the digital age.",
    services: [
      "E-Learning Platforms: Creating interactive and engaging online learning environments.",
      "Collaboration Tools: Developing applications that facilitate communication and teamwork among students and educators."
    ]
  },
  {
    title: "Finance",
    description: "Our financial services solutions help organizations streamline operations, ensure compliance, and deliver exceptional customer experiences.",
    services: [
      "Fintech Solutions: Innovating financial services with custom software and applications.",
      "Data Security: Implementing robust security measures to protect sensitive financial data."
    ]
  }
];

const Industries = () => {
  return (
    <>
      <div className="hero-section">
        <Container className="hero-container">
          <h1 className="hero-title">Industries We Serve</h1>
          <p className="hero-description">
            At Link Kiwi, we are proud to offer innovative solutions across a range of industries.
            Our expertise and experience enable us to deliver exceptional results tailored to the unique needs of each sector.
          </p>
        </Container>
      </div>

      <Container className="industries-container">
        <Row>
          {industriesData.map((industry, index) => (
            <Col md={6} lg={4} key={index} className="industry-col">
              <Card className="industry-card">
                <Card.Body>
                  <Card.Title className="industry-title">{industry.title}</Card.Title>
                  <Card.Text className="industry-description">
                    {industry.description}
                  </Card.Text>
                  <ul className="industry-services">
                    {industry.services.map((service, i) => (
                      <li key={i}>{service}</li>
                    ))}
                  </ul>
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

export default Industries;
