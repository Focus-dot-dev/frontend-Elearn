"use client"

import { useEffect, useState } from "react"
import Nav from "../../components/Nav"
import ProgressBar from "../../components/progress-bar"
import { FaArrowRight } from "react-icons/fa"
import { Link } from "react-router-dom"
import Footer from "../../components/footer"

const EnrollMore = () => {
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    setAnimate(true)
  }, [])

  const progressItems = [
    { name: "Pronouns", percentage: 60, color: "bg-emerald-500" },
    { name: "Prepositions", percentage: 40, color: "bg-blue-500" },
    { name: "Verb", percentage: 75, color: "bg-amber-500" },
    { name: "Adverb", percentage: 30, color: "bg-rose-500" },
  ]

  const topics = [
    "Pronouns",
    "Pronunciations",
    "Oral English",
    "Idioms",
    "Synonyms",
    "Phrasal Verbs",
    "Prepositions",
    "Conjunctions",
    "Adverbs",
    "Adjectives",
    "Tenses",
    "Articles",
    "Comprehension",
    "Vocabulary"
  ]

  return (
    <>
     <Nav />
      <section
        className="enroll-more-section relative"
        style={{
          backgroundImage: `url('/src/assets/textBg.jpeg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "100vh",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(255, 255, 255, 0.5)",
            zIndex: 1,
          }}
        >
         
          <div className="w-full h-full flex flex-col items-center justify-start gap-4 px-4 mt-10 md:mt-0">
            <div className="flex flex-col items-center justify-center">
              <img src="/src/assets/booksnshii.png" alt="Books" className="w-[160px] md:w-[210px]" />
              <small className="-mt-6 md:-mt-10">English Language</small>
            </div>
            <h1 className="text-xl text-center md:text-4xl font-semibold text-blue-900 font-sans px-2">
              Engaging video lessons for effortless learning and <br className="hidden md:block" /> understanding.
            </h1>
            <button className="bg-blue-900 text-sm md:text-base px-4 py-2 rounded-lg text-white hover:bg-blue-700 hover:scale-105 transition-transform duration-300 hover:shadow-lg hover:shadow-blue-900 hover:text-black">
              <Link to={"/enroll"}>Start Learning Now</Link>
            </button>
          </div>
        </div>
      </section>

      <section className="bg-blue-100 py-10">
        <div className="container mx-auto flex flex-col md:flex-row gap-10 px-4">
          <div className="flex flex-col items-start gap-4 md:w-1/2">
            <h1 className="text-xl md:text-3xl font-semibold text-blue-900 font-sans">About The Course</h1>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
              BrainThrust offers a free and comprehensive e-learning experience.
              Our courses are structured into engaging lessons, covering essential topics with interactive videos, quizzes,
              and practical exercises to enhance understanding and retention. Whether you're a student preparing for exams,
              a professional looking to sharpen your skills, or a lifelong learner, our platform provides flexible,
              self-paced learning that fits your schedule.
            </p>
            <button className="bg-blue-900 rounded-xl px-4 py-2 text-white hover:bg-blue-400 hover:text-black transition duration-300">
              Join the Course
            </button>
          </div>

          <div className="flex flex-col bg-blue-300 gap-6 p-5 rounded-lg md:w-1/2">
            <h2 className="text-lg md:text-2xl font-semibold text-blue-900">Course Progress</h2>
            {progressItems.map((item, index) => (
              <div key={index} className="w-full">
                <p className="text-blue-900 font-medium mb-2">{item.name}</p>
                <ProgressBar percentage={animate ? item.percentage : 0} color={item.color} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-blue-100 py-10">
        <div className="flex flex-col items-center gap-4 px-4 md:px-10">
          <h1 className="text-2xl md:text-4xl font-semibold text-blue-900 font-sans">Topics</h1>
          <div className="w-full md:w-4/5 flex flex-col gap-4">
            {topics.map((topic, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-white p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="rounded-full p-1 bg-blue-950">
                    <img src="/src/assets/bluebook.png" alt="" className="w-10 sm:w-12" />
                  </div>
                  <p className="text-blue-900 font-medium text-base">{topic}</p>
                </div>
                <Link
                  to={"/enroll"}
                  className="self-end sm:self-auto flex items-center justify-center bg-blue-900 text-white px-4 py-2 rounded-lg hover:bg-blue-700 hover:scale-105 transition-transform duration-300 hover:shadow-lg hover:shadow-blue-900"
                >
                  <FaArrowRight className="text-white" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default EnrollMore
