import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Footer from './Components/Footer/Footer'
import Main from './Components/Main/Main'
import Contact from './Components/page/Contact'
import Error from './Components/error/Error'

function App() {
  return(
  <>
  <Router>
  <Routes>
    <Route exact path='/' element={<Main />} />
    <Route path='/contact' element={<Contact />} /> 
    <Route path='*' element={<Error />} />
  </Routes>
  <Footer />
  </Router>
  
  </>
  ) 
}

export default App;
