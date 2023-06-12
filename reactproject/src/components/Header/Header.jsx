import "./Header.css"
import {NavLink} from "react-router-dom"
import React from 'react'
import { useAuth } from "../../context/AuthContext"

const Header = () => {
  const {logout, user} = useAuth()
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

    {(user!=null)&&(<><NavLink to="/Events">
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
    <img
          className="nav-img"
          src="https://res.cloudinary.com/dw9b8eqmc/image/upload/v1686180517/proyectoREACT/logout_mxofcx.png"
          alt="Logout"
          onClick={()=>logout()}
        /></>)}  
    
        
    

  </nav>

  
  </header>
  )}

export default Header;