import styled from "styled-components";

interface ButtonProps {
  color: 'darkGreen' | 'red' | 'transparent'
}

export const Container = styled.button<ButtonProps>`
  background-color: ${(props) => props.theme.colors[props.color]};
  color: ${props => props.color === 'transparent' ? props.theme.colors.red : '#eee'};
  margin: auto;
  padding: 1rem;
  font-size: 1.625rem;
  font-weight: 400;
  border: none;
  border-radius: 2rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
`;