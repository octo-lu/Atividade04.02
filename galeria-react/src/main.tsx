import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';  // ✅ Importar React Router
import './index.css';
import App from './App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />  {/* ✅ Agora o roteamento fica dentro do App.tsx */}
    </BrowserRouter>
  </StrictMode>
);
