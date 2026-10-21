import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';


// <StrictMode> componente invisível responsável por alertar praticas obsoletas e problemas
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App/>
  </StrictMode>,
);
