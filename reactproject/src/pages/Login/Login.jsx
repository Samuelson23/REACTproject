import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { loginUser } from '../../services/user.service'
import "./Login.css"

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
      <h2>LOGIN/REGISTER</h2>
      <form className='form-register' onSubmit={handleSubmit(formSubmit)}> 
        <div className="inputContainer">
          
          
          <input
            type="email"
            placeholder='Email'
            className="inputUser"
            name="email"
            id="email"
            autoComplete="false"
            {...register("email", { required: true })}
          />

          <input
            type="password"
            placeholder='Password'
            className="inputUser"
            name="password"
            id="password"
            autoComplete="false"
            {...register("password", { required: true })}
          />
        </div>
        <button  className='button' id='login-button' type="submit" disabled={send} style={{background: "#49c1a388"}}>LOGIN</button>
        <button className="button" id='register-button' onClick={()=>navigate("/register")}>REGISTER</button>
      </form>
    </div>
  )
}

export default Login
