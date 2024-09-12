// src/components/HeroSection.js
import React from 'react';
import { useMessages } from '../MessageContext';
import './HeroSection.css'; // Custom styling

function HeroSection() {
  const { tagline } = useMessages();
  return (
    <section className="hero">
      <h1 className="tagline">{tagline}</h1>
      <button className="cta-button">Get Started</button>
    </section>
  );
}

export default HeroSection;
