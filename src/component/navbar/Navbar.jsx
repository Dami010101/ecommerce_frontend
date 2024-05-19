import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from 'react-router-dom';
import { MdAccountBox } from "react-icons/md";
import { MdShoppingCart } from "react-icons/md";
import logo from '../../asset/Logo.png'
import { IoSearchOutline } from "react-icons/io5";





const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const navStylez = 'text-black font-bold text-sm  px-2 py-1 hover:bg-gray-100 hover:text-gray-800 rounded-lg transition duration-300 list-none'
    const navStylezInput = 'list-none'
    const navStylezSelect = 'list-none'
    const navStylezButton = 'text-gray-100 bg-gray-800 font-bold text-sm  px-2 py-1  border-2 border-gray-100 hover:bg-black rounded-lg transition duration-300 list-none text-center'
    const navContent = (
        <>
        <li className={navStylezInput}>      
        <div className='flex bg-gray-300 w-[300px] p-1 px-3 py-1 items-center mt-2 rounded-full'>
        <input type='text' className='px-3 py-1 w-[95%] outline-none bg-gray-300 rounded-full'/>
        <IoSearchOutline />
      </div>
      </li>
        <li className={navStylez}><Link to='/'>Home</Link></li>
        <li className={navStylez}><Link to='/'>About</Link></li>
        <li className={navStylez}><Link to='/Productdetails'>Contact Us</Link></li>
        <li className={navStylez}><Link className=' flex items-center' to='/'><MdShoppingCart size={18} /></Link></li>
        <li  className={navStylezSelect}>
            <select name="Support" id="Support" className='text-white bg-gray-800 font-bold text-sm  px-2 py-1 hover:bg-black rounded-lg transition duration-300  '>
            <option value="Support">Support</option>
            <option value="support_centre"><Link to='/Productdetails'>Support Centre</Link></option>
            <option value="place_an_order">Place an order</option>
            <option value="cancel_an_order">Cancel an order</option>
            </select>
        </li>
        <li className={navStylezButton}><button><Link className='flex items-center' to='/Signin'><MdAccountBox size={18}/>Sign In</Link></button></li>
        </>
    )
  return (
    <nav className='bg-white text-black sticky w-full'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='flex items-center justify-between h-16'>
                <div className='flex flex-row w-full justify-between'>
                    <div className='text-xl font-bold'>
                    <Link to='/'><img src={logo} alt=''/> </Link>
                    </div>
                    <div className='hidden md:block'>
                        <div className='flex ml-10 items-baseline space-x-2'>
                            {navContent}
                        </div>
                    </div>
                </div>
                <div className='md:hidden'>
                    <button onClick={()=>{setIsOpen(!isOpen)}} type='button'>
                    <GiHamburgerMenu color='gray'/>
                    </button>
                </div>
            </div>
        </div>
        {
            isOpen && (
                <div className='flex flex-col gap-y-2 md:hidden px-4 sm:px-6 pb-2'>
                    {navContent}
                </div>
            )
        }
    </nav>
  )
}

export default Navbar