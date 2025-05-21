"use client"

import React, { useState } from "react"
import firstSectionImage from '../../assets/firstsectionimage.png' // Import the image
import {
  FaChartLine,
  FaChevronLeft,
  FaChevronRight,
  FaEnvelope,
  FaGraduationCap,
  FaLayerGroup,
  FaPhone,
  FaSearch,
  FaUser,
} from "react-icons/fa"
import Footerlanding from "../../components/footerlanding"
import FooterLight from "../../components/footer-light"
import Navlanding from "../../components/Navlanding"
import { Link } from "react-router-dom"

const HomePage = () => {
  const Modules = [
    { images: "/src/assets/english.png", title: "English Language", duration: "1-2 hours", learners: "130" },
    { images: "/src/assets/mathematics.png", title: "Mathematics", duration: "2 hours", learners: "80" },
    { images: "/src/assets/generalStudies.png", title: "General Studies", duration: "3 hours", learners: "90" },
    { images: "/src/assets/history.png", title: "History", duration: "1-2 hours", learners: "70" },
    { images: "/src/assets/geography.png", title: "Geography", duration: "1-2 hours", learners: "130" },
    { images: "/src/assets/physics.png", title: "Physics", duration: "1-2 hours", learners: "130" },
    { images: "/src/assets/chemistry.png", title: "Chemistry", duration: "1-2 hours", learners: "130" },
    { images: "/src/assets/biology.png", title: "Biology", duration: "1-2 hours", learners: "130" },
    { images: "/src/assets/arts.png", title: "Arts", duration: "1-2 hours", learners: "130" },
    { images: "/src/assets/music.png", title: "Music", duration: "1-2 hours", learners: "130" },
    { images: "/src/assets/sports.png", title: "Sports", duration: "1-2 hours", learners: "130" },
    { images: "/src/assets/computer.png", title: "Computer Science", duration: "1-2 hours", learners: "130" },
    { images: "/src/assets/languages.png", title: "Languages", duration: "1-2 hours", learners: "130" },
    { images: "/src/assets/health.png", title: "Health", duration: "1-2 hours", learners: "130" },
    { images: "/src/assets/finance.png", title: "Finance", duration: "1-2 hours", learners: "130" }
  ]

  const steps = [
    {
      id: 1,
      icon: FaSearch,
      title: "Find Your Course",
      description: "Find the right course and start learning today!",
    },
    {
      id: 2,
      icon: FaLayerGroup,
      title: "Select Your Course",
      description: "Our course list gives you all the details to help you choose wisely.",
    },
    {
      id: 3,
      icon: FaGraduationCap,
      title: "Start Learning",
      description: "Begin your journey with expert-designed courses and get certified!",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
  }

  const testimonials = [
    {
      id: 1,
      text: "Taking this course was one of the best decisions I've made. The lessons were well-structured, easy to follow, and engaging. I struggled with Math before, but now I understand key concepts much better. The English lessons also improved my writing and speaking skills. I highly recommend this course to anyone looking to learn for free!",
      name: "Daniel B.",
    },
    {
      id: 2,
      text: "This course exceeded my expectations! The instructors explain concepts clearly, and the quizzes helped reinforce my understanding. I feel more confident in my studies and appreciate the flexibility of learning online.",
      name: "Sarah M.",
    },
    {
      id: 3,
      text: "I never thought online learning could be so effective. The course materials are top-notch, and the support from instructors is great. I would recommend this platform to anyone serious about improving their skills.",
      name: "James L.",
    },
  ]

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    comment: "",
  })

  const [error, setError] = useState("")

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setError("")
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const { name, email, comment } = formData

    if (!name || !email || !comment) {
      setError("All fields are required!")
      return
    }

    console.log("Form submitted:", formData)
    alert("Your question has been submitted successfully!")

    setFormData({ name: "", email: "", comment: "" })
  }

  return (
    <div className="bg-blue-100 overflow-x-hidden">
      {/* Hero Section */}
      <Navlanding/>
      <section className="bg-blue-100 text-gray-900 transition-colors duration-300">
        <div className="px-4 sm:px-6 lg:px-14 xl:px-32 lg:grid lg:grid-cols-2 lg:items-center lg:gap-16 xl:gap-24 min-h-[80vh] lg:min-h-screen py-12 lg:py-0">
          {/* Left side */}
          <div className="text-center lg:text-left mt-8 lg:mt-0">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[70px] font-bold text-[rgb(10,11,92)] uppercase leading-tight">
              Empower your mind
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl font-serif uppercase py-4">Explore Free Learning</p>
            <p className="text-base sm:text-lg md:text-xl lg:text-lg xl:text-xl font-medium md:max-w-[600px] lg:max-w-none mx-auto lg:mx-0">
              Start learning today and gain access to high-quality courses anytime, anywhere. Best of all, it's
              completely free! Don't miss this opportunity to expand your knowledge and achieve academic excellence.
            </p>
            <a
              href="#courses"
              className="mt-6 inline-block bg-[rgb(10,11,92)] text-white px-6 py-3 rounded-md text-lg font-bold hover:bg-blue-700 transition duration-300 shadow-md"
            >
              Start A Subject
            </a>
          </div>

          {/* Right side */}
          <div className="mt-10 lg:mt-0 flex justify-center items-center">
            <img
              src={firstSectionImage || "/placeholder.svg"} // Use the imported image
              alt="First Section"
              className="w-full h-auto max-w-[400px] sm:max-w-[500px] xl:max-w-[600px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <div className="bg-[rgb(10,11,92)] w-full py-10 px-4 sm:px-6 lg:px-10 relative mt-4 lg:-mt-20 z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-screen-xl mx-auto">
          {/* First grid item */}
          <div className="flex flex-col items-center text-center">
            <FaUser className="text-4xl text-white" />
            <div className="w-full">
              <p className="text-md text-white text-center mt-3">Over 100 million can take the course at once</p>
            </div>
          </div>

          {/* Second grid item */}
          <div className="flex flex-col items-center text-center">
            <FaEnvelope className="text-4xl text-white" />
            <div className="w-full">
              <p className="text-md text-white text-center mt-3">
                Unlock access to 10,000 free courses in English, Math, and General Studies!
              </p>
            </div>
          </div>

          {/* Third grid item */}
          <div className="flex flex-col items-center text-center">
            <FaPhone className="text-4xl text-white" />
            <div className="w-full">
              <p className="text-md text-white text-center mt-3">Free contact us anytime</p>
            </div>
          </div>

          {/* Fourth grid item */}
          <div className="flex flex-col items-center text-center">
            <FaChartLine className="text-4xl text-white" />
            <div className="w-full">
              <p className="text-md text-white text-center mt-3">Learn at your pace on any device</p>
            </div>
          </div>
        </div>
      </div>

      {/* Courses Section */}
      <div id="courses" className="w-full bg-blue-100 py-12 px-4 sm:px-6 lg:px-10">
        {/* Title */}
        <h1 className="text-center text-3xl lg:text-4xl text-[rgb(10,11,92)] mt-3 font-sans italic font-bold">
          <span className="underline decoration-3 decoration-[rgb(187,85,2)] underline-offset-8">Courses</span> Starting
          Soon
        </h1>

        {/* Grid Container */}
        <div className="max-w-7xl mx-auto py-12">
          {/* Popular Topics */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Modules.slice(0, 3).map((module, index) => (
              <div
                key={index}
                className="bg-blue-200 p-4 rounded-md shadow-md flex flex-col items-center transition-colors hover:shadow-lg"
              >
                <img
                  src={module.images || "/placeholder.svg"}
                  alt={module.title}
                  className="w-full h-48 object-contain bg-blue-100 mb-4 rounded"
                />
                <h1 className="text-sm text-gray-600 mb-1">Classes SSS 1-3</h1>
                <h3 className="text-lg font-semibold text-blue-900 mb-2">{module.title}</h3>
                <div className="flex justify-between w-full text-sm mb-2">
                  <p className="text-gray-600">Duration: {module.duration}</p>
                  <p className="text-gray-600">Learners: {module.learners}</p>
                </div>
                <div className="flex flex-col sm:flex-row justify-between gap-2 w-full mt-2">
                  <button className="bg-blue-500 text-white w-full sm:w-1/2 py-2 rounded-md hover:bg-orange-600 transition-colors text-sm">
                    More Info
                  </button>
                  <button className="bg-blue-500 text-white w-full sm:w-1/2 py-2 mt-2 sm:mt-0 rounded-md hover:bg-orange-600 transition-colors text-sm">
                    <Link to={"/login"}>Start Learning</Link>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="flex justify-center mt-12">
            <button className="bg-blue-900 text-white px-6 py-2 rounded-md hover:bg-orange-600 transition-colors text-sm md:text-base">
              Browse More Courses
            </button>
          </div>
        </div>
      </div>

      {/* Expert Knowledge Section */}
      <div className="py-12 border-t border-b border-[rgb(10,11,92)]">
        {/* Heading Section */}
        <div className="grid place-items-center text-center mx-auto px-4 sm:px-6 lg:px-16">
          <h1 className="font-sans text-xl sm:text-2xl lg:text-[22px] font-semibold text-[rgb(10,11,92)] max-w-lg">
            Gain Knowledge from Top Experts
          </h1>
          <p className="text-[rgb(10,11,92)] text-center mt-3 max-w-4xl lg:max-w-[1010px] px-4">
            Our online courses in English, Math, and General Studies are designed to build essential skills for
            real-world success. Developed in collaboration with experts, these courses align with industry needs, and
            upon completion, you'll receive a verified certificate recognized by top professionals.
          </p>
        </div>

        {/* Images Container */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-5 lg:gap-10 mt-8 px-4">
          {/* First Image */}
          <div className="flex justify-center w-full sm:w-auto">
            <img src="/src/assets/gainfirst.png" alt="Expert 1" className="w-full max-w-[300px] h-auto" />
          </div>

          {/* Second Image */}
          <div className="flex justify-center w-full sm:w-auto mt-5 sm:mt-0">
            <img src="/src/assets/gainthird.png" alt="Expert 2" className="w-full max-w-[300px] h-auto" />
          </div>

          {/* Third Image */}
          <div className="flex justify-center w-full sm:w-auto mt-5 sm:mt-0">
            <img src="/src/assets/gainfourth.png" alt="Expert 3" className="w-full max-w-[300px] h-auto" />
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="px-4 sm:px-6 lg:px-10 py-12">
        {/* Section Title */}
        <h1 className="text-center text-2xl lg:text-4xl font-semibold text-[rgb(10,11,92)]">How It Operates</h1>

        {/* Steps Container */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 lg:gap-12 mt-6 lg:mt-14">
          {steps.map((step, index) => (
            <React.Fragment key={step.id}>
              {/* Step Card */}
              <div className="bg-[rgb(133,168,255)] w-full max-w-[300px] h-[220px] px-6 py-6 lg:py-8 rounded-tl-2xl rounded-br-2xl text-center shadow-md flex flex-col items-center justify-center transition-transform transform hover:scale-105 duration-300">
                <step.icon className="text-4xl text-yellow-500 mx-auto" />
                <h1 className="text-white pb-3 lg:pb-5 tracking-widest text-[21px] font-semibold">{step.title}</h1>
                <p className="text-white text-[16px]">{step.description}</p>
              </div>

              {/* Conditionally render vector between steps */}
              {index < steps.length - 1 && (
                <div className="flex justify-center items-center rotate-90 md:rotate-0">
                  <img
                    src="/src/assets/vector.png"
                    alt="Vector"
                    className="w-12 h-12 lg:w-16 lg:h-16 object-contain"
                  />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-white flex flex-col lg:flex-row justify-between items-center px-4 sm:px-6 lg:px-20 py-8">
        {/* Left Section  */}
        <div className="w-full lg:w-[75%]">
          <h1 className="font-semibold tracking-widest text-lg lg:text-3xl text-[rgb(10,11,92)]">
            Words From Students
          </h1>
          <p className="mt-3 text-base sm:text-lg">{testimonials[currentIndex].text}</p>
          <p className="mt-2 font-semibold text-[rgb(10,11,92)]">{testimonials[currentIndex].name}</p>

          {/* Navigation Icons Below Text */}
          <div className="flex gap-4 mt-4">
            <button
              onClick={handlePrev}
              className="py-2 sm:py-3 px-4 sm:px-6 rounded bg-[rgb(10,11,92)] hover:bg-gray-300 transition"
              aria-label="Previous testimonial"
            >
              <FaChevronLeft className="text-white text-lg" />
            </button>
            <button
              onClick={handleNext}
              className="py-2 sm:py-3 px-4 sm:px-6 rounded bg-[rgb(10,11,92)] hover:bg-gray-300 transition"
              aria-label="Next testimonial"
            >
              <FaChevronRight className="text-white text-lg" />
            </button>
          </div>
        </div>

        <div className="hidden lg:flex lg:w-[25%] justify-center mt-6 lg:mt-0">
          <img src="/src/assets/words.png" alt="Student Testimonials" className="h-auto w-full" />
        </div>
      </div>

      {/* Join Section */}
      <div className="pt-12 lg:pt-24 px-4 sm:px-6 lg:px-10">
        {/* Title */}
        <div className="text-center mb-12 lg:mb-20">
          <h1 className="text-xl sm:text-2xl font-semibold">Join BrainThrust E-learning today</h1>
        </div>

        {/* Image Section */}
        <div className="relative w-full pb-20 sm:pb-40">
          <div className="flex flex-col items-center lg:items-start lg:flex-row justify-center w-full gap-6">
            {/* First Image (Main Box) */}
            <div
              className="relative bg-yellow-500 w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[550px] 
                  h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] rounded-2xl 
                  flex justify-center items-center shadow-lg"
            >
              <img
                src="/src/assets/joinfirs.png"
                className="w-full h-full object-contain"
                alt="First Image"
              />
            </div>

            {/* Second Div (Top-Right) */}
            <div
              className="bg-[rgb(133,168,255)] w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[260px] 
                  h-[200px] sm:h-[200px] md:h-[200px] lg:h-[160px] 
                  rounded-lg grid place-items-center shadow-lg 
                  mt-6 lg:mt-0 lg:absolute lg:-top-10 lg:right-1/4"
            >
              <img
                src="/src/assets/joinsec.png"
                className="w-[90%] h-[90%] object-contain"
                alt="Second Image"
              />
            </div>

            {/* Third Div (Bottom-Left) */}
            <div
              className="bg-[rgb(10,11,92)] w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[300px] 
                  h-[200px] sm:h-[200px] md:h-[200px] lg:h-[220px] 
                  rounded-lg flex flex-col items-center justify-center shadow-lg 
                  mt-6 lg:mt-0 lg:absolute lg:bottom-0 lg:left-1/4 gap-2"
            >
              <p className="text-white font-semibold text-xl lg:text-2xl">Total Registration</p>
              <p className="text-white font-semibold text-xl lg:text-2xl">5320</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12 lg:mt-32 mb-12">
          <h1 className="font-bold text-2xl sm:text-3xl lg:text-[35px] text-[rgb(10,11,92)] max-w-2xl mx-auto tracking-wider">
            Ready to excel and reach new heights in your studies?
          </h1>
          <div className="flex justify-center items-center mt-8 lg:mt-16">
            <div className="bg-[rgb(10,11,92)] rounded-xl p-3 lg:px-5 lg:py-4 hover:bg-blue-800 transition-colors">
              <button className="text-white text-lg font-semibold"><Link to={"/signup"}>
              Join for free
              </Link></button>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <div>
          <h1 className="underline underline-offset-3 decoration-3 font-bold text-2xl sm:text-3xl text-[rgb(10,11,92)] decoration-[rgb(243,203,138)]">
            Question
          </h1>
          <p className="text-[rgb(10,11,92)] pt-2 text-sm sm:text-lg font-bold">
            Got a question? Whether it's English, Math, or General Studies, we're happy to assist you in finding the
            right answers!
          </p>
        </div>

        {/* Main Content Section */}
        <div className="flex flex-col lg:flex-row gap-8 mt-6 lg:mt-14 items-stretch">
          {/* Left Section - Image */}
          <div className="lg:w-1/2 flex items-center justify-center">
            <img
              src="/src/assets/contactusimage.jpg"
              alt="Contact Us"
              className="w-full max-w-full h-auto lg:max-h-[400px] md:max-h-[350px] sm:max-h-[300px] object-cover rounded-lg"
            />
          </div>

          {/* Right Section - Form */}
          <div className="lg:w-1/2 w-full text-[rgb(10,11,92)] flex items-center">
            <form onSubmit={handleSubmit} className="w-full flex flex-col justify-center">
              {/* Name Input */}
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full border-b-3 border-[rgb(10,11,92)] outline-none px-4 py-4 sm:py-6 bg-[rgb(183,205,255)]"
              />

              {/* Email Input */}
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email address"
                required
                className="w-full border-b-3 mt-3 border-[rgb(10,11,92)] outline-none px-4 py-4 sm:py-6 bg-[rgb(183,205,255)]"
              />

              {/* Comment Input (Textarea) */}
              <textarea
                name="comment"
                value={formData.comment}
                onChange={handleChange}
                placeholder="Your Comment"
                required
                className="w-full border-b-3 mt-3 border-[rgb(10,11,92)] outline-none px-4 py-6 sm:py-10 bg-[rgb(183,205,255)] h-24 sm:h-28 resize-none"
              />

              {/* Error Message Display */}
              {error && <p className="text-red-500 mt-2 font-medium">{error}</p>}

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full border-b-3 mt-5 lg:mt-9 border-[rgb(10,11,92)] rounded px-4 py-4 sm:py-5 bg-[rgb(10,11,92)] text-white font-semibold hover:bg-blue-800 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Footer Section */}
        <div className="text-center mt-16">
          <h1 className="font-bold mt-12 mb-8 text-[rgb(10,11,92)] text-lg sm:text-2xl tracking-widest">
            Best Supporters of BrainThrust E-learning
          </h1>

          {/* Grid for Sponsor Images */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 lg:gap-12 mt-4 flex-wrap">
            {/* First Image */}
            <div className="flex items-center justify-center">
              <img
                src="/src/assets/sidmach.png"
                alt="Sidmach image"
                className="w-40 sm:w-48 h-auto object-contain"
              />
            </div>

            {/* Second Image */}
            <div className="flex items-center justify-center">
              <img
                src="/src/assets/logWB.png"
                alt="World Bank"
                className="w-40 sm:w-48 h-auto object-contain"
              />
            </div>

            {/* Third Image */}
            <div className="flex items-center justify-center mb-8">
              <img
                src="/src/assets/fedMinNobg.png"
                alt="Coat of Arms"
                className="w-40 sm:w-48 h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
      <Footerlanding/>
      <FooterLight/>
    </div>
  )
}

export default HomePage