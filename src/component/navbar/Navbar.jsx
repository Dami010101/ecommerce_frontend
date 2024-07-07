import React, { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from 'react-router-dom';
import { MdAccountBox, MdShoppingCart, MdSupportAgent, MdArrowDropDown } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import logo from '../../asset/noun-shop-logo.png';
import Search from '../search/Search';
import { useCart } from '../cart/CartContext';

const Navbar = () => {
  const { cartItems } = useCart();
  const cartItemCount = cartItems.reduce((count, item) => count + item.quantity, 0);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSubDropdownOpen, setIsSubDropdownOpen] = useState(false);
  const [isInnerDropdownOpen, setIsInnerDropdownOpen] = useState(false);
  const [isSuppDropdownOpen, setIsSuppDropdownOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const navStylez = 'text-black font-bold text-sm px-2 py-1 hover:bg-gray-100 hover:text-gray-800 rounded-lg transition duration-300 items-center';

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    setIsSubDropdownOpen(false);
    setIsInnerDropdownOpen(false);
  };

  const toggleSubDropdown = (e) => {
    e.stopPropagation();
    setIsSubDropdownOpen(!isSubDropdownOpen);
    setIsInnerDropdownOpen(false);
  };

  const toggleInnerDropdown = (e) => {
    e.stopPropagation();
    setIsInnerDropdownOpen(!isInnerDropdownOpen);
  };

  const toggleSuppDropdown = () => {
    setIsSuppDropdownOpen(!isSuppDropdownOpen);
  };

  const navContent = (
    <>
      <div className={navStylez}><Link to='/'>Home</Link></div>
      <div className={`${navStylez} flex items-center`}>
        <Link to="/cart" className="relative flex items-center">
          <MdShoppingCart className="h-6 w-6" />
          {cartItemCount > 0 && (
            <span className="badge badge-sm bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs absolute top-0 right-0">
              {cartItemCount}
            </span>
          )}
        </Link>
      </div>

      <div className="relative lg:hidden" onClick={toggleDropdown}>
        <button className={`${navStylez} flex items-center`}>
          <MdAccountBox size={18} />
          <span>Account</span>
          <MdArrowDropDown size={23} />
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
                      <div className="relative" onClick={(e) => e.stopPropagation()}>
                        <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={toggleInnerDropdown}>
                          Inner Staff <MdArrowDropDown size={20} className="inline" />
                        </button>
                        {isInnerDropdownOpen && (
                          <div className="mt-2 ml-4 w-full rounded-md bg-white ring-1 ring-black ring-opacity-5">
                            <div className="py-1">
                            <a href='SuperAdminSignIn' className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sign In</a>
                            <a href='SuperAdminProfile' className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Profile</a>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
      
      <div className={`${navStylez} lg:flex hidden relative`} onClick={toggleDropdown}>
        <button className='flex items-center'>
          <MdAccountBox size={18} />
          <span>Account</span>
          <MdArrowDropDown size={23} />
        </button>
        {isDropdownOpen && (
          <div className="absolute mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10 top-11 right-14">
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
                  <div className="absolute  top-11 mt-0 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-20 "> 
                    <div className="py-1">
                      <a href='SignIn' className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sign In</a>
                      <a href='SignUp' className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sign Up</a>
                      <a href='AdminProfile' className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Profile</a>
                      <a href='SignOut' className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sign Out</a>
                      <div className="relative" onClick={(e) => { e.stopPropagation(); toggleInnerDropdown(e); }}>
                        <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                          S. Admin <MdArrowDropDown size={20} className="inline" />
                        </button>
                        {isInnerDropdownOpen && (
                          <div className="absolute top-11 mt-0 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-20">
                            <div className="py-1">
                            <a href='SuperAdminSignIn' className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sign In</a>
                            <a href='SuperAdminProfile' className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Profile</a>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="relative lg:hidden" onClick={toggleSuppDropdown}>
        <button className={`${navStylez} flex items-center`}>
          <MdSupportAgent size={18} />
          <span>Support</span>
          <MdArrowDropDown size={23} />
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
      <div className={`${navStylez} lg:flex hidden relative`} onClick={toggleSuppDropdown}>
        <button className='flex items-center'>
          <MdSupportAgent size={18} />
          <span>Support</span>
          <MdArrowDropDown size={23} />
        </button>
        {isSuppDropdownOpen && (
          <div className="absolute mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10 top-11 right-1">
            <div className="py-1">
              <Link to='/' className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Support Centre</Link>
              <Link to='/Products' className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Place an Order</Link>
              <Link to='/' className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Track an Order</Link>
              <Link to='/' className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Cancel an order</Link>
            </div>
          </div>
        )}
      </div>

    </>
  );

  return (
    <nav className='shadow bg-white z-40 text-black sticky top-0 w-full'>
      <div className='max-w-7xl mx-auto px-2 sm:px-4 lg:px-6'>
        <div className='flex items-center justify-between h-16'>
          <div className='flex items-center w-full justify-between'>
            <div className='flex items-center'>
              <Link to='/'>
                <img src={logo} className='h-8' alt='Logo' />
              </Link>
              <Link to='/' className='ml-2 text-sm font-bold lg:text-lg pr-2'>shopBeta</Link>
            </div>
            <div className='flex items-center'>
              <Search />
            </div>
            <div className='hidden lg:flex lg:items-center lg:space-x-4'>
              {navContent}
            </div>
          </div>
          <div className='lg:hidden'>
            <button onClick={() => setIsOpen(!isOpen)} type='button'>
              {isOpen ? <IoMdClose size={24} /> : <GiHamburgerMenu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className='lg:hidden'>
          <div className='flex flex-col items-start px-4 py-2'>
            {navContent}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
