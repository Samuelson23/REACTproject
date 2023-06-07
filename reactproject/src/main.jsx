import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import Profile from './components/Profile/Profile.jsx'
import Dashboard from './components/Dashboard/Dashboard.jsx'
import Events from './components/Events/Events.jsx'
import Login from './components/Login/Login.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <BrowserRouter basename='/'>

      <Routes>

        <Route path='/' element={<App />}>
          <Route index element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/events" element={<Events />} />
          <Route path="/login" element={<Login />} />
        </Route>

      </Routes>

    </BrowserRouter>

  </React.StrictMode>,
)
