"use client"

import { useState } from "react"
import { IoLogoWhatsapp } from "react-icons/io"
import Navlanding from "../../components/Navlanding"
import Footerlanding from "../../components/footerlanding"
import FooterLight from "../../components/footer-light"

const CombinedHeroContact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    // try {
    //   const response = await fetch("https://your-backend-api.com/contact", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(formData),
    //   })

    //   if (response.ok) {
    //     alert("Your message has been sent successfully!")
    //     setFormData({ name: "", email: "", message: "" }) // Reset form
    //   } else {
    //     alert("Failed to send your message. Please try again.")
    //   }
    // } catch (error) {
    //   console.error("Error submitting the form:", error)
    //   alert("Oga relax o, e no go work, try again later")
    // }
  }

  return (
    <>
      {/* Hero Section */}
      <section className="bg-blue-100 w-full">
        <Navlanding/>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Hero Content */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="w-full md:w-1/2 flex justify-center md:justify-start">
              <img
                className="h-[200px] sm:h-[250px] md:h-[300px] lg:h-[400px] object-contain"
                src="https://res.cloudinary.com/ds2swdt9n/image/upload/v1739877968/Group_13_bqucid.png"
                alt="Hero image"
              />
            </div>

            <div className="w-full md:w-1/2 text-center md:text-left">
              <h1 className="text-2xl md:text-3xl font-bold text-[rgba(10,11,92,1)]">Contact Us</h1>
              <p className="mt-4 text-sm sm:text-base leading-relaxed">
                We'd love to hear from you! Whether you have a question, need assistance, or want to provide feedback,
                our team is here to help.
              </p>
            </div>
          </div>

          {/* Contact Section */}
          <div className="mt-10 p-4 sm:p-6 bg-blue-600 rounded-md text-white">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Contact Info */}
              <div className="flex flex-col justify-center space-y-4 w-full lg:w-1/3">
                <div>
                  <strong className="block text-lg mb-1">Phone:</strong>
                  <a href="tel:+2348061141495" className="hover:underline">
                    +2348061141495
                  </a>
                </div>
                <div>
                  <strong className="block text-lg mb-1">Email:</strong>
                  <a href="mailto:contact@example.com" className="hover:underline">
                    contact@example.com
                  </a>
                </div>
                <div className="pt-2">
                  <a
                    href="https://wa.me/2348061141495"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-white text-black rounded-md py-2 px-4 hover:bg-gray-100 transition-colors"
                  >
                    <IoLogoWhatsapp color="green" size={25} />
                    <span>WhatsApp Us</span>
                  </a>
                </div>
              </div>

              {/* Contact Form */}
              <form className="w-full  text-white lg:w-2/3" onSubmit={handleSubmit}>
                <div className="flex flex-col sm:flex-row gap-4 mb-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="border p-3 rounded w-full text-white"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="border p-3 rounded w-full text-white"
                    required
                  />
                </div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  className="border p-3 rounded w-full resize-none text-white"
                  rows="5"
                  required
                ></textarea>
                <button
                  type="submit"
                  className="bg-[rgba(10,11,92,1)] text-white px-6 py-3 mt-4 rounded cursor-pointer hover:bg-blue-400 hover:text-black transition-colors w-full sm:w-auto"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
          <div className="mt-10 p-4 flex flex-col items-center text-center sm:p-6 bg-blue-100 rounded-md text-black">
            <h1 className="text-2xl md:text-3xl font-bold text-[rgba(10,11,92,1)] mt-10">
              General Inquiries
            </h1>
            <p className="text-sm mb-12 sm:text-base leading-relaxed">
              For any general inquiries, please reach out to us at our email address or call us directly. We are here to assist you.
            </p>
          </div>
        </div>
        <Footerlanding/>
        <FooterLight/>
      </section>
    </>
  )
}

export default CombinedHeroContact

