import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;

  main {
    flex: 1;
    overflow: auto;
    color: #FFF;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
      text-align: center;
      margin-bottom: 18px;
    }

    button {
      background-color: var(--dark-green);
      padding: 0.6rem;
      border: none;
      border-radius: 100vh;
      font-weight: 600;
      color: #FFF;
    }
  }
`;