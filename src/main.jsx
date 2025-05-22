import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Hello from './Hello';
import Contents from './Contents.jsx';
import Footer from './Footer.jsx';
import 'tachyons';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Hello/>
    <Contents greeting = {'Welcome to Queens World of Developers.'}/>
    <Footer/>
  </StrictMode>,
)
