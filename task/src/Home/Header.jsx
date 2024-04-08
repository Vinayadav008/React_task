import React, { useState } from 'react'
import logo from '../images/logo.png'
import profile from '../images/profile.png'
import exp from '../Auth/Profile'
function Header() {
  console.log(exp, "This is exp");
  // const profile = `data:image/png;base64,${exp}`;
  const [nav, setNav] = useState("true");
  return (

    // Header
    // <header className="bg-white">
    <div className=" px-2 bg-white shadow-sm fixed z-50 w-full sm:px-8 ">
      <div className=" flex flex-wrap items-center justify-between py-4 gap-2 ">

        
{/* -------------------Left Area----------------------- */}
        <div className="flex items-center  justify-start gap-4">

          {/* logo */}
          <div className="flex-shrink-0">
            <a href="#" className="font-bold text-xl text-gray">
              <img src={logo} alt="logo" className="w-20" />
            </a>
          </div>

          {/* Navbar */}
          <div className='block lg:hidden w-4'>
            <svg onClick={() => setNav(!nav)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" /></svg>
          </div>
          <div className={` ${nav ? 'hidden' : 'block'} lg:block`}>
            <div className="flex flex-col lg:flex-row fixed lg:static w-full top-24 sm:top-16 left-0 bg-white gap-6 p-4 lg:p-0">
              <a href="#" className="text-gray hover:text-secondary font-medium text-md"
              >
                Inspiration
              </a>
              <a href="#" className="text-gray hover:text-secondary font-medium text-md"
              >
                Find Work
              </a>
              <a href="#" className="text-gray hover:text-secondary font-medium text-md"
              >
                Learn Design
              </a>
              <a href="#" className="text-gray hover:text-secondary font-medium text-md"
              >
                Go Pro
              </a>
              <a href="#" className="text-gray hover:text-secondary font-medium text-md"
              >
                Hire Designers
              </a>
            </div>
          </div>
        </div>

{/* -------------------Right Area----------------------- */}
        <div className="flex gap-2 items-center justify-end w-full sm:w-auto">

         {/* Search bar  */}
          <div className="px-2 rounded-md flex gap-2 bg-light_gray h-8">
            <svg className='w-4 text-secondary' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill='gray'><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" /></svg>
            <input type="text" name="search" id="search" placeholder="Search"
              className="w-24  rounded-md leading-5 outline-none bg-light_gray" />
          </div>


          {/* icon */}
          <div class="h-4 ">
          <svg className='w-6' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill='gray'><path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/></svg>
          <svg className='w-[0.9em] relative left-4 bottom-2' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill='gray'><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"/></svg>
          </div>

          {/* profile */}
          <div className="rounded-full">
              <img src={profile} className="h-10 w-10 rounded-full" alt="" />
          </div>


          {/* upload button */}
          <div className="">
            <button type="button"
              className="bg-primary py-2 px-4 rounded-md text-sm font-medium text-white">
              Upload
            </button>
          </div>
        </div>
      </div>
    </div>
    // </header>
  )
}

export default Header
