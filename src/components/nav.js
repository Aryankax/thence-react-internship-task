import React from 'react'
import logo from '../images/logo.png'
import { Link } from 'react-router-dom';

function Nav() {
    return(
         <nav className='flex items-center justify-between flex-wrap border border-gray-200 rounded-full px-3 py-1 m-3 w-screen'>
            <div className='m-2 p-2'>
                <img src={logo} className="h-8 transition-transform hover:scale-x-105" alt='logo'></img>
            </div>
            <div className='buttons flex items-center gap-2'>
                <button className='border rounded-full p-5 m-1 text-sm w-36 transition-transform hover:scale-95 font-Manrope 
                transition duration-300 delay-50 hover:text-white hover:bg-black'>
                    Get Projects
                </button>
                <Link to='/login' className='border rounded-full p-5 m-1 text-sm bg-black text-white w-40 transition-transform hover:scale-95 font-Manrope 
                transition duration-300 delay-50 hover:text-black hover:bg-white'>
                Onboard Talent
                </Link>
            </div>
         </nav>
    )
}

export default Nav;