import React, { useEffect, useState } from 'react'

import { PrintEvent } from '../Print/Printeventos'
import "./Events.css"
import { getAllEvents } from '../../services/event.service'
import { useAuth } from '../../context/AuthContext'



const AllEvents = () => {
  const {user} = useAuth()
  const [resp,setResp] = useState()
  const [event, setEvent] =useState()
  const [send, setSend] = useState(false)

  const getEvents = async () => {
    console.log("user events",user)
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
      {
        (user.role=="admin") ? <button className="botonCrearEv">NEW EVENT</button> : null
      }
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

export default AllEvents

