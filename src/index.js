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
        <Route path= "/Kasa_2024" element={<Home />} />
        <Route path= "Kasa_2024/Logement/:id" element={<Logement />} />
        <Route path= "/About" element={<About />} />
        <Route path= "*" element={<Error />} />

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)


