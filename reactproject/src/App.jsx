import { useState } from 'react'
import './App.css'
import Register from './pages/Register/Register'
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { Outlet } from 'react-router-dom';




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <main><Outlet/></main>
      <Footer/>
    </>
  )
}

export default App





