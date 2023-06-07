import React from 'react';
import './App.css';
import Register from './components/Register/Register';
import Footer from './components/Footer/Footer';



function App() {
  return (
    <div className="app">
      <header className="header">
        <div className="title">Hotel Castelldefels</div>
        <div className="buttons">
          <button>Home</button>
          <button>Login</button>
        </div>
      </header>

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

      <Footer />
    </div>
  );
}

export default App;
