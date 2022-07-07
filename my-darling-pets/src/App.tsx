import { BrowserRouter } from 'react-router-dom';
import { Header } from './components/Header';
import { Router } from './Router';
import { GlobalStyle } from './styles/global';
import './styles/global.ts';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyle />
    </div>
  );
}

export default App;
