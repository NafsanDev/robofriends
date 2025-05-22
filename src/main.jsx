import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Hello from './Hello'
import 'tachyons';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Hello greeting = {'Hi React Beginner!'} family = {'Welcome to Queens World of Developers.'} />
    <App />
  </StrictMode>,
)
