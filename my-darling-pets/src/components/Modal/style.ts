import styled from "styled-components";

export const Content = styled.div`
    .react-modal-content {
      height: max-content;
      width: 100%;
      max-width: 576px;
      background: white;
      padding: 1.6rem;
      position: relative;
      border-radius: 1.125rem;
    }

    .modal-title {
      font-size: 1.625rem;
      text-align: center;
      margin-bottom: 1.8rem;

      strong {
        color: #AB46D2
      }
    }

    .close-modal {
      width: 100%;
      display: flex;
      justify-content: flex-end;
      cursor: pointer;
    }
`;

export const Footer = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 1.8rem;

  button:first-child {
    margin-right: 1rem;
  }
`;