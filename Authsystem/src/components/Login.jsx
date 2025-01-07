import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  // State hooks to manage email and password inputs
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // The `required` attribute in the form inputs ensures that these fields are validated before form submission.

  return (
    <>
      <section className="w-full h-screen box-border bg-slate-100 flex flex-col items-center justify-center">
        {/* Page heading */}
        <h1 className="text-center text-4xl font-bold mt-8">Advance Auth System</h1>

        {/* Login form container */}
        <div className="max-w-xl w-[476px] p-8 border h-auto m-auto bg-white rounded-xl shadow-xl">
          <div>
            <h3 className="text-3xl font-bold mb-8">Sign in to your account</h3>
          </div>

          {/* Form starts */}
          <form className="flex flex-col gap-7" method="POST">
            {/* Email Input */}
            <div className="flex flex-col">
              <label htmlFor="email" className="mb-2 font-semibold">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                autoComplete="off" // Changed from `none` to `off` for correct behavior
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
                autoComplete="off" // Changed from `none` to `off` for correct behavior
                placeholder="password"
                className="h-12 border-2 ps-2 rounded-md text-lg"
                onChange={(e) => setPassword(e.target.value)} // Updates password state
                required
              />
            </div>

            {/* Remember Me and Forget Password */}
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember"
                  className="size-4 mr-2"
                />
                <label htmlFor="remember">Remember me</label>
              </div>
              <div>
                {/* Link to forget-password route */}
                <Link
                  to="/forget-password"
                  className="font-semibold text-indigo-900 hover:underline"
                >
                  Forget password?
                </Link>
              </div>
            </div>

            {/* Sign-In Button */}
            <div>
              <button
                className="w-full h-12 rounded-lg bg-slate-800 text-white font-semibold hover:bg-slate-900"
                type="submit" // Added type="submit" for form behavior
              >
                Sign In
              </button>
            </div>

            {/* Redirect to Sign-Up Page */}
            <div>
              <p className="text-gray-500">
                Don't have an account yet?{" "}
                <Link
                  to="/sign-Up" // Corrected route name from `signUp`s to `sign-up`
                  className="text-black font-semibold"
                >
                  Sign Up
                </Link>
              </p>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Login;
