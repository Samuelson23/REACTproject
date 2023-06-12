import React, { useEffect, useState } from 'react'
import "./Events.css"
import { getAllEvents } from '../../services/event.service'
import { PrintEvent } from '../../components/Print/Printeventos'


const Events = () => {
  const [resp,setResp] = useState()
  const [event, setEvent] =useState()
  const [send, setSend] = useState(false)

  const getEvents = async () => {
    setSend(true)
    setResp(await getAllEvents())
    setSend(false)
  }

  
  console.log("resp", resp)

  useEffect(()=>{
    console.log("me monto")
    console.log(resp)
    getEvents()
  },[])


  return(
    <div className="events-container">
      <h2 className='titleEvent'>EVENTOS</h2>
      <div className="divData">
        <div className='events-title'>
        {
      resp!=undefined ? (<PrintEvent data={resp} />) : <p>Cargando...</p>

     }  
        </div>
     
        </div>
    
   
     
      
   
    </div>
  )
}

export default Events

