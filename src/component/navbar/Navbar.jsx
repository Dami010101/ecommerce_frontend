import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { Link} from 'react-router-dom';
import { MdAccountBox } from "react-icons/md";
import { MdShoppingCart } from "react-icons/md";
import logo from '../../asset/noun-shop-logo.png'
import Search from '../search/Search';
// import { ProductData } from '../../pages/products/ProductData';
// import ProductDisplaySelector from '../../pages/products/ProductDisplaySelector';
import { MdSupportAgent } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { MdArrowDropDown } from "react-icons/md";




const Navbar = () => {
  // const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // const toggleDropdown = () => {
  //   setIsDropdownOpen(!isDropdownOpen);
  // };

  // const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);

  // const toggleUserDropdown = () => {
  //   setIsUserDropdownOpen(!isUserDropdownOpen);
  // };

  // const [isAdminDropdownOpen, setIsAdminDropdownOpen] = useState(false);

  // const toggleAdminDropdown = () => {
  //   setIsAdminDropdownOpen(!isAdminDropdownOpen);
  // };

  // State to manage the visibility of the Services dropdown
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // State to manage the visibility of the sub-dropdown under Services
  const [isSubDropdownOpen, setIsSubDropdownOpen] = useState(false);



          //prompt
          // const [filt, setFilter] = useState([])
          // const [search, setSearch] = useState('')
          // const handlesearch=(e)=>{
          //   setSearch(e.target.value)
          // }
          // useEffect(() => {
          //     setFilter(
          //         ProductData.filter((productData)=>(
          //             productData.product.toLowerCase().includes(search.toLowerCase())
          //         ))
          //     )
          // }, [ProductData, search])
  



  // const navigate = useNavigate()
  //   const dropDown = (navDrop)=> {
  //     navigate(`/${navDrop}`)
  //   }

// State to manage the visibility of the main dropdown menu
const [isOpen, setIsOpen] = useState(false);
// CSS styles for the navigation items
const navStylez = 'text-black font-bold text-sm px-2 py-1 hover:bg-gray-100 hover:text-gray-800 rounded-lg transition duration-300 items-center';    
    // Function to toggle the visibility of the Services dropdown
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    setIsSubDropdownOpen(false); // Close sub-dropdown when toggling main dropdown
  };

    // Function to toggle the visibility of the sub-dropdown under Services
  const toggleSubDropdown = (e) => {
    e.stopPropagation(); // Prevent event from bubbling up to the main dropdown
    setIsSubDropdownOpen(!isSubDropdownOpen);
  };
  
    // const navStylezButton = 'text-gray-100 bg-gray-800 font-bold text-sm  px-2 py-1  border-2 border-gray-100 hover:bg-black rounded-lg transition duration-300 text-center'
     
  // Navigation content including the main items and the dropdowns
    const navContent = (
        <>

        <div className={navStylez}><Link to='/'>Home</Link></div>
        {/* <div className={navStylez}><Link to='/About'>About</Link></div>
        <div className={navStylez}><Link to='/ContactUs'>Contact Us</Link></div> */}
        <div className={navStylez}><Link className=' flex items-center' to='/Cart'><MdShoppingCart size={23} /></Link></div> 
       
        {/* Services dropdown for mobile view */}
      <div className="relative lg:hidden" onClick={toggleDropdown}>
        <button className={`${navStylez} flex items-center`}>
          Services <MdArrowDropDown size={23} />
        </button>
        {isDropdownOpen && (
          <div className="mt-2 w-full rounded-md bg-white ring-1 ring-black ring-opacity-5">
            <div className="py-1">
              <Link to='/SignIn' className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Service 1</Link>
              <Link to='/Service2' className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Service 2</Link>
              <div className="relative" onClick={(e) => e.stopPropagation()}>
                <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={toggleSubDropdown}>
                  Service 3 <MdArrowDropDown size={20} className="inline" />
                </button>
                {isSubDropdownOpen && (
                  <div className="mt-2 ml-4 w-full rounded-md bg-white ring-1 ring-black ring-opacity-5">
                    <div className="py-1">
                      <a href='SignIn' className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">SubService 1</a>
                      <Link to='/SubService2' className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">SubService 2</Link>
                      <Link to='/SubService3' className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">SubService 3</Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Services dropdown for larger screens */}
      <div className={`${navStylez} lg:flex hidden relative`} onClick={toggleDropdown}>
        <button className='flex items-center'>
          Services <MdArrowDropDown size={23} />
        </button>
        {isDropdownOpen && (
          <div className="absolute mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10 top-11 right-52">
            <div className="py-1">
              <Link to='/SignIn' className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Service 1</Link>
              <Link to='/Service2' className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Service 2</Link>
              <div className="relative" onClick={(e) => { e.stopPropagation(); toggleSubDropdown(e); }}>
                <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Service 3 <MdArrowDropDown size={20} className="inline" />
                </button>
                {isSubDropdownOpen && (
                  <div className="absolute left-full top-0 mt-0 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-20">
                    <div className="py-1">
                      <a href='SignIn' className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">SubService 1</a>
                      <Link to='/SubService2' className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">SubService 2</Link>
                      <Link to='/SubService3' className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">SubService 3</Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

            {/* <div className=" relative bg-zinc-100 rounded-lg text-zinc-700 flex items-center justify-center font-bold">
            <button
            onClick={toggleDropdown}
            className="text-black focus:outline-none bg-white p-2 rounded-lg"
          >
             <span className='flex items-center gap-2'>
                <span>
                <MdSupportAgent size={18} />
                </span>
                <span>
                Support
                </span>
                <span>
                <MdArrowDropDown />
                </span>
              </span>
          </button>
          {isDropdownOpen && (
            <div className=" top-10 absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
              <a href="/" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Support Centre</a>
              <a href="/" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Place an order</a>
              <a href="/" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Track an order</a>
              <a href="/" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Cancel an order</a>
            </div>
          )}
          </div>

          
          
          <div className=" relative bg-zinc-100 rounded-lg text-zinc-700 flex items-center justify-center font-bold">
            <button
            onClick={toggleUserDropdown}
            className="text-black focus:outline-none bg-white p-2 rounded-lg"
          >
             <span className='flex items-center gap-2'>
                <span>
                <MdAccountBox size={18}/>
                </span>
                <span>
                Account
                </span>
                <span>
                <MdArrowDropDown />
                </span>
              </span>
          </button>
          {isUserDropdownOpen && (
            <div className=" top-10 absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
              <a href="SignIn" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Sign In</a>
              <a href="SignUp" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Sign Up</a>
              <a href="UserProfile" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Profile</a>
              <a href="/" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Sign Out</a>
            </div>
          )}
          </div>

          <div className=" relative bg-zinc-100 rounded-lg text-zinc-700 flex items-center justify-center font-bold">
            <button
            onClick={toggleAdminDropdown}
            className="text-black focus:outline-none bg-white p-2 rounded-lg"
          >
             <span className='flex items-center gap-2'>
                <span>
                <MdAccountBox size={18}/>
                </span>
                <span>
                Staff
                </span>
                <span>
                <MdArrowDropDown />
                </span>
              </span>
          </button>
          {isAdminDropdownOpen && (
            <div className=" top-10 absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
              <a href="AdminSignIn" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Sign In</a>
              <a href="AdminSignUp" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Sign Up</a>
              <a href="AdminProfile" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Profile</a>
              <a href="/" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Sign Out</a>
            </div>
          )}
          </div> */}

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
        {/* <Search onchangehandle={handlesearch} onchangevalue={search} /> */}
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
                    {/* <GiHamburgerMenu color='gray'/> */}
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