import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  overflow: auto;
  justify-content: center;
  
  .content {
    .cards {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      text-align: center;
    }
  }
`;