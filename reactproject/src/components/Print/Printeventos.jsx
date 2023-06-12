import { useEffect, useState } from "react"
import "./Printeventos.css"
import { addToEvent } from "../../services/user.service"
import { useAuth } from "../../context/AuthContext"
import useUpdateUser from "../../Hooks/useUpdateUser"
import { useNavigate } from "react-router-dom"
import useAddEventError from "../../Hooks/useError/useAddEventError"

export const PrintEvent = ({data}) => {
    const navigate = useNavigate()
    const {name, description, hora, location, _id} = data
    const {updateUser} = useUpdateUser()

    const {user} = useAuth()
    const [send, setSend] = useState(false)
    const [resp, setResp] = useState()


    const handleAddtoEvent = async (id) => {
        console.log("user",user)
        setSend(true)
        setResp(await addToEvent({
            email:user.email,
            events:id,
        }))
        setSend(false)
        updateUser(user.id)
    }

    useEffect(()=>{
        useAddEventError(resp)
    },[resp])

    return (


        <div className="card-container">
         {data?.data?.map((element)=>(
            <figure key={element._id} className="event-container">
                <h2 className="event-title-card">{element.name}</h2>
                <p>- {element.description}</p>
                <p>- Location: {element.location}</p>
                <div className="button-container-card">
                
                <button className="events-check-button" onClick={()=>handleAddtoEvent(element._id)}>{(!JSON.stringify(user.events).includes(element._id)) ? "Apuntarse": "Desapuntar"}</button>
                {(JSON.stringify(user.events).includes(element._id)) ? <button className="events-check-button" onClick={()=>navigate(`/events/${element._id}`)}>Crear Review</button> : null}
                </div>
            </figure>

            ))
         }
        
        </div>
    )
}
