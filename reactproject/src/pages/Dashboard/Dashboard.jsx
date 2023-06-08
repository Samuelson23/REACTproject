import React from 'react'
import "./Dashboard.css"

const Dashboard = () => {
  return (
    <div className="dashboard-page">
      <h1>Panel de Control</h1>
      <div className="button-container">
        <div className="button">
          <img src="imagen1.png" alt="Imagen 1" />
          <p>Descripción de la imagen 1</p>
        </div>
        <div className="button">
          <img src="imagen2.png" alt="Imagen 2" />
          <p>Descripción de la imagen 2</p>
        </div>
        <div className="button">
          <img src="imagen3.png" alt="Imagen 3" />
          <p>Descripción de la imagen 3</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard
