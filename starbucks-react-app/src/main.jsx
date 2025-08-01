import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';  // Import the App component
import StoreContextProvider from './context/StoreContext';


const root = createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <StoreContextProvider>
      <App />
    </StoreContextProvider>
  </StrictMode>
);
