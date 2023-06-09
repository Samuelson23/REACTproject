import React, { useState } from 'react'
import "./CheckCode.css"
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { checkCode } from '../../services/user.service'

const CheckCode = () => {
    const navigate = useNavigate()
    const {register, handleSubmit} = useForm()
    const [send, setSend] = useState(false)
    const [resp, setResp] = useState()
    const [codeOk, setCodeOk] = useState(false)

    const formSubmit = async (formData) => {    
        setSend(true)
        setResp(await checkCode(formData))
        setSend(false)
    }

  return (
    <div className="divFormulario">
      <h2>REVIEW YOUR EMAIL</h2>
      <p>Write the code below to confirm your email</p>
      <form onSubmit={handleSubmit(formSubmit)}> 
        <div className="inputContainer">
          <label htmlFor="custom-input">Confirmation code:</label>
          <input
            type="text"
            className="inputUser"
            name="confirmationCode"
            id="confirmationCode"
            autoComplete="false"
            {...register("confirmationCode", { required: true })}
          />
        </div>
        
        <button type="submit" disabled={send} style={{background: "#49c1a388"}}>CHECK</button>
        
      </form>
    </div>
  )
}

export default CheckCode