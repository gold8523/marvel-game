import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Container from './components/Container';
import Header from './components/Header';
import Slider from './components/Slider';
import Footer from './components/Footer';
import Heading from './components/Heading';
import Text from './components/Text'; 

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Slider />
        <Text element='div'>
          <Container>
            <Heading level={1}>
              Marvel Cards 
            </Heading>
            <Heading level={2}>
              Collect your best five
            </Heading>
          </Container>
        </Text>
        <Text element='p' strong>
        "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
        </Text>
        <Text element='span' italic>
        "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
        </Text>
        <Text element='div' disabled>
        "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
        </Text>
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);
