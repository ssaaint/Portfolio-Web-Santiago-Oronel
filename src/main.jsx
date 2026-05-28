import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Analytics } from "@vercel/analytics/react"
import App from './App.jsx';
import { I18nProvider } from './hooks/useI18n.jsx';
import { ThemeProvider } from './hooks/useTheme.jsx';
import './styles/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <I18nProvider>
          <App />
        </I18nProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
);

