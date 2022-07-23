import { darken } from "polished";
import styled from "styled-components";

export const Container = styled.input`
  border: none;
  border-radius: 1rem;
  width: 140px;
  height: 60px;
  background-color: ${props => props.theme.colors.gray};
  text-align: center;
  padding: 1rem;
  font-size: 1.625rem;
  font-weight: 400;
  color: ${props => props.theme.colors.background};

  &:focus {
    outline: none;
    border: 2px solid ${props => darken(0.1, props.theme.colors.gray)};
  }
`;