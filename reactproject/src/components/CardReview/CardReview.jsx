import React, { useEffect, useRef, useState } from 'react'
import { useAuth } from '../../context/AuthContext'
import { createReview } from '../../services/review.service'
import "./CardReview.css";

const CardReview = ({event}) => {
    const {user} = useAuth()
    const [resp, setResp] = useState()
    const [send, setSend] = useState(false)
    const refPuntuacion = useRef(null)
    const refText = useRef(null)
    

    const handleReview = async () => {
        const customFormData = {
            email:user.email,
            eventId:event._id,
            description:refText.current.value,
            userId:user.id,
            points:refPuntuacion.current.value,
        }
        console.log(refPuntuacion.current.value)
        console.log(refText.current.value)
        setSend(true)
        setResp(await createReview(customFormData))
        setSend(false)
    }

    useEffect(()=>{
        console.log(resp)
    },[resp])
  return (
    <figure key={event._id} className="review-container">
                <h2 className="review-title">{event.name}</h2>
                <p>- {event.description}</p>
                <p>- Location: {event.location}</p>
                <div className="button-container-card">
                <label>Review:
                    <textarea name="" id="" cols="30" rows="10" ref={refText}></textarea>
                </label>
                <label>Puntuacion
                    <input type="number" className='input-review' ref={refPuntuacion} />
                </label>
            
                <button className="review-nutton" onClick={()=>handleReview()}></button>
               
                </div>
            </figure>
  )
}

export default CardReview