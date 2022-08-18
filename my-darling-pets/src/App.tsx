import { BrowserRouter } from 'react-router-dom';
import { Sidebar } from './components/Sidebar';
import { client } from './lib/apollo';
import { ApolloProvider } from "@apollo/client";
import { Router } from './Router';
import { Container } from './style';
import GlobalStyle from './styles/global';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    purple: '#AB46D2',
    pink: '#FF6FB5',
    blue: '#64DFFA',
    yellow: '#FCF69C',
    red: '#D85555',
    green: '#55D8C1',
    darkGreen: '#42A997',
    gray: '#D9D9D9',
    background: '#303030',
    transparent: 'transparent',
  }
};

function App() {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <BrowserRouter>
          <Container>
            <Sidebar />
            <Router />
          </Container>
        </BrowserRouter>
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
