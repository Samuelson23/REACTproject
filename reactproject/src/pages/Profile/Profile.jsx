import React, { useEffect, useState } from 'react';
import './profile.css';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useAuth } from '../../context/AuthContext';
import { updateUser } from '../../services/user.service';
import useUpdateError from '../../Hooks/useError/useUpdateError';

const Profile = () => {
  const navigate=useNavigate()
  const {register, handleSubmit} = useForm()
  const [send, setSend] = useState(false)
  const [resp, setResp] = useState()
  const [updateOk, setUpdateOk] = useState()
  const {user} = useAuth()
  
  const customData = {
    name:"",
    gender:"",
    image:"",
    email:"",
  }


  const formSubmit = async (formData) => {
    console.log(formData)
    console.log("user",user)
    setSend(true)
    setResp(await updateUser(formData))
    setSend(false)
  }

  useEffect(()=>{
    useUpdateError(resp, setUpdateOk)
  },[resp])
 


  return (
    <div className='profile-container'>
      
      <h2>Perfil</h2>
      <form onSubmit={handleSubmit(formSubmit)}>
      <div className="profile-details">

        <div className="profile-field">
            <label>Username:
                <input
                    className="input_user"
                    type="text"
                    id="inputUser"
                    name="user"
                    autoComplete="false"
                    {...register("name", { required: true })}
                /></label>
        </div>
        
        <div className="profile-field">
            <label>Email
                <input
                    className="input_user"
                    type="email"
                    id="inputEmail"
                    name="email"
                    autoComplete="false"
                    {...register("email", { required: true })}
                /></label>
        </div>

        <div className="profile-field">
            <label>Hombre
                <input
                    className="input_user"
                    type="radio"
                    id="inputGender"
                    value="hombre"
                    name="gender"
                    autoComplete="false"
                    {...register("gender", { required: true })}
                /></label>
                <label>Mujer
                <input
                    className="input_user"
                    type="radio"
                    id="inputGender"
                    value="mujer"
                    name="gender"
                    autoComplete="false"
                    {...register("gender", { required: true })}
                /></label>
        </div>

        <button type="submit" disabled={send}>UPDATE</button>

        <div className="change-password">
          <p>¿Quieres cambiar la contraseña?</p>
          <button onClick={()=>navigate("/changePassword")}>Cambiar Contraseña</button>
        </div>
    </div>
    </form>
    </div>
  );
};

export default Profile;
