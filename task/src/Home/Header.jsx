import React from 'react'
import logo from '../images/logo.png'
function Header() {
  return (
    <div>
      <div className="bg-secondary text-white">
        <div className='flex m-1 '>
          <div>
            <img src={logo} alt="logo" />
          </div>
          <div className=''>
            <a href="#">Inspiration</a>
            <a href="#">Find Work</a>
            <a href="#">Learn Design</a>
            <a href="#">Go Pro</a>
            <a href="#">Hire Designers</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
