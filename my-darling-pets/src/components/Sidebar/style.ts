import { darken } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  background: ${props => darken(0.60, props.theme.colors.gray)};
  display: flex;
  min-height: 100vh;
`;

export const Content = styled.header`
  flex: none;
  width: 14rem;
  
  main {
    padding: 1rem;
    overflow: auto;
    flex: 110%;
    min-width: 0;
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
  }
`;