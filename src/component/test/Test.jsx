import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { Link} from 'react-router-dom';
import { MdAccountBox } from "react-icons/md";
import { MdShoppingCart } from "react-icons/md";
import logo from '../../asset/noun-shop-logo.png'
import Search from '../search/Search';
import { MdSupportAgent } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { MdArrowDropDown } from "react-icons/md";




const Navbar = () => {


    const [isOpen, setIsOpen] = useState(false)
    const navStylez = 'text-black font-bold text-sm  px-2 py-1 hover:bg-gray-100 hover:text-gray-800 rounded-lg transition duration-300 items-center'
    const navContent = (
        <>

        <div className={navStylez}><Link to='/'>Home</Link></div>
        <div className={navStylez}><Link to='/About'>About</Link></div>
        <div className={navStylez}><Link to='/ContactUs'>Contact Us</Link></div>
        <div className={navStylez}><Link className=' flex items-center' to='/Cart'><MdShoppingCart size={23} /></Link></div> 
       

            

        </>
        
    )
  return (
    <nav className=' shadow bg-white z-40 text-black sticky top-0 w-full items-center'>
        <div className='max-w-7xl mx-auto px-2 sm:px-4  lg:px-6'>
            <div className='flex items-center justify-between h-16'>
                <div className='flex flex-row w-full justify-between'>
                    <div className='text-xl font-bold'>
                      
                      <Link to='/'><img src={logo} style={{height:50}} alt=''/> </Link>

                    </div>

                    <div>
        <Search />

    </div>
                    <div className='hidden lg:block'>
                        <div className='flex ml-10 items-baseline space-x-2'>
                            {navContent}
                        </div>
                    </div>
                </div>
                <div className='lg:hidden'>
                    <button onClick={()=>{setIsOpen(!isOpen)}} type='button'>
                      {isOpen ? <IoMdClose /> : <GiHamburgerMenu />}
                    </button>
                </div>
            </div>
        </div>
        {
            isOpen && (
                <div className='flex flex-col gap-y-2 lg:hidden px-4 sm:px-6 pb-2'>
                    {navContent}
                </div>
            )
        }
    </nav>
  )
}

export default Navbar