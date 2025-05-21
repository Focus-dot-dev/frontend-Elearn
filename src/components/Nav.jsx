"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { FaSearch } from "react-icons/fa"
import { IoMdNotifications } from "react-icons/io"
import { HiDotsCircleHorizontal } from "react-icons/hi"
import { FaBars, FaTimes } from "react-icons/fa"

const Nav = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const [profilePic, setProfilePic] = useState("/src/assets/profile-placeholder.png")
  const [profileMenuOpen, setProfileMenuOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleSearch = () => {
    console.log("Searching for:", searchQuery)
  }
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    window.location.href = "/login"; // Redirect to login page
  };

  const handleProfilePicChange = (event) => {
    const file = event.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setProfilePic(e.target.result)
      }
      reader.readAsDataURL(file)
    }
  }

  const toggleProfileMenu = () => {
    setProfileMenuOpen(!profileMenuOpen)
  }

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <>
    <div className="sticky top-0 z-50">
    <div className="top-header bg-blue-900 border-blue-900  flex flex-col md:flex-row md:justify-around items-center text-white p-4 shadow-sm">
        <div className="flex justify-between w-full md:w-auto">
          <div className="flex items-center">
            <img src="/src/assets/brain.png" alt="" className="w-12 md:w-20" />
            <h1>BrainThrust</h1>
          </div>

          {/* Mobile menu toggle button - only visible on mobile */}
          <button className="md:hidden text-white" onClick={toggleMobileMenu}>
            {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Wrap these elements to control visibility on mobile */}
        <div
          className={`${mobileMenuOpen ? "flex" : "hidden"} md:flex flex-col md:flex-row items-center w-full md:w-auto mt-4 md:mt-0`}
        >
          <div className="flex items-center gap-2  text-sm my-2 md:my-0">
            <img src="/src/assets/flag.webp" alt="" className="w-3" />
            <select className="font-bold text-black outline-none">
              <option value="en">English</option>
              <option value="fr">French</option>
              <option value="es">Spanish</option>
              <option value="de">German</option>
            </select>
          </div>

          <div className="flex items-center gap-4 md:gap-10 md:-mr-15 my-2 md:my-0">
            <IoMdNotifications color="white" size={35} />
            <div className="relative">
              <img
                src="/src/assets/face1.png"
                alt="img"
                className="w-10 h-10 md:w-15 md:h-15 rounded-full cursor-pointer"
              />
              <input
                type="file"
                accept="image/*"
                placeholder={<img src="/src/assets/brain.png" alt="" className="w-15 h-15 rounded-full" />}
                className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                onChange={handleProfilePicChange}
              />

              {profileMenuOpen && (
                <div className="absolute top-full right-0 mt-2 bg-white opacity-200 z-100 shadow-md rounded text-black w-40">
                  <Link to="/dashboard" className="block p-2 hover:bg-gray-200">
                    Dashboard
                  </Link>
                  <Link to="/donations" className="block p-2 hover:bg-gray-200">
                    Donations
                  </Link>
                  <Link to="/messages" className="block p-2 hover:bg-gray-200">
                    Messages
                  </Link>
                  <Link to="/assessment" className="block p-2 hover:bg-gray-200">
                    Assessment Review
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left"
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "gray")}>
                  <Link
                    to="/" className="block p-2 hover:bg-gray-200">
                      Sign Out
                    </Link>
                  </button>
                </div>
              )}
            </div>

            <div className="iconic flex items-center gap-2">
              <HiDotsCircleHorizontal color="white" size={40} onClick={toggleProfileMenu} />
            </div>
          </div>
        </div>
      </div>

      <nav className="bg-blue-100 text-black p-2 flex flex-col md:flex-row md:items-center  md:justify-around">
        <div className="flex items-center bg-white text-gray-800 p-2 rounded gap-2 w-full md:w-auto mb-4 md:mb-0">
          <FaSearch onClick={handleSearch} style={{ cursor: "pointer" }} />
          <input
            type="search"
            className="border-none outline-none w-full"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className={`${mobileMenuOpen ? "flex" : "hidden"} md:flex flex-col md:flex-row gap-4 md:gap-7`}>
          <Link to="/afterenroll" className="hover:text-orange-400 hover:bg-white hover:rounded-md p-2">
            Home
          </Link>
          <Link to="/modules" className="hover:text-orange-400 hover:bg-white hover:rounded-md p-2">
            Subject
          </Link>
          <Link to="/profile" className="hover:text-orange-400 hover:bg-white hover:rounded-md p-2">
            Student Profile
          </Link>
          <Link to="/contact_us" className="hover:text-orange-400 hover:bg-white hover:rounded-md p-2">
            Contact Us
          </Link>
        </div>
      </nav>
    </div>
      
    </>
  )
}

export default Nav

