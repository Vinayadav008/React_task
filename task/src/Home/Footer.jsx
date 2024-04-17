import React from 'react'
// import logo from '../images/logo.png'
import logo1 from '../images/logo1.png'
import icon from '../images/dribbble_icon.jpg'

function Footer() {
  return (
    
    
      // <footer className="bg-white"> 
    <div className="bg-light_gray text-base ">
          <div className="text-sm  mx-14 ">

            
{/* -------------------Left Area----------------------- */}
            <div className="flex ">
              <div className="w-full md:w-1/4 text-center md:text-left">

                {/* logo */}
                <a href="#" className="inline-block mb-4">
                <img src={logo1} alt="logo" className="relative flex  p-2 w-24 mt-2" />
                </a>


                {/* paragraph */}
                <p className=" pb-6">Dribbble is the world's leading community for creatives to share,
                  grows, and get hired.</p>
                  

                  {/* Social media icon */}
                <div className="justify-between flex">
                  <svg className='w-6' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 8C119.3 8 8 119.3 8 256s111.3 248 248 248 248-111.3 248-248S392.7 8 256 8zm164 114.4c29.5 36 47.4 82 47.8 132-7-1.5-77-15.7-147.5-6.8-5.8-14-11.2-26.4-18.6-41.6 78.3-32 113.8-77.5 118.3-83.5zM396.4 97.9c-3.8 5.4-35.7 48.3-111 76.5-34.7-63.8-73.2-116.2-79-124 67.2-16.2 138 1.3 190.1 47.5zm-230.5-33.3c5.6 7.7 43.4 60.1 78.5 122.5-99.1 26.3-186.4 25.9-195.8 25.8C62.4 147.2 106.7 92.6 165.9 64.6zM44.2 256.3c0-2.2 0-4.3 .1-6.5 9.3 .2 111.9 1.5 217.7-30.1 6.1 11.9 11.9 23.9 17.2 35.9-76.6 21.6-146.2 83.5-180.5 142.3C64.8 360.4 44.2 310.7 44.2 256.3zm81.8 167.1c22.1-45.2 82.2-103.6 167.6-132.8 29.7 77.3 42 142.1 45.2 160.6-68.1 29-150 21.1-212.8-27.9zm248.4 8.5c-2.2-12.9-13.4-74.9-41.2-151 66.4-10.6 124.7 6.8 131.9 9.1-9.4 58.9-43.3 109.8-90.8 142z"/></svg>
                  <svg className='w-6' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z"/></svg>
                  <svg className='w-6' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64h98.2V334.2H109.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H255V480H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"/></svg>
                  <svg className='w-6' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
                  <svg className='w-6' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M496 256c0 137-111 248-248 248-25.6 0-50.2-3.9-73.4-11.1 10.1-16.5 25.2-43.5 30.8-65 3-11.6 15.4-59 15.4-59 8.1 15.4 31.7 28.5 56.8 28.5 74.8 0 128.7-68.8 128.7-154.3 0-81.9-66.9-143.2-152.9-143.2-107 0-163.9 71.8-163.9 150.1 0 36.4 19.4 81.7 50.3 96.1 4.7 2.2 7.2 1.2 8.3-3.3 .8-3.4 5-20.3 6.9-28.1 .6-2.5 .3-4.7-1.7-7.1-10.1-12.5-18.3-35.3-18.3-56.6 0-54.7 41.4-107.6 112-107.6 60.9 0 103.6 41.5 103.6 100.9 0 67.1-33.9 113.6-78 113.6-24.3 0-42.6-20.1-36.7-44.8 7-29.5 20.5-61.3 20.5-82.6 0-19-10.2-34.9-31.4-34.9-24.9 0-44.9 25.7-44.9 60.2 0 22 7.4 36.8 7.4 36.8s-24.5 103.8-29 123.2c-5 21.4-3 51.6-.9 71.2C65.4 450.9 0 361.1 0 256 0 119 111 8 248 8s248 111 248 248z"/></svg>
                </div>
              </div>

              
{/* -------------------Right Area----------------------- */}
              <div className="flex mx-11 p-4">
                <div className="">
                  <h3 className="text-base font-semibold mb-2">For Designers</h3>
                  <ul className=" text-gray-500">
                    <li className="py-2">Go Pro!</li>
                    <li className="py-2">Explore design work</li>
                    <li className="py-2">Design blog</li>
                    <li className="py-2">Overtime podcast</li>
                    <li className="py-2">Playoffs</li>
                    <li className="py-2">Weekly Warm-Up</li>
                    <li className="py-2">Refer a Friend</li>
                    <li className="py-2">Code of conduct</li>
                  </ul>
                </div>
                <div className="">
                  <h3 className=" text-base font-semibold mb-2 ">Hire designers</h3>
                  <ul className="list-unstyled text-gray-500  ">
                    <li className="py-2">Post a job opening</li>
                    <li className="py-2">Post a freelance project</li>
                    <li className="py-2">Search for designers</li>
                    <li className="font-bold my-3">Brands</li>
                    <li className="py-2">Advertise with us</li>
                  </ul>
                </div>
                <div className="">
                  <h3 className="text-base text-gray-900 font-semibold mb-2">Company</h3>
                  <ul className="list-unstyled text-gray-500">
                    <li className="py-2">About</li>
                    <li className="py-2">Careers</li>
                    <li className="py-2">Support</li>
                    <li className="py-2">Media kit</li>
                    <li className="py-2">Testimonials</li>
                    <li className="py-2">API</li>
                    <li className="py-2">Terams os services</li>
                    <li className="py-2">Privacy policy</li>
                    <li className="py-2">Cookie policy</li>
                  </ul>
                </div>
                <div className=" ">
                  <h3 className="text-base text-gray-900 font-semibold mb-2">Directories </h3>
                  <ul className="list-unstyled text-gray-500">
                    <li className="py-2">Design jobs</li>
                    <li className="py-2">Designers for hire</li>
                    <li className="py-2">Freelance designers</li>
                    <li className="py-2">Tags</li>
                    <li className="py-2">Places</li>
                    <li className="font-bold my-3">Design assests</li>
                    <li className="py-2">Dribbble Marketplace</li>
                    <li className="py-2">Creative Market</li>
                    <li className="py-2">Frontspring</li>
                    <li className="py-2">Font Squirrel</li>
                  </ul>
                </div>
                <div>
                  <h3 className=" text-base text-gray-900 font-semibold mb-2"> Design Resources</h3>
                  <ul>
                    <li className="py-2">Freelencing</li>
                    <li className="py-2">Design Hiring</li>
                    <li className="py-2">Design Portfolio</li>
                    <li className="py-2">Design Education</li>
                    <li className="py-2">Creative Process</li>
                    <li className="py-2">Design Industry Trends</li>
                  </ul>
                </div>
              </div>
            </div>


            {/* horizontal line */}
            <hr className=" my-9 text-secondary" />


            {/* copyright */}
            <div className="flex my-12">
              <p className=" mr-32 text-secondary">
                &copy; 2023 Dribbble. All rights reserved.
              </p>


              {/* Text */}
              <p className=" ml-96 flex mb-9 text-secondary">
                <b className="text-black ">20,501,853</b>&nbsp; shots dribbbled &nbsp;
                <img src={icon} alt="logo" className="w-5" />
              </p>
            </div>
          </div>
        </div>

        // </footer>
      )
}

      export default Footer
