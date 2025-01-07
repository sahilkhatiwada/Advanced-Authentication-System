import React, { useState } from 'react'

const Login = () => {

  const[email,setEmail] = useState("")
  const[password,setPassword] = useState("")
  console.log(email)
  return (
    <>
    <section className='w-full h-screen box-border bg-slate-100 flex flex-col items-center justify-center'>
      <h1 className='text-center text-4xl font-bold mt-8'>Advance Auth system</h1>
      <div className='max-w-xl w-[476px] p-8 border h-auto m-auto bg-white rounded-xl shadow-xl'>
        <div>
          <h3 className='text-3xl font-bold mb-8'>Sign in to your account</h3>
        </div>
        <div className='flex flex-col gap-7'>
          <div className='flex flex-col'>
          <label htmlFor="email" className='mb-2 font-semibold'>Your Email</label>
          <input type="email" id='email' autoComplete='none' placeholder='name@company.com' className='border-2 h-12 ps-2 rounded-md text-lg' onChange={(e)=>setEmail(e.target.value)} required/>
          </div>
          <div className='flex flex-col'>
          <label htmlFor="password" className='mb-1 font-semibold'>Password</label>
          <input type="password" id='password' autoComplete='none' placeholder='password' className='h-12 border-2 ps-2 rounded-md text-lg' onChange={(e)=>setPassword(e.target.value)} required/>
          </div>
          <div className='flex justify-between items-center'>
            <div className='flex items-center'>
            <input type="checkbox" name="" id="remember" className='size-4 mr-2' required/>
            <label htmlFor="remember">Remember me</label>
            </div>
            <div>
              <a href="" className='font-semibold text-indigo-900 hover:underline'>Forget password?</a>
            </div>
          </div>
          <div>
            <button className='w-full h-12 rounded-lg bg-slate-800 text-white font-semibold hover:bg-slate-900'>Sign In</button>
          </div>
          <div>
            <p className='text-gray-500'>Don't have an account yet? <a href="" className='text-black font-semibold'>Sign Up</a></p>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Login