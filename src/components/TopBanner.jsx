import React from 'react';
import {PiAirplaneTakeoffLight} from 'react-icons/pi';
import {GoClock} from 'react-icons/go';
import {FiPhoneCall} from 'react-icons/fi';
const TopBanner = () => {
    return(
        <>
        <div className='flex justify-between items-center px-4 py-2'>

        <div className='flex items-center'>
        <PiAirplaneTakeoffLight size={30} className='text-black mr-2'/>
        <h1 className='text-xl font-bold text-gray-600'>Traveller</h1>
        </div>
        <div className='flex'>
        <div className='hidden sm:flex items-center px-6'>
        <GoClock size={20} className='mr-2'/>
        <p className='text-sm text-gray-700'>8AM - 5PM</p>
        </div>

        <div className='hidden sm:flex items-center px-6'>
        <FiPhoneCall size={20} className='mr-2'/>
        <p className='text-sm text-gray-700'>+91-9083786321</p>
        </div>

        <div>
        <button className='px-4 py-2 border bg-gradient-to-r from-[#0646A7] to-[#3A62AE] text-white'>
        <a href="#book">Book Now</a> 
        </button>
        </div>
        </div>
        </div>
        </>
    )
}

export default TopBanner;