import {FaFacebookF} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
import {AiOutlineGooglePlus, AiOutlineBars} from 'react-icons/ai'
import {FiTwitter} from 'react-icons/fi'
import {useState} from 'react'

const NavBar = () =>{

    const [nav, setNav] = useState(false)

    const handlNav = () => {
        setNav(!nav);
    }

    return(
        <>
        <div>
        <div className='w-full min-h-[50px] flex justify-between absolute z-10 item-center text-white bg-gray-700/70'>
            <ul className='hidden sm:flex px-4'>
                <li className='p-4 text-sm'><a href="#home">Home</a></li>
                <li className='p-4 text-sm'><a href="#about">About</a></li>
                <li className='p-4 text-sm'><a href="#gallery">Gallery</a></li>
                <li className='p-4 text-sm'><a href="#contact">Contact</a></li>
            </ul>
            
            <div className='flex justify-between'>
                <FaFacebookF className='m-4'/>
                <BsInstagram className='m-4'/>
                <AiOutlineGooglePlus className='m-4'/>
                <FiTwitter className='m-4'/>
            </div>
            
            <div onClick={handlNav} className='sm:hidden z-10'>
            <AiOutlineBars size={20} className='m-4 cursor-pointer'/>
            </div>
            <div 
            className={nav
                ? ' font-bold overflow-y-hidden md:hidden ease-in duration-300 absolute text-gray-300 right-0 top-0 w-[25%] h-[80vh] bg-black/90 px-4 py-7'
                : 'absolute hidden w-full h-screen ease-in duration-300'}>
                <ul className='w-full h-full text-center pt-6'>
                <li className='p-4 text-sm text-2xl py-8'><a href="#home">Home</a></li>
                <li className='p-4 text-sm text-2xl py-8'><a href="#about">About</a></li>
                <li className='p-4 text-sm text-2xl py-8'><a href="#gallery">Gallery</a></li>
                <li className='p-4 text-sm text-2xl py-8'><a href="#contact">Contact</a></li>
                </ul>
                </div>
        </div>
        </div>
        </>
    );
}

export default NavBar;