import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GlobalStyles } from '../styles/GlobalStyles.js'
import App from '../pages/App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyles />
    <App />
  </StrictMode>,
)
