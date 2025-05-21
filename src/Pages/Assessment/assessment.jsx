import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaCheck, FaTimes, FaArrowLeft } from 'react-icons/fa'
import image from '/src/assets/assess.png' // Adjust the path to the image
import Nav from '../../components/Nav'
import Footer from '../../components/footer'

const Assessment = () => {
  const [englishTopics, setEnglishTopics] = useState([])
  const [mathTopics, setMathTopics] = useState([])
  const [averageScore, setAverageScore] = useState(0)

  useEffect(() => {
    // Simulate fetching data from a database
    const fetchData = async () => {
      const englishData = [
        { topic: 'Grammar', status: 'Pass', score: '95%' },
        { topic: 'Vocabulary', status: 'Pass', score: '88%' },
        { topic: 'Concord', status: 'Pass', score: '90%' },
        { topic: 'Lexis and Structure', status: 'Pass', score: '98%' },
        { topic: 'Comprehension', status: 'Fail', score: '72%' }
      ]
      setEnglishTopics(englishData)

      const mathData = [
        { topic: 'Algebra', status: 'Pass', score: '85%' },
        { topic: 'Geometry', status: 'Pass', score: '78%' },
        { topic: 'Calculus', status: 'Fail', score: '65%' },
        { topic: 'Statistics', status: 'Pass', score: '80%' },
        { topic: 'Trigonometry', status: 'Fail', score: '70%' }
      ]
      setMathTopics(mathData)

      // Calculate the average score
      const allData = [...englishData, ...mathData]
      const totalScore = allData.reduce((acc, topic) => acc + parseInt(topic.score), 0)
      const avgScore = totalScore / allData.length
      setAverageScore(avgScore.toFixed(2))
    }

    fetchData()
  }, [])

  return (

    <>
    <Nav/>
    <div className=" bg-blue-100 px-4 sm:px-6 md:px-10 py-6 md:py-10 max-w-7xl mx-auto">
      {/* Back Button */}
      <div className="mb-6">
        <Link to="#" className="inline-flex items-center text-blue-950 hover:text-blue-800 transition-colors">
          <FaArrowLeft className="mr-2" />
          <span className="text-sm md:text-base">Back</span>
        </Link>
      </div>

      {/* Average Score */}
      <h1 className="text-blue-950 text-xl md:text-2xl font-semibold mb-6">
        Your average Assessment score is {averageScore}%
      </h1>

      {/* English Section with Image */}
      <div className="flex flex-col md:flex-row gap-6 mb-8">
        <div className="w-full md:w-2/3 overflow-x-auto">
          <h2 className="text-lg font-medium mb-3 text-blue-950">English Language</h2>
          <div className="overflow-x-auto rounded-lg shadow">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-blue-950 text-white">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-medium sm:w-1/2">Topic</th>
                  <th className="px-4 py-3 text-center text-sm font-medium sm:w-1/4">Status</th>
                  <th className="px-4 py-3 text-center text-sm font-medium sm:w-1/4">Score</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {englishTopics.map((topic, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <div className="flex items-center">
                        {parseInt(topic.score) >= 75 ? (
                          <FaCheck className="text-green-500 mr-2 flex-shrink-0" />
                        ) : (
                          <FaTimes className="text-red-500 mr-2 flex-shrink-0" />
                        )}
                        <span className="text-sm">{topic.topic}</span>
                      </div>
                    </td>
                    <td className={`px-4 py-3 whitespace-nowrap text-center text-sm ${
                      parseInt(topic.score) >= 75 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {topic.status}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-center text-sm ">
                      {topic.score}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Image - Hidden on small screens, shown on medium and up */}
        <div className="hidden md:block md:w-1/3 lg:w-1/4">
          <img 
            src={image || "/placeholder.svg"} 
            alt="Assessment" 
            className="w-full h-auto object-contain max-h-60" 
          />
        </div>
      </div>

      {/* Mathematics Section */}
      <div className="mt-8 w-full md:w-2/3">
        <h2 className="text-lg font-medium mb-3 text-blue-950">Mathematics</h2>
        <div className="overflow-x-auto rounded-lg shadow">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-blue-950 text-white">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-medium sm:w-1/2">Topic</th>
                <th className="px-4 py-3 text-center text-sm font-medium sm:w-1/4">Status</th>
                <th className="px-4 py-3 text-center text-sm font-medium sm:w-1/4">Score</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {mathTopics.map((topic, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <div className="flex items-center">
                      {parseInt(topic.score) >= 75 ? (
                        <FaCheck className="text-green-500 mr-2 flex-shrink-0" />
                      ) : (
                        <FaTimes className="text-red-500 mr-2 flex-shrink-0" />
                      )}
                      <span className="text-sm">{topic.topic}</span>
                    </div>
                  </td>
                  <td className={`px-4 py-3 whitespace-nowrap text-center text-sm ${
                    parseInt(topic.score) >= 75 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {topic.status}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-center text-sm">
                    {topic.score}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Image - Shown only on small screens at the bottom */}
      <div className="mt-8 flex justify-center md:hidden">
        <img 
          src={image || "/placeholder.svg"} 
          alt="Assessment" 
          className="w-2/3 max-w-xs h-auto object-contain" 
        />
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default Assessment