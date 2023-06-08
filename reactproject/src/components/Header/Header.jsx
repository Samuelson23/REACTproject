import "./Header.css"
import {NavLink} from "react-router-dom"

import React from 'react'

const Header = () => {
  return (
    <div>
      <header>
        <div>
        <img
            src="https://res.cloudinary.com/dw9b8eqmc/image/upload/v1686179496/proyectoREACT/hotellogo_qcrsyu.png"
            alt="logo"
            className="Logo"
          />
        </div>
        <nav className="NavIcons">
  <NavLink to="/dashboard">
    <button> 
    <img
      src="https://res.cloudinary.com/dw9b8eqmc/image/upload/v1686179869/proyectoREACT/smart-home_vsyo0i.png"
      alt="Home"
    />
    </button>
    
  </NavLink>
  <NavLink to="/Events">
    <button>
      <img
        src="https://res.cloudinary.com/dw9b8eqmc/image/upload/v1686180327/proyectoREACT/calendar-check_rgbc42.png"
        alt="Events"
      />
      Events
    </button>
  </NavLink>
  <NavLink to="/Profile">
    <button>
      <img
        src="https://res.cloudinary.com/dw9b8eqmc/image/upload/v1686180319/proyectoREACT/user_hnxorp.png"
        alt="Profile"
      />
      Perfil
    </button>
  </NavLink>
  <NavLink to="/Logout">
    <button>
      <img
        src="https://res.cloudinary.com/dw9b8eqmc/image/upload/v1686180517/proyectoREACT/logout_mxofcx.png"
        alt="Logout"
      />
      Logout
    </button>
  </NavLink>
</nav>
    </header>
      
    </div>
  )
}

export default Header;