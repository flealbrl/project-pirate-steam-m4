import React from 'react';
import ReactDOM from 'react-dom';
import Footer from './Components/Footer/Footer.js';
import Navbar from './Components/Navbar/Navbar.js';
import Registrar from './Pages/Registrar/Registrar.js';
import Suporte from './Pages/Suporte/Suporte';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Perfil from './Pages/Perfil/Perfil';
import Game from './Pages/Game/Game';
import axios from 'axios';
import Home from '../src/Pages/Home/Home';
import Comunidade from './Pages/Comunidade/Comunidade.js';

axios.defaults.baseURL = 'https://nintendo-shop.herokuapp.com';
axios.defaults.headers.post['Content-Type'] = 'application/json';

ReactDOM.render(
  <React.StrictMode>
    <Navbar/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/perfil" element={<Perfil/>} />
        <Route path="/registrar" element={<Registrar/>} />
        <Route path="/suporte" element={<Suporte/>} />
        <Route path="/comunidade" element={<Comunidade/>} />
        <Route path="/game" element={<Game/>} />
      </Routes>
    </BrowserRouter>
    <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);