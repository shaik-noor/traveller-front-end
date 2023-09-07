import {PiAirplaneTakeoffLight} from 'react-icons/pi';
const FooterSection = () =>{
    return(        
            <div className='flex flex-col items-center mt-5'>
            <PiAirplaneTakeoffLight size={30} className='text-black mr-2'/>
            <h1 className='text-xl font-bold text-gray-700'>Traveller</h1>
            <ul className='flex item-center row-span-2'>
                <li className='p-4 pb-5 font-bold text-xl text-gray-600 '><a href="/">Home</a></li>
                <li className='p-4 pb-5 font-bold text-xl text-gray-600 '><a href="#about">About</a></li>
                <li className='p-4 pb-5 font-bold text-xl text-gray-600 '><a href="#gallery">Gallery</a></li>
                <li className='p-4 pb-5 font-bold text-xl text-gray-600 '><a href="#contact">Contact</a></li>
            </ul>
            </div>
        
    )
}

export default FooterSection;