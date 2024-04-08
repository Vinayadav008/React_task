import React, { useState } from 'react';
import logo from '../images/logo1.png'

function Profile() {
    const [profile, setProfile] = useState(null);
    const [location, setLocation] = useState('');
    
    
    // Function to take image 
    const imageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            let reader = new FileReader();
            reader.onload = (e) => {
                setProfile(e.target.result);
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    };

    // Function to check location is picked
    const handleLocationChange = (event) => {
        setLocation(event.target.value);
    };
    
    // function to check profile and location both are filed
    const isFormValid = () => {
        return profile && location.trim() !== '';
    };
    
    const nextLink = isFormValid() ? '/dribble' : ''; 
    
    return (
        <>
            <div className=''>
                {/* Logo  */}
                <div className="flex-shrink-0">
              <a href="#" className="font-bold text-xl text-gray-800">
                <img src={logo} alt="logo" className="relative flex  p-2 w-24 mt-2" />
              </a>
            </div>
                <div className='flex justify-center p-2'>
                    <div className=''>
                        {/* Heading  */}
                        <h1 className='font-bold text-xl sm:text-3xl'>Welcome! Let's create your profile</h1>
                        <p className='text-secondary font-semibold text-lg sm:text-lg mt-2'>Let others get to know you better! You can do these later</p>

                        <div className='pt-8'>
                            <form>
                                {/* Input for image  */}
                                <h2 className='font-bold text-lg sm:text-xl'>Add an avatar</h2>
                                <div className="flex gap-8 pt-4 items-center">
                                    <div className={`${profile ? '' : 'border-2'}   border-secondary w-32 h-32 flex items-center justify-center border-dotted rounded-full `}>
                                        <svg className={`${profile ? 'hidden' : 'w-4'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M149.1 64.8L138.7 96H64C28.7 96 0 124.7 0 160V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H373.3L362.9 64.8C356.4 45.2 338.1 32 317.4 32H194.6c-20.7 0-39 13.2-45.5 32.8zM256 192a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"/></svg>
                                        <img src={profile} alt="" className={`${profile ? '' : 'hidden'} rounded-full h-full w-full`} />
                                    </div>
                                    <div className='space-y-6'>
                                        <div>
                                            <label htmlFor="profile" className='border border-secondary rounded-lg shadow-sm px-4 py-1.5 font-bold'>Choose image</label>
                                            <input onChange={imageChange} type="file" id='profile' name="profile" className='hidden' required />
                                        </div>
                                        <div className='text-secondary font-semibold flex items-center'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="1.4em" height="1.4em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m10 17l5-5l-5-5" /></svg>
                                            <p>Or choose one of our defaults</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Input for location */}
                                <div className='mt-8'>
                                    <h2 className='font-bold text-lg sm:text-xl'>Add your location</h2>
                                    <div className='mt-4'>
                                        <input className='w-full border-b border-secondary outline-none' type="text" name="location" id="location" value={location} onChange={handleLocationChange} required placeholder='Enter a Location' />
                                    </div>
                                </div>

                                {/* Submit button */}
                                <div className='my-10'>
                                    <a href={nextLink} className={`bg-primary text-white px-20 rounded-md py-1.5 ${isFormValid() ? '' : 'opacity-45'}`} disabled={!isFormValid()}>Next</a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Profile;
