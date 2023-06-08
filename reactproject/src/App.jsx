import { useState } from 'react'
import './App.css'
import Register from './components/Register/Register'
import Footer from './components/Footer/Footer';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>


      <Register/>
      <Footer/>




    </>
  )
}

export default App



