import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/Header';
import Slider from './components/Slider';
import Footer from './components/Footer';
import TextBlock from './components/TextBlock';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Slider />
    <TextBlock />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);
