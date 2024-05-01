import React from "react"
import logo from "../../Assets/LOGO.png"
import '../../Style/main.css'
import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
      <nav className='navbar'> 
        <NavLink to = "/"><img src={logo} alt='Kasa' /> </NavLink>
          <ul className='menu'>
            <NavLink to = "/" className={({isActive})=> isActive? "selected":""}><li>Accueil</li></NavLink>
            <NavLink to = "/About" className={({isActive})=> isActive? "selected":""}><li>A Propos </li></NavLink>

        </ul>
      </nav>
    )

  }
  
  export default Navbar