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
        <div className="profile-image">
          {/* Aquí puedes incluir la foto del usuario */}
        </div>
        <div className="profile-info">
          <div className="profile-field">
            <label>Nombre:</label>
            <input type="text" value={user.name} readOnly />
          </div>
          <div className="profile-field">
            <label>Correo:</label>
            <input type="email" value={user.email} readOnly />
          </div>
          <div className="profile-field">
            <label>Género:</label>
            <input type="text" value={user.gender} readOnly />
          </div>
          <div className="profile-field">
            <label>Rol:</label>
            <input type="text" value={user.role} readOnly />
          </div>
        </div>
      </div>
      <div className="profile-field">
        <label>Eventos:</label>
        <input type="text" readOnly />
      </div>
      <div className="profile-field">
        <label>Reviews:</label>
        <input type="text" readOnly />
      </div>
      <div className="change-password">
        <p>¿Quieres cambiar la contraseña?</p>
        <button onClick={handleChangePassword}>Cambiar Contraseña</button>
      </div>
    </div>
  );
};

export default Profile;
