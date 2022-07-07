import styled from 'styled-components';

export const Container = styled.header`
  background: var(--gray);
  max-width: 200px;
  height: 100vh;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 200px;
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

      a {
        text-decoration: none;
        color: #FFF;
      }

      &:hover {
        background-color: var(--background);
      }
    }

    li:first-child {
      margin-bottom: 8rem;
    }
  }
`;