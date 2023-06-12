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
          src="https://res.cloudinary.com/dul2s17m2/image/upload/v1686579904/home_FILL0_wght400_GRAD0_opsz48_chtuhu.png"
          alt="Home"
        />
    </NavLink>

    {(user!=null)&&(<><NavLink to="/Events">
        <img
          className="nav-img"
          src="https://res.cloudinary.com/dul2s17m2/image/upload/v1686580250/calendar_month_FILL0_wght400_GRAD0_opsz48_cvajid.png"
          alt="Events"
        />
    </NavLink>

    <NavLink to="/Profile">
        <img
          className="nav-img"
          src="https://res.cloudinary.com/dul2s17m2/image/upload/v1686579992/person_FILL0_wght400_GRAD0_opsz48_1_bclknm.png"
          alt="Profile"
        />
    </NavLink>  
   
    <NavLink to="/Login">
        <img
          className="nav-img"
          src="https://res.cloudinary.com/dul2s17m2/image/upload/v1686580300/login_FILL0_wght400_GRAD0_opsz48_1_pnrydx.png"
          alt="Login"
        />
    </NavLink>  
    <NavLink>
    <img
          className="nav-img"
          src="https://res.cloudinary.com/dul2s17m2/image/upload/v1686580253/logout_FILL0_wght400_GRAD0_opsz48_pj71cf.png"
          alt="Logout"
          onClick={()=>logout()} 
        />
        </NavLink></>)}  
    
        
    

  </nav>

  
  </header>
  )}

export default Header;