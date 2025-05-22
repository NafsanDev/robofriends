import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Hello from './Hello';
import Card from './Card.jsx';
import Footer from './Footer.jsx';
import {robots} from './robots'
import 'tachyons';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Hello/>
    <Card id = {robots[0].id} name = {robots[0].name} email= {robots[0].email}/>
    <Footer/>
  </StrictMode>,
)
