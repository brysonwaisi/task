import React from 'react';
import { BrowserRouter as Route, Router, Switch } from 'react-router-dom';

import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Main from './Components/Main/Main'

function App() {
  return (
    <div className="container-fluid mx-0 my-0">
      <Header />
      <Main />
      <Footer />

    </div>
  );
}

export default App;
