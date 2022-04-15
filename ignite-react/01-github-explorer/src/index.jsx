import { createRoot } from 'react-dom/client';
import { App } from './App';

// Create a root.
const root = createRoot(document.getElementById('root'));

// Initial render
root.render(<App />);

// Forma antiga
// render(<App />, document.getElementById('root'));