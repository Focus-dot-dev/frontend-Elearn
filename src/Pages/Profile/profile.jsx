"use client"

import { useState, useEffect } from "react"
import { CiMail } from "react-icons/ci"
import { FaRegEdit, FaCamera } from "react-icons/fa"
import Nav from "../../components/Nav"
import Footer from "../../components/footer"

const Profile = () => {
  const [profileData, setProfileData] = useState({
    name: "",
    idNumber: "",
    studentLevel: "",
    country: "",
    email: "",
    registrationDate: "",
    lastLogin: "",
  })

  const [formData, setFormData] = useState(profileData)
  const [profileImage, setProfileImage] = useState("") // State for profile image
  const [isEditable, setIsEditable] = useState(false) // State to control form editability
  const [studentPosition, setStudentPosition] = useState(1) // Position of the student

  // Generate ID number based on the year and position
  useEffect(() => {
    const currentYear = new Date().getFullYear().toString().slice(-2) // Get the last two digits of the year
    const generatedId = `BT-${currentYear}-${String(studentPosition).padStart(9, "0")}`
    setProfileData((prevData) => ({
      ...prevData,
      idNumber: generatedId,
    }))
  }, [studentPosition])

  // Update last login time when the page is visited
  useEffect(() => {
    const lastLoginTime = new Date().toLocaleString()
    setProfileData((prevData) => ({
      ...prevData,
      lastLogin: lastLoginTime,
    }))
  }, [])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSave = (e) => {
    e.preventDefault()
    setProfileData(formData)
    setIsEditable(false) // Disable editing after saving
    alert("Profile updated successfully!")
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = () => {
        setProfileImage(reader.result) // Set the selected image
      }
      reader.readAsDataURL(file)
    }
  }

  const enableEditing = () => {
    setIsEditable(true) // Enable form editing
  }

  return (
    <>
        <Nav/>
    <section className="bg-blue-100 min-h-screen p-4 sm:p-6 md:p-8">
      <div className="max-w-6xl mx-auto mt-8">
        <h1 className="text-center text-xl sm:text-2xl font-bold text-blue-900 mb-4 sm:mb-6 md:mb-8">
          Student Profile
        </h1>

        <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 md:gap-8">
          {/* Display Section */}
          <div className="bg-blue-200 p-4 sm:p-5 rounded-md shadow-lg flex flex-col items-center gap-4 w-full lg:w-1/3">
            <div className="relative h-24 w-24 sm:h-28 sm:w-28 md:h-32 md:w-32 rounded-full overflow-hidden border-2 border-white">
              <img src={profileImage || "/src/assets/face1.png"} alt="Profile" className="w-full h-full object-cover" />
              <label
                htmlFor="profileImage"
                className="absolute bottom-1 right-1 sm:bottom-2 sm:right-2 bg-white p-1 rounded-full cursor-pointer hover:bg-gray-100 transition-colors"
              >
                <FaCamera size={16} className="sm:text-lg" />
              </label>
              <input type="file" id="profileImage" accept="image/*" className="hidden" onChange={handleImageChange} />
            </div>

            <div>
              <h2 className="text-lg sm:text-xl font-semibold text-center">
                {profileData.name || "Christopher Kelvin"}
              </h2>
            </div>

            <div className="flex flex-col gap-2 w-full max-w-xs">
              <div className="grid grid-cols-2 text-sm">
                <span className="font-semibold">Id Number:</span>
                <span className="text-right">{profileData.idNumber || "BT-25-000000001"}</span>
              </div>
              <div className="grid grid-cols-2 text-sm">
                <span className="font-semibold">Student Level:</span>
                <span className="text-right">{profileData.studentLevel || "SS2"}</span>
              </div>
              <div className="grid grid-cols-2 text-sm">
                <span className="font-semibold">Country:</span>
                <span className="text-right">{profileData.country || "Nigeria"}</span>
              </div>
              <div className="grid grid-cols-2 text-sm">
                <span className="font-semibold">Email:</span>
                <span className="text-right truncate">{profileData.email || "as-e-dey-hot@gmail.com"}</span>
              </div>
              <div className="grid grid-cols-2 text-sm">
                <span className="font-semibold">Registration:</span>
                <span className="text-right">{profileData.registrationDate || "20/05/2024"}</span>
              </div>
              <div className="grid grid-cols-2 text-sm">
                <span className="font-semibold">Last Login:</span>
                <span className="text-right">{profileData.lastLogin || "3/29/2025 1:50 PM"}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-2 w-full mt-2">
              <button
                className="bg-blue-500 text-white px-3 py-2 rounded-md flex items-center justify-center gap-2 hover:bg-blue-600 transition-colors w-full sm:w-auto"
                onClick={enableEditing}
              >
                <FaRegEdit /> <span className="text-sm">Edit Profile</span>
              </button>
              <button className="bg-gray-400 text-white px-3 py-2 rounded-md flex items-center justify-center gap-2 hover:bg-gray-500 transition-colors w-full sm:w-auto">
                <CiMail /> <span className="text-sm">Messages</span>
              </button>
            </div>
          </div>

          {/* Form Section */}
          <form className="bg-white p-4 sm:p-5 rounded-md shadow-lg w-full lg:w-2/3" onSubmit={handleSave}>
            <h2 className="text-lg font-bold mb-4">Edit Profile</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="md:col-span-2">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="border border-gray-300 p-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  disabled={!isEditable}
                />
              </div>

              <div>
                <input
                  type="text"
                  name="idNumber"
                  placeholder="ID Number"
                  value={profileData.idNumber}
                  readOnly
                  className="border border-gray-300 p-2 rounded-md w-full bg-gray-100"
                />
              </div>

              <div>
                <input
                  type="text"
                  name="studentLevel"
                  placeholder="Student Level"
                  value={formData.studentLevel}
                  onChange={handleInputChange}
                  className="border border-gray-300 p-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  disabled={!isEditable}
                />
              </div>

              <div>
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  className="border border-gray-300 p-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  disabled={!isEditable}
                >
                  <option value="">Select Country</option>
                  <option value="Nigeria">Nigeria</option>
                  <option value="United States">United States</option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="Canada">Canada</option>
                  <option value="Australia">Australia</option>
                  <option value="India">India</option>
                  <option value="Germany">Germany</option>
                  <option value="France">France</option>
                  <option value="China">China</option>
                  <option value="Japan">Japan</option>
                </select>
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="border border-gray-300 p-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  disabled={!isEditable}
                />
              </div>

              <div>
                <input
                  type="date"
                  name="registrationDate"
                  placeholder="Registration Date"
                  value={formData.registrationDate}
                  onChange={handleInputChange}
                  className="border border-gray-300 p-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  disabled={!isEditable}
                />
              </div>

              <div className="md:col-span-2 mt-2">
                <button
                  type="submit"
                  className={`bg-blue-500 text-white px-4 py-2 rounded-md w-full sm:w-auto ${
                    !isEditable ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-600 transition-colors"
                  }`}
                  disabled={!isEditable}
                >
                  Save Changes
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
        <Footer/>
    </>
     
  )
}

export default Profile

