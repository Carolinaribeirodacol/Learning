import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  
  span {
    margin-bottom: 1.3rem;
    font-size: 1.625rem;
  }

  h1 {
    font-size: 1.625rem;
    text-align: center;
    color: ${props => props.theme.colors.purple};
    margin-top: 2rem;
    text-align: left;
  }

  label {
    margin-bottom: 1.3rem;
  }

  .saved-tasks {
    margin-top: 1.3rem;
    padding: 1rem;
    border: 2px solid ${props => props.theme.colors.gray};
    border-radius: 1rem;
    
    .text-repeat {
      font-size: 1rem;
      width: 100%;
    }
  }
`;