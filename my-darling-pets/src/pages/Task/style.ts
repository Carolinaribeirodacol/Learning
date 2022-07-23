import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100%;
  
  main {
    .cards {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center
    }

    /* flex: 1;
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
      background-color: ${props => props.theme.colors.darkGreen};
      padding: 0.6rem;
      border: none;
      border-radius: 100vh;
      font-weight: 600;
      color: #FFF;
    } */
  }
`;