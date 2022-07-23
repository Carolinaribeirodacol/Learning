import { darken } from "polished";
import styled from "styled-components";

export const Container = styled.label`
  display: flex;
  cursor: pointer;
  font-size: 22px;

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  .checkmark {
    text-align: center;
    font-weight: 600;
    color: ${props => props.theme.colors.background};
    padding: 10px 20px;
    margin: 0.3rem;
    border-radius: 1rem;
    background-color: ${props => props.theme.colors.gray};
  }

  /* Adicionar uma cor de fundo cinza ao passar o mouse */
  &:hover input ~ .checkmark {
    background-color: ${props => darken(0.05, props.theme.colors.gray)};
  }

  /* Quando o checkbox é clicado, adicionar um fundo verde */
  input:checked ~ .checkmark {
    background-color: ${props => props.theme.colors.darkGreen};
    color: #eee;
  }
`;