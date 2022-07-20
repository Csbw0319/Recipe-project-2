import React from 'react'
import Home from './Home'
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Routes } from "react-router-dom"; 
import Searched from './Searched';

function Pages() {
  return (
    <Router>
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/searched/:search' element={<Searched />} />
    </Routes>
    </Router>
  )
}

export default Pages