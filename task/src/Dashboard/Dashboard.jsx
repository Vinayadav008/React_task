import React from 'react'
import email from '../images/icon.jpg'

function Dashboard() {
  return (
   
        <div class=" text-center px-64 py-32">
            <div class="justify-center">
                <b class="text-3xl p-4">Please verify your email...</b>
                <img src={email} alt="logo" className="w-5" />
                   {/* <img class=" mx-60 mt-4" src="icon.jpg" alt=""> */}
                  <p class="p-4">Please verify your email address. We've sent a confirmation email to:</p>
                  <b  class="p-3">account@refero.design</b>
                  <p  class="p-3">Click the confirmation link in that email to begin using Dribbble.</p>
                  <p  class="p-3">Didn't receive the email? Check your Spam folder, it may have been caught by a filter. If you still don't see it, you can <a href="#" class="font-medium text-primary">resend the confirmation email.</a></p>
                  <p>Wrong email address? <a href="#" class="font-medium text-primary">Change it.</a></p>
            </div>
        </div>
  )
}

export default Dashboard
