import styled from "styled-components";

interface ButtonProps {
  color: 'darkGreen' | 'red' | 'transparent'
}

export const Container = styled.button<ButtonProps>`
  background-color: ${(props) => props.theme.colors[props.color]};
  color: ${props => props.color === 'transparent' ? props.theme.colors.red : '#eee'};
  font-size: 1.625rem;
  font-weight: 400;
  width: 120px;
  height: 60px;
  border: none;
  border-radius: 2rem;
`;