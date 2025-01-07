
import { useState } from 'react'
import './App.css'
import Login from './components/Login'
import SignUp from './components/SignUp'

function App() {
  const [login,setLogin] = useState(false)

  return (
    <>
    {
      login?<Login/>:<SignUp/>
    }
      
    </>
  )
}

export default App
