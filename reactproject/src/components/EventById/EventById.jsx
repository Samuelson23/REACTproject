import React, { useEffect, useState } from 'react'
import CardReview from '../CardReview/CardReview'
import { useParams } from 'react-router-dom'
import { getByIdEvent } from '../../services/event.service'

const EventById = () => {
    const {id} = useParams()
    const [resp, setResp] = useState({})
    const [send, setSend] = useState(false)

    const callService = async () => {
        try {
        setSend(true)
        setResp(await getByIdEvent(id))
        setSend(false)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        callService()
        
    },[])

    useEffect(()=>{
        //(resp?.status==200) ? console.log(resp) : console.log("tengo un error")
        
    },[resp])

    if(resp?.status==200){
     return (
        <CardReview event={resp.data}/>   
    )   
    }

    
  
}

export default EventById