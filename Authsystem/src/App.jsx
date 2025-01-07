import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './components/Login.jsx'
import SignUp from './components/SignUp.jsx'


const App = () => {
  return (
    <Routes>
   
      <Route path='/' element={<Login/>}></Route>
      <Route path='/sign-Up' element={<SignUp/>}></Route>
    </Routes>
  )
}

export default App