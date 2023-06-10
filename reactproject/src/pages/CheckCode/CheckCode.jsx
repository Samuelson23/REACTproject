import React, { useEffect, useState } from 'react'
import "./CheckCode.css"
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { checkCode } from '../../services/user.service'

const CheckCode = () => {
  const userLocal = localStorage.getItem("user")
  const navigate = useNavigate()
  const {register, handleSubmit} = useForm()
  const [send, setSend] = useState(false)
  const [resp, setResp] = useState()
  const [codeOk, setCodeOk] = useState(false)

  const formSubmit = async (formData) => {
    if(userLocal == null){
      const customFormData = {
        confirmationCode:parseInt(formData.confirmationCode),
        email:allUser.data.user.email,
      }
      console.log(customFormData)
      setSend(true)
      setResp(await checkCode(customFormData))
      setSend(false)
    }else{
      const parseUser = JSON.parse(userLocal)
      const customFormData = {
        confirmationCode:parseInt(formData.confirmationCode),
        email:parseUser.user.email
      }
      console.log(parseUser.user.email)
      console.log(parseInt(formData.confirmationCode))
      setSend(true)
      setResp(await checkCode(customFormData))
      setSend(false)
    }
  }

  useEffect(()=>{
    console.log(resp)
  },[resp])

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