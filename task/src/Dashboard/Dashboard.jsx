import React from 'react'
import email from '../images/icon.jpg'
import Header  from '../Home/Header'
import Footer from '../Home/Footer'
function Dashboard() {
  return (
   <>
   <div>
   <Header></Header>
    {/* // start */}

        <div className="text-center py-28 ">
            <div className="flex flex-col justify-center items-center gap-4 p-2">
                < b className="text-2xl ">Please verify your email...</b>

                {/* Email image */}
                <img src={email} alt="logo" className="w-32 " />

                {/* Pargraphs */}
                  <p className="text-secondary font-semibold">Please verify your email address. We've sent a confirmation email to:</p>
                  <b className="">account@refero.design</b>
                  <p className="text-secondary font-semibold">Click the confirmation link in that email to begin using Dribbble.</p>
                  <p className="text-secondary font-semibold max-w-2xl">Didn't receive the email? Check your Spam folder, it may have been caught by a filter. If  you still don't see it, you can <a href="#" className="font-medium text-primary">resend the confirmation email.</a></p>
                  <p>Wrong email address? <a href="#" className="font-medium text-primary">Change it.</a></p>
            </div>
        </div>
        <Footer></Footer>
        </div>
</>
        // End
  )
}

export default Dashboard
