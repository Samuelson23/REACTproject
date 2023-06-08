import { useForm } from "react-hook-form";
import "./Register.css";
import React, { useEffect, useState } from "react";
import { registerUser } from "../../services/user.service";

//1º) Crear el html de lo que será la estructura del register para darle un poco de forma
//2º) Importar la libreria Hook-form para poder gestionar bien los formularios
//3º)

const Register = () => {
  const { register, handleSubmit } = useForm(); //handleSubmit nos permite controlar el formulario mediante funciones, creo
  const [resp, setResp] = useState({})
  const [send, setSend] = useState()

  const formSubmit = async (formData) => {
    console.log(formData)
    setResp(await registerUser(formData))
  }


  useEffect(()=>{
    console.log(resp)
  },[resp])


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
            <input
                type="file"
                name="image"
                id="image"
               
                {...register("imagen")}
              />
        </div>
        
        <button type="submit" disabled={send} style={{background: "#49c1a388"}}>REGISTRAR</button>
      </form>
    </div>
  );
};

export default Register;
