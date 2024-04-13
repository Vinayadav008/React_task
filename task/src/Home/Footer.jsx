import React from 'react'
// import logo from '../images/logo.png'
import logo1 from '../images/logo1.png'
import icon from '../images/dribbble_icon.jpg'

function Footer() {
  return (
    // <div className="bg-secondary text-white">
    //   {/* logo */}
    //   <div className="flex-shrink-0">
    //     <a href="#" className="font-bold text-xl text-gray-800">
    //       <img src={logo} alt="logo" className="relative flex  p-2 w-24 mt-2" />
    //     </a>
    //   </div>
    // </div>

    <div className="bg-gray-100 text-base ">
          <div className="text-sm  mx-14 ">
            <div className="flex  ">
              <div className="w-full md:w-1/4 text-center md:text-left">
                <a href="#" className="inline-block mb-4">
                <img src={logo1} alt="logo" className="relative flex  p-2 w-24 mt-2" />
                </a>
                <p className="text-gray-800 pb-6">Dribbble is the world's leading community for creatives to share,
                  grows, and get hired.</p>

                <div className="justify-between text-lg">
                  <i className=" mx-1 fa fa-dribbble" aria-hidden="true"></i>
                  <i className=" mx-1 fa fa-twitter" aria-hidden="true"></i>
                  <i className=" mx-1 fa fa-facebook-square" aria-hidden="true"></i>
                  <i className=" mx-1 fa fa-instagram" aria-hidden="true"></i>
                  <i className=" mx-1 fa fa-pinterest" aria-hidden="true"></i>
                </div>
              </div>
              <div className="flex mx-11 p-4">
                <div className="">
                  <h3 className="text-base font-semibold mb-2">For Designers</h3>
                  <ul className=" text-gray-500">
                    <li className="text-gray-700 py-2">Go Pro!</li>
                    <li className="text-gray-700 py-2">Explore design work</li>
                    <li className="text-gray-900 py-2">Design blog</li>
                    <li className="text-gray-700 py-2">Overtime podcast</li>
                    <li className="text-gray-700 py-2">Playoffs</li>
                    <li className="text-gray-700 py-2">Weekly Warm-Up</li>
                    <li className="text-gray-700 py-2">Refer a Friend</li>
                    <li className="text-gray-700 py-2">Code of conduct</li>
                  </ul>
                </div>
                <div className="">
                  <h3 className=" text-base font-semibold mb-2 ">Hire designers</h3>
                  <ul className="list-unstyled text-gray-500  ">
                    <li className="text-gray-700 py-2">Post a job opening</li>
                    <li className="text-gray-700 py-2">Post a freelance project</li>
                    <li className="text-gray-700 py-2">Search for designers</li>
                    <li className="text-gray-900 font-bold my-3">Brands</li>
                    <li className="text-gray-700 py-2">Advertise with us</li>
                  </ul>
                </div>
                <div className="">
                  <h3 className="text-base text-gray-900 font-semibold mb-2">Company</h3>
                  <ul className="list-unstyled text-gray-500">
                    <li className="text-gray-700 py-2">About</li>
                    <li className="text-gray-700 py-2">Careers</li>
                    <li className="text-gray-700 py-2">Support</li>
                    <li className="text-gray-700 py-2">Media kit</li>
                    <li className="text-gray-700 py-2">Testimonials</li>
                    <li className="text-gray-700 py-2">API</li>
                    <li className="text-gray-700 py-2">Terams os services</li>
                    <li className="text-gray-700 py-2">Privacy policy</li>
                    <li className="text-gray-700 py-2">Cookie policy</li>
                  </ul>
                </div>
                <div className=" ">
                  <h3 className="text-base text-gray-900 font-semibold mb-2">Directories </h3>
                  <ul className="list-unstyled text-gray-500">
                    <li className="text-gray-700 py-2">Design jobs</li>
                    <li className="text-gray-700 py-2">Designers for hire</li>
                    <li className="text-gray-700 py-2">Freelance designers</li>
                    <li className="text-gray-700 py-2">Tags</li>
                    <li className="text-gray-700 py-2">Places</li>
                    <li className="text-gray-900 font-bold my-3">Design assests</li>
                    <li className="text-gray-700 py-2">Dribbble Marketplace</li>
                    <li className="text-gray-700 py-2">Creative Market</li>
                    <li className="text-gray-700 py-2">Frontspring</li>
                    <li className="text-gray-700 py-2">Font Squirrel</li>
                  </ul>
                </div>
                <div className=" ">
                  <h3 className=" text-base text-gray-900 font-semibold mb-2"> Design Resources</h3>
                  <ul className="list-unstyled text-gray-500">
                    <li className="text-gray-700 py-2">Freelencing</li>
                    <li className="text-gray-700 py-2">Design Hiring</li>
                    <li className="text-gray-700 py-2">Design Portfolio</li>
                    <li className="text-gray-700 py-2">Design Education</li>
                    <li className="text-gray-700 py-2">Creative Process</li>
                    <li className="text-gray-700 py-2">Design Industry Trends</li>
                  </ul>
                </div>
              </div>
            </div>
            <hr className="h-px my-8 bg-gray-300 border-0 dark:bg-gray-700" />
            <div className="flex  mt-7 mb-4">
              <p className=" mr-32 text-gray-500">
                &copy; 2023 Dribbble. All rights reserved.
              </p>


              <p className=" ml-96 flex text-gray-500">
                <b className="text-black ">20,501,853</b>&nbsp; shots dribbbled &nbsp;
                <img src={icon} alt="logo" className="w-20" />
              </p>
            </div>
          </div>
        </div>
      )
}

      export default Footer
