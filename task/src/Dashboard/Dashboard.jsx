import React from 'react'
import email from '../images/icon.jpg'

function Dashboard() {
  return (
   
        <div className=" text-center px-52 py-14">
            <div className="justify-center">
                <b className="text-2xl p-4">Please verify your email...</b>
                <img src={email} alt="logo" className="w-32 mx-72 pt-5" />
                  <p className="p-4">Please verify your email address. We've sent a confirmation email to:</p>
                  <b className="p-3">account@refero.design</b>
                  <p className="p-3">Click the confirmation link in that email to begin using Dribbble.</p>
                  <p className="p-3">Didn't receive the email? Check your Spam folder, it may have been caught by a filter. If you still don't see it, you can <a href="#" className="font-medium text-primary">resend the confirmation email.</a></p>
                  <p>Wrong email address? <a href="#" className="font-medium text-primary">Change it.</a></p>
            </div>
        </div>
  )
}

export default Dashboard
