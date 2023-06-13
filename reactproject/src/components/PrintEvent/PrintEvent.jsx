import { getAllEvents } from "../../services/event.service"
import { PrintEvento } from "../Print/Printeventos"



export const PrintEvent = async (res) => {
    const eventos = await getAllEvents()
    console.log("printevent")
    console.log("event:", res)
    
    const events = eventos.data
    console.log(events)

    return (
        <>
        {events.map((elem)=>(
            
            <PrintEvento key={elem._id} data={elem}/>
        ))


        }
        </>

    )
    /* return(
        <>
            {events.map((event)=>(
                
                <PrintEvento key={event._id} data={event}/>
            ))}
        </>
    ) */
}


