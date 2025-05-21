"use client"

import { useState } from "react"
import { FaArrowLeft } from "react-icons/fa"
import { Link } from "react-router-dom"
import Nav from "../../components/Nav"
import Footerlanding from "../../components/footerlanding"
import FooterLight from "../../components/footer-light"

const Donation = () => {
  const [selectedAmount, setSelectedAmount] = useState(null)
  const [showPaymentChannel, setShowPaymentChannel] = useState(false)

  const handleAmountClick = (amount) => {
    setSelectedAmount(amount)
  }

  const handleContinueClick = () => {
    if (selectedAmount || selectedAmount === 0) {
      setShowPaymentChannel(true)
    } else {
      alert("Please select an amount or enter a custom amount.")
    }
  }

  return (
    <>

      <div className="bg-blue-200">
      <Nav />
      <main className="bg-blue-100 min-h-screen">
        {/* Donation Form Section */}
        <section className="relative px-4 py-12 md:py-16 lg:py-20">
          {/* Back button */}
          <div className="absolute top-4 left-4 sm:left-8 md:left-12 lg:left-16">
            <Link to="#" className="inline-flex items-center text-blue-950 hover:text-blue-800 transition-colors">
              <FaArrowLeft className="mr-2" />
              <span className="text-sm md:text-base">Back</span>
            </Link>
          </div>

          <div className="container mx-auto mt-8">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
              {/* Donation form */}
              <div className="bg-white p-5 md:p-8 rounded-lg shadow-md w-full max-w-md flex flex-col justify-around space-y-5">
                <div className="flex flex-col md:flex-row items-center gap-2 text-center md:text-left">
                  <img src="/src/assets/money-bag.png" alt="Money Bag" className="w-6 h-6" />
                  <h2 className="text-xl font-bold">Make an Impact Today!</h2>
                </div>

                <div className="text-center mb-2 md:mb-5">
                  <h3 className="text-lg font-semibold">Choose an amount to donate</h3>
                </div>

                <div className="flex flex-col items-center space-y-4">
                  {/* Donation buttons */}
                  <div className="grid grid-cols-2 gap-3 md:gap-4 w-full">
                    {[10000, 20000, 50000, 100000].map((amount) => (
                      <button
                        key={amount}
                        onClick={() => handleAmountClick(amount)}
                        className={`p-2 md:p-3 rounded-md text-center text-sm md:text-base transition-colors ${
                          selectedAmount === amount
                            ? "bg-blue-700 text-white"
                            : "bg-blue-300 text-black hover:bg-blue-400"
                        }`}
                      >
                        NGN {amount.toLocaleString()}
                      </button>
                    ))}
                  </div>

                  {/* Custom donation input */}
                  <div className="flex items-center gap-2 w-full max-w-xs">
                    <div className="bg-blue-300 text-black p-2 md:p-3 rounded-md text-sm md:text-base">NGN</div>
                    <input
                      type="number"
                      placeholder="Others"
                      className="bg-blue-300 text-blue-950 p-2 md:p-3 rounded-md flex-1 text-sm md:text-base"
                      min="10000"
                      onChange={(e) => handleAmountClick(Number(e.target.value))}
                    />
                  </div>
                </div>

                {/* Continue button */}
                <div className="text-center mt-3 md:mt-5">
                  <button
                    onClick={handleContinueClick}
                    className="bg-blue-500 text-white p-2 md:p-3 rounded-md hover:bg-blue-600 transition-colors cursor-pointer w-full max-w-xs text-sm md:text-base"
                  >
                    Continue
                  </button>
                </div>

                {/* Payment channel */}
                {showPaymentChannel && (
                  <div className="mt-3 md:mt-5 text-center">
                    <h3 className="text-lg font-semibold mb-3">Choose a Payment Channel</h3>
                    <div className="flex flex-wrap justify-center gap-2 md:gap-4">
                      <button className="bg-green-500 text-white p-2 md:p-3 rounded-md hover:bg-green-600 transition-colors text-sm md:text-base">
                        Pay with Card
                      </button>
                      <button className="bg-yellow-500 text-white p-2 md:p-3 rounded-md hover:bg-yellow-600 transition-colors text-sm md:text-base">
                        Pay with Bank Transfer
                      </button>
                      <button className="bg-gray-500 text-white p-2 md:p-3 rounded-md hover:bg-gray-600 transition-colors text-sm md:text-base">
                        Pay with PayPal
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Textside section */}
              <div className="textside flex flex-col space-y-4 p-4 md:p-5 max-w-md text-center lg:text-left">
                <h1 className="text-xl md:text-2xl lg:text-3xl font-bold font-serif">Help Us Do More</h1>
                <p className="text-base md:text-lg font-serif">
                  BrainThrust is committed to providing free education for everyone, but we need your support to keep it
                  going. As a nonprofit, we rely on people like you. If each reader contributes just $1 a month, we can
                  continue offering quality learning resources for years. Join us in making education free forever!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-8 md:py-12 px-4 md:px-8">
          <div className="container mx-auto">
            <div className="flex flex-col justify-center items-center space-y-4 md:space-y-6 max-w-2xl mx-auto text-center">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold font-serif">Double Your Impact!</h2>

              <button className="bg-blue-800 text-white px-6 py-2 md:px-8 md:py-3 rounded-md hover:bg-blue-700 active:bg-blue-900 transition-colors cursor-pointer text-sm md:text-base font-medium">
                Donate Now
              </button>

              <p className="text-xs md:text-sm text-gray-700 max-w-md">
                By donating, you agree to our <Link className="text-orange-400 hover:underline">Terms of Service</Link>{" "}
                and <Link className="text-orange-400 hover:underline">Privacy Policy</Link>
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footerlanding/>
      <FooterLight />
      </div>
    </>
  )
}

export default Donation

