import React from 'react';
import './profile.css';
import ChangePassword from '../ChangePassword/ChangePassword';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate=useNavigate()
  const user = {
    name: 'Nombre del Usuario',
    email: 'usuario@example.com',
    gender: 'Género del Usuario',
    role: 'Rol del Usuario',
  };


  return (
    <div className='profile-container'>
      
      <h2>Perfil</h2>

      <div className="profile-details">

        <div className="profile-field">
            <label>Nombre:</label>
            <input type="text" placeholder='Username'  />
        </div>
        
        <div className="profile-field">
            <label>Correo:</label>
            <input type="email" placeholder='Email' />
        </div>

        <div className="profile-field">
            <label>Género:</label>
            <input type="text" placeholder='Género' />
        </div>

      <div className="change-password">
        <p>¿Quieres cambiar la contraseña?</p>
        <button onClick={()=>navigate("/changePassword")}>Cambiar Contraseña</button>
      </div>
    </div>
    </div>
  );
};

export default Profile;
