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
import Home from './pages/Home/Home.jsx'
import { AuthContextProvider } from './context/AuthContext.jsx'
import CheckCode from './pages/CheckCode/CheckCode.jsx'
import AllEvents from './components/AllEvents/AllEvents.jsx'
import EventById from './components/EventById/EventById.jsx'




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <BrowserRouter basename='/'>

      <AuthContextProvider>
        <Routes>

        <Route path='/' element={<App />}>
          <Route index element={<Home/>} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/events" element={<Events />}>
            <Route index element={<AllEvents/>}/>
            <Route path="/events/:id" element={<EventById/>}/>
            

          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register/>}/>
          <Route path="/checkCode" element={<CheckCode/>} />
          <Route path="/resendCode" />
          <Route path="/forgotPassword"/>
          <Route path="/dashboard" element ={<Dashboard/>}/>
        </Route>

      </Routes>
      </AuthContextProvider>
      

    </BrowserRouter>

  </React.StrictMode>,
)





