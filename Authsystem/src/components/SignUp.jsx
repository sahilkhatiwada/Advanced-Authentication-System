import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  // State hooks to manage email, password, and confirm password inputs
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  const [isChecked,setIsChecked] = useState(false)
  console.log(isChecked)

  // The `required` attribute ensures the fields are validated before form submission

  return (
    <>
      <section className="w-full h-screen box-border bg-slate-100 flex flex-col items-center justify-center">
        {/* Page heading */}
        <h1 className="text-center text-4xl font-bold mt-8">Advance Auth System</h1>

        {/* Sign-Up form container */}
        <div className="max-w-xl w-[476px] p-8 border h-auto m-auto bg-white rounded-xl shadow-xl">
          <div>
            <h3 className="text-3xl font-bold mb-8">Create an account</h3>
          </div>

          {/* Form starts */}
          <form className="flex flex-col gap-7">
            {/* Email Input */}
            <div className="flex flex-col">
              <label htmlFor="email" className="mb-2 font-semibold">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                autoComplete="off" // Changed from "none" to "off" for proper browser behavior
                placeholder="name@company.com"
                className="border-2 h-12 ps-2 rounded-md text-lg"
                onChange={(e) => setEmail(e.target.value)} // Updates email state
                required
              />
            </div>

            {/* Password Input */}
            <div className="flex flex-col">
              <label htmlFor="password" className="mb-1 font-semibold">
                Password
              </label>
              <input
                type="password"
                id="password"
                autoComplete="off" // Corrected "none" to "off"
                placeholder="Password"
                className="h-12 border-2 ps-2 rounded-md text-lg"
                onChange={(e) => setPassword(e.target.value)} // Updates password state
                required
              />
            </div>

            {/* Confirm Password Input */}
            <div className="flex flex-col">
              <label htmlFor="Confirm_password" className="mb-1 font-semibold">
                Confirm Password
              </label>
              <input
                type="password"
                id="Confirm_password"
                autoComplete="off" // Corrected "none" to "off"
                placeholder="Confirm Password"
                className="h-12 border-2 ps-2 rounded-md text-lg"
                onChange={(e) => setRepassword(e.target.value)} // Updates confirm password state
                required
              />
            </div>

            {/* Terms and Conditions */}
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember"
                  className="size-4 mr-2"
                  checked={isChecked}
                  onChange={()=>setIsChecked(!isChecked)}
                  required // Ensures the user checks the box
                />
                <label htmlFor="remember">
                  I accept the Terms and Conditions
                </label>
              </div>
            </div>

            {/* Sign-Up Button */}
            <div>
              <button
                className="w-full h-12 rounded-lg bg-slate-800 text-white font-semibold hover:bg-slate-900"
                type="submit" // Added type="submit" for form behavior
              >
                Create an account
              </button>
            </div>

            {/* Redirect to Login Page */}
            <div>
              <p className="text-gray-500">
                Already have an account?{" "}
                <Link to="/" className="text-black font-semibold">
                  Login here
                </Link>
              </p>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default SignUp;
