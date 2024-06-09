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
import { useCart } from '../cart/CartContext';




const Navbar = () => {

  //for cart
  const {cartItems} = useCart();

  // Cart items count
  const cartItemCount = cartItems.reduce((count, item) => count + item.quantity, 0);

  // State to manage the visibility of the Services dropdown
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // State to manage the visibility of the sub-dropdown under Services
  const [isSubDropdownOpen, setIsSubDropdownOpen] = useState(false);


    // State to manage the visibility of the Services dropdown
    const [isSuppDropdownOpen, setIsSuppDropdownOpen] = useState(false);

    

// State to manage the visibility of the main Account dropdown menu
const [isOpen, setIsOpen] = useState(false);

// CSS styles for the navigation items
const navStylez = 'text-black font-bold text-sm px-2 py-1 hover:bg-gray-100 hover:text-gray-800 rounded-lg transition duration-300 items-center';    
    
// Function to toggle the visibility of the Account dropdown
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    setIsSubDropdownOpen(false); // Close sub-dropdown when toggling main dropdown
  };

    // Function to toggle the visibility of the sub-dropdown under Account
  const toggleSubDropdown = (e) => {
    e.stopPropagation(); // Prevent event from bubbling up to the main Account dropdown
    setIsSubDropdownOpen(!isSubDropdownOpen);
  };



      // Function to toggle the visibility of the Support dropdown
  const toggleSuppDropdown = () => {
    setIsSuppDropdownOpen(!isSuppDropdownOpen);
    // setIsSubSuppDropdownOpen(false); // Close sub-dropdown when toggling support main dropdown
  };

     
  // Navigation content including the main items and the dropdowns
    const navContent = (
        <>

        <div className={navStylez}><Link to='/'>Home</Link></div>
        <div className={navStylez}><Link to="/cart" className="btn btn-ghost btn-circle flex">
                            <MdShoppingCart className="h-6 w-6" />
                            {cartItemCount > 0 && (
                                <span className="badge badge-sm indicator-item bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
                                {cartItemCount}
                              </span>
                              
                            )}
                        </Link></div> 


         {/* Support dropdown for mobile view */}
      <div className="relative lg:hidden" onClick={toggleSuppDropdown}>
        <button className={`${navStylez} flex items-center`}>
        <span className='flex items-center gap-2'>
                <span>
                <MdSupportAgent size={18} />
                </span>
                <span>
                Support
                </span>
        </span>  <MdArrowDropDown size={23} />
        </button>
        {isSuppDropdownOpen && (
          <div className="mt-2 w-full rounded-md bg-white ring-1 ring-black ring-opacity-5">
            <div className="py-1">
              <Link to='/' className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Support Centre</Link>
              <Link to='/' className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Place an Order</Link>
              <Link to='/' className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Track an Order</Link>
              <Link to='/' className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Cancel an Order</Link>
            </div>
          </div>
        )}
      </div>

      {/* Support dropdown for larger screens */}
      <div className={`${navStylez} lg:flex hidden relative`} onClick={toggleSuppDropdown}>
        <button className='flex items-center'>
        <span className='flex items-center gap-2'>
                <span>
                <MdSupportAgent size={18} />
                </span>
                <span>
                Support
                </span>
        </span> <MdArrowDropDown size={23} />
        </button>
        {isSuppDropdownOpen && (
          <div className="absolute mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10 top-11 right-52">
            <div className="py-1">
              <Link to='/' className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Support Centre</Link>
              <Link to='/Products' className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Place an Order</Link>
              <Link to='/' className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Track an Order</Link>
              <Link to='/' className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Cancel an order</Link>
            </div>
          </div>
        )}
      </div>


       
        {/* Account dropdown for mobile view */}
      <div className="relative lg:hidden" onClick={toggleDropdown}>
        <button className={`${navStylez} flex items-center`}>
        <span className='flex items-center gap-2'>
                <span>
                <MdAccountBox size={18}/>
                </span>
                <span>
                Accountg
                </span>
        </span>  <MdArrowDropDown size={23} />
        </button>
        {isDropdownOpen && (
          <div className="mt-2 w-full rounded-md bg-white ring-1 ring-black ring-opacity-5">
            <div className="py-1">
              <Link to='/SignIn' className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sign In</Link>
              <Link to='/SignUp' className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sign Up</Link>
              <Link to='/UserProfile' className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Profile</Link>
              <Link to='/SignOut' className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sign Out</Link>
              <div className="relative" onClick={(e) => e.stopPropagation()}>
                <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={toggleSubDropdown}>
                  Staff <MdArrowDropDown size={20} className="inline" />
                </button>
                {isSubDropdownOpen && (
                  <div className="mt-2 ml-4 w-full rounded-md bg-white ring-1 ring-black ring-opacity-5">
                    <div className="py-1">
                      <a href='SignIn' className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sign In</a>
                      <a href='SignUp' className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sign Up</a>
                      <a href='AdminProfile' className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Profile</a>
                      <a href='SignOut' className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sign Out</a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Account dropdown for larger screens */}
      <div className={`${navStylez} lg:flex hidden relative`} onClick={toggleDropdown}>
        <button className='flex items-center'>
        <span className='flex items-center gap-2'>
                <span>
                <MdAccountBox size={18}/>
                </span>
                <span>
                Account
                </span>
        </span> <MdArrowDropDown size={23} />
        </button>
        {isDropdownOpen && (
          <div className="absolute mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10 top-11 right-52">
            <div className="py-1">
              <Link to='/SignIn' className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sign In</Link>
              <Link to='/SignUp' className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sign Up</Link>
              <Link to='/UserProfile' className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Profile</Link>
              <Link to='/SignOut' className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sign Out</Link>
              <div className="relative" onClick={(e) => { e.stopPropagation(); toggleSubDropdown(e); }}>
                <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Staff <MdArrowDropDown size={20} className="inline" />
                </button>
                {isSubDropdownOpen && (
                  <div className="absolute left-full top-0 mt-0 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-20">
                    <div className="py-1">
                      <a href='SignIn' className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sign In</a>
                      <a href='SignUp' className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sign Up</a>
                      <a href='AdminProfile' className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Profile</a>
                      <a href='SignOut' className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sign Out</a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

        </>
        
    )
  return (
    <nav className=' shadow bg-white z-40 text-black sticky top-0 w-full items-center'>
        <div className='max-w-7xl mx-auto px-2 sm:px-4  lg:px-6'>
            <div className='flex items-center justify-between h-16'>
                <div className='flex flex-row w-full justify-between'>
                    <div className='text-xl font-bold'>
                      <span className='flex items-center gap-2'>
                        <span>
                        <Link to='/'><img src={logo} style={{height:50}} alt=''/> </Link>
                        </span>
                        <span>
                        <Link to='/'>shopBeta</Link>
                        </span>
                      </span>
                    </div>
                    <div>
                        <Search />
                    </div>
                    <div className='hidden lg:block'>
                        <div className='flex ml-2 items-baseline space-x-2'>
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