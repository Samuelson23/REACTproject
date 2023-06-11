import React from 'react'
import "./Dashboard.css"

const Dashboard = () => {
  return (
    <>
    <div className="dashboard-page">
      <h1>Panel de Control</h1>
      <div className="button-container">
        <div className="button">
          <img src="https://res.cloudinary.com/dw9b8eqmc/image/upload/v1686304076/proyectoREACT/636e8762616f6.r_d.670-381-7518_lghjtv.png" alt="Imagen 1" />
          <p>Eventos </p>
        </div>
        <div className="button">
          <img src="https://res.cloudinary.com/dw9b8eqmc/image/upload/v1686257608/proyectoREACT/109B_aqg56g.webp" alt="Imagen 2" />
          <p>Perfil</p>
        </div>
        <div className="button">
          <img src="https://res.cloudinary.com/dw9b8eqmc/image/upload/v1686304336/proyectoREACT/more-tuchi-muzhchina-sup_udibhb.jpg" alt="Imagen 3" />
          <p>Login</p>
        </div>
      </div>
    </div>
    </>
  );
}

export default Dashboard