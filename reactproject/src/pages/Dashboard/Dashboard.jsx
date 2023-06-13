import React from 'react'
import "./Dashboard.css"

const Dashboard = () => {
  return (
    <>
    <div className="dashboard-page">
      <h1>Bienvenidos a nuestro Hotel</h1>
      
      <div className="div-container">
        <div className="divDash">
       
          <img src="https://res.cloudinary.com/dw9b8eqmc/image/upload/v1686583469/proyectoREACT/lobby--v9739559_um8paa.jpg" alt="Imagen 1" />
          <p>Nos complace recibirte en nuestro acogedor y lujoso hotel,
 ubicado en uno de los destinos más pintorescos de la costa catalana.
  Ya sea que estés buscando unas relajantes vacaciones junto al mar, 
  una escapada romántica o un viaje de negocios, hemos diseñado cada detalle 
  para asegurarnos de que tu estadía sea excepcional.</p>
        </div>
        <div className="divDash">
          <img src="https://res.cloudinary.com/dw9b8eqmc/image/upload/v1686583559/proyectoREACT/ciudad-de-castelldefels_xoybne.jpg" alt="Imagen 2" />
          <p>Nuestro hotel se encuentra estratégicamente situado, a pocos pasos de las doradas playas de Castelldefels 
    y rodeado de la impresionante belleza natural del Parque Natural del Garraf. Podrás disfrutar de días soleados
     en la playa, explorar pintorescos senderos o deleitarte con la gastronomía mediterránea en los restaurantes cercanos.</p>
        </div>
        <div className="divDash">
          <img src="https://res.cloudinary.com/dw9b8eqmc/image/upload/v1686304336/proyectoREACT/more-tuchi-muzhchina-sup_udibhb.jpg" alt="Imagen 3" />
          <p>Al adentrarte en nuestras instalaciones, serás recibido por nuestro amable y profesional equipo, cuyo principal objetivo es brindarte
       una atención personalizada y asegurarse de que tu estancia sea inolvidable. Nuestras habitaciones están elegantemente decoradas y equipadas con todas las comodidades modernas que necesitas para tu confort.</p>
        </div>
      </div>
    </div>
    </>
  );
}

export default Dashboard


