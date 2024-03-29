import { useForm } from "react-hook-form";
import "./Register.css";
import React, { useEffect, useState } from "react";
import { registerUser } from "../../services/user.service";
import Uploadfile from "../../components/Uploadfile/Uploadfile";
import { useAuth } from "../../context/AuthContext";
import useUserError from "../../Hooks/useError/useUserError";
import { useNavigate } from "react-router-dom";
import "./Register.css";

//1º) Crear el html de lo que será la estructura del register para darle un poco de forma
//2º) Importar la libreria Hook-form para poder gestionar bien los formularios
//3º) Nos traemos el useAuth (contexto global) para setearle los datos del usuario
//4º) Creamos el formSubmit() que gestionará la informacion de los inputs
//5º) Creamos el Hook que manejará el status de las respuestas (useUserError) para así dar feedback al usuario, o bien del fallo o bien
//    redirigiendolo a la siguiente pagina

const Register = () => {
  const { register, handleSubmit } = useForm(); //handleSubmit nos permite controlar el formulario mediante funciones, creo
  const [resp, setResp] = useState({}) //Estado en el que seteamos la respuesta y hacemos la llamada al servicio con la informacion recogida en los inputs
  const [send, setSend] = useState() //Estado para deshabilitar el boton de registrar hacemos la llamada al servicio
  const {bridgeData} = useAuth() //useAuth() es el contexto global  
  const [registerOk, setRegisterOk] = useState(false)

  const navigate = useNavigate()
  //Creamos la funcion formSubmit que recopila la info de los inputs y le añade la imagen. Junto a handleSubmit nos permite recopilar toda la 
  //informacion que recogemos por los inputs (formData)
  const formSubmit = async (formData) => {
    const inputFile = document.getElementById("file-upload").files;
    console.log(inputFile)
    let customData;

    //Si el input a recibido un archivo, quiere decir que el usuario ha elegido subir una foto de perfil con lo cual actualizamos la data
    //recogida del formulario (formData) y le hacemos un spread operator para añadirle el campo imagen con el valor del input, en caso contrario
    //y que el usuario no haya subido ninguna imagen le enviamos la data recogida del formulario.
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
  }

  //Creamos el useEffect que manejará el status de la respuesta por medio del Hook useUserError cada vez que se envie una respuesta
  useEffect(() => {
    console.log(resp)
    useUserError(resp, setRegisterOk)
    bridgeData("dataUser")  
  
  },[resp,registerOk]);


//Si la respuesta es un 200 quiere decir que se ha registrado correctamente asique navegamos a la pagina checkCode para verificarlo
(registerOk) && navigate("/checkCode")

  //form onSubmit={handleSubmit(formSubmit)}  -> handleSubmit + formSubmit recopilan toda la info recogida en los inputs
  return (
    <div className="divFormulario">
      <h2>Sign UP!</h2>
      <p>Sign for free if you want to see all content</p>
      <form onSubmit={handleSubmit(formSubmit)}> 
        <div className="inputContainer">
          <input
          placeholder="Username"
            htmlFor="custom-input"
            type="text"
            className="inputUser"
            name="name"
            id="name"
            autoComplete="false"
            {...register("name", { required: true })}
          />

          <input
          placeholder="Email"
          htmlFor="custom-input"
            type="email"
            className="inputUser"
            name="email"
            id="email"
            autoComplete="false"
            {...register("email", { required: true })}
          />

          <input
            htmlFor="custom-input"
            type="password"
            placeholder="Password"
            className="inputUser"
            name="password"
            id="password"
            autoComplete="false"
            {...register("password", { required: true })}
          />
          <div className="divInputGender">
              <div className="radio-container">
              <label htmlFor="hombre" className="label-radio">
                Hombre
              </label>
              <input
                type="radio"
                name="sexo"
                id="hombre"
                value="hombre"
                {...register("gender")}
              />
              </div>
              <div className="radio-container">
              <label htmlFor="mujer" className="label-radio">
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
            </div>
            <Uploadfile/>
        </div>
        
        <button className="button" id="button-register-two" type="submit" disabled={send} style={{background: "#49c1a388"}}>REGISTRAR</button>

      </form>
    </div>
  );
};

export default Register;
