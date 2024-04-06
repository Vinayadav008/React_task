import React from 'react'
import profile from '../images/pr.png'
function Dribble() {
    return (
        <>
            <div className='container'>
                <div>Logo</div>
                <div className='text-center mt-10'>
                    <h1 className='font-bold text-xl sm:text-3xl'>What bring you to Dribble?</h1>
                    <p className='text-secondary font-semibold text:lg sm:text-lg'>Select the options that beset describe you. Don't worry, you can explore other options later</p>
                </div>

                <div className='mt-24 flex justify-center gap-8'>
                    <div className="border-2 border-primary rounded-md border-secondary shadow-sm text-center w-60 p-4 h-52">
                        <div className='relative bottom-14 h-28'>
                            <img src={profile} alt="" />
                            <h2 className='text-md font-bold leading-4 mt-2'>I am designer looking to share my work</h2>
                        </div>
                        <p className='text-sm text-secondary font-medium leading-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est beatae corporis laboriosam!</p>
                        <input className='text-primary mt-2' color='primary' type="checkbox" name="" id="" />
                    </div>
                    <div className="border-2 rounded-md border-secondary shadow-sm text-center w-60 p-4 h-52">
                        <div className=''>
                            <img src={profile} alt="" />
                            <h2 className='text-md font-bold leading-4 mt-2'>I am designer looking to share my work</h2>
                        </div>
                        <p className='text-sm hidden leading-4 '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est beatae corporis laboriosam!</p>
                       <input type="checkbox" name="" id="" />
                    </div>
                    <div className="border-2 rounded-md border-secondary shadow-sm text-center w-60 p-4 h-52">
                        <div className=''>
                            <img src={profile} alt="" />
                            <h2 className='text-md font-bold leading-4 mt-2'>I am designer looking to share my work</h2>
                        </div>
                        <label for="third" className='text-sm hidden leading-4  '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est beatae corporis laboriosam!</label>
                       <input type="checkbox" className='peer' name="" id="third" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dribble
