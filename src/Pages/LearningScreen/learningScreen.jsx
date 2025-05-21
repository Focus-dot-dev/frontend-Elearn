"use client"

import { useState } from "react"
import { FaArrowLeft, FaChevronDown, FaChevronUp } from "react-icons/fa" // Import icons
import { Link } from "react-router-dom"
import Nav from "../../components/Nav"
import Footer from "../../components/footer"

const LearningScreen = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isSecondDropdownOpen, setIsSecondDropdownOpen] = useState(false)
  const [currentTopicIndex, setCurrentTopicIndex] = useState(0) // Track current topic index

  const topics = [
    "Definition and types of Pronouns",
    "Functions of Pronouns in Sentences",
    "Agreements of pronouns with antecedents",
    "Relative pronouns and their Usage",
    "Indefinite pronouns and their correct Use",
    "common errors in pronouns Usage",
    "Pronouns in Formal and Informal writing",
    "Pronouns in Speech and Communications",
    "Complex sentences with Pronouns",
  ]

  const test = ["Take Assessment"]

  // Map topics to video URLs
  const topicVideos = {
    "Definition and types of Pronouns": "/src/assets/vid-4.mp4",
    "Functions of Pronouns in Sentences": "/src/assets/vid-3.mp4",
    "Agreements of pronouns with antecedents": "/src/assets/vid-2.mp4",
    "Relative pronouns and their Usage": "/src/assets/vid-1.mp4",
    "Indefinite pronouns and their correct Use": "https://example.com/video5.mp4",
    "common errors in pronouns Usage": "https://example.com/video6.mp4",
    "Pronouns in Formal and Informal writing": "https://example.com/video7.mp4",
    "Pronouns in Speech and Communications": "https://example.com/video8.mp4",
    "Complex sentences with Pronouns": "https://example.com/video9.mp4",
  }

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }
  const toggleSecondDropdown = () => {
    setIsSecondDropdownOpen(!isSecondDropdownOpen)
  }

  const handleTopicClick = (index) => {
    setCurrentTopicIndex(index) // Set the current topic index
  }

  const handlePrevious = () => {
    if (currentTopicIndex > 0) {
      setCurrentTopicIndex(currentTopicIndex - 1)
    }
  }

  const handleNext = () => {
    if (currentTopicIndex < topics.length - 1) {
      setCurrentTopicIndex(currentTopicIndex + 1)
    }
  }

  const selectedTopic = topics[currentTopicIndex]

  return (
    <>
        <Nav/>
      <section className="bg-blue-100 min-h-screen flex flex-col justify-around items-start p-4 sm:p-8 md:p-12 lg:p-20">
        <div className="top-4 left-4 sm:left-8 md:left-12 lg:left-16">
          <Link to="#" className="inline-flex items-center text-blue-950 hover:text-blue-800 transition-colors">
            <FaArrowLeft className="mr-2" />
            <span className="text-sm md:text-base">Back</span>
          </Link>
        </div>
        <div className="flex flex-col md:flex-row justify-around items-center w-full gap-6 md:gap-8 mt-10 md:mt-0">
          {/* Left Section */}
          <div className="w-full md:w-2/8 bg-blue-400 flex flex-col items-center justify-center p-4 rounded-md">
            <img src="/src/assets/leaning.png" alt="Learning" className="w-32 sm:w-40 md:w-48 lg:w-56" />
            <div className="mt-4 w-full">
              {/* Modules Dropdown */}
              <button
                onClick={toggleDropdown}
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover: "
              >
                Modules 1: Pronouns
                {isDropdownOpen ? (
                  <FaChevronUp className="ml-2" /> // Up arrow when open
                ) : (
                  <FaChevronDown className="ml-2" /> // Down arrow when closed
                )}
              </button>
              {isDropdownOpen && (
                <ul className="bg-blue-500 border border-gray-300 rounded-md shadow-lg w-full max-h-60 overflow-y-auto">
                  {topics.map((topic, index) => (
                    <li
                      key={index}
                      className="px-4 py-2 hover:bg-blue-600 cursor-pointer text-white text-sm sm:text-base"
                      onClick={() => handleTopicClick(index)} // Handle topic click
                    >
                      {topic}
                    </li>
                  ))}
                </ul>
              )}

              {/* Assessment Dropdown */}
              <button
                onClick={toggleSecondDropdown}
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors w-full flex items-center justify-between mt-4 text-sm sm:text-base"
              >
                Assessment
                {isSecondDropdownOpen ? (
                  <FaChevronUp className="ml-2" /> // Up arrow when open
                ) : (
                  <FaChevronDown className="ml-2" /> // Down arrow when closed
                )}
              </button>
              {isSecondDropdownOpen && (
                <ul className="bg-blue-500 border border-gray-300 rounded-md shadow-lg w-full">
                  {test.map((testItem, index) => (
                    <li
                      key={index}
                      className="px-4 py-2 hover:bg-blue-600 cursor-pointer text-white text-sm sm:text-base"
                    >
                      {testItem}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full md:w-1/2 flex flex-col items-center mt-6 md:mt-0">
            {selectedTopic ? (
              <div className="w-full max-w-lg">
                <h2 className="text-lg sm:text-xl font-bold mb-4 text-center">{selectedTopic}</h2>
                <video
                  src={topicVideos[selectedTopic]}
                  controls
                  className="w-full h-auto sm:h-64 md:h-72 lg:h-80 rounded-md shadow-lg"
                >
                  Your browser does not support the video tag.
                </video>
                <div className="flex justify-between mt-4">
                  <button
                    onClick={handlePrevious}
                    className="bg-blue-500 text-white px-3 py-1 sm:px-4 sm:py-2 rounded-md hover:bg-blue-600 transition-colors text-sm sm:text-base"
                    disabled={currentTopicIndex === 0}
                  >
                    Previous
                  </button>
                  <button
                    onClick={handleNext}
                    className="bg-blue-500 text-white px-3 py-1 sm:px-4 sm:py-2 rounded-md hover:bg-blue-600 transition-colors text-sm sm:text-base"
                    disabled={currentTopicIndex === topics.length - 1}
                  >
                    Next
                  </button>
                </div>
              </div>
            ) : (
              <p className="text-gray-500">Select a topic to view the video.</p>
            )}
          </div>
        </div>
      </section>
      <Footer/>
    </>
  )
}

export default LearningScreen

