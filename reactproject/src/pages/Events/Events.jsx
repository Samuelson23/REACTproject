import React from 'react'
import "./Events.css"

const Events = () => {
  return (
    <div className="event-page">
      <h1>Eventos</h1>
      <div className="event-list">
        <div className="event">
          <h2>FlyBoard en playa de Gavà</h2>
          <p>Disfruta de una experiencia única llena de emoción, desafiando la gravedad mientras vuelas sobre el agua en la zona con las mejores vistas de la costa de Barcelona.

El flyboarding es una novedosa actividad cada vez más de moda basada en una tabla aerodeslizadora que está unida a una manguera conectada a una moto de agua, que nos permite salir por los aires y mantenernos por encima del agua mediante un chorro de agua. ¿Te atreves¿

 A tener en cuenta:

Estar 15 minutos antes para preparar la actividad y hacer una breve explicación.</p>
        </div>
        <div className="event">
          <h2>Paseo en velero por la costa del Garraf</h2>
          <p>Descubre la belleza de la costa del Garraf desde el mar con Paseo en velero saliendo desde Port Ginesta, Castelldefels.

Navegaréis durante 3 horas y podréis disfrutar de las maravillosas vistas de Sitges y de la costa del Garraf desde el mar.</p>
          
        </div>
        <div className="event">
          <h2>Clase de Paddle surf</h2>
          <p>Descubre un deporte que tiene cada vez más adeptos. Aprende a mantener el equilibrio y disfruta del mar y del paisaje de la costa a tu ritmo, sintiendo cómo la mesa se desliza por el agua. Una actividad relajante y divertida, ideal para aquellos que quieran realizar ejercicio en un entorno natural y marino, 
            disfrutando de la agradable sensación de deslizarse sobre las pequeñas olas de la costa catalana.</p>
        </div>
      </div>
    </div>
  );
}

export default Events
