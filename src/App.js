import React from 'react';

import './App.css';
import About from './Components/About';
import Footer from './Components/Footer';
import Product from './Components/Product';
import Services from './Components/Services';
import Headers from './Components/Headers';



function App() {
  return (
    <>

   <Headers />
    <About />
    <Services />
    <Product />
    <Footer />
    
    {/* <Card /> */}
    </>
  );
}

export default App;
