"use client"

import { useState } from "react"
import { Link, useNavigate } from "react-router-dom" // Import useNavigate for redirection
import { CiLock, CiMail } from "react-icons/ci"
import Navlanding from "../../components/Navlanding"
import Footerlanding from "../../components/footerlanding"
import FooterLight from "../../components/footer-light"

// Simulated user data
const mockUser = {
  email: "dabilzonly@gmail.com", // Removed trailing space
  password: "Oluwabislimz1"
};

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [keepMeLoggedIn, setKeepMeLoggedIn] = useState(false)
  const [errors, setErrors] = useState({ email: "", password: "" })
  const [serverError, setServerError] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [successMessage, setSuccessMessage] = useState("") // State for success message
  const navigate = useNavigate() // Hook for navigation

  const handleLogin = () => {
    // Simulate login by storing a token
    localStorage.setItem("authToken", "your-auth-token");
    navigate("/dashboard"); // Redirect to a protected page
  };

  const validateInputs = () => {
    let valid = true
    const newErrors = { email: "", password: "" }

    // Email validation
    if (!email) {
      newErrors.email = "Email is required"
      valid = false
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Invalid email format"
      valid = false
    } else if (email !== mockUser.email) {
      newErrors.email = "Email not found"
      valid = false
    }

    // Password validation
    if (!password) {
      newErrors.password = "Password is required"
      valid = false
    } else if (password !== mockUser.password) {
      newErrors.password = "Incorrect password"
      valid = false
    }

    setErrors(newErrors)
    return valid
  }

  const loginHandle = async (e) => {
    e.preventDefault()

    if (!validateInputs()) {
      return
    }

    try {
      // Simulate an API call for authentication
      // const response = await fetch("/api/login", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({ email, password, keepMeLoggedIn }),
      // })

      // if (!response.ok) {
      //   throw new Error("Invalid email or password")
      // }

      // const data = await response.json()
      // console.log("Login successful:", data)

      // Save token securely (e.g., in HttpOnly cookies or localStorage)
      if (keepMeLoggedIn) {
        localStorage.setItem("authToken", data.token)
      } else {
        sessionStorage.setItem("authToken", data.token)
      }

      // Display success message
      setSuccessMessage("Login Successful")

      // Redirect to /modules after 2 seconds
      setTimeout(() => {
        navigate("/modules")
      }, 2000)
    } catch (error) {
      setServerError(error.message)
    }
  }

  return (
    <>
      <Navlanding />
      <div className="bg-blue-100 min-h-screen px-4 py-6 md:px-8 relative">
        {/* Success Message */}
        {successMessage && (
          <div className="absolute top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-md shadow-md">
            {successMessage}
          </div>
        )}

        {/* Top section with image and text */}
        <section className="flex flex-col md:flex-row justify-center md:justify-around items-center gap-6 mb-8">
          <div className="hidden md:block max-w-md">
            <img
              src="/src/assets/man-board.png"
              alt="Learning illustration"
              className="w-full h-auto"
            />
          </div>
          <div className="flex flex-col gap-4 p-4 rounded-md text-center md:text-right max-w-md">
            <h1 className="text-blue-900 font-bold font-serif text-2xl md:text-3xl">
              Login Now
            </h1>
            <h2 className="text-sm md:text-base">
              Login now to continue your learning journey! Access free courses
              in English, Math, and General Studies, track your progress, and
              earn a recognized certificate. Keep learning today!
            </h2>
          </div>
        </section>

        {/* Main login section */}
        <section className="flex flex-col md:flex-row justify-center md:justify-around items-center gap-8">
          {/* Left side with logo and info */}
          <div className="flex flex-col gap-4 items-center text-center max-w-xs">
            <div>
              <img
                src="/src/assets/small-logo.png"
                alt="BrainThrust Logo"
                className="w-32 md:w-40"
              />
            </div>
            <div>
              <h2 className="text-sm md:text-base">
                Join BrainThrust E-Learning and unlock your learning potential!
              </h2>
            </div>
            <div>
              <small>
                Log in to BrainThrust E-Learning to get started!
              </small>
            </div>

            <div>
              <small className="text-xs md:text-sm">
                By signing up for BrainThrust E-Learning, you agree to our{" "}
                <Link className="text-red-400">Terms of use</Link> and{" "}
                <Link className="text-red-400">Privacy Policy</Link>
              </small>
            </div>
          </div>

          {/* Login form */}
          <form
            onSubmit={handleLogin}
            className="flex flex-col gap-4 bg-blue-400 w-full md:w-2/3 lg:w-1/3 p-4 rounded-md"
          >
            <div className="flex flex-col justify-center text-center border-blue-900 p-2 rounded-md py-5">
              <h2 className="flex justify-start text-xl font-bold">
                Login to BrainThrust
              </h2>
              {serverError && (
                <div className="text-red-500 text-sm">{serverError}</div>
              )}
              <Link>
                <div className="flex justify-center bg-white p-2 rounded-md gap-2 mt-5">
                  <img
                    src="/src/assets/g_icon.png"
                    alt="Google icon"
                    width={20}
                  />
                  <h3 className="text-gray-500">Continue with Google</h3>
                </div>
              </Link>
              <div className="flex flex-col gap-2 items-start py-5">
                <label htmlFor="email">Email</label>
                <div className="flex items-center gap-2 bg-blue-100 w-full p-1 rounded-md">
                  <CiMail />
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    className="w-full p-2 outline-none rounded-md"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                {errors.email && (
                  <small className="text-red-500">{errors.email}</small>
                )}
              </div>
              <div className="flex flex-col gap-2 items-start">
                <label htmlFor="password">Password</label>
                <div className="flex items-center gap-2 bg-blue-100 w-full p-1 rounded-md">
                  <CiLock />
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    id="password"
                    placeholder="Password"
                    className="w-full p-2 outline-none rounded-md"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="text-sm text-blue-900 hover:text-blue-800 focus:outline-none cursor-pointer"
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
                {errors.password && (
                  <small className="text-red-500">{errors.password}</small>
                )}
              </div>
              <div className="flex items-center gap-2 mt-2">
                <input
                  type="checkbox"
                  id="keepMeLoggedIn"
                  checked={keepMeLoggedIn}
                  onChange={(e) => setKeepMeLoggedIn(e.target.checked)}
                />
                <label htmlFor="keepMeLoggedIn">Keep me logged in</label>
              </div>
              <div className="flex justify-end m-2">
                <Link>
                  <h3>Forgot Password?</h3>
                </Link>
              </div>
              <button
                onClick={handleLogin}
                disabled={!email || !password}
                type="submit"
                className="bg-blue-900 text-white p-2 rounded-md w-full mt-2 hover:bg-blue-800 focus:outline-none cursor-pointer"
              >
                Login
              </button>
              <div className="text-center mt-2">
                <small>
                  Don't have an account?{" "}
                  <Link to="/signup" className="text-red-400">
                    Create an account
                  </Link>
                </small>
              </div>
            </div>
          </form>
        </section>
      </div>
      <Footerlanding />
      <FooterLight />
    </>
  )
}

export default Login

