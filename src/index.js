import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/Header';
import Slider from './components/Slider';
import Footer from './components/Footer';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Slider />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);
