import styled from 'styled-components';

/**
 * Componente de botão estilizado aqui
 * @component
 */
const StyledButton = styled.button`
  background-color: #27962D;
  color: #ffffff;
  border: none;
  border-radius: 10px;
  font-family: 'Regular';
  font-size: 40px;

  /**
   * Estilos de hover para o botão.
   * @type {object}
   */
  &:hover {
    cursor: pointer;
  }
`;

export default StyledButton;
