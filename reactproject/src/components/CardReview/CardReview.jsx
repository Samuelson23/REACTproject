import React, { useEffect, useRef, useState } from 'react'
import { useAuth } from '../../context/AuthContext'
import { createReview } from '../../services/review.service'
import "./CardReview.css";
import useCreateReviewError from '../../Hooks/useError/useCreateReviewError';

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
        useCreateReviewError(resp)
    },[resp])
  return (
    <figure key={event._id} className="review-container">
                <h2 className="review-title">{event.name}</h2>
                <p>- {event.description}</p>
                <p>- Location: {event.location}</p>
                <div className="button-container-card">
                    <div className='review-textarea'>
                        <p>Review:</p>
                        <textarea className='text-area' cols="30" rows="10" ref={refText}></textarea>
                    </div>
                
                    <div className='review-score'>
                        <input placeholder='Puntuación' type="number" className='input-review' ref={refPuntuacion} />
                        <button className="review-button" onClick={()=>handleReview()}>Create</button>
                    </div>
                
                    
               
                </div>
            </figure>
  )
}

export default CardReview