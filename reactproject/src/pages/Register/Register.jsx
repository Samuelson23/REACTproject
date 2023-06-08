import { useForm } from "react-hook-form";
import "./Register.css";
import React, { useEffect, useState } from "react";
import { registerUser } from "../../services/user.service";
import Uploadfile from "../../components/Uploadfile/Uploadfile";
import { useAuth } from "../../context/AuthContext";
import useUserError from "../../Hooks/useError/useUserError";
import { useNavigate } from "react-router-dom";


//1º) Crear el html de lo que será la estructura del register para darle un poco de forma
//2º) Importar la libreria Hook-form para poder gestionar bien los formularios
//3º)

const Register = () => {
  const { register, handleSubmit } = useForm(); //handleSubmit nos permite controlar el formulario mediante funciones, creo
  const [resp, setResp] = useState({}) //Estado en el que seteamos la respuesta y hacemos la llamada al servicio con la informacion recogida en los inputs
  const [send, setSend] = useState() //Estado para deshabilitar el boton de registrar hacemos la llamada al servicio
  const {user, setUser} = useAuth()
  const {registerOK, setRegisterOK} = useState(false)
  const navigate = useNavigate()
  //Creamos la funcion formSubmit que recopila la info de los inputs y le añade la imagen. Junto a handleSubmit nos permite recopilar toda la 
  //informacion que recogemos por los inputs (formData)
  const formSubmit = async (formData) => {
    const inputFile = document.getElementById("file-upload").files;
    console.log(inputFile)
    let customData;

    if(inputFile.length!==0){
      customData = {...formData, imagen:inputFile[0]}
      setSend(true)
      setResp(await registerUser(customData))
      setSend(false)
    }else{
      setSend(true)
      setResp(await registerUser(formData))
      setSend(false)
    }
   /*  console.log(formData)
    setSend(true)
    setResp(await registerUser(formData))
    setSend(false) */

  }



 (resp.status==200) && navigate("/checkCode")
  //form onSubmit={handleSubmit(formSubmit)}  -> handleSubmit + formSubmit recopilan toda la info recogida en los inputs
  return (
    <div className="divFormulario">
      <h2>Sign UP!</h2>
      <p>Sign for free if you want to see all content</p>
      <form onSubmit={handleSubmit(formSubmit)}> 
        <div className="inputContainer">
          <label htmlFor="custom-input">Username:</label>
          <input
            type="text"
            className="inputUser"
            name="name"
            id="name"
            autoComplete="false"
            {...register("name", { required: true })}
          />

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
          <div className="divInputGenero">
              <label htmlFor="hombre" className="label-radio hombre">
                Hombre
              </label>
              <input
                type="radio"
                name="sexo"
                id="hombre"
                value="hombre"
                {...register("gender")}
              />
              <label htmlFor="mujer" className="label-radio mujer">
                Mujer
              </label>
              <input
                type="radio"
                name="sexo"
                id="mujer"
                value="mujer"
                {...register("gender")}
              />
            </div>
            <Uploadfile/>
        </div>
        
        <button type="submit" disabled={send} style={{background: "#49c1a388"}}>REGISTRAR</button>
      </form>
    </div>
  );
};

export default Register;
