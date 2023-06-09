import React from 'react'
import { useAuth } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import "./Home.css";

//Creamos la pagina principal HOME, que nos va a verificar si en el contexto global existe algun usuario logeado. 
//Si no existe ningun user, le aparecera un aviso para que se logee o se registre
const Home = () => {
    const {user} = useAuth()
    const navigate = useNavigate()
  return (
    <div className="divHome">
        {(user !== null) 
        ? (
            <>
            <h1>Hola</h1>
            <button className="button" onClick={()=> navigate("dashboard")}>Acceder</button>
            </>
        )
        : (
            <>
            <h2>No estas logeado, por favor logeate</h2>
            <button className="button" onClick={()=> navigate("login")}>LOGIN</button>
            </>
        )}
    </div>
  )
}

export default Home