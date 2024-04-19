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
              <input type="checkbox" id="notifications" name="notifications" className="mr-2" />
              <label for="notifications" className="font-semibold">Creating an account means you're okay with our <a href="#">Terms of service, Privacy Policy,</a> and our defoult <a href="#">Notification Settings.</a></label>
            </div>
            <button type="submit" className="w-full py-2 px-4 rounded-md bg-pink ">Create Account</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Sign_up



