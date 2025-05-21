import { FaFacebookSquare } from "react-icons/fa"
import { FaSquareInstagram } from "react-icons/fa6"
import { IoLogoLinkedin } from "react-icons/io"
import { RiTwitterXFill } from "react-icons/ri"
import { Link } from "react-router-dom"

const Footerlanding = () => {
  return (
    <>
      <footer className="bg-blue-900 text-white p-5">
        <div className="flex flex-col md:flex-row justify-center md:justify-around items-center gap-8">
          {/* Left section - Text */}
          <div className="max-w-xs md:max-w-md text-center md:text-left">
            <h3 className="text-sm md:text-base">
              Our goal is to offer free, high-quality education to everyone, everywhere. BrainThrust is a nonprofit
              organization support us by <Link className="text-orange-300 hover:underline">Donating</Link> today!.
            </h3>
          </div>

          {/* Right section - Logo, contact, social */}
          <div className="flex flex-col items-center space-y-4">
            <img src="/src/assets/brain.png" alt="BrainThrust Logo" className="w-16 md:w-24 lg:w-28" />
            <h1 className="text-xl md:text-2xl text-yellow-400 font-serif">BrainThrust E-learning</h1>

            {/* Contact information */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-2 md:gap-4 text-xs md:text-sm">
              <Link
                to="https://wa.me/2348061141495"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-200"
              >
                <small>+(234)806-114-1495</small>
              </Link>
              <span className="hidden md:inline">•</span>
              <small>support@BrainThrust.com</small>
            </div>

            {/* Social media icons */}
            <div className="flex gap-3 md:gap-4">
              <Link to="" aria-label="Facebook">
                <FaFacebookSquare color="blue" size={25} className="hover:opacity-80" />
              </Link>
              <Link to="" aria-label="Instagram">
                <FaSquareInstagram color="maroon" size={25} className="hover:opacity-80" />
              </Link>
              <Link to="" aria-label="Twitter">
                <RiTwitterXFill color="black" size={25} className="hover:opacity-80" />
              </Link>
              <Link to="" aria-label="LinkedIn">
                <IoLogoLinkedin color="blue" size={25} className="hover:opacity-80" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footerlanding


