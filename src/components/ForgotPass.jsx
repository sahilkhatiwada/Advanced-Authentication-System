import React, { useState } from 'react'
import Forget from './Forget'
import Otp from './Otp'
import Reset from './Reset'

const ForgotPass = () => {
  const [step,setStep] = useState(1)
  return (
    <>
      {
        step === 1 && (
          <Forget step={step} setStep = {setStep}/>
        )
      }
      {
        step === 2 && (
          <Otp step={step} setStep = {setStep}/>
        )
      }
      {
        step === 3 && (
          <Reset step={step} setStep = {setStep}/>
        )
      }
    </>
  )
}

export default ForgotPass