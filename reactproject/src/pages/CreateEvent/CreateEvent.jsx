import React, { useEffect, useRef, useState } from 'react'
import "./CreateEvent.css"
import { useAuth } from '../../context/AuthContext'
import { useForm } from 'react-hook-form'
import { createEvent } from '../../services/event.service'
import useCreateEventError from '../../Hooks/useError/useCreateEventError'

const CreateEvent = () => {
    const {user, allUser} = useAuth()
    const [send, setSend] = useState(false)
    const [resp, setResp] = useState()
    const {register, handleSubmit} = useForm()

    const formSubmit = async (formData) => {
        
        const customData = {...formData, email:user.email }
        setSend(true)
        setResp(await createEvent(customData))
        setSend(false)   
    }

    useEffect(()=>{
        useCreateEventError(resp)
    },[resp])
    



  return (
    <div className="divCreateEvent">
        <h1>CREATE EVENT</h1>
        <div className="createEvent-container">
            <form onSubmit={handleSubmit(formSubmit)}>
            <label className="labelCreateEvent">Nombre:
                <input
                 type="text" 
                 name="name" 
                 id="name" 
                 {...register("evName")}
                 />
            </label>
            
            <label className="labelCreateEvent">Localizacion:
                <input 
                type="text" 
                name="location" 
                id="location" 
                {...register("location")}
                />
            </label>
            
            <label className="labelCreateEvent">Fecha:
                <input 
                type="text" 
                name="data" 
                id="date" 
                placeholder="formato: YYYY-MM-DDThh:mm:ss (fecha y hora las separa una T mayuscula)"
                {...register("data")}
                />
            </label>
            
            <label className="labelCreateEvent">Hora:
                <input 
                type="text" 
                name="hour" 
                id="hour" 
                placeholder="formato: "
                {...register("hour")}/>
                
            </label>
            <label className="labelCreateEvent">Descripcion:
                <textarea 
                name="" 
                id="" 
                cols="30" 
                rows="10"
                {...register("description")}></textarea>

            </label>
            
            <button type="submit">CREAR</button>
            </form>


        </div>




    </div>
  )
}

export default CreateEvent