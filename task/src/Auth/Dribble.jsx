import React, { useState } from 'react';
import profile from '../images/pr.png';

function Dribble() {
    const translate = '-translate-y-14 transition duration-300 ease-in-out';
    const translate2 = 'relative bottom-12';
    const [isCheckedFirst, setIsCheckedFirst] = useState(false);
    const [isCheckedSecond, setIsCheckedSecond] = useState(false);
    const [isCheckedThird, setIsCheckedThird] = useState(false);
    const [check, setCheck] = useState('');

    // Function to check location is picked
    const handleLocationChange = (event) => {
        if (event && event.target) {
            setCheck(event.target.value);
        }
    };

    // function to check profile and location both are filed
    const isFormValid = () => {
        return check !== '';
    };

    const nextLink = isFormValid() ? '/home' : '';

    return (
        <div>
            {/* Logo */}
            <div>Logo</div>

            {/* Heading */}
            <div className='text-center mt-10'>
                <h1 className='font-bold text-xl sm:text-3xl'>What brings you to Dribble?</h1>
                <p className='text-secondary font-semibold text-md mt-2'>Select the options that best describe you. Don't worry, you can explore other options later</p>
            </div>

            {/* Dribble Select options Div Start */}
            <div className='mt-20 flex justify-center flex-wrap gap-6'>
                {/* First option */}
                <div className={`border rounded-md shadow-md text-center w-60 p-4 h-52 ${isCheckedFirst ? 'border-primary border-2' : 'border-secondary'}`}>
                    <div className={`${isCheckedFirst ? translate : 'transition duration-300 ease-in-out'}`}>
                        <img src={profile} alt="" />
                        <h2 className='text-md font-bold leading-4 mt-2'>I am designer looking to share my work</h2>
                    </div>
                    <div className={`${isCheckedFirst ? translate2 : ''}`}>
                        <p className={`${isCheckedFirst ? '' : 'hidden'} text-sm text-secondary font-medium leading-4`}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est beatae corporis laboriosam!</p>
                        <input className='text-primary mt-2' color='primary' type="checkbox" checked={isCheckedFirst} onChange={(event) => {
                            setIsCheckedFirst(!isCheckedFirst);
                            handleLocationChange(event);
                        }} />
                    </div>
                </div>
                {/* Second options */}
                <div className={`border rounded-md shadow-md text-center w-60 p-4 h-52 ${isCheckedSecond ? 'border-primary border-2' : 'border-secondary'}`}>
                    <div className={`${isCheckedSecond ? translate : 'transition duration-300 ease-in-out'}`}>
                        <img src={profile} alt="" />
                        <h2 className='text-md font-bold leading-4 mt-2'>I am looking to hire a designer</h2>
                    </div>
                    <div className={`${isCheckedSecond ? translate2 : ''}`}>
                        <p className={`${isCheckedSecond ? '' : 'hidden'} text-sm text-secondary font-medium leading-4`}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est beatae corporis laboriosam!</p>
                        <input className='text-primary mt-2' color='primary' type="checkbox" checked={isCheckedSecond} onChange={(event) => {
                            setIsCheckedSecond(!isCheckedSecond);
                            handleLocationChange(event);
                        }} />
                    </div>
                </div>
                {/* Third options */}
                <div className={`border rounded-md shadow-md text-center w-60 p-4 h-52 ${isCheckedThird ? 'border-primary border-2' : 'border-secondary'}`}>
                    <div className={`${isCheckedThird ? translate : 'transition duration-300 ease-in-out'}`}>
                        <img src={profile} alt="" />
                        <h2 className='text-md font-bold leading-4 mt-2'>I am looking for design inspiration</h2>
                    </div>
                    <div className={`${isCheckedThird ? translate2 : ''}`}>
                        <p className={`${isCheckedThird ? '' : 'hidden'} text-sm text-secondary font-medium leading-4`}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est beatae corporis laboriosam!</p>
                        <input className='text-primary mt-2' color='primary' type="checkbox" checked={isCheckedThird} onChange={(event) => {
                            setIsCheckedThird(!isCheckedThird);
                            handleLocationChange(event);
                        }} />
                    </div>
                </div>
            </div>
            {/* Dribble Select options Div End */}

            <div className='text-center mt-10'>
                <p className={`font-bold mb-2 ${isFormValid()?'':'hidden'}`}>Anything else? You can select multiple</p>
                <a href={nextLink} className={`bg-primary text-white px-20 rounded-md py-1.5  ${isFormValid() ? '' : 'opacity-45'}`} disabled={!isFormValid()}>Finish</a>
                <p className={`text-secondary font-semibold text-sm mt-2 ${isFormValid()?'':'hidden'}`}>Or Press RETURN</p>
            </div>
        </div>
    );
}

export default Dribble;
