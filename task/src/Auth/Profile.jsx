import React from 'react'
function Profile() {
    return (
        <>
            <div className='container'>
                <div>Logo</div>
                <div className='flex justify-center p-2'>
                    <div className=''>
                        <h1 className='font-bold text-xl sm:text-3xl'>Welocome! Lets create your profile</h1>
                        <p className='text-secondary font-semibold text:lg sm:text-lg'>Let other get to know you better! You can do these later</p>

                        <div className='pt-8'>
                            <form action="">
                                <h2 className='font-bold text-lg sm:text-xl'>Add an avtar</h2>
                                <div className="flex gap-8 pt-4 items-center">
                                    <div className='border-2 border-secondary text-center w-32 h-32 flex items-center justify-center border-dotted rounded-full'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32"><path fill="currentColor" d="M29 26H3a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h6.46l1.71-2.55A1 1 0 0 1 12 4h8a1 1 0 0 1 .83.45L22.54 7H29a1 1 0 0 1 1 1v17a1 1 0 0 1-1 1M4 24h24V9h-6a1 1 0 0 1-.83-.45L19.46 6h-6.92l-1.71 2.55A1 1 0 0 1 10 9H4Z" /><path fill="currentColor" d="M16 22a6 6 0 1 1 6-6a6 6 0 0 1-6 6m0-10a4 4 0 1 0 4 4a4 4 0 0 0-4-4" /></svg>
                                        {/* <img src="" alt="" className='w-full h-full rounded-full' /> */}
                                    </div>
                                    <div className='space-y-6'>
                                        <div>
                                            <label for="profile" className='border border-secondary rounded-lg shadow-sm px-4 py-2 font-semibold'>Choose image</label>
                                            <input type="file" id='profile' name="profile" className='hidden' required />
                                        </div>
                                        <div className='text-secondary font-semibold flex items-center'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="1.4em" height="1.4em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m10 17l5-5l-5-5" /></svg>
                                            <p>Or choose one of our defaults</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='mt-8'>
                                    <h2 className='font-bold tex-lg sm:text-xl'>Add your location</h2>
                                    <div className='mt-4'>
                                        <input className='w-full border-b border-secondary outline-none' type="text" name="" id="" required placeholder='Enter a Location' />
                                    </div>
                                </div>

                                <div className='my-10'>
                                    <button type="submit"className='bg-primary text-white px-20 rounded-sm py-1.5 opacity-45' >Next</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile
