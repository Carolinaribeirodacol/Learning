import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  overflow: auto;
  justify-content: center;

  .content {
    .table {
      text-align: center;
      
      table {
        border-collapse: collapse;
        border-radius: 1em;
        overflow: hidden;

        thead {
          background: ${props => props.theme.colors.purple};
          color: #FFF;
          
          th {
            padding: 1rem;
          }
        }

        tbody {
          background-color: #FFF;
          color: ${props => props.theme.colors.background};

          td {
            padding: 1rem;
          }
        }
      }
    }
  }

  /* .new-pet {
    width: 100%;
    margin: 1rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    border-radius: 2rem;
    color: #FFF;

    h1 {
      text-align: center;
      font-size: 1.625rem;
      margin: 2rem;
      color: #FFF;
    }
  } */
`;