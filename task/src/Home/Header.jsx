import React from 'react'
import logo from '../images/logo.png'
import profile from '../images/profile.png'
function Header() {
  return (

    // Header
    <header className="bg-white top-0">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 border">
        <div className="relative flex items-center justify-between h-16 ">
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">

            {/* logo */}
            <div className="flex-shrink-0">
              <a href="#" className="font-bold text-xl text-gray-800">
                <img src={logo} alt="logo" className="relative flex  w-20 mt-2" />
              </a>
            </div>

            {/* Navbar */}
            <div className=" sm:block sm:ml-6">
              <div className="flex space-x-2">
                <a href="#" className="text-gray-800 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Inspiration
                </a>
                <a href="#" className="text-gray-800 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Find Work
                </a>
                <a href="#" className="text-gray-800 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Learn Design
                </a>
                <a href="#" className="text-gray-800 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Go Pro
                </a>
                <a href="#" className="text-gray-800 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Hire Designers
                </a>
              </div>
            </div>
          </div>


          {/* Search baar */}
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="flex">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"
                    />
                  </svg>
                </div>
                <input type="text" name="search" id="search" placeholder="Search"
                  className="block w-32 pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-gray-200 shadow-sm " />
              </div>


              {/* icon */}
              <div class="flex justify-center">
                <div class="px-3 ">
                  <div class="absolute  flex items-center justify-center">
                    <div class="text-xl">O</div>
                  </div>
                </div>
              </div>

              {/* profile */}
              <div className="ml-3 relative">
                <button
                  type="button"
                  className="bg-white border-2 rounded-full flex text-sm">
                  <img src={profile} className="h-8 w-8 rounded-full"  alt="" />
                </button>
              </div>


              {/* upload button */}
              <div className="ml-3 relative">
                <button type="button"
                  className="bg-pink-600 py-2 px-4 rounded-md text-sm font-medium text-white">
                  Upload
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
