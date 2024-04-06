import React from 'react'

function Header() {
  return (
    <div>
      <div className="bg-secondary text-white">
        <div className='flex m-1 '>
          <div>
            <img src="./images/logo1.png" alt="logo" />
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
