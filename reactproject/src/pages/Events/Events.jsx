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
    <div className="divEvents">
      <h1 className='titleEvent'>EVENTOS</h1>
      <div className="divData">
        <h2>
        {
      resp!=undefined ? (<PrintEvent data={resp} />) : <p>Cargando...</p>

     }  
        </h2>
     
        </div>
    
   
     
      
   
    </div>
  )
}

export default Events

