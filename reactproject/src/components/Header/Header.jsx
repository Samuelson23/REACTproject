import "./Header.css"
import {NavLink} from "react-router-dom"

import React from 'react'

const Header = () => {
  return (
    <header>

      <div className="logo-container">

        <img
            src="https://res.cloudinary.com/dw9b8eqmc/image/upload/v1686179496/proyectoREACT/hotellogo_qcrsyu.png"
            alt="logo"
            className="logo"
        />

        <h1 className="hotel-title">HOTEL CASTEFA</h1>

      </div>

      <nav className="NavIcons">

    <NavLink to="/dashboard">
        <img
          className="nav-img"
          src="https://res.cloudinary.com/dw9b8eqmc/image/upload/v1686179869/proyectoREACT/smart-home_vsyo0i.png"
          alt="Home"
        />
    </NavLink>

    <NavLink to="/Events">
        <img
          className="nav-img"
          src="https://res.cloudinary.com/dw9b8eqmc/image/upload/v1686180327/proyectoREACT/calendar-check_rgbc42.png"
          alt="Events"
        />
    </NavLink>

    <NavLink to="/Profile">
        <img
          className="nav-img"
          src="https://res.cloudinary.com/dw9b8eqmc/image/upload/v1686180319/proyectoREACT/user_hnxorp.png"
          alt="Profile"
        />
    </NavLink>  

    <NavLink to="/Logout">
        <img
          className="nav-img"
          src="https://res.cloudinary.com/dw9b8eqmc/image/upload/v1686180517/proyectoREACT/logout_mxofcx.png"
          alt="Logout"
        />
    </NavLink>

  </nav>

  <ul className="icons-ul">

    <li>
      <img className="burger-icon" 
      src="https://res.cloudinary.com/dul2s17m2/image/upload/v1686235932/menu_FILL0_wght400_GRAD0_opsz48_kxkmrp.png" 
      alt="burguer-icon"></img>

        <ul className="desplegable">

          <li>

          <NavLink to="/dashboard">
            <p>Home</p>
          </NavLink>

          </li>

          <li>

          <NavLink to="/Events">
            <p>Events</p>
          </NavLink>
            
          </li>

          <li>

          <NavLink to="/Profile">
            <p>Profile</p>
          </NavLink>  
            
          </li>

          <li>

          <NavLink to="/Logout">
            <p className="p-logout">Logout</p>
          </NavLink>
            
          </li>

        </ul>

    </li>

  </ul>

  </header>
  )}

export default Header;