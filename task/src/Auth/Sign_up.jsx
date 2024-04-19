import React from 'react'
import signup from '../images/signImg.jpg'

function Sign_up() {
  return (
    <div>
      <div className="flex sm:flex-row items-center justify-center h-screen ">
        <div className="w-full sm:w-1/2  sm:block">
          <img src={signup} alt="logo" className="" />
        </div>
        <div className="w-full sm:w-1/2 p-6">
      <p className="text-end font-medium text-xs mb-14">
        Already a member? <a className="text-blue font-medium hover:underline" href="#">Sign In</a>
      </p>
          <h1 className="text-xl font-bold mb-4">Sign up to Dribbble</h1>
          <p class="text-xs ml-3 mb-7 font-medium text-red-500">• Username has already been taken.</p>
                
          <form className="space-y-4">
            <div className='flex mb-4'>
              <div className='mr-28'>
              <label for="name" className="block mb-2 font-semibold">Name</label>
              <input type="text" id="name" name="name" value="John" required className="w-full px-3 py-2 border rounded-md" />
          
              </div>
              <div>
              <label for="username" className="block mb-2 font-semibold">Username</label>
              <input type="text" id="username" name="username" value="John" required className="w-full px-3 py-2 border rounded-md " />
             
              </div>
            </div>
            <div>
              <label for="email" className="block mb-2 font-semibold">Email</label>
              <input type="email" id="email" name="email" value="account@refero.design" required className="w-full px-3 py-2 border rounded-md " />
            </div>
            <div>
              <label for="password" className="block mb-2 font-semibold">Password</label>
              <input type="password" id="password" name="password" placeholder='6+ characters' minlength="6" required className="w-full px-3 py-2 border rounded-md" />
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="notifications" name="notifications" className="mr-2 mb-5 text-4xl" />
              <label for="notifications" className="text-sm">Creating an account means you're okay with our <a href="#" className="text-blue font-medium">Terms of service, Privacy Policy,</a> and our defoult <a href="#" className="text-blue font-medium" >Notification Settings.</a></label>
            </div>
            <div class=" items-center py-4 ">
               <button class="bg-primary hover:bg-primary font-medium py-2 px-9 rounded-lg text-white text-sm " type="button">
               Create Account
               </button>
               </div>
               <div>
                <label className='text-xs text-gray'>This site is protected by reCAPTCHA and the Google <a href="#" className="text-blue font-medium">Privacy Policy</a> and <a href="#" className="text-blue font-medium">Terms of services</a> apply.</label>
               </div>
               
          </form>
        </div>
      </div>
    </div>
  )
}

export default Sign_up




{/* <div class="flex items-center justify-center h-screen bg-gray-100">
    <div class="w-full max-w-xl">
        <div class="flex items-center justify-center mb-6">
        <img src={signup} alt="logo" className="relative flex py-2  mt-2  " />
        </div>
        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div class="flex items-center mb-4">
                <div class="w-1/3">
                <label class="block text-gray-700 font-bold mb-2" for="name">
                Name
                </label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="John"/>
                </div>
                <div class="w-2/3">
                <label class="block text-gray-700 font-bold mb-2" for="username">
                Username
                </label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" disabled/>
                <p class="text-xs italic text-red-500">Username has already been taken.</p>
                </div>
                </div>
                <div class="mb-4">
                <label class="block text-gray-700 font-bold mb-2" for="email">
                Email
                </label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="account@refero.design"/>
            </div>
            <div class="mb-6">
                <label class="block text-gray-700 font-bold mb-2" for="password">
                    Password
                    </label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************"/>
                <p class="text-xs italic text-gray-500">6+ characters</p>
                </div>
                <div class="flex items-center mb-6">
                <input class="form-checkbox" type="checkbox" value="true" id="notifications"/>
                <label class="block text-gray-700 font-bold" for="notifications">
                I agree to the <a class="text-blue-500 hover:underline" href="#">Terms of Service</a>, <a class="text-blue-500 hover:underline" href="#">Privacy Policy</a>, and the default <a class="text-blue-500 hover:underline" href="#">Notification Settings</a>.
                </label>
                </div>
            <div class="flex items-center justify-center">
               <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
               Create Account
               </button>
               </div>
               </form>
        <p class="text-center text-gray-500 text-xs">
            Already a member? <a class="text-blue-500 hover:underline" href="#">Sign In</a>
        </p>
      </div> 
      </div>
    */}