import React, { useState } from 'react'
import signup from '../images/signImg.jpg'

function Sign_up() {
  const [name ,setName]=useState("John");
  const [email ,setEmail]=useState();
  const [password ,setPassword]=useState();
  const handleName = (event) => {
    setName(event.target.value);
};
  const handleEmail = (event) => {
    setEmail(event.target.value);
};
  const handlePassword = (event) => {
    setPassword(event.target.value);
};
const isFormValid = () => {
  return name && password && email !== '';
};

const nextLink = isFormValid() ? '/profile' : '';
  return (
    <div>
      <div className="flex sm:flex-row items-center">
        <div className="hidden sm:block w-full">
          <img src={signup} alt="logo" className="" />
        </div>
        <div className="p-6 w-full">
          <p className=" absolute right-4 top-2 lg:top-16 font-medium text-xs ">
            Already a member? <a className="text-blue font-medium hover:underline" href="#">Sign In</a>
          </p>
          <div className='max-w-lg'>
            <h1 className="text-xl font-bold mb-4">Sign up to Dribbble</h1>
            <p class="text-xs ml-3 mb-7 font-medium text-red">• Username has already been taken.</p>

            <form className="space-y-4">
              <div className='flex gap-4 mb-4'>
                <div className='w-full'>
                  <label for="name" className="block mb-2 font-semibold">Name</label>
                  <input onChange={handleName} type="text" id="name" name="name" placeholder="John" required className="w-full px-3 py-2 rounded-md outline-none bg-light_gray" />

                </div>
                <div className='w-full'>
                  <label for="username" className="block mb-2 font-semibold">Username</label>
                  <input type="text" id="username" name="username" disabled value={name} required className="w-full px-3 py-2  rounded-md outline-none bg-lightRed text-red" />

                </div>
              </div>
              <div>
                <label for="email" className="block mb-2 font-semibold">Email</label>
                <input onChange={handleEmail} type="email" id="email" name="email" placeholder="account@refero.design" required className="w-full px-3 py-2 rounded-md outline-none bg-light_gray" />
              </div>
              <div>
                <label for="password" className="block mb-2 font-semibold">Password</label>
                <input onChange={handlePassword} type="password" id="password" name="password" placeholder='6+ characters' minlength="6" required className="w-full px-3 py-2  rounded-md outline-none  bg-light_gray" />
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="notifications" name="notifications" className="mr-2 mb-5 text-4xl" />
                <label for="notifications" className="text-sm">Creating an account means you're okay with our <a href="#" className="text-blue font-medium">Terms of service, Privacy Policy,</a> and our defoult <a href="#" className="text-blue font-medium" >Notification Settings.</a></label>
              </div>
              <div class=" items-center py-4 ">
              <a href={nextLink} className={`bg-primary text-white px-20 rounded-md py-1.5 ${isFormValid() ? '' : 'opacity-45'}`} disabled={!isFormValid()}>Create Account</a>
              </div>
              <div>
                <label className='text-xs text-gray'>This site is protected by reCAPTCHA and the Google <br /> <a href="#" className="text-blue font-medium">Privacy Policy</a> and <a href="#" className="text-blue font-medium">Terms of services</a> apply.</label>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sign_up


