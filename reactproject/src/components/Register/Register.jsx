import { useState } from 'react';
import './Register.css';

const Register = () => {
  return (
    <div>
      <div className="header">
        <div className="title">Hotel Castelldefels</div>
        <div className="buttons">
          <button>Home</button>
          <button>Login</button>
        </div>
      </div>
      <div className="content">
        <div className="register-text">Register</div>
        <div className="form">
          <input type="text" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input type="text" placeholder="Username" />
        </div>
        <img src="ruta_de_la_imagen.jpg" alt="Imagen" />
        <div className="buttons">
          <button>Register</button>
          <button>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Register;

