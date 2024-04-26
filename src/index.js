import React from 'react';
import './Style/main.css'
import {BrowserRouter, Routes,Route } from 'react-router-dom'
import createRoot from "react-dom/client"
import Home from './Pages/Home'
import Logement from './Pages/Logement'
import About from './Pages/About'
import Error from './Pages/Error'



const root = createRoot.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path= "/Kasa" element={<Home />} />
        <Route path= "Kasa/Logement" element={<Logement />} />
        <Route path= "Kasa/About" element={<About />} />
        <Route path= "*" element={<Error />} />

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)


