import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import './index.css'
//import './App.css'
import App from './App.js'
import { BrowserRouter } from 'react-router-dom'
import GlobalStyles from './Theme/GlobalThemes'
import { ThemeProvider } from 'styled-components'
import theme from './Theme/theme';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme= {theme}>
      <GlobalStyles/>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>  
  </StrictMode>,
);
