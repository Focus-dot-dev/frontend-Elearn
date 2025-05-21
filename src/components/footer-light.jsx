import React from 'react'
import { Link } from 'react-router-dom'

const FooterLight = () => {
  return (
    <>
        <div className='bg-blue-300  p-5 text-black p-2 text-center text-sm flex flex-col md:flex-row justify-center md:justify-around items-center gap-8'>
            <h3>
                Terms Of Service | Privacy Policy | Site Map | Contact Us | <Link> Admin </Link>
            </h3>
            <h3>
                © 2025 BrainThrust E-learning by SidMach Group 7.  All Rights Reserved.
            </h3>
        </div>
    </>
  )
}

export default FooterLight