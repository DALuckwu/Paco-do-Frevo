import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  text: string;
  size?: 'small' | 'medium' | 'large';
}

const StyledButton = styled.button<ButtonProps>`
  border-radius: 10px;
  background-color: #27962D;
  color: white;
  font-family: Arial, sans-serif;
  font-size: ${(props) => {
    switch (props.size) {
      case 'small':
        return '30px';
      case 'medium':
        return '40px';
      case 'large':
        return '50px';
      default:
        return '40px'; // Tamanho padrão
    }
  }};

  @media (max-width: 600px) {
    font-size: 30px; // Tamanho para telas pequenas
  }
`;

const Button: React.FC<ButtonProps> = ({ text, size }) => {
  return <StyledButton size={size}>{text}</StyledButton>;
};

export default Button;
