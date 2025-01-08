import React, { useState } from 'react'

const Otp = ({step,setStep}) => {
  const [OTP,setOTP] = useState("")
  return (
   <>
      <section className="w-full h-screen box-border bg-slate-100 flex flex-col items-center justify-center">
        <h1 className="text-center text-4xl font-bold mt-8">
          Advance Auth System
        </h1>

        <div className="max-w-xl w-[476px] p-8 border h-auto m-auto bg-white rounded-xl shadow-xl">
          <div>
            <h3 className="text-3xl font-bold mb-8">Forgot your password?</h3>
          </div>

          <div className="flex flex-col gap-7">
            <div className="flex flex-col">
              <label htmlFor="otp" className="mb-2 font-semibold">
                OTP
              </label>
              <input
                type="number"
                id="otp"
                autoComplete="off"
                placeholder="enter 6-digit number"
                className="border-2 h-12 ps-2 rounded-md text-lg"
                onChange={(e) => setOTP(e.target.value)}
                required
              />
            </div>
            <div>
              <button
                className="w-full h-12 rounded-lg bg-slate-800 text-white font-semibold hover:bg-slate-900"
                type="submit"
                onClick={()=>setStep(step=>step+1)}
              >
                Get OTP
              </button>
            </div>

            
          </div>
        </div>
      </section>
   </>
  )
}

export default Otp