import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Navigate, useNavigate } from 'react-router-dom'
import { loginUser } from '../../services/user.service'
import "./Login.css"
import { useAuth } from '../../context/AuthContext'
import useLoginError from '../../Hooks/useError/useLoginError'

const Login = () => {
  const navigate = useNavigate()
  const {register, handleSubmit} = useForm()
  const [send, setSend] = useState(false)
  const [resp, setResp] = useState()
  const [loginOk, setLoginOk] = useState()
  const {userLogin,setUser} = useAuth()

  const formSubmit = async (formData) => {    
      setSend(true)
      setResp(await loginUser(formData, setLoginOk, userLogin))
      setSend(false)
  }

  //Creamos un useEffect que maneje las respuestas del servicio del login. Creamos una funcion useLoginError para manejar el status de
  //cada respuesta y segun el status que tenga redireccionaremos al usuario.
  useEffect(()=>{
    console.log(resp)
    useLoginError(resp,setLoginOk,userLogin)
  },[resp])

  useEffect(()=>{
    setUser(()=> null)
  },[])

  if (loginOk) {
    if (resp.data.user.check == false) {
      return <Navigate to="/checkCode" />;
    } else {
      return <Navigate to="/dashboard" />;
    }
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
        <a href="/forgotPassword" className="anchorPassword">Forgot your Password?</a>
      </form>
    </div>
  )
}

export default Login





