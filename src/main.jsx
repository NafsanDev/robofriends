import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Hello from './Hello';
import CardList from './CardList.jsx';
import Footer from './Footer.jsx';
import {robots} from './robots'
import 'tachyons';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Hello/>
    <CardList robots={robots}/>
    <Footer/>
  </StrictMode>,
)
