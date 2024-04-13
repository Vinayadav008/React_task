import React from 'react'
import logo from '../images/logo.png'

function Footer() {
  return (
      <div className="bg-secondary text-white">
        {/* logo */}
        <div className="flex-shrink-0">
          <a href="#" className="font-bold text-xl text-gray-800">
            <img src={logo} alt="logo" className="relative flex  p-2 w-24 mt-2" />
          </a>
        </div>
      </div>
  )
}

export default Footer
