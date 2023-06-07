import { useForm } from "react-hook-form";
import "./Register.css";

import React from "react";

//1º) Crear el html de lo que será la estructura del register para darle un poco de forma
//2º) Importar la libreria Hook-form para poder gestionar bien los formularios
//3º)

const Register = () => {
  const { register, handleSubmit } = useForm; //handleSubmit nos permite controlar el formulario mediante funciones, creo

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
            autocomplete="false"
            {...register("name", { required: true })}
          />

          <label htmlFor="custom-input">email:</label>
          <input
            type="text"
            className="inputUser"
            name="email"
            id="email"
            autocomplete="false"
            {...register("email", { required: true })}
          />

          <label htmlFor="custom-input">Password:</label>
          <input
            type="text"
            className="inputUser"
            name="password"
            id="password"
            autocomplete="false"
            {...register("password", { required: true })}
          />
        </div>
      </form>
    </div>
  );
};

export default Register;
