import styled from "styled-components";

export const Container = styled.div`
  margin: 1rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;

  height: auto;
  background-color: ${props => props.theme.colors.darkGreen};
  color: #EEE;
  padding: 1rem;
  border-radius: 1rem;
  width: 260px;
  font-size: 0.6rem;

  .edit {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    cursor: pointer;
  }

  img {
    width: 100px;
    border-radius: 100%;
  }

`;