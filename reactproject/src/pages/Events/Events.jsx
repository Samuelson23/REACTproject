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
      <h1>EVENTOS</h1>
     {
      resp!=undefined ? (resp?.data?.map((elem)=>(<PrintEvent data={elem} key={elem._id}/>))) : <p>Cargando...</p>

     }
     
    </div>
  )
}

export default Events
