import React from 'react'
import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import CardDetail from './Pages/CardDetail';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/:id" element={<Home />} />
          <Route path="" element={<Home />} />
          <Route path="/anime/:id" element={<CardDetail/>} />
          {/* <Route path="/search" element={<SearchPage />} /> */}
        </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
