import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import Profile from './pages/Profile/Profile.jsx'
import Dashboard from './pages/Dashboard/Dashboard.jsx'
import Events from './pages/Events/Events.jsx'
import Login from './pages/Login/Login.jsx'
import Register from './pages/Register/Register.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <BrowserRouter basename='/'>

      <Routes>

        <Route path='/' element={<App />}>
          <Route index element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/events" element={<Events />} />
          <Route path="/login" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/verifyCode" />
          <Route path="/resendCode" />
          <Route path="/forgotPassword"/>
          <Route path="/dashboard"/>
        </Route>

      </Routes>

    </BrowserRouter>

  </React.StrictMode>,
)
