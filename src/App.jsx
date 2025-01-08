import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './components/Login.jsx'
import SignUp from './components/SignUp.jsx'
import Forget from './components/Forget.jsx'
import ForgotPass from './components/ForgotPass.jsx'


const App = () => {
  return (
    <Routes>
   
      <Route path='/' element={<Login/>}></Route>
      <Route path='/sign-Up' element={<SignUp/>}></Route>
      <Route path='/forget-password' element={<ForgotPass/>}></Route>
    </Routes>
  )
}

export default App