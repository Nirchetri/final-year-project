// src/components/ExampleComponent.js
import React from 'react';
import { useMessages } from '../contexts/MessageContext'; // Import the hook

const ExampleComponent = () => {
  const { tagline, valueProposition } = useMessages(); // Use the hook

  return (
    <div>
      <h1>{tagline}</h1>
      <p>{valueProposition}</p>
    </div>
  );
};

export default ExampleComponent;
