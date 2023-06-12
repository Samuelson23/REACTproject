import { useEffect, useState } from "react"
import "./Printeventos.css"
import { addToEvent } from "../../services/user.service"
import { useAuth } from "../../context/AuthContext"
import useUpdateUser from "../../Hooks/useUpdateUser"

export const PrintEvent = ({data}) => {
    
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
        console.log(resp)
    },[resp])
    
    return (
        <>
        {data?.data?.map((element)=>(
        <div key={element._id}>
        <h2>{element.name}</h2>
        <p>{element.description}</p>
        <p>{element.hora}</p>
        <p>{element.location}</p>
        <button onClick={()=>handleAddtoEvent(element._id)}>{(!JSON.stringify(user.events).includes(element._id)) ? "Apuntar": "Desapuntar"}</button>
            {(JSON.stringify(user.events).includes(element._id)) ? <button>Crear Review</button> : null}
        </div>


        ))
        }
        
        </>
    )
}
