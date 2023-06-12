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
          src="https://res.cloudinary.com/dw9b8eqmc/image/upload/v1686577217/proyectoREACT/casa_fb3gqj.png"
          alt="Home"
        />
    </NavLink>

    {(user!=null)&&(<><NavLink to="/Events">
        <img
          className="nav-img"
          src="https://res.cloudinary.com/dw9b8eqmc/image/upload/v1686577366/proyectoREACT/calendario_a1hlr5.png"
          alt="Events"
        />
    </NavLink>

    <NavLink to="/Profile">
        <img
          className="nav-img"
          src=" https://res.cloudinary.com/dw9b8eqmc/image/upload/v1686576949/proyectoREACT/acceso_qzzxfi.png"
          alt="Profile"
        />
    </NavLink>  
   
    <NavLink to="/Login">
        <img
          className="nav-img"
          src="https://res.cloudinary.com/dw9b8eqmc/image/upload/v1686577846/proyectoREACT/contrasena_dxrkl3.png"
          alt="Profile"
        />
    </NavLink>  
    <img
          className="nav-img"
          src="https://res.cloudinary.com/dw9b8eqmc/image/upload/v1686577959/proyectoREACT/cerrar-sesion_xjj3sd.png"
          alt="Logout"
          onClick={()=>logout()}
        /></>)}  
    
        
    

  </nav>

  
  </header>
  )}

export default Header;