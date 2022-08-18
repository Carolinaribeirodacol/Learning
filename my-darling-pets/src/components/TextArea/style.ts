import { darken } from "polished";
import styled from "styled-components";

export const Form = styled.form`
  textarea {
    width: 100%;
    min-height: 200px;
    border: 2px solid ${props => props.theme.colors.gray};
    background-color: ${props => props.theme.colors.gray};
    border-radius: 1rem;
    padding: 1rem;

    &:focus {
      outline: none;
      border: 2px solid ${props => darken(0.1, props.theme.colors.gray)};
    }
  }
`;