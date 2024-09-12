// src/components/CustomButton.js
import styled from 'styled-components';

// Creating a styled button component
const Button = styled.button`
  background: #3498db;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #2980b9;
  }
`;

// Using the styled component in a functional component
const CustomButton = ({ text, onClick }) => {
  return <Button onClick={onClick}>{text}</Button>;
};

export default CustomButton;
