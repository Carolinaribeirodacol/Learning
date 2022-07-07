import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --purple: #AB46D2;
    --pink: #FF6FB5;
    --blue: #64DFFA;
    --yellow: #FCF69C;
    --light-red: #FA6464;
    --red: #D85555;
    --dark-red: #A94242;
    --light-green: #64FADF;
    --green: #55D8C1;
    --dark-green: #42A997;
    --background: #303030;
    --gray: #454545;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%; // 15px
    }

    @media (max-width: 720px) {
      font-size: 87.5%; // 14px
    }
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  button {
    font-size: 16px;
  }
  
  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  [disabled] { // atributo disabled
    opacity: 0.6;
    cursor: not-allowed;
  }
`;