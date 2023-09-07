import React from 'react';
import {PiAirplaneTakeoffLight} from 'react-icons/pi';
import {GoClock} from 'react-icons/go';
import {FiPhoneCall} from 'react-icons/fi';
import {BiSolidOffer} from 'react-icons/bi';
const TopBanner = () => {
    return(
        <>
        <div className='flex justify-between items-center px-4 py-2'>

        <div className='flex items-center'>
        <PiAirplaneTakeoffLight size={26} className='text-black'/>
        <h1 className='text-xl font-bold text-gray-600'>Traveller</h1>
        </div>
        
        
        <div className='hidden sm:flex m-2 px-4 text-red-600 font-bold items-center'>
        <BiSolidOffer size={26}/>
        <h2>50% Discount</h2>
        </div>
        
        <div className='flex'>
        <div className='hidden md:flex items-center px-4'>
        <GoClock size={20} className='mr-2'/>
        <p className='text-sm text-gray-700'>8AM - 5PM</p>
        </div>

        <div className='hidden md:flex items-center px-4'>
        <FiPhoneCall size={20} className='mr-2'/>
        <p className='text-sm text-gray-700'>+91-9083786321</p>
        </div>
        
        <div>
        <button className='px-4 py-2 border rounded bg-gradient-to-r from-[#0646A7] to-[#3A62AE] text-white'>
        <a href="#book">Book Now</a> 
        </button>
        </div>
        </div>
        </div>
        </>
    )
}

export default TopBanner;