import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { App } from './App';
// import { Counter } from './counter/components/Counter';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    {/* <Counter /> */}
  </StrictMode>
);
