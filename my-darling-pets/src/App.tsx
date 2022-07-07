import { BrowserRouter } from 'react-router-dom';
import { Router } from './Router';
import { GlobalStyle } from './styles/global';
import './styles/global.ts';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Router />
    </BrowserRouter>
  );
}

export default App;
