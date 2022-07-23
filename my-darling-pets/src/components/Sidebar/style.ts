import { darken } from 'polished';
import styled from 'styled-components';

export const Container = styled.header`
  background: ${props => darken(0.60, props.theme.colors.gray)};
  flex: 0 1 240px;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 240px;
  height: 100vh;
  padding: 0;
  margin: 0;
  color: #fff;

  ul {
    height: 100%;
    width: 100%;
    list-style: none;

    li {
      align-items: center;
      display: flex;
      flex-direction: column;
      margin-bottom: 2rem;
      padding: 1rem;
      font-size: 22px;

      a {
        text-decoration: none;
        color: #FFF;
      }

      &:hover {
        background-color: ${props => props.theme.colors.background};
      }
    }

    li:first-child {
      margin-bottom: 8rem;
    }
  }
`;