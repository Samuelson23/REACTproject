import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { loginUser } from '../../services/user.service'

const Login = () => {
  const navigate = useNavigate()
  const {register, handleSubmit} = useForm()
  const {send, setSend} = useState()
  const {resp, setResp} = useState()

  const formSubmit = async (formData) => {    
      setSend(true)
      setResp(await loginUser(formData))
      setSend(false)
  }
  return (
    <div className="divFormulario">
      <h2>Sign UP!</h2>
      <p>Sign for free if you want to see all content</p>
      <form onSubmit={handleSubmit(formSubmit)}> 
        <div className="inputContainer">
          <label htmlFor="custom-input">email:</label>
          <input
            type="text"
            className="inputUser"
            name="email"
            id="email"
            autoComplete="false"
            {...register("email", { required: true })}
          />

          <label htmlFor="custom-input">Password:</label>
          <input
            type="text"
            className="inputUser"
            name="password"
            id="password"
            autoComplete="false"
            {...register("password", { required: true })}
          />
        </div>
        
        <button type="submit" disabled={send} style={{background: "#49c1a388"}}>LOGIN</button>
        <button className="button" onClick={()=>navigate("/register")}>REGISTER</button>
      </form>
    </div>
  )
}

export default Login