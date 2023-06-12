import React from 'react';
import './profile.css';

const Profile = () => {
  const user = {
    name: 'Nombre del Usuario',
    email: 'usuario@example.com',
    gender: 'Género del Usuario',
    role: 'Rol del Usuario',
  };

  const handleChangePassword = () => {
    // Lógica para cambiar la contraseña del usuario
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
        <button onClick={handleChangePassword}>Cambiar Contraseña</button>
      </div>
    </div>
    </div>
  );
};

export default Profile;
