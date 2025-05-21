"use client"

import { useState } from "react"
import { FaSearch, FaBars, FaTimes } from "react-icons/fa"
import { Link } from "react-router-dom"

const Navlanding = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const [menuOpen, setMenuOpen] = useState(false)

  const handleSearch = () => {
    console.log("Searching for:", searchQuery)
  }

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <>
      {/* Language selector */}
      <div className="bg-blue-200">
      <div className="bg-blue-200">
        <div className="flex items-center bg-blue-100 justify-end px-4 sm:px-6 md:px-8 gap-2 text-sm my-2 md:my-0">
          <img src="/src/assets/flag.webp" alt="" className="w-3" />
          <select className="font-bold text-black outline-none bg-transparent">
            <option value="en">English</option>
            <option value="fr">French</option>
            <option value="es">Spanish</option>
            <option value="de">German</option>
          </select>
        </div>
      </div>

      {/* Main navigation */}
      <nav>
        <div className="top-header bg-blue-200 border-blue-900 p-4 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-4">
            {/* Search bar - left */}
            <div className="flex items-center bg-white text-gray-800 p-2 rounded gap-2 w-full sm:w-auto order-3 sm:order-1">
              <FaSearch onClick={handleSearch} style={{ cursor: "pointer" }} />
              <input
                type="search"
                className="border-none outline-none w-full"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Logo - center */}
            <Link to={"/"} className="flex items-center justify-center order-1 sm:order-2">
            <div className="flex justify-center w-full sm:w-auto order-1 sm:order-2">
              <div className="flex items-center gap-3">
                <img src="/src/assets/small-logo.png" alt="" className="w-10 sm:w-12 md:w-20" />
                <h1 className="text-xl sm:text-2xl font-bold">BrainThrust</h1>
              </div>
            </div></Link>

            {/* Mobile menu toggle button */}
            <div className="sm:hidden flex items-center justify-end w-full order-2">
              <button onClick={toggleMenu} className="text-blue-900">
                {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>
            </div>

            {/* Navigation links - right */}
            <div
              className={`${
                menuOpen ? "flex" : "hidden"
              } sm:flex flex-col sm:flex-row items-center justify-center sm:justify-end gap-3 sm:gap-5 w-full sm:w-auto order-4 sm:order-3`}
            >
              <Link to={"/contact"} className="text-sm sm:text-base">
                <h3>Contact Us</h3>
              </Link>
              <Link to ={"/login"} className="text-sm sm:text-base">
                <h3>Sign in</h3>
              </Link>
              <Link to={"/signup"} className="text-sm sm:text-base">
                <button className="bg-blue-900 text-white py-1 px-2 sm:p-2 rounded text-sm cursor-pointer sm:text-base">
                  Sign up
                </button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
      </div>
    </>
  )
}

export default Navlanding

