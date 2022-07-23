import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Router } from './Router';
import GlobalStyle from './styles/global';

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
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
