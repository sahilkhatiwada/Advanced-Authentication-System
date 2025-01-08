import React, { useState } from 'react'

const Reset = () => {
  const [password,setPassword] = useState("")
  const [repassword,setRepassword] = useState("")
  return (
    <>
      <section className="w-full h-screen box-border bg-slate-100 flex flex-col items-center justify-center">
        <h1 className="text-center text-4xl font-bold mt-8">
          Advance Auth System
        </h1>

        <div className="max-w-xl w-[476px] p-8 border h-auto m-auto bg-white rounded-xl shadow-xl">
          <div>
            <h3 className="text-3xl font-bold mb-8">Create a new password</h3>
          </div>

          <form className="flex flex-col gap-7" method="POST">
            <div className="flex flex-col">
              <label htmlFor="password" className="mb-2 font-semibold">
                New Password
              </label>
              <input
                type="password"
                id="password"
                autoComplete="off"
                placeholder="enter new password"
                className="border-2 h-12 ps-2 rounded-md text-lg"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="Confirm-password" className="mb-2 font-semibold">
                Confirm new Password
              </label>
              <input
                type="password"
                id="Confirm-password"
                autoComplete="off"
                placeholder="Confirm new password"
                className="border-2 h-12 ps-2 rounded-md text-lg"
                onChange={(e) => setRepassword(e.target.value)}
                required
              />
            </div>
            <div>
              <button
                className="w-full h-12 rounded-lg bg-slate-800 text-white font-semibold hover:bg-slate-900"
                type="submit"
              >
                Change Password
              </button>
            </div>

            
          </form>
        </div>
      </section>
    </>
  )
}

export default Reset