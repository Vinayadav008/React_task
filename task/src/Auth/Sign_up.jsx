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


